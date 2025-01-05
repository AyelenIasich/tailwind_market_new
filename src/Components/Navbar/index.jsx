import React from "react";
import { NavLink } from "react-router-dom";
import { linksNavbarLeft, linksNavbarRight } from "./links";

function Navbar() {
  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light bg-white">
      <ul className="flex items-center gap-3">
        {linksNavbarLeft.map((linkNav, index) => (
          <li className={linkNav.className} key={index}>
            <NavLink
              to={linkNav.path}
              className={({ isActive }) =>
                isActive && index !== 0 ? activeStyle : undefined
              }
            >
              {linkNav.routeName}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-3">
        {linksNavbarRight.map((linkNav, index) => (
          <li className={linkNav.className} key={index}>
            {linkNav.path ? (
              <NavLink
                to={linkNav.path}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                {linkNav.routeName}
              </NavLink>
            ) : (
              <p>{linkNav.routeName}</p>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
