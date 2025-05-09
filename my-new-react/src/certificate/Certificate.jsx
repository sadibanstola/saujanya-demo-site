
import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaAward } from 'react-icons/fa';

const CertificationsClients = () => {
  const clients = [
    { name: 'Client 1', logo: 'https://via.placeholder.com/150?text=Client+1+Logo' },
    { name: 'Client 2', logo: 'https://via.placeholder.com/150?text=Client+2+Logo' },
    { name: 'Client 3', logo: 'https://via.placeholder.com/150?text=Client+3+Logo' },
    { name: 'Client 4', logo: 'https://via.placeholder.com/150?text=Client+4+Logo' },
  ];

  const certifications = [
    {
      name: 'ISO 9001:2015',
      description: 'Certified for Quality Management Systems, ensuring consistent excellence in our processes and products.',
      icon: <FaCertificate className="text-4xl text-amber-400" />,
    },
    {
      name: 'BIS Certification',
      description: 'Approved by the Bureau of Indian Standards for compliance with national safety and quality standards.',
      icon: <FaAward className="text-4xl text-amber-400" />,
    },
  ];

  return (
    <section id="certifications-clients" className="py-16 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Trust-Building Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-amber-300 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            At Saujanya Metal & Engineering Works, we build trust through quality, reliability, and innovation. Our certifications and partnerships with leading companies reflect our commitment to excellence in electrical and metal engineering.
          </p>
        </motion.div>

        {/* Certifications */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-center text-amber-200 mb-8

">
            Our Certifications
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(251, 191, 36, 0.2)' }}
                className="bg-gray-700 p-6 rounded-xl shadow-lg relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent opacity-50" />
                <div className="relative z-10 flex items-center">
                  {cert.icon}
                  <div className="ml-4">
                    <h4 className="text-lg md:text-xl font-semibold text-amber-200">{cert.name}</h4>
                    <p className="text-gray-300 text-sm md:text-base">{cert.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-center text-amber-200 mb-8"
          >
            Our Valued Clients
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center bg-gray-700 p-4 rounded-xl shadow-lg"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  className="h-16 md:h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsClients;
