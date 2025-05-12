
import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-amber-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Brief Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start"
          >
            <img
              src="public/company.jpeg"
              alt="Saujanya Metal & Engineering Works Logo"
              className="h-12 mb-4"
            />
            <p className="text-sm text-gray-200 text-center md:text-left">
              Saujanya Metal & Engineering Works delivers innovative electrical and metal solutions, empowering industries with quality and reliability.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-semibold text-amber-200 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><a href="#products" className="hover:text-white transition duration-300">Products</a></li>
              <li><a href="#about" className="hover:text-white transition duration-300">About</a></li>
              <li><a href="#contact" className="hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-semibold text-amber-200 mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-amber-400" />
               Indrapuri Marga,Naghdhunga,Pokhara,Nepal
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-amber-400" />
                <a href="mailto:info@saujanyametal.com" className="hover:text-white transition duration-300">
                  info@saujanyametal.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-amber-400" />
                <a href="tel:+9779856031563" className="hover:text-white transition duration-300">
                +9779856031563
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-semibold text-amber-200 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-white transition duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-white transition duration-300"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-white transition duration-300"
              >
                <FaFacebook className="text-2xl" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center text-sm text-gray-200"
        >
          <p>© 2025 Saujanya Metal & Engineering Works. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
