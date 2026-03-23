import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className="flex flex-col">
              <span className={`text-2xl font-serif font-bold tracking-tighter ${scrolled ? 'text-zinc-900' : 'text-white'}`}>
                THE FASHION CO.
              </span>
              <span className={`text-[10px] tracking-[0.3em] uppercase font-sans ${scrolled ? 'text-brand-gold' : 'text-brand-gold'}`}>
                Salon & Spa
              </span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-brand-gold ${
                    scrolled ? 'text-zinc-700' : 'text-white/90'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#booking"
                className="bg-brand-gold text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-zinc-900 transition-all duration-300 shadow-lg shadow-brand-gold/20"
              >
                Book Now
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-zinc-900' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-zinc-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-zinc-900 hover:text-brand-gold border-b border-zinc-50"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#booking"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-brand-gold text-white px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
