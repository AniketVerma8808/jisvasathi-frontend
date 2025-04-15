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
        <motion.h1
          className="text-4xl font-extrabold text-center mb-6 text-indigo-800"
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-center mb-8 text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          We are a passionate team committed to delivering exceptional services
          and creating memorable experiences for our clients.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="w-full md:w-1/2"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="team.jpg"
              alt="Our Team"
              className="w-full h-72 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
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
      </div>
    </motion.section>
  );
};

export default About;
