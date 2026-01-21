import { Link } from "react-router-dom";
import {
  Plane,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  CreditCard,
  Shield
} from "lucide-react";
import { FaCcVisa, FaCcMastercard, FaApplePay, FaGooglePay } from "react-icons/fa";

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
            <Link to="/" className="inline-block">
              <img
                src="/logo-footer.png"
                alt="Flyout Tours"
                className="h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Your trusted UAE travel partner. We provide curated experiences,
              adventure activities, and unforgettable memories across the Emirates.
            </p>
            <div className="space-y-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sharjah+Media+City,+Sharjah+515000+United+Arab+Emirates"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-primary transition-colors cursor-pointer group"
              >
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5 group-hover:text-primary/80" />
                <span className="text-sm text-background/70 group-hover:text-primary">
                  Sharjah Media City, Sharjah 515000<br />United Arab Emirates
                </span>
              </a>
              <a
                href="https://wa.me/971544661317"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary transition-colors cursor-pointer group"
              >
                <Phone className="h-5 w-5 text-primary shrink-0 group-hover:text-primary/80" />
                <span className="text-sm text-background/70 group-hover:text-primary">
                  +971 54 466 1317
                </span>
              </a>
              <a
                href="mailto:info@flyouttours.com"
                className="flex items-center gap-3 hover:text-primary transition-colors cursor-pointer group"
              >
                <Mail className="h-5 w-5 text-primary shrink-0 group-hover:text-primary/80" />
                <span className="text-sm text-background/70 group-hover:text-primary">
                  info@flyouttours.com
                </span>
              </a>
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
                  href="https://www.facebook.com/flyouttours"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background/10 hover:bg-primary transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/flyout_tours/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background/10 hover:bg-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/flyout-tours-llc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background/10 hover:bg-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
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
            <div className="flex flex-col gap-3">
              <span className="text-sm font-medium text-background/80">
                Ways you can pay
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <div className="bg-white p-1 rounded h-8 w-12 flex items-center justify-center">
                  <FaCcVisa className="h-full w-full text-[#1A1F71]" />
                </div>
                <div className="bg-white p-1 rounded h-8 w-12 flex items-center justify-center">
                  <FaCcMastercard className="h-full w-full text-[#EB001B]" />
                </div>
                {/* UnionPay Fallback or Icon */}
                <div className="bg-white p-1 rounded h-8 w-12 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-black leading-tight text-center">UnionPay</span>
                </div>
                <div className="bg-white p-1 rounded h-8 w-12 flex items-center justify-center">
                  <FaApplePay className="h-full w-full text-black" />
                </div>
                <div className="bg-white p-1 rounded h-8 w-12 flex items-center justify-center">
                  <FaGooglePay className="h-full w-full text-black" />
                </div>

                {/* Tabby Logo */}
                <div className="bg-[#3CF298] px-2 rounded h-8 flex items-center justify-center min-w-[50px]">
                  <svg viewBox="0 0 54 20" className="h-3 w-auto fill-black">
                    <path d="M7.5 14.5c0-1.5-.5-2.5-1.5-3.5 1-.5 1.5-1.5 1.5-3s-1-2.5-2.5-2.5H0v12h5c1.5 0 2.5-1 2.5-3zm-5-6.5h2c.5 0 1 .5 1 1s-.5 1-1 1h-2v-2zm0 4.5h2.5c.5 0 1 .5 1 1s-.5 1-1 1H2.5v-2zM15.5 5.5h-3v12h2.5v-2h.5c2 0 3-1.5 3-3.5v-3c0-2-1-3.5-3-3.5zm.5 6.5c0 1-.5 1.5-1.5 1.5h-1.5v-4h1.5c1 0 1.5.5 1.5 1.5v1zM28.5 5.5h-3v12h3c2 0 3-1.5 3-3.5v-5c0-2-1-3.5-3-3.5zm.5 8.5c0 1-.5 1.5-1.5 1.5h-1.5v-4h1.5c1 0 1.5.5 1.5 1.5v1zM36.5 5.5h-2.5v12h2.5c2 0 3-1.5 3-3.5v-1.5c0-1.5-1-2-1.5-2 .5-.5 1.5-.5 1.5-2v-1c0-2-1-2-3-2zm.5 4c0 .5-.5 1-1 1h-1v-3h1c.5 0 1 .5 1 1v1zm.5 4.5c0 .5-.5 1-1 1h-1.5v-3h1.5c.5 0 1 .5 1 1v1zM48.5 5.5l-2.5 4-2.5-4h-2.5l4 6v6h2.5v-6l4-6h-3z" />
                  </svg>
                </div>

                {/* Tamara Logo */}
                <div className="bg-gradient-to-r from-[#FF7349] to-[#EF4388] px-2 rounded h-8 flex items-center justify-center min-w-[50px]">
                  <svg viewBox="0 0 60 20" className="h-3 w-auto fill-white">
                    <path d="M7.5 7.5h-2v-2h-3v10h3v-6h2v6h3v-10h-3zM15 15.5h3v-10h-3v10zM19.5 5.5v10h3v-4.5h1.5l1.5 4.5h3.5l-2-5c1-.5 1.5-1.5 1.5-2.5 0-2-1.5-2.5-3.5-2.5h-5.5zm3 4v-2h2c.5 0 1 .5 1 1s-.5 1-1 1h-2zM33 5.5h-5.5v10h3v-2.5h2.5c2 0 3.5-1.5 3.5-3.5v-0.5c0-2-1.5-3.5-3.5-3.5zm0.5 4c0 1-.5 1.5-1.5 1.5h-2v-3.5h2c1 0 1.5.5 1.5 1.5v0.5zM42 5.5h-5.5v10h3v-2.5h2.5c2 0 3.5-1.5 3.5-3.5v-0.5c0-2-1.5-3.5-3.5-3.5zm0.5 4c0 1-.5 1.5-1.5 1.5h-2v-3.5h2c1 0 1.5.5 1.5 1.5v0.5zM52.5 5.5h-3l-2.5 10h3l.5-2h3l.5 2h3l-2.5-10zm-1.5 6l1-4 1 4h-2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
