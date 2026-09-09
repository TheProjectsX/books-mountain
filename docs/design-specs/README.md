# Figma Bookstore: Master Design & Technical Specification Suite

Welcome to the comprehensive design structure documentation for the **Pulse Bookstore** project, extracted directly from the Figma design file:
🔗 **[Figma Bookstore Design](https://www.figma.com/design/lLAPazPvmDc7552QTHbp8V/Bookstore)**

This documentation contains zero missing details, exhaustively covering all design system tokens, global components, the 11 desktop full-screen pages, data architecture, and relational models.

---

## 📑 Documentation Index

| # | Document | Scope & Contents |
| :---: | :--- | :--- |
| **00** | [**Design System & Tokens**](./00_DESIGN_SYSTEM_AND_TOKENS.md) | Typography (`Public Sans`, `Space Grotesk`), hex color palette, grid system (1280px canvas, 1200px container), border radii, elevation shadows, and micro-interactions. |
| **01** | [**Global Components**](./01_GLOBAL_COMPONENTS.md) | Announcement Bar, Unified Navigation Header with uppercase links & cart badge ("3"), Unified 4-column Footer, Book Card anatomy, Breadcrumbs, and Pagination. |
| **02** | [**Homepage (Extended)**](./02_PAGE_HOMEPAGE.md) | Hero banner with atmospheric photography & CTA, Category pills bar, New Arrivals grid, Staff Picks Bento grid, Bestsellers ribbon carousel, Reader Reviews, Blog teaser, and Facebook community card. |
| **03** | [**Product Detail Page**](./03_PAGE_PRODUCT_DETAIL.md) | *Project Hail Mary* 12-column showcase, cover & bestseller badge, rating, format selector, quantity stepper, "Add to Cart", specs table (Pages, Publisher, ISBN), synopsis, and Related Books carousel. |
| **04** | [**Category / Catalog Page**](./04_PAGE_CATEGORY_CATALOG.md) | Fiction category page, breadcrumbs, multi-attribute filter toolbar (Format, Price Range, Rating 4+ stars), sorting dropdown, 4-column 8-card grid, and numbered pagination. |
| **05** | [**Search Results Page**](./05_PAGE_SEARCH_RESULTS.md) | Top search bar with count for *"The Martian"*, 2-column layout: left facet filter sidebar (Genre, Format, Price Range) and right 4-column book results grid. |
| **06** | [**Author Directory**](./06_PAGE_AUTHOR_DIRECTORY.md) | Our Authors page, A-Z alphabetical filter bar, 4-column author portrait cards with genre tags & book counts, pagination, and "Featured Authors" highlight section (*N.K. Jemisin*, *Neil Gaiman*, *Donna Tartt*). |
| **07** | [**Author Profile Page**](./07_PAGE_AUTHOR_PROFILE.md) | *Andy Weir* profile, author portrait hero, bestseller badge, rating, bibliography summary, "Follow Author" & "Share" buttons, detailed biography narrative, and preview books showcase. |
| **08** | [**Books by Author Listing**](./08_PAGE_AUTHOR_BOOKS_LISTING.md) | Author sub-header bar with back link, format filter pills (`ALL`, `HARDCOVER`, `PAPERBACK`, `E-BOOK`, `AUDIOBOOK`), sort selector, and 4-column book cards with series tags (`BOOK 1 OF 2`, `STANDALONE`). |
| **09** | [**About Us (Our Story)**](./09_PAGE_ABOUT_US.md) | Full-width hero banner *"Our Story - A bookshop built by readers, for readers"*, 2-column narrative *"From a Page to a Place"* with founder photo & `"SINCE 2024"` badge, and core values pillars. |
| **10** | [**Blog Post Page**](./10_PAGE_BLOG_POST.md) | Editorial article *"10 Books That Will Change Your Perspective"*, author byline, wide library feature image, pull-quote banner, embedded book recommendations, and social sharing. |
| **11** | [**FAQ Page**](./11_PAGE_FAQ.md) | Frequently Asked Questions, topic filter tabs (`ALL`, `SHIPPING`, `ORDERS`, `RETURNS`, `PAYMENTS`), interactive expandable accordion items, and dark *"Still Have Questions?"* CTA card. |
| **12** | [**Contact Page**](./12_PAGE_CONTACT.md) | 3 Quick Action Cards (Chat with Us, Email Us, Join Community), 2-column lower section with message form (Name, Email, Subject, Message) and Visit Us Online / Live Chat card. |
| **13** | [**Data Architecture & Prisma**](./13_DATA_ARCHITECTURE_AND_PRISMA.md) | Full Prisma schema for MongoDB, relational models (Author, Book, Category, Review, BlogPost, FaqItem, Order), and seed data definitions. |

---

## 🗺️ Route Mapping & Next.js App Router Structure

```
src/app/
├── (public)/
│   ├── layout.tsx                     # Global Header + Announcement Bar + Footer
│   ├── page.tsx                       # Page 1: Homepage (Extended)
│   ├── books/
│   │   ├── page.tsx                   # Page 3: Fiction / All Books Catalog
│   │   └── [slug]/
│   │       └── page.tsx               # Page 2: Product Detail (e.g. /books/project-hail-mary)
│   ├── search/
│   │   └── page.tsx                   # Page 4: Search Results
│   ├── authors/
│   │   ├── page.tsx                   # Page 5: Author Directory (A-Z)
│   │   └── [slug]/
│   │       ├── page.tsx               # Page 6: Author Profile (e.g. /authors/andy-weir)
│   │       └── books/
│   │           └── page.tsx           # Page 7: Books by Author Catalog
│   ├── about/
│   │   └── page.tsx                   # Page 8: About Us (Our Story)
│   ├── blog/
│   │   ├── page.tsx                   # Blog Index
│   │   └── [slug]/
│   │       └── page.tsx               # Page 9: Blog Single Article
│   ├── faq/
│   │   └── page.tsx                   # Page 10: FAQ with Accordion
│   └── contact/
│       └── page.tsx                   # Page 11: Contact Page
```

---

## 🎨 Quick Reference: Global Style Tokens

```css
:root {
  /* Fonts */
  --font-primary: 'Public Sans', sans-serif;
  --font-accent: 'Space Grotesk', sans-serif;

  /* Colors */
  --bg-canvas: #F9F9FB;
  --bg-surface: #FFFFFF;
  --bg-muted: #F3F3F5;
  --bg-navy-dark: #1B1B3A;
  --text-primary: #030220;
  --text-muted: #47464D;
  --accent-pink: #EE476F;
  --border-subtle: #C8C5CE;
  --border-light: #E2E2E4;

  /* Layout */
  --canvas-width: 1280px;
  --container-max: 1200px;
  --header-height: 64px;
  --announcement-height: 36px;
}
```
