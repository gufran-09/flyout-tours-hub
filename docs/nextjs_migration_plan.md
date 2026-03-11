# Next.js App Router Migration Plan

This document outlines the steps and architectural shifts required to migrate the **Flyout Tours Hub** from a client-side React + Vite application to a server-rendered **Next.js App Router** structure.

## 1. Converting the `pages` Folder to Next.js Routes
In the current setup, `react-router-dom` manually maps paths to component files within a single `<Routes>` block in `App.tsx`. Next.js App Router utilizes an intuitive file-system based routing mechanism.

*   **Static Routes**:
    *   `src/pages/Index.tsx` → `app/page.tsx`
    *   `src/pages/AboutUs.tsx` → `app/about/page.tsx`
    *   `src/pages/ThemeParks.tsx` → `app/dubai/theme-parks/page.tsx`
*   **Dynamic Routes**:
    *   The unified product detail route `<Route path="/experiences/:destination/:category/:slug"...` translates directly to dynamic folder segments: `app/experiences/[destination]/[category]/[slug]/page.tsx`.
*   **Catch-All (404 Not Found)**:
    *   `src/pages/NotFound.tsx` → `app/not-found.tsx` (a native file convention in Next.js).
*   **API Routes**:
    *   Any external API calls or Supabase Edge Functions can either remain external, or be migrated to internal Next.js Route Handlers: `app/api/[route]/route.ts`.

## 2. Which Components Must Become Client Components (`"use client"`)
Client components are required whenever a component relies on browser-only APIs or interactivity. You must add the `"use client"` directive at the top of these files:

*   **Context Providers**: `AuthContext`, `CartContext`, and `WishlistContext`. Next.js requires these stateful providers to run on the client, wrapping the `{children}` passed from the Server Layout.
*   **Interactive UI Elements**: Any component using `useState`, `useEffect`, or DOM events (`onClick`, `onChange`).
    *   Carousels, Accordions, Sliders, and Checkboxes found in `src/components/ui`.
    *   The `PremiumCard` (if it relies on hover states managed by JS or complex client-side routing logic).
    *   The `ProductDetails` "Booking Card" (it manages multiple states like `guestCount`, `selectedDate`, `selectedDuration`, and triggers `handleAddToCart`).
*   **Search Interactivity**: `SearchResults` and `NavbarSearch` need to bind to input events and parse URL query parameters via `useSearchParams()`.
*   **Authentication Forms**: `SignIn` and `SignUp` need to securely handle local form state and error messages.

## 3. Which Parts Can Become Server Components (Default)
Server components render on the server, significantly reducing the JavaScript bundle size shipped to the client and improving initial load speeds and SEO. By default, all components in the `app` directory are server components.

*   **Global Layouts**: The `Navbar` and `Footer` can mostly be server components (though inner interactive elements like mobile menus or the cart icon will need to be isolated client components).
*   **Static Pages**: Policy pages (`PrivacyPolicy`, `TermsConditions`, `RefundPolicy`) can be 100% server-rendered since they possess no dynamic state.
*   **Data Fetching Pages**:
    *   `CategoryPage` (and wrapper `CategoryLayout`): If fetching basic category data or reading from a database, it should happen on the server. The interactive filter sidebar can be a child Client Component.
    *   `ProductDetails` (Page Level): The page itself should fetch the product data (currently from `catalog.ts`) on the server based on the `[slug]` parameter, and pass the data down to the interactive "Booking Card" and "Image Slider" client components as props.
    *   Home page sections: `HeroSection`, `MostBookedSection`, and `BrandStorySection` can be static Server Components.

## 4. Structuring the Next.js `app` Directory
The unified React tree will be split into a structured folder hierarchy utilizing Next.js specific conventions (`layout.tsx`, `page.tsx`, `error.tsx`):

```text
app/
├── globals.css                # Moved from src/index.css
├── layout.tsx                 # Replaces App.tsx <Providers> + Layout.tsx
├── page.tsx                   # Replaces Index.tsx
├── not-found.tsx              # Replaces NotFound.tsx
├── (auth)/                    # Route group (doesn't affect URL path)
│   ├── login/page.tsx         # Replaces SignIn.tsx
│   ├── register/page.tsx      # Replaces SignUp.tsx
│   └── callback/route.ts      # Auth callback route handler
├── dubai/                     
│   ├── page.tsx               # Replaces Dubai.tsx
│   ├── desert-safari/page.tsx # Replaces DesertSafari.tsx
│   └── ... 
├── experiences/
│   └── [destination]/
│       └── [category]/
│           └── [slug]/
│               └── page.tsx   # Replaces ProductDetails.tsx
├── search/
│   └── page.tsx               # Replaces SearchResults.tsx
└── cart/
    └── page.tsx               # Replaces Cart.tsx
```

## 5. Changes Required for Supabase Integration
Migrating to Next.js necessitates a shift from a purely client-side Supabase pattern to a secure, SSR-friendly architecture.

*   **Move to `@supabase/ssr`**: Replace the basic `@supabase/supabase-js` client with the SSR package to enable secure cookie-based auth sessions bridging server and client.
*   **Client Factory Updates**: `src/lib/supabase.ts` will need to be split into helpers:
    *   `utils/supabase/server.ts`: For instantiating the client inside Server Components and Route Handlers, parsing cookies.
    *   `utils/supabase/client.ts`: For instantiating the client in browser/Client Components.
*   **Session Management**: Instead of relying solely on `<AuthContext>` to watch `onAuthStateChange` to determine layout shifts (which causes a hydration flash), the root `layout.tsx` (a Server Component) should fetch the user session server-side (`await supabase.auth.getUser()`) and pass the initial user payload down securely without UI flickering.
*   **Route Protection (Middleware)**: Supabase authentication combined with Next.js `middleware.ts` allows you to protect specific segments (like `/dashboard` or `/cart/checkout`) at the edge, redirecting unauthorized users before the page even begins rendering.
