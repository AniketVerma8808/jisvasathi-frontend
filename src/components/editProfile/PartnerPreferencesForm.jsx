import React from "react";

const PartnerPreferencesForm = ({
  formData,
  handlePartnerPreferences,
  ageOptions,
  maritalStatusOptions,
  kidsOptions,
  heightOptions,
  religionOptions,
  motherTongueOptions,
  communityOptions,
  disabilityOptions,
  stateOptions,
  metroCitiesOptions,
  countryOptions,
  incomeOptions,
  educationOptions,
  occupationOptions,
}) => {
  const preferenceFields = [
    { id: "ageFrom", label: "Age From", options: ageOptions },
    { id: "ageTo", label: "Age To", options: ageOptions },
    { id: "marriageStatus", label: "Marriage Status", options: maritalStatusOptions },
    { id: "workingStatus", label: "Working Status", options: maritalStatusOptions },
    { id: "kids", label: "Kids", options: kidsOptions },
    { id: "height", label: "Height", options: heightOptions },
    { id: "religion", label: "Religion", options: religionOptions },
    { id: "motherTongue", label: "Mother Tongue", options: motherTongueOptions },
    { id: "community", label: "Community", options: communityOptions },
    { id: "physicalDisability", label: "Physical Disability", options: disabilityOptions },
    { id: "state", label: "State", options: stateOptions },
    { id: "metroCities", label: "Metro City", options: metroCitiesOptions },
    { id: "country", label: "Country (Current Residence)", options: countryOptions },
    { id: "annualIncome", label: "Annual Income", options: incomeOptions },
    { id: "educationQualifications", label: "Educational Qualifications", options: educationOptions },
    { id: "occupation", label: "Occupation", options: occupationOptions },
  ];

  return (
    <div className="grid p-1 grid-cols-2 gap-4 h-screen overflow-y-scroll custom-scrollbar">
      {preferenceFields.map(({ id, label, options }) => (
        <div key={id}>
          <label className="block" htmlFor={id}>{label}</label>
          <select
            className="w-full bg-gray-50 mt-2 border-gray-400 rounded-full py-2 px-4"
            name={id}
            id={id}
            value={formData?.partnerPreferences?.[id] || "Any"}
            onChange={handlePartnerPreferences}
          >
            <option value="Any">Any</option>
            {options.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default PartnerPreferencesForm;
