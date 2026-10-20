---
name: Juan Durgali V3
description: Dark editorial portfolio with image-led projects and purposeful motion.
colors:
  background: "#101312"
  surface: "#181d19"
  accent: "#a4e8c4"
  foreground: "#f0f2ef"
  muted: "#a2aaa4"
typography:
  display:
    fontFamily: "Geist, sans-serif"
    fontSize: "clamp(58px, 6.7vw, 92px)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Geist, sans-serif"
    fontSize: "16px"
    lineHeight: 1.8
rounded:
  button: "9px"
  image: "12px"
spacing:
  control: "12px"
  group: "24px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#15271c"
    rounded: "{rounded.button}"
    padding: "12px 21px"
---

## Overview
Dark, high-contrast presentation requested by the user. An editorial composition prioritizes the developer's name, portrait and actual project images. Copy, translations and functionality remain sourced from existing data.

## Colors
Graphite grounds with a muted green cast; mint highlights primary actions and active states. White and soft gray-green establish the reading hierarchy. No decorative colored halos or background grids.

## Typography
Geist remains the project typeface. Medium-weight hero and section headings contrast with readable body copy. The unlayered section-heading rule takes precedence over layered heading utilities. Keep heading tracking at or above -0.04em. Do not truncate project descriptions.

## Layout
1280px outer container, 20/32/40px responsive gutters. Desktop hero uses an asymmetric two-column layout; mobile puts the name and actions before the portrait. Project gallery has a full-width lead project and two-column supporting work, collapsing to one column below 640px. Preserve the all-projects route's stacked presentation.

### Responsive behavior
Validate widths from 320px to 1920px, including 640/768/820/1024px transitions. Below 640px resume controls use a visible two-column grid; tablet uses horizontal controls and desktop a sidebar. The projects index uses ordinary vertical cards below 1024px; sticky stacking additionally requires at least 900px viewport height. Compact navigation stays below 1024px and its expanded menu can scroll in landscape. Preserve 16px form text, natural document scrolling over the globe, and content wrapping without clipping. Section tracking uses a viewport-height-based observer band so wide screens and orientation changes keep the active link accurate.

## Elevation & Depth
Tonal surfaces separate the resume and form. Backdrop blur belongs to the floating navigation; the rotating role uses brief text blur during its transition. The portrait's fine offset outline provides depth without nested panels.

## Shapes
9px action corners, 12px project images, 16px navigation. The about portrait has one larger lower corner. Thin separators organize resume entries.

## Components
Hero portrait uses pointer-driven springs on mouse devices. Rotating roles use short blur-and-slide transitions. Project previews scale on hover; controls remain visible on touch screens. Resume tabs retain their spring indicator and animated content. Scroll progress appears on desktop. MotionConfig, CSS and imperative navigation respect reduced motion; content stays readable without animation.

## Do's and Don'ts
Preserve factual content, CV links, bilingual routes and contact API. Use actual project imagery. Keep interactive targets visible and keyboard focus clear. Avoid adding invented metrics, repeated decorative icons between sections, cards within cards, and new animation libraries for effects supported by the existing Motion stack.
