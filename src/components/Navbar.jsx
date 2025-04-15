import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" bg-white drop-shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MyLogo
        </Link>

        {/* Login Button */}
        <div className="flex gap-4 items-center">
          <Link
            to="/login"
            className="bg-gradient-to-tr from-[#A62C2C] to-[#CF0F47] text-white text-center px-5 py-2 rounded text-sm shadow-md hover:shadow-lg transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
