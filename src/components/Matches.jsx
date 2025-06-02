import { Heart, X, Star, MessageSquare, PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMatches } from "../services/api.service";

export default function Matches() {
//  const matches = [
//   {
//     fullName: "Michael Chen",
//     mobile: "+1 (555) 987-6543",
//     dateOfBirth: "1990-08-22",
//     age: 33,
//     gender: "Male",
//     email: "michael.chen@example.com",
//     profilePhoto: "/placeholder.svg?height=200&width=200",
//     religion: "Buddhist",
//     motherTongue: "Mandarin",
//     caste: "General",
//     subcaste: "N/A",
//    photos:[1,2,3,4],
//     gothram: "N/A",
//     dosh: "None",
//     manglik: "No",
//     photos:[1,2,3,4],
//     occupation: "Software Engineer",
//     educationQualifications: "MS in Computer Science from Stanford",
//     annualIncome: "₹12,00,000 - ₹15,00,000",
//     workingStatus: "Working",

//     country: "United States",
//     state: "California",
//     metroCities: "San Francisco",

//     height: "5'11\" (180 cm)",
//     physicalDisability: "None",

//     marriageStatus: "Never Married",
//     kids: "No",
//     siblings: "2 brothers",
//     aboutMe: "Tech enthusiast who loves coding, hiking, and playing chess. Looking for someone who values deep conversations and personal growth.",
//     interestsHobbies: "Programming, Chess, Hiking, Reading Sci-Fi, Photography"
//   },
//   {
//     fullName: "Priya Patel",
//     mobile: "+91 98765 43210",
//     dateOfBirth: "1993-11-05",
//     age: 30,
//     gender: "Female",
//     email: "priya.patel@example.com",
//     profilePhoto: "/placeholder.svg?height=200&width=200",

//     religion: "Hindu",
//     motherTongue: "Gujarati",
//     caste: "Brahmin",
//     subcaste: "Anavil",
//     gothram: "Kashyap",
//     dosh: "None",
//     manglik: "No",
//    photos:[1,2,3,4],
//     occupation: "Doctor",
//     educationQualifications: "MBBS, MD in Pediatrics",
//     annualIncome: "₹15,00,000 - ₹20,00,000",
//     workingStatus: "Working",

//     country: "India",
//     state: "Gujarat",
//     metroCities: "Ahmedabad",

//     height: "5'4\" (163 cm)",
//     physicalDisability: "None",

//     marriageStatus: "Never Married",
//     kids: "No",
//     siblings: "1 sister",
//     aboutMe: "Compassionate pediatrician who enjoys classical dance and cooking. Seeking a partner who values family and has a kind heart.",
//     interestsHobbies: "Bharatanatyam, Cooking, Travel, Reading Medical Journals"
//   },
//   {
//     fullName: "Rajiv Malhotra",
//     mobile: "+91 87654 32109",
//     dateOfBirth: "1988-04-17",
//     age: 35,
//     gender: "Male",
//     email: "rajiv.malhotra@example.com",
//     profilePhoto: "/placeholder.svg?height=200&width=200",
//    photos:[1,2,3,4],
//     religion: "Hindu",
//     motherTongue: "Hindi",
//     caste: "Kshatriya",
//     subcaste: "Rajput",
//     gothram: "Suryavanshi",
//     dosh: "Kuja",
//     manglik: "Yes",
//     occupation: "Business Owner",
//     educationQualifications: "BBA from Delhi University",
//     annualIncome: "₹25,00,000 - ₹30,00,000",
//     workingStatus: "Working",

//     country: "India",
//     state: "Delhi",
//     metroCities: "Delhi",

//     height: "5'9\" (175 cm)",
//     physicalDisability: "None",

//     marriageStatus: "Divorced",
//     kids: "No",
//     siblings: "1 brother, 1 sister",
//     aboutMe: "Entrepreneur with a passion for fitness and classic cars. Looking for a life partner who is understanding and family-oriented.",
//     interestsHobbies: "Gym, Classic Cars, Travel, Business Networking"
//   },
//   {
//     fullName: "Aisha Khan",
//     mobile: "+44 7986 543210",
//     dateOfBirth: "1991-07-30",
//     age: 32,
//     gender: "Female",
//     email: "aisha.khan@example.com",
//     profilePhoto: "/placeholder.svg?height=200&width=200",
//    photos:[1,2,3,4],
//     religion: "Muslim",
//     motherTongue: "Urdu",
//     caste: "General",
//     subcaste: "N/A",
//    photos:[1,2,3,4],
//     gothram: "N/A",
//     dosh: "None",
//     manglik: "No",

//     occupation: "Architect",
//     educationQualifications: "M.Arch from University College London",
//     annualIncome: "₹18,00,000 - ₹22,00,000",
//     workingStatus: "Working",

//     country: "United Kingdom",
//     state: "England",
//     metroCities: "London",

//     height: "5'5\" (165 cm)",
//     physicalDisability: "None",

//     marriageStatus: "Never Married",
//     kids: "No",
//     siblings: "3 brothers",
//     aboutMe: "Creative soul who loves designing spaces and exploring different cultures. Seeking someone who shares my passion for art and travel.",
//     interestsHobbies: "Sketching, Travel, Photography, Interior Design, Calligraphy"
//   },
//   {
//     fullName: "David Wilson",
//     mobile: "+1 (555) 234-5678",
//     dateOfBirth: "1987-12-10",
//     age: 36,
//     gender: "Male",
//     email: "david.wilson@example.com",
//     profilePhoto: "/placeholder.svg?height=200&width=200",
//    photos:[1,2,3,4],
//     religion: "Christian",
//     motherTongue: "English",
//     caste: "General",
//     subcaste: "Baptist",
//     gothram: "N/A",
//     dosh: "None",
//     manglik: "No",

//     occupation: "Financial Analyst",
//     educationQualifications: "CFA, MBA in Finance",
//     annualIncome: "₹20,00,000 - ₹25,00,000",
//     workingStatus: "Working",

//     country: "Canada",
//     state: "Ontario",
//     metroCities: "Toronto",

//     height: "6'0\" (183 cm)",
//     physicalDisability: "None",

//     marriageStatus: "Never Married",
//     kids: "No",
//     siblings: "1 sister",
//     aboutMe: "Outdoorsy finance professional who enjoys skiing and volunteering. Looking for a partner who balances adventure with stability.",
//     interestsHobbies: "Skiing, Investing, Hiking, Volunteering, Wine Tasting"
//   },
//   {
//     fullName: "Neha Sharma",
//     mobile: "+91 76543 21098",
//     dateOfBirth: "1994-03-25",
//     age: 29,
//     gender: "Female",
//     email: "neha.sharma@example.com",
//     profilePhoto: "/placeholder.svg?height=200&width=200",
//    photos:[1,2,3,4],
//     religion: "Hindu",
//     motherTongue: "Hindi",
//     caste: "Brahmin",
//     subcaste: "Gaur",
//     gothram: "Bharadwaj",
//     dosh: "None",
//     manglik: "No",

//     occupation: "Fashion Designer",
//     educationQualifications: "Diploma in Fashion Design from NIFT",
//     annualIncome: "₹10,00,000 - ₹12,00,000",
//     workingStatus: "Working",

//     country: "India",
//     state: "Maharashtra",
//     metroCities: "Mumbai",

//     height: "5'7\" (170 cm)",
//     physicalDisability: "None",

//     marriageStatus: "Never Married",
//     kids: "No",
//     siblings: "Only Child",
//     aboutMe: "Creative and independent fashion designer who loves to travel and explore new cultures. Looking for someone who appreciates art and creativity.",
//     interestsHobbies: "Fashion Design, Painting, Travel, Yoga, Blogging"
//   },
//   {
//     fullName: "Arjun Reddy",
//     mobile: "+91 98765 12340",
//     dateOfBirth: "1989-09-14",
//     age: 34,
//     gender: "Male",
//     email: "arjun.reddy@example.com",
//     profilePhoto: "/placeholder.svg?height=200&width=200",
//    photos:[1,2,3,4],
//     religion: "Hindu",
//     motherTongue: "Telugu",
//     caste: "Reddy",
//     subcaste: "Kamma",
//     gothram: "Vasishtha",
//     dosh: "None",
//     manglik: "No",

//     occupation: "Agricultural Scientist",
//     educationQualifications: "PhD in Agricultural Sciences",
//     annualIncome: "₹15,00,000 - ₹18,00,000",
//     workingStatus: "Working",

//     country: "India",
//     state: "Andhra Pradesh",
//     metroCities: "Hyderabad",

//     height: "5'10\" (178 cm)",
//     physicalDisability: "None",

//     marriageStatus: "Never Married",
//     kids: "No",
//     siblings: "1 sister",
//     aboutMe: "Passionate about sustainable farming and rural development. Enjoy classical music and badminton. Seeking a partner who values simplicity and nature.",
//     interestsHobbies: "Farming, Badminton, Carnatic Music, Organic Cooking"
//   },
//   {
//     fullName: "Emily Rodriguez",
//     mobile: "+1 (555) 345-6789",
//     dateOfBirth: "1995-01-08",
//     age: 28,
//     gender: "Female",
//     email: "emily.rodriguez@example.com",
//     profilePhoto: "/placeholder.svg?height=200&width=200",
//    photos:[1,2,3,4],
//     religion: "Catholic",
//     motherTongue: "Spanish",
//     caste: "General",
//     subcaste: "N/A",
//    photos:[1,2,3,4],
//     gothram: "N/A",
//     dosh: "None",
//     manglik: "No",

//     occupation: "Elementary School Teacher",
//     educationQualifications: "M.Ed in Early Childhood Education",
//     annualIncome: "₹7,00,000 - ₹9,00,000",
//     workingStatus: "Working",

//     country: "United States",
//     state: "Texas",
//     metroCities: "Houston",

//     height: "5'3\" (160 cm)",
//     physicalDisability: "None",

//     marriageStatus: "Never Married",
//     kids: "No",
//     siblings: "2 brothers, 1 sister",
//     aboutMe: "Dedicated teacher who loves working with children. Enjoy dancing and community service. Looking for someone kind-hearted and family-oriented.",
//     interestsHobbies: "Dancing, Reading, Volunteering, Baking, Gardening"
//   },
//   {
//     fullName: "Vikram Singh",
//     mobile: "+91 87654 98765",
//     dateOfBirth: "1986-06-20",
//     age: 37,
//     gender: "Male",
//     email: "vikram.singh@example.com",
//     profilePhoto: "/placeholder.svg?height=200&width=200",
//    photos:[1,2,3,4],
//     religion: "Sikh",
//     motherTongue: "Punjabi",
//     caste: "Jat",
//     subcaste: "N/A",
//    photos:[1,2,3,4],
//     gothram: "N/A",
//     dosh: "None",
//     manglik: "No",

//     occupation: "Army Officer",
//     educationQualifications: "Graduate from Indian Military Academy",
//     annualIncome: "₹18,00,000 - ₹20,00,000",
//     workingStatus: "Working",

//     country: "India",
//     state: "Punjab",
//     metroCities: "Chandigarh",

//     height: "6'1\" (185 cm)",
//     physicalDisability: "None",

//     marriageStatus: "Never Married",
//     kids: "No",
//     siblings: "1 brother",
//     aboutMe: "Disciplined army officer with a passion for adventure sports and reading. Seeking a partner who values patriotism and family values.",
//     interestsHobbies: "Trekking, Reading History, Playing Golf, Shooting"
//   },
//   {
//     fullName: "Meera Krishnan",
//     mobile: "+91 78901 23456",
//     dateOfBirth: "1990-10-12",
//     age: 33,
//     gender: "Female",
//     email: "meera.krishnan@example.com",
//     profilePhoto: "/placeholder.svg?height=200&width=200",
//    photos:[1,2,3,4],
//     religion: "Hindu",
//     motherTongue: "Tamil",
//     caste: "Iyer",
//     subcaste: "Brahmin",
//     gothram: "Shandilya",
//     dosh: "None",
//     manglik: "No",

//     occupation: "Classical Dancer",
//     educationQualifications: "MA in Bharatanatyam",
//     annualIncome: "₹6,00,000 - ₹8,00,000",
//     workingStatus: "Working",

//     country: "India",
//     state: "Tamil Nadu",
//     metroCities: "Chennai",

//     height: "5'2\" (157 cm)",
//     physicalDisability: "None",

//     marriageStatus: "Never Married",
//     kids: "No",
//     siblings: "1 brother",
//     aboutMe: "Dedicated to preserving classical arts while embracing modern life. Looking for someone who respects tradition but is open-minded.",
//     interestsHobbies: "Bharatanatyam, Carnatic Music, Yoga, Cooking Traditional Recipes"
//   }
// ];
const [matches, setmatches] = useState();
console.log(matches)
useEffect(()=>{
  const getMatchedUsers=async()=>{
    const res= await getMatches()
    setmatches(res.data.data)
  }
  getMatchedUsers()
},[])



  return (
    <div className="space-y-6  bg-white ml-auto  py-4 px-5  max-sm:pb-20 shadow-sm max-sm:px-3  max-lg:w-full ">
      <h1 className="text-2xl font-bold text-gray-900">Your Matches</h1>

      <div className="grid grid-cols-5 gap-2 max-sm:gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
        {matches?.map((match) => (
          <div
            key={match._id}
            className="bg-white rounded-lg  overflow-hidden border border-gray-200"
          >
            <Link to={'/profileDetails'} state={match} className="relative">
              <img
                src={match.profilePhoto || "/placeholder.svg"}
                alt={match.fullName}
                className="w-full h-54 object-cover"
              />
            </Link>

            <div className="p-4 px-2">
             <div className="flex justify-between items-center flex-wrap gap-1">
             <h3 className=" font-semibold">
                {match.fullName}
              </h3>
              <br/>
              <h3 className="capitalize text-sm"><span className="font-semibold text-amber-500 tracking-wide" >compatiblity-</span><span className="font-semibold"> 90%</span></h3>
             </div>
            <div className="flex items-center justify-center flex-wrap gap-1 py-4 max-lg:pb-2"> 
               <p className="w-full text-sm capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50"><span className="font-medium mr-1 ">age-</span><span className="text-black">{match.age} yrs</span></p>
              <p className="w-full text-sm capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50"><span className="font-medium mr-1 ">height-</span><span className="text-black">{match.height}&quot;</span></p>
              <p className="w-full text-sm capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50"><span className="font-medium mr-1 ">marriage status-</span><span className="text-black">{match.marriageStatus}</span></p>
              <p className="w-full text-sm capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50"><span className="font-medium mr-1 ">religion-</span><span className="text-black">{match.religion}</span></p>
              <p className="w-full text-sm capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50"><span className="font-medium mr-1 ">region-</span><span className="text-black">{match.metroCities}</span></p>
              <p className="w-full text-sm capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50"><span className="font-medium mr-1 ">working status-</span><span className="text-black">{match.workingStatus}</span></p>
              <p className="w-full text-sm capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50"><span className="font-medium mr-1 ">education-</span><span className="text-black">{match.educationQualifications}</span></p></div>
             
          <div className="flex flex-col max-sm:grid max-sm:grid-cols-2 sm:space-y-2 max-sm:gap-1">
              <button className="p-2 rounded-lg bg-rose-100 px-4 max-xl:px-2 max-xl:py-1.5 flex-grow cursor-pointer hover:bg-rose-200 flex items-center justify-center gap-2 transition-colors">
  <h2 className="text-xs font-medium capitalize  "> Send Your Interest</h2>
  <Heart size={20} className="text-rose-600" />
</button>

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
</button>


              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
