
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Do you provide custom panels?',
      answer: 'Yes, we specialize in designing and manufacturing custom electrical control and distribution panels tailored to your specific requirements. Contact us to discuss your project needs.',
    },
    {
      question: 'What’s the lead time?',
      answer: 'Lead times vary depending on the complexity and order size, typically ranging from 2 to 6 weeks. We provide a detailed timeline upon order confirmation to ensure transparency.',
    },
    {
      question: 'Do you ship pan-India?',
      answer: 'Absolutely, we ship our products across India, ensuring safe and timely delivery to urban and rural locations. Contact us for shipping details and logistics support.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center text-amber-300 mb-12"
        >
          Frequently Asked Questions
        </motion.h2>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center bg-gray-700 p-4 rounded-xl text-left focus:outline-none hover:bg-gray-600 transition duration-300"
              >
                <h3 className="text-amber-200 text-lg md:text-xl font-semibold">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <FaChevronUp className="text-amber-400" />
                ) : (
                  <FaChevronDown className="text-amber-400" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-600 p-4 rounded-b-xl text-gray-300 text-sm md:text-base"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;