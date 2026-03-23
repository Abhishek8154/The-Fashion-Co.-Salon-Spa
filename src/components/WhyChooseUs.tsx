import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Users, Sparkles, HeartHandshake } from 'lucide-react';

const WhyChooseUs = () => {
  const advantages = [
    {
      title: "Experienced Professionals",
      description: "Our stylists and therapists are industry veterans with specialized training.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Premium Products",
      description: "We use only high-end, dermatologically tested international beauty brands.",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Clean & Hygienic",
      description: "We maintain the highest standards of sanitation and safety for our clients.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Affordable Luxury",
      description: "Experience premium services at competitive prices without compromise.",
      icon: <CheckCircle2 className="w-6 h-6" />
    },
    {
      title: "Client-Centric Approach",
      description: "Your satisfaction and comfort are our top priorities at every visit.",
      icon: <HeartHandshake className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-zinc-900 text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-gold font-sans font-semibold tracking-[0.2em] uppercase text-sm mb-4 block"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif mb-8 leading-tight"
            >
              The Gold Standard of <br />
              <span className="italic text-brand-gold">Beauty & Wellness</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 text-lg mb-12 leading-relaxed"
            >
              At The Fashion Co., we redefine the salon experience by combining traditional hospitality with modern beauty techniques.
            </motion.p>

            <div className="space-y-8">
              {advantages.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">{item.title}</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1527799822344-42ad8c5827d7?q=80&w=1000&auto=format&fit=crop"
                alt="Professional Stylist"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-10 bg-brand-gold p-8 rounded-2xl shadow-2xl hidden md:block">
              <p className="text-white text-5xl font-serif font-bold mb-1">100%</p>
              <p className="text-white/80 text-xs uppercase tracking-widest font-bold">Client Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
