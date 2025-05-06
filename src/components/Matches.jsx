import { FaHeart, FaStar, FaCommentDots, FaBookmark } from "react-icons/fa";

const matchData = [
  {
    name: "Vani Patel",
    age: 27,
    height: "5ft 1in",
    location: "Korba",
    caste: "Patel",
    occupation: "Analyst",
    income: "Rs. 7.5 - 10 Lakh p.a",
    education: "M.Sc",
    maritalStatus: "Never Married",
    lastSeen: "27-Apr-25",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "UXUA8275",
    age: 26,
    height: "5ft 0in",
    location: "Indore",
    caste: "Patel-Leva Patel",
    occupation: "Business Owner/Entrepreneur",
    income: "Rs. 5 - 7.5 Lakh p.a",
    education: "B.Sc",
    maritalStatus: "Never Married",
    lastSeen: "26-Mar-25",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
  },
  {
    name: "Vani Patel",
    age: 27,
    height: "5ft 1in",
    location: "Korba",
    caste: "Patel",
    occupation: "Analyst",
    income: "Rs. 7.5 - 10 Lakh p.a",
    education: "M.Sc",
    maritalStatus: "Never Married",
    lastSeen: "27-Apr-25",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "UXUA8275",
    age: 26,
    height: "5ft 0in",
    location: "Indore",
    caste: "Patel-Leva Patel",
    occupation: "Business Owner/Entrepreneur",
    income: "Rs. 5 - 7.5 Lakh p.a",
    education: "B.Sc",
    maritalStatus: "Never Married",
    lastSeen: "26-Mar-25",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
  },
  {
    name: "Vani Patel",
    age: 27,
    height: "5ft 1in",
    location: "Korba",
    caste: "Patel",
    occupation: "Analyst",
    income: "Rs. 7.5 - 10 Lakh p.a",
    education: "M.Sc",
    maritalStatus: "Never Married",
    lastSeen: "27-Apr-25",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "UXUA8275",
    age: 26,
    height: "5ft 0in",
    location: "Indore",
    caste: "Patel-Leva Patel",
    occupation: "Business Owner/Entrepreneur",
    income: "Rs. 5 - 7.5 Lakh p.a",
    education: "B.Sc",
    maritalStatus: "Never Married",
    lastSeen: "26-Mar-25",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
  },
  {
    name: "Vani Patel",
    age: 27,
    height: "5ft 1in",
    location: "Korba",
    caste: "Patel",
    occupation: "Analyst",
    income: "Rs. 7.5 - 10 Lakh p.a",
    education: "M.Sc",
    maritalStatus: "Never Married",
    lastSeen: "27-Apr-25",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "UXUA8275",
    age: 26,
    height: "5ft 0in",
    location: "Indore",
    caste: "Patel-Leva Patel",
    occupation: "Business Owner/Entrepreneur",
    income: "Rs. 5 - 7.5 Lakh p.a",
    education: "B.Sc",
    maritalStatus: "Never Married",
    lastSeen: "26-Mar-25",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
  },
  {
    name: "Vani Patel",
    age: 27,
    height: "5ft 1in",
    location: "Korba",
    caste: "Patel",
    occupation: "Analyst",
    income: "Rs. 7.5 - 10 Lakh p.a",
    education: "M.Sc",
    maritalStatus: "Never Married",
    lastSeen: "27-Apr-25",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "UXUA8275",
    age: 26,
    height: "5ft 0in",
    location: "Indore",
    caste: "Patel-Leva Patel",
    occupation: "Business Owner/Entrepreneur",
    income: "Rs. 5 - 7.5 Lakh p.a",
    education: "B.Sc",
    maritalStatus: "Never Married",
    lastSeen: "26-Mar-25",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
  },
  {
    name: "Vani Patel",
    age: 27,
    height: "5ft 1in",
    location: "Korba",
    caste: "Patel",
    occupation: "Analyst",
    income: "Rs. 7.5 - 10 Lakh p.a",
    education: "M.Sc",
    maritalStatus: "Never Married",
    lastSeen: "27-Apr-25",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "UXUA8275",
    age: 26,
    height: "5ft 0in",
    location: "Indore",
    caste: "Patel-Leva Patel",
    occupation: "Business Owner/Entrepreneur",
    income: "Rs. 5 - 7.5 Lakh p.a",
    education: "B.Sc",
    maritalStatus: "Never Married",
    lastSeen: "26-Mar-25",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
  },
];

const Matches = () => {
  return (
    <div className="p-4 space-y-4">
      {matchData.map((profile, index) => (
        <div
          key={index}
          className="flex bg-white shadow-md border border-gray-200 rounded-xl overflow-hidden"
        >
          <img
            src={profile.image}
            alt={profile.name}
            className="w-32  object-cover"
          />
          <div className="p-4 flex-1">
            <p className="text-xs text-gray-500 mb-1">
              Last seen on {profile.lastSeen}
            </p>
            <h3 className="text-lg font-bold text-gray-800 mb-1">
              {profile.name}, {profile.age}
            </h3>
            <p className="text-sm text-gray-600">
              {profile.height} • {profile.location} • {profile.caste}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              {profile.occupation} • {profile.income}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              {profile.education} • {profile.maritalStatus}
            </p>
            <div className="flex flex-wrap gap-4 mt-3 text-sm text-pink-600 font-medium">
              <button className="flex items-center gap-1 hover:text-pink-700">
                <FaHeart /> Interest
              </button>
              <button className="flex items-center gap-1 hover:text-pink-700">
                <FaStar /> Super Interest
              </button>
              <button className="flex items-center gap-1 hover:text-pink-700">
                <FaBookmark /> Shortlist
              </button>
              <button className="flex items-center gap-1 hover:text-pink-700">
                <FaCommentDots /> Chat
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Matches;
