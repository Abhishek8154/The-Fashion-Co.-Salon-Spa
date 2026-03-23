import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Location = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-gold font-sans font-semibold tracking-[0.2em] uppercase text-sm mb-4 block"
            >
              Visit Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-serif text-zinc-900 mb-10"
            >
              Our <span className="italic">Location</span>
            </motion.h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 text-brand-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-zinc-900 mb-2">Address</h4>
                  <p className="text-zinc-500 leading-relaxed">
                    178, First Floor, 10 No. Market,<br />
                    Behind Smart Parking, E-4, Arera Colony,<br />
                    Bhopal, Madhya Pradesh 462016
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 text-brand-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-zinc-900 mb-2">Phone</h4>
                  <p className="text-zinc-500">+91 62641 00360</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 text-brand-gold">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-zinc-900 mb-2">Email</h4>
                  <p className="text-zinc-500">info@thefashionco.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 text-brand-gold">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-zinc-900 mb-2">Hours</h4>
                  <p className="text-zinc-500">Mon - Sun: 10:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <a 
                href="https://maps.app.goo.gl/W5KAUggYdK6SrAQ9A" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-gold font-bold uppercase tracking-widest text-sm hover:text-zinc-900 transition-colors"
              >
                Get Directions <MapPin size={16} />
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-zinc-100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.444933923053!2d77.4278474758564!3d23.22689530863004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c426666666667%3A0x6666666666666666!2sThe%20Fashion%20Co.%20Salon%20%26%20Spa!5e0!3m2!1sen!2sin!4v1711180000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Fashion Co. Salon & Spa Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
