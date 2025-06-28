import { Heart, X, Star, MessageSquare, PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMatches } from "../services/api.service";
import { useSelector } from "react-redux";

export default function Matches() {
  const user = useSelector((state) => state.user.user); 
  console.log("user",user)

  const [matches, setmatches] = useState();
  useEffect(() => {
    const getMatchedUsers = async () => {
   if (!user?._id) return;

     
     const res = await getMatches(user._id);
      console.log("Matches:", res);
      setmatches(res.data.data);
    };
    getMatchedUsers();
  }, [user]);

  return (
    <div className="space-y-6  bg-white ml-auto  py-4 px-5 pb-10 shadow-sm max-sm:px-3  max-lg:w-full ">
      <h1 className="text-2xl font-bold text-gray-900">Your Matches</h1>

      <div className="grid grid-cols-5 gap-2 max-sm:gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
        {matches?.map((match) => (
          <div
            key={match._id}
            className="bg-white rounded-lg   overflow-hidden border border-gray-300 "
          >
            <Link to={"/profileDetails"} state={match} className="relative">
              <img
                src={match.profilePhoto || "/placeholder.svg"}
                alt={match.fullName}
                className="w-full h-54 object-cover"
              />
            </Link>

            <div className="p-3 pt-6 px-2 ">
              <h3 className=" font-semibold flex items-center leading-1   w-full justify-between">
                <span> {match.fullName}</span>
                <span> {match.age}</span>
              </h3>
              <br />
              <h3 className="capitalize text-sm leading-2">
                <span className="font-semibold text-amber-500 tracking-wide">
                  compatiblity-
                </span>
                <span className="font-semibold"> 90%</span>
              </h3>

              <div className="flex items-center justify-start flex-wrap gap-1 py-4 max-lg:pb-2">
                <p className="text-sm w-full capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50">
                  <span className="font-medium mr-1 ">height-</span>
                  <span className="text-black">{match.height}&quot;</span>
                </p>
                <p className="text-sm w-full capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50">
                  <span className="font-medium mr-1 ">marriage status-</span>
                  <span className="text-black">{match.marriageStatus}</span>
                </p>
                <p className="text-sm w-full capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50">
                  <span className="font-medium mr-1 ">religion-</span>
                  <span className="text-black">{match.religion}</span>
                </p>
                <p className="text-sm w-full capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50">
                  <span className="font-medium mr-1 ">region-</span>
                  <span className="text-black">{match.metroCities}</span>
                </p>
                <p className="text-sm w-full capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50">
                  <span className="font-medium mr-1 ">working status-</span>
                  <span className="text-black">{match.workingStatus}</span>
                </p>
                <p className="text-sm w-full capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50">
                  <span className="font-medium mr-1 ">education-</span>
                  <span className="text-black">
                    {match.educationQualifications}
                  </span>
                </p>
              </div>

              <div className="flex flex-col max-sm:grid max-sm:grid-cols-2 sm:space-y-2 max-sm:gap-1">
                <button className="p-2 rounded-lg bg-rose-100 px-4 max-xl:px-2 max-xl:py-1.5 flex-grow cursor-pointer hover:bg-rose-200 flex items-center justify-center gap-2 transition-colors">
                  <h2 className="text-xs font-medium capitalize  ">
                    {" "}
                    Send Your Interest
                  </h2>
                  <Heart size={20} className="text-rose-600" />
                </button>

                <button className="p-2 rounded-lg bg-gray-100 px-4 flex-grow  max-xl:px-2 max-xl:py-1.5 cursor-pointer hover:bg-gray-200 flex items-center justify-center gap-2 transition-colors">
                  <h2 className="text-xs font-medium capitalize  ">
                    Send Message
                  </h2>
                  <MessageSquare size={20} className="text-blue-500" />
                </button>

                <button className="p-2 rounded-lg bg-gray-100 px-4 flex-grow max-xl:px-2 max-xl:py-1.5 cursor-pointer hover:bg-gray-200 flex items-center justify-center gap-2 transition-colors">
                  <h2 className="text-xs font-medium capitalize  ">
                    Shortlist Profile
                  </h2>
                  <Star size={20} className="text-amber-500" />
                </button>

                <button className="p-2 rounded-lg bg-green-100 px-4 flex-grow max-xl:px-2 max-xl:py-1.5 cursor-pointer hover:bg-green-200 flex items-center justify-center gap-2 transition-colors">
                  <h2 className="text-xs font-medium capitalize  ">
                    {" "}
                    See Phone Number
                  </h2>
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
