import React from 'react';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#" className="flex flex-col">
              <span className="text-2xl font-serif font-bold tracking-tighter">
                THE FASHION CO.
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase font-sans text-brand-gold">
                Salon & Spa
              </span>
            </a>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Experience the ultimate in luxury beauty and wellness. Our expert team is dedicated to providing you with a transformative experience that leaves you looking and feeling your best.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-brand-gold transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-brand-gold transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-brand-gold transition-colors duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Our Services', 'Gallery', 'Book Appointment', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-zinc-500 hover:text-brand-gold transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Services</h4>
            <ul className="space-y-4">
              {['Hair Styling', 'Bridal Makeup', 'Skin Care', 'Hair Spa', 'Manicure', 'Spa Treatments'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-zinc-500 hover:text-brand-gold transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-zinc-500">
                <MapPin size={18} className="text-brand-gold flex-shrink-0" />
                <span>178, First Floor, 10 No. Market, Arera Colony, Bhopal</span>
              </li>
              <li className="flex gap-3 text-sm text-zinc-500">
                <Phone size={18} className="text-brand-gold flex-shrink-0" />
                <span>+91 62641 00360</span>
              </li>
              <li className="flex gap-3 text-sm text-zinc-500">
                <Mail size={18} className="text-brand-gold flex-shrink-0" />
                <span>info@thefashionco.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-10 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} The Fashion Co. Salon & Spa. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-zinc-600 text-xs hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-600 text-xs hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
