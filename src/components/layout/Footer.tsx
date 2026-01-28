import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Shield,
  CreditCard,
  Headphones,
  CheckCircle,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Globe
} from "lucide-react";
import { FaCcVisa, FaCcMastercard, FaApplePay, FaGooglePay } from "react-icons/fa";
import { NewsletterSection } from "./NewsletterSection";

const curatedLinks = {
  explore: [
    { name: "Dubai Experiences", href: "/dubai" },
    { name: "Abu Dhabi Tours", href: "/abu-dhabi" },
    { name: "Sharjah Culture", href: "/sharjah" },
    { name: "Luxury Yacht", href: "/yacht" },
    { name: "Desert Safaris", href: "/desert" },
  ],
  company: [
    { name: "About Flyout", href: "/about" },
    { name: "Our Story", href: "/story" },
    { name: "Careers", href: "/careers" },
    { name: "Blog & Journals", href: "/blog" },
    { name: "Contact Concierge", href: "/contact" },
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Booking Policy", href: "/terms" },
    { name: "Privacy & Security", href: "/privacy" },
    { name: "Partner with Us", href: "/partners" },
  ]
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#051025] to-black text-white relative overflow-hidden font-sans">
      {/* Background Noise/Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

      <NewsletterSection />

      <div className="section-container pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* 1. BRAND BLOCK (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="block">
              {/* Using text logo fallback if image not perfect, or image */}
              <img src="/logo-footer.png" alt="Flyout Tours" className="h-28 w-auto object-contain -ml-4" />
            </Link>

            <p className="text-slate-400 leading-relaxed font-light">
              Flyout Tours isn't just a booking platform; we are your <span className="text-flyout-gold font-medium">elite travel partner</span> in the UAE. From private jets to desert sunsets, we curate moments that become legends.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex items-start gap-4 group cursor-pointer hover:bg-white/5 p-3 rounded-lg transition-colors -ml-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-flyout-gold group-hover:text-black transition-colors">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Headquarters</p>
                  <p className="text-sm text-slate-300 group-hover:text-white transition-colors">Sharjah Media City, UAE</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer hover:bg-white/5 p-3 rounded-lg transition-colors -ml-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-flyout-gold group-hover:text-black transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Concierge Line</p>
                  <p className="text-sm text-slate-300 group-hover:text-white transition-colors">+971 54 466 1317</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. CURATED LINKS (2+2+2 cols) */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 lg:pt-0">
            {/* Explore */}
            <div>
              <h4 className="text-lg font-display text-white mb-6 flex items-center gap-2">
                <Globe size={16} className="text-flyout-gold" /> Explore
              </h4>
              <ul className="space-y-4">
                {curatedLinks.explore.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-slate-400 hover:text-flyout-gold hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-flyout-gold transition-colors" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-display text-white mb-6">Company</h4>
              <ul className="space-y-4">
                {curatedLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-slate-400 hover:text-flyout-gold hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-flyout-gold transition-colors" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust & Socials */}
            <div className="flex flex-col h-full">
              <h4 className="text-lg font-display text-white mb-6">Connect</h4>
              <p className="text-sm text-slate-400 mb-6">Follow our journeys across the Emirates.</p>

              <div className="flex gap-3 mb-8">
                {[
                  { icon: Instagram, href: "https://instagram.com/flyout_tours" },
                  { icon: Facebook, href: "https://facebook.com/flyouttours" },
                  { icon: Linkedin, href: "https://linkedin.com" },
                  { icon: Youtube, href: "https://youtube.com" }
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-flyout-gold hover:text-flyout-gold hover:bg-flyout-gold/10 transition-all duration-300"
                  >
                    <item.icon size={18} />
                  </a>
                ))}
              </div>

              {/* Trust Badge Box */}
              <div className="mt-auto bg-white/5 border border-white/5 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="text-flyout-gold" size={20} />
                  <span className="font-semibold text-white text-sm">100% Secure Booking</span>
                </div>
                <p className="text-xs text-slate-500">We use encrypted SSL security to ensure your data is safe.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. SIGNATURE TRUST STRIP */}
      <div className="border-t border-white/5 bg-black/20 backdrop-blur-lg">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5 border-b border-white/5 bg-white/[0.02]">
            {[
              { icon: CheckCircle, label: "Verified Experiences" },
              { icon: Headphones, label: "24/7 Concierge Support" },
              { icon: Shield, label: "Best Price Guarantee" },
              { icon: CreditCard, label: "Safe & Secure Payment" },
            ].map((trust, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center py-6 gap-2 group hover:bg-white/5 transition-colors">
                <trust.icon className="text-flyout-gold mb-1 group-hover:scale-110 transition-transform duration-300" size={20} />
                <span className="text-xs font-medium text-slate-300 uppercase tracking-widest text-center px-2">{trust.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. PAYMENT & LEGAL */}
      <div className="section-container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500 font-light">
            © {currentYear} Flyout Tours LLC. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex gap-2 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="bg-white h-6 w-10 rounded flex items-center justify-center"><FaCcVisa className="text-[#1A1F71] w-full h-full p-0.5" /></div>
              <div className="bg-white h-6 w-10 rounded flex items-center justify-center"><FaCcMastercard className="text-[#EB001B] w-full h-full p-0.5" /></div>
              <div className="bg-white h-6 w-10 rounded flex items-center justify-center"><FaApplePay className="text-black w-full h-full p-0.5" /></div>
              <div className="bg-white h-6 w-10 rounded flex items-center justify-center"><FaGooglePay className="text-black w-full h-full p-0.5" /></div>
            </div>
          </div>

          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-slate-500 hover:text-flyout-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-slate-500 hover:text-flyout-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
