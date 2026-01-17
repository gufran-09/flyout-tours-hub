import { Link } from "react-router-dom";
<<<<<<< HEAD
import {
  Plane,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
=======
import { 
  Plane, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
>>>>>>> 60d4dfb783a5b22e37f11b9b9f4195113a978a96
  Twitter,
  Youtube,
  CreditCard,
  Shield
} from "lucide-react";
import { NewsletterSection } from "./NewsletterSection";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "All Deals UAE", href: "/deals" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "FAQs", href: "/faq" },
  { name: "Blogs", href: "/blogs" },
];

const dubaiLinks = [
  { name: "Theme Parks", href: "/dubai/theme-parks" },
  { name: "Water Parks", href: "/dubai/water-parks" },
  { name: "Attractions", href: "/dubai/attractions" },
  { name: "Water Sports", href: "/dubai/water-sports" },
  { name: "Dinner Cruise", href: "/dubai/dinner-cruise" },
  { name: "Yacht Tours", href: "/dubai/yacht" },
];

const supportLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Refund Policy", href: "/refund" },
  { name: "Cancellation Policy", href: "/cancellation" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Main Footer Content */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
<<<<<<< HEAD
            <Link to="/" className="inline-block">
              <img
                src="/logo-footer.png"
                alt="Flyout Tours"
                className="h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Your trusted UAE travel partner. We provide curated experiences,
=======
            <Link to="/" className="flex items-center gap-2">
              <Plane className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">
                <span className="text-primary">Flyout</span>
                <span className="text-background">Tours</span>
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Your trusted UAE travel partner. We provide curated experiences, 
>>>>>>> 60d4dfb783a5b22e37f11b9b9f4195113a978a96
              adventure activities, and unforgettable memories across the Emirates.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-background/70">
                  Dubai, United Arab Emirates
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-background/70">
                  +971 50 123 4567
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-background/70">
                  info@flyouttours.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-background/70">
                  24/7 Customer Support
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dubai Experiences */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Dubai Experiences</h4>
            <ul className="space-y-3">
              {dubaiLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <a
<<<<<<< HEAD
                  href="https://www.facebook.com/flyouttours"
=======
                  href="https://facebook.com"
>>>>>>> 60d4dfb783a5b22e37f11b9b9f4195113a978a96
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background/10 hover:bg-primary transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
<<<<<<< HEAD
                  href="https://www.instagram.com/flyout_tours/"
=======
                  href="https://instagram.com"
>>>>>>> 60d4dfb783a5b22e37f11b9b9f4195113a978a96
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background/10 hover:bg-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
<<<<<<< HEAD
                  href="https://www.linkedin.com/company/flyout-tours-llc/"
=======
                  href="https://twitter.com"
>>>>>>> 60d4dfb783a5b22e37f11b9b9f4195113a978a96
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background/10 hover:bg-primary transition-colors"
                >
<<<<<<< HEAD
                  <Linkedin className="h-5 w-5" />
=======
                  <Twitter className="h-5 w-5" />
>>>>>>> 60d4dfb783a5b22e37f11b9b9f4195113a978a96
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background/10 hover:bg-primary transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Flyout Tours. All rights reserved.
            </p>

            {/* Trust Badges */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-background/60">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm">Secure Booking</span>
              </div>
              <div className="flex items-center gap-2 text-background/60">
                <CreditCard className="h-5 w-5 text-primary" />
                <span className="text-sm">Safe Payments</span>
              </div>
            </div>

            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 bg-background/10 rounded text-xs font-medium">
                VISA
              </div>
              <div className="px-3 py-1 bg-background/10 rounded text-xs font-medium">
                MasterCard
              </div>
              <div className="px-3 py-1 bg-background/10 rounded text-xs font-medium">
                Stripe
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
