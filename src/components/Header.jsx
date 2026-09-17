
import Profile from "../assets/profile.jpg";
import { useState, useEffect, useContext } from "react";
import UserContext from "../utils/UserContext";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    console.log("UseEffect called");
  }, [btnNameReact]);

  return (
    <header className="flex items-center justify-between px-8 py-3 bg-white shadow-md">

      {/* Logo */}
      <div className="logo-container">
        <img
          className="w-16 h-16 rounded-full object-cover border-2 border-yellow-600"
          src={Profile}
          alt="Profile"
        />
      </div>

      {/* Navigation */}
      <nav className="nav-items">
        <ul className="flex items-center gap-8">

          <li>
            <Link
              to="/"
              className="text-gray-700 font-medium hover:text-yellow-600 transition duration-200"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/profile"
              className="text-gray-700 font-medium hover:text-yellow-600 transition duration-200"
            >
              Profile
            </Link>
          </li>

          <li>
            <Link
              to="/cart"
              className="text-gray-700 font-medium hover:text-yellow-600 transition duration-200"
            >
              Cart
            </Link>
          </li>

          <li>
            <button
              className="px-5 py-2 rounded-lg bg-yellow-600 text-white font-medium hover:bg-yellow-700 transition duration-200"
              onClick={() => {
                setBtnNameReact(
                  btnNameReact === "Login" ? "Logout" : "Login"
                );
              }}
            >
              {btnNameReact}
            </button>
          </li>
         <li className="text-gray-900 font-medium transition duration-200">
          {loggedInUser}
          </li>

         
        </ul>
      </nav>
    </header>
  );
};

export default Header;

