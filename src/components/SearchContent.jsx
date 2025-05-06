"use client";

import { Search, Filter, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { useState } from "react";

export default function SearchContent() {
  const [searchParams, setSearchParams] = useState({
    ageMin: 25,
    ageMax: 40,
    distance: 50,
    hasPhoto: true,
    onlineNow: false,
    education: "",
    occupation: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSearchParams((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="space-y-6 bg-white  px-8 py-4 rounded-lg shadow-sm max-lg:w-full max-lg:mt-18 max-lg:pb-22">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Find Your Match</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Search Filters */}
        <div className="lg:col-span-1 bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <Filter size={18} className="mr-2" />
            Search Filters
          </h2>

          <div className="space-y-5">
            {/* Search input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search by name, interests..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
              <Search
                size={18}
                className="absolute left-3 top-2.5 text-gray-400"
              />
            </div>

            {/* Age Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Age Range
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  name="ageMin"
                  value={searchParams.ageMin}
                  onChange={handleChange}
                  min="18"
                  max="80"
                  className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
                <span>to</span>
                <input
                  type="number"
                  name="ageMax"
                  value={searchParams.ageMax}
                  onChange={handleChange}
                  min="18"
                  max="80"
                  className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Distance */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Distance (miles): {searchParams.distance}
              </label>
              <input
                type="range"
                name="distance"
                value={searchParams.distance}
                onChange={handleChange}
                min="5"
                max="100"
                step="5"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
              <div className="flex justify-between text-xs  text-gray-500 mt-1">
                <span>5</span>
                <span>50</span>
                <span>100</span>
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="location"
                  value={searchParams.location}
                  onChange={handleChange}
                  placeholder="Enter city or zip code"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
                <MapPin
                  size={18}
                  className="absolute left-3 top-2.5 text-gray-400"
                />
              </div>
            </div>

            {/* Occupation */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Occupation
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="occupation"
                  value={searchParams.occupation}
                  onChange={handleChange}
                  placeholder="Enter occupation"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
                <Briefcase
                  size={18}
                  className="absolute left-3 top-2.5 text-gray-400"
                />
              </div>
            </div>

            {/* Education */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Education
              </label>
              <div className="relative">
                <select
                  name="education"
                  value={searchParams.education}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent appearance-none"
                >
                  <option value="">Any Education Level</option>
                  <option value="high-school">High School</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                  <option value="phd">PhD / Doctorate</option>
                </select>
                <GraduationCap
                  size={18}
                  className="absolute left-3 top-2.5 text-gray-400"
                />
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="hasPhoto"
                  name="hasPhoto"
                  checked={searchParams.hasPhoto}
                  onChange={handleChange}
                  className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="hasPhoto"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Has photo
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="onlineNow"
                  name="onlineNow"
                  checked={searchParams.onlineNow}
                  onChange={handleChange}
                  className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="onlineNow"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Online now
                </label>
              </div>
            </div>

            <button className="w-full py-2 px-4 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg transition-colors">
              Apply Filters
            </button>
          </div>
        </div>

        {/* Search Results */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Search Results</h2>
            <select className="px-3 py-1 border border-gray-300 rounded-md text-sm">
              <option>Newest First</option>
              <option>Most Compatible</option>
              <option>Recently Active</option>
            </select>
          </div>

          <div className="space-y-4">
            {/* Placeholder for search results */}
            <div className="text-center py-10 text-gray-500">
              <Search size={48} className="mx-auto mb-4 text-gray-300" />
              <p className="text-lg font-medium">
                Use the filters to find your perfect match
              </p>
              <p className="text-sm">
                Adjust your search criteria to see potential matches
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
