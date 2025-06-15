// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BarChart3, BookOpenText } from 'lucide-react';
import VantaBirds from './VantaBirds'; // 🐦 Vanta Birds Background

const About = () => {
  return (
    <section id="about" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <VantaBirds /> {/* 🐦 3D Birds Background */}

      <div
        className="bg-gradient-to-br from-purple-200/80 to-purple-400/80 text-white py-24 px-6"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-14"
          >
            About <span className="text-yellow-300">Alpha_Quizzz</span>
          </motion.h2>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 md:p-14 shadow-xl"
          >
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Alpha_Quizzz is built to supercharge your knowledge with interactive, engaging, and accurate quiz sessions.
              Whether you're preparing for exams or just love to learn, we’ve got you covered.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <ShieldCheck className="text-yellow-300 mt-1" />
                <span className="text-white/90 text-base md:text-lg">
                  <strong>Expert Content:</strong> Verified questions to test real understanding.
                </span>
              </div>
              <div className="flex gap-4 items-start">
                <BarChart3 className="text-yellow-300 mt-1" />
                <span className="text-white/90 text-base md:text-lg">
                  <strong>Progress Tracking:</strong> Get instant insights and analytics.
                </span>
              </div>
              <div className="flex gap-4 items-start">
                <BookOpenText className="text-yellow-300 mt-1" />
                <span className="text-white/90 text-base md:text-lg">
                  <strong>Topic Flexibility:</strong> Focus on what matters most to you.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
