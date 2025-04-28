// src/components/Header.tsx
import React, { useState } from 'react';
import logo from '../assets/images/logo.svg'; 
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
        <div className="text-center py-6 md:py-11 lg:py-16">
          <img
            src={logo}
            alt="Logo Green & Glow"
            className="mx-auto h-6 w-auto md:h-12 lg:h-20 max-h-28 mt-6 lg:mt-0"
          />
        </div>
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
  



{/* <nav
  className="relative flex w-full flex-nowrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4"
  data-twe-navbar-ref>
  <div className="flex w-full flex-wrap items-center justify-between px-3">

    <button
      className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
      type="button"
      data-twe-collapse-init
      data-twe-target="#navbarSupportedContent8"
      aria-controls="navbarSupportedContent8"
      aria-expanded="false"
      aria-label="Toggle navigation">

      <span
        className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clip-rule="evenodd" />
        </svg>
      </span>
    </button>

   
    <div
      className="!visible mt-2 hidden flex-grow basis-[100%] items-center justify-center lg:mt-0 lg:!flex lg:basis-auto"
      id="navbarSupportedContent8"
      data-twe-collapse-item>
      
      <ul
        className="list-style-none flex flex-col ps-0 lg:mt-1 lg:flex-row"
        data-twe-navbar-nav-ref>
       
        <li
          className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
          data-twe-nav-item-ref>
          <a
            className="text-black dark:text-white lg:px-2"
            aria-current="page"
            href="#"
            data-twe-nav-link-ref
            >Home</a
          >
        </li>
       
        <li
          className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
          data-twe-nav-item-ref>
          <a
            className="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
            href="#"
            data-twe-nav-link-ref
            >Link</a
          >
        </li>
        
        <li
          className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
          data-twe-nav-item-ref
          data-twe-dropdown-ref>
          
          <a
            className="flex items-center text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
            href="#"
            type="button"
            id="dropdownMenuButton2"
            data-twe-dropdown-toggle-ref
            aria-expanded="false">
            Dropdown
            <span className="ms-1 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd" />
              </svg>
            </span>
          </a>
          <ul
            className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
            aria-labelledby="dropdownMenuButton1"
            data-twe-dropdown-menu-ref>
            <li>
              <a
                className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                href="#"
                data-twe-dropdown-item-ref
                >Action</a
              >
            </li>
            <li>
              <a
                className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                href="#"
                data-twe-dropdown-item-ref
                >Another action</a
              >
            </li>
            <li>
              <a
                className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                href="#"
                data-twe-dropdown-item-ref
                >Something else here</a
              >
            </li>
          </ul>
        </li>
        
        <li
          className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
          data-twe-nav-link-ref>
          <a
            className="pointer-events-none text-black/30 dark:text-white/30 lg:px-2"
            >Disabled</a
          >
        </li>
      </ul>
    </div>
  </div>
</nav> */}
    </header>  
  );
};

export default Header;
