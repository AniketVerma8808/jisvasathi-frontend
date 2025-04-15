import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          MyLogo
        </Link>
        <div className="flex gap-4 items-center">
          <Link
            to="/login"
            className="bg-gradient-to-tr from-[#A62C2C] to-[#CF0F47] text-white text-center px-4 py-1.5 rounded  text-sm"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
