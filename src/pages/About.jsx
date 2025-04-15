import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="py-16 px-6 md:px-20 bg-gradient-to-r from-indigo-100 via-purple-100 to-indigo-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-screen-xl mx-auto text-gray-900">
        {/* Title */}
        <motion.h1
          className="text-4xl font-extrabold text-center mb-6 text-indigo-800"
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          About Us
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-center mb-8 text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          We are a passionate team committed to delivering exceptional services
          and creating memorable experiences for our clients.
        </motion.p>

        {/* Image and Text Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Image Section */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <img
              src="team.jpg"
              alt="Our Team"
              className="w-full h-72 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600">
              Our mission is to provide high-quality solutions that meet the
              unique needs of each client, fostering long-term relationships
              built on trust and excellence.
            </p>
          </motion.div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          className="py-12 px-6 bg-indigo-600 text-white text-center rounded-2xl shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg mb-6">
            Join us today and experience the difference.
          </p>
          <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 ease-in-out">
            Get Started
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
