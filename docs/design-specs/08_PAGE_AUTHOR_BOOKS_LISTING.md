# 08. Page Specification: Books by Author Listing Page

- **Figma Frame**: `Books by Andy Weir - Listing Page` (#1:2373)
- **Dimensions**: Width 1280px, Height 1458px
- **Route**: `/authors/[slug]/books` (e.g., `/authors/andy-weir/books`)
- **Canvas Fill**: `#F9F9FB`

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ HEADER: Logo [Pulse Bookstore] | BOOKS AUTHORS ABOUT BLOG CONTACT | 🔍 🛒 👤│
├─────────────────────────────────────────────────────────────────────────────┤
│ BREADCRUMBS: Home / Authors / Andy Weir / All Books                         │
├─────────────────────────────────────────────────────────────────────────────┤
│ AUTHOR SUB-HEADER BAR:                                                      │
│ [Photo 48px] Andy Weir (12 BOOKS)               [← BACK TO AUTHOR PROFILE]  │
├─────────────────────────────────────────────────────────────────────────────┤
│ FILTER & COUNT CONTROLS:                                                    │
│ Showing 1-12 of 12 books by Andy Weir                                       │
│ [ALL (Active)] [HARDCOVER] [PAPERBACK] [E-BOOK] [AUDIOBOOK] │ SORT: [Relevance ▾]│
├─────────────────────────────────────────────────────────────────────────────┤
│ CATALOG GRID (4 Columns, Gap 16px horizontal, 48px vertical):               │
│ ┌────────────────┐ ┌────────────────┐ ┌────────────────┐ ┌────────────────┐ │
│ │ BOOK 1 OF 2    │ │ STANDALONE     │ │ STANDALONE     │ │ GRAPHIC NOVEL  │ │
│ │ Project Hail   │ │ The Martian    │ │ Artemis        │ │ Cheshire       │ │
│ │ Mary           │ │                │ │                │ │ Crossing       │ │
│ │ ★★★★★ 4.9 (12k)│ │ ★★★★★ 4.8 (45k)│ │ ★★★★★ 4.2 (8k) │ │ ★★★★★ 3.9 (2k) │ │
│ │ $24.99         │ │ $18.99         │ │ $16.00         │ │ $22.50         │ │
│ │ [ADD TO CART]  │ │ [OPTIONS]      │ │ [ADD TO CART]  │ │ [OPTIONS]      │ │
│ └────────────────┘ └────────────────┘ └────────────────┘ └────────────────┘ │
├─────────────────────────────────────────────────────────────────────────────┤
│ PAGINATION:                                                                 │
│ [ PREVIOUS ]   [ 1 (Active) ]   [ 2 ]   [ 3 ]   [ NEXT ]                    │
├─────────────────────────────────────────────────────────────────────────────┤
│ FOOTER: 4 Columns                                                           │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Breadcrumbs
- Hierarchy: `Home` → `Authors` → `Andy Weir` → `All Books`
- Typography: `Public Sans`, 14px, Color `#78767E`.

---

## 2. Author Sub-Header Bar (#1:2375)
- **Container**: Width 1200px centered, padding `16px 0px 24px`, border-bottom `1px solid #E2E2E4`.
- **Layout**: Flex row, `justify-between`, `items-center`.
- **Left (Author Identification)**:
  - Flex row, items-center, gap `16px`.
  - Author Avatar: 48px x 48px circle, object-cover, radius `full`.
  - Text Group:
    - Author Name: `"Andy Weir"` (`Public Sans`, 24px, Bold 700, Color `#030220`).
    - Book Count Tag: `"12 BOOKS"` (`Space Grotesk`, 11px, Bold 600, Color `#EE476F`, Letter Spacing 0.05em, Uppercase).
- **Right (Back Link)**:
  - Link: `"← BACK TO AUTHOR PROFILE"`
  - Typography: `Space Grotesk`, 12px, Bold 700, Uppercase, Color `#EE476F`.
  - Action: Navigates back to `/authors/[slug]`.

---

## 3. Filter & Sort Toolbar (#1:2390)
- **Container**: Width 1200px centered, padding `16px 0px`, margin-bottom `24px`.
- **Top Row**:
  - Result Count: *"Showing 1-12 of 12 books by Andy Weir"* (`Public Sans`, 14px, Color `#47464D`).
- **Bottom Controls Row**:
  - Flex row, `justify-between`, `items-center`.
  - **Left (Format Filter Pills)**:
    - Gap: `8px`.
    - Pills:
      1. `ALL` (Active: Background `#EE476F`, Text `#FFFFFF`).
      2. `HARDCOVER` (Inactive: Background `#FFFFFF`, Border `1px solid #C8C5CE`, Text `#030220`).
      3. `PAPERBACK` (Inactive: Background `#FFFFFF`, Border `1px solid #C8C5CE`, Text `#030220`).
      4. `E-BOOK` (Inactive: Background `#FFFFFF`, Border `1px solid #C8C5CE`, Text `#030220`).
      5. `AUDIOBOOK` (Inactive: Background `#FFFFFF`, Border `1px solid #C8C5CE`, Text `#030220`).
    - Pill Typography: `Space Grotesk`, 11px, SemiBold 600, Uppercase, Padding `6px 14px`, Radius `12px`.
  - **Right (Sort Select)**:
    - Label: `"Sort by:"` + Select dropdown: `"Relevance ▾"`.

---

## 4. Author Catalog Grid (#1:2420)
- **Layout**: CSS Grid, 4 Columns (Gap: 16px horizontal, 48px vertical).
- **Cards Detailed Breakdown**:
  1. **Project Hail Mary**:
     - Series Tag: `"BOOK 1 OF 2"` (`Space Grotesk`, 11px, Weight 500, `#78767E`).
     - Title: *"Project Hail Mary"*
     - Rating: `★★★★★ 4.9 (12k)`
     - Price: `$24.99`
     - Action: `"ADD TO CART"` button (Background `#EE476F`, Text `#FFFFFF`).
  2. **The Martian**:
     - Series Tag: `"STANDALONE"`
     - Title: *"The Martian"*
     - Rating: `★★★★★ 4.8 (45k)`
     - Price: `$18.99`
     - Action: `"OPTIONS"` button (Outlined border `1px solid #C8C5CE`).
  3. **Artemis**:
     - Series Tag: `"STANDALONE"`
     - Title: *"Artemis"*
     - Rating: `★★★★★ 4.2 (8k)`
     - Price: `$16.00`
     - Action: `"ADD TO CART"` button.
  4. **Cheshire Crossing**:
     - Series Tag: `"GRAPHIC NOVEL"`
     - Title: *"Cheshire Crossing"*
     - Rating: `★★★★★ 3.9 (2k)`
     - Price: `$22.50`
     - Action: `"OPTIONS"` button.

---

## 5. Pagination
- Centered at bottom: `[ PREVIOUS ]` `[ 1 ]` `[ 2 ]` `[ 3 ]` `[ NEXT ]`.
