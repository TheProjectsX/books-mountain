# 10. Page Specification: Blog Post Page

- **Figma Frame**: `Blog Post - 10 Books That Will Change Your Perspective` (#1:1192)
- **Dimensions**: Width 1280px (Fluid height)
- **Route**: `/blog/[slug]` (e.g., `/blog/10-books-that-will-change-your-perspective`)
- **Canvas Fill**: `#F9F9FB`

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ HEADER: Logo [Pulse Bookstore] | BOOKS AUTHORS ABOUT BLOG CONTACT | 🔍 🛒 👤│
├─────────────────────────────────────────────────────────────────────────────┤
│ ARTICLE HEADER:                                                             │
│ [READING LISTS TAG]                                                         │
│ 10 Books That Will Change Your Perspective                                  │
│ SARAH JENKINS • MAY 15, 2024 • 6 MIN READ                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│ HERO FEATURE IMAGE:                                                         │
│ [ Large wide photograph of warm, sunlit library room with cozy armchair ]   │
├─────────────────────────────────────────────────────────────────────────────┤
│ ARTICLE BODY (Max-width 768px centered):                                    │
│                                                                             │
│ We read to explore new worlds, but sometimes the most profound journeys     │
│ happen within. The right book can act as a mirror, reflecting our           │
│ thoughts, or a window, offering a vista we never knew existed...            │
│                                                                             │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │ "Books are a uniquely portable magic."                                  │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ The Power of Perspective                                                    │
│ A great narrative doesn't just tell a story; it rewires your neural         │
│ pathways. Consider the profound impact of The Overstory by Richard Powers...│
│                                                                             │
│ [ Embedded Book Recommendation Card: The Overstory ]                        │
│                                                                             │
│ Finding Connection in Isolation                                             │
│ In a highly connected yet socially fragmented era, literature offers a      │
│ vital tether...                                                             │
│                                                                             │
│ [ Social Share Buttons: Facebook | Twitter | LinkedIn | Copy Link ]         │
├─────────────────────────────────────────────────────────────────────────────┤
│ FOOTER: 4 Columns                                                           │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Article Header Area (#1:1195)
- **Container**: Width 1200px centered (inner content centered at 840px), padding `48px 0px 32px`, text-align center.
- **Category / Topic Tag**:
  - Text: `"READING LISTS"` (or `"PERSPECTIVES"`)
  - Typography: `Space Grotesk`, 12px, Bold 700, Letter Spacing 0.1em, Uppercase, Color `#EE476F`.
  - Margin-bottom: 12px.
- **H1 Article Title**:
  - Text: `"10 Books That Will Change Your Perspective"`
  - Typography: `Public Sans`, 38px - 42px, Bold (700), Line Height 48px, Color `#030220`.
  - Max-width: 800px, margin `0 auto 16px`.
- **Author Byline & Metadata**:
  - Text: `"SARAH JENKINS  •  MAY 15, 2024  •  6 MIN READ"`
  - Typography: `Space Grotesk`, 12px, Medium 500, Letter Spacing 0.1em, Uppercase, Color `#78767E`.

---

## 2. Hero Feature Image (#1:1210)
- **Container**: Max-width 1000px centered, margin-bottom `48px`.
- **Image**: Wide architectural shot of a book-lined reading room with a navy velvet armchair, sunbeams, and floor-to-ceiling bookshelves.
- **Aspect Ratio**: 16:9 or height `460px`.
- **Border Radius**: `12px`.
- **Object Fit**: Cover.

---

## 3. Article Body Typography & Flow (#1:1230)
- **Container**: Max-width 768px centered, padding `0px 24px 64px`.

### 3.1 Introductory Text
- Typography: `Public Sans`, 18px, Regular 400, Line Height 32px, Color `#030220`.
- Copy: *"We read to explore new worlds, but sometimes the most profound journeys happen within. The right book can act as a mirror, reflecting our thoughts, or a window, offering a vista we never knew existed. In this curated list, we explore ten exceptional works that challenge assumptions and invite profound shifts in understanding."*

### 3.2 Pull-Quote Banner
- **Container**:
  - Margin: `40px 0px`.
  - Padding: `24px 32px`.
  - Background: `#F3F3F5` (or transparent with border).
  - Border-left: `4px solid #EE476F`.
  - Border-radius: `0px 8px 8px 0px`.
- **Quote Text**:
  - *"“Books are a uniquely portable magic.”"*
  - Typography: `Public Sans`, 22px, Bold (700) or Italic, Line Height 32px, Color `#030220`.
  - Attribution: *— Stephen King* (`Public Sans`, 14px, Regular, Color `#78767E`, margin-top 8px).

### 3.3 Subheadings & Sections
- **H2 Section**: `"The Power of Perspective"`
  - Typography: `Public Sans`, 24px, Bold 700, Color `#030220`, Margin: `32px 0px 16px`.
  - Body: *"A great narrative doesn't just tell a story; it rewires your neural pathways. Consider the profound impact of [The Overstory by Richard Powers](file:///books/the-overstory). By intertwining human drama with the slow, majestic lives of trees, Powers demands that we expand our temporal horizon..."*
- **H2 Section**: `"Finding Connection in Isolation"`
  - Typography: `Public Sans`, 24px, Bold 700, Color `#030220`, Margin: `32px 0px 16px`.

### 3.4 Embedded Book Recommendation Card
- Container: Background `#FFFFFF`, Border `1px solid #C8C5CE`, Radius `8px`, Padding `16px`, Margin `24px 0px`.
- Layout: Flex row, gap `16px`, items-center.
- Book Cover (60px x 90px), Book Title, Author link, Price, and `"View Book →"` button.

### 3.5 Social Share & Engagement Bar
- Border-top: `1px solid #E2E2E4`, padding-top: `24px`, margin-top: `48px`.
- Layout: Flex row, `justify-between`, `items-center`.
- Left: `"SHARE THIS ARTICLE"` (`Space Grotesk`, 12px, Bold 700, `#78767E`).
- Right: Share buttons for Facebook, X, LinkedIn, Copy Link.
