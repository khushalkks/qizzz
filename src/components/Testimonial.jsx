import React from 'react';
import { motion } from 'framer-motion';
import VantaBirds from './VantaBirds';

const testimonials = [
  {
    name: "Aarav Sharma",
    quote: "This quiz app helped me prepare for my entrance exams in a fun and effective way. Highly recommended!",
    role: "Student, Delhi University",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sneha Rao",
    quote: "The UI is clean, the analytics are spot on, and I actually look forward to learning every day!",
    role: "Marketing Analyst",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rohit Mehta",
    quote: "I love the gamified quizzes — they make learning feel like a challenge instead of a chore.",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <VantaBirds />

      <div
        className="bg-gradient-to-br from-sky-100/90 to-blue-300/90 text-white py-32 px-6"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-20 text-black"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            🌟 What Our Users Say
          </motion.h2>

          <div className="grid gap-10 md:grid-cols-3 px-4">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                className="bg-white/30 border border-white/20 rounded-3xl p-8 shadow-xl backdrop-blur-xl text-center transform transition hover:-translate-y-2 hover:shadow-2xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-yellow-400 shadow-md"
                />
                <p className="text-white/90 italic mb-6 leading-relaxed">“{t.quote}”</p>
                <h4 className="text-xl font-semibold text-yellow-300">{t.name}</h4>
                <p className="text-sm text-white/70 mt-1">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
