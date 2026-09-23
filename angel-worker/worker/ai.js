const positions = {
  1: ['直接指引'],
  3: ['現況', '可採取的方向', '可能發展'],
  5: ['問題核心', '目前阻礙', '可用資源', '建議行動', '可能發展'],
};

const json = (body, status = 200) => Response.json(body, {
  status,
  headers: { 'cache-control': 'no-store' },
});

export async function handleAI(request, env, deck) {
  if (!env.AI) return json({ error: 'AI 尚未啟用，原有解讀仍可使用。' }, 503);
  if (Number(request.headers.get('content-length') || 0) > 4096) return json({ error: '問題太長。' }, 413);
  let body;
  try {
    const raw = await request.text();
    if (raw.length > 4096) return json({ error: '問題太長。' }, 413);
    body = JSON.parse(raw);
  } catch {
    return json({ error: '資料格式有誤。' }, 400);
  }
  const question = typeof body.question === 'string' ? body.question.trim() : '';
  const names = Array.isArray(body.cards) ? body.cards : [];
  if (!question || question.length > 500 || !positions[names.length] || new Set(names).size !== names.length) {
    return json({ error: '請檢查問題及牌卡。' }, 400);
  }
  const cards = names.map(name => deck.find(card => card[0] === name));
  if (cards.some(card => !card)) return json({ error: '牌卡名稱未收錄。' }, 400);

  const context = cards.map((card, i) => `${positions[cards.length][i]}：${card[0]}（${card[1]}）—${card[2]}`).join('\n');
  try {
    const output = await env.AI.run('@cf/qwen/qwen3-30b-a3b-fp8', {
      messages: [
        { role: 'system', content: '你是 Orlumi 的牌卡解讀助手。只根據問題、牌位、卡名及提供的牌義，以自然的香港繁體中文回答具體問題。牌是反思工具，不要聲稱預知未來或憑空增添牌義。先直接回答問題，再綜合牌位，最後提出一至兩個可行的下一步。避免醫療、法律或投資上的肯定結論，並提醒核對現實資料。約 180 至 300 字，不要輸出推理過程。' },
        { role: 'user', content: `我的問題：${question}\n牌卡與既定解讀：\n${context}\n請直接回答我的問題。 /no_think` },
      ],
      max_tokens: 650,
      temperature: 0.45,
    });
    const reading = String(output.response || output.choices?.[0]?.message?.content || '')
      .replace(/<think>[\s\S]*?<\/think>/g, '').trim();
    if (!reading) throw new Error('Empty AI output');
    return json({ reading: reading.slice(0, 1800) });
  } catch {
    return json({ error: 'AI 免費額度已用完或服務暫時繁忙，請稍後再試；原有解讀仍可使用。' }, 503);
  }
}
