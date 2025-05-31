"use client"

import { useState, useRef } from "react"
import { Camera, X, Save, ArrowLeft } from "lucide-react"

export default function EditProfile() {
  // State for form data
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "Sarah",
    lastName: "Johnson",
    gender: "female",
    dateOfBirth: "1992-05-15",
    height: "5'6",
    religion: "Christian",
    motherTongue: "English",
    maritalStatus: "Never Married",

    // Contact Information
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",

    // Career & Education
    education: "Master's Degree",
    educationDetails: "MBA from Columbia University",
    occupation: "Marketing Manager",
    company: "Tech Innovations Inc.",
    income: "$80,000 - $100,000",

    // About Me
    aboutMe:
      "I'm an outgoing person who loves hiking, reading, and trying new restaurants. I value honesty, communication, and having a good sense of humor in a relationship.",

    // Partner Preferences
    ageRangeMin: 28,
    ageRangeMax: 38,
    heightMin: "5'8",
    heightMax: "6'4",
    partnerReligion: "Any",
    partnerEducation: "Bachelor's or higher",
    partnerLocation: "United States",

    // Lifestyle
    diet: "Non-vegetarian",
    smoking: "Never",
    drinking: "Occasionally",
    interests: "Hiking, Reading, Cooking, Travel, Photography",
  })

  // State for profile photos
  const [photos, setPhotos] = useState([
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
    null,
    null,
    null,
    null,
  ])

  // State for active tab
  const [activeTab, setActiveTab] = useState("personal")

  // Ref for file input
  const fileInputRef = useRef(null)

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle photo upload
  const handlePhotoUpload = (index) => {
    fileInputRef.current.click()
    fileInputRef.current.onchange = (e) => {
      if (e.target.files && e.target.files[0]) {
        const reader = new FileReader()
        reader.onload = (event) => {
          const newPhotos = [...photos]
          newPhotos[index] = event.target.result
          setPhotos(newPhotos)
        }
        reader.readAsDataURL(e.target.files[0])
      }
    }
  }

  // Handle photo removal
  const handleRemovePhoto = (index) => {
    const newPhotos = [...photos]
    newPhotos[index] = null
    setPhotos(newPhotos)
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    console.log("Photos:", photos)
    alert("Profile updated successfully!")
  }

  return (
    <div className="mx-auto bg-white  shadow-sm border border-gray-200">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Edit Profile</h1>
        </div>
        <button
          onClick={handleSubmit}
          className="flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg transition-colors"
        >
          <Save size={18} />
          Save Changes
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex overflow-x-auto">
          {[
            { id: "personal", label: "Personal Info" },
            { id: "photos", label: "Photos" },
            { id: "career", label: "Career & Education" },
            { id: "about", label: "About Me" },
            { id: "preferences", label: "Partner Preferences" },
            { id: "lifestyle", label: "Lifestyle" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 cursor-pointer font-medium text-sm whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-b-2 border-rose-500 text-rose-600"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <form className="p-6">
        {/* Personal Information */}
        {activeTab === "personal" &&
          (
            <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
                  Height
                </label>
                <select
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                >
                  <option value="4&apos;10&quot;">4'10" (147 cm)</option>
                  <option value="4&apos;11&quot;">4'11" (150 cm)</option>
                  <option value="5&apos;0&quot;">5'0" (152 cm)</option>
                  <option value="5&apos;1&quot;">5'1" (155 cm)</option>
                  <option value="5&apos;2&quot;">5'2" (157 cm)</option>
                  <option value="5&apos;3&quot;">5'3" (160 cm)</option>
                  <option value="5&apos;4&quot;">5'4" (163 cm)</option>
                  <option value="5&apos;5&quot;">5'5" (165 cm)</option>
                  <option value="5&apos;6&quot;">5'6" (168 cm)</option>
                  <option value="5'7">5'7" (170 cm)</option>
                  <option value="5'8">5'8" (173 cm)</option>
                  <option value="5'9">5'9" (175 cm)</option>
                  <option value="5'10">5'10" (178 cm)</option>
                  <option value="5'11">5'11" (180 cm)</option>
                  <option value="6'0">6'0" (183 cm)</option>
                  <option value="6'1">6'1" (185 cm)</option>
                  <option value="6'2">6'2" (188 cm)</option>
                  <option value="6'3">6'3" (191 cm)</option>
                  <option value="6'4">6'4" (193 cm)</option>
                  <option value="6'5">6'5" (196 cm)</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="religion" className="block text-sm font-medium text-gray-700 mb-1">
                  Religion
                </label>
                <select
                  id="religion"
                  name="religion"
                  value={formData.religion}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                >
                  <option value="Christian">Christian</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Muslim">Muslim</option>
                  <option value="Buddhist">Buddhist</option>
                  <option value="Jewish">Jewish</option>
                  <option value="Sikh">Sikh</option>
                  <option value="Jain">Jain</option>
                  <option value="Spiritual">Spiritual</option>
                  <option value="No Religion">No Religion</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="motherTongue" className="block text-sm font-medium text-gray-700 mb-1">
                  Mother Tongue
                </label>
                <input
                  type="text"
                  id="motherTongue"
                  name="motherTongue"
                  value={formData.motherTongue}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700 mb-1">
                  Marital Status
                </label>
                <select
                  id="maritalStatus"
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                >
                  <option value="Never Married">Never Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                  <option value="Separated">Separated</option>
                </select>
              </div>
            </div>
            
            <h2 className="text-lg font-semibold text-gray-900 pt-4">Contact Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
          )}

        {/* Photos */}
        {activeTab === "photos" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Profile Photos</h2>
              <p className="text-sm text-gray-500">Upload up to 6 photos</p>
            </div>

            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {photos.map((photo, index) => (
                <div key={index} className="aspect-square border border-gray-200 rounded-lg overflow-hidden relative">
                  {photo ? (
                    <>
                      <img
                        src={photo || "/placeholder.svg"}
                        alt={`Profile photo ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemovePhoto(index)}
                        className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                      >
                        <X size={16} className="text-gray-700" />
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handlePhotoUpload(index)}
                      className="w-full h-full flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100"
                    >
                      <Camera size={32} className="text-gray-400 mb-2" />
                      <span className="text-sm text-gray-500">Add Photo</span>
                    </button>
                  )}

                  {index === 0 && photo && (
                    <div className="absolute bottom-0 left-0 right-0 bg-rose-600 text-white text-xs py-1 text-center">
                      Primary Photo
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-blue-800 mb-2">Photo Guidelines:</h3>
              <ul className="text-sm text-blue-700 space-y-1 list-disc pl-5">
                <li>Photos should clearly show your face</li>
                <li>Avoid group photos for your primary photo</li>
                <li>High-quality, well-lit photos perform better</li>
                <li>Photos should be recent (within the last year)</li>
                <li>Maximum file size: 5MB per photo</li>
              </ul>
            </div>
          </div>
        )}

        {/* Career & Education */}
        {activeTab === "career" && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">Education</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                  Highest Education
                </label>
                <select
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                >
                  <option value="High School">High School</option>
                  <option value="Associate Degree">Associate Degree</option>
                  <option value="Bachelor's Degree">Bachelor's Degree</option>
                  <option value="Master's Degree">Master's Degree</option>
                  <option value="Doctorate">Doctorate</option>
                  <option value="Professional Degree">Professional Degree</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="educationDetails" className="block text-sm font-medium text-gray-700 mb-1">
                  Education Details
                </label>
                <input
                  type="text"
                  id="educationDetails"
                  name="educationDetails"
                  value={formData.educationDetails}
                  onChange={handleChange}
                  placeholder="University name, field of study, etc."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
            </div>

            <h2 className="text-lg font-semibold text-gray-900 pt-4">Career</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-1">
                  Occupation
                </label>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="income" className="block text-sm font-medium text-gray-700 mb-1">
                  Annual Income
                </label>
                <select
                  id="income"
                  name="income"
                  value={formData.income}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                >
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
        )}

        {/* About Me */}
        {activeTab === "about" && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">About Me</h2>
            <p className="text-sm text-gray-600">
              Tell potential matches about yourself, your interests, and what you're looking for in a relationship.
            </p>

            <div>
              <label htmlFor="aboutMe" className="block text-sm font-medium text-gray-700 mb-1">
                About Me
              </label>
              <textarea
                id="aboutMe"
                name="aboutMe"
                value={formData.aboutMe}
                onChange={handleChange}
                rows={8}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                placeholder="Share details about your personality, hobbies, values, and what you're looking for in a partner..."
              ></textarea>
              <p className="mt-2 text-sm text-gray-500">Minimum 100 characters, maximum 2000 characters</p>
            </div>

            <div>
              <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1">
                Interests & Hobbies
              </label>
              <input
                type="text"
                id="interests"
                name="interests"
                value={formData.interests}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                placeholder="Separate interests with commas (e.g., Hiking, Reading, Cooking)"
              />
            </div>
          </div>
        )}

        {/* Partner Preferences */}
        {activeTab === "preferences" &&
          (
            <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">Partner Preferences</h2>
            <p className="text-sm text-gray-600">
              Specify what you're looking for in a potential partner. These preferences help us find better matches for you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Age Range
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    name="ageRangeMin"
                    value={formData.ageRangeMin}
                    onChange={handleChange}
                    min="18"
                    max="80"
                    className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  />
                  <span>to</span>
                  <input
                    type="number"
                    name="ageRangeMax"
                    value={formData.ageRangeMax}
                    onChange={handleChange}
                    min="18"
                    max="80"
                    className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Height Range
                </label>
                <div className="flex items-center gap-2">
                  <select
                    name="heightMin"
                    value={formData.heightMin}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  >
                    <option value="Any">Any</option>
                    <option value="5'0">5'0" (152 cm)</option>
                    <option value="5'2">5'2" (157 cm)</option>
                    <option value="5'4">5'4" (163 cm)</option>
                    <option value="5'6">5'6" (168 cm)</option>
                    <option value="5'8">5'8" (173 cm)</option>
                    <option value="5'10">5'10" (178 cm)</option>
                    <option value="6'0">6'0" (183 cm)</option>
                    <option value="6'2">6'2" (188 cm)</option>
                  </select>
                  <span>to</span>
                  <select
                    name="heightMax"
                    value={formData.heightMax}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  >
                    <option value="Any">Any</option>
                    <option value="5'6">5'6" (168 cm)</option>
                    <option value="5'8">5'8" (173 cm)</option>
                    <option value="5'10">5'10" (178 cm)</option>
                    <option value="6'0">6'0" (183 cm)</option>
                    <option value="6'2">6'2" (188 cm)</option>
                    <option value="6'4">6'4" (193 cm)</option>
                    <option value="6'6">6'6" (198 cm)</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="partnerReligion" className="block text-sm font-medium text-gray-700 mb-1">
                  Religion
                </label>
                <select
                  id="partnerReligion"
                  name="partnerReligion"
                  value={formData.partnerReligion}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                >
                  <option value="Any">Any</option>
                  <option value="Christian">Christian</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Muslim">Muslim</option>
                  <option value="Buddhist">Buddhist</option>
                  <option value="Jewish">Jewish</option>
                  <option value="Sikh">Sikh</option>
                  <option value="Jain">Jain</option>
                  <option value="Spiritual">Spiritual</option>
                  <option value="No Religion">No Religion</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="partnerEducation" className="block text-sm font-medium text-gray-700 mb-1">
                  Education Level
                </label>
                <select
                  id="partnerEducation"
                  name="partnerEducation"
                  value={formData.partnerEducation}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                >
                  <option value="Any">Any</option>
                  <option value="High School">High School</option>
                  <option value="Associate Degree">Associate Degree</option>
                  <option value="Bachelor's or higher">Bachelor's or higher</option>
                  <option value="Master's or higher">Master's or higher</option>
                  <option value="Doctorate">Doctorate</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="partnerLocation" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Location
                </label>
                <input
                  type="text"
                  id="partnerLocation"
                  name="partnerLocation"
                  value={formData.partnerLocation}
                  onChange={handleChange}
                  placeholder="Country, state, or city"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
          )}

        {/* Lifestyle */}
        {activeTab === "lifestyle" && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">Lifestyle</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="diet" className="block text-sm font-medium text-gray-700 mb-1">
                  Diet
                </label>
                <select
                  id="diet"
                  name="diet"
                  value={formData.diet}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                >
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Non-vegetarian">Non-vegetarian</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Eggetarian">Eggetarian</option>
                  <option value="Jain">Jain</option>
                </select>
              </div>

              <div>
                <label htmlFor="smoking" className="block text-sm font-medium text-gray-700 mb-1">
                  Smoking
                </label>
                <select
                  id="smoking"
                  name="smoking"
                  value={formData.smoking}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                >
                  <option value="Never">Never</option>
                  <option value="Occasionally">Occasionally</option>
                  <option value="Regularly">Regularly</option>
                  <option value="Trying to quit">Trying to quit</option>
                </select>
              </div>

              <div>
                <label htmlFor="drinking" className="block text-sm font-medium text-gray-700 mb-1">
                  Drinking
                </label>
                <select
                  id="drinking"
                  name="drinking"
                  value={formData.drinking}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                >
                  <option value="Never">Never</option>
                  <option value="Occasionally">Occasionally</option>
                  <option value="Regularly">Regularly</option>
                </select>
              </div>
            </div>

           
          </div>
        )}

        {/* Form Actions */}
        <div className="mt-8 flex justify-end space-x-4">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg transition-colors"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}
