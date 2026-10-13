# Stigma — Design System

**Stigma Saloon & Nails Spa** is a hair color/styling and nail spa in Bogotá (Galerías / Chapinero / Teusaquillo). Positioning: "el salón donde transformarte no implica encajar" — high-end color and styling with honest advice, in a judgment-free space. Brand purpose: eliminate the stigmas around beauty. Primary content engine is **Instagram + TikTok**, with carousels (transformation/color content) as the best-performing format — this system exists mainly to produce well-branded carousels and social content for the Bogotá beauty niche, plus a lightweight marketing site and reusable UI primitives.

**Sources provided** (stored under `uploads/`, referenced but not assumed accessible to future readers):
- `uploads/Manual_de_Marca_Stigma.pdf` — full 36-page internal brand manual (v1.0, 2026): brand essence, audience, positioning, visual identity, photo/video direction, voice, applications, 12-month plan. This is the ground truth for everything below.
- `uploads/Stigma_emblema.png` — scalloped badge emblem (316×316, low-res — flagged in the manual itself as needing a vector rebuild).
- `uploads/Stigma_wordmark_horizontal.png` — horizontal lockup (342×91).
- No Figma file, codebase, or slide deck was attached — this is a brand-guidelines-only build. Components below are an authored standard set sized to the brand's actual needs (social templates + a simple marketing site), not copied from an existing UI.

## Brand essence
- **Purpose:** eliminar los estigmas alrededor de la belleza.
- **Archetype:** Rebelde/Outlaw, supported by Creador + Cuidador.
- **Personality:** auténtica, cálida, con actitud, inclusiva, creativa, honesta, libre, cercana.
- **Tagline:** "Redefiniendo la belleza, juntos." / support line: "belleza sin estigmas."
- **Audience:** 20–40 (core 24–35), Bogotá-based, diverse identities, active on IG/TikTok, values authenticity over imposed trends, has felt judged by traditional salons.

## Index — what's in this project
- `styles.css` — root stylesheet, imports everything under `tokens/`.
- `tokens/colors.css`, `typography.css`, `spacing.css`, `effects.css` — design tokens.
- `assets/` — logo emblem + horizontal wordmark (originals, low-res PNG).
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand marks) shown in the Design System tab.
- `components/core/` — Button, Badge/Tag.
- `components/cards/` — ServiceCard, TransformationCard, TestimonialCard.
- `components/brand/` — SparkleAccent, ScallopedFrame, BurstShape (signature graphic motifs).
- `ui_kits/website/` — one-page marketing site recreation (hero, services, transformation gallery, testimonial, booking CTA, footer).
- `ui_kits/instagram-carousel/` — interactive click-through of a branded Instagram carousel (hook, before/after, tip, CTA slide types) since carousels are the account's primary content format.
- `SKILL.md` — portable skill file for reuse in Claude Code.

## Fonts
- **Display serif** → **Ahsing** (`assets/fonts/ahsing-regular.otf`, `@font-face` in `tokens/typography.css`, falls back to Playfair Display then Georgia). This is the brand's actual chosen display face (confirmed by the client), used for headlines and brand phrases.
- **Text/UI sans** → **Poppins** (the manual's own chosen typeface — Light/Regular/Medium/SemiBold), loaded from Google Fonts.
- **✅ License:** confirmed — the client holds a valid commercial license for Ahsing (Typogama). Cleared for production use across web, social, and print. `assets/fonts/ahsing-regular.otf` is wired (updated glyph set — user replaced the file to fix the lowercase "e"). as the primary display face; Playfair Display remains only as the CSS fallback if the file fails to load.

## Content fundamentals (voice & tone)
- **Register:** tuteo (informal "tú"), never corporate or cold. Talks like "ese amigo seguro y cálido que te dice la verdad sin hacerte sentir mal."
- **Four voice attributes:** cálida y cercana · honesta y directa · inclusiva y sin juicios · con actitud y propósito.
- **Say:** auténtico, libre, sin juicios, tú, color, transformación, expresión, comunidad, familia, atrévete, bienestar, confianza, real, juntos, tu estilo.
- **Never say:** defecto, arreglar, "normal", corregir, debes, perfecto/imperfección, anti-edad, tapar, disimular, estándar, or anything that shames appearance.
- **Signature sign-off:** the ✦ sparkle closes copy, almost like a signature mark. ♥ appears occasionally in warmer, closer messages (DMs, captions).
- **Structure:** short lines, direct sentences, little to no filler; honesty over hard-selling (e.g. recommending two sessions instead of one rushed one).
- **Real examples from the manual:**
  - IG transformation: "No le cambiamos el pelo. Le devolvimos las ganas de mirarse al espejo. ♥✦"
  - IG community: "Aquí nadie tiene que explicarse. Llegas como eres y te vas siendo más tú. Eso es Stigma. ✦"
  - TikTok hook: "POV: por fin encontraste un salón donde no te miran raro por pedir el color que quieres. ✦"
  - Bio: "Peluquería & spa de uñas en Bogotá ✦ Redefiniendo la belleza, juntos ✦ Reserva tu cita ↓"
  - WhatsApp (saying no gracefully): "Te soy sincera/o: para lograr ese tono cuidando tu cabello, lo ideal es hacerlo en dos sesiones. Prefiero recomendarte lo que te va a dejar el mejor resultado, no lo más rápido. ♥"
- **Emoji:** not used as decoration/filler — only the ✦ sparkle and occasional ♥ as brand-voice punctuation, never generic emoji rows.
- **Hashtags:** lowercase, sparse, locality + niche (#peluqueriabogota, #haircolombia, #fyp) — not stacked walls of tags.

## Visual foundations
- **Palette (60-30-10):** 60% charcoal/neutrals, 30% lemon yellow, 10% accents (lilac, magenta, lime). Charcoal `#1E1E1E` and Lemon `#F8F058` are the two load-bearing colors; bone white `#FAF7F2` is the light surface; lilac/magenta/lime are playful accents, used sparingly. **Never** use lemon or lime for small text on white — contrast fails; text is always charcoal-on-light or bone/lemon-on-charcoal.
- **Type:** two families max per piece — Playfair Display (serif, display/headlines only, 28–46pt equivalent) + Poppins (everything else: body, UI, the spaced-out all-caps descriptor style). Never mix more than 2–3 weights in one piece. Uppercase labels always carry wide letter-spacing (mirrors "SALOON & NAILS SPA" in the logo).
- **Backgrounds:** solid color blocks from the palette (mostly charcoal or bone), not gradients — the manual never shows a gradient anywhere. Real, editorial photography is the dominant background treatment for social/marketing surfaces; sparkle-constellation textures are used as a subtle secondary texture on flat color blocks.
- **Animation:** the manual defines none explicitly (it's a static brand manual); treat motion as understated — standard ease-out fades/slides, no bounce or playful overshoot, consistent with "profesional pero cercano" rather than "juguetón."
- **Hover/press states:** no source spec; systemized here as a lighter tint of the lemon CTA on hover, a subtle scale-down (0.98) on press — kept minimal, never a color-hue change (protects brand-color integrity per the "no cambies el amarillo por otro tono" rule).
- **Borders:** hairline 1px, low-contrast (`--border-on-light` / `--border-on-dark`) — used sparingly; the brand generally separates blocks with solid color fields instead of strokes.
- **Shadows:** soft and shallow (`--shadow-card`), never heavy or neumorphic — cards read as flat color blocks with a light lift, not deep 3D.
- **Corner radii:** generous but not pill-shaped by default (`--radius-md` 14px, `--radius-lg` 22px) for cards/photos, echoing the wavy scalloped logo frame without literally scalloping every card. Buttons/tags use `--radius-pill` for a soft, human feel.
- **Signature shapes:** the **scalloped/wavy frame** (from the emblem) doubles as a photo/testimonial container — see `ScallopedFrame`. The **four-point sparkle ✦** is the standalone graphic signature — bullet, divider, photo accent, caption sign-off — in magenta, lilac, or lemon.
- **Transparency/blur:** not a feature of this brand — no glassmorphism or blur anywhere in the manual; surfaces are opaque solid color.
- **Imagery color vibe:** warm-real, editorial-but-real (not overly retouched), true-to-life hair color (never color-graded to shift the actual dye result), natural/soft key light with controlled directional light for color reveals; diverse subjects always, no single beauty standard.
- **Cards:** flat solid surface (white or charcoal-soft), soft shadow, 14–22px radius, no colored left-border accent (explicitly the kind of AI/generic-slop treatment this brand should avoid).

## Iconography
- The manual specifies a **linear, medium-stroke, soft-cornered, single-ink** icon style (charcoal or one accent color per icon), used for services/process steps/story highlight covers — explicitly avoiding 3D, filled/noisy, or mixed icon styles.
- No icon font, sprite sheet, or custom SVG set was provided in the source material.
- **Substitution:** [Lucide](https://lucide.dev) icons are the closest CDN-available match (rounded joins, consistent ~1.75px medium stroke, single-color line icons) — linked via CDN in UI kits/components rather than hand-drawn. This is a flagged substitution; swap in a real Stigma icon set if the salon commissions one.
- The **✦ four-point sparkle** functions as the brand's own "icon" — a bespoke glyph, not from any icon set (recreated as inline SVG since it's a brand mark, not a UI icon).
- No emoji-as-icon usage in the source; the ✦ and occasional ♥ are voice punctuation, not interface icons.

## Intentional additions
No component source was attached, so all components are an authored standard set. Three are brand-specific rather than generic-UI: **SparkleAccent** (the ✦ motif as a reusable element), **ScallopedFrame** (the wavy emblem border as a photo/content container) — both directly recreate named motifs from the manual's "sistema gráfico" page — and **BurstShape** (an oversized wobbly starburst, added at the client's request for playful Y2K-collage carousel slides: a bold background shape layered behind a cutout/transparent-background prop photo and oversized type). BurstShape uses only the existing Stigma palette, not the colors of any reference image shown.

### Components list
Button, Badge, ServiceCard, TransformationCard, TestimonialCard, SparkleAccent, ScallopedFrame, BurstShape.

## Caveats / asks
- Logo files are low-res PNG (316×316 / 342×91) with a soft/slightly blurred edge — the manual itself calls out that a vector rebuild (SVG/AI) is the top pending investment for large-format use (signage, vinyl). Anything printed large should wait on real vector files.
- No monochrome (black/white) logo lockups or an isolated symbol-only (✦/"S") file were provided, only the two color emblem/wordmark versions — ask for those if favicon/single-ink applications come up.
- No real product photography was provided; UI kits use image placeholders (clearly marked) rather than invented photos — drop real transformation/team photos in and the layouts are ready for them.
