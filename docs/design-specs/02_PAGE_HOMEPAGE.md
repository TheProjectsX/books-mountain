# 02. Page Specification: Homepage (Extended Version)

- **Figma Frame**: `Bookshop Landing Page - Extended Version` (#1:2)
- **Dimensions**: Width 1280px, Height 4600.94px
- **Route**: `/`
- **Canvas Fill**: `#F9F9FB` (Light neutral)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ ANNOUNCEMENT BAR: Free shipping on orders over $50 | Follow on FB           │
├─────────────────────────────────────────────────────────────────────────────┤
│ HEADER: Logo [Pulse Bookstore] | BOOKS AUTHORS ABOUT BLOG CONTACT | 🔍 🛒 👤│
├─────────────────────────────────────────────────────────────────────────────┤
│ HERO SECTION:                                                               │
│ Discover Your Next Great Read                                               │
│ [Shop New Arrivals →]               [Curated Stack of Books Photography]    │
├─────────────────────────────────────────────────────────────────────────────┤
│ CATEGORY PILLS BAR:                                                         │
│ [Fiction] [Non-Fiction] [Science Fiction] [Fantasy] [Biography] [History]...│
├─────────────────────────────────────────────────────────────────────────────┤
│ SECTION: NEW ARRIVALS                                          [View All →] │
│ [Book Card 1]      [Book Card 2]      [Book Card 3]      [Book Card 4]      │
├─────────────────────────────────────────────────────────────────────────────┤
│ SECTION: STAFF PICKS (Bento Grid #F3F3F5)                                   │
│ ┌───────────────────────────────┐ ┌───────────────────────────────────────┐ │
│ │ Featured Hero: The Overstory  │ │ Normal People by Sally Rooney         │ │
│ │ Quote & Detailed Review       │ ├───────────────────────────────────────┤ │
│ │ [$19.95] [Add to Cart]        │ │ Educated by Tara Westover             │ │
│ └───────────────────────────────┘ └───────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────────┤
│ SECTION: BESTSELLERS                                                        │
│ [#1 BESTSELLER]   [STAFF PICK]     [TOP RATED]      [BESTSELLER]            │
│ [Book Card]       [Book Card]      [Book Card]      [Book Card]             │
├─────────────────────────────────────────────────────────────────────────────┤
│ SECTION: WHAT OUR READERS SAY (Reader Reviews #F0F2F5)                      │
│ [★★★★★ Quote 1]           [★★★★★ Quote 2]           [★★★★★ Quote 3]         │
├─────────────────────────────────────────────────────────────────────────────┤
│ SECTION: FROM OUR BLOG TEASER                                               │
│ [Blog Card 1]              [Blog Card 2]            [Blog Card 3]           │
├─────────────────────────────────────────────────────────────────────────────┤
│ SECTION: FACEBOOK COMMUNITY INTEGRATION (Soft Blue #DCE2F3)                 │
│ Join Our Reader Community - 24,000+ Book Lovers Discussing Daily            │
│ [Join Facebook Group Button]                                                │
├─────────────────────────────────────────────────────────────────────────────┤
│ FOOTER: 4 Columns (Brand, Quick Links, Support, Newsletter)                 │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Hero Section (#1:184)
- **Dimensions**: Width 1280px, Height 640px.
- **Background**: Photographic library atmosphere with deep rich tones and warm interior lighting.
- **Layout**: Centered container (Width 1200px), 2-column split or overlaid text container.
- **Text Container** (Left / Center, max-width 600px):
  - **Headline**: `"Discover Your Next Great Read"`
    - Typography: `Public Sans`, 48px, Bold (700), Line Height 57.6px (1.2), Letter Spacing -0.02em, Color `#FFFFFF` (or high-contrast `#030220` depending on overlay).
  - **Subtitle**: *"Curated picks, honest reviews, and a community of book lovers dedicated to the written word."*
    - Typography: `Public Sans`, 18px, Regular (400), Line Height 28px, Color `rgba(255, 255, 255, 0.85)`.
    - Margin-top: 16px.
  - **Primary CTA Button**:
    - Text: `"Shop New Arrivals →"`
    - Typography: `Space Grotesk`, 14px, Bold (600), Uppercase, Letter Spacing 0.05em, Color `#FFFFFF`.
    - Background: `#EE476F` (Pink Accent).
    - Padding: `14px 28px`.
    - Border Radius: `4px`.
    - Margin-top: 32px.
- **Visual Asset**:
  - Right container features an artistic stack of books (*The Overstory*, *Where the Crawdads Sing*, *Normal People*, *Educated*, *Circe*) with warm paper textures.

---

## 2. Category Pills Bar (#1:13)
- **Padding**: `48px 40px 24px`, Max-width 1200px centered.
- **Border**: Bottom border `1px solid #E2E2E4`.
- **Layout**: Horizontal flex row, `overflow-x: auto`, gap `8px`, no visible scrollbar (`scrollbar-width: none`).
- **Pills List**:
  1. `Fiction`
  2. `Non-Fiction`
  3. `Science Fiction`
  4. `Fantasy`
  5. `Biography`
  6. `History`
  7. `Mystery`
  8. `Romance`
  9. `Thriller`
  10. `Young Adult`
- **Pill Item Style**:
  - Padding: `8px 20px`.
  - Border Radius: `9999px` (Full pill).
  - Inactive State: Background `#FFFFFF`, Border `1px solid #E2E2E4`, Text `#030220` (`Space Grotesk`, 13px, Medium 500), Hover Background `#F3F3F5`.
  - Active State: Background `#EE476F`, Border `1px solid #EE476F`, Text `#FFFFFF`.

---

## 3. Section: New Arrivals (#1:29)
- **Padding**: `48px 40px`, Max-width 1200px centered.
- **Header Row**:
  - Left: Section Title `"New Arrivals"` (`Public Sans`, 28px, Bold 700, `#030220`).
  - Right: Link `"VIEW ALL →"` (`Space Grotesk`, 12px, Bold 700, Uppercase, Color `#EE476F`, links to `/books`).
- **Cards Grid**: 4 Columns (Gap: 16px).
- **Featured Titles**:
  1. *The Midnight Library* by Matt Haig - `$24.99`, Rating 4.6 (128 reviews).
  2. *Tomorrow, and Tomorrow, and Tomorrow* by Gabrielle Zevin - `$28.00`, Rating 4.8 (342 reviews).
  3. *Project Hail Mary* by Andy Weir - `$24.99`, Rating 4.8 (1,245 reviews).
  4. *Klara and the Sun* by Kazuo Ishiguro - `$26.50`, Rating 4.5 (89 reviews).

---

## 4. Section: Staff Picks (Bento Grid) (#1:102)
- **Background**: `#F3F3F5` (Soft grey contrast block, full width).
- **Padding**: `48px 40px`.
- **Container**: 1200px centered.
- **Section Title**: `"Staff Picks"` (`Public Sans`, 28px, Bold 700, `#030220`).
- **Bento Grid Anatomy** (2 Columns, asymmetric split 60% / 40%):
  - **Left (Hero Card - "Staff Favorite")**:
    - Background: `#FFFFFF`, Border `1px solid #C8C5CE`, Radius 12px, Padding 32px.
    - Tag: `"STAFF FAVORITE"` (`Space Grotesk`, 11px, Bold 700, `#EE476F`).
    - Book: *The Overstory* by Richard Powers.
    - Large Cover preview.
    - Staff Quote: *"A monumental novel about trees and people. It completely changed the way I look at the natural world. Essential reading for anyone who cares about the environment, structured like a soaring canopy."*
    - Rating: `★★★★★ 4.9`.
    - Price: `$19.95`.
    - Buttons: `"Add to Cart - $19.95"` (`#1B1B3A`, radius 4px) + `"READ REVIEW"` link.
  - **Right (Stacked Cards - 2 secondary picks)**:
    - Card 1: *Normal People* by Sally Rooney - Cover thumbnail, description snippet, Price `$16.00`.
    - Card 2: *Educated* by Tara Westover - Cover thumbnail, description snippet, Price `$17.99`.

---

## 5. Section: Bestsellers (#1:197)
- **Padding**: `48px 40px`, Max-width 1200px.
- **Header**:
  - Title: `"🏆 Bestsellers"` (`Public Sans`, 28px, Bold 700).
  - Subtitle: *"What our community is reading right now."* (`Public Sans`, 14px, `#78767E`).
- **Cards Grid**: 4 or 5 Columns horizontal scroll or responsive grid.
- **Ribbon Badges**:
  - Ribbon 1: `"#1 BESTSELLER"` (Dark `#140003`).
  - Ribbon 2: `"STAFF PICK"` (Teal/Pink `#EE476F`).
  - Ribbon 3: `"TOP RATED"` (Amber `#F59E0B`).

---

## 6. Section: Reader Reviews (#1:285)
- **Background**: `#F0F2F5` (Soft cool grey, full width).
- **Padding**: `48px 40px`.
- **Header**: Centered H2 `"What Our Readers Say"` (`Public Sans`, 28px, Bold 700).
- **Review Cards (3 Columns, Gap: 24px)**:
  - Container: Background `#FFFFFF`, Border `1px solid #C8C5CE`, Radius 8px, Padding 24px.
  - Star Rating: `★★★★★` (Amber `#F59E0B`).
  - Review Quote: *"Pulse Bookstore has completely revitalized my reading habit. The personalized staff notes and lightning-fast delivery make it feel like my favorite local indie shop, right online."*
  - Reviewer Meta:
    - Avatar circle (40px x 40px).
    - Reviewer Name (e.g., *"Marcus Chen"*).
    - Tag: *"Verified Buyer • Review for Project Hail Mary"*.

---

## 7. Section: From Our Blog Teaser (#1:150)
- **Padding**: `48px 40px`, Max-width 1200px centered.
- **Header**: H2 `"From Our Blog"` (`Public Sans`, 28px, Bold 700).
- **Blog Cards (3 Columns, Gap: 24px)**:
  1. **Article 1**:
     - Thumbnail Image: Reading room armchair.
     - Tag: `READING LISTS` (`Space Grotesk`, 11px, `#EE476F`).
     - Title: *"10 Books That Will Change Your Perspective"* (`Public Sans`, 18px, Bold 700).
     - Read time: `6 MIN READ • MAY 15, 2024`.
     - Excerpt: *"Explore ten exceptional works that challenge assumptions and invite profound shifts in understanding."*
     - Link to `/blog/10-books-that-will-change-your-perspective`.
  2. **Article 2**:
     - Tag: `AUTHOR INTERVIEWS`.
     - Title: *"Under the Surface: In Conversation with Andy Weir"*.
  3. **Article 3**:
     - Tag: `COMMUNITY PICKS`.
     - Title: *"Our Fall 2024 Community Reading Guide"*.

---

## 8. Section: Facebook Community Integration (#1:320)
- **Background**: `rgba(220, 226, 243, 0.5)` (Soft atmospheric blue tint).
- **Padding**: `48px 40px`.
- **Card Container**: Background `#FFFFFF`, Radius 12px, Border `1px solid #C8C5CE`, Padding 32px, Max-width 800px centered.
- **Content**:
  - Facebook Group Icon & Badge.
  - Headline: `"Join Our Facebook Community"` (`Public Sans`, 24px, Bold 700).
  - Copy: *"Book discussions, live author Q&As, monthly giveaways, and honest book clubs with over 24,000 active readers."*
  - CTA Button: `"JOIN COMMUNITY (24K+ MEMBERS)"` (`Space Grotesk`, 13px, SemiBold 600, Color `#FFFFFF`, Background `#1877F2` or `#1B1B3A`).
