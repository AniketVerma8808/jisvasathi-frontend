export default function Notifications() {
  const notifications = [
    {
      name: "Nidhi Dabas",
      date: "28 Apr",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      name: "Priyanka Bhati",
      date: "27 Apr",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      name: "Ami Srivastava",
      date: "24 Apr",
      image: "https://randomuser.me/api/portraits/women/15.jpg",
    },
    {
      name: "Suman Tanwar",
      date: "24 Apr",
      image: "https://randomuser.me/api/portraits/women/18.jpg",
    },
    {
      name: "Poonam Singh",
      date: "23 Apr",
      image: "https://randomuser.me/api/portraits/women/20.jpg",
    },
  ];

  return (
    <div className="w-full max-w-72 h-full bg-white px-4 py-6 overflow-y-auto ">
      <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
        <span className="text-gray-700">Notifications</span>
        <span className="bg-red-500 text-white rounded-full px-2 py-0.5 text-xs font-medium">
          {notifications.length}
        </span>
      </h3>

      <div className="space-y-3">
        {notifications.map((n, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-lg px-3 py-2 flex items-start gap-3"
          >
            <img
              src={n.image}
              alt={n.name}
              className="w-10 h-10 rounded-full object-cover mt-1"
            />
            <div className="flex-1">
              <p className="text-cyan-600 font-medium cursor-pointer mb-2">
                {n.name}
              </p>
              <p className="text-sm leading-snug mb-1">
                has sent you an Interest
              </p>
              <p className="text-xs text-gray-500 mt-1">{n.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
