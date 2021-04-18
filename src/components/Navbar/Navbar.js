import React, { useContext } from "react";
import "./Navbar.css";
import logo from '../../images/logo.svg';

// icon import from react icons
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthContext";

const Navbar = () => {
  const [ auth, setAuth] = useContext(AuthContext)
  const location = useLocation()
  let navMargin;

  if(location.pathname === "/services/book"){
    navMargin = 240
  }
  else if(location.pathname === "/services/bookinglist"){
    navMargin = 240
  }
  else if(location.pathname === "/services/makereview"){
    navMargin = 240
  }
  else if(location.pathname === "/admin/orderlist"){
    navMargin = 240
  }
  else if(location.pathname === "/admin/addservice"){
    navMargin = 240
  }
  else if(location.pathname === "/admin/makeadmin"){
    navMargin = 240
  }
  else if(location.pathname === "/admin/manageservices"){
    navMargin = 240
  }
  else{
    navMargin = 0
  }
  return (
    <div className="full_header">
     <header className={navMargin == 0 ? "full_nav" : "small_nav"}>
      <div className="nav_top_container">
        <div className="nav_top_container_stats">
          <div>
            <FaFacebookF className="nav_social_icon" />
            <FaTwitter className="nav_social_icon" />
            <FaInstagram className="nav_social_icon" />
          </div>
          <div>
            <p>Opening Time: Mon‑Fri 08:00‑18:00 Sat‑Sun 10:00‑17:00</p>
          </div>
          <div>
            <p>Call now: 1-888-777-55555</p>
          </div>
        </div>
      </div>
      <nav className="nav_bottom_container">
        <div className="nav_logo_container">
          <img
            src= {logo}
            alt="logo"
          />
          <h3>Ninja Repair</h3>
        </div>
        <div className="nav_link_container">
            <ul className="nav_links">              
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services/book">Services</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/admin/orderlist">Admin</Link></li>  
                <li><Link to="/login">LogIn </Link></li>
                <li className="userName">{auth.displayName}</li>
            </ul>
        </div>
      </nav>
      </header>
    </div>
  );
};

export default Navbar;
