import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrganizationDashboard = () => {
  const [organizationUsers, setOrganizationUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let organizationId;

  useEffect(() => {
    const fetchOrganizationUsers = async () => {
      try {
        let urlhom = window.location.origin;
        let url = '/scholarshipapi/api/v1/Organization/organizationUsers/' + organizationId;
        const response = await axios.get(urlhom + url);
        setOrganizationUsers(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrganizationUsers();
  }, []);

  const handleApprove = async (userId) => {
    // Implement logic to approve the user with the given userId
    console.log(`Approve user with ID: ${userId}`);
  };

  const handleDecline = async (userId) => {
    // Implement logic to decline the user with the given userId
    console.log(`Decline user with ID: ${userId}`);
  };

  return (
    <div className="container mx-auto mt-5">
      {loading && <p>Loading...</p>}
      {!loading && !error && organizationUsers.length === 0 && (
        <div className="bg-gray-100 p-4 border border-gray-300 rounded">
          <p className="text-center text-gray-600 text-lg font-semibold">
            No users from your organization have registered.
          </p>
        </div>
      )}
      {!loading && !error && organizationUsers.length > 0 && (
        <table className="min-w-full bg-white border border-gray-300 mt-4">
          <thead>
            <tr>
              <th className="py-3 px-6 text-left border-b">SNo</th>
              <th className="py-3 px-6 text-left border-b">Full Name</th>
              <th className="py-3 px-6 text-left border-b">Email</th>
              <th className="py-3 px-6 text-left border-b">Mobile</th>
              <th className="py-3 px-6 text-left border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {organizationUsers.map((user, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="py-2 px-6">{index + 1}</td>
                <td className="py-2 px-6">{`${user.firstName} ${user.lastName}`}</td>
                <td className="py-2 px-6">{user.email}</td>
                <td className="py-2 px-6">{user.mobile}</td>
                <td className="py-2 px-6 space-x-2">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleApprove(user.userId)}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleDecline(user.userId)}
                  >
                    Decline
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrganizationDashboard;
