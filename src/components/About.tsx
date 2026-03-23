import React from 'react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-brand-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1000&auto=format&fit=crop"
                alt="Salon Experience"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-pink rounded-2xl -z-0 hidden md:block"></div>
            <div className="absolute -top-10 -left-10 border-2 border-brand-gold w-32 h-32 rounded-2xl -z-0 hidden md:block"></div>
            
            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-xl z-20 max-w-[200px] hidden sm:block">
              <p className="text-brand-gold text-4xl font-serif font-bold mb-1">10+</p>
              <p className="text-zinc-600 text-xs uppercase tracking-widest font-bold">Years of Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-gold font-sans font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-8 leading-tight">
              A Trusted Beauty Destination <br />
              <span className="italic">in the Heart of Bhopal</span>
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed mb-6">
              The Fashion Co. Salon & Spa stands as a beacon of luxury and professional care in Arera Colony. We believe that beauty is an art, and our mission is to provide a sanctuary where you can rediscover your most stunning self.
            </p>
            <p className="text-zinc-600 text-lg leading-relaxed mb-10">
              Our team of highly experienced stylists and therapists use only premium, world-class products to ensure every treatment is a masterpiece. From avant-garde hairstyling to rejuvenating spa rituals, we offer a comprehensive suite of services tailored to your unique needs.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="font-serif text-xl text-zinc-900 mb-2">Expert Stylists</h4>
                <p className="text-zinc-500 text-sm">Trained professionals with years of industry experience.</p>
              </div>
              <div>
                <h4 className="font-serif text-xl text-zinc-900 mb-2">Premium Products</h4>
                <p className="text-zinc-500 text-sm">We use only the finest international beauty brands.</p>
              </div>
            </div>

            <button className="group flex items-center gap-3 text-zinc-900 font-bold uppercase tracking-widest text-sm">
              <span className="border-b-2 border-brand-gold pb-1 group-hover:text-brand-gold transition-colors">Learn More About Us</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
