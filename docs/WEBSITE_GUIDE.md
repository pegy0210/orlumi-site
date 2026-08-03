# Orlumi Website Guide

## Purpose

`orlumi.app` is the official home of the Orlumi brand and all current and future Orlumi worlds. It is not a landing page for one game and must not be redesigned around whichever title releases first.

## Primary Goals

The website must:

- establish Orlumi as a recognisable independent game brand
- introduce current worlds without implying a fixed release order
- provide a stable official website for stores, press, support and legal pages
- allow new worlds to be added without rebuilding the brand homepage
- communicate warmth, curiosity and quiet mystery before detailed information

## Homepage Structure

Recommended order:

1. Brand hero
2. Our Worlds
3. About Orlumi
4. Brand values or creative philosophy
5. Contact and legal footer

Optional future sections:

- latest release
- news or development notes
- press kit
- support
- newsletter

Do not add these until there is real content and a maintenance plan.

## Hero

The hero introduces Orlumi, not a specific title.

Required elements:

- Orlumi wordmark or logo
- primary line: **Small worlds. Gentle discoveries.**
- concise supporting sentence
- one calm action leading to `Our Worlds`
- environmental artwork connected to the ancient tree motif

The tree should not be shown as a labelled diagram. Prefer partial branches, roots, canopy fragments, shadows or distant floating worlds. The user should feel that the world is larger than the visible frame.

## Our Worlds

Use the heading **Our Worlds** rather than **Games** in brand-facing areas.

Each world card should include:

- official title
- one-line identity
- current truthful status
- distinct visual scene
- destination link only when a useful detail page exists

Do not:

- invent release dates
- use fake store buttons
- imply that one title defines the whole brand
- force all worlds into identical moods

World order may change according to release readiness. The component structure must support reordering without redesign.

## Individual World Pages

Planned paths:

- `/little-explorer/`
- `/petal-nook/`

A world page may include:

- title and key art
- concise premise
- official screenshots
- platform and status
- store link when live
- support information
- world-specific privacy details when necessary

Each page may develop its own atmosphere while retaining Orlumi navigation, typography discipline and footer.

## Scroll Rhythm

The page should feel like entering and moving through a quiet illustrated world.

Use:

- generous section spacing
- clear visual pauses
- gradual changes in scenery or background tone
- limited text width
- a stronger visual moment at the hero and world cards

Avoid:

- dense marketing stacks
- repeated full-width calls to action
- excessive cards
- abrupt high-contrast section changes
- long blocks of centred body text

## Footer

The footer may suggest roots, evening light or the lower part of the same unseen tree, but it must remain usable.

Required:

- Orlumi name
- contact email
- privacy link
- copyright

Add Terms, Support and Press only when the corresponding pages exist.

## Responsive Behaviour

Mobile is a first-class layout, not a compressed desktop version.

- Hero text remains readable without text over complex art.
- World cards stack vertically.
- Navigation becomes a clear accessible menu.
- Decorative motion is reduced on lower-power devices and when `prefers-reduced-motion` is enabled.
- Touch targets must be at least 44 by 44 CSS pixels.

## Performance

The website should remain light and reliable.

- Prefer optimised WebP or AVIF images with fallbacks where appropriate.
- Avoid autoplay video on the homepage.
- Avoid large JavaScript frameworks unless the site genuinely needs them.
- Lazy-load non-critical images.
- Reserve image dimensions to prevent layout shift.
- Keep decorative effects CSS-driven where practical.

## Accessibility

- Maintain WCAG AA text contrast.
- Every interactive element must work with keyboard navigation.
- Decorative art receives empty alternative text; meaningful art receives concise descriptions.
- Do not rely on colour alone for status.
- No flashing, rapid light changes or distracting continuous motion.

## Expansion Rule

When a new Orlumi title is announced:

1. Add it to the content data or world-card structure.
2. Give it a distinct visual identity within the shared design system.
3. Use a truthful status.
4. Add a detail page only when enough verified content exists.
5. Do not rewrite the brand hero unless the Orlumi brand itself changes.

## Anti-Patterns

Never turn the homepage into:

- a single-game product page
- a corporate company profile
- a generic app template
- a noisy children’s portal
- a lore encyclopedia
- a placeholder page with non-functional promises