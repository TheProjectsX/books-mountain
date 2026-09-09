# 11. Page Specification: FAQ Page

- **Figma Frame**: `Bookshop - FAQ Page` (#1:659)
- **Dimensions**: Width 1280px, Height 1543.38px
- **Route**: `/faq`
- **Canvas Fill**: `#F9F9FB`

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ HEADER: Logo [Pulse Bookstore] | BOOKS AUTHORS ABOUT BLOG CONTACT | 🔍 🛒 👤│
├─────────────────────────────────────────────────────────────────────────────┤
│ PAGE TITLE:                                                                 │
│ Frequently Asked Questions                                                  │
│ Quick answers to common questions                                           │
├─────────────────────────────────────────────────────────────────────────────┤
│ CATEGORY FILTER PILLS:                                                      │
│ [ALL (Active)]   [SHIPPING]   [ORDERS]   [RETURNS]   [PAYMENTS]             │
├─────────────────────────────────────────────────────────────────────────────┤
│ FAQ ACCORDION (Max-width 768px centered, Gap 8px):                          │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │ How much does shipping cost?                                          + │ │
│ ├─────────────────────────────────────────────────────────────────────────┤ │
│ │ How long does delivery take?                                          + │ │
│ ├─────────────────────────────────────────────────────────────────────────┤ │
│ │ Can I return a book?                                                  − │ │
│ │ We offer hassle-free returns within 30 days of delivery. Books must be  │ │
│ │ in original condition. Return shipping is free for store credit.        │ │
│ ├─────────────────────────────────────────────────────────────────────────┤ │
│ │ What payment methods do you accept?                                   + │ │
│ ├─────────────────────────────────────────────────────────────────────────┤ │
│ │ Do you ship internationally?                                          + │ │
│ ├─────────────────────────────────────────────────────────────────────────┤ │
│ │ How do I contact customer support?                                    + │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────────┤
│ "STILL HAVE QUESTIONS?" CTA SECTION (Max-width 768px centered):             │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │                                                                         │ │
│ │                         Still Have Questions?                           │ │
│ │                          We're here to help                             │ │
│ │                                                                         │ │
│ │                             [CONTACT US]                                │ │
│ │                                                                         │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────────┤
│ FOOTER: 4 Columns                                                           │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Page Header (#1:661)
- **Container**: Max-width 1200px centered, padding `48px 0px 32px`, text-align center.
- **H1 Title**: `"Frequently Asked Questions"`
  - Typography: `Public Sans`, 36px, Bold (700), Color `#030220`.
- **Subtitle**:
  - Text: *"Quick answers to common questions"*
  - Typography: `Public Sans`, 16px, Regular (400), Color `#78767E`, Margin-top 8px.

---

## 2. Category Filter Pills (#1:666)
- **Layout**: Flex row, `justify-center`, gap `8px`, margin-bottom `32px`.
- **Pills List**:
  1. `ALL` (Active: Background `#EE476F`, Text `#FFFFFF`, Border-radius `12px`, Padding `8px 20px`, Font `Space Grotesk` 12px SemiBold).
  2. `SHIPPING` (Inactive: Background `#F3F3F5`, Border `1px solid #C8C5CE`, Text `#030220`, Radius `12px`, Padding `8px 20px`).
  3. `ORDERS` (Inactive).
  4. `RETURNS` (Inactive).
  5. `PAYMENTS` (Inactive).
- **Behavior**: Clicking a pill instantly filters the accordion list to only display questions from that topic.

---

## 3. FAQ Accordion Container (#1:677)
- **Container**: Width 768px centered (`margin: 0 auto;`).
- **Layout**: Column flex, gap `8px`.
- **Item Box Anatomy**:
  - Background: `#F3F3F5` (or `#FFFFFF`).
  - Border: `1px solid #C8C5CE`.
  - Border Radius: `8px`.
  - Padding: `20px 24px`.
  - Cursor: Pointer.
  - Transition: All 0.2s ease-in-out.
- **Accordion Item Questions & Content**:
  1. **Question 1**: *"How much does shipping cost?"*
     - Answer: Standard domestic shipping is free for all orders over $50. For orders under $50, flat-rate shipping is $4.99. Expedited 2-day delivery is available at checkout for $9.99.
  2. **Question 2**: *"How long does delivery take?"*
     - Answer: Orders are processed within 24 hours. Standard delivery typically takes 3–5 business days within the continental US. Tracking information is sent via email as soon as your package leaves our fulfillment center.
  3. **Question 3**: *"Can I return a book?"*
     - Answer: Yes! We offer hassle-free returns within 30 days of delivery. Books must be unread and in original condition. Return shipping is completely free when choosing store credit, or subject to a $3.50 restocking fee for original payment refunds.
  4. **Question 4**: *"What payment methods do you accept?"*
     - Answer: We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Pulse Bookstore Digital Gift Cards.
  5. **Question 5**: *"Do you ship internationally?"*
     - Answer: Yes, we ship to over 50 countries worldwide. International shipping rates and customs estimates are calculated automatically at checkout based on destination country and weight.
  6. **Question 6**: *"How do I contact customer support?"*
     - Answer: You can reach our dedicated support team 7 days a week via email at support@pulsebookstore.com, through our live chat widget, or by submitting a ticket on our Contact page. We respond to all inquiries within 24 hours.
- **Indicator Icon**:
  - Plus `+` icon when collapsed.
  - Minus `−` icon when expanded (transitions smoothly).
  - Color: `#030220`.

---

## 4. "Still Have Questions?" Section (#1:732)
- **Container**:
  - Width: 768px centered (`margin: 48px auto 0 auto`).
  - Background: `#030220` (Dark Navy).
  - Border Radius: `8px`.
  - Padding: `48px 32px`.
  - Text-align: Center.
  - Box Shadow: `0px 25px 50px -12px rgba(0, 0, 0, 0.25)`.
- **Content**:
  - **Heading**: `"Still Have Questions?"`
    - Typography: `Public Sans`, 24px, Bold (700), Color `#FFFFFF`.
  - **Subtitle**: *"We're here to help"*
    - Typography: `Public Sans`, 16px, Regular (400), Color `rgba(255, 255, 255, 0.8)`, Margin: `8px 0px 24px`.
  - **Button**:
    - Text: `"CONTACT US"`
    - Typography: `Space Grotesk`, 14px, Bold (600), Uppercase, Letter Spacing 0.05em, Color `#FFFFFF`.
    - Background: `#EE476F` (Pink Accent).
    - Padding: `12px 32px`.
    - Border Radius: `4px`.
    - Link: Navigates to `/contact`.
