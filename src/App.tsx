import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import CategoryPage from "./pages/CategoryPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
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
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
