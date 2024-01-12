import React from 'react'

const SchoolRegNavbar = () => {
  return (
    <nav className='bg-yellow-600 border-gray-200 mx-2 px-2 py-2.5 rounded dark:bg-gray-800 '>
      <div className='container flex justify-between items-center  mx-auto pt-3'>
        <div className='flex items-center mx-auto'>
          <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
            Welcome
          </span>
        </div>

        <div className='flex justify-end pr-4'>
        </div>
      </div>
    </nav>
  )
}

export default SchoolRegNavbar
