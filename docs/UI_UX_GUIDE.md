# Orlumi UI/UX Guide

## Experience Principle

Every interaction should feel clear, gentle and predictable. Calm design must never reduce usability.

## Navigation

- Keep top-level navigation short.
- Use familiar labels: `Our Worlds`, `About`, `Privacy`, `Contact`.
- Indicate the current page on internal pages.
- Mobile navigation must be keyboard accessible and close after a destination is selected.
- Do not hide essential pages behind decorative interactions.

## Calls to Action

Use one primary action per visual section.

Preferred labels:

- Explore our worlds
- Discover this world
- View details
- Visit Google Play
- Contact Orlumi

A `Coming soon` control must be visually non-interactive unless it leads to a real information page.

## World Status

Use truthful, controlled vocabulary:

- In development
- Coming soon
- Available now
- Update planned
- No longer supported

Do not show release dates until confirmed for publication. Status must include text, not colour alone.

## Forms

When forms are introduced:

- request only necessary information
- provide visible labels
- explain errors next to the affected field
- preserve entered data after validation failure
- show a clear success state
- do not subscribe users to marketing without explicit consent

## Loading and Errors

The static brand homepage should not require a loading screen.

For dynamic features:

- show progress only when waiting is meaningful
- use calm factual language
- offer a next action after an error
- never blame the user
- never mask unavailable content with endless animation

## Motion and Focus

Ambient motion is decorative. Interface feedback must be immediate.

- Hover effects must also have keyboard focus equivalents.
- Scroll reveal must not keep content hidden when JavaScript fails.
- Parallax must not interfere with reading.
- Respect `prefers-reduced-motion` by disabling non-essential transforms and loops.

## Child-Friendly Design

Child-friendly does not mean visually noisy.

- Maintain stable layouts.
- Avoid accidental taps near screen edges.
- Do not use flashing rewards or aggressive attention loops.
- Keep decorative motion slow and sparse.
- Make important controls visually distinct.
- Avoid dark patterns, false scarcity and countdown pressure.

## Responsive Breakpoints

Choose breakpoints based on content failure rather than device labels. Recommended starting ranges:

- compact: below 640px
- medium: 640–959px
- wide: 960px and above

Test at narrow mobile widths, landscape mobile, tablet and desktop.

## Quality Checklist

Before release, verify:

- links work
- keyboard order is logical
- focus states are visible
- text remains readable at 200% zoom
- no horizontal overflow
- world statuses are accurate
- decorative assets do not block content
- reduced-motion mode works
- email and legal links are correct
- the page remains usable if JavaScript fails