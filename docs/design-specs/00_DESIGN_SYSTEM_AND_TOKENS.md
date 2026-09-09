# 00. Design System & Global Tokens Specification

This document provides the foundational design system tokens, typography scales, color palettes, spacing rules, and elevation effects extracted directly from the Figma Bookstore project ([Figma Link](https://www.figma.com/design/lLAPazPvmDc7552QTHbp8V/Bookstore)).

---

## 1. Typography Hierarchy

The design system utilizes two distinct Google Fonts:
1. **`Public Sans`**: Primary typeface for editorial elegance, book titles, body paragraphs, and interface text.
2. **`Space Grotesk`**: Monospace/geometric display typeface for navigation links, uppercase category pills, badges, buttons, and metadata labels.

### 1.1 Font Styles & Sizes

| Role | Font Family | Size (px) | Weight | Line Height | Letter Spacing | Text Case | Example Usage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display / Hero H1** | Public Sans | 48px | Bold (700) | 57.6px (1.2) | -0.02em | Normal | "Discover Your Next Great Read", "Our Story" |
| **Page H1** | Public Sans | 32px - 36px | Bold (700) | 42px (1.25) | -0.01em | Normal | "Fiction", "Our Authors", "Frequently Asked Questions", "Get in Touch" |
| **Section H2** | Public Sans | 24px - 28px | Bold (700) | 34px (1.3) | -0.01em | Normal | "New Arrivals", "Staff Picks", "Bestsellers", "About Andy Weir" |
| **Card H3 / Book Title** | Public Sans | 18px - 20px | Bold (700) | 26px (1.35) | Normal | Normal | "Project Hail Mary", "The Midnight Library", "The Overstory" |
| **Subsection H4** | Space Grotesk | 12px | Bold (700) | 12px (1.0) | 0.1em (+10%) | UPPERCASE | Footer headers ("QUICK LINKS", "SUPPORT", "NEWSLETTER") |
| **Navigation Links** | Space Grotesk | 12px | Medium (500) | 12px (1.0) | 0.1em (+10%) | UPPERCASE | "BOOKS", "AUTHORS", "ABOUT", "BLOG", "CONTACT" |
| **Badge / Pill Tag** | Space Grotesk | 11px - 12px | Medium (500) | 12px (1.0) | 0.1em (+10%) | UPPERCASE | "BESTSELLER", "STAFF PICK", "BOOK 1 OF 2", "HARDCOVER" |
| **Primary Button Text** | Space Grotesk | 13px - 14px | SemiBold (600) | 14px (1.0) | 0.05em (+5%) | UPPERCASE | "ADD TO CART", "SUBSCRIBE", "SEND MESSAGE", "OPEN MESSENGER" |
| **Body Large** | Public Sans | 18px | Regular (400) | 28px (1.55) | Normal | Normal | Hero subtitle blurbs, blog intro text |
| **Body Default** | Public Sans | 16px | Regular (400) | 25.6px (1.6) | Normal | Normal | Book descriptions, author bios, blog article paragraphs |
| **Body Small / Meta** | Public Sans | 14px | Regular (400) | 20px (1.43) | Normal | Normal | Filter labels, review dates, publisher info, copyright notice |
| **Caption / Fineprint** | Public Sans | 12px | Regular (400) | 16px (1.33) | Normal | Normal | Secondary author info, micro timestamps |

---

## 2. Color Palette & Token Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  Primary Canvas: #F9F9FB     │  Surface White: #FFFFFF      │
├──────────────────────────────┼──────────────────────────────┤
│  Dark Navy: #030220 / #1B1B3A│  Accent Coral/Pink: #EE476F  │
├──────────────────────────────┼──────────────────────────────┤
│  Subtle Border: #C8C5CE      │  Soft Container: #F3F3F5     │
└─────────────────────────────────────────────────────────────┘
```

### 2.1 Detailed Palette Table

| Token Key | Hex Code | Tailwind Alias | Usage Context |
| :--- | :--- | :--- | :--- |
| `canvas-default` | `#F9F9FB` | `bg-canvas` | Main page background across all 11 full-screen pages |
| `surface-white` | `#FFFFFF` | `bg-surface` | Book card containers, form input backgrounds, author cards |
| `surface-muted` | `#F3F3F5` | `bg-surface-muted` | Staff picks bento container, inactive filter pills, light dividers |
| `surface-subtle` | `#EDEEF0` | `bg-surface-subtle` | Alternative light footer, secondary backgrounds |
| `surface-blue-tint` | `rgba(220, 226, 243, 0.5)` | `bg-community-tint`| Facebook community integration banner background |
| `navy-primary` | `#030220` | `text-navy` / `bg-navy` | Primary text headings, dark CTA cards ("Still Have Questions?") |
| `navy-dark` | `#1B1B3A` | `bg-navy-dark` | Main footer background, announcement bar, primary "Add to Cart" button |
| `navy-badge` | `#140003` | `bg-navy-badge` | Dark bestseller badge on product details (`#140003`) |
| `accent-pink` | `#EE476F` | `bg-accent` / `text-accent` | Active category/filter pill, cart notification badge ("3"), newsletter button, "Shop New Arrivals" CTA |
| `accent-pink-hover`| `#E0355E` | `hover:bg-accent-hover`| Interactive hover state for accent buttons |
| `text-primary` | `#030220` or `#1A1C1D` | `text-text-primary` | Main high-contrast readable text |
| `text-secondary` | `#47464D` or `#78767E` | `text-text-muted` | Muted subtitles, author bylines, footer navigation links |
| `border-subtle` | `#C8C5CE` | `border-border` | Default border for cards, inputs, navigation divider, tables |
| `border-light` | `#E2E2E4` | `border-border-light` | Category pills border, subtle horizontal dividing lines |
| `border-dark-tint`| `rgba(255, 255, 255, 0.1)` | `border-white/10` | Horizontal border dividing footer columns and bottom bar |

---

## 3. Layout Grid & Container Dimensions

- **Viewport Canvas Width**: 1280px (Standard Desktop Viewport).
- **Max Content Container Width**: 1200px centered (`margin: 0 auto;`).
- **Page Horizontal Padding**: 40px (left & right) or 48px on full-bleed containers.
- **Section Vertical Padding**:
  - Compact sections: `48px 0px`
  - Hero sections: `64px 0px` to `80px 0px`
  - Footer: `48px 40px`
- **Standard Columns**:
  - Product Catalog & Search: 4 Columns (Gap: 16px horizontal, 48px vertical).
  - Product Detail Page: 12-Column Grid (Left Image: 5 cols, Right Details: 7 cols, Gap: 48px).
  - Footer: 4 Columns (Brand, Quick Links, Support, Newsletter, Gap: 48px).
  - Contact Page Top: 3 Columns (Chat, Email, Community, Gap: 24px).
  - Contact Page Bottom: 12-Column Grid (Form: 7 cols, Sidebar: 5 cols, Gap: 48px).

---

## 4. Border Radius & Elevation Tokens

### 4.1 Border Radii
- `radius-sm` (4px): Primary buttons, input boxes, small badge labels.
- `radius-md` (8px): Book card containers, FAQ accordion items, modal boxes.
- `radius-lg` (12px): Filter pill buttons, icon button wrappers, cart counter badge, social link boxes.
- `radius-full` (9999px): Author avatar circles, pill chips.

### 4.2 Elevation / Shadows
- `shadow-subtle`: `0px 1px 2px 0px rgba(0, 0, 0, 0.05)` (Header bottom border elevation).
- `shadow-card`: `0px 4px 12px 0px rgba(0, 0, 0, 0.04)` (Hover state for book cards and action boxes).
- `shadow-prominent`: `0px 25px 50px -12px rgba(0, 0, 0, 0.25)` ("Still Have Questions?" dark CTA card).
