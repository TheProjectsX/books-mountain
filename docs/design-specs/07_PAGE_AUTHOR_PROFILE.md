# 07. Page Specification: Author Profile Page (Andy Weir)

- **Figma Frame**: `Author Detail - Andy Weir` (#1:2631)
- **Dimensions**: Width 1280px, Height 2129.11px
- **Route**: `/authors/[slug]` (e.g., `/authors/andy-weir`)
- **Canvas Fill**: `#F9F9FB`

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ HEADER: Logo [Pulse Bookstore] | BOOKS AUTHORS ABOUT BLOG CONTACT | 🔍 🛒 👤│
├─────────────────────────────────────────────────────────────────────────────┤
│ BREADCRUMBS: Home / Authors / Andy Weir                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│ AUTHOR PROFILE HERO CARD:                                                   │
│ ┌───────────────────┐ ┌───────────────────────────────────────────────────┐ │
│ │                   │ │ [BESTSELLING AUTHOR BADGE]                        │ │
│ │                   │ │ Andy Weir                                         │ │
│ │ [Large Author     │ │ ★★★★★ 4.5 • Based on 2,345 reviews                │ │
│ │  Headshot Photo]  │ │ Author of The Martian, Project Hail Mary, Artemis │ │
│ │                   │ │ 12 books published                                │ │
│ │                   │ │ [Follow Author]  [Share]                          │ │
│ └───────────────────┘ └───────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────────┤
│ SECTION: ABOUT ANDY WEIR (Biography Narrative)                              │
│ Andy Weir built a career as a software engineer until the success of his    │
│ first published novel, The Martian, allowed him to live out his dream...    │
├─────────────────────────────────────────────────────────────────────────────┤
│ SECTION: BOOKS BY ANDY WEIR (Preview Showcase)                              │
│ 1-6 of 12 books                                                             │
│ ┌───────────────────────────┐ ┌───────────────────────────────────────────┐ │
│ │ The Martian               │ │ Project Hail Mary                         │ │
│ │ Andy Weir                 │ │ Andy Weir                                 │ │
│ │ $14.99   [🛒 Add to Cart] │ │ $16.99   [🛒 Add to Cart]                 │ │
│ └───────────────────────────┘ └───────────────────────────────────────────┘ │
│                     [VIEW ALL BOOKS BY ANDY WEIR BUTTON]                    │
├─────────────────────────────────────────────────────────────────────────────┤
│ FOOTER: 4 Columns                                                           │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Breadcrumbs
- Hierarchy: `Home` → `Authors` → `Andy Weir`
- Typography: `Public Sans`, 14px, Color `#78767E`.

---

## 2. Author Profile Hero Card (#1:2635)
- **Container**: Max-width 1200px centered, padding `32px 0px 48px`, border-bottom `1px solid #E2E2E4`.
- **Layout**: 2 Columns flex/grid (Photo Width: 200px - 240px, Details: Flex 1, Gap: 40px).
- **Left (Portrait Photo)**:
  - Dimensions: 220px x 240px.
  - Border Radius: `12px`.
  - Object Fit: Cover.
  - Border: `1px solid #C8C5CE`.
- **Right (Profile Details)**:
  - **Badge**:
    - Text: `"BESTSELLING AUTHOR"`
    - Typography: `Space Grotesk`, 11px, Bold 600, Uppercase, Color `#EE476F`.
  - **Author Name**:
    - Typography: `Public Sans`, 36px, Bold (700), Color `#030220`, Line Height 42px.
  - **Rating Row**:
    - Stars: 5 filled amber stars (`#F59E0B`).
    - Text: `"4.5 • Based on 2,345 reviews"` (`Public Sans`, 14px, Color `#78767E`).
  - **Bibliography Highlights**:
    - Text: *"Author of The Martian, Project Hail Mary, and Artemis"* (`Public Sans`, 16px, Regular 400, Color `#47464D`).
  - **Published Book Count**:
    - Text: `"12 books published"` (`Public Sans`, 14px, Medium 500, Color `#030220`).
  - **Action Buttons Row**:
    - Margin-top: 20px, Gap 12px.
    - **Follow Author Button**:
      - Text: `"Follow Author"`
      - Typography: `Space Grotesk`, 13px, SemiBold 600, Color `#FFFFFF`.
      - Background: `#1B1B3A` (Dark Navy).
      - Padding: `10px 20px`, Radius 4px.
    - **Share Button**:
      - Text: `"Share"`
      - Typography: `Space Grotesk`, 13px, SemiBold 600, Color `#030220`.
      - Border: `1px solid #C8C5CE`, Background `#FFFFFF`.
      - Padding: `10px 20px`, Radius 4px.

---

## 3. Section: About Andy Weir (Biography) (#1:2680)
- **Container**: Max-width 1200px centered, padding `32px 0px 48px`, border-bottom `1px solid #E2E2E4`.
- **Heading**: H2 `"About Andy Weir"` (`Public Sans`, 24px, Bold 700, `#030220`).
- **Body Text**:
  - Paragraph 1: *"Andy Weir built a career as a software engineer until the success of his first published novel, The Martian, allowed him to live out his dream of writing full-time. He is a lifelong space nerd and a devoted hobbyist of subjects like relativistic physics, orbital mechanics, and the history of manned spaceflight."*
  - Paragraph 2: *"His work is celebrated for its meticulous scientific accuracy combined with compelling, often humorous narratives of survival and human ingenuity in extreme environments. He currently lives in California."*
  - Typography: `Public Sans`, 16px, Regular 400, Line Height 28px, Color `#47464D`.

---

## 4. Section: Books by Andy Weir (Preview Showcase) (#1:2710)
- **Container**: Max-width 1200px centered, padding `48px 0px`.
- **Header**:
  - Title: `"Books by Andy Weir"` (`Public Sans`, 24px, Bold 700).
  - Counter: `"1-6 of 12 books"` (`Public Sans`, 14px, Color `#78767E`).
- **Grid Layout**: 4 Columns (or 2-column featured preview in Figma).
- **Featured Books in Profile**:
  1. *The Martian* - `$14.99` + Cart Button.
  2. *Project Hail Mary* - `$16.99` + Cart Button.
- **Full Catalog CTA Button**:
  - Centered below grid.
  - Text: `"VIEW ALL BOOKS BY ANDY WEIR"`
  - Typography: `Space Grotesk`, 13px, SemiBold 600, Uppercase, Color `#030220`.
  - Border: `1px solid #030220`, Background `#FFFFFF`, Hover Background `#F3F3F5`.
  - Padding: `12px 32px`, Radius 4px.
  - Link: Navigates to `/authors/[slug]/books`.
