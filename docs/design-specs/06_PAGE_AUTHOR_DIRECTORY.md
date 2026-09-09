# 06. Page Specification: Author Directory (Author List)

- **Figma Frame**: `Author List - Bookshop` (#1:2146)
- **Dimensions**: Width 1280px, Height 1579.38px
- **Route**: `/authors`
- **Canvas Fill**: `#F9F9FB`

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ HEADER: Logo [Pulse Bookstore] | BOOKS AUTHORS ABOUT BLOG CONTACT | 🔍 🛒 👤│
├─────────────────────────────────────────────────────────────────────────────┤
│ PAGE TITLE:                                                                 │
│ Our Authors                                                                 │
│ Discover the brilliant minds behind the books                               │
├─────────────────────────────────────────────────────────────────────────────┤
│ ALPHABETICAL FILTER & SORT:                                                 │
│ [A-Z (Active)] [A] [B] [C] ... [Z] [All]           SORT BY: [Alphabetical ▾]│
├─────────────────────────────────────────────────────────────────────────────┤
│ AUTHOR DIRECTORY GRID (4 Columns, Gap 24px):                                │
│ ┌────────────────┐ ┌────────────────┐ ┌────────────────┐ ┌────────────────┐ │
│ │ [Photo Circle] │ │ [Photo Circle] │ │ [Photo Circle] │ │ [Photo Circle] │ │
│ │ Eleanor Vance  │ │ Arthur Pendelton│ │ Silvia Moreno  │ │ James S.A.     │ │
│ │ 12 BOOKS       │ │ 8 BOOKS        │ │ 15 BOOKS       │ │ 22 BOOKS       │ │
│ │ SCI-FI         │ │ FANTASY        │ │ MYSTERY        │ │ LITERARY       │ │
│ │ [View Profile] │ │ [View Profile] │ │ [View Profile] │ │ [View Profile] │ │
│ └────────────────┘ └────────────────┘ └────────────────┘ └────────────────┘ │
├─────────────────────────────────────────────────────────────────────────────┤
│ PAGINATION:                                                                 │
│ [ < Prev ]   [ 1 (Active) ]   [ 2 ]   [ 3 ]   ...   [ 12 ]   [ Next > ]     │
├─────────────────────────────────────────────────────────────────────────────┤
│ FEATURED AUTHORS SECTION:                                                   │
│ Featured Authors                                                            │
│ ┌───────────────────────────┐ ┌───────────────────────┐ ┌─────────────────┐ │
│ │ [Portrait]                │ │ [Portrait]            │ │ [Portrait]      │ │
│ │ N.K. Jemisin              │ │ Neil Gaiman           │ │ Donna Tartt     │ │
│ │ Three-time Hugo Award     │ │ Master of modern      │ │ Pulitzer Prize- │ │
│ │ winner for best novel.    │ │ fantasy and comics.   │ │ winning novelist│ │
│ │ [View Profile]            │ │ [View Profile]        │ │ [View Profile]  │ │
│ └───────────────────────────┘ └───────────────────────┘ └─────────────────┘ │
├─────────────────────────────────────────────────────────────────────────────┤
│ FOOTER: 4 Columns                                                           │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Page Header (#1:2148)
- **Container**: Width 1200px centered, padding `48px 0px 24px`, text-align center.
- **H1 Headline**: `"Our Authors"`
  - Typography: `Public Sans`, 36px, Bold (700), Color `#030220`.
- **Subtitle**:
  - Text: *"Discover the brilliant minds behind the books"*
  - Typography: `Public Sans`, 16px, Regular (400), Color `#78767E`.

---

## 2. Alphabetical Filter Bar (#1:2154)
- **Border**: Bottom border `1px solid #E2E2E4`, padding bottom `16px`, margin bottom `32px`.
- **Layout**: Flex row, `justify-between`, `items-center`.
- **Left (A-Z Pill List)**:
  - Flex row, gap `6px`, flex-wrap.
  - Pills: `A-Z`, `A`, `B`, `C`, `D`, `E` ... `Z`, `All`.
  - Active Pill (`A-Z`): Background `#EE476F`, Text `#FFFFFF`, Padding `4px 10px`, Radius 12px, Font `Space Grotesk` 12px SemiBold.
  - Inactive Pills: Background transparent, Text `#030220`, Hover Background `#F3F3F5`, Padding `4px 10px`, Radius 12px.
- **Right (Sort Select)**:
  - Label: `"SORT BY:"` (`Space Grotesk`, 11px, Bold 700, `#78767E`).
  - Select: `"Alphabetical ▾"` (Options: *Alphabetical (A-Z)*, *Alphabetical (Z-A)*, *Most Books Published*, *Popularity*).

---

## 3. Author Directory Grid (#1:2180)
- **Layout**: CSS Grid, 4 Columns (Gap: 24px horizontal, 32px vertical).
- **Author Card Anatomy**:
  - Background: `#FFFFFF` (Surface White).
  - Border: `1px solid #E2E2E4`.
  - Border Radius: `12px`.
  - Padding: `24px 16px`.
  - Text-align: Center.
  - Hover: `translate-y: -2px`, Border color `#C8C5CE`, subtle shadow.
- **Card Elements**:
  1. **Author Avatar / Portrait**:
     - Dimensions: 80px x 80px circle (`rounded-full`).
     - Object Fit: Cover.
     - Margin: `0 auto 16px`.
     - Border: `2px solid #F3F3F5`.
  2. **Author Name**:
     - Typography: `Public Sans`, 18px, Bold (700), Color `#030220`.
  3. **Metadata Line 1**:
     - Text: `"12 BOOKS"` (`Space Grotesk`, 11px, Bold 600, Color `#EE476F`, Letter Spacing 0.05em, Uppercase).
  4. **Metadata Line 2 (Genre)**:
     - Text: `"SCI-FI"` / `"FANTASY"` / `"MYSTERY"` (`Space Grotesk`, 11px, Weight 500, Color `#78767E`, Uppercase).
  5. **Action Link**:
     - Text: `"View Profile"` (`Public Sans`, 13px, Medium 500, Color `#EE476F`, Margin-top `12px`, Hover Underline).
     - Action: Navigates to `/authors/[slug]`.

---

## 4. Featured Authors Section (#1:2260)
- **Container**: Padding `48px 0px`, Max-width 1200px centered.
- **Section Heading**: H2 `"Featured Authors"` (`Public Sans`, 24px, Bold 700, text-align center, Margin-bottom `24px`).
- **Cards Grid**: 3 Columns (Gap: 24px).
- **Featured Cards Content**:
  1. **N.K. Jemisin**:
     - Portrait photo.
     - Description: *"Three-time Hugo Award winner for best novel."*
     - Link: `"View Profile"`.
  2. **Neil Gaiman**:
     - Portrait photo.
     - Description: *"Master of modern fantasy and comic books."*
     - Link: `"View Profile"`.
  3. **Donna Tartt**:
     - Portrait photo.
     - Description: *"Pulitzer Prize-winning novelist and essayist."*
     - Link: `"View Profile"`.
- **Card Styling**: Larger padding (`32px 24px`), prominent typography, elevated border.
