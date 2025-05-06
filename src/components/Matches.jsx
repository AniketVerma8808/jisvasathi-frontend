import { Heart, X, Star, MessageSquare } from "lucide-react";

export default function Matches() {
  const matches = [
    {
      id: 1,
      name: "Jessica Parker",
      age: 28,
      location: "New York, NY",
      occupation: "Marketing Manager",
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 31,
      location: "San Francisco, CA",
      occupation: "Software Engineer",
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      id: 3,
      name: "Priya Sharma",
      age: 27,
      location: "Chicago, IL",
      occupation: "Financial Analyst",
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      id: 4,
      name: "David Wilson",
      age: 30,
      location: "Austin, TX",
      occupation: "Architect",
      image: "/placeholder.svg?height=300&width=250",
    },
  ];

  return (
    <div className="space-y-6 bg-white ml-auto px-8 py-4 rounded-lg shadow-sm max-xl:mt-18 max-lg:w-full max-lg:pb-22">
      <h1 className="text-2xl font-bold text-gray-900">Your Matches</h1>

      <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
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
              <h3 className="text-lg font-semibold">
                {match.name}, {match.age}
              </h3>
              <p className="text-sm text-gray-600">{match.occupation}</p>
              <p className="text-sm text-gray-500">{match.location}</p>

              <div className="mt-4 flex justify-start flex-wrap gap-4 max-sm:gap-2">
                <button className="p-2 rounded-full bg-gray-100 px-4 flex-grow  cursor-pointer hover:bg-gray-200 flex items-center justify-center gap-2 transition-colors">
                  <h2 className="text-sm font-medium capitalize">shortlist</h2>
                  <Star size={20} className="text-amber-500" />
                </button>
                <button className="p-2 rounded-full bg-gray-100 px-4 flex-grow  cursor-pointer hover:bg-gray-200 flex items-center justify-center gap-2 transition-colors">
                  <h2 className="text-sm font-medium capitalize">message</h2>
                  <MessageSquare size={20} className="text-blue-500" />
                </button>
                <button className="p-2 rounded-full bg-rose-100 px-4 flex-grow  cursor-pointer hover:bg-rose-200 flex items-center justify-center gap-2 transition-colors">
                  <h2 className="text-sm font-medium capitalize">interested</h2>
                  <Heart size={20} className="text-rose-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
