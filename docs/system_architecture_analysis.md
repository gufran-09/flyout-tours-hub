# Architecture Analysis: Flyout Tours Hub

This document explains the architecture of the **Flyout Tours Hub** React application step by step, addressing all key areas.

## 1. How Routing Works
The application uses **React Router DOM** (`react-router-dom`) for client-side routing.
* **Entry Point**: `src/App.tsx` contains the standard `<BrowserRouter>` wrapping the application.
* **Route Definitions**: Inside `App.tsx`, all routes are declared within a main `<Routes>` block. 
* **Flat Routing Structure**: All pages are mapped directly to URLs (e.g., `<Route path="/" element={<Index />} />`, `<Route path="/dubai/desert-safari" element={<DesertSafari />} />`). There is no nested layout routing at the `Route` level; instead, layout components are imported and used within each individual page component.
* **Dynamic Routes**: Included for product details using URL parameters, such as `<Route path="/experiences/:destination/:category/:slug" element={<ProductDetails />} />`.
* **Catch-All Error Page**: `<Route path="*" element={<NotFound />} />` handles 404s.

## 2. How Pages are Structured and Connected
* **Pages Directory (`src/pages/`)**: Each route corresponds to a standalone file inside `src/pages`. This keeps routing logic strictly 1-to-1 with file names.
* **Composition**: A typical page (like `Index.tsx`) imports a global wrapper layout (e.g., `Layout`) and composes the page content block-by-block using feature-specific section components (e.g., `HeroSection`, `CategoriesCarousel`, `MostBookedSection` from `src/components/home/`).
* **Navigation Links**: Connections between pages use the standard `<Link to="...">` component from React Router to prevent full page reloads.

## 3. What the Main Components Are
The project structure separates components logically into distinct buckets:
* **`src/components/layout/`**: Contains the global structural blocks: `Navbar`, `Footer`, `Layout`, and `MegaMenu`.
* **`src/components/home/`**: Contains massive section blocks used mainly on the landing page (e.g., `HeroSection`, `ExperienceSection`, `MostBookedSection`).
* **`src/components/ui/`**: Contains smaller, reusable primitive components. Most are powered by **Radix UI** primitives and styled using **shadcn/ui** and **Tailwind CSS**.
* **Notable Domain Components**: 
  * `ProductDetails` (unified product details rendering logic).
  * `CategoryLayout` (a reusable layout wrapper specifically for category listing pages with filtering sidebars).

## 4. How Data Flows from APIs or Supabase to UI
The application employs multiple strategies for data flow depending on the page complexity:
* **Static / Mock Data**: Many pages leverage hardcoded fallback data from `src/data/tours.ts` and `src/data/catalog.ts` for rapid, synchronous UI rendering without waiting on a server.
* **Global Server State (React Query)**: `App.tsx` wraps the application in a `<QueryClientProvider>`, allowing components to use `@tanstack/react-query` to fetch, cache, and manage asynchronous state effortlessly (though it is used sparingly in this specific snapshot).
* **Backend Integration (Supabase)**: 
  * Client initialization lives in `src/lib/supabase.ts` using `@supabase/supabase-js`.
  * Supabase is actively used to handle Authentication flows, verify users, and hit Edge Functions (such as the `/functions/v1/search` API in the `SearchResults` component).
* **Local State & Context**: User-specific synchronous state (like current shopping cart or wishlist) uses React Context and persists locally utilizing browser `localStorage`.

## 5. Which Files Act as Layout Wrappers
Instead of defining layouts dynamically in the router file, layout wrappers are utilized locally inside specific page components:
* **`Layout.tsx` (`src/components/layout/Layout.tsx`)**: The global layout wrapper used by almost every page. It maintains the minimum application structure: `<Navbar>`, `<main>{children}</main>`, and `<Footer>`. It also handles some global styling (the white background and minimum screen height).
* **`CategoryLayout.tsx` (`src/components/layout/CategoryLayout.tsx`)**: A specialized, complex layout wrapper built on top of `Layout.tsx`. It provides standard category hero banners, advanced filtering tools (price sliders, rating checkboxes, mobile filter sheets), and sorting actions. Category pages (like `DesertSafari.tsx`) just pass their specific tour data into this component to receive a unified listing experience.

## 6. Which Components are Reusable UI Components
The application heavily utilizes utility-first UI components located in `src/components/ui/`. Key reusable components include:
* **`PremiumCard.tsx`**: The core interactive card used to display tours and experiences across the entire site. It handles images, pricing, ratings, badges, and link routing uniformly.
* **General shadcn/ui components**: Such as `Button`, `Input`, `Select`, `Sheet`, `Slider`, `Carousel`, and `Accordion`. These handle accessibility and consistent styling across the app natively.
* **Financial Utils**: `PriceDisplay.tsx` and `CurrencySymbol.tsx` to handle standardized currency formatting throughout the app interfaces.

## 7. Which Parts Handle Authentication, Cart, and Search
* **Authentication (`src/contexts/AuthContext.tsx`)**:
  * Wraps the entire app in `App.tsx`.
  * Exposes an auth state (`user`, `session`, `loading`) mapped directly to Supabase Auth event listeners (`onAuthStateChange`).
  * Dedicated pages (`SignIn.tsx`, `SignUp.tsx`, `Auth.tsx`) consume this context and use the provided helper functions to interact securely with Supabase.
* **Cart (`src/contexts/CartContext.tsx`)**:
  * Manages cart session entirely on the client-side utilizing `localStorage` (`flyout_cart`) bridging user sessions.
  * The `ProductDetails` page connects to this to dispatch items to the cart using user-selected configurations (date, guests, duration). The `Cart.tsx` page then reads from this context to render checkout tables.
* **Search (`src/components/search/NavbarSearch.tsx` & `src/pages/SearchResults.tsx`)**:
  * Reacts to query parameters `?q=`. It is triggered globally via the Navbar.
  * Search action safely contacts a **Supabase Edge Function** (`/functions/v1/search`) with a limit to keep operations fast.
  * The `SearchResults.tsx` component handles local post-processing: Filtering the fetched results via type (Tour, Destination, Category), filtering by City, and sorting (Relevance, Price High/Low, Rating).
