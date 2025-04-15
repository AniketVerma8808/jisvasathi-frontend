import React, { useState } from "react";
import {
  UserIcon,
  PhoneIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import LoginDialog from "./LoginDialog";

const Form = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDialogOpen(true);
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto p-1">
        <div className="bg-gradient-to-tr from-blue-400 to-blue-600 text-white text-center py-5 rounded-t-3xl shadow-xl relative overflow-hidden">
          <h2 className="text-2xl font-bold">Create Your Matrimony Profile</h2>
          <p className="text-sm mt-1">Find your perfect match today ❤️</p>
        </div>

        <div className="bg-white rounded-b-3xl shadow-2xl px-6 py-8 space-y-6 animate-fade-in">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Profile For */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Matrimony profile for
              </label>
              <div className="relative">
                <select className="w-full appearance-none border border-gray-300 rounded-xl px-4 py-2 pr-10 focus:ring-1 focus:ring-blue-500 focus:outline-none transition">
                  <option value="">Select profile for</option>
                  <option value="self">Self</option>
                  <option value="son">Son</option>
                  <option value="daughter">Daughter</option>
                </select>
                <ChevronDownIcon className="h-5 w-5 text-gray-400 absolute right-3 top-2.5 pointer-events-none" />
              </div>
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none transition"
                />
                <UserIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number
              </label>
              <div className="flex gap-2">
                <select className="w-24 border border-gray-300 rounded-xl px-2 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none transition">
                  <option>+91</option>
                </select>
                <div className="relative w-full">
                  <input
                    type="tel"
                    placeholder="10-digit number"
                    className="w-full border border-gray-300 rounded-xl pl-10 pr-3 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none transition"
                  />
                  <PhoneIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-xl w-full text-lg shadow-md transition-all duration-300"
            >
              REGISTER FREE →
            </button>
          </form>

          {/* T&C */}
          <p className="text-xs text-center text-gray-500">
            By clicking <strong>Register Free</strong>, I agree to the{" "}
            <span className="underline hover:text-green-600 cursor-pointer">
              T&C
            </span>{" "}
            and{" "}
            <span className="underline hover:text-green-600 cursor-pointer">
              Privacy Policy
            </span>
            .
          </p>
        </div>
      </div>

      <LoginDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
};

export default Form;
