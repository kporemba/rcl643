import "../Menu/Menu.scss";
import { useState } from "react";
import { NavLink } from "react-router";

export default function Hamburger(props) {
  const { close } = props;
  return (
    <div className="menuContainer">
      <NavLink
        to="/branch-info"
        className="menuContainer__link"
        onClick={close}
      >
        <button className="menuContainer__button">
          <p>Branch Information</p>
        </button>
      </NavLink>
      <NavLink to="/events" className="menuContainer__link" onClick={close}>
        <button className="menuContainer__button">
          <p>Events</p>
        </button>
      </NavLink>
      <NavLink to="/history" className="menuContainer__link" onClick={close}>
        <button className="menuContainer__button">
          <p>History</p>
        </button>
      </NavLink>
      <NavLink to="/gallery" className="menuContainer__link" onClick={close}>
        <button className="menuContainer__button">
          <p>Photos</p>
        </button>
      </NavLink>
      <NavLink to="/cadets" className="menuContainer__link" onClick={close}>
        <button className="menuContainer__button">
          <p>Cadets</p>
        </button>
      </NavLink>
      <NavLink to="/veterans" className="menuContainer__link" onClick={close}>
        <button className="menuContainer__button">
          <p>Veterans</p>
        </button>
      </NavLink>
      <NavLink to="/contact" className="menuContainer__link" onClick={close}>
        <button className="menuContainer__button">
          <p>Contact Us</p>
        </button>
      </NavLink>
    </div>
  );
}
