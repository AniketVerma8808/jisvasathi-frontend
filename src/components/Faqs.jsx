import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is cybersecurity, and why is it important?",
      answer:
        "Cybersecurity is the practice of protecting systems, networks, and data from digital attacks. It is important to safeguard sensitive information, prevent unauthorized access, and ensure business continuity.",
    },
    {
      question: "What services does Cybitude offer?",
      answer:
        "Cybitude offers services such as penetration testing, cloud security, vulnerability assessments, incident response, security audits, managed security services, compliance consulting, and mobile app threat intelligence.",
    },
    {
      question: "How does penetration testing help my business?",
      answer:
        "Penetration testing simulates real-world cyberattacks to identify and fix vulnerabilities before malicious actors can exploit them, strengthening your security defenses.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve various industries, including finance, healthcare, technology, education, and more. Our solutions are tailored to meet the unique needs of each client.",
    },
    {
      question: "How can I get started with Cybitude’s services?",
      answer:
        "Getting started is easy! Contact us at contact@cybitude.com to discuss your needs, and our team will guide you through the process of securing your digital assets.",
    },
  ];
  return (
    <>
      <section className="bg-gray-50 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-start mb-12">
          <h2 className="text-5xl text-amber-500  font-bold max-md:text-4xl max-sm:text-3xl font-['inter']">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className=" bg-white rounded-lg overflow-hidden py-3 shadow-sm px-4"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center px-4 py-2  text-gray-700 font-medium  transition"
                >
                  <span className="text-left text-gray-900 text-lg">{faq.question}</span>
                  <span className="text-xl cursor-pointer">
                    {activeIndex === index ? <FaChevronUp/> : <FaChevronDown/>}
                  </span>
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    activeIndex === index
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`overflow-hidden `}
                >
                  <div className="px-4  text-gray-700 font-thin text-[16px] md:font-normal">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
