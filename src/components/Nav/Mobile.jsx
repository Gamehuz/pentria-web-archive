import { useState } from 'react';

import { ReactComponent as Hamburger } from "./assets/menu-hamburger.svg";

function MobileNavbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleToggle() {
    setIsExpanded(!isExpanded);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-primaryColor">
        <div className="transition-all duration-300 ease-in-out bg-primaryColor divide-y-2 divide-primaryColor-700">
          <div className="flex justify-between px-5 pt-5 pb-6">
            <p className='text-white font-bold'>Pentria</p>
            <Hamburger
              onClick={() => handleToggle()}
            />
          </div>
          <div className={`${isExpanded ? '' : 'hidden'} shadow-md transition-all duration-300 ease-in-out py-6 px-5 space-y-6`}>{
        }
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Features
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Pricing
            </a>
          </div>
        </div>
    </nav>
  );
}

export default MobileNavbar;
