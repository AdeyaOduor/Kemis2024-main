import React, { useState, useEffect } from "react";
import axios from "axios";

const AddMember = () => {
  const [memberData, setMemberData] = useState({
    name: "",
    position: "",
    mobile: "",
    station: "",
  });

  const [members, setMembers] = useState([]); // Ensure the initial value is an empty array

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMemberData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to the server
      await axios.post("your_api_endpoint", memberData);

      // Fetch updated data from the server
      const response = await axios.get("your_api_endpoint");
      setMembers(response.data);

      // Clear the form
      setMemberData({
        name: "",
        position: "",
        mobile: "",
        station: "",
      });
    } catch (error) {
      console.error("Error submitting or fetching data:", error);
    }
  };

  useEffect(() => {
    // Fetch initial data when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get("your_api_endpoint");
        setMembers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Add Vetting Committee Member</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Member Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={memberData.name}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="position"
            className="block text-sm font-medium text-gray-700"
          >
            Position/Designation
          </label>
          <input
            type="text"
            id="position"
            name="position"
            value={memberData.position}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="mobile"
            className="block text-sm font-medium text-gray-700"
          >
            Mobile Phone
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={memberData.mobile}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="station"
            className="block text-sm font-medium text-gray-700"
          >
            Station
          </label>
          <input
            type="text"
            id="station"
            name="station"
            value={memberData.station}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Add Member
        </button>
      </form>

      {/* Display Members Table */}
      <div className="mt-8">
        <h2 className="text-lg font-bold mb-4">Vetting Committee Members</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ##
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Position
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Mobile
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Station
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Array.isArray(members) && members.length > 0 ? (
              members.map((member, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{member.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {member.position}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {member.mobile}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {member.station}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="px-6 py-4 whitespace-nowrap text-center"
                >
                  No members found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddMember;
