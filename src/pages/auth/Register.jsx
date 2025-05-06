import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import imageLeft from "../../assets/test4.png";
import LeftImageSection from "../../components/LeftImageSection";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { authData } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await new Promise((res) => setTimeout(res, 1500));

      console.log("FINAL SUBMIT:", { ...authData, ...data });

      // Submit API call here (if needed)

      toast.success("Registration Complete!");
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-100">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-start">
        {/* Left Image */}
        <div className="hidden md:block">
          <LeftImageSection images={[imageLeft, imageLeft, imageLeft]} />
        </div>

        {/* Right Form */}
        <div className="bg-white p-10 rounded-3xl shadow-2xl w-full">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
            💍 Create Your Matrimony Profile
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800"
          >
            {/* DOB */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">Date of Birth</label>
              <input
                type="date"
                {...register("dob", { required: "DOB is required" })}
                className="w-full border p-3 rounded-xl shadow-inner"
              />
              {errors.dob && (
                <p className="text-xs text-red-500">{errors.dob.message}</p>
              )}
            </div>

            {/* Religion */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">Religion</label>
              <input
                type="text"
                {...register("religion", { required: "Religion is required" })}
                placeholder="Enter your religion"
                className="w-full border p-3 rounded-xl shadow-inner"
              />
              {errors.religion && (
                <p className="text-xs text-red-500">
                  {errors.religion.message}
                </p>
              )}
            </div>

            {/* Mother Tongue */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">Mother Tongue</label>
              <select
                {...register("motherTongue", {
                  required: "Mother Tongue is required",
                })}
                className="w-full border p-3 rounded-xl shadow-inner"
              >
                <option value="">Select</option>
                <option value="hindi">Hindi</option>
                <option value="english">English</option>
                <option value="tamil">Tamil</option>
                <option value="telugu">Telugu</option>
                <option value="kannada">Kannada</option>
              </select>
              {errors.motherTongue && (
                <p className="text-xs text-red-500">
                  {errors.motherTongue.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">Email ID</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Enter your email"
                className="w-full border p-3 rounded-xl shadow-inner"
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "At least 6 characters" },
                })}
                placeholder="Enter your password"
                className="w-full border p-3 rounded-xl shadow-inner"
              />
              {errors.password && (
                <p className="text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Caste */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">Caste</label>
              <select
                {...register("caste", { required: "Caste is required" })}
                className="w-full border p-3 rounded-xl shadow-inner"
              >
                <option value="">Select</option>
                <option value="general">General</option>
                <option value="obc">OBC</option>
                <option value="sc">SC</option>
                <option value="st">ST</option>
                <option value="others">Others</option>
              </select>
              {errors.caste && (
                <p className="text-xs text-red-500">{errors.caste.message}</p>
              )}
            </div>

            {/* Subcaste */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Subcaste (Optional)
              </label>
              <input
                type="text"
                {...register("subcaste")}
                placeholder="Enter your subcaste"
                className="w-full border p-3 rounded-xl shadow-inner"
              />
            </div>

            {/* Gothram */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Gothram (Optional)
              </label>
              <input
                type="text"
                {...register("gothram")}
                placeholder="Enter your gothram"
                className="w-full border p-3 rounded-xl shadow-inner"
              />
            </div>

            {/* Dosh */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Dosh (Optional)
              </label>
              <input
                type="text"
                {...register("dosh")}
                placeholder="Enter your dosh"
                className="w-full border p-3 rounded-xl shadow-inner"
              />
            </div>

            {/* Submit */}
            <div className="col-span-full">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-tr flex items-center justify-center h-11 from-[#A62C2C] to-[#CF0F47] text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
              >
                {loading ? <Loader /> : "Complete Registration 💌"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
