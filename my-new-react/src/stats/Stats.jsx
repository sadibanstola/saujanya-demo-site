
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaProjectDiagram, FaPlug, FaUsers, FaClock } from 'react-icons/fa';

const AnimatedStats = () => {
  const stats = [
    {
      value: 500,
      label: 'Projects Completed',
      icon: <FaProjectDiagram className="text-4xl text-amber-400" />,
    },
    {
      value: 10000,
      label: 'Panels Delivered',
      icon: <FaPlug className="text-4xl text-amber-400" />,
    },
    {
      value: 300,
      label: 'Clients Served',
      icon: <FaUsers className="text-4xl text-amber-400" />,
    },
    {
      value: 15,
      label: 'Years of Experience',
      icon: <FaClock className="text-4xl text-amber-400" />,
    },
  ];

  const Counter = ({ end }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 2000; // Animation duration in ms
      const increment = end / (duration / 60); // Increment per frame (60fps)
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(Math.floor(end));
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60); // 60fps

      return () => clearInterval(timer);
    }, [end]);

    return <span>{count}+</span>;
  };

  return (
    <section id="stats" className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center text-amber-300 mb-12"
        >
          Our Achievements
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(251, 191, 36, 0.2)' }}
              className="bg-gray-700 p-6 rounded-xl shadow-lg text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent opacity-50" />
              <div className="relative z-10">
                <div className="mb-4">{stat.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-amber-200">
                  <Counter end={stat.value} />
                </h3>
                <p className="text-gray-300 text-sm md:text-base mt-2">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
