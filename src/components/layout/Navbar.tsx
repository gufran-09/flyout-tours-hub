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
  Coins,
  Heart,
  Star,
  Moon,
  Zap,
  Utensils,
  Car,
  FileText,
  Users,
  Gamepad2,
  Ticket,
  Package
} from "lucide-react";
import { MegaMenu } from "./MegaMenu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  const { totalItems } = useCart();

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

  // Helper to get initials
  const getInitials = (email: string | undefined) => {
    if (!email) return "G";
    return email.substring(0, 2).toUpperCase();
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/20 bg-white/80 backdrop-blur-md shadow-sm"
        )}
      >
        <nav className="section-container py-2 flex flex-col gap-2">
          {/* Row 1: Left (Logo+Search) and Right (Brand+Actions) */}
          <div className="flex items-center justify-between gap-4">

            {/* Left Group: Logo + Search */}
            <div className="flex items-center gap-4 lg:gap-8">
              {/* Logo */}
              <Link to="/" onClick={handleLogoClick} className="flex-shrink-0 flex items-center -ml-2">
                <img src="/logo.png" alt="Flyout Tours" className="h-16 lg:h-16 w-auto object-contain" />
              </Link>

              {/* Search (Desktop) */}
              <div className="hidden lg:block w-[280px] xl:w-[340px]">
                <div className="relative">
                  <SearchAutocomplete
                    className="w-full"
                    onClose={() => { }}
                  />
                </div>
              </div>
            </div>

            {/* Right Group: Brand Links + Actions */}
            <div className="flex items-center gap-4 lg:gap-8">
              {/* Brand Links (Desktop) */}
              <div className="hidden lg:flex items-center gap-4">
                <Link to="/sell" className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors whitespace-nowrap">
                  <Store className="h-4 w-4" />
                  <span className="font-bold">PARTNER WITH FLYOUT</span>
                </Link>
                <Link to="/credit" className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors whitespace-nowrap">
                  <Coins className="h-4 w-4 text-yellow-500" />
                  <span className="font-bold">FLYOUT POINTS</span>
                </Link>
              </div>

              {/* Right Side User Actions (Bell, Cart, Profile, Mobile Menu) */}
              <div className="flex items-center gap-2 md:gap-4 shrink-0">
                {/* Notifications */}
                <Button variant="ghost" size="icon" className="hidden lg:flex text-foreground/80 hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Bell className="h-5 w-5" />
                </Button>

                {/* Cart */}
                <Link to="/cart">
                  <Button variant="ghost" size="icon" className="relative hover:bg-primary hover:text-primary-foreground transition-colors">
                    <ShoppingCart className="h-5 w-5" />
                    {totalItems > 0 && (
                      <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center border-2 border-background">
                        {totalItems > 99 ? "99+" : totalItems}
                      </span>
                    )}
                  </Button>
                </Link>

                {/* User Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="hidden md:flex items-center">
                      <img
                        src="/profile.png"
                        alt="Profile"
                        className="w-24 h-18 object-contain opacity-80 hover:opacity-100 transition cursor-pointer"
                      />
                    </button>
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

                        <DropdownMenuItem
                          onClick={handleSignOut}
                          className="cursor-pointer flex items-center gap-2 text-destructive"
                        >
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
          </div>

          {/* Row 2: Navigation Links (Desktop Only) */}
          <div className="hidden lg:flex items-center justify-start lg:pl-56 border-t border-border/10 pt-2 gap-2 ml-16">

            <MegaMenu
              triggerLabel="Categories"
              type="grid"
              columns={4}
              items={[
                { title: "Attraction", href: "/dubai/attractions", icon: Star, image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Category/1.webp" },
                { title: "Parks", href: "/dubai/parks", icon: Palmtree, image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Category/2.webp" },
                { title: "Yacht", href: "/dubai/yacht", icon: Ship, image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Category/3.webp" },
                { title: "Holiday Packages", href: "/dubai/packages", icon: Package, image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Category/4.webp" },
                { title: "Water Adventures", href: "/dubai/water-adventures", icon: Ship, image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Category/5.webp" },
                { title: "Hotel", href: "/dubai/hotels", icon: Building2, image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Category/6.webp" },
                { title: "Car Rental", href: "/dubai/car-rental", icon: Car, image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Category/7.webp" },
                { title: "Dinner Cruise", href: "/dubai/dinner-cruise", icon: Utensils, image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Category/8.webp" },
                { title: "Sky Adventures", href: "/dubai/sky-adventures", icon: Plane, image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Category/9.webp" },
                { title: "Visa & Services", href: "/dubai/visa", icon: FileText, image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Category/10.webp" },
                { title: "City Tours", href: "/dubai/city-tours", icon: Building2, image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Category/11.webp" },
                { title: "Adventures", href: "/dubai/adventures", icon: Zap, image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Category/12.webp" },
                { title: "Airport transfers", href: "/dubai/transfers", icon: Car, image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Category/13.webp" },
                { title: "Safari", href: "/dubai/safari", icon: Compass, image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Category/14.webp" },
                { title: "Restaurants", href: "/dubai/restaurants", icon: Utensils, image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Category/15.webp" },
                { title: "Live concerts & Shows", href: "/dubai/shows", icon: Ticket, image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Category/16.webp" },
              ]}
            />

            <MegaMenu
              triggerLabel="Select Emirate"
              type="list"
              showDivider={false}
              items={[
                { title: "Dubai", href: "/dubai", badge: "Popular", image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Emirates/1.jpg" },
                { title: "Abu Dhabi", href: "/abu-dhabi", image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Emirates/2.jpg" },
                { title: "Sharjah", href: "/sharjah", image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Emirates/3.jpg" },
                { title: "Ras Al Khaimah", href: "/ras-al-khaimah", image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Emirates/4.jpg" },
                { title: "Ajman", href: "/ajman", image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Emirates/5.avif" },
              ]}
            />

            <MegaMenu
              triggerLabel="Experiences"
              type="list"
              items={[
                { title: "Signature Experiences", href: "/experiences/signature", icon: Star, image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Emirates/5.avif" },
                { title: "Sunset & Nightlife", href: "/experiences/sunset", icon: Moon, image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Emirates/5.avif" },
                { title: "Desert & Adventure", href: "/dubai/desert-safari", icon: Compass, image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Emirates/5.avif" },
                { title: "Luxury & Yacht", href: "/dubai/yacht", icon: Ship, image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Emirates/5.avif" },
                { title: "Thrill & Theme Parks", href: "/dubai/theme-parks", icon: Zap, image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Emirates/5.avif" },
                { title: "Dining & Cruises", href: "/dubai/dinner-cruise", icon: Utensils, image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Emirates/5.avif" },
              ]}
            />

            <MegaMenu
              triggerLabel="Luxury"
              type="list"
              items={[
                { title: "Yacht Experiences", href: "/dubai/yacht", icon: Ship, badge: "Exclusive", image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Emirates/5.avif" },
                { title: "Private Tours", href: "/dubai/private-tours", icon: User, image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Emirates/5.avif" },
                { title: "Helicopter Rides", href: "/dubai/helicopter", icon: Plane, image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Emirates/5.avif" },
                { title: "VIP Theme Parks", href: "/dubai/vip-theme-parks", icon: Star, image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Emirates/5.avif" },
                { title: "Supercar Drives", href: "/dubai/supercars", icon: Car, image: "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Emirates/5.avif" },
              ]}
            />

            {/* Simple LInks */}
            <Link to="/staycations" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors whitespace-nowrap px-3 py-2">Staycations</Link>
            <Link to="/blogs" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors whitespace-nowrap px-3 py-2">Blogs</Link>
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
