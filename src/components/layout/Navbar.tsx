import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../common/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const mobileBtnRef = useRef<HTMLButtonElement>(null);
  const wasScrolledRef = useRef(false);

  // 1. Initial Page Load Entrance Animation for Header Items
  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      if (logoRef.current) {
        tl.fromTo(
          logoRef.current,
          { opacity: 0, x: -24 },
          { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' },
          0
        );
      }

      if (navRef.current) {
        const links = navRef.current.querySelectorAll('.nav-link-item');
        tl.fromTo(
          links,
          { opacity: 0, y: -16 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out' },
          0.1
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: -12, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out' },
          0.25
        );
      }

      if (mobileBtnRef.current) {
        tl.fromTo(
          mobileBtnRef.current,
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out' },
          0.15
        );
      }
    }, headerRef);

    return () => ctx.revert();
  }, []);

  // 2. Active Section Spy on Scroll
  useEffect(() => {
    const sections = ['services', 'portfolio', 'how-it-works', 'faq'];
    const triggers: ScrollTrigger[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const st = ScrollTrigger.create({
          trigger: el,
          start: 'top 45%',
          end: 'bottom 45%',
          onToggle: (self) => {
            if (self.isActive) {
              setActiveSection(id);
            }
          },
        });
        triggers.push(st);
      }
    });

    return () => {
      triggers.forEach((st) => st.kill());
    };
  }, []);

  // 3. Tactile Sticky Docking Effect on Scroll
  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleScroll = () => {
      const scrolled = window.scrollY > 25;

      if (scrolled !== wasScrolledRef.current) {
        wasScrolledRef.current = scrolled;
        setIsScrolled(scrolled);

        // Tactile micro-drop docking sensation when latching into sticky position
        if (scrolled && headerRef.current && !isReduced) {
          gsap.fromTo(
            headerRef.current,
            { y: -8 },
            { y: 0, duration: 0.38, ease: 'power3.out', overwrite: 'auto' }
          );
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-400 ease-[cubic-bezier(0.2,0.7,0.2,1)] will-change-transform ${
        isScrolled
          ? 'h-[58px] md:h-[72px] bg-white/90 backdrop-blur-xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.07),0_1px_3px_rgba(0,0,0,0.04)] border-b border-surface-border/70'
          : 'h-[68px] md:h-24 bg-transparent border-b border-transparent shadow-none'
      }`}
    >
      {/* Subtle bottom edge metallic light reflection when docked sticky */}
      <div
        className={`pointer-events-none absolute bottom-0 left-0 right-0 h-[1.5px] transition-opacity duration-500 ${
          isScrolled
            ? 'opacity-100 bg-gradient-to-r from-transparent via-primary/35 to-transparent'
            : 'opacity-0'
        }`}
      />

      <div className="container flex items-center justify-between">
        {/* Brand Logo with smooth scale and positioning */}
        <a ref={logoRef} href="/" title="logo" className="flex-shrink-0 group">
          <img
            src="./assets/Logo.svg"
            alt="Two Lemurs"
            className={`h-[22px] w-auto md:h-auto transition-all duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
              isScrolled ? 'scale-90 md:scale-[0.92]' : 'scale-100'
            } group-hover:scale-105`}
          />
        </a>

        {/* Desktop Nav Links with active indicator and smooth spacing */}
        <nav
          ref={navRef}
          className={`hidden md:flex items-center transition-all duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] flex-shrink-0 ${
            isScrolled ? 'gap-3 lg:gap-5 xl:gap-7' : 'gap-3.5 lg:gap-6 xl:gap-8'
          }`}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                title={link.label}
                className={`nav-link-item group relative text-sm lg:text-base xl:text-lg avenir-500 whitespace-nowrap py-1 ${
                  isActive ? 'text-primary font-semibold' : 'text-typography-main'
                }`}
              >
                <span className="relative inline-block overflow-hidden h-[1.35em] align-top select-none">
                  <span className="block transition-transform duration-400 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:-translate-y-full">
                    {link.label}
                  </span>
                  <span className="block absolute inset-0 transition-transform duration-400 ease-[cubic-bezier(0.2,0.7,0.2,1)] translate-y-full group-hover:translate-y-0 text-primary">
                    {link.label}
                  </span>
                </span>
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] w-full origin-left transition-transform duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
                    isActive
                      ? 'scale-x-100 bg-primary'
                      : 'scale-x-0 bg-primary group-hover:scale-x-100'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA Button with micro-docking scale */}
        <div
          ref={ctaRef}
          className={`avenir-500 hidden md:block flex-shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
            isScrolled ? 'scale-[0.96]' : 'scale-100'
          }`}
        >
          <Button
            href="#contact"
            label="Talk to Sales"
            variant="primary"
            icon="arrow-up-right"
            size="md"
          />
        </div>

        {/* Mobile Hamburger */}
        <button
          ref={mobileBtnRef}
          className="md:hidden text-typography-main size-10 flex items-center justify-center border border-slate-200 transition-colors hover:bg-slate-50 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute items-center top-full left-0 right-0 md:hidden border-t border-surface-border bg-white px-6 py-5 flex flex-col gap-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-300">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                className={`group relative py-1 text-sm avenir-500 transition-colors duration-200 ${
                  isActive ? 'text-primary font-semibold' : 'text-typography-main'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] w-full origin-left transition-transform duration-300 group-hover:scale-x-100 ${
                    isActive ? 'scale-x-100 bg-primary' : 'scale-x-0 bg-primary'
                  }`}
                />
              </a>
            );
          })}
          <div className="pt-2 w-full">
            <Button
              href="#contact"
              label="Talk to Sales"
              variant="primary"
              icon="arrow-up-right"
              size="sm"
              className="w-full justify-center"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
}