import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // const userData = JSON.parse(localStorage.getItem('user'));
  // const fullName = userData.fullName;

  const handleLogout = () => {
    navigate('/bursaries/logout');
  };

  return (
    <nav className='border-gray-200 px-2 py-2.5 rounded bg-sky-400'>
      <div className='container flex justify-between items-center mx-auto pt-3'>
        <div className='flex items-center mx-auto'>
          <span className='text-white text-lg font-bold'>Welcome, 
          {/* {fullName} */}
          </span>
        </div>

        <div className='flex items-center'>
          <div className='mr-4 cursor-pointer' onClick={handleToggleDropdown}>
            <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </div>
          </div>

          {isDropdownOpen && (
            <div className='relative'>
              <div className='absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg dark:bg-gray-800'>
                <div className='py-1'>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                  >
                    Profile
                  </a>
                  {/* <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                    onClick={handleLogout}
                  >
                    Logout
                  </a> */}
                </div>
              </div>
            </div>
          )}

          {/* <Toggle /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
