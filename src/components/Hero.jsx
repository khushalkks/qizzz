import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lightbulb, BookOpen, Timer } from 'lucide-react';
import VantaBirds from './VantaBirds';

const Hero = () => {
  return (
    <section id="home" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <VantaBirds />

      <div
        className="bg-gradient-to-br from-sky-100/90 to-blue-200/90 text-white py-28 px-6"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center md:text-left space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400">
                Master Every Topic
              </span>
              <br />
              with <span className="text-indigo-800 drop-shadow-md">Alpha_Quizzz</span>
            </h1>

            <p className="text-lg md:text-xl text-black/80 font-medium max-w-xl">
              Unlock your potential with gamified quizzes, AI-based feedback, and smart performance tracking — anytime, anywhere.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-indigo-900 font-semibold text-sm">
              {[
                { Icon: Lightbulb, text: 'Concept-Based', color: 'text-yellow-500' },
                { Icon: BookOpen, text: 'Multiple Topics', color: 'text-green-500' },
                { Icon: Timer, text: 'Timed Challenges', color: 'text-pink-500' },
              ].map(({ Icon, text, color }, i) => (
                <motion.div
                  key={text}
                  className={`flex items-center gap-2 bg-white/20 backdrop-blur px-3 py-2 rounded-full ${color}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                >
                  <Icon size={18} /> {text}
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="inline-block mt-10"
            >
              <Link
                to="/start"
                className="px-10 py-4 bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-400 text-black font-bold rounded-full shadow-2xl hover:shadow-yellow-300/50 transition-all duration-300"
              >
                🚀 Start Your Quiz Adventure
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Section (optional) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <img
              // src="https://cdni.iconscout.com/illustration/premium/thumb/online-exam-quiz-7671167-6142426.png"
              // alt="Quiz Illustration"
              // className="w-full max-w-md mx-auto drop-shadow-xl rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
