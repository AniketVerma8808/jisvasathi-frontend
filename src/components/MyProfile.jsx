"use client"

import { useState } from "react"
import { Edit, User, Heart, Briefcase, MapPin, Activity, Users, Phone, Mail, Calendar } from "lucide-react"
import { Link } from "react-router-dom"

export default function MyProfile() {
  // Sample profile data - in a real app, this would come from your backend/state
  const [profileData] = useState({
    // Personal Information
    fullName: "Sarah Johnson",
    mobile: "+1 (555) 123-4567",
    dateOfBirth: "1992-05-15",
    age: 31,
    gender: "Female",
    email: "sarah.johnson@example.com",
    profilePhoto: "/placeholder.svg?height=200&width=200",

    // Religious & Cultural
    religion: "Christian",
    motherTongue: "English",
    caste: "General",
    subcaste: "Methodist",
    gothram: "N/A",
    dosh: "None",
    manglik: "No",

    // Professional
    occupation: "Marketing Manager",
    educationQualifications: "MBA in Marketing from Columbia University",
    annualIncome: "₹8,00,000 - ₹10,00,000",
    workingStatus: "Working",

    // Location
    country: "United States",
    state: "New York",
    metroCities: "New York City",

    // Physical & Health
    height: "5'6\" (168 cm)",
    physicalDisability: "None",

    // Family & Personal
    marriageStatus: "Never Married",
    kids: "No",
    siblings: "1 sister, 1 brother",
    aboutMe:
      "I'm an outgoing person who loves hiking, reading, and trying new restaurants. I value honesty, communication, and having a good sense of humor in a relationship. I'm looking for someone who shares similar values and enjoys both adventure and quiet moments together.",
    interestsHobbies: "Hiking, Reading, Cooking, Travel, Photography, Yoga, Dancing",
  })

  const handleEditProfile = () => {
    // Navigate to edit profile page
    console.log("Navigate to edit profile")
  }

  return (
    <div className="mx-auto bg-white  shadow-sm border border-gray-200">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
        <Link to={'/profile/editProfile'}
          className="flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg transition-colors"
        >
          <Edit size={18} />
          Edit Profile
        </Link>
      </div>

      <div className="p-6">
        {/* Profile Header Section */}
        <div className="flex flex-col md:flex-row gap-6 mb-8 p-6 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg">
          <div className="flex-shrink-0">
            <img
              src={profileData.profilePhoto || "/placeholder.svg"}
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{profileData.fullName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-rose-500" />
                <span>{profileData.age} years old</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} className="text-rose-500" />
                <span>{profileData.gender}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-rose-500" />
                <span>
                  {profileData.metroCities}, {profileData.state}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={16} className="text-rose-500" />
                <span>{profileData.occupation}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Personal Information */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <User className="text-rose-600" size={20} />
                <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Full Name:</span>
                  <span className="font-medium">{profileData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date of Birth:</span>
                  <span className="font-medium">{new Date(profileData.dateOfBirth).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Gender:</span>
                  <span className="font-medium">{profileData.gender}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Height:</span>
                  <span className="font-medium">{profileData.height}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Marriage Status:</span>
                  <span className="font-medium">{profileData.marriageStatus}</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Phone className="text-rose-600" size={20} />
                <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-gray-400" />
                  <span className="font-medium">{profileData.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-gray-400" />
                  <span className="font-medium">{profileData.mobile}</span>
                </div>
              </div>
            </div>

            {/* Location Information */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="text-rose-600" size={20} />
                <h3 className="text-lg font-semibold text-gray-900">Location</h3>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Country:</span>
                  <span className="font-medium">{profileData.country}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">State:</span>
                  <span className="font-medium">{profileData.state}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">City:</span>
                  <span className="font-medium">{profileData.metroCities}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Religious & Cultural Information */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="text-rose-600" size={20} />
                <h3 className="text-lg font-semibold text-gray-900">Religious & Cultural</h3>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Religion:</span>
                  <span className="font-medium">{profileData.religion}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Mother Tongue:</span>
                  <span className="font-medium">{profileData.motherTongue}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Caste:</span>
                  <span className="font-medium">{profileData.caste}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Subcaste:</span>
                  <span className="font-medium">{profileData.subcaste}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Gothram:</span>
                  <span className="font-medium">{profileData.gothram}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Manglik:</span>
                  <span className="font-medium">{profileData.manglik}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dosh:</span>
                  <span className="font-medium">{profileData.dosh}</span>
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="text-rose-600" size={20} />
                <h3 className="text-lg font-semibold text-gray-900">Professional Information</h3>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Occupation:</span>
                  <span className="font-medium">{profileData.occupation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Working Status:</span>
                  <span className="font-medium">{profileData.workingStatus}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Annual Income:</span>
                  <span className="font-medium">{profileData.annualIncome}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-gray-600">Education:</span>
                  <span className="font-medium text-sm">{profileData.educationQualifications}</span>
                </div>
              </div>
            </div>

            {/* Physical & Health */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="text-rose-600" size={20} />
                <h3 className="text-lg font-semibold text-gray-900">Physical & Health</h3>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Height:</span>
                  <span className="font-medium">{profileData.height}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Physical Disability:</span>
                  <span className="font-medium">{profileData.physicalDisability}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Family & Personal Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="text-rose-600" size={20} />
                <h3 className="text-lg font-semibold text-gray-900">Family & Personal</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Marriage Status:</span>
                    <span className="font-medium">{profileData.marriageStatus}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Kids:</span>
                    <span className="font-medium">{profileData.kids}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Siblings:</span>
                    <span className="font-medium">{profileData.siblings}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* About Me */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <User className="text-rose-600" size={20} />
                <h3 className="text-lg font-semibold text-gray-900">About Me</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Description</h4>
                  <p className="text-gray-600 leading-relaxed">{profileData.aboutMe}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Interests & Hobbies</h4>
                  <div className="flex flex-wrap gap-2">
                    {profileData.interestsHobbies.split(", ").map((interest, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium"
                      >
                        {interest.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
