# Application Components Categorization

## 1. Layout Components

**Role Explained**: These components dictate the overarching structural skeleton of pages. They often hold navigation menus, footers, sidebars, and main content wrappers. They rarely contain distinct business logic on their own, but rather orchestrate how other components are placed spatially.

- CategoryLayout
- Footer
- Layout
- MegaMenu
- Navbar

---

## 2. Page-specific Components

**Role Explained**: These are large, specialized component chunks built specifically for a single page or view (like the landing page Index). They combine various smaller shared components into meaningful sections (like Hero sections, specifically curated carousel grids).

- AnimatedContent (used mostly in dubai)
- BrandStorySection (used mostly in home)
- BurjKhalifaExperience (used mostly in dubai)
- BurjTower (used mostly in dubai)
- CategoriesCarousel (used mostly in home)
- ComboDealsSection (used mostly in home)
- CuratedCollectionsSection (used mostly in home)
- EventsEntertainmentSection (used mostly in home)
- ExperienceSection (used mostly in home)
- HeroSection (used mostly in home)
- LuxuryExperiencesSection (used mostly in home)
- MostBookedSection (used mostly in home)
- RomanticLifestyleSection (used mostly in home)
- SectionHeader (used mostly in ui)
- SectionTitle (used mostly in home)
- TestimonialsSection (used mostly in home)
- TravelEssentialsSection (used mostly in home)
- UaeShowcaseSection (used mostly in home)
- ZoneCard (used mostly in dubai)
- ZoneSection (used mostly in dubai)

---

## 3. Shared UI Components

**Role Explained**: These are the generic, reusable primitive building blocks of the application. Buttons, Inputs, Dialogs, generic Cards, and Form elements. They are entirely presentation-focused, lack domain logic, and can be used on any page.

- FloatingActionButtons
- NavLink
- ProductCard
- ScrollToTop
- accordion
- alert
- alert-dialog
- aspect-ratio
- avatar
- badge
- breadcrumb
- button
- calendar
- card
- carousel
- chart
- checkbox
- collapsible
- command
- context-menu
- dialog
- drawer
- dropdown-menu
- form
- hover-card
- input
- input-otp
- label
- menubar
- navigation-menu
- pagination
- popover
- progress
- radio-group
- resizable
- scroll-area
- select
- separator
- sheet
- sidebar
- skeleton
- slider
- sonner
- switch
- table
- tabs
- textarea
- toast
- toaster
- toggle
- toggle-group
- tooltip

---

## 4. Business Logic Components

**Role Explained**: These are components deeply intertwined with the app's core domains (like pricing, booking validation, specialized interactions). Rather than just rendering UI, they hold complex calculations, state transformations, or specific data-fetching requirements closely tied to the application's unique value.

- CurrencySymbol (Domain logic mixed)
- PremiumCard (Domain logic mixed)
- PriceDisplay (Domain logic mixed)

---

## 5. Search Components

**Role Explained**: Dedicated entirely to the user's search intent. These capture input queries, provide auto-suggestions, rendering local/global search results interfaces, and bridging the gap between user intent and destination routing.

- MobileSearchSheet
- NavbarSearch
- SearchAutocomplete

---

## 6. Auth Components

**Role Explained**: Responsible exclusively for handling authentication flows: Login forms, Registration fields, Social OAuth buttons, OTP verification prompts, and enforcing secure boundaries across the app.

- LoginForm
- SignupForm
- SocialAuth

---

