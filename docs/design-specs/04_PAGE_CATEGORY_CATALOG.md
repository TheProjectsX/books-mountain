# 04. Page Specification: Category & Catalog Page (Fiction)

- **Figma Frame**: `Fiction Category - Bookshop` (#1:820)
- **Dimensions**: Width 1280px (Fluid / Hug vertical)
- **Route**: `/books` or `/categories/[slug]` (e.g., `/categories/fiction`)
- **Canvas Fill**: `#F9F9FB`

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ HEADER: Logo [Pulse Bookstore] | BOOKS AUTHORS ABOUT BLOG CONTACT | 🔍 🛒 👤│
├─────────────────────────────────────────────────────────────────────────────┤
│ BREADCRUMBS: Home / Fiction                                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│ CATEGORY HEADER:                                                            │
│ Fiction                                                                     │
│ Explore our curated collection of fiction, featuring award-winning novels,  │
│ gripping thrillers, and timeless classics.                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│ FILTER & SORT TOOLBAR:                                                      │
│ [FORMAT ▾]   [PRICE RANGE ▾]   [RATING (4+ STARS) ✕]   │ SORT BY: [Newest ▾]│
├─────────────────────────────────────────────────────────────────────────────┤
│ PRODUCT GRID (4 Columns, Gap 16px horizontal, 48px vertical):               │
│ ┌───────────────┐ ┌───────────────┐ ┌───────────────┐ ┌───────────────────┐ │
│ │ The Shadow's  │ │ The Silent    │ │ Lessons in    │ │ Project Hail Mary │ │
│ │ Edge          │ │ Fracture      │ │ Chemistry     │ │ (Bestseller)      │ │
│ │ Matt Haig     │ │ Gabrielle Z.  │ │ Bonnie Garmus │ │ Andy Weir         │ │
│ │ ★★★★★ (128)   │ │ ★★★★★ (342)   │ │ ★★★★★ (512)   │ │ ★★★★★ (1.2k)      │ │
│ │ $24.99        │ │ $26.00        │ │ $29.00        │ │ $20.00            │ │
│ │ [ADD TO CART] │ │ [ADD TO CART] │ │ [ADD TO CART] │ │ [ADD TO CART]     │ │
│ └───────────────┘ └───────────────┘ └───────────────┘ └───────────────────┘ │
│ ┌───────────────┐ ┌───────────────┐ ┌───────────────┐ ┌───────────────────┐ │
│ │ Yellowface    │ │ Demon         │ │ The Silent    │ │ The Invisible Life│ │
│ │ R.F. Kuang    │ │ Copperhead    │ │ Patient       │ │ of Addie LaRue    │ │
│ │ $27.00        │ │ $22.50        │ │ $17.49        │ │ $26.00            │ │
│ │ [ADD TO CART] │ │ [ADD TO CART] │ │ [ADD TO CART] │ │ [ADD TO CART]     │ │
│ └───────────────┘ └───────────────┘ └───────────────┘ └───────────────────┘ │
├─────────────────────────────────────────────────────────────────────────────┤
│ PAGINATION:                                                                 │
│ [ < Prev ]   [ 1 (Active) ]   [ 2 ]   [ 3 ]   ...   [ 21 ]   [ Next > ]     │
├─────────────────────────────────────────────────────────────────────────────┤
│ FOOTER: 4 Columns                                                           │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Breadcrumbs (#1:822)
- Hierarchy: `Home` → `Fiction`
- Typography: `Public Sans`, 14px, Regular, Color `#78767E`.

---

## 2. Category Header (#1:829)
- **Container**: Max-width 1200px centered, padding `24px 0px`.
- **Title**: H1 `"Fiction"` (`Public Sans`, 36px, Bold 700, Color `#030220`).
- **Description**:
  - Text: *"Explore our curated collection of fiction, featuring award-winning novels, gripping thrillers, and timeless classics."*
  - Typography: `Public Sans`, 16px, Regular 400, Line Height 25.6px, Max-width 672px, Color `#47464D`.

---

## 3. Filter & Sort Toolbar (#1:834)
- **Border**: `1px solid #E2E2E4` (top & bottom border).
- **Padding**: `16px 0px`.
- **Layout**: Flex row, `justify-between`, `items-center`.
- **Left (Filter Controls)**:
  - Flex row, gap `8px`.
  - **Filter Button 1**: `"FORMAT ▾"` (`Space Grotesk`, 12px, SemiBold 600, Border `1px solid #C8C5CE`, Radius 12px, Padding `8px 16px`, Background `#FFFFFF`).
  - **Filter Button 2**: `"PRICE RANGE ▾"` (`Space Grotesk`, 12px, SemiBold 600, Border `1px solid #C8C5CE`, Radius 12px, Padding `8px 16px`, Background `#FFFFFF`).
  - **Active Filter Pill**: `"RATING (4+ STARS) ✕"`:
    - Background: `#EE476F` (Pink Accent).
    - Text: `#FFFFFF` (`Space Grotesk`, 12px, Bold 600).
    - Border Radius: `12px`.
    - Padding: `8px 16px`.
    - Clicking `✕` clears the filter.
- **Right (Sort Dropdown)**:
  - Label: `"SORT BY:"` (`Space Grotesk`, 12px, Bold 700, `#78767E`).
  - Select Box: `"Newest ▾"` (Options: *Newest*, *Price: Low to High*, *Price: High to Low*, *Customer Rating*, *Bestselling*).
  - Styling: Border `1px solid #C8C5CE`, Radius 4px, Padding `6px 12px`, Typography `Public Sans`, 14px.

---

## 4. Product Catalog Grid (#1:863)
- **Layout**: CSS Grid, 4 Columns (Gap: 16px horizontal, 48px vertical).
- **Items Per Page**: 8 to 12 items.
- **Book Cards (Exact Titles in Design)**:
  1. *The Midnight Library* by Matt Haig - `$24.99`
  2. *Tomorrow, and Tomorrow, and Tomorrow* by Gabrielle Zevin - `$26.00`
  3. *Lessons in Chemistry* by Bonnie Garmus - `$29.00` (Badge: `BESTSELLER`)
  4. *Project Hail Mary* by Andy Weir - `$20.00`
  5. *Yellowface* by R.F. Kuang - `$27.00`
  6. *Demon Copperhead* by Barbara Kingsolver - `$22.50`
  7. *The Silent Patient* by Alex Michaelides - `$17.49`
  8. *The Invisible Life of Addie LaRue* by V.E. Schwab - `$26.00`

---

## 5. Pagination Bar (#1:1106)
- **Container**: Padding `24px 0px`, Border-top `1px solid #E2E2E4`.
- **Layout**: Flex row, `justify-center`, `items-center`, gap `8px`.
- **Elements**:
  - `← Prev` button
  - Page `1` (Active: Background `#EE476F`, Text `#FFFFFF`, 36px x 36px circle/rounded-lg)
  - Page `2` (Inactive: Text `#030220`)
  - Page `3` (Inactive: Text `#030220`)
  - Ellipsis `...`
  - Page `21`
  - `Next →` button
