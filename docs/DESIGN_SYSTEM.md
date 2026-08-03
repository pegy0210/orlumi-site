# Orlumi Design System

## Design Principle

Orlumi should feel calm, natural and quietly magical. Visual richness comes from layered atmosphere, proportion and detail—not saturation, glow or excessive decoration.

## Core Palette

| Token | Hex | Primary use |
|---|---|---|
| Morning | `#FFF7EA` | warm highlights and light surfaces |
| Cream | `#F3EDE3` | primary page background |
| Linen | `#E4D7C3` | secondary surfaces and borders |
| Warm Wood | `#A9876A` | grounded accents and structural details |
| Sage | `#9FAF8C` | nature accents and calm status cues |
| Blossom | `#D8B7B0` | soft emotional accent |

## Extended Colour Rules

Additional forest, sky and sunlight colours may be added when necessary, but they must:

- remain low to medium saturation
- harmonise with the core palette
- pass text contrast requirements when used behind text
- avoid sharp primary-colour combinations
- never create flashing or highly stimulating visual fields

Create semantic tokens rather than scattering raw colour values through the code.

Suggested CSS tokens:

```css
:root {
  --color-morning: #FFF7EA;
  --color-cream: #F3EDE3;
  --color-linen: #E4D7C3;
  --color-wood: #A9876A;
  --color-sage: #9FAF8C;
  --color-blossom: #D8B7B0;
  --color-ink: #4E463F;
  --color-ink-soft: #6E655D;
}
```

## Typography

Use a warm editorial serif for important display text and a highly readable humanist sans-serif for interface and body copy.

Current direction:

- Display: `Fraunces`
- Interface/body: `DM Sans`

Rules:

- Use sentence case.
- Avoid all-caps headings except very short eyebrow labels.
- Keep body copy between approximately 45 and 75 characters per line.
- Do not use thin font weights on small text.
- Hero typography may be expressive but must remain legible on mobile.

## Spacing

Use a consistent 4px base scale.

Recommended steps:

`4, 8, 12, 16, 24, 32, 48, 64, 96, 128`

Sections should use generous vertical spacing. Dense layouts are inconsistent with Orlumi.

## Layout

- Maximum content width: approximately 1200px.
- Body copy width: approximately 640–720px.
- Use asymmetry carefully to evoke illustrated composition.
- Keep strong alignment underneath decorative layers.
- Decorative elements must never obscure navigation or primary actions.

## Surfaces

Cards should resemble softly layered paper, cloth, wood or mist—not glassmorphism or glossy app panels.

Preferred:

- warm off-white surfaces
- soft, broad shadows
- subtle borders using Linen
- organic corner variation where technically practical

Avoid:

- hard black shadows
- neon outlines
- excessive blur
- sharp techno gradients
- identical card grids across every section

## Buttons and Links

Primary actions should be clear, calm and tactile.

- Minimum touch size: 44x44 CSS px.
- Use concise labels.
- Provide visible hover, focus and pressed states.
- Focus indicators must not be removed.
- Disabled and “coming soon” states must not look clickable.

## Icons

Use simple organic line icons or restrained illustrated symbols. Emoji are acceptable only as temporary development placeholders and should not define the final brand identity.

## Motion Tokens

Recommended durations:

- micro interaction: 150–240ms
- card lift/reveal: 300–500ms
- ambient drift: 8–30s

Preferred easing:

- gentle ease-out for interface responses
- smooth ease-in-out for ambient movement

Always support `prefers-reduced-motion`.

## Accessibility

- WCAG AA contrast for body text and controls.
- Never put essential text into images.
- Preserve zoom and browser text scaling.
- Do not use motion as the only way to communicate state.
- Do not place small low-contrast text over illustrated backgrounds.

## Asset Rules

Store source and exported assets separately when source files are available.

Suggested structure:

```text
assets/
  brand/
  illustrations/
  worlds/
    little-explorer/
    petal-nook/
  icons/
  social/
```

Use descriptive lowercase filenames with hyphens.