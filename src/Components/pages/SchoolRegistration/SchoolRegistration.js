import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import schoolregimage from "../../Assets/schoolreg.png"

const LoginForm = ({ onToggleView }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Username: "",
    Password: "",
  });
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginSuccess = (userData) => {
    setSuccessMessage("Login successful!");
    console.log("User data received:", userData);
    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
      console.log("Login successful!");
    } else {
      console.error("User data is undefined or null. Login failed.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let urlhom = window.location.origin;
    let url = "/schoolregapi/api/v1/SchoolRegUser/login";
    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Methods": "GET, POST",
      "Access-Control-Allow-Headers": "X-Token",
      "Access-Control-Allow-Credentials": "true",
    };
    try {
      const response = await axios.post(urlhom + url, formData, {
        headers,
      });

      if (response.status === 200) {
        const userData = response.data;
        handleLoginSuccess(userData);
        console.log(response.data.user);
        navigate("/schoolregistration/dashboard")
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  };

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "100px",
      maxWidth: '100%',

    }}>
<div className="w-full"  style={{      backgroundImage: `url(${schoolregimage})`, backgroundSize:'cover'
}}>
<div className=" mx-auto my-12  p-6 rounded-md shadow-md lg:w-1/3 sm:w-full lg:mr-20 sm:mr-0 "
  >
        <h2 className="text-2xl font-semibold tracking-tight mt-4">Login</h2>
      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Success</strong>
          <span className="block sm:inline"> {successMessage}</span>
        </div>
      )}
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label htmlFor="text" className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <div className="mt-2 p-2">
            <input
              id="username"
              name="Username"
              type="username"
              required
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="text-sm">
              <a
                href="http://nemis.education.go.ke/passreset.aspx"
                target="_blank"
                className="font-semibold text-indigo-600 hover:text-indigo-500" rel="noreferrer"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="Password"
              type="password"
              autoComplete="current-password"
              required
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <p className="mt-4 text-sm text-indigo-500">
        Don't have an account?{" "}
        <button
          className="font-semibold leading-6 text-App-link hover:text-purple-500"
          onClick={() => onToggleView("register")}
        >
         <u>Register</u> 
        </button>
      </p>
    </div>
</div>
    
    </div>
  );
};

const RegisterForm = ({ onToggleView }) => {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Username: "",
    Password: "",
    Email: "",
    Postal_Address: "",
    Telephone: "",
    Responsibility: "",
  });

  //const [organizations, setOrganizations] = useState([]);
  const [successMessage, setSuccessMessage] = useState(null);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let urlhom = window.location.origin;
    let url = "/schoolregapi/api/v1/SchoolRegUser/signup";
    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Methods": "GET, POST",
      "Access-Control-Allow-Headers": "X-Token",
      "Access-Control-Allow-Credentials": "true",
    };
    try {
      const response = await axios.post(urlhom + url, JSON.stringify(formData), {
        headers,
      });
  
      if (response.status === 201) {
        setSuccessMessage("Registration Successful!");
        setFormData({
          FirstName: "",
          LastName: "",
          Username: "",
          Password: "",
          Email: "",
          Postal_Address: "",
          Telephone: "",
          Responsibility: "",
        });
        setTimeout(() => {
          onToggleView("login");
        }, 2000);
      } else {
        console.error("Form submission failed:", response.status, response.statusText);
        const errorData = await response.json();
        console.error("Error details:", errorData);
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error);
    }
  };
  

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Success</strong>
          <span className="block sm:inline"> {successMessage}</span>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        
        <div className="mb-4">
          <label htmlFor="firstname" className="block text-sm font-medium text-gray-600">
          First Name
          </label>
          <input
            type="text"
            id="firstname"
            name="FirstName"
            value={formData.FirstName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastname" className="block text-sm font-medium text-gray-600">
          Last Name
          </label>
          <input
            type="text"
            id="lastname"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

         <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
          Username
          </label>
          <input
            type="text"
            id="username"
            name="Username"
            value={formData.Username}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div> 
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

         <div className="mb-4">
          <label htmlFor="postal_address" className="block text-sm font-medium text-gray-600">
            Postal Address
          </label>
          <input
            type="text"
            id="postal_address"
            name="Postal_Address"
            value={formData.Postal_Address}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div> 

        
        <div className="mb-4">
          <label htmlFor="telephone" className="block text-sm font-medium text-gray-600">
           Telephone
          </label>
          <input
            type="text"
            id="telephone"
            name="Telephone"
            value={formData.Telephone}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div> 

        <div className="mb-4">
          <label htmlFor="responsibility" className="block text-sm font-medium text-gray-600">
          Responsibility
          </label>
          <input
            type="text"
            id="responsibility"
            name="Responsibility"
            value={formData.Responsibility}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mt-6">
          <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-md">
            Register
          </button>
        </div>
      </form>

      <p className="mt-4 text-sm text-gray-500">
        Already have an account?{" "}
        <button
          className="font-semibold leading-6 text-App-link hover:text-indigo-500"
          onClick={() => onToggleView("login")}
        >
          Login
        </button>
      </p>
    </div>
  );
};

function SchoolRegistration() {
  const [currentView, setCurrentView] = useState("login");

  const handleToggleView = (view) => {
    setCurrentView(view);
  };

  return (
    <>
      {currentView === "login" ? (
        <LoginForm onToggleView={handleToggleView} />
      ) : (
        <RegisterForm onToggleView={handleToggleView} />
      )}
    </>
  );
}

export default SchoolRegistration;