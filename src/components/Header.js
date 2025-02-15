import { useState } from "react";

import { Link } from "react-router-dom";
const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src="food.png" alt="Food Logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>Cart</li>
            <button
            className="login"
            onClick={()=> {
              btnNameReact ==="Login"
              ? setBtnNameReact("LogOut")
              : setBtnNameReact("Login");
            }}
              >
                {btnNameReact}
              </button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;