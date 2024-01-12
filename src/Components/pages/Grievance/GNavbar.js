import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import logo from '../../Assets/coalogofff.svg';
import { getCurrentUser, signOut } from '../../../REST-API/auth/AuthProvider';
import {
  Card,
  CardContent,
} from "@mui/material";
// import  {Logout as LogoutIcon} from '@material-ui/icons';

const GNavbar = (props) => {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [showNavCard, setShowNavCard] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Perform any additional logic if needed
    // ...

    // Redirect to the login page
    navigate("/login");
  };
  const handleInstitutionMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleInstitutionMenuClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    signOut();
    localStorage.clear();
    sessionStorage.clear();
    navigate('/home', { replace: true });
  };

  const handleNavCardOpen = () => {
    setShowNavCard(true);
  };

  const handleNavCardClose = () => {
    setShowNavCard(false);
  };

  const handleNavItemClick = (path) => {
    // Close the navigation card
    handleNavCardClose();

    // Redirect to the clicked link
    navigate(path);
  };

  return (
    <nav style={{ backgroundColor: "#00adee", }}>
      <div className=" mx-1 p-4 overflow-none">
        <div className="flex items-center align-middle justify-between my-1">
          <RouterLink to="/grievance">
            <div className="flex lg:items-center sm:items-start">
              <img src={logo} alt="logo" width={250}  />
            </div>
          </RouterLink>
          {/* Hamburger icon for small screens */}
          {/* <div
            className={`hamburger-icon ${showNavCard ? "hidden" : ""}`}
            onClick={handleNavCardOpen}
          >
            &#9776;
          </div> */}

          {/* Navigation card for small screens */}
          {/* {showNavCard && (
            <Card className="nav-card">
              <CardContent>
                <div className="nav-card-links">
                  <RouterLink
                    to="/"
                    className={`gpt3__navbar-links ${location.pathname === "/" ? "active" : ""
                      }`}
                  >
                    <p onClick={() => handleNavItemClick("/")}> Home</p>
                  </RouterLink>

                  <RouterLink
                    to="/about"
                    className={`gpt3__navbar-links ${location.pathname === "/about" ? "active" : ""
                      }`}
                  >
                    <p onClick={() => handleNavItemClick("/about")}>About</p>
                  </RouterLink>
                  {sessionStorage.getItem("username") === "" && (
                    <button
                      className={` ${location.pathname === "/login" ? "active" : ""
                        }`}
                      onClick={handleButtonClick}
                      style={{
                        fontSize: "1rem",
                        padding: "0.5rem 1rem",
                        backgroundColor: "black",
                        color: "white",
                        borderRadius: "10px",
                      }}
                    >
                      Login
                    </button>
                  )}
                  {sessionStorage.getItem("username") !== "" && (
                    <button
                      color="primary"
                      fullWidth
                      onClick={handleLogout}
                    // startIcon={<LogoutIcon />}
                    >
                      Logout
                    </button>
                  )}

                  <div></div>
                </div>
                <div className="nav-card-close" onClick={handleNavCardClose}>
                  &#10005;
                </div>
              </CardContent>
            </Card>
          )} */}

          {/* <div className={`lg:hidden ${toggleMenu ? 'block' : 'hidden'}`}>
            {toggleMenu ? (
              <RiCloseLine
                color="white"
                size={27}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                color="white"
                size={27}
                onClick={() => setToggleMenu(true)}
              />
            )}
          </div> */}
          <div className='lg:text-2xl sm:text-xs'>
            <p>
              <strong>Grievance Management System</strong>
            </p>
          </div>

          <div className=" lg:flex space-x-4 " ${
            ...showNavCard ? "hidden" : ""
          }>
            <RouterLink
              to="/grievance"
              className={`text-white text-lg items-center ${location.pathname === '/grievance' ? 'font-bold' : ''
                }`}
            >
              Home
            </RouterLink>

            {/* <RouterLink
              to="/grievance/about"
              className={`text-white  ${location.pathname === '/about' ? 'font-bold' : ''
                }`}
            >
              About
            </RouterLink> */}
            


          </div>
          <div>
          <button
              className={ ` ${location.pathname === "/login" ? "active" : ""}`}
              onClick={handleButtonClick}
              style={{
                fontSize: "1rem",
                padding: "0.5rem 1rem",
                backgroundColor: "black",
                color: "white",
                borderRadius: "5px",
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default GNavbar;
