# Design System — Stigma Saloon & Nails Spa

> Category: Beauty & Lifestyle
> Warm, judgment-free beauty brand. Charcoal + lemon yellow, Playfair-serif headlines, Poppins body, sparkle ✦ signature.

## Design tokens

```css
:root{
  /* SURFACE */
  --bg: #FAF7F2;                 /* bone — primary light canvas */
  --bg-dark: #1E1E1E;            /* charcoal — primary dark canvas */
  --surface: #FFFFFF;            /* card surface on light */
  --surface-dark: #2B2B2B;       /* card surface on dark (charcoal-soft) */

  /* TEXT */
  --fg: #1E1E1E;                 /* body text on light (charcoal) */
  --fg-dark: #FAF7F2;            /* body text on dark (bone) */
  --muted: #5B5750;              /* muted text on light */
  --muted-dark: #C9C4B9;         /* muted text on dark */
  --text-brand: #F8F058;         /* lemon, brand-colored text on dark only */

  /* BORDER */
  --border: #E4DFD5;             /* hairline on light */
  --border-dark: #3A3A3A;        /* hairline on dark */

  /* ACCENT */
  --accent: #F8F058;             /* lemon — primary CTA/brand accent (60-30-10: 30%) */
  --accent-on: #1E1E1E;          /* text on lemon */
  --accent-hover: #EEE64E;
  --accent-lilac: #E098D8;       /* 10% playful accent */
  --accent-magenta: #E868A0;     /* 10% playful accent */
  --accent-lime: #E0F068;        /* 10% playful accent */

  /* TYPOGRAPHY */
  --font-display: 'Ahsing', 'Playfair Display', Georgia, serif;
  --font-body: 'Poppins', system-ui, sans-serif;

  /* TYPE SCALE */
  --text-h1: clamp(2.25rem, 4vw, 3.25rem);
  --text-h2: clamp(1.5rem, 2.6vw, 2.1rem);
  --text-h3: 1.375rem;
  --text-body-lg: 1.0625rem;
  --text-body: 1rem;
  --text-small: 0.875rem;
  --text-label: 0.75rem;
  --leading-display: 1.08;
  --leading-heading: 1.2;
  --leading-body: 1.55;
  --tracking-label: 0.14em;
  --tracking-wide: 0.06em;
  --weight-light: 300;
  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;

  /* SPACING (4px base) */
  --space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px; --space-5: 24px;
  --space-6: 32px; --space-7: 48px; --space-8: 64px; --space-9: 96px; --space-10: 128px;
  --container-max: 1160px;
  --content-max: 640px;

  /* RADIUS */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;
  --radius-pill: 999px;

  /* ELEVATION */
  --elev-card: 0 6px 20px rgba(30,30,30,0.10);
  --elev-card-lg: 0 14px 40px rgba(30,30,30,0.16);
  --elev-inset-dark: inset 0 1px 0 rgba(255,255,255,0.06);

  /* MOTION */
  --motion-fast: 150ms;
  --motion-base: 240ms;
  --motion-slow: 400ms;
  --ease-standard: cubic-bezier(.4,0,.2,1);
  --ease-out: cubic-bezier(.16,1,.3,1);

  /* LAYOUT */
  --border-hairline: 1px solid var(--border);
  --border-hairline-dark: 1px solid var(--border-dark);
}
```

Category: Beauty & Lifestyle. Hair color/styling and nail spa (Bogotá). Warm, inclusive, honest — "el salón donde transformarte no implica encajar."

## 1. Visual Theme & Atmosphere

Stigma is built on a **60-30-10 palette**: 60% charcoal/neutrals, 30% lemon yellow (`#F8F058`), 10% playful accents (lilac, magenta, lime). Charcoal (`#1E1E1E`) and lemon are the two load-bearing colors — bone white (`#FAF7F2`) is the light canvas, and surfaces alternate between solid charcoal blocks and solid bone blocks rather than mixing on one page. There are **no gradients anywhere** in the system, and **no glassmorphism or blur** — every surface is opaque, flat color.

Typography pairs a hand-licensed display serif, **Ahsing** (falls back to Playfair Display, then Georgia), for headlines only, with **Poppins** for everything else — body copy, UI, and the spaced-out uppercase label style that echoes "SALOON & NAILS SPA" in the logo lockup. Never mix more than two type families or 2–3 weights in one piece.

Real, editorial photography (warm, true-to-life, never color-graded to shift the actual hair-dye result, diverse subjects, no single beauty standard) is the dominant background treatment on marketing/social surfaces. A subtle sparkle-constellation texture is the only secondary texture allowed, applied over flat color blocks.

Two signature graphic motifs carry the brand identity across every surface:
- **The ✦ four-point sparkle** — standalone graphic signature: bullet, divider, photo accent, and copy sign-off (in magenta, lilac, or lemon).
- **The scalloped/wavy frame** — drawn from the emblem, used as a photo/testimonial container (`ScallopedFrame` component), echoed softly in generous (not pill-shaped) card corner radii.

Key characteristics:
- Charcoal `#1E1E1E` + Lemon `#F8F058` as the two load-bearing brand colors (60/30); lilac/magenta/lime strictly at 10%, used sparingly
- Never lemon or lime for small text on white — contrast fails; text is always charcoal-on-light or bone/lemon-on-charcoal
- Ahsing/Playfair Display serif for display headlines only; Poppins for everything else
- Uppercase labels always carry wide letter-spacing (`--tracking-label: 0.14em`)
- No gradients, no glassmorphism/blur, no neumorphism — flat solid color blocks with a soft, shallow lift (`--elev-card`)
- Hairline 1px low-contrast borders used sparingly; blocks are usually separated by solid color fields instead of strokes
- Generous but not pill-shaped radii on cards/photos (`--radius-md` 14px, `--radius-lg` 22px); pills (`--radius-pill`) reserved for buttons/tags/badges
- Understated motion only — standard ease-out fades/slides, no bounce or playful overshoot ("profesional pero cercano", not "juguetón")

## 2. Color Palette & Roles

**Primary**
- **Charcoal** (`#1E1E1E`): primary dark surface and primary text-on-light. The brand's neutral anchor (60%).
- **Lemon** (`#F8F058`): the brand's signature accent and primary CTA background (30%). Text on lemon is always charcoal.
- **Bone** (`#FAF7F2`): primary light canvas/surface; body text on dark surfaces.

**Accents (10%, use sparingly)**
- **Lilac** (`#E098D8`), **Magenta** (`#E868A0`), **Lime** (`#E0F068`): playful accents for the sparkle motif, badges, and small highlight moments only — never as a dominant surface color.

**Neutrals & text**
- Muted on light: `#5B5750`. Muted on dark: `#C9C4B9`.
- Charcoal-soft (`#2B2B2B`): card/surface color on dark backgrounds.
- White (`#FFFFFF`): card surface color on light backgrounds.

**Borders**
- On light: `#E4DFD5`. On dark: `#3A3A3A`. Always hairline (1px), low-contrast, used sparingly.

**Rule:** never substitute the lemon CTA for another hue on hover/press — only lighten it (`--accent-hover: #EEE64E`) or scale the element down; hue must stay constant to protect brand-color integrity.

## 3. Typography Rules

| Role | Font | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| H1 / Display | Ahsing / Playfair Display | `clamp(2.25rem, 4vw, 3.25rem)` | 600–700 | 1.08 | normal |
| H2 | Ahsing / Playfair Display | `clamp(1.5rem, 2.6vw, 2.1rem)` | 600 | 1.2 | normal |
| H3 | Playfair Display / Poppins | 1.375rem | 600 | 1.2 | normal |
| Body Large | Poppins | 1.0625rem | 400 | 1.55 | normal |
| Body | Poppins | 1rem | 400 | 1.55 | normal |
| Small | Poppins | 0.875rem | 400–500 | 1.55 | normal |
| Label (uppercase) | Poppins | 0.75rem | 600 | 1.2 | 0.14em |

Principles:
- Two families max per piece: display serif for headlines (28–46px equivalent) + Poppins for everything else.
- Uppercase labels always use `--tracking-label` (0.14em) wide letter-spacing.
- Weight range is Light (300) through Bold (700); never use more than 2–3 weights together in one composition.
- Ahsing is the confirmed, licensed primary display face; Playfair Display is a CSS fallback only, not an alternate choice.

## 4. Component Stylings

**Buttons** (`--radius-pill`, Poppins semibold 600, `transition: transform var(--motion-fast) var(--ease-standard)`)
- Primary: background `var(--accent)` (lemon), text `var(--accent-on)` (charcoal), no border. Press: scale to 0.97.
- Dark: background charcoal, text bone.
- Outline: transparent background, charcoal text, 1.5px charcoal border.
- Ghost: transparent, charcoal text, no border.
- Sizes: sm `8px 16px`/13px, md `12px 22px`/15px, lg `15px 28px`/16px.
- Disabled: opacity 0.45.

**Badges / Tags** (`--radius-pill`, Poppins semibold 600, 11px, uppercase, `--tracking-label`, padding `6px 14px`)
- Solid: tone color background (lemon/lilac/magenta/lime), charcoal text.
- Outline: transparent background, tone-colored text and 1.5px tone-colored border.

**Cards** (ServiceCard, TransformationCard, TestimonialCard)
- Flat solid surface — white on light, charcoal-soft on dark. No colored left-border accent (explicitly avoided as a generic/AI-slop pattern).
- Soft shadow (`--elev-card`), radius 14–22px.
- Hover/press: lighter tint or subtle scale only, never a hue shift.

**Brand motifs** (`SparkleAccent`, `ScallopedFrame`, `BurstShape`)
- SparkleAccent: the ✦ glyph as a reusable inline SVG element in magenta, lilac, or lemon — bullet, divider, or sign-off.
- ScallopedFrame: wavy scalloped border (from the emblem) as a photo/testimonial container.
- BurstShape: oversized wobbly starburst background shape for playful collage-style social slides, using only the existing Stigma palette.

**Icons:** linear, medium-stroke (~1.75px), soft-cornered, single-ink (charcoal or one accent color) — [Lucide](https://lucide.dev) is the closest available substitute set. No 3D, filled/noisy, or mixed icon styles. No generic emoji as icons.

## 5. Layout Principles

- Spacing scale (4px base): 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px.
- `--container-max: 1160px` for full-width sections; `--content-max: 640px` for long-form reading content.
- Corner radii: 8px small, 14px medium (default card), 22px large (featured/photo blocks), 999px pill (buttons/badges).
- Shadows stay soft and shallow (`--elev-card`, `--elev-card-lg`) — never heavy, deep, or neumorphic.
- Borders are hairline (1px) and low-contrast; prefer separating blocks with solid color fields over strokes.

## 6. Motion

- No bounce, no playful overshoot — motion stays understated and professional-but-warm.
- Standard transitions: `var(--motion-fast)` 150ms for micro-interactions (button press), `var(--motion-base)` 240ms for standard UI transitions, `var(--motion-slow)` 400ms for larger reveals.
- Easing: `--ease-standard` `cubic-bezier(.4,0,.2,1)` for UI state changes, `--ease-out` `cubic-bezier(.16,1,.3,1)` for entrances/reveals.
- Hover/press states: lighter tint of the lemon CTA on hover, scale-down to 0.97–0.98 on press. Never a hue change.

## 7. Voice & Content

- **Register:** tuteo (informal "tú"), never corporate or cold — "ese amigo seguro y cálido que te dice la verdad sin hacerte sentir mal."
- **Four voice attributes:** cálida y cercana · honesta y directa · inclusiva y sin juicios · con actitud y propósito.
- **Say:** auténtico, libre, sin juicios, tú, color, transformación, expresión, comunidad, familia, atrévete, bienestar, confianza, real, juntos, tu estilo.
- **Never say:** defecto, arreglar, "normal", corregir, debes, perfecto/imperfección, anti-edad, tapar, disimular, estándar — or anything shame-adjacent about appearance.
- **Signature sign-off:** the ✦ sparkle closes copy, almost like a signature; ♥ appears occasionally in warmer, closer messages.
- **Structure:** short lines, direct sentences, little filler; honesty over hard-selling.
- **Emoji:** only ✦ and occasional ♥ as brand-voice punctuation — never generic emoji rows.
- **Hashtags:** lowercase, sparse, locality + niche (e.g. `#peluqueriabogota`, `#haircolombia`) — not stacked walls of tags.

Example lines:
> "No le cambiamos el pelo. Le devolvimos las ganas de mirarse al espejo. ♥✦"
> "Aquí nadie tiene que explicarse. Llegas como eres y te vas siendo más tú. Eso es Stigma. ✦"
> "POV: por fin encontraste un salón donde no te miran raro por pedir el color que quieres. ✦"

---

*Full source material (brand manual PDFs, components, UI kits, tokens) lives alongside this file in this repository.*
