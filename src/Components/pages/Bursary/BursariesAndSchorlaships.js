import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onToggleView }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Username: "",
    Password: "",
  });
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [category, setCategory] = useState("applicant");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginSuccess = (userData) => {
    setSuccessMessage("Login successful! Redirecting...");
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
    let urlorg = "/scholarshipapi/api/v1/User/orglogin";
    let loginEndpoint;
    let successMessage;
    let headers;

    switch (category.toLowerCase()) {
      case "applicant":
        loginEndpoint = urlhom + "/scholarshipapi/api/v1/User/login";
        successMessage = "Login successful! Redirecting...";
        try {
          const response = await axios.post(loginEndpoint, formData, {
            headers,
          });

          if (response.status === 200) {
            setSuccessMessage(successMessage);
            const userData = response.data;
            console.log(userData);
            handleLoginSuccess(userData);
            navigate("/bursaries/bdasboard");
          } else {
            setErrorMessage("Invalid username or password. Please try again.");
          }
        } catch (error) {
          console.error("An error occurred during login:", error);
          setErrorMessage("Invalid username or password. Please try again.");
        }
        break;

      case "organization":
        loginEndpoint = urlhom + urlorg;
        successMessage = "Organization login successful! Redirecting...";
        try {
          const response = await axios.post(loginEndpoint, formData, {
            headers,
          });

          if (response.status === 200) {
            setSuccessMessage(successMessage);
            const userData = response.data;
            console.log(userData);
            handleLoginSuccess(userData);
            navigate("/borganization");
          } else {
            setErrorMessage("Invalid username or password. Please try again.");
          }
        } catch (error) {
          console.error("An error occurred during login:", error);
          setErrorMessage("Invalid username or password. Please try again.");
        }
        break;

      case "ministry":
        loginEndpoint =
          "http://nemis.education.go.ke/generic2/api/Users/alogin";
        successMessage = "Ministry login successful! Redirecting...";
        const crdpassword = "9876$Teta";
        const crdusername = "nemisadmin";
        const credentials = `${crdusername}:${crdpassword}`;
        const base64Credentials = btoa(credentials);
        headers = {
          Authorization: `Basic ${base64Credentials}`,
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Methods": "GET",
          "Access-Control-Allow-Headers": "X-Token",
          "Access-Control-Allow-Credentials": "true",
        };

        try {
          const response = await axios.get(loginEndpoint, {
            headers,
            params: formData,
          });

          if (response.status === 200) {
            setSuccessMessage(successMessage);
            const userData = response.data;
            console.log(userData);
            handleLoginSuccess(userData);
            navigate("/admin");
          } else {
            setErrorMessage("Invalid username or password. Please try again.");
          }
        } catch (error) {
          console.error("An error occurred during login:", error);
          setErrorMessage("Invalid username or password. Please try again.");
        }
        break;

      default:
        console.error("Invalid category selected");
        return;
    }
  };

  return (
    <div
      className="max-w-md mx-auto mb-8 mt-30 p-6 bg-white rounded-md shadow-md"
      style={{ marginTop: "150px" }}
    >
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      {errorMessage && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <strong className="font-bold">Error</strong>
          <span className="block sm:inline"> {errorMessage}</span>
        </div>
      )}
      {successMessage && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <strong className="font-bold">Success</strong>
          <span className="block sm:inline"> {successMessage}</span>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="text"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Username
          </label>
          <div className="mt-2 p-2">
            <input
              id="username"
              name="Username"
              type="username"
              required
              onChange={handleChange}
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                className="font-semibold text-indigo-600 hover:text-indigo-500"
                rel="noreferrer"
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
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-600"
          >
            Category
          </label>
          <select
            id="category"
            name="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          >
            <option value="applicant">Applicant</option>
            <option value="organization">Organization</option>
            <option value="ministry">Ministry</option>
          </select>
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

      <p className="mt-4 text-sm text-gray-500">
        Don't have an account?{" "}
        <button
          className="font-semibold leading-6 text-App-link hover:text-indigo-500"
          onClick={() => onToggleView("register")}
        >
          Register
        </button>
      </p>
    </div>
  );
};

const RegisterForm = ({ onToggleView }) => {
  const [formData, setFormData] = useState({
    Username: "",
    FullName: "",
    Email: "",
    MobileNumber: "",
    Password: "",
    Category: "Applicant",
    OrganizationName: "",
    OrganizationId: "",
  });

  const [organizations, setOrganizations] = useState([]);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchOrganizations = async () => {
      let urlhom = window.location.origin;
      let url = "/scholarshipapi/api/v1/Organization/scholarshipOrganization";
      try {
        const headers = {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Methods": "GET, POST",
          "Access-Control-Allow-Headers": "X-Token",
          "Access-Control-Allow-Credentials": "true",
        };
        const response = await axios.get(urlhom + url, { headers });
        if (response.status === 200) {
          setOrganizations(response.data);
        } else {
          console.error("Failed to fetch organizations");
        }
      } catch (error) {
        console.error("An error occurred while fetching organizations:", error);
      }
    };

    fetchOrganizations();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Use "OrganizationName" consistently
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // If the name is "OrganizationName", fetch and set the corresponding OrganizationId
    if (name === "OrganizationName") {
      const selectedOrganization = organizations.find(
        (org) => org.organizationName === value
      );
      if (selectedOrganization) {
        setFormData((prevData) => ({
          ...prevData,
          OrganizationId: selectedOrganization.organizationId,
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let urlhom = window.location.origin;
    let url = "/scholarshipapi/api/v1/User/signup";
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

      if (response.status === 201) {
        setSuccessMessage("Registration Successful!");
        setFormData({
          Username: "",
          // LastName: "",
          // FirstName: "",
          FullName: "",
          Email: "",
          MobileNumber: "",
          Password: "",
          Category: "Applicant",
          OrganizationName: "",
        });
        setTimeout(() => {
          onToggleView("login");
        }, 2000);
      } else {
        console.error(
          "Form submission failed:",
          response.status,
          response.statusText
        );
        const errorData = await response.json();
        console.error("Error details:", errorData);
        setErrorMessage(
          "An error occurred during registration. Please try again."
        );
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error);
      setErrorMessage(
        "An error occurred during registration. Please try again."
      );
    }
  };

  return (
    <div
      className="max-w-md mx-auto mb-8 mt-30 p-6 bg-white rounded-md shadow-md"
      style={{ marginTop: "150px" }}
    >
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      {errorMessage && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <strong className="font-bold">Error</strong>
          <span className="block sm:inline"> {errorMessage}</span>
        </div>
      )}
      {successMessage && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <strong className="font-bold">Success</strong>
          <span className="block sm:inline"> {successMessage}</span>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-600"
          >
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
          <label
            htmlFor="lastname"
            className="block text-sm font-medium text-gray-600"
          >
            Full Names
          </label>
          <input
            type="text"
            id="fullname"
            name="FullName"
            value={formData.FullName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        {/* <div className="mb-4">
          <label htmlFor="firstname" className="block text-sm font-medium text-gray-600">
            FirstName
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
        </div> */}

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
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
          <label
            htmlFor="mobilenumber"
            className="block text-sm font-medium text-gray-600"
          >
            MobileNumber
          </label>
          <input
            type="text"
            id="mobilenumber"
            name="MobileNumber"
            value={formData.MobileNumber}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
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
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-600"
          >
            Category
          </label>
          <select
            id="category"
            name="Category"
            value={formData.Category}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          >
            <option value="Applicant">Applicant</option>
            <option value="Organization">Organization</option>
          </select>
        </div>

        {formData.Category === "Organization" && (
          <div className="mb-4">
            <label
              htmlFor="organization"
              className="block text-sm font-medium text-gray-600"
            >
              Organization
            </label>
            <select
              id="organization"
              name="OrganizationName"
              value={formData.OrganizationName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            >
              <option value="" disabled>
                Select an organization
              </option>
              {organizations.map((org) => (
                <option key={org.organizationId} value={org.organizationName}>
                  {org.organizationName}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="mt-6">
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded-md"
          >
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

function BursariesAndScholarships() {
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

export default BursariesAndScholarships;
