import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaAward } from 'react-icons/fa';

const CertificationsClients = () => {
  const clients = [
    { name: 'Client 1', logo: '/clients/fistail.jpeg' },
    { name: 'Client 2', logo: '/clients/hotel.jpeg' },
    { name: 'Client 3', logo: 'clients/prativa.jpeg' },
    { name: 'Client 4', logo: 'clients/charak_transparent.png' },
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
    <section id="certifications-clients" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-amber-950 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Trust-Building Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-amber-300 mb-6 tracking-tight"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            At Saujanya Metal & Engineering Works, we build trust through quality, reliability, and innovation. Our certifications and partnerships with leading companies reflect our unwavering commitment to excellence in electrical and metal engineering.
          </motion.p>
        </motion.div>

        {/* Certifications */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-3xl md:text-4xl font-semibold text-center text-amber-200 mb-12 tracking-wider"
          >
            Our Certifications
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(251, 191, 36, 0.3)' }}
                className="bg-gray-800/70 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-2xl relative overflow-hidden border border-amber-900/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 to-transparent opacity-60" />
                <div className="relative z-10 flex items-center space-x-5">
                  <div className="text-amber-400">{cert.icon}</div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-semibold text-amber-100">{cert.name}</h4>
                    <p className="text-gray-300 text-base md:text-lg mt-2">{cert.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-3xl md:text-4xl font-semibold text-center text-amber-200 mb-12 tracking-wider"
          >
            Our Valued Clients
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.1, boxShadow: '0 10px 20px rgba(251, 191, 36, 0.4)' }}
                className="flex items-center justify-center bg-gray-800/60 backdrop-blur-sm p-4 md:p-5 rounded-xl shadow-lg hover:bg-amber-900/20 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  className="h-16 md:h-20 object-contain transition-transform duration-300"
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