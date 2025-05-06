import React from "react";
import {
  UserIcon,
  PhoneIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";


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
    <div className=" max-w-md mx-auto p-1 rounded-4xl overflow-hidden bg-white pb-8  shadow-sm ">
      <div className="bg-gradient-to-b bg-primary  font-['inter'] text-white text-center py-5 rounded-t-4xl shadow-md  relative overflow-hidden">
        <h2 className="text-2xl font-bold text-white max-sm:text-xl">
          Create Your Matrimony Profile
        </h2>
        <p className="text-sm max-sm:text-xs mt-1 text-white drop-shadow-md font-['montserrat']">
          Find your perfect match today
        </p>
      </div>
{/* main form */}
      <div className="rounded-b-3xl px-6  animate-fade-in mt-8 font-['poppins']">
        <form onSubmit={handleSubmit(onForm1Submit)} className="">
          {/* Profile For */}
          <div>
           
            <div className="relative">
              <select
                {...register("profileFor", {
                  required: "This field is required",
                })}
                className="w-full text-gray-700 cursor-pointer appearance-none shadow-sm  shadow-gray-300 border-gray-300 rounded-xl px-4 py-3  focus:ring-1 focus:ring-amber-500 focus:outline-none transition bg-white/60 max-sm:text-sm"
              >
                <option value="">Select profile for</option>
                <option value="self">Self</option>
                <option value="son">Son</option>
                <option value="daughter">Daughter</option>
              </select>
              <ChevronDownIcon className="h-5 w-5 text-gray-400 absolute right-3 top-4 pointer-events-none" />
            </div>
            {errors.profileFor && (
              <p className="text-xs text-red-300">
                {errors.profileFor.message}
              </p>
            )}
          </div>

          {/* Full Name */}
          <div className="mt-4">
            <label htmlFor="fullName"  className="block text-sm font ml-1 font-medium text-gray-500">
              Full Name:
            </label>
            <div className="relative">
              <input
                {...register("fullName", { required: "Name is required" })}
                placeholder="e.g. Ayush Singh"
                className="w-full shadow-sm   shadow-gray-300 placeholder:text-gray-500 text-gray-700 rounded-xl pl-10 py-3  mt-2 focus:ring-1 focus:ring-amber-500 focus:outline-none transition bg-white/60 max-sm:text-sm"
                id="fullName"
              />
              <UserIcon className="h-5 w-5 text-gray-400 absolute left-3 top-6 " />
            </div>
            {errors.fullName && (
              <p className="text-xs text-red-300">{errors.fullName.message}</p>
            )}
          </div>

          {/* Mobile Number */}
          <div className="mt-4">
            <label htmlFor="mobile" className="block text-sm font ml-1 font-medium text-gray-500">
              Mobile Number:
            </label>
            <div className="flex gap-2 items-center  mt-2">
              <select className="w-24 shadow-sm  shadow-gray-300 rounded-xl text-gray-500 px-2 py-3  focus:ring-1 focus:ring-amber-500 focus:outline-none transition bg-white/60 max-sm:text-sm" id="mobile">
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
                  type="number"
                  placeholder="10-digit number"
                  className="w-full appearance-none shadow-sm  shadow-gray-300 max-sm:text-sm rounded-xl pl-10 pr-3 py-3 focus:ring-1 focus:ring-amber-500 focus:outline-none transition bg-white/60"
                />
                <PhoneIcon className="h-5 w-5 text-gray-400 absolute left-3 top-4" />
              </div>
              {errors.mobile && (
                <p className="text-xs text-red-300">{errors.mobile.message}</p>
              )}
            </div>
          </div>
 {/* T&C */}
 <p className="text-xs text-center mt-4">
          By clicking <strong className="text-primary">Register Free</strong>, I agree to the{" "}
          <span className="underline hover:text-green-300 cursor-pointer">
            T&C
          </span>{" "}
          and{" "}
          <span className="underline hover:text-green-300 cursor-pointer">
            Privacy Policy
          </span>
          .
        </p>
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gradient-to-b group flex items-center justify-center gap-2 bg-primary cursor-pointer  mt-4 text-white font-bold py-2.5 rounded-xl w-full text-lg  transition-all duration-300 shadow-md hover:shadow-md hover:shadow-red-200 max-sm:text-base"
          >
<span>REGISTER FREE </span>
<span className="group-hover:translate-x-1/2 transition text-2xl max-sm:text-xl"><FaLongArrowAltRight/></span>
          </button>
        </form>

       
      </div>
    </div>
  );
};

export default Form;
