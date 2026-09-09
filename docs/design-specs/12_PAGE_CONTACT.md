# 12. Page Specification: Contact Page

- **Figma Frame**: `Contact Page - Bookshop` (#1:1545)
- **Dimensions**: Width 1280px (Fluid height)
- **Route**: `/contact`
- **Canvas Fill**: `#F9F9FB`

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ HEADER: Logo [Pulse Bookstore] | BOOKS AUTHORS ABOUT BLOG CONTACT | 🔍 🛒 👤│
├─────────────────────────────────────────────────────────────────────────────┤
│ PAGE TITLE:                                                                 │
│ Get in Touch                                                                │
│ We'd love to hear from you                                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│ QUICK ACTION CARDS (3 Columns, Gap 24px):                                   │
│ ┌───────────────────────┐ ┌───────────────────────┐ ┌─────────────────────┐ │
│ │ [💬 Chat Icon]        │ │ [✉️ Envelope Icon]    │ │ [👥 Community Icon] │ │
│ │ Chat with Us          │ │ Email Us              │ │ Join Our Community  │ │
│ │ Reply within minutes  │ │ Response within 24 hrs│ │ Connect with readers│ │
│ │ [OPEN MESSENGER]      │ │ [EMAIL NOW]           │ │ [JOIN GROUP]        │ │
│ └───────────────────────┘ └───────────────────────┘ └─────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────────┤
│ 2-COLUMN LOWER SECTION (12 Columns, Gap 32px):                              │
│ ┌───────────────────────────────────────┐ ┌───────────────────────────────┐ │
│ │ SEND US A MESSAGE (Span 7)            │ │ VISIT US ONLINE (Span 5)      │ │
│ │                                       │ │                               │ │
│ │ NAME                                  │ │ [🌐] FACEBOOK                 │ │
│ │ [Enter your full name               ] │ │ [📷] INSTAGRAM                │ │
│ │                                       │ │ [✉️] EMAIL                    │ │
│ │ EMAIL                                 │ └───────────────────────────────┘ │
│ │ [Enter your email address           ] │ ┌───────────────────────────────┐ │
│ │                                       │ │ [💬 CHAT ICON]                │ │
│ │ SUBJECT                               │ │                               │ │
│ │ [Order Inquiry                      ▾]│ │ CHAT WITH US LIVE             │ │
│ │                                       │ │ Start a real-time session     │ │
│ │ MESSAGE                               │ │ with a reader specialist.     │ │
│ │ [Write your message here...         ] │ │                               │ │
│ │                                       │ │                               │ │
│ │ [SEND MESSAGE BUTTON]                 │ │                               │ │
│ └───────────────────────────────────────┘ └───────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────────┤
│ FOOTER: 4 Columns                                                           │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Page Header (#1:1548)
- **Container**: Max-width 1200px centered, padding `48px 0px 32px`, text-align center.
- **H1 Headline**: `"Get in Touch"`
  - Typography: `Public Sans`, 36px, Bold (700), Color `#030220`.
- **Subtitle**:
  - Text: *"We'd love to hear from you"*
  - Typography: `Public Sans`, 16px, Regular (400), Color `#78767E`, Margin-top 8px.

---

## 2. Quick Action Cards (#1:1560)
- **Container**: Max-width 1200px centered, margin-bottom `48px`.
- **Layout**: CSS Grid, 3 Columns (Gap: 24px).
- **Cards Anatomy**:
  - Background: `#FFFFFF`.
  - Border: `1px solid #C8C5CE`.
  - Border Radius: `8px`.
  - Padding: `32px 24px`.
  - Text-align: Center.
  - Hover: `translate-y: -2px`, subtle shadow.
- **Card 1: Chat with Us**:
  - Icon: Message bubble SVG (`#EE476F`, 28px x 28px).
  - Title: `"Chat with Us"` (`Public Sans`, 18px, Bold 700, `#030220`).
  - Subtitle: *"Reply within minutes"* (`Public Sans`, 14px, Color `#78767E`, margin `4px 0px 16px`).
  - Button:
    - Text: `"OPEN MESSENGER"`
    - Typography: `Space Grotesk`, 12px, Bold 600, Color `#FFFFFF`.
    - Background: `#EE476F` (Pink Accent).
    - Width: 100%, Height: 40px, Radius: 4px.
- **Card 2: Email Us**:
  - Icon: Envelope SVG (`#030220`, 28px x 28px).
  - Title: `"Email Us"` (`Public Sans`, 18px, Bold 700, `#030220`).
  - Subtitle: *"Response within 24 hours"* (`Public Sans`, 14px, Color `#78767E`, margin `4px 0px 16px`).
  - Button:
    - Text: `"EMAIL NOW"`
    - Typography: `Space Grotesk`, 12px, Bold 600, Color `#030220`.
    - Background: `#FFFFFF`, Border: `1px solid #C8C5CE`.
    - Width: 100%, Height: 40px, Radius: 4px.
- **Card 3: Join Our Community**:
  - Icon: Readers group / people SVG (`#030220`, 28px x 28px).
  - Title: `"Join Our Community"` (`Public Sans`, 18px, Bold 700, `#030220`).
  - Subtitle: *"Connect with other readers"* (`Public Sans`, 14px, Color `#78767E`, margin `4px 0px 16px`).
  - Button:
    - Text: `"JOIN GROUP"`
    - Typography: `Space Grotesk`, 12px, Bold 600, Color `#FFFFFF`.
    - Background: `#1B1B3A` (Dark Navy).
    - Width: 100%, Height: 40px, Radius: 4px.

---

## 3. Two-Column Lower Section (#1:1610)
- **Container**: Max-width 1200px centered, padding-bottom `64px`.
- **Layout**: CSS Grid with 12 Columns (Form: Span 7, Sidebar: Span 5, Gap: 48px).

### 3.1 Left Column: Contact Form (Span 7)
- **Container**: Background `#FFFFFF`, Border `1px solid #C8C5CE`, Radius `8px`, Padding `32px`.
- **Form Heading**: `"Send Us a Message"` (`Public Sans`, 22px, Bold 700, `#030220`, Margin-bottom 24px).
- **Form Fields**:
  1. **Name**:
     - Label: `"NAME"` (`Space Grotesk`, 11px, Bold 700, Letter Spacing 0.05em, `#030220`).
     - Input: Height 44px, Background `#FFFFFF`, Border `1px solid #C8C5CE`, Radius 4px, Padding `8px 16px`.
  2. **Email**:
     - Label: `"EMAIL"` (`Space Grotesk`, 11px, Bold 700, Letter Spacing 0.05em, `#030220`, Margin-top 16px).
     - Input: Height 44px, Background `#FFFFFF`, Border `1px solid #C8C5CE`, Radius 4px, Padding `8px 16px`.
  3. **Subject**:
     - Label: `"SUBJECT"` (`Space Grotesk`, 11px, Bold 700, Letter Spacing 0.05em, `#030220`, Margin-top 16px).
     - Select Dropdown: Height 44px, Background `#FFFFFF`, Border `1px solid #C8C5CE`, Radius 4px, Padding `8px 16px`.
     - Options: *Order Inquiry*, *Book Recommendation / Special Order*, *Feedback & Suggestions*, *Press & Partnerships*, *General Question*.
  4. **Message**:
     - Label: `"MESSAGE"` (`Space Grotesk`, 11px, Bold 700, Letter Spacing 0.05em, `#030220`, Margin-top 16px).
     - Textarea: Height 140px, Background `#FFFFFF`, Border `1px solid #C8C5CE`, Radius 4px, Padding `12px 16px`.
- **Submit Button**:
  - Text: `"SEND MESSAGE"`
  - Typography: `Space Grotesk`, 14px, Bold 600, Uppercase, Color `#FFFFFF`.
  - Background: `#EE476F` (Pink Accent).
  - Width: 100%, Height: 46px, Radius 4px, Margin-top 24px.

### 3.2 Right Column: Sidebar & Live Chat (Span 5)
- **Card 1: Visit Us Online**:
  - Container: Background `#FFFFFF`, Border `1px solid #C8C5CE`, Radius `8px`, Padding `24px`, Margin-bottom `24px`.
  - Title: `"Visit Us Online"` (`Public Sans`, 16px, Bold 700, `#030220`, Margin-bottom 16px).
  - Links:
    - `[🌐] FACEBOOK` (`Space Grotesk`, 12px, Bold 600, Color `#EE476F`).
    - `[📷] INSTAGRAM` (`Space Grotesk`, 12px, Bold 600, Color `#EE476F`, Margin-top 12px).
    - `[✉️] EMAIL` (`Space Grotesk`, 12px, Bold 600, Color `#EE476F`, Margin-top 12px).
- **Card 2: Live Chat Highlight Card**:
  - Container: Background `#1B1B3A` (Dark Navy), Radius `8px`, Padding `32px 24px`, Text-align center.
  - Icon: Chat bubble SVG (32px x 32px, fill `#FFFFFF`, margin `0 auto 12px`).
  - Title: `"CHAT WITH US LIVE"` (`Space Grotesk`, 14px, Bold 700, Letter Spacing 0.05em, `#FFFFFF`).
  - Copy: *"Need help finding a book or tracking an existing shipment? Our reader concierge is online now."* (`Public Sans`, 14px, Color `rgba(255, 255, 255, 0.8)`, margin-top 8px).
