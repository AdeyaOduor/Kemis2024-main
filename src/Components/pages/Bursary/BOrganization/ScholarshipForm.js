import React, { useState, useEffect } from "react";
import axios from "axios";

const ScholarshipForm = () => {
  const [name, setName] = useState("");
  const [descriptions, setDescription] = useState("");
  const [deadlineDate, setDeadlineDate] = useState("");
  const [isActive, setIsScholarshipActive] = useState(false);
  const [type, setScholarshipType] = useState("");
  const [location, setLocation] = useState("");
  const [amount, setAmount] = useState("");
  const [numberOfScholarships, setNumberOfScholarships] = useState("");
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false); // Changed to false
  const [successMessage, setSuccessMessage] = useState("");

  const userData = JSON.parse(localStorage.getItem("user"));
  const organizationId = userData.organizationId;
  const formData = {
    organizationId,
    name,
    descriptions,
    deadlineDate,
    isActive,
    type,
    location,
    amount,
    numberOfScholarships,
  };

  const resetFormFields = () => {
    setName("");
    setDescription("");
    setDeadlineDate("");
    setIsScholarshipActive("");
    setScholarshipType("");
    setLocation("");
    setAmount("");
    setNumberOfScholarships("");
  };

  const fetchScholarships = async () => {
    try {
      setLoading(true);
      let urlhom = window.location.origin;
      let url =
        "/scholarshipapi/api/v1/Organization/scholarship/" + organizationId;
      const response = await axios.get(urlhom + url);

      if (response.status === 200) {
        setScholarships(response.data);
      } else {
        console.error("Failed to fetch scholarships:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    await handleAddScholarship(formData);
  };

  const handleAddScholarship = async (formData) => {
    try {
      setLoading(true);
      let url = "/scholarshipapi/api/v1/Organization/addScholarship";
      const response = await axios.post(url, formData);

      if (response.status === 200) {
        console.log("Scholarship added successfully!");
        setSuccessMessage("Scholarship added successfully!");
        setShowForm(false);
        fetchScholarships();
        resetFormFields();
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      } else {
        console.error("Failed to add scholarship:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchScholarships();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {successMessage && (
        <div className="bg-green-500 text-white p-2 rounded">
          {successMessage}
        </div>
      )}

      <button
        className="mb-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowForm(!showForm)}
      >
        Add Scholarship
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-opacity-50 p-8 rounded-md">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name of Scholarship
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-4 bg-gray-200 w-full font-bold py-2 px-4 rounded"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-600"
              >
                Description / Guidelines
              </label>
              <textarea
                id="descriptions"
                name="descriptions"
                value={descriptions}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-4 bg-gray-200 w-full font-bold py-2 px-4 rounded"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="deadlineDate"
                className="block text-sm font-medium text-gray-600"
              >
                Deadline Date
              </label>
              <input
                type="date"
                id="deadlineDate"
                name="deadlineDate"
                value={deadlineDate}
                onChange={(e) => setDeadlineDate(e.target.value)}
                className="mt-4 bg-gray-200 w-full font-bold py-2 px-4 rounded"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="isScholarshipActive"
                className="block text-sm font-medium text-gray-600"
              >
                Scholarship Active
              </label>
              <select
                id="isActive"
                name="isActive"
                value={isActive}
                onChange={(e) => setIsScholarshipActive(e.target.value)}
                className="mt-4 bg-gray-200 w-full font-bold py-2 px-4 rounded"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="mb-2">
              <label
                htmlFor="scholarshipType"
                className="block text-sm font-medium text-gray-600"
              >
                Type of Scholarship
              </label>
              <input
                type="text"
                id="type"
                name="type"
                value={type}
                onChange={(e) => setScholarshipType(e.target.value)}
                className="mt-4 bg-gray-200 w-full font-bold py-2 px-4 rounded"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-600"
              >
                Location/Region
              </label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className="mt-4 bg-gray-200 w-full font-bold py-2 px-4 rounded"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-600"
              >
                Amount
              </label>
              <input
                type="number"
                id="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                className="mt-4 bg-gray-200 w-full font-bold py-2 px-4 rounded"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="numberOfScholarships"
                className="block text-sm font-medium text-gray-600"
              >
                Number of Scholarships Slots Available
              </label>
              <input
                type="number"
                id="numberOfScholarships"
                name="numberOfScholarships"
                value={numberOfScholarships}
                onChange={(e) => setNumberOfScholarships(e.target.value)}
                className="mt-4 bg-gray-200 w-full font-bold py-2 px-4 rounded"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onSubmit={handleAddScholarship}
          >
            Add
          </button>
        </form>
      )}

      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Scholarships</h2>
        {loading ? (
          <p>Loading scholarships...</p>
        ) : (
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">Name</th>
                {/* <th className="border border-gray-400 px-4 py-2">Description</th> */}
                <th className="border border-gray-400 px-4 py-2">
                  Deadline Date
                </th>
                <th className="border border-gray-400 px-4 py-2">Type</th>
                <th className="border border-gray-400 px-4 py-2">Location</th>
                <th className="border border-gray-400 px-4 py-2">Amount</th>
                <th className="border border-gray-400 px-4 py-2">
                  NumberOfScholarships
                </th>
              </tr>
            </thead>
            <tbody>
              {scholarships.map((scholarship) => (
                <tr key={scholarship.id}>
                  <td className="border border-gray-400 px-4 py-2">
                    {scholarship.name}
                  </td>
                  {/* <td className="border border-gray-400 px-4 py-2">{scholarship.descriptions}</td> */}
                  <td className="border border-gray-400 px-4 py-2">
                    {scholarship.deadlineDate}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {scholarship.type}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {scholarship.location}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {scholarship.amount}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {scholarship.numberOfScholarships}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ScholarshipForm;
