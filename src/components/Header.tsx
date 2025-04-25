// src/components/Header.tsx
import React, { useState } from 'react';
/* import logo from '../assets/logo.png';  */

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#F9F7F3] shadow-sm">
        <div className="text-center py-6">
           {/*  <img
                src={logo}
                alt="Logo Équilibre & Beauté"
                className="mx-auto h-20 w-auto"
            /> */}
        </div>
        <nav
    className="relative flex w-full items-center justify-between bg-#E4A11B py-2 shadow-dark-mild dark:bg-body-dark lg:flex-wrap lg:justify-start lg:py-4"
    data-twe-navbar-ref>
    <div className="flex w-full flex-wrap items-center justify-between px-3">
      <div className="flex items-center">
        {/*  Hamburger menu button  */}
        <button
          className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
          data-twe-collapse-init
          data-twe-target="#navbarSupportedContentY"
          aria-controls="navbarSupportedContentY"
          aria-expanded="false"
          aria-label="Toggle navigation">
          {/*  Hamburger menu icon  */}
          <span
            className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </span>
        </button>
      </div>

     {/* Navigation links  */}
      <div
        className="!visible hidden grow basis-[100%] items-center text-center lg:!flex lg:basis-auto lg:text-left"
        id="navbarSupportedContentY"
        data-twe-collapse-item>
        <ul
          className="me-auto flex flex-col lg:flex-row"
          data-twe-navbar-nav-ref>
          <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
            <a
              className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
              href="#!"
              data-twe-nav-link-ref
              data-twe-ripple-init
              data-twe-ripple-color="light"
              >Home</a
            >
          </li>
          <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
            <a
              className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
              href="#!"
              data-twe-nav-link-ref
              data-twe-ripple-init
              data-twe-ripple-color="light"
              >Features</a
            >
          </li>
          <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
            <a
              className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
              href="#!"
              data-twe-nav-link-ref
              data-twe-ripple-init
              data-twe-ripple-color="light"
              >Pricing</a
            >
          </li>
          <li className="mb-2 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
            <a
              className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
              href="#!"
              data-twe-nav-link-ref
              data-twe-ripple-init
              data-twe-ripple-color="light"
              >About</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
      <nav className="bg-[#E2D6CF] shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Burger button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-green-800 hover:text-green-600 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
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

            {/* Menu */}
            <ul
              className={`flex-col md:flex-row md:flex md:space-x-8 text-green-800 text-sm md:text-base font-medium ${
                isOpen ? 'flex' : 'hidden'
              } md:flex`}
            >
              <li><a href="#" className="block py-2 px-4 hover:text-green-600">Accueil</a></li>
              <li><a href="#" className="block py-2 px-4 hover:text-green-600">Beauté</a></li>
              <li><a href="#" className="block py-2 px-4 hover:text-green-600">Nutrition</a></li>
              <li><a href="#" className="block py-2 px-4 hover:text-green-600">Soins</a></li>
              <li><a href="#" className="block py-2 px-4 hover:text-green-600">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
