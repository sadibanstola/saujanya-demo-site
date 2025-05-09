
import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaLightbulb, FaTools, FaShieldAlt, FaPlug, FaCogs } from 'react-icons/fa';

const ProductHighlights = () => {
  const products = [
    {
      name: 'Electrical Control & Distribution Panels',
      description: 'Engineered for efficient power management, ensuring safety and reliability in industrial and commercial settings.',
      icon: <FaBolt className="text-5xl text-amber-400" />,
    },
    {
      name: 'TOD Meter Box',
      description: 'Durable and secure enclosures for time-of-day metering, designed for precision and longevity.',
      icon: <FaPlug className="text-5xl text-amber-400" />,
    },
    {
      name: 'Pole Light',
      description: 'Energy-efficient lighting solutions for streets and outdoor spaces, built for durability and performance.',
      icon: <FaLightbulb className="text-5xl text-amber-400" />,
    },
    {
      name: 'MCCB Box',
      description: 'Advanced circuit protection with robust MCCB enclosures, ideal for heavy-duty applications.',
      icon: <FaShieldAlt className="text-5xl text-amber-400" />,
    },
    {
      name: 'Meter Box',
      description: 'Compact and sturdy meter boxes for residential and commercial energy monitoring.',
      icon: <FaCogs className="text-5xl text-amber-400" />,
    },
    {
      name: 'Metal & Electrical Accessories',
      description: 'High-quality accessories to support all your electrical and metal engineering needs.',
      icon: <FaTools className="text-5xl text-amber-400" />,
    },
  ];

  return (
    <section id="products" className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center text-amber-300 mb-12"
        >
          Product Highlights
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(251, 191, 36, 0.2)' }}
              className="relative bg-gray-700 p-6 rounded-xl shadow-lg overflow-hidden transition-all duration-300"
            >
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent opacity-50" />
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  {product.icon}
                  <h3 className="text-lg md:text-xl font-semibold ml-4 text-amber-200">{product.name}</h3>
                </div>
                <p className="text-gray-300 text-sm md:text-base">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
