import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar';

const MainLayout = () => (
  <div className="bg-white flex h-full overflow-hidden w-full">
    {/* Navbar */}
    <Navbar />

    {/* Main Content Wrapper */}
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Main Content Container */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Main Content */}
        <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <Outlet />
        </div>
      </div>
    </div>
  </div>
);

export default MainLayout;
