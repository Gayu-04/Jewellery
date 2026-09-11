import Profile from "../assets/profile.jpg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  useEffect(() => {
    console.log("UseEffect called");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Profile} alt="Profile" />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/profile">Profile</Link>
          </li>

          <li>
            <Link to="/cart">Cart</Link>
          </li>

          <li>
            <button
              className="login"
              onClick={() => {
                setBtnNameReact(
                  btnNameReact === "Login" ? "Logout" : "Login"
                );
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;