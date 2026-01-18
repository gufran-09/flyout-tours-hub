import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
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
import DinnerCruise from "./pages/DinnerCruise";
import Yacht from "./pages/Yacht";
import Limousine from "./pages/Limousine";
import AbuDhabi from "./pages/AbuDhabi";
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
import AdminNewsletter from "./pages/AdminNewsletter";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import ScrollToTop from "./components/ScrollToTop";
import FloatingActionButtons from "./components/FloatingActionButtons";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <FloatingActionButtons />
        <AuthProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Index />} />
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

              {/* Admin Pages */}
              <Route path="/admin/newsletter" element={<AdminNewsletter />} />

              {/* Dubai Category Pages */}
              <Route path="/dubai/theme-parks" element={<ThemeParks />} />
              <Route path="/dubai/water-parks" element={<WaterParks />} />
              <Route path="/dubai/attractions" element={<Attractions />} />
              <Route path="/dubai/water-sports" element={<WaterSports />} />
              <Route path="/dubai/dinner-cruise" element={<DinnerCruise />} />
              <Route path="/dubai/yacht" element={<Yacht />} />
              <Route path="/dubai/limousine" element={<Limousine />} />

              {/* Other Pages */}
              <Route path="/abu-dhabi" element={<AbuDhabi />} />
              <Route path="/staycations" element={<Staycations />} />

              {/* Information Pages */}
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/faq" element={<FAQ />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
