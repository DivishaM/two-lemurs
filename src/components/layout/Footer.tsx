import { useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
  const footerRef = useRef<HTMLElement>(null);
  const topRowRef = useRef<HTMLDivElement>(null);
  const divider1Ref = useRef<HTMLDivElement>(null);
  const divider2Ref = useRef<HTMLDivElement>(null);
  const gridColsRef = useRef<HTMLDivElement>(null);
  const legalRowRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    const ctx = gsap.context(() => {
      // 1. Dividers smooth line expansion on scroll
      if (divider1Ref.current) {
        gsap.fromTo(
          divider1Ref.current,
          { scaleX: 0, transformOrigin: 'left' },
          {
            scaleX: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      if (divider2Ref.current) {
        gsap.fromTo(
          divider2Ref.current,
          { scaleX: 0, transformOrigin: 'left' },
          {
            scaleX: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: divider2Ref.current,
              start: 'top 92%',
            },
          }
        );
      }

      // 2. Top Header Row: Logo & Socials entrance
      if (topRowRef.current) {
        const socials = topRowRef.current.querySelectorAll('.footer-social-btn');
        gsap.fromTo(
          topRowRef.current.querySelector('.footer-logo-group'),
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 85%',
            },
          }
        );

        if (socials.length > 0) {
          gsap.fromTo(
            socials,
            { scale: 0.8, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.7,
              stagger: 0.08,
              ease: 'back.out(1.8)',
              scrollTrigger: {
                trigger: footerRef.current,
                start: 'top 85%',
              },
            }
          );
        }
      }

      // 3. Navigation Columns Cascade
      if (gridColsRef.current) {
        gsap.fromTo(
          gridColsRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridColsRef.current,
              start: 'top 88%',
            },
          }
        );
      }

      // 4. Copyright & Legal Row
      if (legalRowRef.current) {
        gsap.fromTo(
          legalRowRef.current,
          { y: 15, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: legalRowRef.current,
              start: 'top 95%',
            },
          }
        );
      }

      // 5. Giant Brand Text: Slower, cinematic bottom-to-top reveal with word stagger
      if (logoWrapperRef.current) {
        const words = logoWrapperRef.current.querySelectorAll('.footer-big-word');
        gsap.fromTo(
          words,
          { yPercent: 125, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 2.0,
            stagger: 0.18,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: logoWrapperRef.current,
              start: 'top 95%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-typography-dark text-white relative overflow-hidden before:content-[''] before:absolute before:top-[25%] before:left-[-40%] before:bg-[#00163C] before:pointer-events-none before:h-[60%] before:w-[50%] before:rounded-full before:blur-[120px] after:content-[''] after:absolute after:top-[30%] after:right-[-40%] after:bg-[#00163C] after:pointer-events-none after:h-[60%] after:w-[50%] after:rounded-full after:blur-[120px]">
      <div className="container">
        {/* Top Header Row: Logo & Socials */}
        <div ref={topRowRef} className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="footer-logo-group flex flex-col gap-3 will-change-transform">
            <a href="/" title="Two Lemurs Home" className="inline-block group">
              <img
                src="./assets/Logo.svg"
                alt="Two Lemurs - Strategic Branding & Digital Experiences Logo"
                width={150}
                height={32}
                className="h-8 w-auto brightness-0 invert md:w-auto w-[150px] transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            {/* Mobile Tagline */}
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
                className="footer-social-btn group flex size-12 items-center justify-center border border-white/10 transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:-translate-y-1 will-change-transform"
              >
                <img
                  src={social.icon}
                  alt={`${social.name} icon`}
                  width={16}
                  height={16}
                  loading="lazy"
                  className="size-6 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Divider 1 */}
        <div ref={divider1Ref} className="my-6 sm:my-12 border-t border-white/10 will-change-transform" />

        {/* Navigation & Contact Links */}
        <div ref={gridColsRef} className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Column 1: Desktop Tagline */}
          <div className="hidden lg:block will-change-transform">
            <p className="text-base avenir-500 text-slate-400 leading-relaxed max-w-xs">
              Helping growing businesses solve the problems growth creates.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="will-change-transform">
            <h3 className="avenir-600 text-base text-white mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm avenir-500 text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    title={link.label}
                    className="group flex items-center justify-between border-b border-transparent pb-1.5 transition-all duration-200 hover:border-white/10 hover:text-white"
                  >
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      {link.label}
                    </span>
                    <span className="flex size-6 shrink-0 items-center justify-center text-white opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                      <ArrowUpRight size={16} />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="will-change-transform">
            <h3 className="avenir-600 text-base text-white mb-4">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm avenir-500 text-slate-400">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    title={link.label}
                    className="group flex items-center justify-between border-b border-transparent pb-1.5 transition-all duration-200 hover:border-white/10 hover:text-white"
                  >
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      {link.label}
                    </span>
                    <span className="flex size-6 shrink-0 items-center justify-center text-white opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                      <ArrowUpRight size={16} />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="col-span-2 lg:col-span-1 will-change-transform">
            <h3 className="avenir-600 text-base text-white mb-4">
              Contact
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm avenir-500 text-slate-400">
              <li>
                <a
                  href="tel:+61255503559"
                  title="+61 255 503 559"
                  className="group flex items-center justify-between border-b border-transparent pb-1.5 transition-all duration-200 hover:border-white/10 hover:text-white"
                >
                  <div className="flex items-center gap-2.5 transition-transform duration-200 group-hover:translate-x-1">
                    <Phone size={14} className="shrink-0 text-slate-400 transition-colors duration-200 group-hover:text-primary" />
                    <span>+61 255 503 559</span>
                  </div>
                  <span className="flex size-6 shrink-0 items-center justify-center text-white opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                    <ArrowUpRight size={16} />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@twolemurs.com"
                  title="info@twolemurs.com"
                  className="group flex items-center justify-between border-b border-transparent pb-1.5 transition-all duration-200 hover:border-white/10 hover:text-white"
                >
                  <div className="flex items-center gap-2.5 transition-transform duration-200 group-hover:translate-x-1">
                    <Mail size={14} className="shrink-0 text-slate-400 transition-colors duration-200 group-hover:text-primary" />
                    <span>info@twolemurs.com</span>
                  </div>
                  <span className="flex size-6 shrink-0 items-center justify-center text-white opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                    <ArrowUpRight size={16} />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=123+Demo+Street,+Richmond+VIC+3121,+Australia"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="123 Demo Street, Richmond VIC 3121, Australia"
                  className="group flex items-center justify-between border-b border-transparent pb-1.5 transition-all duration-200 hover:border-white/10 hover:text-white"
                >
                  <div className="flex items-start gap-2.5 transition-transform duration-200 group-hover:translate-x-1">
                    <MapPin size={14} className="shrink-0 mt-0.5 text-slate-400 transition-colors duration-200 group-hover:text-primary" />
                    <span>123 Demo Street, Richmond VIC 3121, Australia</span>
                  </div>
                  <span className="flex size-6 shrink-0 items-center justify-center text-white opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                    <ArrowUpRight size={16} />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider 2 */}
        <div ref={divider2Ref} className="my-6 sm:my-12 border-t border-white/10 will-change-transform" />

        {/* Copyright & Legal Row */}
        <div ref={legalRowRef} className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 avenir-500 will-change-transform">
          <p>&copy; 2026 Two Lemurs. All rights reserved.</p>
          <div className="avenir-500 flex items-center gap-6 text-sm">
            <a
              href="#privacy"
              title="Privacy Policy"
              className="group inline-flex items-center gap-1 border-b border-transparent pb-0.5 transition-all duration-200 hover:border-white/20 hover:text-white"
            >
              <span>Privacy Policy</span>
              <ArrowUpRight
                size={14}
                className="opacity-0 -translate-x-1 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
              />
            </a>
            <a
              href="#terms"
              title="Terms of Service"
              className="group inline-flex items-center gap-1 border-b border-transparent pb-0.5 transition-all duration-200 hover:border-white/20 hover:text-white"
            >
              <span>Terms of Service</span>
              <ArrowUpRight
                size={14}
                className="opacity-0 -translate-x-1 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
              />
            </a>
          </div>
        </div>

        {/* Giant Bottom Brand Logo: Stretches across the full width using span text */}
        <div
          ref={logoWrapperRef}
          className="mt-8 sm:mt-12 w-full overflow-hidden pointer-events-none select-none flex justify-center -mb-1 sm:-mb-4"
        >
          <div
            ref={textRef}
            className="gothic-800 leading-none sm:leading-[0.88] text-white whitespace-nowrap inline-flex items-baseline gap-[0.14em] tracking-[-0.035em] font-black"
            style={{ fontSize: '16vw' }}
          >
            <span className="footer-big-word inline-block will-change-transform">Two</span>
            <span className="footer-big-word inline-block will-change-transform">Lemurs</span>
          </div>
        </div>
      </div>
    </footer>
  );
}