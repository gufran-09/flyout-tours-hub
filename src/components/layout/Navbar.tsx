import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  ChevronDown,
  Plane,
  MapPin,
  Building2,
  Palmtree,
  Ship,
  Compass,
  LogOut,
  LayoutDashboard
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { SearchAutocomplete } from "@/components/search/SearchAutocomplete";
import { MobileSearchSheet } from "@/components/search/MobileSearchSheet";

function CartLink() {
  const { totalItems } = useCart();
  return (
    <Link to="/cart">
      <Button variant="ghost" size="icon" className="relative">
        <ShoppingCart className="h-5 w-5" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
            {totalItems > 99 ? "99+" : totalItems}
          </span>
        )}
      </Button>
    </Link>
  );
}

const dubaiCategories = [
  { name: "Theme Parks", href: "/dubai/theme-parks", icon: Palmtree },
  { name: "Water Parks", href: "/dubai/water-parks", icon: Ship },
  { name: "Attractions", href: "/dubai/attractions", icon: Building2 },
  { name: "Water Sports", href: "/dubai/water-sports", icon: Compass },
  { name: "Dinner Cruise", href: "/dubai/dinner-cruise", icon: Ship },
  { name: "Yacht", href: "/dubai/yacht", icon: Ship },
  { name: "Limousine", href: "/dubai/limousine", icon: Compass },
];

const destinationsCategories = [
  { name: "Dubai", href: "/dubai", icon: Building2 },
  { name: "Abu Dhabi", href: "/abu-dhabi", icon: MapPin },
  { name: "Sharjah", href: "/sharjah", icon: MapPin },
  { name: "Ras Al Khaimah", href: "/ras-al-khaimah", icon: MapPin },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut, loading } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleSignOut = async () => {
    await signOut();
    toast.success("Signed out successfully");
    navigate("/");
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Deals UAE", href: "/deals" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md"
            : "bg-transparent"
        )}
      >
        <nav className="section-container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="relative">
                <Plane className="h-8 w-8 text-primary" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-primary">Flyout</span>
                <span className={cn(
                  "transition-colors",
                  isScrolled ? "text-foreground" : "text-foreground"
                )}>Tours</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                    location.pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {link.name}
                </Link>
              ))}

              {/* Destinations Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors">
                    Destinations
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48 bg-popover border border-border shadow-xl">
                  {destinationsCategories.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link
                        to={item.href}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <item.icon className="h-4 w-4 text-primary" />
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Dubai Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors">
                    Dubai
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48 bg-popover border border-border shadow-xl">
                  {dubaiCategories.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link
                        to={item.href}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <item.icon className="h-4 w-4 text-primary" />
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                to="/abu-dhabi"
                className="px-4 py-2 text-sm font-medium rounded-lg text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
              >
                Abu Dhabi
              </Link>

              <Link
                to="/staycations"
                className="px-4 py-2 text-sm font-medium rounded-lg text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
              >
                Staycations
              </Link>

              <Link
                to="/blogs"
                className="px-4 py-2 text-sm font-medium rounded-lg text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
              >
                Blogs
              </Link>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2">
              {/* Desktop Search */}
              <div className="hidden lg:block w-64">
                <SearchAutocomplete />
              </div>

              {/* Mobile Search */}
              <MobileSearchSheet className="lg:hidden" />

              {/* Cart */}
              <CartLink />

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="hidden md:flex">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 bg-popover border border-border shadow-xl">
                  {user ? (
                    <>
                      <DropdownMenuItem asChild>
                        <Link to="/dashboard" className="cursor-pointer flex items-center gap-2">
                          <LayoutDashboard className="h-4 w-4" />
                          Dashboard
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer flex items-center gap-2 text-destructive">
                        <LogOut className="h-4 w-4" />
                        Sign Out
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <DropdownMenuItem asChild>
                        <Link to="/auth" className="cursor-pointer">Sign In</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/auth?mode=signup" className="cursor-pointer">Sign Up</Link>
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Book Now CTA */}
              <Button className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link to="/deals">Book Now</Link>
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-t border-border overflow-hidden"
            >
              <div className="section-container py-4 space-y-2">
                {/* Search */}
                <div className="mb-4">
                  <SearchAutocomplete onClose={() => setIsMobileMenuOpen(false)} />
                </div>

                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={cn(
                      "block px-4 py-3 rounded-lg transition-colors",
                      location.pathname === link.href
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Mobile Destinations */}
                <div className="border-t border-border pt-2 mt-2">
                  <p className="px-4 py-2 text-sm font-semibold text-muted-foreground">Destinations</p>
                  {destinationsCategories.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center gap-2 px-4 py-3 text-foreground hover:bg-muted rounded-lg"
                    >
                      <item.icon className="h-4 w-4 text-primary" />
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Dubai Categories */}
                <div className="border-t border-border pt-2 mt-2">
                  <p className="px-4 py-2 text-sm font-semibold text-muted-foreground">Dubai Experiences</p>
                  {dubaiCategories.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center gap-2 px-4 py-3 text-foreground hover:bg-muted rounded-lg"
                    >
                      <item.icon className="h-4 w-4 text-primary" />
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Links */}
                <div className="border-t border-border pt-2 mt-2 space-y-2">
                  <Link
                    to="/staycations"
                    className="block px-4 py-3 text-foreground hover:bg-muted rounded-lg"
                  >
                    Staycations
                  </Link>
                  <Link
                    to="/blogs"
                    className="block px-4 py-3 text-foreground hover:bg-muted rounded-lg"
                  >
                    Blogs
                  </Link>
                </div>

                {/* Mobile Auth */}
                <div className="border-t border-border pt-4 mt-4 space-y-2">
                  {user ? (
                    <>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/dashboard">
                          <LayoutDashboard className="h-4 w-4 mr-2" />
                          Dashboard
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full text-destructive" onClick={handleSignOut}>
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/auth">Sign In</Link>
                    </Button>
                  )}
                  <Button className="w-full bg-primary text-primary-foreground" asChild>
                    <Link to="/deals">Book Now</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
}
