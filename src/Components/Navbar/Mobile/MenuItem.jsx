import React from "react";
import { NavLink } from "react-router-dom";

function MenuItem({ path, routeName, className, activeStyle, onClose }) {
  return (
    <li className={`w-full text-gray-800 hover:text-blue-500 font-medium ${className}`}>
      {path ? (
        <NavLink
          to={path}
          className={({ isActive }) => (isActive ? `${activeStyle} text-slate-500` : undefined)}
          onClick={onClose}
        >
          {routeName}
        </NavLink>
      ) : (
        <p>{routeName}</p>
      )}
    </li>
  );
}

export default MenuItem;
