import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { AiOutlineLogin } from "react-icons/ai";
const Navbar = () => {
  return (
    <nav className=" bg-white drop-shadow-lg z-50 fixed left-0 w-full top-0">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="">
       <div className="flex items-center justify-center gap-4 ">
        <img src={logo} alt="" className="w-11 scale-130"/>
       <div>
       <h3 className="font-bold text-2xl text-amber-500 leading-5 max-sm:text-xl">TrueTies</h3>
       <p className="text-xs text-amber-600  ml-1 capitalize max-sm:text-[11px]">Helping to love</p>
       </div>
       </div>
        </Link>

        {/* Login Button */}
        <div className="flex gap-4 items-center">
          <Link
            to="/login"
            className="slider relative text-center pr-3  py-2 rounded  transition max-sm:hidden"
          >
            About 
          </Link>
          <Link
            to="/login"
            className="slider relative text-center pr-3  py-2 rounded  transition max-sm:hidden"
          >
            Contact 
          </Link>
          <Link
            to="/login"
            className=" relative text-center flex items-center border hover:text-secondary border-primary hover:bg-white justify-center gap-2 bg-amber-500 px-6 text-white py-1.5 rounded font-semibold  transition"
          >
            <AiOutlineLogin fontSize={20}/>
            <span>Login</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
