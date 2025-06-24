"use client"

import { useState, useRef, useEffect } from "react"
import { Camera, X, Save, ArrowLeft, ChevronDownIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { Controller } from "react-hook-form"
import { useAuth } from "../context/AuthContext"
import { editProfile } from "../services/api.service"
import { useSelector } from "react-redux"

export default function EditProfile() {
const defaultFormData = {
  fullName: "",
  email: "",
  mobile: "",
  gender: "",
  profileFor: "",
  religion: "",
  caste: "",  
  subcaste: "",
  gothram: "",
  dob: "",
  dosh: "",
  motherTongue: "",
  age: "",
  partnerPreferences: {
    motherTongue: "",
    workingStatus: "",
    occupation: "",
    educationQualifications: "",
    country: "",
  },
  // Add other fields as needed
};

const { user } = useSelector((state) => state.user);
const [formData, setFormData] = useState(defaultFormData);

useEffect(() => {
  if (user) {
    setFormData({
      ...defaultFormData,
      ...user,
      partnerPreferences: {
        ...defaultFormData.partnerPreferences,
        ...user.partnerPreferences,
      },
    });
  }
}, [user]);

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

  const handlePartnerPreferences=(e)=>{
    const {name,value}=e.target
     setFormData((prev) => ({
      ...prev,
       partnerPreferences:{
         ...prev.partnerPreferences,
      [name]: value,
    },
       
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

 const ageOptions = Array.from({ length: 46 }, (_, i) => (20 + i).toString());
  const maritalStatusOptions = ['single','Married', 'Unmarried', 'Divorced', 'Awaiting Divorce', 'Nullified marriage', 'Widow'];
  const kidsOptions = ['Yes', 'No', "Doesn't matter"];
  const heightOptions = [
    '4 feet', '4 feet - 1 inch', '4 feet - 2 inch', '4 feet - 3 inch', '4 feet - 4 inch',
    '4 feet - 5 inch', '4 feet - 6 inch', '4 feet - 7 inch', '4 feet - 8 inch', '4 feet - 9 inch',
    '4 feet - 10 inch', '4 feet - 11 inch', '5 feet', '5 feet - 1 inch', '5 feet - 2 inch',
    '5 feet - 3 inch', '5 feet - 4 inch', '5 feet - 5 inch', '5 feet - 6 inch', '5 feet - 7 inch',
    '5 feet - 8 inch', '5 feet - 9 inch', '5 feet - 10 inch', '5 feet - 11 inch', '6 feet',
    '6 feet - 1 inch', '6 feet - 2 inch', '6 feet - 3 inch', '6 feet - 4 inch', '6 feet - 5 inch',
    '6 feet - 6 inch', '6 feet - 7 inch', '6 feet - 8 inch', '6 feet - 9 inch', '6 feet - 10 inch', '6 feet - 11 inch'
  ];
  const religionOptions = ['Hindu', 'Muslim', 'Christian', 'Sikh', 'Jain', 'Parsi', 'Buddhist', 'Jewish', 'Other'];
  const motherTongueOptions = ['Hindi', 'English', 'Bengali', 'Gujarati', 'Malyalam', 'Kannada', 'Telgu', 'Punjabi', 'Haryanvi', 'Marathi', 'Sindhi', 'Urdu', 'Tamil', 'Bhojpuri', 'Rajasthani', 'Nepali', 'Other'];
  const communityOptions = ['Jat', 'Gurjar', 'Gujjar', 'Baniya', 'Pandit', 'Brahmin', 'Thakur', 'Rajput', 'Yadav', 'Kayastha', 'Chauhan', 'Choudhary', 'Jatav', 'Chhetri', 'Chaurasia', 'Kamboj', 'Kashyap', 'Himachali', 'Garwhali-Kumaon', 'Garwhali', 'Punjabi', 'Ahir', 'Tyagi', 'Chamar', 'Dhobi', 'Khatri', 'Kshatriya', 'Kushwaha', 'Lingayat', 'Kumhar', 'Vaishnav', 'Halwai', 'Varshney', 'Aryasamaj'];
  const disabilityOptions = ['Yes', 'No', "Doesn't Matter", 'Other'];
  const stateOptions = ['Delhi- NCR', 'Haryana', 'Uttar Pradesh', 'Uttarakhand', 'Himachal Pradesh', 'Punjab', 'Rajasthan', 'Madhya-Pradesh', 'Odisha', 'Tamil Nadu', 'Karnataka', 'Kerela', 'Andhra-Pradesh', 'Telangana', 'Jammu & Kashmir', 'Maharashtra', 'Lakshadweep', 'Jharkhand', 'Assam', 'Goa', 'Bihar', 'Arunachal Pradesh', 'Gujarat', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Sikkim', 'Tripura', 'West Bengal'];
  const metroCitiesOptions = ['Noida', 'Gurgaon', 'Ghaiziabad', 'Faridabad', 'Greater Noida', 'Meerut', 'Ahmedabad', 'Hyderabad', 'Jaipur', 'Jodhpur', 'Mumbai', 'Pune', 'Nagpur', 'Aurangabad', 'Nasik', 'Goa', 'Bangalore', 'Chennai', 'Coimbatore', 'Chandigarh', 'Mohali', 'Panchkula', 'Shimla', 'Manali', 'Dehradun', 'Mussorie', 'Kolkata', 'Srinagar', 'Indore', 'Bhopal', 'Lucknow', 'Baroda', 'Vadodra', 'Surat', 'Jamnagar', 'Jammu', 'Udhampur', 'Kota', 'Udaipur', 'Neemrana', 'Bhiwadi', 'Alwar', 'Bikaner', 'Jalandhar', 'Ludhiana', 'Amritsar', 'Mysore', 'Bhuwaneshwar', 'Nainital', 'Hamirpur- HP', 'Mandi-HP', 'Bilaspur- HP', 'Dharamshala-HP', 'Bhuntar-HP', 'Kullu', 'Agra', 'Mathura', 'Aligarh', 'Palwal', 'Ayodhya', 'Bareily', 'Shamli', 'Saharanpur', 'Bijnor', 'Moradabad', 'Rohtak', 'Karnal', 'Hisar', 'Ambala', 'Panipat', 'Sonepat', 'Sirsa'];
  const countryOptions = ['India', 'USA', 'UK', 'Canada', 'Dubai', 'New Zealand', 'Australia', 'Germany', 'France', 'Saudi Arabia', 'Qatar', 'Abu Dhabi', 'Ireland', 'Singapore', 'Mauritius', 'Sri Lanka', 'Bangladesh', 'Bhutan', 'Russia', 'China', 'Denmark', 'Poland', 'Latvia', 'Sweden', 'Italy', 'Spain', 'Norway', 'Belgium', 'Turkey', 'Ukraine', 'South Korea', 'UAE', 'Afghanistan', 'Finland', 'Greece', 'Iceland', 'Hongkong', 'Hungary', 'Iran', 'Indonesia', 'Israel', 'Japan', 'Jordan', 'Luxembourg', 'Maldives', 'Malaysia', 'Mexico', 'Monaco', 'Netherland', 'Nigeria', 'Nepal', 'Philippines', 'South Africa', 'Switzerland', 'Thailand', 'Other'];
  const incomeOptions = ['Rs 1 Lacs to Rs 5 Lacs', 'Rs 5 Lacs to Rs 10 Lacs', 'Rs 10 Lacs to Rs 15 Lacs', 'Rs 15 Lacs to Rs 20 Lacs', 'Rs 20 Lacs to Rs 30 Lacs', 'Rs 30 Lacs to Rs 50 Lacs', 'Rs 50 Lacs to Rs 1 Crore', 'Rs 1 Crore to Rs 10 Crore', 'Rs 10 Crore + ( Own Business )'];
  const educationOptions = ['School Passout', 'College Passout', 'Professional Degree', 'Bachelors Degree', 'Masters Degree', 'Certification', 'Diploma', 'PHD'];
  const occupationOptions = ['Private Service', 'Govt Service', 'Public Sector / PSU', 'Military/ Defence', 'Self Employed', 'Own Business', 'Doctor', 'Engineer', 'CA', 'Advocate', 'Consultant', 'Contractor'];
  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault()
    const res= await editProfile(formData)
    console.log(res)
    // Here you would typically send the data to your backend

  }
const Dropdown = ({ field, label, options, universalOpen, setuniversalOpen, name }) => {
  const isOpen = universalOpen === label;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown-container')) {
        setuniversalOpen(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [setuniversalOpen]);

  const handleDropdownClick = (e) => {
    e.stopPropagation();
    setuniversalOpen(label);
  };

  const handleOptionSelect = (option) => {
    setuniversalOpen(null);
    setFormData((prev) => ({
      ...prev,
      [name]: option,
    }));
  };

  const formatDateToMMDDYYYY = (dateStr) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${mm}/${dd}/${yyyy}`;
};
  return (
    <div className="dropdown-container shadow relative rounded-xl bg-gray-50 cursor-pointer font-['poppins']">
      <div
        onClick={handleDropdownClick}
        className="py-3 px-4 relative"
      >
        {!formData[name] ? (
          <span className="text-gray-700">{label}</span>
        ) : (
          formData[name]
        )}
        <ChevronDownIcon className="h-5 w-5 text-gray-400 absolute right-3 top-4 pointer-events-none" />
      </div>
      {isOpen && (
        <ul className="absolute right-0 top-full max-h-40 overflow-y-scroll custom-scrollbar bg-amber-50 shadow-sm w-1/2 z-20 rounded-sm overflow-hidden">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-1 hover:bg-amber-100 cursor-pointer border-gray-200"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

  return (
    <div className="mx-auto bg-white  shadow-sm border border-gray-200">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to={'/profile'} className="p-2 rounded-full hover:bg-gray-100">
            <ArrowLeft size={20} />
          </Link>
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
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData?.fullName}
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
                  value={formData?.gender}
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
                  name="dob"
                  value={formData?.dob ? 
                   new Date(formData.dob).toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }) : ''
                  }
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
                  value={formData?.height}
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
                  value={formData?.religion}
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
                  value={formData?.motherTongue}
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
                  value={formData?.maritalStatus}
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
                  value={formData?.email}
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
                  value={formData?.phone}
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
                  value={formData?.location}
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
                  value={formData?.education}
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
                  value={formData?.educationDetails}
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
                  value={formData?.occupation}
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
                  value={formData?.company}
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
                  value={formData?.income}
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
                value={formData?.aboutMe}
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
                value={formData?.interests}
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
             <div className=" grid p-1 grid-cols-2 gap-4 h-screen custom-scrollbar overflow-y-scroll">
             <div className="w-full">
  <label className=" block "htmlFor="ageFrom" >Age From</label>
  <select className="w-full bg-gray-50  mt-2 border-gray-400 rounded-full py-2 px-4"name="ageFrom" id="ageFrom" onChange={handlePartnerPreferences}  value={formData?.partnerPreferences?.ageFrom || 'Any'}>
    <option value="Any">Any</option>
    {ageOptions.map(option => <option key={option} value={option}>{option}</option>)}
  </select>
</div>

<div>
  <label className=" block "htmlFor="ageTo">Age To</label>
  <select className="w-full bg-gray-50  mt-2 border-gray-400 rounded-full py-2 px-4"name="ageTo" id="ageTo" onChange={handlePartnerPreferences} value={formData?.partnerPreferences?.ageTo || 'Any'}>
    <option value="Any">Any</option>
    {ageOptions.map(option => <option key={option} value={option}>{option}</option>)}
  </select>
</div>

<div>
  <label className=" block "htmlFor="marriageStatus">Marriage Status</label>
  <select className="w-full bg-gray-50  mt-2 border-gray-400 rounded-full py-2 px-4"name="marriageStatus" id="marriageStatus" onChange={handlePartnerPreferences} value={formData?.partnerPreferences?.marriageStatus || 'Any'}>
    <option value="Any">Any</option>
    {maritalStatusOptions.map(option => <option key={option} value={option}>{option}</option>)}
  </select>
</div>
<div>
  <label className=" block "htmlFor="workingStatus">Working Status</label>
  <select className="w-full bg-gray-50  mt-2 border-gray-400 rounded-full py-2 px-4"name="workingStatus" id="workingStatus" onChange={handlePartnerPreferences} value={formData?.partnerPreferences?.workingStatus || 'Any'}>
    <option value="Any">Any</option>
    {maritalStatusOptions.map(option => <option key={option} value={option}>{option}</option>)}
  </select>
</div>

<div>
  <label className=" block "htmlFor="kids">Kids</label>
  <select className="w-full bg-gray-50  mt-2 border-gray-400 rounded-full py-2 px-4"name="kids" id="kids" onChange={handlePartnerPreferences} value={formData?.partnerPreferences?.kids || 'Any'}>
    <option value="Any">Any</option>
    {kidsOptions.map(option => <option key={option} value={option}>{option}</option>)}
  </select>
</div>

<div>
  <label className=" block "htmlFor="height">Height</label>
  <select className="w-full bg-gray-50  mt-2 border-gray-400 rounded-full py-2 px-4"name="height" id="height" onChange={handlePartnerPreferences} value={formData?.partnerPreferences?.height || 'Any'}>
    <option value="Any">Any</option>
    {heightOptions.map(option => <option key={option} value={option}>{option}</option>)}
  </select>
</div>

<div>
  <label className=" block "htmlFor="religion">Religion</label>
  <select className="w-full bg-gray-50  mt-2 border-gray-400 rounded-full py-2 px-4"name="religion" id="religion" onChange={handlePartnerPreferences} value={formData?.partnerPreferences?.religion || 'Any'}>
    <option value="Any">Any</option>
    {religionOptions.map(option => <option key={option} value={option}>{option}</option>)}
  </select>
</div>

<div>
  <label className=" block "htmlFor="motherTongue">Mother Tongue</label>
  <select className="w-full bg-gray-50  mt-2 border-gray-400 rounded-full py-2 px-4"name="motherTongue" id="motherTongue" onChange={handlePartnerPreferences} value={formData?.partnerPreferences?.motherTongue || 'Any'}>
    <option value="Any">Any</option>
    {motherTongueOptions.map(option => <option key={option} value={option}>{option}</option>)}
  </select>
</div>

<div>
  <label className=" block "htmlFor="community">Community</label>
  <select className="w-full bg-gray-50  mt-2 border-gray-400 rounded-full py-2 px-4"name="community" id="community" onChange={handlePartnerPreferences} value={formData?.partnerPreferences?.community || 'Any'}>
    <option value="Any">Any</option>
    {communityOptions.map(option => <option key={option} value={option}>{option}</option>)}
  </select>
</div>

<div>
  <label className=" block "htmlFor="physicalDisability">Physical Disability</label>
  <select className="w-full bg-gray-50  mt-2 border-gray-400 rounded-full py-2 px-4"name="physicalDisability" id="physicalDisability" onChange={handlePartnerPreferences} value={formData?.partnerPreferences?.physicalDisability || 'Any'}>
    <option value="Any">Any</option>
    {disabilityOptions.map(option => <option key={option} value={option}>{option}</option>)}
  </select>
</div>

<div>
  <label className=" block "htmlFor="state">State</label>
  <select className="w-full bg-gray-50  mt-2 border-gray-400 rounded-full py-2 px-4"name="state" id="state" onChange={handlePartnerPreferences} value={formData?.partnerPreferences?.state || 'Any'}>
    <option value="Any">Any</option>
    {stateOptions.map(option => <option key={option} value={option}>{option}</option>)}
  </select>
</div>

<div>
  <label className=" block "htmlFor="metroCities">Metro City</label>
  <select className="w-full bg-gray-50  mt-2 border-gray-400 rounded-full py-2 px-4"name="metroCities" id="metroCities" onChange={handlePartnerPreferences} value={formData?.partnerPreferences?.metroCities || 'Any'}>
    <option value="Any">Any</option>
    {metroCitiesOptions.map(option => <option key={option} value={option}>{option}</option>)}
  </select>
</div>

<div>
  <label className=" block "htmlFor="country">Country (Current Residence)</label>
  <select className="w-full bg-gray-50  mt-2 border-gray-400 rounded-full py-2 px-4"name="country" id="country" onChange={handlePartnerPreferences} value={formData?.partnerPreferences?.country || 'Any'}>
    <option value="Any">Any</option>
    {countryOptions.map(option => <option key={option} value={option}>{option}</option>)}
  </select>
</div>

<div>
  <label className=" block "htmlFor="annualIncome">Annual Income</label>
  <select className="w-full bg-gray-50  mt-2 border-gray-400 rounded-full py-2 px-4"name="annualIncome" id="annualIncome" onChange={handlePartnerPreferences} value={formData?.partnerPreferences?.annualIncome || 'Any'}>
    <option value="Any">Any</option>
    {incomeOptions.map(option => <option key={option} value={option}>{option}</option>)}
  </select>
</div>

<div>
  <label className=" block "htmlFor="educationQualifications">Educational Qualifications</label>
  <select className="w-full bg-gray-50  mt-2 border-gray-400 rounded-full py-2 px-4"name="educationQualifications" id="educationQualifications" onChange={handlePartnerPreferences} value={formData?.partnerPreferences?.educationQualifications || 'Any'}>
    <option value="Any">Any</option>
    {educationOptions.map(option => <option key={option} value={option}>{option}</option>)}
  </select>
</div>

<div>
  <label className=" block "htmlFor="occupation">Occupation</label>
  <select className="w-full bg-gray-50  mt-2 border-gray-400 rounded-full py-2 px-4"name="occupation" id="occupation" onChange={handlePartnerPreferences} value={formData?.partnerPreferences?.occupation || 'Any'}>
    <option value="Any">Any</option>
    {occupationOptions.map(option => <option key={option} value={option}>{option}</option>)}
  </select>
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
                  value={formData?.diet}
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
                  value={formData?.smoking}
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
                  value={formData?.drinking}
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
