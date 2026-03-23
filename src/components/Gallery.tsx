import React from 'react';
import { motion } from 'motion/react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
    title: "Hair Styling",
    category: "Hair"
  },
  {
    url: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800&auto=format&fit=crop",
    title: "Bridal Glow",
    category: "Makeup"
  },
  {
    url: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
    title: "Relaxing Spa",
    category: "Spa"
  },
  {
    url: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop",
    title: "Color Art",
    category: "Hair"
  },
  {
    url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
    title: "Skin Rituals",
    category: "Skincare"
  },
  {
    url: "https://images.unsplash.com/photo-1610992015732-2449b0c26670?q=80&w=800&auto=format&fit=crop",
    title: "Nail Design",
    category: "Nails"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-sans font-semibold tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            Visual Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-zinc-900 mb-6"
          >
            Our Gallery of <br />
            <span className="italic">Transformations</span>
          </motion.h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-brand-gold text-xs uppercase tracking-widest font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {image.category}
                </span>
                <h3 className="text-white text-xl font-serif transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
