
import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaPlug, FaMapMarkerAlt } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center text-amber-300 mb-12"
        >
          About Us
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            {/* Brief Intro */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-gray-300 mb-8"
            >
              Saujanya Metal & Engineering Works is a trusted leader in electrical and metal engineering, delivering innovative and reliable solutions for industrial, commercial, and residential applications. With a focus on quality and customer satisfaction, we power communities with cutting-edge products.
            </motion.p>

            {/* Icon Bullets */}
            <ul className="space-y-6">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center"
              >
                <FaClock className="text-3xl text-amber-400 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-amber-200">Years of Experience</h3>
                  <p className="text-gray-300">Over 15 years of expertise in electrical and metal engineering.</p>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center"
              >
                <FaPlug className="text-3xl text-amber-400 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-amber-200">Number of Installations</h3>
                  <p className="text-gray-300">Successfully installed over 10,000 units across diverse projects.</p>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center"
              >
                <FaMapMarkerAlt className="text-3xl text-amber-400 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-amber-200">Service Area</h3>
                  <p className="text-gray-300">Serving clients nationwide with a strong presence in urban and rural regions.</p>
                </div>
              </motion.li>
            </ul>

            {/* Our Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8"
            >
              <h3 className="text-xl font-semibold text-amber-200 mb-4">Our Mission</h3>
              <p className="text-base md:text-lg text-gray-300">
                To innovate and deliver high-quality electrical and metal solutions that empower sustainable progress, ensuring reliability and excellence in every project.
              </p>
            </motion.div>
          </div>

          {/* Factory Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src=""
              alt="Saujanya Metal & Engineering Works Factory"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent rounded-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
