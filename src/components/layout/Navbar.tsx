import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../common/Button';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[68px] md:h-24 flex items-center transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-surface-border/50'
        : 'bg-transparent'
        }`}
    >
      <div className="container flex items-center justify-between">

        <a href="/" title='logo' className="flex-shrink-0">
          <img src="./assets/Logo.svg" alt="Two Lemurs" className="h-[22px] w-auto md:h-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-3.5 lg:gap-6 xl:gap-8 flex-shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              title={link.label}
              className="group relative text-sm lg:text-base xl:text-lg avenir-500 text-typography-main whitespace-nowrap"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="avenir-500 hidden md:block flex-shrink-0">
          <Button label="Talk to Sales" variant="primary" icon="arrow-up-right" size="md" />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-typography-main size-10 flex items-center justify-center border border-slate-200 transition-colors hover:bg-slate-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute items-center top-full left-0 right-0 md:hidden border-t border-surface-border bg-white px-6 py-5 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative py-1 text-sm avenir-500 text-typography-main"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
          <div className="pt-2">
            <Button label="Talk to Sales" variant="primary" icon="arrow-up-right" size="sm" className="w-full justify-center" />
          </div>
        </div>
      )}
    </header>
  );
}