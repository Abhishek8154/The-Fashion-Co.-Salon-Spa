import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, User, Phone, MessageSquare, Sparkles } from 'lucide-react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const services = [
    "Hair Styling",
    "Hair Spa",
    "Hair Coloring",
    "Facials & Skin Care",
    "Bridal Makeup",
    "Party Makeup",
    "Manicure & Pedicure",
    "Spa & Relaxation"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a server
    alert('Thank you! Your appointment request has been sent. We will contact you shortly.');
    setFormData({ name: '', phone: '', service: '', date: '', message: '' });
  };

  return (
    <section id="booking" className="py-24 bg-brand-pink relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 border border-brand-gold rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-brand-gold rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-gold font-sans font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">
              Reservation
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-8 leading-tight">
              Book Your <br />
              <span className="italic">Luxury Experience</span>
            </h2>
            <p className="text-zinc-600 text-lg mb-10 leading-relaxed">
              Ready for a transformation? Fill out the form to request an appointment. Our team will get back to you within 24 hours to confirm your booking.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-gold shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-zinc-400 text-xs uppercase tracking-widest font-bold">Call Us Directly</p>
                  <p className="text-zinc-900 font-serif text-xl">+91 62641 00360</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-gold shadow-sm">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-zinc-400 text-xs uppercase tracking-widest font-bold">Opening Hours</p>
                  <p className="text-zinc-900 font-serif text-xl">Mon - Sun: 10:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-zinc-400 flex items-center gap-2">
                    <User size={14} /> Full Name
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-100 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-zinc-400 flex items-center gap-2">
                    <Phone size={14} /> Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-100 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all"
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-zinc-400 flex items-center gap-2">
                    <Sparkles size={14} /> Select Service
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-100 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all bg-white"
                  >
                    <option value="">Choose a service</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-zinc-400 flex items-center gap-2">
                    <Calendar size={14} /> Preferred Date
                  </label>
                  <input
                    required
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-100 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-zinc-400 flex items-center gap-2">
                  <MessageSquare size={14} /> Special Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-100 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all h-32 resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-zinc-900 text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-brand-gold transition-all duration-300 shadow-lg"
              >
                Send Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
