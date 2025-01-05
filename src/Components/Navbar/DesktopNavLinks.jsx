import React from "react";
import { NavLink } from "react-router-dom";

function DesktopNavLinks({links, activeStyle}) {
  return (
    <ul className="hidden md:flex items-center gap-6">
      {links.map((link, index) => (
        <li className={link.className} key={index}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              isActive && index !== 0 ? activeStyle : undefined
            }
          >
            {link.routeName}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default DesktopNavLinks;
