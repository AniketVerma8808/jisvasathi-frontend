import React from "react";

const CareerEducationForm = ({ formData, handleChange }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-900">Education</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="education"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Highest Education
          </label>
          <select
            id="education"
            name="highestQualification"
            value={formData?.education?.highestQualification || ""}
            onChange={(e) => handleChange(e, "education")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          >
            <option value="" disabled>
              Select Education
            </option>
            <option value="High School">High School</option>
            <option value="Associate Degree">Associate Degree</option>
            <option value="Bachelor's Degree">Bachelor's Degree</option>
            <option value="Master's Degree">Master's Degree</option>
            <option value="Doctorate">Doctorate</option>
            <option value="Professional Degree">Professional Degree</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="educationDetails"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Education Details
          </label>
          <input
            type="text"
            id="educationDetails"
            name="educationDetails"
            value={formData?.education?.educationDetails || ""}
            onChange={(e) => handleChange(e, "education")}
            placeholder="University name, field of study, etc."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          />
        </div>
      </div>

      <h2 className="text-lg font-semibold text-gray-900 pt-4">Career</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="occupation"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Occupation
          </label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            value={formData?.career?.occupation || ""}
            onChange={(e) => handleChange(e, "career")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Company/Organization
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData?.career?.company || ""}
            onChange={(e) => handleChange(e, "career")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="employmentType"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Employment Type
          </label>
          <select
            id="employmentType"
            name="employmentType"
            value={formData?.career?.employmentType || ""}
            onChange={(e) => handleChange(e, "career")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          >
            <option value="" disabled>
              Select Employment Type
            </option>
            <option value="Private">Private</option>
            <option value="Government">Government</option>
            <option value="Business">Business</option>
            <option value="Self Employed">Self Employed</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="income"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Annual Income
          </label>
          <select
            id="income"
            name="annualIncome"
            value={formData?.career?.annualIncome || ""}
            onChange={(e) => handleChange(e, "career")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          >
            <option value="">Select Annual Income</option>
            <option value="Prefer not to say">Prefer not to say</option>
            <option value="Under $30,000">Under $30,000</option>
            <option value="$30,000 - $50,000">$30,000 - $50,000</option>
            <option value="$50,000 - $80,000">$50,000 - $80,000</option>
            <option value="$80,000 - $100,000">$80,000 - $100,000</option>
            <option value="$100,000 - $150,000">$100,000 - $150,000</option>
            <option value="$150,000 - $200,000">$150,000 - $200,000</option>
            <option value="$200,000+">$200,000+</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CareerEducationForm;
