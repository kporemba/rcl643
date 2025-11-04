import "../Navbar/Navbar.scss";
import logo from "../../assets/images/logo.jpeg";
import menu from "../../assets/icons/menu.png";
import Hamburger from "../Menu/Menu.jsx";
import { NavLink } from "react-router";
import { useState } from "react";

function Navbar() {
  const [click, setClick] = useState(false);

  const Menu = (
    <img
      src={menu}
      className="hamburgerContainer__menu"
      onClick={() => setClick(!click)}
    />
  );
  return (
    <header className="navbar">
      <NavLink to="/rcl643">
        <img
          src={logo}
          className="navbar__logo"
          alt="Royal Canadian Legion Branch 643 Logo"
        ></img>
      </NavLink>

      <div className="navbarContainerMobile">
        <div className="HamburgerContainer">{Menu}</div>
        {click && <Hamburger close={() => setClick(false)} />}
      </div>

      <div className="navbarContainer">
        <NavLink to="/branch-info" className="link">
          <button className="navbarContainer__button">
            <p>Branch Information</p>
          </button>
        </NavLink>
        <NavLink to="/events" className="link">
          <button className="navbarContainer__button">
            <p>Events</p>
          </button>
        </NavLink>
        <NavLink to="/history" className="link">
          <button className="navbarContainer__button">
            <p>History</p>
          </button>
        </NavLink>
        <NavLink to="/gallery" className="link">
          <button className="navbarContainer__button">
            <p>Photos</p>
          </button>
        </NavLink>
        <NavLink to="/cadets" className="link">
          <button className="navbarContainer__button">
            <p>Cadets</p>
          </button>
        </NavLink>
        <NavLink to="/veterans" className="link">
          <button className="navbarContainer__button">
            <p>Veterans</p>
          </button>
        </NavLink>
        <NavLink to="/contact" className="link">
          <button className="navbarContainer__button">
            <p>Contact Us</p>
          </button>
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;
