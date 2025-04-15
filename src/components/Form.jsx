import React from "react";
import {
  UserIcon,
  PhoneIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onForm1Submit = (data) => {
    localStorage.setItem("form1Data", JSON.stringify(data));
    navigate("/register/step2");
  };

  return (
    <div className="w-full max-w-md mx-auto p-1 rounded-xl backdrop-blur-lg bg-white/5 border border-white/30 shadow-xl">
      <div className="bg-gradient-to-tr from-[#A62C2C] to-[#CF0F47] text-white text-center py-5 rounded-t-xl shadow-xl relative overflow-hidden">
        <h2 className="text-2xl font-bold text-white drop-shadow-md">
          Create Your Matrimony Profile
        </h2>
        <p className="text-sm mt-1 text-white drop-shadow-md">
          Find your perfect match today
        </p>
      </div>

      <div className="rounded-b-3xl px-6 py-8 space-y-6 animate-fade-in">
        <form onSubmit={handleSubmit(onForm1Submit)} className="space-y-5">
          {/* Profile For */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Matrimony profile for
            </label>
            <div className="relative">
              <select
                {...register("profileFor", {
                  required: "This field is required",
                })}
                className="w-full appearance-none border border-gray-300 rounded-xl px-4 py-2 pr-10 focus:ring-1 focus:ring-blue-500 focus:outline-none transition bg-white/60"
              >
                <option value="">Select profile for</option>
                <option value="self">Self</option>
                <option value="son">Son</option>
                <option value="daughter">Daughter</option>
              </select>
              <ChevronDownIcon className="h-5 w-5 text-gray-400 absolute right-3 top-2.5 pointer-events-none" />
            </div>
            {errors.profileFor && (
              <p className="text-xs text-red-300">
                {errors.profileFor.message}
              </p>
            )}
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Full Name
            </label>
            <div className="relative">
              <input
                {...register("fullName", { required: "Name is required" })}
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none transition bg-white/60"
              />
              <UserIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
            {errors.fullName && (
              <p className="text-xs text-red-300">{errors.fullName.message}</p>
            )}
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Mobile Number
            </label>
            <div className="flex gap-2">
              <select className="w-24 border border-gray-300 rounded-xl px-2 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none transition bg-white/60">
                <option>+91</option>
              </select>
              <div className="relative w-full">
                <input
                  {...register("mobile", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid mobile number",
                    },
                  })}
                  placeholder="10-digit number"
                  className="w-full border border-gray-300 rounded-xl pl-10 pr-3 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none transition bg-white/60"
                />
                <PhoneIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
              {errors.mobile && (
                <p className="text-xs text-red-300">{errors.mobile.message}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#A62C2C] hover:bg-[#CF0F47] text-white font-bold py-2 rounded-xl w-full text-lg shadow-md transition-all duration-300"
          >
            REGISTER FREE →
          </button>
        </form>

        {/* T&C */}
        <p className="text-xs text-center text-white">
          By clicking <strong>Register Free</strong>, I agree to the{" "}
          <span className="underline hover:text-green-300 cursor-pointer">
            T&C
          </span>{" "}
          and{" "}
          <span className="underline hover:text-green-300 cursor-pointer">
            Privacy Policy
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default Form;
