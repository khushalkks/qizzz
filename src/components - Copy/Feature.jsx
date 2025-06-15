import React from 'react';
import { Sparkles, Timer, BarChart3, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import VantaBirds from './VantaBirds';

const features = [
  {
    Icon: Sparkles,
    title: 'Interactive Quizzes',
    description: 'Boost your learning with engaging and fun multiple-choice quizzes.',
  },
  {
    Icon: Timer,
    title: 'Timed Challenges',
    description: 'Improve focus and decision-making with time-based quiz rounds.',
  },
  {
    Icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Track your progress with real-time insights and results.',
  },
  {
    Icon: UserCheck,
    title: 'Personalized Experience',
    description: 'Get quiz suggestions and levels based on your learning style.',
  },
];

const iconMotion = {
  initial: { opacity: 0, scale: 0.5, rotate: -10 },
  animate: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.6 } },
  whileHover: { scale: 1.2, rotate: 5, transition: { type: 'spring', stiffness: 300 } },
};

const Feature = () => {
  return (
    <section id="feature" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <VantaBirds />

      <div
        className="bg-gradient-to-br from-sky-100/80 to-blue-300/80 text-white py-28 px-6"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-black"
          >
            Why Choose <span className="text-blue-500">Alpha_Quizzz?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-black/70 text-lg mb-14 max-w-2xl mx-auto"
          >
            We provide a smart, gamified learning platform designed to make every quiz attempt meaningful and measurable.
          </motion.p>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {features.map(({ Icon, title, description }, index) => (
              <motion.div
                key={index}
                className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-2xl text-center hover:scale-105 hover:shadow-3xl transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  variants={iconMotion}
                  initial="initial"
                  animate="animate"
                  whileHover="whileHover"
                  className="flex justify-center mb-4"
                >
                  <Icon className="w-10 h-10 text-blue-400" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
                <p className="text-white/80 text-sm">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
