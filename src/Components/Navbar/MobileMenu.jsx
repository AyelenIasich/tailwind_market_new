import React from "react";
import MenuSection from "./MenuSection";

function MobileMenu({ isOpen, linksNavbarLeft, linksNavbarRight, activeStyle, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-16 left-0 w-full bg-white shadow-lg border-t border-gray-200">
      <ul className="flex flex-col items-start gap-2 py-4 px-6">
        {/* Left Section */}
        <MenuSection
          links={linksNavbarLeft}
          activeStyle={activeStyle}
          onClose={onClose}
          borderBottom
        />
        
        {/* Right Section */}
        <MenuSection
          links={linksNavbarRight}
          activeStyle={activeStyle}
          onClose={onClose}
        />
      </ul>
    </div>
  );
}

export default MobileMenu;
