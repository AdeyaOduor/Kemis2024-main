import { CheckIcon } from "@heroicons/react/20/solid";
import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useFetchers, useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../../../REST-API/auth/AuthProvider';
import axios from "axios";
import image1 from "../../Assets/customerservice.png"
import { Link } from 'react-router-dom';



const Ghomepage = () => {
  const navigate = useNavigate();
  let urlhom = window.location.origin;
  let urlhom2 = window.location.host;
  console.log(urlhom, urlhom2);


  const image = image1
  const goGrievancePage = () => {
    navigate('/grievanceform');
  };
  return (

    <div className="lg:h-screen lg:w-screen sm:h-screen justify-center" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', }}>
      <div className="flex flex-col lg:flex-row mt-0 lg:w-screen sm:w-screen ">
        <div className="lg:w-2/3 relative lg:px-2 lg:pb-4 mt-4"
        >
          <h2 className="lg:text-2xl sm:text-xs w-full font-bold tracking-tight text-white sm:text- xl gradient-text mt-3">
            Welcome to Grievances Management System
          </h2>

          <p className=" lg:w-full sm:w-3/4  lg:text-lg sm:text-sm mt-4">

            Grievance Management System (GMS), is a site where anyone is allowed to  <br />
            air their grievances relating to the ministry of education for quick assistance.
          </p>
          <p className=" lg:w-full sm:w-3/4 lg:text-lg sm:text-sm mt-0"> 
          </p>
          <p className=" lg:w-full sm:w-3/4  lg:text-base sm:text-sm mt-4"><i>Reporting made Easy</i></p>
          
          <Link to="/grievance/grievanceform" className="bg-amber-400 text-lg font-semibold py-2 px-2 rounded mt-9 inline-block">
            Report Your Grievances Here
          </Link>
        </div>



      </div>


    </div>


  );
};

export default Ghomepage;

