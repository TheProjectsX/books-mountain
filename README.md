# Books Mountain — Themeable Next.js Client Starter Boilerplate

A minimal, production-ready, themeable **Next.js App Router** starter boilerplate designed for client websites. Features a neutral shell, Ant Design administrative console, theme control pipeline, JWT authentication via `jose`, and Prisma ORM with MongoDB.

---

## 🚀 Key Highlights

- **Theme Control Pipeline:** Switch or customize the entire visual identity by simply editing `src/theme/designTokens.ts` or replacing it with a new `DESIGN.md` specification. Both Tailwind CSS and Ant Design automatically adopt the tokens.
- **Next.js 16+ Architecture:** Built exclusively with the App Router using the modern `src/proxy.ts` convention for route protection (replacing deprecated `middleware.ts`).
- **Ant Design SSR:** Powered by `@ant-design/nextjs-registry` and AntD 5 `ConfigProvider` with typed theme mappings.
- **Prisma + MongoDB:** Fully typed models with MongoDB ObjectID support (`prisma/schema.prisma`).
- **Secure Authentication:** Stateless JWT signed via `jose`, stored in `httpOnly`, `sameSite: lax` cookies (`admin_token`), with `bcryptjs` password hashing.
- **Production-Ready Admin Dashboard:** Includes dashboard statistics, product catalog management (create, read, update, delete modal workflows), and a read-only theme token inspector.

---

## 📁 Project Structure

```
boilerplates/
├── .env.example              # Environment variables template
├── .gitignore                # Git ignore rules
├── next.config.mjs           # Next.js configuration with transpilePackages
├── package.json              # Project scripts and dependencies
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.ts        # Tailwind configuration extended with CSS variables
├── tsconfig.json             # TypeScript strict configuration
├── README.md                 # Project documentation
├── prisma/
│   ├── schema.prisma         # Prisma schema for MongoDB
│   └── seed.ts               # Database seeder (Admin user & initial catalog)
└── src/
    ├── proxy.ts              # Next.js 16 Proxy for admin route protection
    ├── app/
    │   ├── globals.css       # Root CSS variables mapped from design tokens
    │   ├── layout.tsx        # Root layout with fonts & ThemeProvider
    │   ├── (public)/
    │   │   ├── layout.tsx    # Neutral public shell layout (Header + Footer)
    │   │   └── page.tsx      # Neutral public showcase page
    │   ├── admin/
    │   │   ├── layout.tsx    # Ant Design dashboard layout (Sidebar + Header)
    │   │   ├── page.tsx      # Dashboard metrics & overview
    │   │   ├── login/
    │   │   │   └── page.tsx  # JWT login screen
    │   │   ├── products/
    │   │   │   └── page.tsx  # Product catalog table & CRUD actions
    │   │   └── settings/
    │   │       └── page.tsx  # Read-only theme tokens & system inspector
    │   └── api/
    │       ├── auth/
    │       │   ├── login/route.ts   # Login endpoint (sets httpOnly cookie)
    │       │   ├── logout/route.ts  # Logout endpoint (clears cookie)
    │       │   └── me/route.ts      # Current user profile
    │       └── products/
    │           ├── route.ts         # GET list / POST create
    │           └── [id]/route.ts    # GET single / PATCH update / DELETE
    ├── components/
    │   ├── admin/
    │   │   ├── AdminHeader.tsx      # Admin header with logout & site link
    │   │   ├── AdminSidebar.tsx     # AntD collapsible navigation
    │   │   └── ProductModal.tsx     # Product create/edit modal
    │   ├── public/
    │   │   ├── PublicHeader.tsx     # Neutral public header
    │   │   ├── PublicFooter.tsx     # Neutral public footer
    │   │   └── ThemeShowcase.tsx    # Live design tokens inspection
    │   └── theme/
    ├── lib/
    │   ├── auth.ts           # JWT & bcrypt utilities
    │   ├── prisma.ts         # PrismaClient singleton
    │   └── utils.ts          # Currency formatter & slugifier
    └── theme/
        ├── antdTheme.ts      # Ant Design ThemeConfig mapping
        ├── designTokens.ts   # Typed design tokens parsed from DESIGN.md
        ├── fonts.ts          # Google Fonts (Public Sans & Space Grotesk)
        ├── index.ts          # Barrel export for theme
        └── ThemeProvider.tsx # AntdRegistry + ConfigProvider client wrapper
```

---

## 🎨 Theme System: How to Change the Client Theme

The starter is currently styled using the **Literary Precision** theme from `DESIGN.md`.

To rebrand this boilerplate for another client:

1. Open `src/theme/designTokens.ts`.
2. Update the color hex codes, typography definitions, or radius values.
3. **That's it!**
   - Tailwind utility classes (`bg-primary`, `text-text-primary`, `rounded-sm`) update via CSS variables in `src/app/globals.css`.
   - Ant Design components (`Button`, `Table`, `Input`, `Menu`, `Card`) update via `src/theme/antdTheme.ts`.

---

## 🛠️ Getting Started & Installation

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Ensure `.env` contains:
```env
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/books_mountain?retryWrites=true&w=majority"
JWT_SECRET="books_mountain_super_secret_jwt_key_at_least_32_characters_long_2026"
JWT_EXPIRES_IN="7d"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
ADMIN_EMAIL="admin@example.com"
ADMIN_PASSWORD="ChangeMe123!"
```

### 3. Generate Prisma Client & Push to MongoDB
```bash
npm run prisma:generate
npm run prisma:push
```

### 4. Seed Admin Account & Starter Products
```bash
npm run seed
```
> Default Admin credentials created:
> - **Email:** `admin@example.com`
> - **Password:** `ChangeMe123!`

### 5. Start Development Server
```bash
npm run dev
```
Visit:
- **Public Site:** [http://localhost:3000](http://localhost:3000)
- **Admin Console:** [http://localhost:3000/admin](http://localhost:3000/admin) (redirects to `/admin/login` if not authenticated)
