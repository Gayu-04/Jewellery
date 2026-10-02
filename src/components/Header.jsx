
import logoimg from "../assets/logosaaz.jpg";
import { useState, useEffect, useContext } from "react";
import UserContext from "../utils/UserContext";
import { Link } from "react-router-dom";
import Profile from "../assets/profile.png";
import Cartimg from "../assets/shoppingcart.png";
import { useSelector } from "react-redux"; 


const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    console.log("UseEffect called");
  }, [btnNameReact]);
   

  //selector- is hook in react
  const cart= useSelector((store) => store.cart.items);


  return (
    <header className="flex items-center justify-between px-8 py-3 bg-white shadow-md">

      {/* Logo */}
      <div className="logo-container">
        <img
          className="w-16 h-16 rounded-full object-cover border-2 border-yellow-600"
          src={logoimg}
          alt="Logo"
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
              <img
                className="w-10 h-10 rounded-full object-cover border-2 border-yellow-600"
                src={Profile}
                alt="Profile"
              />
            </Link>
          </li>

          <li>
            <Link
              to="/cart"
              className="relative inline-block"
              >
              <img
                className="w-10 h-10 rounded-full object-cover border-2 border-yellow-600"
                src={Cartimg}
                alt="Cart" 
                
              />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
               </span>
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

