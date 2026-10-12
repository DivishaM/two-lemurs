import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const socialLinks = [
  { name: 'Instagram', icon: '/assets/instagram.svg', href: '#' },
  { name: 'Facebook', icon: '/assets/facebook.svg', href: '#' },
  { name: 'LinkedIn', icon: '/assets/linkedin.svg', href: '#' },
  { name: 'Twitter', icon: '/assets/Twitter.svg', href: '#' },
];

const quickLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'FAQs', href: '#faq' },
];

const serviceLinks = [
  { label: 'Logo Design', href: '#services' },
  { label: 'Branding', href: '#services' },
  { label: 'Web Design', href: '#services' },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 sm:pt-20 lg:pt-24 sm:pb-[240px] overflow-hidden relative">
      <div className="container">

        {/* Top Header Row: Logo & Socials */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3">
            <a href="/" className="inline-block">
              <img
                src="/assets/Logo.svg"
                alt="Two Lemurs"
                className="h-8 w-auto brightness-0 invert"
              />
            </a>
            {/* Mobile Tagline (shows directly below logo on mobile) */}
            <p className="lg:hidden text-base avenir-500 text-slate-400 leading-relaxed max-w-sm">
              Helping growing businesses solve the problems growth creates.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="group flex size-10 items-center justify-center border border-white/10 transition-all duration-300 hover:border-white/30 hover:bg-white/10"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="size-4 transition-transform duration-300 group-hover:-rotate-12"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 sm:my-12 border-t border-white/10" />

        {/* Navigation & Contact Links */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* Column 1: Desktop Tagline */}
          <div className="hidden lg:block">
            <p className="text-base avenir-500 text-slate-400 leading-relaxed max-w-xs">
              Helping growing businesses solve the problems growth creates.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="avenir-600 text-base text-white mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm avenir-500 text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center justify-between border-b border-transparent pb-1.5 transition-all duration-200 hover:border-white/10 hover:text-white"
                  >
                    <span>{link.label}</span>
                    <span className="flex size-6 shrink-0 items-center justify-center text-white opacity-0 transition-all duration-200 group-hover:opacity-100">
                      <ArrowUpRight size={16} />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="avenir-600 text-base text-white mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm avenir-500 text-slate-400">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center justify-between border-b border-transparent pb-1.5 transition-all duration-200 hover:border-white/10 hover:text-white"
                  >
                    <span>{link.label}</span>
                    <span className="flex size-6 shrink-0 items-center justify-center text-white opacity-0 transition-all duration-200 group-hover:opacity-100">
                      <ArrowUpRight size={16} />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="avenir-600 text-base text-white mb-4">
              Contact
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm avenir-500 text-slate-400">
              <li>
                <a
                  href="tel:+61255503559"
                  className="group flex items-center justify-between border-b border-transparent pb-1.5 transition-all duration-200 hover:border-white/10 hover:text-white"
                >
                  <div className="flex items-center gap-2.5">
                    <Phone size={14} className="shrink-0 text-slate-400" />
                    <span>+61 255 503 559</span>
                  </div>
                  <span className="flex size-6 shrink-0 items-center justify-center text-white opacity-0 transition-all duration-200 group-hover:opacity-100">
                    <ArrowUpRight size={16} />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@twolemurs.com"
                  className="group flex items-center justify-between border-b border-transparent pb-1.5 transition-all duration-200 hover:border-white/10 hover:text-white"
                >
                  <div className="flex items-center gap-2.5">
                    <Mail size={14} className="shrink-0 text-slate-400" />
                    <span>info@twolemurs.com</span>
                  </div>
                  <span className="flex size-6 shrink-0 items-center justify-center text-white opacity-0 transition-all duration-200 group-hover:opacity-100">
                    <ArrowUpRight size={16} />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=123+Demo+Street,+Richmond+VIC+3121,+Australia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-transparent pb-1.5 transition-all duration-200 hover:border-white/10 hover:text-white"
                >
                  <div className="flex items-start gap-2.5">
                    <MapPin size={14} className="shrink-0 mt-0.5 text-slate-400" />
                    <span>123 Demo Street, Richmond VIC 3121, Australia</span>
                  </div>
                  <span className="flex size-6 shrink-0 items-center justify-center text-white opacity-0 transition-all duration-200 group-hover:opacity-100">
                    <ArrowUpRight size={16} />
                  </span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 sm:my-12 border-t border-white/10" />

        {/* Copyright & Legal Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 avenir-500">
          <p>© 2026 Two Lemurs. All rights reserved.</p>
          <div className="avenir-500 flex items-center gap-6 text-sm">
            <a
              href="#privacy"
              className="group inline-flex items-center gap-1 border-b border-transparent pb-0.5 transition-all duration-200 hover:border-white/20 hover:text-white"
            >
              <span>Privacy Policy</span>
              <ArrowUpRight
                size={14}
                className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
            </a>
            <a
              href="#terms"
              className="group inline-flex items-center gap-1 border-b border-transparent pb-0.5 transition-all duration-200 hover:border-white/20 hover:text-white"
            >
              <span>Terms of Service</span>
              <ArrowUpRight
                size={14}
                className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
            </a>
          </div>
        </div>

        {/* Giant Bottom Brand Logo */}
        <div className="flex justify-center overflow-hidden pointer-events-none select-none">
          <div className="gothic-800 text-[clamp(3.5rem,15vw,250px)] leading-[0.88] text-white absolute bottom-[-4px] sm:bottom-[-16px] whitespace-nowrap text-center">
            Two Lemurs
          </div>
        </div>

      </div>
    </footer>
  );
}