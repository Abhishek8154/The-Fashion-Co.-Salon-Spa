import React from 'react';
import { motion } from 'motion/react';
import { Scissors, Sparkles, Palette, User, Heart, Star, Wind, Droplets } from 'lucide-react';

const services = [
  {
    title: "Hair Styling",
    description: "Expert cuts, blowouts, and styling for any occasion.",
    icon: <Scissors className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Hair Spa",
    description: "Deep conditioning treatments for healthy, glowing hair.",
    icon: <Droplets className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Hair Coloring",
    description: "Balayage, highlights, and full color transformations.",
    icon: <Palette className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Facials & Skin Care",
    description: "Customized skin treatments for a radiant complexion.",
    icon: <Sparkles className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Bridal Makeup",
    description: "Exquisite makeup artistry for your most special day.",
    icon: <Heart className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Party Makeup",
    description: "Glamorous looks for parties, events, and celebrations.",
    icon: <Star className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Manicure & Pedicure",
    description: "Relaxing nail care and artistic nail designs.",
    icon: <User className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1610992015732-2449b0c26670?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Spa & Relaxation",
    description: "Therapeutic massages and body treatments.",
    icon: <Wind className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1544161515-4af6b1d462c2?q=80&w=800&auto=format&fit=crop"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-sans font-semibold tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-zinc-900 mb-6"
          >
            Exceptional Care for <br />
            <span className="italic">Your Natural Beauty</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 text-lg"
          >
            Discover our wide range of premium salon and spa services, each designed to pamper you and enhance your unique style.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg"
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                <div className="text-brand-gold mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {service.description}
                </p>
                <div className="mt-6 w-10 h-1 bg-brand-gold transform origin-left transition-all duration-500 group-hover:w-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="#booking"
            className="inline-block border-2 border-zinc-900 text-zinc-900 px-12 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-all duration-300"
          >
            Book Your Session
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
