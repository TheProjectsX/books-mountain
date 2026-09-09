# 09. Page Specification: About Us (Our Story)

- **Figma Frame**: `About Bookshop` (#1:1451)
- **Dimensions**: Width 1280px, Height 1701.78px
- **Route**: `/about`
- **Canvas Fill**: `#F9F9FB`

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ HEADER: Logo [Pulse Bookstore] | BOOKS AUTHORS ABOUT BLOG CONTACT | 🔍 🛒 👤│
├─────────────────────────────────────────────────────────────────────────────┤
│ HERO BANNER:                                                                │
│ [ Atmospheric photographic background with cozy reading ambiance ]          │
│                                                                             │
│                                Our Story                                    │
│                   A bookshop built by readers, for readers                  │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ 2-COLUMN NARRATIVE SECTION (Gap 48px):                                      │
│ ┌─────────────────────────────────────────┐ ┌─────────────────────────────┐ │
│ │ From a Page to a Place                  │ │ [Warm portrait of founder   │ │
│ │                                         │ │  holding stacks of books]   │ │
│ │ What started as a small Facebook group  │ │                             │ │
│ │ for book lovers quickly blossomed into  │ │ [SINCE 2024 BADGE]          │ │
│ │ something much larger. We realized      │ └─────────────────────────────┘ │
│ │ there was a profound need for a space—  │                                 │
│ │ both digital and physical—that          │                                 │
│ │ prioritized the quiet joy of discovery  │                                 │
│ │ over algorithmic recommendations.       │                                 │
│ │                                         │                                 │
│ │ Our mission is simple: to curate a      │                                 │
│ │ selection of literature that challenges,│                                 │
│ │ comforts, and inspires. We believe in   │                                 │
│ │ the tactile experience of a physical    │                                 │
│ │ book and the powerful community that    │                                 │
│ │ forms when readers share their passions.│                                 │
│ │                                         │                                 │
│ │ Every title on our shelves is hand-     │                                 │
│ │ picked. We aren't just selling books;   │                                 │
│ │ we are sharing stories we genuinely     │                                 │
│ │ believe in.                             │                                 │
│ └─────────────────────────────────────────┘                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│ VALUES / COMMUNITY PILLARS (3 Columns):                                     │
│ [ 📖 Curated by Hand ]    [ 🌿 Sustainable Pack ]    [ 👥 Community First ] │
├─────────────────────────────────────────────────────────────────────────────┤
│ FOOTER: 4 Columns                                                           │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Hero Banner (#1:1453)
- **Dimensions**: Width 1280px (100% full width), Height 420px - 480px.
- **Background Image**: Warm lifestyle photograph of a bookstore interior with books, cozy armchairs, and warm ambient lighting.
- **Overlay**: Dark neutral gradient overlay (`rgba(3, 2, 32, 0.65)`).
- **Centered Content**:
  - **Title**: H1 `"Our Story"`
    - Typography: `Public Sans`, 44px - 48px, Bold (700), Line Height 57.6px, Color `#FFFFFF`.
  - **Subtitle**: *"A bookshop built by readers, for readers"*
    - Typography: `Public Sans`, 18px, Regular (400), Color `rgba(255, 255, 255, 0.9)`, Margin-top 12px.

---

## 2. Narrative Section: "From a Page to a Place" (#1:1470)
- **Container**: Max-width 1200px centered, padding `80px 0px`.
- **Layout**: 2 Columns Grid (Split 55% / 45%, Gap: 48px, items-center).
- **Left Column (Editorial Narrative)**:
  - **Section Heading**: H2 `"From a Page to a Place"`
    - Typography: `Public Sans`, 32px, Bold (700), Line Height 40px, Color `#030220`, Margin-bottom 24px.
  - **Paragraph 1**:
    - *"What started as a small Facebook group for book lovers quickly blossomed into something much larger. We realized there was a profound need for a space—both digital and physical—that prioritized the quiet joy of discovery over algorithmic recommendations."*
    - Typography: `Public Sans`, 16px, Regular (400), Line Height 28px, Color `#47464D`.
  - **Paragraph 2**:
    - *"Our mission is simple: to curate a selection of literature that challenges, comforts, and inspires. We believe in the tactile experience of a physical book and the powerful community that forms when readers share their passions."*
    - Typography: `Public Sans`, 16px, Regular (400), Line Height 28px, Color `#47464D`, Margin-top 16px.
  - **Paragraph 3**:
    - *"Every title on our shelves is hand-picked. We aren't just selling books; we are sharing stories we genuinely believe in."*
    - Typography: `Public Sans`, 16px, Regular (400), Line Height 28px, Color `#47464D`, Margin-top 16px.
- **Right Column (Founder Photo & Badge)**:
  - Container: Relative positioning.
  - Image: Portrait of smiling founder holding stacked classic books (*To Kill a Mockingbird*, *Moby-Dick*, *Jane Eyre*).
  - Image Dimensions: Width 100%, Height ~500px, Object-fit: cover, Radius: `12px`.
  - Floating Badge (Bottom Left of photo):
    - Position: Absolute (`bottom: 24px`, `left: 24px`).
    - Background: `#FFFFFF`.
    - Text: `"SINCE 2024"`
    - Typography: `Space Grotesk`, 11px, Bold 700, Letter Spacing 0.1em, Uppercase, Color `#030220`.
    - Padding: `6px 14px`, Radius `4px`, Shadow: `0px 4px 12px rgba(0,0,0,0.1)`.

---

## 3. Core Values / Community Pillars
- **Container**: Max-width 1200px centered, padding `48px 0px 80px`.
- **Layout**: 3 Columns (Gap: 32px).
- **Cards**:
  1. **Hand-Curated Selection**:
     - Icon: Open book icon in `#EE476F`.
     - Title: `"Hand-Curated Curation"` (`Public Sans`, 18px, Bold 700).
     - Copy: *"We read what we recommend. No automated lists or commercial pay-for-placement."*
  2. **Eco-Friendly Packaging**:
     - Icon: Leaf / recycle icon.
     - Title: `"Plastic-Free Shipping"` (`Public Sans`, 18px, Bold 700).
     - Copy: *"100% recyclable cardboard book wraps and biodegradable protective padding."*
  3. **Reader-Powered Community**:
     - Icon: Two readers chatting icon.
     - Title: `"Built by Readers"` (`Public Sans`, 18px, Bold 700).
     - Copy: *"Direct forums, reading clubs, and author dialogues that connect book lovers globally."*
