import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import worker from '../worker/index.js';

const pass = 'test-only-strong-password';
const env = {
  ORACLE_PASSWORD_HASH: createHash('sha256').update(pass).digest('hex'),
  ORACLE_SESSION_KEY: 'test-only-session-signing-key',
};
const base = 'https://angel.orlumi.app/';

function post(password) {
  return worker.fetch(new Request(base + 'login', {
    method: 'POST',
    body: new URLSearchParams({ password }),
  }), env);
}

test('the application is inaccessible without authentication', async () => {
  const response = await worker.fetch(new Request(base), env);
  const html = await response.text();
  assert.match(html, /輸入密碼/);
  assert.doesNotMatch(html, /const deck=/);
  assert.equal(response.headers.get('cache-control'), 'no-store');
});

test('rejects an incorrect password and serves all cards after sign-in', async () => {
  const rejected = await post('wrong');
  assert.match(rejected.headers.get('location'), /error=1/);
  assert.equal(rejected.headers.get('set-cookie'), null);

  const accepted = await post(pass);
  const cookie = accepted.headers.get('set-cookie');
  assert.match(cookie, /HttpOnly; Secure; SameSite=Lax/);
  const page = await worker.fetch(new Request(base, { headers: { cookie } }), env);
  const html = await page.text();
  assert.match(html, /const deck=/);
  assert.ok(html.includes("You're Ready"));
});

test('the app fails closed when secrets are missing', async () => {
  const response = await worker.fetch(new Request(base), {});
  assert.equal(response.status, 503);
});

test('AI trial requires sign-in and uses canonical card meaning', async () => {
  const payload = { question: '我應否轉工？', cards: ['Abundance'] };
  const aiRequest = cookie => new Request(base + 'api/ai-reading', {
    method: 'POST',
    headers: { 'content-type': 'application/json', ...(cookie ? { cookie } : {}) },
    body: JSON.stringify(payload),
  });
  assert.equal((await worker.fetch(aiRequest(), env)).status, 401);
  const cookie = (await post(pass)).headers.get('set-cookie');
  let calls = 0;
  const withAI = {
    ...env,
    AI: { run: async (model, input) => {
      calls++;
      assert.equal(model, '@cf/qwen/qwen3-30b-a3b-fp8');
      assert.match(input.messages[1].content, /金錢以外的資源與支持/);
      return { response: '請先盤點資源，再比較轉工選項。' };
    } },
  };
  const ok = await worker.fetch(aiRequest(cookie), withAI);
  assert.equal(ok.status, 200);
  assert.match((await ok.json()).reading, /盤點資源/);
  assert.equal(calls, 1);
  payload.cards = ['Card not in deck'];
  assert.equal((await worker.fetch(aiRequest(cookie), withAI)).status, 400);
  assert.equal(calls, 1);
});
