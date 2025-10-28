import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // Icono de flecha

export const MenuLinksComponent = ({
  func = () => {}, // función opcional (para cerrar el menú móvil)
  contStyles = "flex gap-10 items-center", // estilos del contenedor
  linkStyle = "hover:text-[#50509D] cursor-pointer", // estilos de cada link
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="flex justify-between px-8 py-4 relative z-50 font-bold">
      <ul className={contStyles}>
        <li className={linkStyle} onClick={func}>
          Inicio
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
            <ul className="absolute left-0 mt-2 bg-[#EBEBF5] rounded-xl py-2 w-64 border border-gray-100 font-normal shadow-2xl min-md:-left-4/12">
              <li className="px-4 py-2 hover:text-[#50509D] cursor-pointer">
                Comprar una propiedad
              </li>
              <li className="px-4 py-2 hover:text-[#50509D] cursor-pointer">
                Vender una propiedad
              </li>
              <li className="px-4 py-2 hover:text-[#50509D] cursor-pointer">
                Alquilar una propiedad
              </li>
            </ul>
          )}
        </li>

        <li className={linkStyle} onClick={func}>
          Nosotros
        </li>
        <li className={linkStyle} onClick={func}>
          Blog
        </li>

        <li>
          <button
            className="bg-[#50509D] text-white px-5 py-2 rounded-lg hover:bg-[#2D2964] hover:scale-110 transition-all duration-700"
            onClick={func}
          >
            Contacto
          </button>
        </li>
      </ul>
    </nav>
  );
};