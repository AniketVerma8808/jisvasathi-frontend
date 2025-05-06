import React, { useState } from "react";

const EditProfile = () => {
  const [bgImage, setBgImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBgImage(URL.createObjectURL(file));
    }
  };

  return (
    <>
      {/* top section */}
      <div className="w-full mt-6 bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Profile Header with dynamic background */}
        <div
          className="relative h-56 flex items-end px-6 py-4 text-white"
          style={{
            backgroundImage: bgImage
              ? `url(${bgImage})`
              : "linear-gradient(to bottom, #374151, #111827)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div>
            <h2 className="text-2xl font-semibold">aniket patel</h2>
            <p className="text-sm opacity-75">ID - URSA7293</p>
          </div>

          {/* Add Photo Button */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <label className="bg-white text-black border px-3 py-1 rounded hover:bg-gray-100 text-sm cursor-pointer">
              Add Photo
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex mt-4 px-6">
          <button className="py-2 px-4 text-red-600 border-b-2 border-red-600 font-semibold">
            About Me
          </button>
        </div>

        {/* Verification Prompt */}
        <div className="px-6 py-4">
          <div className="bg-red-50 border border-red-200 rounded p-4 flex items-center justify-between">
            <p className="text-sm">
              <span className="text-red-600 font-semibold">
                Verify your profile
              </span>{" "}
              using selfie to assure others you are genuine and get a badge
            </p>
            <span className="text-blue-500 text-xl">✔️</span>
          </div>
        </div>
      </div>
      {/* Basic Details */}
      <div className="mt-6">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Basic Details
            </h3>
            <button className="text-gray-500 hover:text-blue-500">✏️</button>
          </div>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li className="flex items-center gap-2">📏 5' 8" (1.73 mts)</li>
            <li className="flex items-center gap-2">🛕 Hindu • Patel</li>
            <li className="flex items-center gap-2">
              🗣️ Mother Tongue is Hindi-UP/UK
            </li>
            <li className="flex items-center gap-2">
              📍 Rae Bareli, Uttar Pradesh, India
            </li>
            <li className="flex items-center gap-2">💰 Rs. 20 - 25 Lakh p.a</li>
            <li className="flex items-center gap-2">🎂 14 October 1997</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
