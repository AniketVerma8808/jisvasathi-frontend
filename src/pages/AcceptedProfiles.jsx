import { Heart, MessageSquare, PhoneCall, Star } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const AcceptedProfiles = () => {
    const profiles=[
        {
  "age": 28,
  "caste": "OBC",
  "createdAt": "2025-06-01T10:20:45.000Z",
  "dob": "1997-02-15T00:00:00.000Z",
  "dosh": "",
  "email": "aisha.khan@example.com",
  "fullName": "Aisha Khan",
  "gender": "Female",
  "gothram": "",
  "id": "683aecaa19e5de69f2f3a8d3",
  "interestsReceived": [],
  "interestsSent": [],
  "isEmailVerified": true,
  marriageStatus:'single',
  workingStatus:'Working',
  metro:'Lucknow, Uttar Pradesh',
  educationQualifications:'Graduate',
  "matchScore": 0.85,
  "mobile": "9876543210",
  "motherTongue": "Urdu",
  "otp": "453211",
  "otpExpires": "2025-06-01T10:35:45.000Z",
  "partnerPreferences": {
    "ageFrom": 27,
    "ageTo": 35,
    "marriageStatus": "never married",
    "motherTongue": "Urdu",
    "height": "any",
    "religion": "Muslim",
    "caste": "OBC"
  },
  "profileFor": "self",
  "rejectedProfiles": [],
  "religion": "Muslim",
  "role": "user",
  "subcaste": "",
  "updatedAt": "2025-06-01T10:20:45.000Z",
  "verified": true
},
{
  "age": 30,
  "caste": "Brahmin",
  "createdAt": "2025-06-02T09:10:30.000Z",
  "dob": "1995-03-10T00:00:00.000Z",
  "dosh": "Mangal",
  "email": "rohit.verma@example.com",
  "fullName": "Rohit Verma",
  "gender": "Male",
  "gothram": "Vashishtha",
  "id": "683aecaa19e5de69f2f3a8d4",
  "interestsReceived": [],
  "interestsSent": [],
  "isEmailVerified": true,
  "matchScore": 0.92,
  "mobile": "9012345678",
  "motherTongue": "Hindi",
  "otp": "789123",
  "otpExpires": "2025-06-02T09:25:30.000Z",
  "partnerPreferences": {
    "ageFrom": 25,
    "ageTo": 32,
    "marriageStatus": "never married",
    "motherTongue": "Hindi",
    "height": "any",
    "religion": "Hindu",
    "caste": "Brahmin"
  },
  "profileFor": "self",
  "rejectedProfiles": [],
  "religion": "Hindu",
  "role": "user",
  "subcaste": "Sanadhya",
  "updatedAt": "2025-06-02T09:10:30.000Z",
  "verified": true
},
{
  "age": 26,
  "caste": "SC",
  "createdAt": "2025-06-03T12:15:00.000Z",
  "dob": "1999-04-25T00:00:00.000Z",
  "dosh": "",
  "email": "meena.joseph@example.com",
  "fullName": "Meena Joseph",
  "gender": "Female",
  "gothram": "",
  "id": "683aecaa19e5de69f2f3a8d5",
  "interestsReceived": [],
  "interestsSent": [],
  "isEmailVerified": false,
  "matchScore": 0.78,
  "mobile": "8887776665",
  "motherTongue": "Tamil",
  "otp": "234876",
  "otpExpires": "2025-06-03T12:30:00.000Z",
  "partnerPreferences": {
    "ageFrom": 26,
    "ageTo": 34,
    "marriageStatus": "any",
    "motherTongue": "any",
    "height": "any",
    "religion": "Christian",
    "caste": "any"
  },
  "profileFor": "self",
  "rejectedProfiles": [],
  "religion": "Christian",
  "role": "user",
  "subcaste": "",
  "updatedAt": "2025-06-03T12:15:00.000Z",
  "verified": true
},
{
  "age": 31,
  "caste": "Jain",
  "createdAt": "2025-06-04T08:00:00.000Z",
  "dob": "1994-01-05T00:00:00.000Z",
  "dosh": "",
  "email": "rajesh.shah@example.com",
  "fullName": "Rajesh Shah",
  "gender": "Male",
  "gothram": "Kashyap",
  "id": "683aecaa19e5de69f2f3a8d6",
  "interestsReceived": [],
  "interestsSent": [],
  "isEmailVerified": true,
  "matchScore": 0.88,
  "mobile": "7654321980",
  "motherTongue": "Gujarati",
  "otp": "123098",
  "otpExpires": "2025-06-04T08:15:00.000Z",
  "partnerPreferences": {
    "ageFrom": 25,
    "ageTo": 30,
    "marriageStatus": "never married",
    "motherTongue": "Gujarati",
    "height": "any",
    "religion": "Jain",
    "caste": "Jain"
  },
  "profileFor": "self",
  "rejectedProfiles": [],
  "religion": "Jain",
  "role": "user",
  "subcaste": "Shwetambar",
  "updatedAt": "2025-06-04T08:00:00.000Z",
  "verified": true
}
]
  return (
    <div className='min-h-screen bg-white p-4'>
          <h1 className="text-2xl font-bold text-gray-900 capitalize">Profiles that you have accepted</h1>
       <div className=" mt-4  grid grid-cols-2 gap-4">
        {
         profiles.map((match,i)=>{
            return  <div
            key={i}
            className="bg-white rounded-lg flex  overflow-hidden border border-gray-300 "
          >
            <Link to={'/profileDetails'} state={match} className="relative w-1/3">
              <img
                src={match.profilePhoto || "/placeholder.svg"}
                alt={match.fullName}
                className="w-full h-full object-cover"
              />
            </Link>

            <div className="p-3  w-2/3 pt-6 px-4 ">
             <h3 className=" font-semibold flex items-center leading-1   w-full justify-between">
               <span> {match.fullName}</span>
               <span> {match.age} Years</span>
              </h3>
              <br/>
              <h3 className="capitalize text-sm leading-2"><span className="font-semibold text-amber-500 tracking-wide" >compatiblity-</span><span className="font-semibold"> 90%</span></h3>
             
            <div className="flex items-center justify-start flex-wrap gap-1 py-4 max-lg:pb-2"> 
            
              <p className="text-sm  capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50"><span className="font-medium mr-1 ">height-</span><span className="text-black">{match.height}&quot;</span></p>
              <p className="text-sm  capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50"><span className="font-medium mr-1 ">marriage status-</span><span className="text-black">{match.marriageStatus}</span></p>
              <p className="text-sm  capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50"><span className="font-medium mr-1 ">religion-</span><span className="text-black">{match.religion}</span></p>
              <p className="text-sm  capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50"><span className="font-medium mr-1 ">region-</span><span className="text-black">{match.metroCities}</span></p>
              <p className="text-sm  capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50"><span className="font-medium mr-1 ">working status-</span><span className="text-black">{match.workingStatus}</span></p>
              <p className="text-sm  capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50"><span className="font-medium mr-1 ">education-</span><span className="text-black">{match.educationQualifications}</span></p></div>
             
          <div className="flex flex-col max-sm:grid max-sm:grid-cols-2 sm:space-y-2 max-sm:gap-1">
              {/* <button className="p-2 rounded-lg bg-rose-100 px-4 max-xl:px-2 max-xl:py-1.5 flex-grow cursor-pointer hover:bg-rose-200 flex items-center justify-center gap-2 transition-colors">
  <h2 className="text-xs font-medium capitalize  "> Send Your Interest</h2>
  <Heart size={20} className="text-rose-600" />
</button> */}
{/* 
<button className="p-2 rounded-lg bg-gray-100 px-4 flex-grow  max-xl:px-2 max-xl:py-1.5 cursor-pointer hover:bg-gray-200 flex items-center justify-center gap-2 transition-colors">
  <h2 className="text-xs font-medium capitalize  ">Send Message</h2>
  <MessageSquare size={20} className="text-blue-500" />
</button>

<button className="p-2 rounded-lg bg-gray-100 px-4 flex-grow max-xl:px-2 max-xl:py-1.5 cursor-pointer hover:bg-gray-200 flex items-center justify-center gap-2 transition-colors">
  <h2 className="text-xs font-medium capitalize  ">Shortlist Profile</h2>
  <Star size={20} className="text-amber-500" />
</button>

<button className="p-2 rounded-lg bg-green-100 px-4 flex-grow max-xl:px-2 max-xl:py-1.5 cursor-pointer hover:bg-green-200 flex items-center justify-center gap-2 transition-colors">
  <h2 className="text-xs font-medium capitalize  "> See Phone Number</h2>
  <PhoneCall size={20} className="text-green-600" />
</button> */}


              </div>
            </div>
          </div>
         })
       }
       </div>
    </div>
  )
}

export default AcceptedProfiles
