import React from "react";
import MenuItem from "./MenuItem";

function MenuSection({ links, activeStyle, onClose, borderBottom }) {
  return (
    <div className={`w-full ${borderBottom ? "border-b border-gray-300 pb-3 mb-3" : ""}`}>
      {links.map((link, index) => (
        <MenuItem
          key={index}
          path={link.path}
          routeName={link.routeName}
          className={link.className}
          activeStyle={activeStyle}
          onClose={onClose}
        />
      ))}
    </div>
  );
}

export default MenuSection;
