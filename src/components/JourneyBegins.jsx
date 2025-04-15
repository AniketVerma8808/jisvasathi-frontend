import React from "react";
import { FaComments, FaHeart, FaUserPlus } from "react-icons/fa";

const JourneyBegins = () => {
  return (
    <section className="bg-gray-50 py-8 px-5 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-indigo-700 mb-3">
            Your Journey Begins Here
          </h2>
          <p className="text-gray-600">
            We make it simple, meaningful, and real
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all text-center">
            <div className="text-4xl text-indigo-600 mb-4">
              <FaUserPlus />
            </div>
            <h3 className="text-xl font-semibold mb-2">Create Profile</h3>
            <p className="text-gray-500">
              Join in minutes, personalize your preferences
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all text-center">
            <div className="text-4xl text-indigo-600 mb-4">
              <FaHeart/>
            </div>
            <h3 className="text-xl font-semibold mb-2">Discover Matches</h3>
            <p className="text-gray-500">
              View real profiles that match your vibe
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all text-center">
            <div className="text-4xl text-indigo-600 mb-4">
              <FaComments />
            </div>
            <h3 className="text-xl font-semibold mb-2">Start Conversations</h3>
            <p className="text-gray-500">
              Message safely, build your connection
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyBegins;
