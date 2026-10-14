import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, ArrowUp } from 'lucide-react';
import { useScrollReveal } from '../../hooks';

const socialLinks = [
  { name: 'Instagram', icon: './assets/instagram.svg', href: '#' },
  { name: 'Facebook', icon: './assets/facebook.svg', href: '#' },
  { name: 'LinkedIn', icon: './assets/linkedin.svg', href: '#' },
  { name: 'Twitter', icon: './assets/Twitter.svg', href: '#' },
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
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { ref: footerRef, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-40 size-11 md:size-12 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-primary-hover active:scale-95 cursor-pointer ${
          showTopBtn
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        <ArrowUp size={20} />
      </button>

      <footer ref={footerRef} className="bg-dark text-white pt-16 sm:pt-20 lg:pt-24 overflow-hidden relative">
        {/* Subtle ambient glow */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-primary/5 blur-3xl rounded-full" />

        <div className="container relative z-10">

        {/* Top Header Row: Logo & Socials */}
        <div className={`flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between transition-all duration-700 ease-out will-change-transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="flex flex-col gap-3">
            <a href="/" title='logo' className="inline-block">
              <img
                src="./assets/Logo.svg"
                alt="Two Lemurs"
                className="h-8 w-auto brightness-0 invert md:w-auto"
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
                title={social.name}
                className="group flex size-10 items-center justify-center border border-white/10 transition-all duration-300 hover:border-primary/40 hover:bg-white/10 hover:scale-105"
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
        <div className="my-6 sm:my-12 border-t border-white/10" />

        {/* Navigation & Contact Links */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* Column 1: Desktop Tagline */}
          <div className={`hidden lg:block transition-all duration-700 delay-100 ease-out will-change-transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-base avenir-500 text-slate-400 leading-relaxed max-w-xs">
              Helping growing businesses solve the problems growth creates.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className={`transition-all duration-700 delay-200 ease-out will-change-transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h4 className="avenir-600 text-base text-white mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm avenir-500 text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    title={link.label}
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
          <div className={`transition-all duration-700 delay-300 ease-out will-change-transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h4 className="avenir-600 text-base text-white mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm avenir-500 text-slate-400">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    title={link.label}
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
          <div className={`col-span-2 lg:col-span-1 transition-all duration-700 delay-400 ease-out will-change-transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h4 className="avenir-600 text-base text-white mb-4">
              Contact
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm avenir-500 text-slate-400">
              <li>
                <a
                  href="tel:+61255503559"
                  title="+61 255 503 559"
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
                  title='info@twolemurs.com'
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
                  title='123 Demo Street, Richmond VIC 3121, Australia'
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
        <div className="my-6 sm:my-12 border-t border-white/10" />

        {/* Copyright & Legal Row */}
        <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 avenir-500 transition-all duration-700 delay-500 ease-out will-change-transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p>&copy; 2026 Two Lemurs. All rights reserved.</p>
          <div className="avenir-500 flex items-center gap-6 text-sm">
            <a
              href="#privacy"
              title='Privacy Policy'
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
              title='Terms of Service'
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

        {/* Giant Bottom Brand Logo with Masked Roll-up */}
        <div className="mt-8 sm:mt-12 flex justify-center overflow-hidden pointer-events-none select-none -mb-1 sm:-mb-4">
          <div className={`gothic-800 text-[clamp(3.5rem,15vw,250px)] leading-none sm:leading-[0.88] text-white whitespace-nowrap text-center transition-all duration-1000 delay-500 ease-out will-change-transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
          }`}>
            Two Lemurs
          </div>
        </div>

      </div>
    </footer>
    </>
  );
}