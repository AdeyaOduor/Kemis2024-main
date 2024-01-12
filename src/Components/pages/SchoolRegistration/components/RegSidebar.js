import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { FiLogOut } from 'react-icons/fi';
import HamburgerButton from './HamburgerMenuButton/HamburgerButton'
import { Button } from '@material-tailwind/react';

const RegSidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true)
  const [mobileMenu, setMobileMenu] = useState(false)
  const location = useLocation()

  const Menus = [
    // { name: "EduAfya", href: "/eduefya", icon: ChartPieIcon },

    { title: 'Dashboard',  path:'/schoolregistration/dashboard' },
    { title: 'Instructions',  path:'/schoolregistration/instructions' },
    { title: 'Register Institution', path: '/schoolregistration/schoolregform', gap: 'true' },
    { title: 'View My Registration', path: '/schoolregistration/regdetails', gap:'true' },
    { title: 'Download Registration Certificate', path: '/schoolregistration/certificate', gap:'true'},
    { title: 'Logout', path: '/schoolregistration/logout', icon: <FiLogOut />, logout: true },
  ];

  return ( 
    <>
      <div //style={{position:"fixed"}}
        className={`${
          open ? 'w-80' : 'w-fit'
        } hidden sm:block  h-screen duration-300 bg-gray-600 border-r border-gray-200 dark:border-gray-600 p-8  dark:bg-slate-800`}
      >
        <Link to='/'>
          <div className={`flex ${open && 'gap-x-4'} items-center`}>
            {/* <img src={Logo} alt='' className='pl-1' /> */}
            {open && (
              <span className='text-3xl font-medium whitespace-nowrap text-white'>
                School Registration
              </span>
            )}
          </div>
        </Link>

        <ul className='pt-6'>
          {Menus.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <li
                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-800 dark:hover:bg-gray-700
                        ${menu.gap ? 'mt-9' : 'mt-2'} ${
                  location.pathname === menu.path &&
                  'bg-gray-200 dark:bg-gray-700'
          } text-white`}
              >
                <span className='text-2xl'>{menu.src}</span>
                <span
                  className={`${
                    !open && 'hidden'
                  } origin-left duration-300 hover:block`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {/* Mobile Menu */}
      <div className="pt-3">
        <HamburgerButton
          setMobileMenu={setMobileMenu}
          mobileMenu={mobileMenu}
        />
      </div>
      <div className="sm:hidden">
        <div
          className={`${
            mobileMenu ? 'flex' : 'hidden'
          } absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 dark:text-white  bg-gray-50 dark:bg-slate-800 drop-shadow md rounded-xl`}
        >
          {Menus.map((menu, index) => (
            <Link
              to={menu.path}
              key={index}
              onClick={() => setMobileMenu(false)}
            >
              <span
                className={` ${
                  location.pathname === menu.path &&
                  'bg-gray-200 dark:bg-gray-700'
                } p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700`}
              >
                {menu.title}
              </span>

            </Link>
            
          ))}
        </div>
      </div>
    </>
  )
}

export default RegSidebar
