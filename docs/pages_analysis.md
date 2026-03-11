# Application Pages Analysis

This document lists every page in the `src/pages` directory, detailing its purpose, used components, data dependencies, and consumed contexts.

## AboutUs
- **Purpose**: Renders the AboutUs page.
- **Components Used**: Layout
- **Data/APIs**: None
- **Contexts Consumed**: None

## AbuDhabi
- **Purpose**: Category listing page for AbuDhabi experiences, utilizing CategoryLayout for standardized presentation and filtering.
- **Components Used**: CategoryLayout
- **Data/APIs**: tours.ts (Mock data)
- **Contexts Consumed**: None

## Adventures
- **Purpose**: Category listing page for Adventures experiences, utilizing CategoryLayout for standardized presentation and filtering.
- **Components Used**: CategoryLayout
- **Data/APIs**: tours.ts (Mock data)
- **Contexts Consumed**: None

## Ajman
- **Purpose**: Category listing page for Ajman experiences, utilizing CategoryLayout for standardized presentation and filtering.
- **Components Used**: CategoryLayout
- **Data/APIs**: tours.ts (Mock data)
- **Contexts Consumed**: None

## Attractions
- **Purpose**: Category listing page for Attractions experiences, utilizing CategoryLayout for standardized presentation and filtering.
- **Components Used**: CategoryLayout
- **Data/APIs**: tours.ts (Mock data)
- **Contexts Consumed**: None

## Auth
- **Purpose**: Authentication related page for user login, registration, or callback handling.
- **Components Used**: Button, Input, Label
- **Data/APIs**: None
- **Contexts Consumed**: AuthContext

## AuthCallback
- **Purpose**: Authentication related page for user login, registration, or callback handling.
- **Components Used**: None
- **Data/APIs**: Supabase API
- **Contexts Consumed**: None

## Blogs
- **Purpose**: Renders the Blogs page.
- **Components Used**: Layout, Button
- **Data/APIs**: None
- **Contexts Consumed**: None

## CancellationPolicy
- **Purpose**: Renders the CancellationPolicy page.
- **Components Used**: Layout
- **Data/APIs**: None
- **Contexts Consumed**: None

## CarRental
- **Purpose**: Category listing page for CarRental experiences, utilizing CategoryLayout for standardized presentation and filtering.
- **Components Used**: CategoryLayout
- **Data/APIs**: tours.ts (Mock data)
- **Contexts Consumed**: None

## Cart
- **Purpose**: Displays the user's shopping cart and allows modification before checkout.
- **Components Used**: Layout, Button, CurrencySymbol
- **Data/APIs**: Supabase API
- **Contexts Consumed**: AuthContext, CartContext

## CategoryPage
- **Purpose**: Renders the CategoryPage page.
- **Components Used**: Layout, Button, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, Slider, Checkbox, Label, Tour, PremiumCard
- **Data/APIs**: tours.ts (Mock data)
- **Contexts Consumed**: CartContext

## CityTours
- **Purpose**: Category listing page for CityTours experiences, utilizing CategoryLayout for standardized presentation and filtering.
- **Components Used**: CategoryLayout
- **Data/APIs**: tours.ts (Mock data)
- **Contexts Consumed**: None

## ClaudeDashboard
- **Purpose**: Renders the ClaudeDashboard page.
- **Components Used**: Button, Card, CardContent, CardHeader, CardTitle, CardDescription, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, ScrollArea
- **Data/APIs**: None
- **Contexts Consumed**: None

## ContactUs
- **Purpose**: Renders the ContactUs page.
- **Components Used**: Layout, Button, Input, Textarea
- **Data/APIs**: None
- **Contexts Consumed**: None

## Dashboard
- **Purpose**: User profile and dashboard for managing bookings, wishlists, and account details.
- **Components Used**: Layout, Button, Input, Label, Tabs, TabsContent, TabsList, TabsTrigger
- **Data/APIs**: tours.ts (Mock data), Supabase API
- **Contexts Consumed**: AuthContext

## Deals
- **Purpose**: Category listing page for Deals experiences, utilizing CategoryLayout for standardized presentation and filtering.
- **Components Used**: CategoryLayout
- **Data/APIs**: tours.ts (Mock data)
- **Contexts Consumed**: None

## DesertSafari
- **Purpose**: Category listing page for DesertSafari experiences, utilizing CategoryLayout for standardized presentation and filtering.
- **Components Used**: CategoryLayout
- **Data/APIs**: tours.ts (Mock data)
- **Contexts Consumed**: None

## DinnerCruise
- **Purpose**: Category listing page for DinnerCruise experiences, utilizing CategoryLayout for standardized presentation and filtering.
- **Components Used**: CategoryLayout
- **Data/APIs**: tours.ts (Mock data)
- **Contexts Consumed**: None

## Dubai
- **Purpose**: Category listing page for Dubai experiences, utilizing CategoryLayout for standardized presentation and filtering.
- **Components Used**: CategoryLayout, BurjKhalifaExperience
- **Data/APIs**: tours.ts (Mock data)
- **Contexts Consumed**: None

## FAQ
- **Purpose**: Renders the FAQ page.
- **Components Used**: Navbar, Footer
- **Data/APIs**: None
- **Contexts Consumed**: None

## HolidayPackages
- **Purpose**: Category listing page for HolidayPackages experiences, utilizing CategoryLayout for standardized presentation and filtering.
- **Components Used**: CategoryLayout
- **Data/APIs**: tours.ts (Mock data)
- **Contexts Consumed**: None

## Hotel
- **Purpose**: Category listing page for Hotel experiences, utilizing CategoryLayout for standardized presentation and filtering.
- **Components Used**: CategoryLayout
- **Data/APIs**: tours.ts (Mock data)
- **Contexts Consumed**: None

## Index
- **Purpose**: The main landing/home page of the application, showcasing hero sections, top categories, and curated experiences.
- **Components Used**: Layout, HeroSection, SectionTitle, ExperienceSection, ComboDealsSection, TestimonialsSection, BrandStorySection, UaeShowcaseSection, CategoriesCarousel, LuxuryExperiencesSection, RomanticLifestyleSection, CuratedCollectionsSection, MostBookedSection, EventsEntertainmentSection, TravelEssentialsSection
- **Data/APIs**: tours.ts (Mock data)
- **Contexts Consumed**: None

## LifestylePage
- **Purpose**: Renders the LifestylePage page.
- **Components Used**: Navbar, Footer, PriceDisplay, CurrencySymbol, PremiumCard
- **Data/APIs**: None
- **Contexts Consumed**: None

## Limousine
- **Purpose**: Category listing page for Limousine experiences, utilizing CategoryLayout for standardized presentation and filtering.
- **Components Used**: CategoryLayout
- **Data/APIs**: tours.ts (Mock data)
- **Contexts Consumed**: None

## LuxuryPage
- **Purpose**: Renders the LuxuryPage page.
- **Components Used**: Navbar, Footer, CurrencySymbol, PremiumCard
- **Data/APIs**: None
- **Contexts Consumed**: None

## NotFound
- **Purpose**: Renders the NotFound page.
- **Components Used**: None
- **Data/APIs**: None
- **Contexts Consumed**: None

## Partner
- **Purpose**: Renders the Partner page.
- **Components Used**: useToast, Layout, Button, Input, Textarea
- **Data/APIs**: Supabase API
- **Contexts Consumed**: None

## PaymentCanceled
- **Purpose**: Renders the PaymentCanceled page.
- **Components Used**: Layout, Button
- **Data/APIs**: None
- **Contexts Consumed**: None

## PaymentSuccess
- **Purpose**: Renders the PaymentSuccess page.
- **Components Used**: Layout, Button
- **Data/APIs**: None
- **Contexts Consumed**: AuthContext, CartContext

## PopularPage
- **Purpose**: Renders the PopularPage page.
- **Components Used**: Navbar, Footer, PriceDisplay, CurrencySymbol, PremiumCard
- **Data/APIs**: None
- **Contexts Consumed**: None

## PrivacyPolicy
- **Purpose**: Renders the PrivacyPolicy page.
- **Components Used**: Layout
- **Data/APIs**: None
- **Contexts Consumed**: None

## ProductDetails
- **Purpose**: Dynamic product detail page for individual experiences.
- **Components Used**: Tour, Layout, Button, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, Accordion, AccordionContent, AccordionItem, AccordionTrigger, Calendar, Popover, PopoverContent, PopoverTrigger, useToast
- **Data/APIs**: catalog.ts (Product Catalog)
- **Contexts Consumed**: CartContext

## RasAlKhaimah
- **Purpose**: Category listing page for RasAlKhaimah experiences, utilizing CategoryLayout for standardized presentation and filtering.
- **Components Used**: CategoryLayout
- **Data/APIs**: tours.ts (Mock data)
- **Contexts Consumed**: None

## RefundPolicy
- **Purpose**: Renders the RefundPolicy page.
- **Components Used**: Layout
- **Data/APIs**: None
- **Contexts Consumed**: None

## Restaurants
- **Purpose**: Category listing page for Restaurants experiences, utilizing CategoryLayout for standardized presentation and filtering.
- **Components Used**: CategoryLayout
- **Data/APIs**: tours.ts (Mock data)
- **Contexts Consumed**: None

## SearchResults
- **Purpose**: Displays dynamic search results based on user queries, utilizing Supabase Edge Functions.
- **Components Used**: PremiumCard, Layout, Input, Button, Badge, Card, CardContent, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Skeleton, CurrencySymbol, PriceDisplay
- **Data/APIs**: External API / REST
- **Contexts Consumed**: None

## Sharjah
- **Purpose**: Category listing page for Sharjah experiences, utilizing CategoryLayout for standardized presentation and filtering.
- **Components Used**: CategoryLayout
- **Data/APIs**: tours.ts (Mock data)
- **Contexts Consumed**: None

## Shows
- **Purpose**: Category listing page for Shows experiences, utilizing CategoryLayout for standardized presentation and filtering.
- **Components Used**: CategoryLayout
- **Data/APIs**: tours.ts (Mock data)
- **Contexts Consumed**: None

## SignIn
- **Purpose**: Authentication related page for user login, registration, or callback handling.
- **Components Used**: LoginForm, SocialAuth
- **Data/APIs**: None
- **Contexts Consumed**: AuthContext

## SignUp
- **Purpose**: Authentication related page for user login, registration, or callback handling.
- **Components Used**: SignupForm, SocialAuth
- **Data/APIs**: None
- **Contexts Consumed**: AuthContext

## SkyAdventures
- **Purpose**: Category listing page for SkyAdventures experiences, utilizing CategoryLayout for standardized presentation and filtering.
- **Components Used**: CategoryLayout
- **Data/APIs**: tours.ts (Mock data)
- **Contexts Consumed**: None

## Staycations
- **Purpose**: Category listing page for Staycations experiences, utilizing CategoryLayout for standardized presentation and filtering.
- **Components Used**: CategoryLayout
- **Data/APIs**: tours.ts (Mock data)
- **Contexts Consumed**: None

## Supercars
- **Purpose**: Category listing page for Supercars experiences, utilizing CategoryLayout for standardized presentation and filtering.
- **Components Used**: CategoryLayout
- **Data/APIs**: tours.ts (Mock data)
- **Contexts Consumed**: None

## TermsConditions
- **Purpose**: Renders the TermsConditions page.
- **Components Used**: Layout
- **Data/APIs**: None
- **Contexts Consumed**: None

## ThemeParks
- **Purpose**: Category listing page for ThemeParks experiences, utilizing CategoryLayout for standardized presentation and filtering.
- **Components Used**: CategoryLayout
- **Data/APIs**: tours.ts (Mock data)
- **Contexts Consumed**: None

## Transfers
- **Purpose**: Category listing page for Transfers experiences, utilizing CategoryLayout for standardized presentation and filtering.
- **Components Used**: CategoryLayout
- **Data/APIs**: tours.ts (Mock data)
- **Contexts Consumed**: None

## VisaServices
- **Purpose**: Category listing page for VisaServices experiences, utilizing CategoryLayout for standardized presentation and filtering.
- **Components Used**: CategoryLayout
- **Data/APIs**: tours.ts (Mock data)
- **Contexts Consumed**: None

## WaterAdventures
- **Purpose**: Category listing page for WaterAdventures experiences, utilizing CategoryLayout for standardized presentation and filtering.
- **Components Used**: CategoryLayout, Tour
- **Data/APIs**: catalog.ts (Product Catalog)
- **Contexts Consumed**: None

## WaterParks
- **Purpose**: Category listing page for WaterParks experiences, utilizing CategoryLayout for standardized presentation and filtering.
- **Components Used**: CategoryLayout
- **Data/APIs**: tours.ts (Mock data)
- **Contexts Consumed**: None

## WaterSports
- **Purpose**: Category listing page for WaterSports experiences, utilizing CategoryLayout for standardized presentation and filtering.
- **Components Used**: CategoryLayout
- **Data/APIs**: tours.ts (Mock data)
- **Contexts Consumed**: None

## Yacht
- **Purpose**: Category listing page for Yacht experiences, utilizing CategoryLayout for standardized presentation and filtering.
- **Components Used**: CategoryLayout
- **Data/APIs**: tours.ts (Mock data)
- **Contexts Consumed**: None

