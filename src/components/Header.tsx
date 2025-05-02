// src/components/Header.tsx
import React, { useState } from 'react';
/* import logo from '@/assets/images/logo.svg'; */
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // État pour le menu burger
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); // État pour les collapses

  // Fonction pour basculer le menu burger
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fonction pour basculer un collapse spécifique
  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <header className="bg-[#FAF8F5] shadow-sm">
        {/* <div className="text-center py-6 md:py-11 lg:py-16">
          <img
            src={logo}
            alt="Logo Green & Glow"
            className="mx-auto h-6 w-auto md:h-12 lg:h-20 max-h-28 mt-6 lg:mt-0"
          />
          
        </div> */}
         {/* Main navigation container  */}


         <nav className="bg-[#E2D6CF] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          {/* Burger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4B715F]"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6 text-[#4B715F]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Main Menu */}
          <ul
            className={`flex-col md:flex-row md:flex md:space-x-8 text-sm md:text-base font-medium text-center ${
              isOpen ? "flex" : "hidden"
            } md:flex`}
          >
            {/* Accueil */}
            <li>
              <Link
                to="/"
                className="block py-2 px-4 text-[#4B715F] hover:text-[#416353] transition-colors duration-200"
              >
                Accueil
              </Link>
            </li>

            {/* Beauté Dropdown */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("beaute")}
                className="block py-2 px-4 text-[#4B715F] hover:text-[#416353] w-full text-left md:text-center transition-colors duration-200"
                aria-expanded={activeDropdown === "beaute"}
                aria-haspopup="true"
              >
                Beauté
              </button>
              {activeDropdown === "beaute" && (
                <ul className="absolute md:absolute bg-[#E2D6CF] mt-1 rounded shadow-lg z-10 left-0 w-40 text-left">
                  <li>
                    <Link
                      to="/tag/Beauté"
                      className="block px-4 py-2 hover:bg-[#d2c5bf] transition-colors duration-200"
                    >
                      Maquillage
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tag/Beauté"
                      className="block px-4 py-2 hover:bg-[#d2c5bf] transition-colors duration-200"
                    >
                      Soins du visage
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Nutrition Dropdown */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("nutrition")}
                className="block py-2 px-4 text-[#4B715F] hover:text-[#416353] w-full text-left md:text-center transition-colors duration-200"
                aria-expanded={activeDropdown === "nutrition"}
                aria-haspopup="true"
              >
                Nutrition
              </button>
              {activeDropdown === "nutrition" && (
                <ul className="absolute md:absolute bg-[#E2D6CF] mt-1 rounded shadow-lg z-10 left-0 w-40 text-left">
                  <li>
                    <Link
                      to="/tag/Recettes afro"
                      className="block px-4 py-2 hover:bg-[#d2c5bf] transition-colors duration-200"
                    >
                      Recettes
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tag/Bien-être"
                      className="block px-4 py-2 hover:bg-[#d2c5bf] transition-colors duration-200"
                    >
                      Conseils santé
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Recettes Dropdown */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("recettes")}
                className="block py-2 px-4 text-[#4B715F] hover:text-[#416353] w-full text-left md:text-center transition-colors duration-200"
                aria-expanded={activeDropdown === "recettes"}
                aria-haspopup="true"
              >
                Recettes
              </button>
              {activeDropdown === "recettes" && (
                <ul className="absolute md:absolute bg-[#E2D6CF] mt-1 rounded shadow-lg z-10 left-0 w-40 text-left">
                  <li>
                    <Link
                      to="/tag/Recettes afro"
                      className="block px-4 py-2 hover:bg-[#d2c5bf] transition-colors duration-200"
                    >
                      Recettes afro
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tag/Recettes caraïbes"
                      className="block px-4 py-2 hover:bg-[#d2c5bf] transition-colors duration-200"
                    >
                      Recettes caraïbes
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tag/Cuisine française"
                      className="block px-4 py-2 hover:bg-[#d2c5bf] transition-colors duration-200"
                    >
                      Cuisine française
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tag/Cuisine du monde"
                      className="block px-4 py-2 hover:bg-[#d2c5bf] transition-colors duration-200"
                    >
                      Cuisine du monde
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Art de Vie Dropdown */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("artdevie")}
                className="block py-2 px-4 text-[#4B715F] hover:text-[#416353] w-full text-left md:text-center transition-colors duration-200"
                aria-expanded={activeDropdown === "artdevie"}
                aria-haspopup="true"
              >
                Art de vie
              </button>
              {activeDropdown === "artdevie" && (
                <ul className="absolute md:absolute bg-[#E2D6CF] mt-1 rounded shadow-lg z-10 left-0 w-40 text-left">
                  <li>
                    <Link
                      to="/tag/Art de la table"
                      className="block px-4 py-2 hover:bg-[#d2c5bf] transition-colors duration-200"
                    >
                      Art de la table
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tag/Déco"
                      className="block px-4 py-2 hover:bg-[#d2c5bf] transition-colors duration-200"
                    >
                      Déco
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tag/Extérieur"
                      className="block px-4 py-2 hover:bg-[#d2c5bf] transition-colors duration-200"
                    >
                      Extérieur
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Soins */}
            <li>
              <Link
                to="/tag/Soins"
                className="block py-2 px-4 text-[#4B715F] hover:text-[#416353] transition-colors duration-200"
              >
                Soins
              </Link>
            </li>

            {/* Contact */}
            <li>
              <Link
                to="/contact" 
                className="block py-2 px-4 text-[#4B715F] hover:text-[#416353] transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
    </header>  
  );
};

export default Header;
