import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";

import Index from "./pages/Index";
import Auth from "./pages/Auth";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import AuthCallback from "./pages/AuthCallback";
import ThemeParks from "./pages/ThemeParks";
import WaterParks from "./pages/WaterParks";
import Attractions from "./pages/Attractions";
import WaterSports from "./pages/WaterSports";
import WaterAdventures from "./pages/WaterAdventures";
import JetSkiPage from "./pages/JetSkiPage";
import DinnerCruise from "./pages/DinnerCruise";
import Yacht from "./pages/Yacht";
import Limousine from "./pages/Limousine";
import AbuDhabi from "./pages/AbuDhabi";
import Dubai from "./pages/Dubai";
import Sharjah from "./pages/Sharjah";
import RasAlKhaimah from "./pages/RasAlKhaimah";
import Ajman from "./pages/Ajman";
import Staycations from "./pages/Staycations";
import Deals from "./pages/Deals";
import Cart from "./pages/Cart";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentCanceled from "./pages/PaymentCanceled";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import RefundPolicy from "./pages/RefundPolicy";
import CancellationPolicy from "./pages/CancellationPolicy";
import Blogs from "./pages/Blogs";

import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import Partner from "./pages/Partner";
import PopularPage from "./pages/PopularPage";
import LuxuryPage from "./pages/LuxuryPage";
import LifestylePage from "./pages/LifestylePage";

// New Category Pages
import DesertSafari from "./pages/DesertSafari";
import CityTours from "./pages/CityTours";
import SkyAdventures from "./pages/SkyAdventures";
import VisaServices from "./pages/VisaServices";
import Transfers from "./pages/Transfers";
import Supercars from "./pages/Supercars";
import HolidayPackages from "./pages/HolidayPackages";
import Hotel from "./pages/Hotel";
import CarRental from "./pages/CarRental";
import Adventures from "./pages/Adventures";
import Restaurants from "./pages/Restaurants";
import Shows from "./pages/Shows";

import ScrollToTop from "./components/ScrollToTop";
import FloatingActionButtons from "./components/FloatingActionButtons";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">

            {/* Global atmosphere layer */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(16,131,206,0.12),transparent_60%)] pointer-events-none z-0" />

            <ScrollToTop />
            <FloatingActionButtons />

            <AuthProvider>
              <CartProvider>
                <WishlistProvider>

                  {/* App content */}
                  <div className="relative z-10">
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/popular" element={<PopularPage />} />
                      <Route path="/luxury" element={<LuxuryPage />} />
                      <Route path="/lifestyle" element={<LifestylePage />} />
                      <Route path="/deals" element={<Deals />} />
                      <Route path="/sign-in" element={<SignIn />} />
                      <Route path="/sign-up" element={<SignUp />} />
                      <Route path="/auth" element={<Auth />} />
                      <Route path="/auth/callback" element={<AuthCallback />} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/cart" element={<Cart />} />
                      <Route path="/payment-success" element={<PaymentSuccess />} />
                      <Route path="/payment-canceled" element={<PaymentCanceled />} />

                      {/* Policy Pages */}
                      <Route path="/privacy" element={<PrivacyPolicy />} />
                      <Route path="/terms" element={<TermsConditions />} />
                      <Route path="/refund" element={<RefundPolicy />} />
                      <Route path="/cancellation" element={<CancellationPolicy />} />

                      {/* Blogs */}
                      <Route path="/blogs" element={<Blogs />} />

                      {/* Search */}
                      <Route path="/search" element={<SearchResults />} />



                      {/* Dubai Category Pages */}
                      <Route path="/dubai/theme-parks" element={<ThemeParks />} />
                      <Route path="/dubai/water-parks" element={<WaterParks />} />
                      <Route path="/dubai/attractions" element={<Attractions />} />
                      <Route path="/dubai/water-sports" element={<WaterSports />} />
                      <Route path="/dubai/water-adventures" element={<WaterAdventures />} />
                      <Route path="/tour/jet-ski-jumeirah" element={<JetSkiPage />} />
                      <Route path="/dubai/dinner-cruise" element={<DinnerCruise />} />
                      <Route path="/dubai/yacht" element={<Yacht />} />
                      <Route path="/dubai/limousine" element={<Limousine />} />

                      {/* New Categories */}
                      <Route path="/dubai/desert-safari" element={<DesertSafari />} />
                      <Route path="/dubai/city-tours" element={<CityTours />} />
                      <Route path="/dubai/sky-adventures" element={<SkyAdventures />} />
                      <Route path="/dubai/visa" element={<VisaServices />} />
                      <Route path="/dubai/transfers" element={<Transfers />} />
                      <Route path="/dubai/supercars" element={<Supercars />} />
                      <Route path="/dubai/packages" element={<HolidayPackages />} />
                      <Route path="/dubai/hotels" element={<Hotel />} />
                      <Route path="/dubai/car-rental" element={<CarRental />} />
                      <Route path="/dubai/adventures" element={<Adventures />} />
                      <Route path="/dubai/restaurants" element={<Restaurants />} />
                      <Route path="/dubai/shows" element={<Shows />} />


                      {/* Other Pages */}
                      <Route path="/dubai" element={<Dubai />} />
                      <Route path="/abu-dhabi" element={<AbuDhabi />} />
                      <Route path="/sharjah" element={<Sharjah />} />
                      <Route path="/ras-al-khaimah" element={<RasAlKhaimah />} />
                      <Route path="/ajman" element={<Ajman />} />
                      <Route path="/staycations" element={<Staycations />} />

                      {/* Information Pages */}
                      <Route path="/about" element={<AboutUs />} />
                      <Route path="/contact" element={<ContactUs />} />
                      <Route path="/partner" element={<Partner />} />
                      <Route path="/faq" element={<FAQ />} />
                      <Route path="/faqs" element={<FAQ />} />

                      {/* Catch all */}
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </div>

                </WishlistProvider>
              </CartProvider>
            </AuthProvider>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
