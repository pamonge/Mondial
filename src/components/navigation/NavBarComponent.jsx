import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuLinksComponent } from "./MenuLinksComponent";
import logo from "../../assets/logo/isologo.png";
import navBarStyles from "../../styles/navBarComponentStyles";

export const NavBarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className={`${navBarStyles.navBarContainer}`}>
      {/* Logo */}
      <div>
        <Link to="/">
          <img
            className={navBarStyles.logo}
            src={logo}
            alt="Mondial Inmobiliaria"
          />
        </Link>
      </div>

      {/* Navbar de escritorio */}
      <div className="hidden lg:flex">
        <MenuLinksComponent />
      </div>

      {/* Botón hamburguesa (visible solo en móvil) */}
      <button
        className={`${navBarStyles.hamburgerButton}`}
        onClick={toggleMenu}
        aria-label="Menú"
        aria-expanded={isOpen}
      >
        <span
          className={`${navBarStyles.hamburgerLine} ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`${navBarStyles.hamburgerLine} ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`${navBarStyles.hamburgerLine} ${
            isOpen ? "-rotate-45 -translate-y-2.5" : ""
          }`}
        ></span>
      </button>

      {/* Menú móvil (slide desde la derecha) */}
      <div
        className={`${navBarStyles.mobileMenu} ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <MenuLinksComponent
          func={closeMenu}
          contStyles={navBarStyles.mobileLinksContainer}
          linkStyle={navBarStyles.mobileLink}
        />
      </div>
    </div>
  );
};