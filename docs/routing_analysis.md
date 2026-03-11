# React Router Architecture

React Router is implemented inside `src/App.tsx`, where `<BrowserRouter>` and `<Routes>` setup the client-side routing.

Here is a comprehensive list of all routes defined within that configuration:

## Core Pages
* `/` – Landing page (`Index`)
* `/cart` – User Cart (`Cart`)
* `/search` – Search results (`SearchResults`)
* `/categories` – All Categories listing (`CategoryPage`)
* `*` – Catch-all 404 Route (`NotFound`)

## Authentication & User
* `/sign-in` – User login (`SignIn`)
* `/sign-up` – New user registration (`SignUp`)
* `/auth` – Main authentication portal (`Auth`)
* `/auth/callback` – Auth callback handler (`AuthCallback`)
* `/dashboard` – User dashboard (`Dashboard`)
* `/claude` – Admin/Claude dashboard (`ClaudeDashboard`)

## Payment
* `/payment-success` – Successful checkout (`PaymentSuccess`)
* `/payment-canceled` – Cancelled checkout (`PaymentCanceled`)

## Content & Information
* `/about` – (`AboutUs`)
* `/contact` – (`ContactUs`)
* `/partner` – Form to become a partner (`Partner`)
* `/faq` & `/faqs` – Frequently asked questions (`FAQ`)
* `/blogs` – External content handling (`Blogs`)

## Top-level Destination Categories
* `/popular` – (`PopularPage`)
* `/luxury` – (`LuxuryPage`)
* `/lifestyle` – (`LifestylePage`)
* `/deals` – Specially curated combo offers (`Deals`)
* `/staycations` – Hotels & resorts (`Staycations`)

## Major Emirates (Cities)
* `/dubai` – (`Dubai`)
* `/abu-dhabi` – (`AbuDhabi`)
* `/sharjah` – (`Sharjah`)
* `/ras-al-khaimah` – (`RasAlKhaimah`)
* `/ajman` – (`Ajman`)

## Dubai-specific Categories
* `/dubai/theme-parks`
* `/dubai/water-parks`
* `/dubai/attractions`
* `/dubai/water-sports`
* `/dubai/water-adventures`
* `/dubai/dinner-cruise`
* `/dubai/yacht`
* `/dubai/limousine`
* `/dubai/desert-safari`
* `/dubai/city-tours`
* `/dubai/sky-adventures`
* `/dubai/visa`
* `/dubai/transfers`
* `/dubai/supercars`
* `/dubai/packages`
* `/dubai/hotels`
* `/dubai/car-rental`
* `/dubai/adventures`
* `/dubai/restaurants`
* `/dubai/shows`

## Dynamic Product Route
* `/experiences/:destination/:category/:slug` – Shared dynamic route rendering a specific experience (`ProductDetails`)
