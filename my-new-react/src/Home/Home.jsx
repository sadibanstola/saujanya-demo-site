import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt } from 'react-icons/fa';

const HeroBanner = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background Animated Elements */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.15),transparent)]"
        animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-amber-400 rounded-full mix-blend-screen filter blur-3xl opacity-15"
        animate={{ x: [0, 120, 0], y: [0, 60, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 bg-amber-600 rounded-full mix-blend-screen filter blur-3xl opacity-15"
        animate={{ x: [0, -120, 0], y: [0, -60, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="flex flex-col items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          <motion.div
            className="mb-8"
            animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FaBolt className="text-7xl md:text-9xl text-amber-300 drop-shadow-lg" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight tracking-tighter drop-shadow-md">
            Saujanya Metal & Engineering Works
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="text-xl md:text-3xl text-amber-100 max-w-3xl mx-auto mb-10 font-light"
          >
            Crafting innovative electrical and metal solutions for a sustainable, powered future.
          </motion.p>
          <motion.a
            href="#products"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(251, 191, 36, 0.5)' }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="inline-block bg-amber-600 text-white py-4 px-10 rounded-full text-lg font-semibold hover:bg-amber-700 transition duration-300"
          >
            Explore Our Solutions
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;