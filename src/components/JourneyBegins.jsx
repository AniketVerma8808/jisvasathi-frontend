import React from "react";
import { FaComments, FaHeart, FaUserPlus } from "react-icons/fa";

const JourneyBegins = () => {
  return (
    <section className="bg-gray-50   px-5 py-15 ">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center ">
          <h2 className="text-5xl text-amber-500  font-bold max-md:text-4xl max-sm:text-3xl font-['inter']">
            Your  Journey Begins Here
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-md:text-base">
            We make it simple, meaningful, and real
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-3 max-md:grid-cols-1 max-md:gap-5 gap-10 mt-10 max-sm:gap-4">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-tr from-purple-500 to-indigo-600 text-white text-3xl md:text-4xl p-4 rounded-full shadow-md">
                <FaUserPlus />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">
              Create Profile
            </h3>
            <p className="text-sm md:text-base text-gray-500">
              Join in minutes, personalize your preferences
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-tr from-pink-500 to-red-500 text-white text-3xl md:text-4xl p-4 rounded-full shadow-md">
                <FaHeart />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">
              Discover Matches
            </h3>
            <p className="text-sm md:text-base text-gray-500">
              View real profiles that match your vibe
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-tr from-teal-500 to-blue-500 text-white text-3xl md:text-4xl p-4 rounded-full shadow-md">
                <FaComments />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">
              Start Conversations
            </h3>
            <p className="text-sm md:text-base text-gray-500">
              Message safely, build your connection
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyBegins;
