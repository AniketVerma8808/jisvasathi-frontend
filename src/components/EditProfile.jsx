import { useState, useRef } from "react";
import { Camera, Save, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function EditProfile() {
  // State for form data
  const [formData, setFormData] = useState({
    //profile information

    joinedAt: "12/03/23",
    profileStatus: "active",
    // Personal Information
    firstName: "Sarah",
    lastName: "Johnson",
    gender: "female",
    age: 28,
    height: "5'6\" (167cm)",
    religion: "Christian",
    maritalStatus: "Never Married",
    location: "New York, NY",
    motherTongue: "Hindi",
    bloodGroup: "B+",
    weight: "60kg",
    DOB: "5/10/2001",

    // Career & Education
    highestEducation: "Master's Degree",
    educationDetails: "BCA",
    occupation: "Marketing Manager",
    employmentType: "Private Job",
    company: "techxpert",
    annualIncome: "300000",
    workLocation: "Lucknow",

    // About Me
    aboutMe:
      "I'm an outgoing person who loves hiking, reading, and trying new restaurants. I value honesty, communication, and having a good sense of humor in a relationship.",
    interests: "Hiking, Reading, Cooking, Travel, Photography",

    // Contact Information
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",

    //Family Details

    fatherName: "Jackson",
    fatherOccupation: "doctor",
    motherName: "Amanda",
    motherOccupation: "House Wife",
    noOfSiblings: "2",
    familyType: "Joint",
    familyStatus: "Middle Class",

    // lifestyle

    diet: "Vegetarian", // Options: Vegetarian, Non-Vegetarian, Eggetarian, Jain, Other
    smoking: "No", // Options: Yes, No, Occasionally
    drinking: "No", // Options: Yes, No, Occasionally

    // Existing keys...

    religion: "Hindu", // e.g., "Hindu", "Muslim", "Christian", etc.
    caste: "Brahmin", // e.g., "Brahmin", "Rajput", "Kayastha", etc.
    gotra: "Kashyap", // e.g., "Kashyap", "Bharadwaj", etc.
    manglik: "yes",

    // partnerPreferences
    preferredAgeRange: "25-30",
    preferredHeightRange: "5'3\" - 5'8\"",
    preferredMaritalStatus: "Never Married",
    religionCastePreference: "Hindu - Brahmin",
    educationProfessionPreference: "Master's Degree, Software Engineer",
    locationPreference: "India, Maharashtra, Mumbai",
    manglikPreference: "Doesn't Matter",
    lifestylePreferences: "Vegetarian, Non-Smoker, Non-Drinker",
  });

  // State for profile photo
  const [profilePhoto, setProfilePhoto] = useState(
    "/placeholder.svg?height=300&width=300"
  );

  // Ref for file input
  const fileInputRef = useRef(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle photo upload
  const handlePhotoUpload = () => {
    fileInputRef.current.click();
    fileInputRef.current.onchange = (e) => {
      if (e.target.files && e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setProfilePhoto(event.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    };
  };
  const [current, setcurrent] = useState("");
  console.log(current);
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    console.log("Profile photo:", profilePhoto);
    alert("Profile updated successfully!");
  };
  const references = {
    personal: useRef(null),
    education: useRef(null),
    about: useRef(null),
    contact: useRef(null),
    family: useRef(null),
    lifestyle: useRef(null),
    religionAstro: useRef(null),
    partnerPreferences: useRef(null),
  };

  const getHeight = (key) => {
    return current == key ? references[key]?.current?.scrollHeight : 0;
  };

  return (
    <div className="    border-black bg-white  px-8 py-4 rounded-lg shadow-sm max-lg:w-full max-lg:mt-18 max-lg:pb-22">
      {/* Header */}
      <div className="p-4   flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to={"/"} className="p-2 rounded-full hover:bg-gray-100">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-xl font-bold text-gray-900">Edit Profile</h1>
        </div>
        <button
          onClick={handleSubmit}
          className="flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg transition-colors"
        >
          <Save size={18} />
          Save
        </button>
      </div>

      <form className="p-4 space-y-6" onSubmit={handleSubmit}>
        {/* Profile Photo */}
        <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6 pb-6 ">
          <div className="relative">
            <img
              src={profilePhoto || "/placeholder.svg"}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-2 border-gray-200"
            />
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
            />
            <button
              type="button"
              onClick={handlePhotoUpload}
              className="absolute bottom-0 right-0 bg-rose-600 text-white p-2 rounded-full shadow-md hover:bg-rose-700"
            >
              <Camera size={16} />
            </button>
          </div>

          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Profile Photo
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Upload a clear photo of yourself. A good profile photo
              significantly increases your chances of getting matches.
            </p>
            <button
              type="button"
              onClick={handlePhotoUpload}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
            >
              Change Photo
            </button>
          </div>
        </div>
        <div className="flex items-center justify-end gap-4">
          <h2 className="font-semibold text-sm">
            {" "}
            Joined At:
            <span className="font-normal capitalize">{formData.joinedAt}</span>
          </h2>
          <h2 className="font-semibold text-sm">
            {" "}
            Profile:
            <span className="font-normal capitalize">
              {formData.profileStatus}
            </span>
          </h2>
        </div>

        {/* Personal Information */}
        <h2
          onClick={() =>
            setcurrent((prev) => (prev === "personal" ? null : "personal"))
          }
          className="text-lg py-4 m-0  bg-red-50 px-8 rounded-lg select-none cursor-pointer font-semibold text-gray-900"
        >
          Personal Information
        </h2>
        <motion.div
          initial={{
            maxHeight: 0,
          }}
          animate={{
            maxHeight: getHeight("personal"),
          }}
          ref={references.personal}
          className="grid  grid-cols-1 m-0 px-8 my-2  overflow-hidden sm:grid-cols-2 gap-4 "
        >
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:ring-rose-500 "
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:ring-rose-500"
            />
          </div>

          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:ring-rose-500 "
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="18"
              max="80"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:ring-rose-500 "
            />
          </div>

          <div>
            <label
              htmlFor="height"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Height
            </label>
            <input
              id="height"
              name="height"
              value={formData.height}
              onChange={handleChange}
              placeholder="e.g 5&#34;6&#39;(167cm)"
              className="w-full px-4 py-2 border border-gray-300 max-h-50 overflow-y-scroll rounded-lg focus:outline-none  focus:ring-rose-500 "
            />
          </div>

          <div>
            <label
              htmlFor="religion"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Religion
            </label>
            <select
              id="religion"
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:ring-rose-500 "
            >
              <option value="Christian">Christian</option>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
              <option value="Buddhist">Buddhist</option>
              <option value="Jewish">Jewish</option>
              <option value="Sikh">Sikh</option>
              <option value="No Religion">No Religion</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="maritalStatus"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Marital Status
            </label>
            <select
              id="maritalStatus"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:ring-rose-500 "
            >
              <option value="Never Married">Never Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
              <option value="Separated">Separated</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:ring-rose-500 "
            />
          </div>
        </motion.div>

        {/* Career & Education */}
        <h2
          onClick={() =>
            setcurrent((prev) => (prev === "education" ? null : "education"))
          }
          className="text-lg m-0 bg-red-50 px-8 rounded-lg   py-4 select-none cursor-pointer font-semibold text-gray-900"
        >
          Career & Education
        </h2>
        <motion.div
          initial={{
            maxHeight: 0,
          }}
          animate={{
            maxHeight: getHeight("education"),
          }}
          ref={references.education}
          className=" overflow-hidden px-8 my-2"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="education"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Highest Education
              </label>
              <select
                id="education"
                name="highestEducation"
                value={formData.highestEducation}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:ring-rose-500 "
              >
                <option value="High School">High School</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="Doctorate">Doctorate</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="educationDetails"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Education Details
              </label>
              <input
                id="educationDetails"
                name="educationDetails"
                value={formData.educationDetails}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:ring-rose-500 "
              />
            </div>{" "}
            <div>
              <label
                htmlFor="employment"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Employment Type
              </label>
              <select
                id="employment"
                name="employmentType"
                value={formData.employmentType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:ring-rose-500 "
              >
                <option value="Private Job">Private Job</option>
                <option value="Government Job">Government Job</option>
                <option value="Business Man">Buisness Man</option>
                <option value="Self Employed">Self Employed</option>
                <option value="Other">Other</option>
              </select>
            </div>
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
                value={formData.occupation}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:ring-rose-500"
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-sm capitalize font-medium text-gray-700 mb-1"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border capitalize border-gray-300 rounded-lg focus:outline-none  focus:ring-rose-500"
              />
            </div>
            <div>
              <label
                htmlFor="annualIncome"
                className="block text-sm capitalize font-medium text-gray-700 mb-1"
              >
                annual Income
              </label>
              <input
                type="text"
                id="annualIncome"
                name="annualIncome"
                value={formData.annualIncome}
                onChange={handleChange}
                className="w-full px-4 py-2 border capitalize border-gray-300 rounded-lg focus:outline-none  focus:ring-rose-500"
              />
            </div>
            <div>
              <label
                htmlFor="workLocation"
                className="block text-sm capitalize font-medium text-gray-700 mb-1"
              >
                Work Location
              </label>
              <input
                type="text"
                id="workLocation"
                name="workLocation"
                value={formData.workLocation}
                onChange={handleChange}
                className="w-full px-4 py-2 border capitalize border-gray-300 rounded-lg focus:outline-none  focus:ring-rose-500"
              />
            </div>
          </div>
        </motion.div>

        {/* About Me  */}

        <h2
          onClick={() =>
            setcurrent((prev) => (prev === "about" ? null : "about"))
          }
          className="text-lg m-0 bg-red-50 px-8 rounded-lg   py-4 select-none cursor-pointer font-semibold text-gray-900"
        >
          About Me
        </h2>
        <motion.div
          initial={{
            maxHeight: 0,
          }}
          animate={{
            maxHeight: getHeight("about"),
          }}
          ref={references.about}
          className=" overflow-hidden px-8 my-2"
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="aboutMe"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                About Me
              </label>
              <textarea
                id="aboutMe"
                name="aboutMe"
                value={formData.aboutMe}
                onChange={handleChange}
                rows={4}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:ring-rose-500 "
                placeholder="Tell potential matches about yourself..."
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="interests"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Interests & Hobbies
              </label>
              <input
                type="text"
                id="interests"
                name="interests"
                value={formData.interests}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:ring-rose-500 "
                placeholder="Separate interests with commas (e.g., Hiking, Reading, Cooking)"
              />
            </div>
          </div>
        </motion.div>
        {/* contact information */}
        <h2
          onClick={() =>
            setcurrent((prev) => (prev === "contact" ? null : "contact"))
          }
          className="text-lg m-0 bg-red-50 px-8 rounded-lg   py-4 select-none cursor-pointer font-semibold text-gray-900"
        >
          Contact Information
        </h2>
        <motion.div
          initial={{
            maxHeight: 0,
          }}
          animate={{
            maxHeight: getHeight("contact"),
          }}
          ref={references.contact}
          className=" overflow-hidden px-8 my-2"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:ring-rose-500 "
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:ring-rose-500 "
              />
            </div>
          </div>
        </motion.div>

        {/* family information  */}
        <h2
          onClick={() =>
            setcurrent((prev) => (prev === "family" ? null : "family"))
          }
          className="text-lg py-4 m-0  bg-red-50 px-8 rounded-lg select-none cursor-pointer font-semibold text-gray-900"
        >
          Family Type
        </h2>
        <motion.div
          initial={{
            maxHeight: 0,
          }}
          animate={{
            maxHeight: getHeight("family"),
          }}
          ref={references.family}
          className="grid  grid-cols-1 m-0 px-8 my-2  overflow-hidden sm:grid-cols-2 gap-4 "
        >
          <div>
            <label
              htmlFor="fatherName"
              className="block text-sm capitalize font-medium text-gray-700 mb-1"
            >
              father's Name
            </label>
            <input
              type="text"
              id="fatherName"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:ring-rose-500 "
            />
          </div>

          <div>
            <label
              htmlFor="fatherOccupation"
              className="block text-sm capitalize font-medium text-gray-700 mb-1"
            >
              father Occupation
            </label>
            <input
              type="text"
              id="fatherOccupation"
              name="fatherOccupation"
              value={formData.fatherOccupation}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg capitalize focus:outline-none  focus:ring-rose-500"
            />
          </div>

          <div>
            <label
              htmlFor="motherName"
              className="block text-sm font-medium capitalize text-gray-700 mb-1"
            >
              mother Name
            </label>
            <input
              id="motherName"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg capitalize focus:outline-none  focus:ring-rose-500 "
            />
          </div>

          <div>
            <label
              htmlFor="motherOccupation"
              className="block text-sm capitalize font-medium text-gray-700 mb-1"
            >
              motherOccupation
            </label>
            <input
              type="text"
              id="motherOccupation"
              name="motherOccupation"
              value={formData.motherOccupation}
              onChange={handleChange}
              min="18"
              max="80"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:ring-rose-500 "
            />
          </div>

          <div>
            <label
              htmlFor="noOfSiblings"
              className="block text-sm capitalize font-medium text-gray-700 mb-1"
            >
              Number of brothers/sisters
            </label>
            <input
              id="noOfSiblings"
              name="noOfSiblings"
              value={formData.noOfSiblings}
              onChange={handleChange}
              placeholder="e.g 5&#34;6&#39;(167cm)"
              className="w-full px-4 py-2 border border-gray-300 max-h-50 capitalize overflow-y-scroll rounded-lg focus:outline-none  focus:ring-rose-500 "
            />
          </div>

          <div>
            <label
              htmlFor="familyType"
              className="block text-sm capitalize font-medium text-gray-700 mb-1"
            >
              Family Type
            </label>
            <select
              id="familyType"
              name="familyType"
              value={formData.familyType}
              onChange={handleChange}
              placeholder="e.g 5&#34;6&#39;(167cm)"
              className="w-full px-4 py-2 border border-gray-300 max-h-50 capitalize overflow-y-scroll rounded-lg focus:outline-none  focus:ring-rose-500 "
            >
              <option value={"Joint"}>Joint</option>
              <option value={"Nuclear"}>Nuclear</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="familyStatus"
              className="block text-sm capitalize font-medium text-gray-700 mb-1"
            >
              Family Status
            </label>
            <select
              id="familyStatus"
              name="familyStatus"
              value={formData.familyStatus}
              onChange={handleChange}
              placeholder="e.g 5&#34;6&#39;(167cm)"
              className="w-full px-4 py-2 border border-gray-300 max-h-50 capitalize overflow-y-scroll rounded-lg focus:outline-none  focus:ring-rose-500 "
            >
              <option value={"Lower Class"}>Lower Class</option>
              <option value={"Middle Class"}>Middle Class</option>
              <option value={"Upper Middle Class"}>Upper Middle Class</option>
              <option value={"Rich"}>Rich</option>
            </select>
          </div>
        </motion.div>

        {/* lifestyle */}
        <h2
          onClick={() =>
            setcurrent((prev) => (prev === "lifestyle" ? null : "lifestyle"))
          }
          className="text-lg py-4 m-0  bg-red-50 px-8 rounded-lg select-none cursor-pointer font-semibold text-gray-900"
        >
          Lifestyle
        </h2>
        <motion.div
          initial={{ maxHeight: 0 }}
          animate={{ maxHeight: getHeight("lifestyle") }}
          ref={references.lifestyle}
          className="overflow-hidden px-8 my-2"
        >
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="diet"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Diet
                </label>
                <select
                  id="diet"
                  name="diet"
                  value={formData.diet}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-rose-500"
                >
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Non-Vegetarian">Non-Vegetarian</option>
                  <option value="Eggetarian">Eggetarian</option>
                  <option value="Jain">Jain</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="smoking"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Smoking
                </label>
                <select
                  id="smoking"
                  name="smoking"
                  value={formData.smoking}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-rose-500"
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                  <option value="Occasionally">Occasionally</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="drinking"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Drinking
                </label>
                <select
                  id="drinking"
                  name="drinking"
                  value={formData.drinking}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-rose-500"
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                  <option value="Occasionally">Occasionally</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        <h2
          onClick={() =>
            setcurrent((prev) =>
              prev === "religionAstro" ? null : "religionAstro"
            )
          }
          className="text-lg py-4 m-0  bg-red-50 px-8 rounded-lg select-none cursor-pointer font-semibold text-gray-900"
        >
          Religious/Spiritual Details
        </h2>
        <motion.div
          initial={{ maxHeight: 0 }}
          animate={{ maxHeight: getHeight("religionAstro") }}
          ref={references.religionAstro}
          className="overflow-hidden px-8 my-2"
        >
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Religion */}
              <div>
                <label
                  htmlFor="religion"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Religion
                </label>
                <input
                  type="text"
                  id="religion"
                  name="religion"
                  value={formData.religion}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-rose-500"
                />
              </div>

              {/* Caste / Sub-caste */}
              <div>
                <label
                  htmlFor="caste"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Caste / Sub-caste
                </label>
                <input
                  type="text"
                  id="caste"
                  name="caste"
                  value={formData.caste}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-rose-500"
                />
              </div>

              {/* Gothra / Gotra */}
              <div>
                <label
                  htmlFor="gotra"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Gothra / Gotra
                </label>
                <input
                  type="text"
                  id="gotra"
                  name="gotra"
                  value={formData.gotra}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-rose-500"
                />
              </div>

              {/* Manglik / Non-Manglik */}
              <div>
                <label
                  htmlFor="manglikStatus"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Manglik
                </label>
                <select
                  id="manglikStatus"
                  name="manglikStatus"
                  value={formData.manglikStatus}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-rose-500"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>
        {/* partner preferences */}
        <h2
          onClick={() =>
            setcurrent((prev) =>
              prev === "partnerPreferences" ? null : "partnerPreferences"
            )
          }
          className="text-lg py-4 m-0  bg-red-50 px-8 rounded-lg select-none cursor-pointer font-semibold text-gray-900"
        >
          Partner Preferences
        </h2>

        <motion.div
          initial={{ maxHeight: 0 }}
          animate={{ maxHeight: getHeight("partnerPreferences") }}
          ref={references.partnerPreferences}
          className="overflow-hidden px-8 my-2"
        >
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Preferred Age Range */}
              <div>
                <label
                  htmlFor="preferredAgeRange"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Preferred Age Range
                </label>
                <input
                  type="text"
                  id="preferredAgeRange"
                  name="preferredAgeRange"
                  value={formData.preferredAgeRange}
                  onChange={handleChange}
                  placeholder="e.g., 25-30"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-rose-500"
                />
              </div>

              {/* Preferred Height Range */}
              <div>
                <label
                  htmlFor="preferredHeightRange"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Preferred Height Range
                </label>
                <input
                  type="text"
                  id="preferredHeightRange"
                  name="preferredHeightRange"
                  value={formData.preferredHeightRange}
                  onChange={handleChange}
                  placeholder="e.g., 5'3&quot; - 5'8&quot;"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-rose-500"
                />
              </div>

              {/* Preferred Marital Status */}
              <div>
                <label
                  htmlFor="preferredMaritalStatus"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Preferred Marital Status
                </label>
                <select
                  id="preferredMaritalStatus"
                  name="preferredMaritalStatus"
                  value={formData.preferredMaritalStatus}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-rose-500"
                >
                  <option value="">Select</option>
                  <option value="Never Married">Never Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                  <option value="Separated">Separated</option>
                </select>
              </div>

              {/* Religion / Caste Preferences */}
              <div>
                <label
                  htmlFor="religionCastePreference"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Religion / Caste Preference
                </label>
                <input
                  type="text"
                  id="religionCastePreference"
                  name="religionCastePreference"
                  value={formData.religionCastePreference}
                  onChange={handleChange}
                  placeholder="e.g., Hindu - Brahmin"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-rose-500"
                />
              </div>

              {/* Education & Profession Preferences */}
              <div>
                <label
                  htmlFor="educationProfessionPreference"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Education & Profession Preferences
                </label>
                <input
                  type="text"
                  id="educationProfessionPreference"
                  name="educationProfessionPreference"
                  value={formData.educationProfessionPreference}
                  onChange={handleChange}
                  placeholder="e.g., Master's Degree, IT Professional"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-rose-500"
                />
              </div>

              {/* Country / State / City Preference */}
              <div>
                <label
                  htmlFor="locationPreference"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Country / State / City Preference
                </label>
                <input
                  type="text"
                  id="locationPreference"
                  name="locationPreference"
                  value={formData.locationPreference}
                  onChange={handleChange}
                  placeholder="e.g., India, Maharashtra, Mumbai"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-rose-500"
                />
              </div>

              {/* Manglik Preference */}
              <div>
                <label
                  htmlFor="manglikPreference"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Manglik Preference
                </label>
                <select
                  id="manglikPreference"
                  name="manglikPreference"
                  value={formData.manglikPreference}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-rose-500"
                >
                  <option value="">Select</option>
                  <option value="Manglik">Manglik</option>
                  <option value="Non-Manglik">Non-Manglik</option>
                  <option value="Doesn't Matter">Doesn't Matter</option>
                </select>
              </div>

              {/* Lifestyle Preferences (Diet, Habits) */}
              <div>
                <label
                  htmlFor="lifestylePreferences"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Lifestyle Preferences (Diet, Habits)
                </label>
                <input
                  type="text"
                  id="lifestylePreferences"
                  name="lifestylePreferences"
                  value={formData.lifestylePreferences}
                  onChange={handleChange}
                  placeholder="e.g., Vegetarian, Non-Smoker"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-rose-500"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form Actions */}
        <div className="pt-4 flex justify-end space-x-4">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg transition-colors"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
