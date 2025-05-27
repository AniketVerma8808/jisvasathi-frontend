import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import imageLeft from "../../assets/test4.png";
import LeftImageSection from "../../components/LeftImageSection";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { UserRegisterService } from "../../services/api.service";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { authData, updateAuthData } = useAuth();
  console.log(authData)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const finalData = {
        ...authData.user,
        ...data,
      };
      const response = await UserRegisterService(finalData);
      console.log(response);
      updateAuthData(finalData);
      toast.success(response.data.message);
      navigate("/verifyemail");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-white ">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-start">
        {/* Left Image */}
        <div className="hidden md:block">
          <LeftImageSection images={[imageLeft, imageLeft, imageLeft]} />
        </div>

        {/* Right Form */}
        <div className="bg-white p-10 rounded-3xl shadow-2xl w-full">
          <h2 className="text-3xl font-extrabold text-center text-amber-500 mb-6">
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
                className="w-full shadow-sm   shadow-gray-300 placeholder:text-gray-500 text-gray-700 rounded-xl pl-10 py-3  mt-2 focus:ring-1 focus:ring-amber-500 focus:outline-none transition bg-white/60 max-sm:text-sm"
                
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
                className="w-full shadow-sm   shadow-gray-300 placeholder:text-gray-500 text-gray-700 rounded-xl pl-10 py-3  mt-2 focus:ring-1 focus:ring-amber-500 focus:outline-none transition bg-white/60 max-sm:text-sm"
                
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
                className="w-full shadow-sm   shadow-gray-300 placeholder:text-gray-500 text-gray-700 rounded-xl pl-10 py-3  mt-2 focus:ring-1 focus:ring-amber-500 focus:outline-none transition bg-white/60 max-sm:text-sm"
                
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
            <div className="space-y-2">
              <label className="block text-sm font-medium">Gender</label>
              <select
                {...register("gender", {
                  required: "Gender is required",
                })}
                className="w-full shadow-sm shadow-gray-300 placeholder:text-gray-500 text-gray-700 rounded-xl pl-10 py-3 mt-2 focus:ring-1 focus:ring-amber-500 focus:outline-none transition bg-white/60 max-sm:text-sm"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-xs text-red-500">{errors.gender.message}</p>
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
                className="w-full shadow-sm   shadow-gray-300 placeholder:text-gray-500 text-gray-700 rounded-xl pl-10 py-3  mt-2 focus:ring-1 focus:ring-amber-500 focus:outline-none transition bg-white/60 max-sm:text-sm"
                
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
                className="w-full shadow-sm   shadow-gray-300 placeholder:text-gray-500 text-gray-700 rounded-xl pl-10 py-3  mt-2 focus:ring-1 focus:ring-amber-500 focus:outline-none transition bg-white/60 max-sm:text-sm"
                
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
                className="w-full shadow-sm   shadow-gray-300 placeholder:text-gray-500 text-gray-700 rounded-xl pl-10 py-3  mt-2 focus:ring-1 focus:ring-amber-500 focus:outline-none transition bg-white/60 max-sm:text-sm"
                
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
                className="w-full shadow-sm   shadow-gray-300 placeholder:text-gray-500 text-gray-700 rounded-xl pl-10 py-3  mt-2 focus:ring-1 focus:ring-amber-500 focus:outline-none transition bg-white/60 max-sm:text-sm"
                
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
                className="w-full shadow-sm   shadow-gray-300 placeholder:text-gray-500 text-gray-700 rounded-xl pl-10 py-3  mt-2 focus:ring-1 focus:ring-amber-500 focus:outline-none transition bg-white/60 max-sm:text-sm"
                
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
                className="w-full shadow-sm   shadow-gray-300 placeholder:text-gray-500 text-gray-700 rounded-xl pl-10 py-3  mt-2 focus:ring-1 focus:ring-amber-500 focus:outline-none transition bg-white/60 max-sm:text-sm"
                
              />
            </div>

            {/* Submit */}
            <div className="col-span-full">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary cursor-pointer flex items-center justify-center h-11  text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
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
