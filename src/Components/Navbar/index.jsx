import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import DesktopNavLinks from "./DesktopNavLinks";
import { linksNavbarLeft, linksNavbarRight } from "./links";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeStyle = "underline underline-offset-4";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light bg-white shadow-md">
      <div className="flex items-center">
        {/* Logo or Brand */}
        <div className="text-lg font-semibold pe-3">
          <NavLink to="/">TailShop</NavLink>
        </div>

        {/* Desktop Left Links */}
        <DesktopNavLinks links={linksNavbarLeft} activeStyle={activeStyle} />
      </div>

      {/* Desktop Right Links */}
      <DesktopNavLinks links={linksNavbarRight} activeStyle={activeStyle} />

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden flex items-center text-lg"
        onClick={toggleMenu}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isOpen}
        linksNavbarLeft={linksNavbarLeft}
        linksNavbarRight={linksNavbarRight}
        activeStyle={activeStyle}
        onClose={() => setIsOpen(false)}
      />
    </nav>
  );
}

export default Navbar;
