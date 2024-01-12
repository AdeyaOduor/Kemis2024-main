import React from "react";
import logo from "../../coalogo.svg";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <><footer className="bg-white py-8">
      <hr className="py-8"/>
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-4">
        {/* Column 1: About Us */}
        <div>
          <div className="bg-tahiti flex items-center">
            <img src={logo} className="App-logo" width={200} alt="logo" />
            <span className="ml-2 font-semibold"></span>
          </div>
          <h2 className="text-lg font-bold mt-4">About Us</h2>
          <p>
            KEMIS is a cutting-edge, web-based data management solution designed
            to streamline and centralize education data from institutions across
            the nation.
          </p>
        </div>

        {/* Column 2: Social Media Icons */}
        <div>
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <FaFacebook className="text-2xl" />
            <FaTwitter className="text-2xl" />
            <FaInstagram className="text-2xl" />
            <FaLinkedin className="text-2xl" />
          </div>
        </div>

        {/* Column 3: Copyright and Placeholder */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quicklinks</h2>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/institutions">Institutions</a>
              </li>
              <li>
                <a href="/program">Program</a>
              </li>
              <li>
                <a href="/faqs">FAQs</a>
              </li>
              <li>
                <a href="/contacts">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Column 4: Contact Us */}
        <div>
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <p>Email: kemis@education.go.ke</p>
          <p>Phone: +123 456 7890</p>
          <h2 className="text-lg font-bold my-4">Follow Us</h2>
          <div className="flex space-x-4">
            <FaFacebook className="text-2xl" />
            <FaTwitter className="text-2xl" />
            <FaInstagram className="text-2xl" />
            <FaLinkedin className="text-2xl" />
          </div>
        </div>
      </div>
    </footer>
    <footer className="bg-black text-white">
        {/* Copyright */}
        <div className="pb-8">
          <div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-1 text-xs text-center">
            <p className="mt-8" >
              &copy; 2023 Kenya Education Management Information System (KEMIS).
              Powered by{" "}
              <a
                href="https://education.go.ke/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ministry of Education
              </a>{" "}
              Supported by The{" "}
              <a
                href="https://www.worldbank.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                World Bank
              </a>{" "}
              All rights reserved.
            </p>
            <span>
              &copy; Image by{" "}
              <a
                href="https://www.freepik.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Freepik
              </a>
              .
            </span>
          </div>
        </div>
    </footer></>
  );
};

export default Footer;