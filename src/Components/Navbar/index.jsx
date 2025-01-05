import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MobileMenu from "./Mobile/MobileMenu";
import DesktopNavLinks from "./Desktop/DesktopNavLinks";
import { linksNavbarLeft, linksNavbarRight } from "./links";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeStyle = "underline underline-offset-4";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light bg-white shadow-md">
    
      {/* Desktop Left Links */}
      <div className="flex items-center">
        {/* Logo or Brand */}
        <div className="text-lg font-semibold pe-3">
          <NavLink to="/" className="text-slate-600 ">TailShop</NavLink>
        </div>
        <DesktopNavLinks links={linksNavbarLeft} activeStyle={activeStyle} />
      </div>

      {/* Desktop Right Links */}
      <DesktopNavLinks links={linksNavbarRight} activeStyle={activeStyle} isChartLink={true}/>

      {/* Hamburger Menu Button */}
      <button
        className="lg:hidden flex items-center text-lg"
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
