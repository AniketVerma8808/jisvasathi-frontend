import React from "react";
import { FaComments, FaHeart, FaUserPlus } from "react-icons/fa";

const JourneyBegins = () => {
  return (
   <section className="px-5 py-15 bg-gray-50">
    <div className=" max-w-7xl mx-auto ">
    <h2 className="text-5xl text-amber-500 text-center  font-bold max-md:text-4xl max-sm:text-3xl font-['inter']">Why Choose Vivah-Sanyog?</h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 max-md:gap-4">
      {[
        {
          icon: "🧬",
          title: "Caste-Based Matchmaking",
          desc: "Profiles sorted and searchable based on community preferences",
        },
        {
          icon: "💼",
          title: "Professional & Income Filters",
          desc: "Match with partners who align with your career and financial goals",
        },
        {
          icon: "🎓",
          title: "Education-Based Matching",
          desc: "Connect with individuals who share your academic background",
        },
        {
          icon: "🏡",
          title: "Affluency & Lifestyle Preferences",
          desc: "Find partners who complement your way of living",
        },
        {
          icon: "🔒",
          title: "Verified Profiles",
          desc: "We prioritize trust and authenticity to ensure secure connections",
        },
        {
          icon: "✨",
          title: "User-Friendly Experience",
          desc: "Clean, intuitive interface to browse profiles and start conversations easily",
        },
        {
          icon: "🌍",
          title: "Pan-India & NRI Reach",
          desc: "For users looking within India or abroad",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow p-6 py-8 max-sm:py-4 text-center"
        >
          <div className="text-4xl  max-sm:text-2xl">{item.icon}</div>
          <h3 className="text-lg md:text-xl font-semibold text-red-800 font-['poppins'] capitalize mt-5">{item.title}</h3>
          <p className="text-sm md:text-base text-gray-500">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
 
</section>

  );
};

export default JourneyBegins;
