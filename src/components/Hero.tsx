import React from 'react';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1920&auto=format&fit=crop"
          alt="Luxury Salon Interior"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-brand-gold font-sans font-semibold tracking-[0.3em] uppercase text-sm mb-4">
              Welcome to Excellence
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif leading-[1.1] mb-6">
              Luxury Salon & Spa <br />
              <span className="italic font-normal">Experience in Bhopal</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-sans max-w-xl mb-10 leading-relaxed">
              Indulge in professional hair, beauty, and spa services designed for a stunning look and ultimate relaxation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#booking"
                className="bg-brand-gold text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-zinc-900 transition-all duration-300 text-center shadow-xl shadow-brand-gold/20"
              >
                Book Appointment
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-zinc-900 transition-all duration-300 text-center"
              >
                View Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-20 bg-gradient-to-b from-brand-gold to-transparent"
        ></motion.div>
      </div>
    </section>
  );
};

export default Hero;
