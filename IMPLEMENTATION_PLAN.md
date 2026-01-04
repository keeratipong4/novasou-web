# Novasou Web Application - Implementation Plan

## Goal Description
Build a pixel-perfect, responsive "frontend head" web application for Novasou based on the provided Figma design. The application must be integrated with Strapi CMS in the future, allowing for dynamic page creation and content management without developer intervention for routing.

## Technology Stack
- **Framework**: **Next.js 14+ (App Router)**. Chosen for its robust Headless CMS integration (SSG/ISR), SEO capabilities, and dynamic routing.
- **Language**: **TypeScript**. For type safety, especially important when mapping CMS data models.
- **Styling**: **Tailwind CSS**.
  - *Why*: Requested by user. Rapid development with utility classes.
- **Iconography**: **Lucide React** or **React Icons** (consistent with modern clean design).
- **State Management**: **React Context** (for global UI state) + **TanStack Query (React Query)** (for fetching Strapi data).
  - *Note*: User preferred React Query.
- **Deployment**: Vercel (recommended) or any Node.js host.

## Design System & Theme
Based on Figma analysis and User Style Guide.

### Colors (Tailwind Config)
To be configured in `tailwind.config.ts`:
- `primary`: `#284BE0` (Bright Blue)
- `primary-dark`: `#04184C` (Darker Blue)
- `gradient-start`: `#284BE3`
- `gradient-end`: `#002CAD`
- `gray-light`: `#EAEAEA`
- `background`: `#FFFFFF`
- `text-main`: `#1A1A1A`

### Typography
- **Headings**: `Audiowide` (Google Fonts) - Futuristic, matching the "Novasou" branding.
- **Body**: `Titillium Web` (Google Fonts) - Technical, clean, highly readable.

### UI Elements
- **Buttons**:
  - `btn-primary`: Bright Blue (`#284BE0`), rounded corners, white text.
  - `btn-outline`: Transparent, Blue border, Blue text.
  - `btn-text`: clean link style with arrow icon.
- **Cards**: White background, subtle shadow, rounded corners.

## URL Structure & Sitemap
Mixed strategy: Static routes for core pages + Dynamic catch-all for CMS pages.
- `/` (Home)
- `/about-us` (Static Route)
- `/teams` (Static Route)
- `/growth-benefits` (Static Route)
- `/life-at-novasou` (Static Route)
- `/careers` (List)
- `/careers/[slug]` (Job Detail - Dynamic Route)
- `/contact` (Static Route)
- `/[...slug]`: **Catch-all route** for other CMS pages.

## Project Folder Structure
Refactored to keep shared code outside `app`.
```
/src
  /app
    /about-us
      page.tsx
    /teams
      page.tsx
    /growth-benefits
      page.tsx
    /life-at-novasou
      page.tsx
    /careers
      /[slug]
        page.tsx
      page.tsx
    /contact
      page.tsx
    /[[...slug]]      # Dynamic Route Handler (Low priority catch-all)
      page.tsx
    layout.tsx        # Main Root Layout
    error.tsx         # Global Error boundary
    loading.tsx       # Global Loading state
    globals.css       # Tailwind directives
  /styles
    # Additional global styles if needed
  /components
    /global         # Header, Footer, LayoutWrapper
    /ui             # Button, Card, Input (Atomic components)
    /sections       # Hero, TextBlock, Features
  /lib
    action.ts       # Server Actions
    strapi-service.ts # API fetcher utilities
    types.ts        # TypeScript interfaces for Strapi models
```

## Detailed Page Breakdown
### 1. Global Layout
- **Header**: Logo, Nav (Home, Careers, Life at Novasou, Teams, Growth & Benefits, About Us, Contact), CTA (View Open Roles).
- **Footer**: Nav groups, Copyright, Socials.

### 2. Home Page (`/`)
- **Hero**: "Audiowide" Headline, Subhead, CTA (View Roles / Join Community).
- **Why Novasou**: 4 Cards (Culture, Learning, Impact, Flexibility).
- **Teams**: Grid of teams (Eng, Data, Product, etc.).
- **Life at Novasou**: Intro + CTA.
- **Testimonials**: Quotes from team.
- **Partners**: Logo strip.
- **Final CTA**: "Ready to make your mark?".

### 3. Careers (`/careers`)
- **Job Listings**: Filterable list (Title, Location, Dept, Stack).
- pagination/load more.

### 4. Job Detail (`/careers/[slug]`)
- Dynamic content: Title, About role, Responsibilities, Requirements, Benefits, Apply CTA.

### 5. Other Pages
- **Life at Novasou**: Culture, Values, Gallery, Testimonials.
- **Teams**: Team cards with descriptions.
- **Growth & Benefits**: Overview of benefits/L&D.
- **About Us**: Mission, Vision, Nordic-Thai approach.
- **Contact**: Form (Name, Email, Subject, Role, Message) + Office Info.

## Strapi Content Model (Architecture)
To achieve "create pages without code", we will use **Dynamic Zones**.

### 1. Collection Type: `Pages`
- **Field: `slug`** (UID): The URL part (e.g., `about-us`, `services/offshore`).
- **Field: `seo`** (Component): Meta Title, Meta Description, OG Image.
- **Field: `content_sections`** (Dynamic Zone):
  - *This allows the editor to stack components in any order.*
  - **Component: `Hero`**: Title, Subtitle, Background Image, CTA Button.
  - **Component: `RichText`**: WYSIWYG editor for general content.
  - **Component: `FeatureList`**: List of items (Icon + Title + Description).
  - **Component: `ImageTextSplit`**: Image on left/right, Text on other side.
  - **Component: `TestimonialSlider`**: Selection of testimonials.
  - **Component: `CallToAction`**: Full-width banner with button.
  - **Component: `JobListing`**: (Optional) Auto-fetch job list.

### 2. Collection Type: `Jobs` (for Careers page)
- Title, Department, Location, Type (Full-time/Part-time), Description (Rich Text).

### 3. Single Type: `Global`
- **Navigation**: Repeater field (Label, Link URL).
- **Footer**: Column definitions, Copyright text, Social Links.

## Proposed Changes (Frontend Implementation)
### Phase 1: Setup
#### [NEW] Init Next.js Project
- Setup TypeScript, Tailwind CSS, ESLint.
- Configure `tailwind.config.ts` with custom colors.

### Phase 2: Components
#### [NEW] `src/components/ui/Button.tsx`
#### [NEW] `src/components/global/Navbar.tsx` & `Footer.tsx`

### Phase 3: Page Sections (Mock Data first)
#### [NEW] `src/components/sections/HeroSection.tsx`
#### [NEW] `src/components/sections/ContentBlock.tsx` 
#### [NEW] `src/components/sections/FeatureGrid.tsx`

### Phase 4: Dynamic Page Logic
#### [NEW] `src/app/[[...slug]]/page.tsx`
- Implement lookup logic: `Get content from Strapi where slug = params.slug`.
- Render matching components from `content_sections` Dynamic Zone.

## Verification Plan
1.  **Visual Check**: Compare implemented components against Figma overlay.
2.  **Responsive Check**: Verify layout on Mobile (375px), Tablet (768px), and Desktop (1440px).
3.  **Mock Data Test**: Create a JSON mock file mimicking the Strapi response to test the Dynamic Zone renderer before the actual backend exists.
