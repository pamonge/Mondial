import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

export const MenuLinksComponent = ({
  contStyles = "flex gap-10 items-center",
  linkStyle = "hover:text-[#50509D] cursor-pointer border py-1 px-6 rounded-lg border-transparent transition-all ease-in-out duration-700 hover:border-[#141230]",
  func = () => {}, // viene del NavBar (closeMenu)
  }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const closeDropdown = () => setIsOpen(false);

  // 🔥 CIERRA TODO SIEMPRE: dropdown + menú móvil
  const handleLinkClick = () => {
    closeDropdown();
    func();
  };

  return (
    <nav className="flex justify-between px-8 py-4 relative z-50">
      <ul className={contStyles}>

        {/* Inicio */}
        <li className={linkStyle}>
          <NavLink to="/" onClick={handleLinkClick}>Inicio</NavLink>
        </li>

        {/* Dropdown Servicios */}
        <li className="relative">
          <button
            onClick={toggleDropdown}
            className={`flex items-center gap-1 ${linkStyle}`}
          >
            Servicios
            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {isOpen && (
            <ul className="absolute -left-12 mt-2 bg-[#EBEBF5] rounded-xl py-2 w-64 border border-gray-100 shadow-2xl">

              <li className="px-4 py-2 hover:text-[#50509D]">
                <NavLink to="/buy" onClick={handleLinkClick}>
                  Comprar una propiedad
                </NavLink>
              </li>

              <li className="px-4 py-2 hover:text-[#50509D]">
                <NavLink to="/sell" onClick={handleLinkClick}>
                  Vender una propiedad
                </NavLink>
              </li>

              <li className="px-4 py-2 hover:text-[#50509D]">
                <NavLink to="/rent" onClick={handleLinkClick}>
                  Alquilar una propiedad
                </NavLink>
              </li>

            </ul>
          )}
        </li>

        {/* Nosotros */}
        <li className={linkStyle}>
          <NavLink to="/us" onClick={handleLinkClick}>Nosotros</NavLink>
        </li>

        {/* Blog */}
        <li className={linkStyle}>
          <NavLink to="/news" onClick={handleLinkClick}>Blog</NavLink>
        </li>

        {/* Contacto */}
        <li>
          <button className="bg-[#50509D] text-white px-5 py-2 rounded-lg hover:bg-[#2D2964] hover:scale-110 transition-all duration-700">
            <NavLink to="/contact" onClick={handleLinkClick}>Contacto</NavLink>
          </button>
        </li>

      </ul>
    </nav>
  );
};