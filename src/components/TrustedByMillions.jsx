import { HiUserGroup, HiShieldCheck, HiLockClosed } from "react-icons/hi";

const TrustedByMillions = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-50 to-blue-50 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">
          Why People Trust Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
            <div className="flex justify-center mb-4">
              <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full">
                <HiUserGroup className="text-3xl" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-700">
              Best Matches
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              We use advanced algorithms to help you find your perfect partner.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
            <div className="flex justify-center mb-4">
              <div className="bg-pink-100 text-pink-600 p-4 rounded-full">
                <HiShieldCheck className="text-3xl" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-700">
              Verified Profiles
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Each profile goes through a verification process to ensure safety.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 text-green-600 p-4 rounded-full">
                <HiLockClosed className="text-3xl" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-700">
              100% Privacy
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Your information is completely secure and never shared.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedByMillions;
