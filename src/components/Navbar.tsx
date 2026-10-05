import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Lookbook', href: '#lookbook' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled || mobileOpen ? 'bg-bg-base/95 backdrop-blur-sm border-b border-border-light' : 'bg-transparent'
        }`}
      >
        <div className="layout-container flex items-center justify-between h-20 md:h-24">
          
          {/* Logo (Left) */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex-shrink-0 cursor-pointer bg-transparent border-none text-text-primary"
            aria-label="Astra Home"
          >
            <span className="font-serif text-2xl tracking-[0.2em] uppercase">ASTRA</span>
          </button>

          {/* Navigation Links (Center) */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-small text-text-secondary hover:text-text-primary transition-colors cursor-pointer bg-transparent border-none"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA / Menu (Right) */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection('#booking')}
              className="hidden lg:inline-flex btn-primary h-10 px-6"
            >
              Book
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden cursor-pointer text-text-primary p-2 bg-transparent border-none"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
          
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg-base flex flex-col pt-32 px-6 pb-12"
          >
            <div className="flex flex-col gap-8 mb-auto">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-h2 text-left text-text-primary bg-transparent border-none cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => scrollToSection('#booking')}
              className="btn-primary w-full"
            >
              Book an Appointment
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
