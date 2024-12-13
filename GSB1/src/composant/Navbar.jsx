import React, { useState } from 'react';

const navigation = [
  { name : 'Dashboard', href: '', current : true}, 
  { name : 'Rapports', href: '', current : false}, 
  { name : 'Medecins', href: '', current : false}, 
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')

}
export default function Navbar ({state}) {

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-start mx-auto p-4">
          {/* Logo */}
          <img src="GSB.png" className="h-8 mr-6" alt="Logo" />

          {/* Menu */}
          <ul className="flex space-x-4">
            <li>
              <a href="/accueil" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500" > Accueil </a>
            </li>
            <li>
              <a href="/rapports" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"> Rapports </a>
            </li>
            <li>
              <a href="/medecins" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500" > Médecins
              </a>
            </li>
          </ul>

          {/* Spacer to push user menu to the right */}
          <div className="ml-auto flex items-center space-x-4">
            {/* User Menu */}
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded={isDropdownOpen ? 'true' : 'false'}
              onClick={toggleDropdown}
            >
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full"
                src="panda.png"
                alt="user photo" />
            </button>

            {isDropdownOpen && (
              <div
                className="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                id="user-dropdown" >
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a href="/accueil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"> Dashboard</a>
                  </li>
                  <li>
                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"> Sign out </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

// export default Navbar;
}