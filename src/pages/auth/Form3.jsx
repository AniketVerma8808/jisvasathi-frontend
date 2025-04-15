import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import LeftImageSection from "../../components/LeftImageSection";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";

const Form3 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      // Simulate delay if needed (e.g., final API call)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const form1Data = JSON.parse(localStorage.getItem("form1Data")) || {};
      const form2Data = JSON.parse(localStorage.getItem("form2Data")) || {};
      const finalData = { ...form1Data, ...form2Data, ...data };

      console.log("FINAL SUBMIT:", finalData);

      // Clear localStorage
      localStorage.removeItem("form1Data");
      localStorage.removeItem("form2Data");
      toast.success("Registration Complete!");
      navigate("/login");
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-100">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-6 items-center">
        {/* Left Image Section */}
        <div className="hidden md:block">
          <LeftImageSection />
        </div>

        {/* Right Form Section */}
        <div className="bg-white p-10 rounded-3xl shadow-xl w-full">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 drop-shadow-md mb-8">
            Step 3: Religious Information
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 text-gray-800"
          >
            {/* Caste Field */}
            <div>
              <label className="block text-sm font-medium mb-2">Caste</label>
              <select
                {...register("caste", { required: "Caste is required" })}
                className="w-full bg-white border border-gray-300 p-3 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-rose-300"
              >
                <option value="">Select your caste</option>
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
            <div>
              <label className="block text-sm font-medium mb-2">
                Subcaste (Optional)
              </label>
              <input
                type="text"
                {...register("subcaste")}
                placeholder="Enter your subcaste"
                className="w-full bg-white border border-gray-300 p-3 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-rose-300"
              />
            </div>

            {/* Gothram */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Gothram (Optional)
              </label>
              <input
                type="text"
                {...register("gothram")}
                placeholder="Enter your gothram"
                className="w-full bg-white border border-gray-300 p-3 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-rose-300"
              />
            </div>

            {/* Dosh */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Dosh (Optional)
              </label>
              <input
                type="text"
                {...register("dosh")}
                placeholder="Enter your dosh"
                className="w-full bg-white border border-gray-300 p-3 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-rose-300"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center h-11 bg-gradient-to-tr from-[#A62C2C] to-[#CF0F47] text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
              >
                {loading ? <Loader /> : "Complete Registration"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form3;
