import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Form2 = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("form2Data", JSON.stringify(data));
    navigate("/register/step3");
  };

  return (
    <div className="min-h-[90vh] bg-gradient-to-br from-[#fceabb] to-[#f8b500] flex items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur-lg border border-white/60 rounded-3xl shadow-2xl p-10 w-full max-w-4xl transform transition-all duration-300 hover:scale-[1.01]">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 drop-shadow-md mb-8">
          💍 Step 2: More Information
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800"
        >
          {/* Date of Birth */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Date of Birth</label>
            <input
              type="date"
              {...register("dob", { required: "DOB is required" })}
              className="w-full bg-white border border-gray-300 p-3 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-500"
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
              className="w-full bg-white border border-gray-300 p-3 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-500"
            />
            {errors.religion && (
              <p className="text-xs text-red-500">{errors.religion.message}</p>
            )}
          </div>

          {/* Mother Tongue */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Mother Tongue</label>
            <select
              {...register("motherTongue", {
                required: "Mother Tongue is required",
              })}
              className="w-full bg-white border border-gray-300 p-3 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option value="">Select Mother Tongue</option>
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

          {/* Email ID */}
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
              className="w-full bg-white border border-gray-300 p-3 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-500"
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
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Enter your password"
              className="w-full bg-white border border-gray-300 p-3 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-500"
            />
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="col-span-full">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-rose-400 via-pink-400 to-pink-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              Next 💌
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form2;
