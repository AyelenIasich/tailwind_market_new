import React from "react";
import { NavLink } from "react-router-dom";
import ChartItem from "../../ChartItem";

function DesktopNavLinks({ links, activeStyle, isChartLink = false }) {
  return (
    <ul className="hidden lg:flex items-center gap-6">
      {links.map((link, index) => (
        <li className={link.className} key={index}>
          {link.path ? (
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? `${activeStyle} text-slate-500` : undefined
              }
            >
              {link.routeName}
            </NavLink>
          ) : (
            <p>{link.routeName}</p>
          )}
        </li>
      ))}
      {isChartLink && <ChartItem />}
    </ul>
  );
}

export default DesktopNavLinks;
