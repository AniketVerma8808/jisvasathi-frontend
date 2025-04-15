import React from "react";
import { FaBolt, FaCrown, FaStar } from "react-icons/fa";
import image from "../assets/image1.png";
const ConciergeSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-purple-50 to-indigo-100 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <h4 className="text-indigo-700 text-lg font-semibold mb-1">
            Exclusive Offering
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Elite Match Concierge
          </h2>
          <p className="text-gray-600 mb-6">
            A dedicated relationship manager to help you find your life partner
            with priority support, personalized recommendations, and unmatched
            privacy.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-2 text-indigo-700 font-medium">
              <FaCrown /> VIP Assistance
            </div>
            <div className="flex items-center gap-2 text-indigo-700 font-medium">
              <FaBolt /> Faster Matches
            </div>
            <div className="flex items-center gap-2 text-indigo-700 font-medium">
              <FaStar /> Handpicked Profiles
            </div>
          </div>

          {/* <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-all">
            Know More
          </button> */}
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src={image} // Replace with your own concierge-style image
            alt="Elite Concierge"
            className="rounded-xl  w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ConciergeSection;
