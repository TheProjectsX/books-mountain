# 03. Page Specification: Product Detail Page

- **Figma Frame**: `Product Detail Page - Project Hail Mary` (#1:426) & Main Product Section (#1:444)
- **Dimensions**: Width 1280px, Height 2082.72px
- **Route**: `/books/[slug]` (e.g., `/books/project-hail-mary`)
- **Canvas Fill**: `#F9F9FB`

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ HEADER: Logo [Pulse Bookstore] | BOOKS AUTHORS ABOUT BLOG CONTACT | 🔍 🛒 👤│
├─────────────────────────────────────────────────────────────────────────────┤
│ BREADCRUMBS: Home / Fiction / Science Fiction / Project Hail Mary           │
├─────────────────────────────────────────────────────────────────────────────┤
│ MAIN PRODUCT SECTION (12-Column Grid, Gap 48px):                            │
│ ┌───────────────────────────┐ ┌───────────────────────────────────────────┐ │
│ │ [BESTSELLER BADGE]        │ │ Project Hail Mary                         │ │
│ │                           │ │ By Andy Weir                              │ │
│ │                           │ │ ★★★★★ 4.8 (1,245 reviews from Goodreads)  │ │
│ │                           │ │                                           │ │
│ │ [Large Book Cover Image]  │ │ $24.99   [IN STOCK BADGE]                 │ │
│ │                           │ │                                           │ │
│ │                           │ │ FORMAT: [Hardcover] [Paperback] [Audio]   │ │
│ │                           │ │                                           │ │
│ │                           │ │ QTY: [- 1 +]   [ADD TO CART]   [♡ Wishlist│ │
│ │                           │ │ ───────────────────────────────────────── │ │
│ │                           │ │ SPECIFICATIONS:                           │ │
│ │                           │ │ Format: Hardcover      Pages: 480         │ │
│ │                           │ │ Publisher: Ballantine  ISBN: 978-059313...│ │
│ │                           │ │ SHARE: [FB] [Twitter] [Pinterest] [Link]  │ │
│ └───────────────────────────┘ └───────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────────┤
│ SECTION: ABOUT THE BOOK                                                     │
│ [Comprehensive editorial synopsis, premise, character arcs, critical quote] │
├─────────────────────────────────────────────────────────────────────────────┤
│ SECTION: RELATED BOOKS (4 Columns)                                          │
│ [The Midnight Library]  [The Martian]       [Artemis]       [Dark Matter]   │
├─────────────────────────────────────────────────────────────────────────────┤
│ FOOTER: 4 Columns                                                           │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Breadcrumb Bar (#1:429)
- **Padding**: `32px 40px 16px`, Max-width 1200px centered.
- **Hierarchy**: `Home` → `Fiction` → `Science Fiction` → `Project Hail Mary`
- **Styling**: `Public Sans`, 14px, Divider `/` in `#C8C5CE`.

---

## 2. Main Product Grid (#1:444)
- **Container**: Width 1200px centered.
- **Layout**: CSS Grid with 12 Columns, gap `48px`, padding bottom `48px`.
- **Bottom Border**: `1px solid #C8C5CE`.

### 2.1 Left Column: Book Showcase (Span 5 of 12)
- **Container Style**:
  - Background: `#FFFFFF` (Surface White).
  - Border: `1px solid #C8C5CE`.
  - Border Radius: `8px`.
  - Padding: `24px`.
  - Position: Relative.
- **Bestseller Badge** (Top Right):
  - Background: `#140003` (Dark plum/black).
  - Text: `"BESTSELLER"` (`Space Grotesk`, 12px, Weight 500, Letter Spacing 0.1em, Uppercase, Color `#FFFFFF`).
  - Padding: `4px 8px`, Radius `4px`.
- **Book Cover Image**:
  - Aspect Ratio: 2:3, Height ~420px.
  - Object Fit: Contain / Cover with subtle drop shadow simulating a 3D book spine.
- **Additional Angles / Thumbnails (Optional Drawer)**:
  - Mini thumbnail strip below main cover (Back cover, inner title page, spine).

### 2.2 Right Column: Product Actions & Specs (Span 7 of 12)
- **Header & Attribution**:
  - **Book Title**: `"Project Hail Mary"`
    - Typography: `Public Sans`, 32px - 36px, Bold (700), Line Height 42px, Color `#030220`.
  - **Author Byline**: `"By "` + `[Andy Weir]`
    - Typography: `Public Sans`, 16px, Regular (400), Color `#47464D`.
    - Link: Clickable author link navigating to `/authors/andy-weir`.
  - **Rating Row**:
    - Stars: 5 filled stars in Amber `#F59E0B`.
    - Score & Reviews: `"4.8 (1,245 reviews from Goodreads)"` (`Public Sans`, 14px, Color `#78767E`).
- **Pricing & Availability**:
  - **Price**: `"$24.99"` (`Public Sans`, 28px, Bold 700, Color `#030220`).
  - **Stock Status Badge**:
    - Text: `"IN STOCK"` (`Space Grotesk`, 11px, Bold 600, Color `#059669`, Background `#ECFDF5`, Border `1px solid #A7F3D0`, Radius 9999px, Padding `4px 10px`).
- **Format Selector**:
  - Label: `"FORMAT"` (`Space Grotesk`, 12px, Bold 700, Letter Spacing 0.1em, Uppercase, `#030220`).
  - Pills:
    1. `Hardcover - $24.99` (Active: Border `2px solid #030220`, Background `#FFFFFF`).
    2. `Paperback - $18.99` (Inactive: Border `1px solid #C8C5CE`, Background `#FFFFFF`).
    3. `Audiobook - $19.99` (Inactive: Border `1px solid #C8C5CE`, Background `#FFFFFF`).
- **Quantity & Purchase Actions**:
  - **Quantity Selector**:
    - Flex row, height 44px, Border `1px solid #C8C5CE`, Radius 4px.
    - Decrement `−` button, Number input (`1`), Increment `+` button.
  - **Add to Cart Primary Button**:
    - Width: Flex 1 (expanded).
    - Height: 44px.
    - Background: `#1B1B3A` (Dark Navy).
    - Text: `"ADD TO CART"` (`Space Grotesk`, 14px, Bold 600, Uppercase, Letter Spacing 0.05em, Color `#FFFFFF`).
    - Hover: Background `#030220`.
    - Radius: `4px`.
  - **Wishlist Heart Button**:
    - Size: 44px x 44px square.
    - Border: `1px solid #C8C5CE`, Radius 4px.
    - Icon: Heart SVG (20px x 20px), Stroke `#030220`.
- **Book Specifications Table**:
  - Border-top: `1px solid #C8C5CE`, Padding-top: 24px, Margin-top: 24px.
  - 2x2 or 4-column Grid:
    - **Format**: `Hardcover`
    - **Pages**: `480`
    - **Publisher**: `Ballantine Books`
    - **ISBN**: `978-0593135204`
    - **Language**: `English`
    - **Dimensions**: `6.4 x 1.5 x 9.5 inches`
  - Typography: Label (`Space Grotesk`, 11px, Bold 600, `#78767E`, Uppercase), Value (`Public Sans`, 14px, SemiBold 600, `#030220`).
- **Social Share Links**:
  - Text: `"SHARE:"` + Facebook, X/Twitter, Pinterest, Copy Link icons.

---

## 3. Section: About the Book (#1:525)
- **Padding**: `48px 0px`, Max-width 1200px centered.
- **Heading**: H2 `"About the Book"` (`Public Sans`, 24px, Bold 700, `#030220`).
- **Content**:
  - Paragraph 1: *"Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish."*
  - Paragraph 2: *"Except that right now, he doesn't know that. He can't even remember his own name, let alone the nature of his assignment or how to complete it."*
  - Paragraph 3: *"All he knows is that he's been asleep for a very, very long time. And he's just been awakened to find himself millions of miles from home, with nothing but two corpses for company."*
  - Typography: `Public Sans`, 16px, Regular 400, Line Height 28px, Color `#47464D`.

---

## 4. Section: Related Books (#1:536)
- **Padding**: `48px 0px`, Max-width 1200px centered.
- **Heading**: H2 `"Related Books"` (`Public Sans`, 24px, Bold 700, `#030220`).
- **Cards Grid**: 4 Columns (Gap: 16px).
- **Titles**:
  1. *The Midnight Library* by Matt Haig - `$24.99`
  2. *The Martian* by Andy Weir - `$18.99`
  3. *Artemis* by Andy Weir - `$16.00`
  4. *Dark Matter* by Blake Crouch - `$17.50`
