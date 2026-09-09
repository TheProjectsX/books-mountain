# 05. Page Specification: Search Results Page

- **Figma Frame**: `Search Results - Bookshop` (#1:1720)
- **Dimensions**: Width 1280px, Height 1743.59px
- **Route**: `/search` (e.g., `/search?q=The+Martian&genre=Fiction`)
- **Canvas Fill**: `#F9F9FB`

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ HEADER: Logo [Pulse Bookstore] | BOOKS AUTHORS ABOUT BLOG CONTACT | 🔍 🛒 👤│
├─────────────────────────────────────────────────────────────────────────────┤
│ SEARCH BAR AREA:                                                            │
│ [ 🔍 The Martian                                      ] [SEARCH BUTTON]     │
│                                                                             │
│ Showing 1-8 of 247 results for "The Martian"          SORT BY: [Relevance ▾]│
├─────────────────────────────────────────────────────────────────────────────┤
│ 2-COLUMN FILTER & RESULTS LAYOUT (Gap 32px):                                │
│ ┌─────────────────────────┐ ┌─────────────────────────────────────────────┐ │
│ │ FILTERS     [Clear All] │ │ [BESTSELLER]   [Card 2]   [Card 3]   [Card 4]   │ │
│ │ [Fiction ✕]             │ │ The Martian    Hail Mary  Artemis    The Martian│ │
│ │                         │ │ Andy Weir      Andy Weir  Andy Weir  Andy Weir  │ │
│ │ GENRE                   │ │ $14.99 [🛒]    $18.50 [🛒]$12.99 [🛒]$14.99 [🛒]│ │
│ │ [x] Fiction             │ │                                             │ │
│ │ [ ] Sci-Fi & Fantasy    │ │                                             │ │
│ │ [ ] Thriller            │ │ [Card 5]       [Card 6]   [Card 7]   [Card 8]   │ │
│ │ [ ] Non-Fiction         │ │ Hail Mary      Artemis    The Martian Hail Mary │ │
│ │ Show more +             │ │ $18.50 [🛒]    $12.99 [🛒]$14.99 [🛒]$18.50 [🛒]│ │
│ │                         │ │                                             │ │
│ │ FORMAT                  │ │                                             │ │
│ │ [ ] Hardcover           │ │                                             │ │
│ │ [ ] Paperback           │ │                                             │ │
│ │ [ ] Audiobook           │ │                                             │ │
│ │                         │ │                                             │ │
│ │ PRICE RANGE             │ │                                             │ │
│ │ [$ 0   ] - [$ 50  ]     │ │                                             │ │
│ │ [APPLY FILTERS BUTTON]  │ │                                             │ │
│ └─────────────────────────┘ └─────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────────┤
│ PAGINATION:                                                                 │
│ [ < Prev ]   [ 1 ]   [ 2 (Active) ]   [ 3 ]   ...   [ 21 ]   [ Next > ]     │
├─────────────────────────────────────────────────────────────────────────────┤
│ FOOTER: 4 Columns                                                           │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Top Search Header
- **Container**: Max-width 1200px centered, padding `32px 0px 24px`.
- **Search Input Row**:
  - Full width flex row with integrated search button.
  - Input Container:
    - Background: `#FFFFFF`.
    - Border: `1px solid #C8C5CE`.
    - Border Radius: `4px 0px 0px 4px` (or `4px` with attached button).
    - Height: 48px.
    - Icon: Magnifying glass SVG on left.
    - Value / Placeholder: `"The Martian"`.
    - Typography: `Public Sans`, 16px, Color `#030220`.
  - Search Button:
    - Text: `"SEARCH"` (`Space Grotesk`, 14px, Bold 600, Uppercase, `#FFFFFF`).
    - Background: `#EE476F` (Pink Accent).
    - Height: 48px.
    - Padding: `0px 28px`.
    - Border Radius: `0px 4px 4px 0px`.
- **Summary & Sort Sub-bar**:
  - Flex row, `justify-between`, `items-center`, margin-top `16px`.
  - Left: Result count text:
    - *"Showing 1-8 of 247 results for "* + `<strong>"The Martian"</strong>`
    - Typography: `Public Sans`, 14px, Color `#47464D`.
  - Right: Sort selector:
    - Label: `"SORT BY:"` (`Space Grotesk`, 12px, Bold 700, `#78767E`).
    - Select: `"Relevance ▾"` (`Public Sans`, 14px, Border `1px solid #C8C5CE`, Radius 4px).

---

## 2. Left Sidebar Filters (Width: ~260px)
- **Container**: Background `#FFFFFF`, Border `1px solid #E2E2E4`, Radius 8px, Padding 24px.
- **Top Header**:
  - Title: `"Filters"` (`Public Sans`, 18px, Bold 700, `#030220`).
  - Action Link: `"CLEAR ALL"` (`Space Grotesk`, 11px, Bold 600, Color `#EE476F`, Hover Underline).
- **Active Filter Chips**:
  - Pill: `"Fiction ✕"` (Background `#F3F3F5`, Border `1px solid #C8C5CE`, Radius 12px, Padding `4px 10px`, Text 12px `#030220`).
- **Filter Group 1: Genre**:
  - Title: `"GENRE"` (`Space Grotesk`, 12px, Bold 700, Letter Spacing 0.1em, Uppercase, Margin-top `16px`).
  - Checkbox List:
    - `[x] Fiction`
    - `[ ] Sci-Fi & Fantasy`
    - `[ ] Thriller`
    - `[ ] Non-Fiction`
  - Action: `"Show more +"` (`Public Sans`, 13px, Color `#EE476F`).
- **Filter Group 2: Format**:
  - Title: `"FORMAT"` (`Space Grotesk`, 12px, Bold 700, Uppercase, Margin-top `20px`).
  - Checkbox List:
    - `[ ] Hardcover`
    - `[ ] Paperback`
    - `[ ] Audiobook`
- **Filter Group 3: Price Range**:
  - Title: `"PRICE RANGE"` (`Space Grotesk`, 12px, Bold 700, Uppercase, Margin-top `20px`).
  - Input Pair:
    - Min: `"$ 0"`
    - Divider: `" - "`
    - Max: `"$ 50"`
    - Height: 36px, Border `1px solid #C8C5CE`, Radius 4px, Width 80px each.
  - Submit Button:
    - Text: `"APPLY FILTERS"` (`Space Grotesk`, 12px, Bold 600, Uppercase, `#FFFFFF`).
    - Background: `#EE476F` (Pink Accent).
    - Height: 36px, Width 100%, Margin-top 12px, Radius 4px.

---

## 3. Right Results Grid (Width: ~910px)
- **Layout**: CSS Grid, 4 Columns (Gap: 16px horizontal, 32px vertical).
- **Matching Cards**:
  - Titles displayed: *The Martian* ($14.99), *Project Hail Mary* ($18.50), *Artemis* ($12.99), *The Celestial Mute*, *The Red Horizon*.
  - Ribbon: `BESTSELLER` banner on top card.
  - Action: Pink circular cart button (`#EE476F`) on bottom right of each card for 1-click addition.

---

## 4. Bottom Pagination
- `< Prev` | `1` | `2 (Active)` | `3` | `...` | `21` | `Next >`
- Active page highlighted in `#EE476F`.
