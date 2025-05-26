import { Heart, X, Star, MessageSquare, PhoneCall } from "lucide-react";

export default function Matches() {
  const matches = [
    {
      id: 1,
      name: "Jessica Parker",
      age: 32,
      location: "New York, NY",
      occupation: "Marketing Manager",
      image: "/placeholder.svg?height=300&width=250",
      height: "5'1",
      marriageStaus: "single",
      region: "Rohtak, Haryana",
      religion: "Hindu, Jat",
      workingStatus: "not working",
      education: "master's degree in Arts/Design"
    },
    {
      id: 2,
      name: "Rahul Verma",
      age: 30,
      location: "Delhi, India",
      occupation: "Software Engineer",
      image: "/placeholder.svg?height=300&width=250",
      height: "5'9",
      marriageStaus: "single",
      region: "Delhi",
      religion: "Hindu, Brahmin",
      workingStatus: "working",
      education: "bachelor's degree in Computer Science"
    },
    {
      id: 3,
      name: "Ayesha Khan",
      age: 27,
      location: "Mumbai, India",
      occupation: "Fashion Designer",
      image: "/placeholder.svg?height=300&width=250",
      height: "5'5",
      marriageStaus: "single",
      region: "Mumbai, Maharashtra",
      religion: "Muslim",
      workingStatus: "working",
      education: "master's degree in Fashion Design"
    },
    {
      id: 4,
      name: "David Lee",
      age: 33,
      location: "Los Angeles, CA",
      occupation: "Product Manager",
      image: "/placeholder.svg?height=300&width=250",
      height: "6'0",
      marriageStaus: "divorced",
      region: "California",
      religion: "Christian",
      workingStatus: "working",
      education: "MBA"
    },
    {
      id: 5,
      name: "Sonal Gupta",
      age: 26,
      location: "Chandigarh, India",
      occupation: "Teacher",
      image: "/placeholder.svg?height=300&width=250",
      height: "5'4",
      marriageStaus: "single",
      region: "Chandigarh",
      religion: "Hindu, Kayastha",
      workingStatus: "working",
      education: "bachelor's degree in Education"
    },
    {
      id: 6,
      name: "Mohammed Arif",
      age: 35,
      location: "Hyderabad, India",
      occupation: "Civil Engineer",
      image: "/placeholder.svg?height=300&width=250",
      height: "5'10",
      marriageStaus: "widowed",
      region: "Telangana",
      religion: "Muslim",
      workingStatus: "working",
      education: "bachelor's degree in Civil Engineering"
    },
    {
      id: 7,
      name: "Emily Smith",
      age: 29,
      location: "Chicago, IL",
      occupation: "Graphic Designer",
      image: "/placeholder.svg?height=300&width=250",
      height: "5'6",
      marriageStaus: "single",
      region: "Illinois",
      religion: "Christian",
      workingStatus: "working",
      education: "bachelor's degree in Fine Arts"
    },
    {
      id: 8,
      name: "Ankit Sharma",
      age: 31,
      location: "Jaipur, India",
      occupation: "Entrepreneur",
      image: "/placeholder.svg?height=300&width=250",
      height: "5'8",
      marriageStaus: "single",
      region: "Jaipur, Rajasthan",
      religion: "Hindu, Rajput",
      workingStatus: "self-employed",
      education: "MBA"
    }
  ];

  return (
    <div className="space-y-6  bg-white ml-auto  py-4 px-5  shadow-sm  max-lg:w-full ">
      <h1 className="text-2xl font-bold text-gray-900">Your Matches</h1>

      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
        {matches.map((match) => (
          <div
            key={match.id}
            className="bg-white rounded-lg  overflow-hidden shadow-sm"
          >
            <div className="relative">
              <img
                src={match.image || "/placeholder.svg"}
                alt={match.name}
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="p-4">
             <div className="flex justify-between items-center flex-wrap gap-1">
             <h3 className="text-lg font-semibold">
                {match.name}
              </h3>
              <br/>
              <h3 className="capitalize text-sm"><span className="font-semibold text-amber-500 tracking-wide" >compatiblity-</span><span className="font-semibold"> 90%</span></h3>
             </div>
            <div className="flex items-center justify-center flex-wrap gap-1 py-4 max-lg:pb-2"> 
               <p className="w-full text-sm capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50"><span className="font-medium mr-1 ">age-</span><span className="text-black">{match.age} yrs</span></p>
              <p className="w-full text-sm capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50"><span className="font-medium mr-1 ">height-</span><span className="text-black">{match.height}&quot;</span></p>
              <p className="w-full text-sm capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50"><span className="font-medium mr-1 ">marriage status-</span><span className="text-black">{match.marriageStaus}</span></p>
              <p className="w-full text-sm capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50"><span className="font-medium mr-1 ">religion-</span><span className="text-black">{match.religion}</span></p>
              <p className="w-full text-sm capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50"><span className="font-medium mr-1 ">region-</span><span className="text-black">{match.region}</span></p>
              <p className="w-full text-sm capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50"><span className="font-medium mr-1 ">working status-</span><span className="text-black">{match.workingStatus}</span></p>
              <p className="w-full text-sm capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50"><span className="font-medium mr-1 ">education-</span><span className="text-black">{match.education}</span></p></div>
             
          

              <div className="mt-4 grid grid-cols-2 gap-2">
              <button className="p-2 rounded-lg bg-rose-100 px-4 max-xl:px-2 max-xl:py-1.5 flex-grow cursor-pointer hover:bg-rose-200 flex items-center justify-center gap-2 transition-colors">
  <h2 className="text-xs font-medium capitalize "> Send Your Interest</h2>
  <Heart size={20} className="text-rose-600" />
</button>

<button className="p-2 rounded-lg bg-gray-100 px-4 flex-grow  max-xl:px-2 max-xl:py-1.5 cursor-pointer hover:bg-gray-200 flex items-center justify-center gap-2 transition-colors">
  <h2 className="text-xs font-medium capitalize ">Send Message</h2>
  <MessageSquare size={20} className="text-blue-500" />
</button>

<button className="p-2 rounded-lg bg-gray-100 px-4 flex-grow max-xl:px-2 max-xl:py-1.5 cursor-pointer hover:bg-gray-200 flex items-center justify-center gap-2 transition-colors">
  <h2 className="text-xs font-medium capitalize ">Shortlist Profile</h2>
  <Star size={20} className="text-amber-500" />
</button>

<button className="p-2 rounded-lg bg-green-100 px-4 flex-grow max-xl:px-2 max-xl:py-1.5 cursor-pointer hover:bg-green-200 flex items-center justify-center gap-2 transition-colors">
  <h2 className="text-xs font-medium capitalize "> See Phone Number</h2>
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
