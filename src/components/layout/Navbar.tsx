import { useState } from 'react';
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

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="container flex items-center justify-between h-16">

        <a href="/" className="flex-shrink-0">
          <img src="/assets/Logo.svg" alt="Two Lemurs" className="h-5 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative py-1 text-sm avenir-500 text-typography-main"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button label="Talk to Sales" variant="primary" icon="arrow-up-right" size="md" />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-typography-main p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden items-center border-t border-surface-border bg-white px-6 py-4 flex flex-col gap-4">
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
