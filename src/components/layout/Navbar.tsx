import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import LogoSvg from '../../assets/Logo.svg';
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
    <header className="sticky top-0 z-50 bg-white border-b border-surface-border">
      <div className="container flex items-center justify-between h-16">

        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img src={LogoSvg} alt="Two Lemurs" className="h-5 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-typography-muted hover:text-typography-main transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button label="Talk to Sales" variant="primary" icon="arrow-up-right" size="sm" />
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
              className="text-sm text-typography-muted hover:text-typography-main transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
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
