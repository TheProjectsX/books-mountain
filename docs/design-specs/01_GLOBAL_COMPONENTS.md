# 01. Global & Reusable Components Specification

This document defines the shared components used across the bookstore, based on the `Unified Navigation & Footer Reference` frame (#1:4055) and repeating UI elements across the 11 full-screen pages.

---

## 1. Announcement Bar

Located at the very top of the viewport above the main header (Figma node #1:3).

### 1.1 Specifications
- **Dimensions**: Width 100% (1280px full width), Height 36px - 40px.
- **Background**: `#1B1B3A` (Dark Navy).
- **Padding**: `8px 40px` (or `8px 16px` inner).
- **Layout**: Flex row, `justify-between`, `items-center`.
- **Left Content**:
  - Icon: Small delivery truck / gift icon (`#FFFFFF`).
  - Text: `"FREE SHIPPING ON ORDERS OVER $50"`
  - Typography: `Space Grotesk`, 12px, Weight 500, Letter Spacing 0.1em, Uppercase, Color `#FFFFFF`.
- **Right Content**:
  - Facebook Icon + Text: `"FOLLOW US ON FACEBOOK"`
  - Typography: `Space Grotesk`, 12px, Weight 500, Letter Spacing 0.1em, Uppercase, Color `#FFFFFF`.
  - Link: External link to Facebook bookstore community.

---

## 2. Unified Header & Navigation Bar

Fixed desktop header with sticky option, clean borders, and integrated action triggers (Figma node #1:4118 / #1:400).

```
┌────────────────────────────────────────────────────────────────────────┐
│ [Pulse Bookstore]         BOOKS  AUTHORS  ABOUT  BLOG  CONTACT    [🔍] [🛒 3] [👤]│
└────────────────────────────────────────────────────────────────────────┘
```

### 2.1 Specifications
- **Dimensions**: Width 1280px (100%), Height 64px - 72px.
- **Background**: `#F9F9FB` (Canvas background) with optional semi-transparent backdrop blur when scrolled.
- **Border**: `border-b: 1px solid #C8C5CE`.
- **Shadow**: `box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05)`.
- **Padding**: `0px 40px` outer, inner content centered at max-width 1200px.
- **Layout**: Flex row, `items-center`, `justify-between`.

### 2.2 Sections
1. **Left (Brand Logo)**:
   - Text: `"Pulse Bookstore"` (or `"Bookshop"` in variant frames).
   - Typography: `Public Sans`, 20px, Bold (700), Line Height 28px, Color `#030220`.
   - Action: Links directly to `/` (Homepage).
2. **Center (Desktop Navigation Links)**:
   - Layout: Flex row, gap `24px` - `32px`.
   - Links:
     - `BOOKS` (`/books`)
     - `AUTHORS` (`/authors`)
     - `ABOUT` (`/about`)
     - `BLOG` (`/blog`)
     - `CONTACT` (`/contact`)
   - Typography: `Space Grotesk`, 12px, Medium (500), Line Height 12px, Letter Spacing 0.1em, Uppercase, Color `#030220`.
   - Hover State: Color transitions to `#EE476F` or underlined with 2px accent indicator.
3. **Right (Actions & Triggers)**:
   - Layout: Flex row, items-center, gap `16px`.
   - **Search Trigger Button**:
     - Circular/rounded button (padding 8px, border-radius 12px, border: none or hover stroke).
     - Icon: Magnifying glass SVG (18px x 18px), stroke/fill `#030220`.
     - Action: Opens search overlay or redirects to `/search`.
   - **Cart Trigger Button**:
     - Container: Relative positioning, rounded-xl (border-radius 12px), padding 8px.
     - Icon: Shopping bag / cart SVG (20px x 20px), stroke/fill `#030220`.
     - **Cart Badge Counter**:
       - Position: Absolute at top-right (`top: 4px`, `right: 0px` or `translate(25%, -25%)`).
       - Background: `#EE476F` (Pink Accent).
       - Padding: `2px 6px`, border-radius 12px (pill).
       - Text: `"3"` (or dynamic count).
       - Typography: `Public Sans`, 10px, Bold (700), Line Height 15px, Color `#FFFFFF`.
       - Action: Opens sliding fly-out Mini-Cart drawer.
   - **User / Wishlist Button**:
     - Icon: User profile avatar or heart bookmark SVG (20px x 20px), fill `#030220`.
     - Action: Redirects to user profile or wishlist.

---

## 3. Unified Footer Component

Rich 4-column informational footer providing brand trust, store exploration, customer support, and newsletter capture (Figma node #1:4062 / #1:357).

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ Pulse Bookstore     QUICK LINKS      SUPPORT              NEWSLETTER        │
│ A community         • Books          • FAQ                Get updates on... │
│ bookshop built      • Authors        • Shipping Policy    [Your email...]   │
│ by readers.         • About Us       • Returns Policy     [SUBSCRIBE]       │
│ [FB] [IG] [X]       • Blog           • Privacy Policy                       │
│                     • Contact        • Terms of Service                     │
├─────────────────────────────────────────────────────────────────────────────┤
│ © 2024 Pulse Bookstore. All rights reserved.   Built with passion for book lovers.│
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.1 Specifications
- **Background**: Primary variant is `#1B1B3A` (Dark Navy across all production frames; alternate reference frame has `#EDEEF0`).
- **Padding**: `48px 40px 32px`.
- **Layout**: 4-column flex / grid with gap `48px`.
- **Dividing Border**: `1px solid rgba(255, 255, 255, 0.1)` above bottom bar.

### 3.2 Column Breakdown
1. **Column 1: Brand & Community** (Width: ~280px)
   - Brand Heading: `"Pulse Bookstore"` (`Public Sans`, 20px, Bold 700, `#FFFFFF`).
   - Blurb: *"A community bookshop built by readers, for readers."* (`Public Sans`, 16px, Regular 400, `#C8C5CE` / `#8483A8`).
   - Social Icons Row:
     - Facebook, Instagram, Twitter/X, Goodreads icons.
     - Each icon container has border-radius 12px, border `1px solid rgba(255,255,255,0.2)`, padding 8px.
2. **Column 2: Quick Links**
   - Header: `"QUICK LINKS"` (`Space Grotesk`, 12px, Bold 700, Letter Spacing 0.1em, Uppercase, `#FFFFFF`).
   - Link List:
     - Books (`/books`)
     - Authors (`/authors`)
     - About Us (`/about`)
     - Blog (`/blog`)
     - Contact (`/contact`)
   - Link Typography: `Public Sans`, 16px, Regular 400, Color `#C8C5CE`, Hover `#FFFFFF`.
3. **Column 3: Support**
   - Header: `"SUPPORT"` (`Space Grotesk`, 12px, Bold 700, Letter Spacing 0.1em, Uppercase, `#FFFFFF`).
   - Link List:
     - FAQ (`/faq`)
     - Shipping Policy (`/shipping`)
     - Returns Policy (`/returns`)
     - Privacy Policy (`/privacy`)
     - Terms of Service (`/terms`)
   - Link Typography: `Public Sans`, 16px, Regular 400, Color `#C8C5CE`, Hover `#FFFFFF`.
4. **Column 4: Newsletter Subscription**
   - Header: `"NEWSLETTER"` (`Space Grotesk`, 12px, Bold 700, Letter Spacing 0.1em, Uppercase, `#FFFFFF`).
   - Teaser: *"Get updates on new books and exclusive deals."* (`Public Sans`, 14px, Regular 400, Color `#C8C5CE`).
   - Input Field:
     - Background: `#FFFFFF` (or semi-dark `#2A2A4D`), Border `1px solid #C8C5CE`, Radius 4px.
     - Placeholder: `"Your email address"` (`Public Sans`, 14px, `#78767E`).
     - Padding: `11px 16px`.
   - Subscribe Button:
     - Background: `#EE476F` (Pink Accent) or `#1B1B3A` with border.
     - Text: `"SUBSCRIBE"` (`Space Grotesk`, 14px, SemiBold 600, Letter Spacing 0.05em, `#FFFFFF`).
     - Padding: `10px 24px`, Radius 4px.

### 3.3 Bottom Bar
- **Padding**: `24px 0px 0px`.
- **Layout**: Flex row, `justify-between`, `items-center`.
- **Left**: `"© 2024 Pulse Bookstore. All rights reserved."` (`Public Sans`, 14px, `#78767E` / `#C8C5CE`).
- **Right**: `"Built with passion for book lovers."` (`Public Sans`, 14px, `#78767E` / `#C8C5CE`).

---

## 4. Reusable Standard Book Card Component

Used across: Homepage (New Arrivals, Bestsellers), Fiction Category, Search Results, Author Detail, Books by Author Listing, and Product Detail (Related Books).

### 4.1 Card Anatomy
- **Outer Box**:
  - Background: `#FFFFFF` (Surface White).
  - Border: `1px solid #E2E2E4` (or `#C8C5CE`).
  - Border Radius: `8px`.
  - Padding: `16px`.
  - Overflow: Hidden.
  - Hover Effect: `translate-y: -4px`, `box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.06)`.
- **Cover Image Container**:
  - Aspect Ratio: Standard 2:3 (Book proportion) or fixed height `240px - 280px`.
  - Background: `#F3F3F5`.
  - Border Radius: `4px`.
  - Badge Ribbon (Top Right or Top Left):
    - Background: `#140003` (Dark Bestseller) or `#EE476F` (Pink).
    - Text: `"BESTSELLER"`, `"#1 BESTSELLER"`, `"STAFF PICK"`.
    - Typography: `Space Grotesk`, 11px, Bold 600, Uppercase, Color `#FFFFFF`.
- **Content Area**:
  - Series / Format Tag (Optional): `"BOOK 1 OF 2"` or `"STANDALONE"` (`Space Grotesk`, 11px, `#78767E`).
  - Title: Book Title (`Public Sans`, 16px - 18px, Bold 700, `#030220`, line-clamp-2).
  - Author: `"By " + authorName` (`Public Sans`, 14px, Regular 400, `#47464D`, links to `/authors/[slug]`).
  - Rating Stars: 5 filled/half stars in gold/amber (`#F59E0B`) + review count string `"(128)"` or `"(4.8k)"` (`Public Sans`, 12px, `#78767E`).
- **Footer Row (Price & Action)**:
  - Price: `"$24.99"` (`Public Sans`, 16px, Bold 700, `#030220`).
  - Action Button:
    - Variant A (Cart Icon Button): Pink circular button (`#EE476F` or outlined) with shopping cart icon.
    - Variant B (Text Button): `"ADD TO CART"` (`Space Grotesk`, 12px, Bold 600, `#FFFFFF` on `#EE476F` or `#1B1B3A`, Radius 4px).
    - Variant C (Options Button): `"OPTIONS"` (for multiple formats, outlined button).

---

## 5. Breadcrumb Component

Used across: Product Detail, Fiction Category, Author Detail, and Books by Author Listing.

### 5.1 Specifications
- **Layout**: Flex row, items-center, gap `8px`, wrap if necessary.
- **Divider**: Forward slash `/` or right chevron `›` in `#C8C5CE`.
- **Item Typography**:
  - Inactive Ancestor Links: `Public Sans`, 14px, Regular 400, Color `#78767E`, Hover `#030220`.
  - Current Active Page: `Public Sans`, 14px, Medium 500, Color `#030220`.
- **Example**: `Home  /  Fiction  /  Science Fiction  /  Project Hail Mary`

---

## 6. Pagination Component

Used across: Fiction Category, Search Results, Author Directory, and Books by Author Listing.

### 6.1 Specifications
- **Layout**: Flex row, justify-center, items-center, gap `8px`, padding `24px 0px`, border-top `1px solid #E2E2E4`.
- **Buttons**:
  - `Prev` / `Next`: Text button with arrow (`Space Grotesk`, 12px, Bold 600, Uppercase, `#030220`, disabled `#C8C5CE`).
  - Page Number Buttons:
    - Size: 36px x 36px square / rounded-lg (8px radius).
    - Inactive Number: Transparent background, text `#030220`, hover `#F3F3F5`.
    - Active Number: Background `#EE476F` (Pink), text `#FFFFFF`, font Bold 700.
    - Ellipsis: `"..."` for skipped pages.
