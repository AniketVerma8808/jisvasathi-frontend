"use client"

import { useContext, useState } from "react"
import { Edit, User, Heart, Briefcase, MapPin, Activity, Users, Phone, Mail, Calendar, Camera, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useSelector } from "react-redux"

export default function MyProfile() {
  const {user}= useSelector((state)=>state.user)
  console.log(user)
const time=new Date(user?.dob)
 const calculateAge = (dateOfBirth) => {   

    if(dateOfBirth){
    const today = new Date()
    const birthDate = new Date(dateOfBirth)
    let age = today.getFullYear() - birthDate.getFullYear() 
    const monthDiff = (today.getMonth() + 1) - birthDate.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    } 
    return age
  }
  }
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
        <Link to={'/profile/editProfile'}
          className="flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg transition-colors"
        >
          <Edit size={18} />
          Edit Profile
        </Link>
      </div>

      <div className="p-6">
        {/* Profile Header Section */}
        <div className="flex flex-col md:flex-row gap-6  p-6 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg">
          <div className="flex-shrink-0 relative">
            {/* <input type="file" className="hidden" id='profilePic' />
            <label for='profilePic' className="absolute bg-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer left-3/4 top-3/4">
              <Camera color="gray"/>
            </label> */}
            <img
              src={user?.profilePhoto || "/placeholder.svg"}
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{user?.fullName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-rose-500" />
                <span>{calculateAge(user?.dob)} years old</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} className="text-rose-500" />
                <span>{user?.gender}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-rose-500" />
                <span>
                  {user?.metroCities ?? '--'}, {user?.state ?? '--'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={16} className="text-rose-500"/>
                <span>{user?.occupation ?? '--'}</span>
              </div>
            </div>
          </div>
        </div>
             <h2 className="text-gray-500 text-sm text-end my-8"><span className="text-black font-semibold">Member Since:</span> {new Date(user?.createdAt).toLocaleDateString()}</h2>
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
                  <span className="font-medium">{user?.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date of Birth:</span>
                  <span className="font-medium">{`${time.getFullYear()}/${time.getMonth()}/${time.getDate()}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Gender:</span>
                  <span className="font-medium">{user?.gender}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Height:</span>
                  <span className="font-medium">{user?.height ?? '--'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Marriage Status:</span>
                  <span className="font-medium">{user?.marriageStatus ?? '--'}</span>
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
                  <span className="font-medium">{user?.email ?? '--'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-gray-400" />
                  <span className="font-medium">{user?.mobile ?? '--'}</span>
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
                  <span className="font-medium">{user?.country ?? '--'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">State:</span>
                  <span className="font-medium">{user?.state ?? '--'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">City:</span>
                  <span className="font-medium">{user?.metroCities ?? '--'}</span>
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
                  <span className="font-medium">{user?.religion ?? '--'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Mother Tongue:</span>
                  <span className="font-medium">{user?.motherTongue ?? '--'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Caste:</span>
                  <span className="font-medium">{user?.caste ?? '--'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Subcaste:</span>
                  <span className="font-medium">{user?.subcaste ?? '--'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Gothram:</span>
                  <span className="font-medium">{user?.gothram ?? '--'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Manglik:</span>
                  <span className="font-medium">{user?.manglik ?? '--'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dosh:</span>
                  <span className="font-medium">{user?.dosh ?? '--'}</span>
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
                  <span className="font-medium">{user?.occupation ?? '--'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Working Status:</span>
                  <span className="font-medium">{user?.workingStatus ?? '--'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Annual Income:</span>
                  <span className="font-medium">{user?.annualIncome ?? '--'}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-gray-600">Education:</span>
                  <span className="font-medium text-sm">{user?.educationQualifications ?? '--'}</span>
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
                  <span className="font-medium">{user?.height ?? '--'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Physical Disability:</span>
                  <span className="font-medium">{user?.physicalDisability ?? '--'}</span>
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
                    <span className="font-medium">{user?.marriageStatus ?? '--'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Kids:</span>
                    <span className="font-medium">{user?.kids ?? '--'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Siblings:</span>
                    <span className="font-medium">{user?.siblings ?? '--'}</span>
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
                  <p className="text-gray-600 leading-relaxed">{user?.aboutMe ?? '--'}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Interests & Hobbies</h4>
                  <div className="flex flex-wrap gap-2">
                    {user?.interestsHobbies?.split(", ").map((interest, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium"
                      >
                        {interest.trim()}
                      </span>
                    )) ?? '--'}
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
