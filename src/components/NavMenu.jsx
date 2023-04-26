import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/navMenu.css";
export const NavMenu = (props) => {
  const { label, href,color,fontSize,fontFamily } = props;
  return (
    <div className="nav-menu-container">
      <NavLink
        to={href}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "non-active"
        }
        style={{color,fontSize,fontFamily}}
      >
        {label}
      </NavLink>
    </div>
  );
};
