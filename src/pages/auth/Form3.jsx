import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Form3 = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const form1Data = JSON.parse(localStorage.getItem("form1Data")) || {};
    const form2Data = JSON.parse(localStorage.getItem("form2Data")) || {};
    const finalData = { ...form1Data, ...form2Data, ...data };
    console.log("FINAL SUBMIT:", finalData);

    localStorage.removeItem("form1Data");
    localStorage.removeItem("form2Data");
    alert("Registration Complete!");
    navigate("/");
  };

  return (
    <div className="min-h-[90vh] bg-gradient-to-tr from-[#0f2027] via-[#203a43] to-[#2c5364] flex items-center justify-center p-4">
      <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl shadow-2xl p-10 w-full max-w-4xl transform transition-all duration-300 hover:scale-[1.01]">
        <h2 className="text-3xl font-extrabold text-center text-white drop-shadow-md mb-8">
          Step 3: Religious Information
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 text-white"
        >
          {/* Caste Field (Dropdown) */}
          <div>
            <label className="block text-sm font-medium">Caste</label>
            <select
              {...register("caste", { required: "Caste is required" })}
              className="w-full bg-white/10 border border-white/30 p-3 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              <option value="">Select your caste</option>
              <option value="general">General</option>
              <option value="obc">OBC</option>
              <option value="sc">SC</option>
              <option value="st">ST</option>
              <option value="others">Others</option>
            </select>
            {errors.caste && (
              <p className="text-xs text-red-300">{errors.caste.message}</p>
            )}
          </div>

          {/* Subcaste (Optional) */}
          <div>
            <label className="block text-sm font-medium">
              Subcaste (Optional)
            </label>
            <input
              type="text"
              {...register("subcaste")}
              placeholder="Enter your subcaste (optional)"
              className="w-full bg-white/10 border border-white/30 p-3 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          {/* Gothram (Optional) */}
          <div>
            <label className="block text-sm font-medium">
              Gothram (Optional)
            </label>
            <input
              type="text"
              {...register("gothram")}
              placeholder="Enter your gothram (optional)"
              className="w-full bg-white/10 border border-white/30 p-3 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          {/* Dosh (Optional) */}
          <div>
            <label className="block text-sm font-medium">Dosh (Optional)</label>
            <input
              type="text"
              {...register("dosh")}
              placeholder="Enter your dosh (optional)"
              className="w-full bg-white/10 border border-white/30 p-3 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              Complete Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form3;
