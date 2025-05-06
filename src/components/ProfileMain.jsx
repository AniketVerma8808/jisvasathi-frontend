export default function ProfileMain() {
  return (
    <div>
      <div className="bg-white shadow rounded p-4 mb-6">
        <h2 className="text-lg font-semibold mb-2">Your Activity Summary</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-gray-50 p-3 rounded shadow-sm">
            Pending Invitations: 1
          </div>
          <div className="bg-gray-50 p-3 rounded shadow-sm">
            Accepted Invitations: 1
          </div>
          <div className="bg-gray-50 p-3 rounded shadow-sm">
            Recent Visitors: 18
          </div>
          <div className="bg-gray-50 p-3 rounded shadow-sm">
            Contacts Viewed: 17
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded p-4">
        <h3 className="text-sm font-semibold mb-2">Improve your Profile</h3>
        <div className="flex items-center justify-between">
          <div className="text-gray-600 text-sm">
            Members with Photos get twice as many responses
          </div>
          <button className="px-4 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600">
            Add Photo
          </button>
        </div>
      </div>
    </div>
  );
}
