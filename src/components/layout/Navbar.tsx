import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
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
  LayoutDashboard,
  Bell,
  Store,
  Coins
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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
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
    setIsSearchOpen(false);
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

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-border/10",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md"
            : "bg-background/95 backdrop-blur-md"
        )}
      >
        <nav className="section-container py-2">
          {/* Row 1: Logo, Search, Actions */}
          <div className="flex items-center justify-between gap-4 mb-2">
            {/* Logo */}
            <Link to="/" onClick={handleLogoClick} className="flex-shrink-0 flex items-center gap-2 -ml-2">
              <img src="/logo.png" alt="Flyout Tours" className="h-12 w-auto object-contain" />
            </Link>

            {/* Desktop Search - Always Visible */}
            <div className="hidden lg:block flex-1 max-w-xl px-4">
              <div className="relative">
                <SearchAutocomplete
                  className="w-full"
                  onClose={() => { }} // No-op since it's always visible in this view
                />
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Flyout Credit */}
              <Link to="/credit" className="hidden lg:flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                <Coins className="h-5 w-5 text-yellow-500" />
                <span className="hidden xl:inline font-bold">FLYOUT POINTS</span>
              </Link>

              {/* Sell on Flyout Tour */}
              <Link to="/sell" className="hidden lg:flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                <Store className="h-5 w-5" />
                <span className="hidden xl:inline font-bold">PARTNER WITH FLYOUT</span>
              </Link>

              {/* Notifications */}
              <Button variant="ghost" size="icon" className="hidden lg:flex text-foreground/80 hover:text-primary">
                <Bell className="h-5 w-5" />
              </Button>

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
                        <Link to="/sign-in" className="cursor-pointer">Sign In</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/sign-up" className="cursor-pointer">Sign Up</Link>
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden ml-2"
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

          {/* Row 2: Navigation Links (Desktop Only) */}
          <div className="hidden lg:flex items-center justify-center gap-6 border-t border-border/10 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}

            {/* Destinations Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg text-foreground/80 hover:text-primary transition-colors focus:outline-none">
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
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg text-foreground/80 hover:text-primary transition-colors focus:outline-none">
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
              className="px-3 py-2 text-sm font-medium rounded-lg text-foreground/80 hover:text-primary transition-colors"
            >
              Abu Dhabi
            </Link>

            <Link
              to="/staycations"
              className="px-3 py-2 text-sm font-medium rounded-lg text-foreground/80 hover:text-primary transition-colors"
            >
              Staycations
            </Link>

            <Link
              to="/blogs"
              className="px-3 py-2 text-sm font-medium rounded-lg text-foreground/80 hover:text-primary transition-colors"
            >
              Blogs
            </Link>
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
                {/* Mobile Search */}
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
                  <Link
                    to="/sell"
                    className="flex items-center gap-2 px-4 py-3 text-foreground hover:bg-muted rounded-lg"
                  >
                    <Store className="h-4 w-4" />
                    Sell on Flyout Tour
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
                      <Link to="/sign-in">Sign In</Link>
                    </Button>
                  )}
                  <Button className="w-full bg-primary hover:bg-[#FFBF19] transition-colors duration-300 ease-in-out text-primary-foreground" asChild>
                    <Link to="/deals">Book Now</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer for fixed navbar - Increased height for double row */}
      <div className="h-32 lg:h-40" />
    </>
  );
}
