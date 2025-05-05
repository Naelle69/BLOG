import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Fermer le menu et le dropdown lors du redimensionnement
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fermer le dropdown en cliquant en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.querySelector('[data-twe-dropdown-menu-ref]');
      const toggle = document.querySelector('[data-twe-dropdown-toggle-ref]');
      
      if (
        dropdown && 
        toggle && 
        !dropdown.contains(event.target as Node) && 
        !toggle.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-[#FAF8F5] shadow-sm">
      <div className="text-center py-6 md:py-11 lg:py-16">
          <img
            src="/images/logo.svg"
            alt="Logo Green & Glow"
            className="mx-auto h-6 w-auto md:h-12 lg:h-20 max-h-28 mt-6 lg:mt-0"
          />
          
        </div>
      <nav 
        className="relative flex w-full flex-nowrap items-center justify-between bg-[#DDD0C8] py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4"
        data-twe-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          {/* Bouton hamburger */}
          <button
            className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="navbarSupportedContent8"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>

          {/* Menu collapsible */}
          <div
            className={`${
              isOpen ? '!visible' : 'hidden'
            } !visible mt-2 flex-grow basis-[100%] items-center justify-center lg:mt-0 lg:!flex lg:basis-auto`}
            id="navbarSupportedContent8"
            data-twe-collapse-item
          >
            <ul
              className="list-style-none flex flex-col ps-0 space-x-5 lg:mt-1 lg:flex-row"
              data-twe-navbar-nav-ref
            >
              {/* Home */}
              <li
                className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
                data-twe-nav-item-ref
              >
                <Link 
                  className="text-[#4B715F] transition duration-200 hover:text-[#4B715F]/80 hover:ease-in-out focus:text-[#264637]
 active:text-[#E6B87A] lg:px-2"
                  aria-current="page"
                  to="/"
                  data-twe-nav-link-ref
                >
                  Accueil
                </Link >
              </li>
              <li
                className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                data-twe-nav-item-ref
              >
                <Link 
                  className="p-0 text-[#4B715F] transition duration-200 hover:text-text-[#264637] hover:ease-in-out focus:text-[#264637]
 active:text-[#264637] motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  to="/"
                  data-twe-nav-link-ref
                >
                  Slow Beauty
                </Link>
              </li>

              {/* Link */}
              <li
                className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                data-twe-nav-item-ref
              >
                <Link 
                  className="p-0 text-[#4B715F] transition duration-200 hover:text-[#4B715F]/80 hover:ease-in-out focus:text-[#264637]
 active:text-[#4B715F]/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  to="/"
                  data-twe-nav-link-ref
                >
                  Rituels
                </Link >
              </li>

              {/* Link */}
              <li
                className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                data-twe-nav-item-ref
              >
                <Link 
                  className="p-0 text-[#4B715F] transition duration-200 hover:text-[#4B715F]/80 hover:ease-in-out focus:text-[#264637]
 active:text-[#4B715F]/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  to="/"
                  data-twe-nav-link-ref
                >
                  Nutrition
                </Link >
              </li>

              {/* Dropdown */}
              <li
                className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0 relative"
                data-twe-nav-item-ref
                data-twe-dropdown-ref
              >
                <Link 
                  className="flex items-center text-[#4B715F] transition duration-200 hover:text-[#4B715F]/80 hover:ease-in-out focus:text-[#264637]
 active:text-[#4B715F]/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  to="/"
                  role="button"
                  id="dropdownMenuButton2"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                  aria-expanded={isDropdownOpen}
                  data-twe-dropdown-toggle-ref
                >
                  Recettes
                  <span className="ms-1 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Link >

                {/* Menu dropdown */}
                <ul
                  className={`absolute z-[1000] float-left m-0 ${
                    isDropdownOpen ? 'block' : 'hidden'
                  } min-w-max list-none overflow-hidden rounded-lg border-none bg-[#DDD0C8] bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark`}
                  aria-labelledby="dropdownMenuButton2"
                  data-twe-dropdown-menu-ref
                >
                  <li>
                    <Link 
                      className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-[#4B715F] active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-[#FAF8F5] dark:focus:bg-neutral-[#FAF8F5] dark:active:bg-neutral-[#FAF8F5]"
                      to="/"
                      data-twe-dropdown-item-ref
                    >
                      Action
                    </Link >
                  </li>
                  <li>
                    <Link 
                      className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-[#4B715F] transition duration-200 hover:text-[#4B715F]/80 hover:ease-in-out focus:text-[#264637]
 active:text-[#4B715F]/80 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-[#FAF8F5] dark:focus:bg-neutral-[#FAF8F5] dark:active:bg-neutral-[#FAF8F5]"
                      to="/"
                      data-twe-dropdown-item-ref
                    >
                      Another action
                    </Link >
                  </li>
                  <li>
                    <Link 
                      className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-[#4B715F] transition duration-200 hover:text-[#4B715F]/80 hover:ease-in-out focus:text-[#264637]
 active:text-[#4B715F]/80 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                      to="/"
                      data-twe-dropdown-item-ref
                    >
                      Something else here
                    </Link >
                  </li>
                </ul>
              </li>

              {/* Link */}
              <li
                className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                data-twe-nav-item-ref
              >
                <Link 
                  className="p-0 text-[#4B715F] transition duration-200 hover:text-[#4B715F]/80 hover:ease-in-out focus:text-[#264637]
 active:text-[#4B715F]/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  to="/"
                  data-twe-nav-link-ref
                >
                  Eco-Soins
                </Link >
              </li>

              {/* Link */}
              <li
                className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                data-twe-nav-item-ref
              >
                <Link 
                  className="p-0 text-[#4B715F] transition duration-200 hover:text-[#4B715F]/80 hover:ease-in-out focus:text-[#264637]
 active:text-[#4B715F]/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  to="/"
                  data-twe-nav-link-ref
                >
                  Bien-être durable
                </Link >
              </li>

              {/* Disabled link */}
              <li
                className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                data-twe-nav-link-ref
              >
                <Link 
                  className="p-0 text-[#4B715F] transition duration-200 hover:text-[#4B715F]/80 hover:ease-in-out focus:text-[#264637]
 active:text-[#4B715F]/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  to="/contact"
                  data-twe-nav-link-ref
                >
                  Contact
                  </Link >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>  
  );
};

export default Header;
