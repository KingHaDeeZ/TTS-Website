# Hero Font Colour & Sparkles Specification

Documentation for the top hero typography colors, violet-to-indigo gradient, and the dual four-point sparkles anchored to `"software"` (`src/components/HeroSection.tsx`).

---

## 1. Typography & Font Colour Tokens

| Element | Font Size & Weight | Tracking & Leading | Colour / Gradient |
| --- | --- | --- | --- |
| **Kicker** (`Australian web & mobile app studio`) | `text-sm sm:text-[15px]` (`14px` → `15px`), `font-medium` (`500`) | `tracking-[-0.01em]` | `text-slate-700` (`#334155`) |
| **Base Headline Ink** (`that fits the way`, `works`) | `text-[2.5rem] sm:text-[3.5rem] lg:text-[4.15rem]` (`40px` → `56px` → `66.4px`), `font-extrabold` (`800`) | `tracking-[-0.035em] leading-[1.08]` | `text-[#0F172A]` |
| **Gradient Headline Phrases** (`Bespoke software`, `your business`) | Inherits `<h1>` display scale (`Plus Jakarta Sans`, `800`) | Inherits `<h1>` (`box-decoration-clone`) | `bg-gradient-to-r from-[#9333EA] via-[#7C3AED] to-[#4F46E5] bg-clip-text text-transparent` |
| **Subheadline** | `text-base sm:text-[17px]` (`16px` → `17px`), `font-normal` (`400`) | `leading-[1.6]` | `text-slate-700` (`#334155`) |
| **Micro-caption** | `text-xs` (`12px`), `font-medium` (`500`) | Default | `text-slate-500` (`#64748B`) |

### Gradient Color Stops (`Bespoke software` & `your business`)

| Stop | Position | Hex | Role |
| --- | --- | --- | --- |
| **Start** | `0%` | `#9333EA` | Bright purple-violet lead-in |
| **Middle** | `50%` | `#7C3AED` | Saturated royal violet core |
| **End** | `100%` | `#4F46E5` | Deep violet-indigo finish (no bright blue tail) |

> `box-decoration-clone` ensures that if a gradient phrase wraps across lines on narrow mobile screens, each line receives the full `0% → 100%` gradient sweep cleanly without horizontal clipping.

---

## 2. Five-Segment Accent Hairline

Positioned `mt-3` (`12px`) below the kicker and `mb-6` (`24px` via `mt-6` on `<h1>`) above the headline:

| Segment | Size | Radius | Colour |
| --- | --- | --- | --- |
| **1** | `h-[2.5px] w-4` (`16px × 2.5px`) | `rounded-full` | `#E14D79` |
| **2** | `h-[2.5px] w-4` (`16px × 2.5px`) | `rounded-full` | `#F59E0B` |
| **3** | `h-[2.5px] w-4` (`16px × 2.5px`) | `rounded-full` | `#22C55E` |
| **4** | `h-[2.5px] w-4` (`16px × 2.5px`) | `rounded-full` | `#38BDF8` |
| **5** | `h-[2.5px] w-4` (`16px × 2.5px`) | `rounded-full` | `#3B82F6` |

---

## 3. Dual Sparkles Specification

### Anchor Mechanism
- Placed immediately after the `'e'` in `"software"` inside a zero-width inline anchor:
  `relative inline-block w-0 h-0 align-top pointer-events-none`
- `w-0 h-0` prevents the sparkles from adding horizontal space before `"that fits the way"`.
- `align-top` pins the origin to the top of the `<h1>` line box so both sparkles remain locked to `'e'` across all responsive breakpoints.

### Sparkle Geometry & Sizing

| Sparkle | Mobile Size | Desktop (`sm+`) Size | Offset (`top` / `left`) | Colour |
| --- | --- | --- | --- | --- |
| **Primary Sparkle** | `16px × 16px` (`h-4 w-4`) | `20px × 20px` (`sm:h-5 sm:w-5`) | `top-0 sm:top-0.5 left-0.5` (`0–2px` down, `2px` right) | `text-violet-500` (`#8B5CF6`) |
| **Secondary Sparkle** | `10px × 10px` (`h-2.5 w-2.5`) | `12px × 12px` (`sm:h-3 sm:w-3`) | `-top-3 sm:-top-3.5 left-4 sm:left-5` (`-12px to -14px` up, `16–20px` right) | `text-violet-600` (`#7C3AED`) |

- **SVG `viewBox`**: `0 0 24 24`
- **4-Point Star Path**: `M12 0C12 7.2 16.8 12 24 12C16.8 12 12 16.8 12 24C12 16.8 7.2 12 0 12C7.2 12 12 7.2 12 0Z`

---

## 4. Code Element (JSX)

```tsx
{/* Display Headline */}
<h1 className="mt-6 text-[2.5rem] sm:text-[3.5rem] lg:text-[4.15rem] font-extrabold tracking-[-0.035em] leading-[1.08] text-[#0F172A] [text-wrap:balance] mx-auto max-w-[16ch]">
  <span className="bg-gradient-to-r from-[#9333EA] via-[#7C3AED] to-[#4F46E5] bg-clip-text text-transparent box-decoration-clone">
    Bespoke software
  </span>
  <span aria-hidden="true" className="pointer-events-none relative inline-block w-0 h-0 align-top">
    <svg
      viewBox="0 0 24 24"
      className="absolute top-0 sm:top-0.5 left-0.5 h-4 w-4 sm:h-5 sm:w-5 text-violet-500"
      fill="currentColor"
    >
      <path d="M12 0C12 7.2 16.8 12 24 12C16.8 12 12 16.8 12 24C12 16.8 7.2 12 0 12C7.2 12 12 7.2 12 0Z" />
    </svg>
    <svg
      viewBox="0 0 24 24"
      className="absolute -top-3 sm:-top-3.5 left-4 sm:left-5 h-2.5 w-2.5 sm:h-3 sm:w-3 text-violet-600"
      fill="currentColor"
    >
      <path d="M12 0C12 7.2 16.8 12 24 12C16.8 12 12 16.8 12 24C12 16.8 7.2 12 0 12C7.2 12 12 7.2 12 0Z" />
    </svg>
  </span>{' '}
  that fits the way{' '}
  <span className="bg-gradient-to-r from-[#9333EA] via-[#7C3AED] to-[#4F46E5] bg-clip-text text-transparent box-decoration-clone">
    your business
  </span>{' '}
  works
</h1>
```
