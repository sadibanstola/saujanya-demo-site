import React from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ravi Sharma',
    role: 'Electrical Contractor,Pokhara',
    quote:
      'Saujanya Metal & Engineering Works delivers unmatched quality. Their control panels are reliable and built with true precision.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Arati Pandey',
    role: 'Industrial Engineer, Pokhara',
    quote:
      'Their meter boxes and enclosures are durable and aesthetically impressive. Highly recommend for industrial solutions.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Arjun Poudel',
    role: 'Electrican, Baglung',
    quote:
      'Excellent craftsmanship and quick delivery. They are our go-to for custom electrical enclosures and accessories.',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
]

const Testimonials = () => {
  return (
    <div className="bg-gray-900 py-20 px-6 text-center text-gray-100">
      <h2 className="text-4xl font-bold text-amber-200 mb-10">What Our Clients Say</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-2xl shadow-xl p-8 relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Quote className="text-amber-400 absolute top-4 right-4 w-6 h-6 opacity-60" />
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-full mx-auto border-4 border-amber-500 mb-4"
            />
            <p className="italic text-gray-300 mb-4">“{item.quote}”</p>
            <h4 className="text-xl font-semibold text-amber-300">{item.name}</h4>
            <span className="text-sm text-gray-400">{item.role}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
