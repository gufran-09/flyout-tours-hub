import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import AuthCallback from "./pages/AuthCallback";
import CategoryPage from "./pages/CategoryPage";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Index />} />
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
              <Route path="/dubai/theme-parks" element={<CategoryPage />} />
              <Route path="/dubai/water-parks" element={<CategoryPage />} />
              <Route path="/dubai/attractions" element={<CategoryPage />} />
              <Route path="/dubai/water-sports" element={<CategoryPage />} />
              <Route path="/dubai/dinner-cruise" element={<CategoryPage />} />
              <Route path="/dubai/yacht" element={<CategoryPage />} />
              <Route path="/dubai/limousine" element={<CategoryPage />} />

              {/* Other Pages */}
              <Route path="/abu-dhabi" element={<CategoryPage />} />
              <Route path="/staycations" element={<CategoryPage />} />

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
