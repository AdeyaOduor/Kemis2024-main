import React, { useState, useEffect } from "react";
import "./Attendance.css";
import axios from "axios";


const ViewUsers = () => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userData = JSON.parse(localStorage.getItem('user'));
  const organizationId = userData.organizationId;

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        let urlhom = window.location.origin;
        let url = `/scholarshipapi/api/v1/Organization/organizationUsers/${organizationId}`;
        setLoading(true);
        const response = await axios.get(urlhom + url);
        setApplicants(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApplicants();
  }, [organizationId]);

  const handleApproval = async (applicantId, approved) => {
    try {
      const response = await axios.post("/api/approve", {
        organizationId,
        applicantId,
        approved,
      });

      if (response.status === 200) {
        setApplicants((prevApplicants) =>
          prevApplicants.map((applicant) =>
            applicant.organizationUserId === applicantId
              ? { ...applicant, approved }
              : applicant
          )
        );
      } else {
        console.error("Failed to update approval status:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : applicants.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table className="table-auto border-collapse border border-gray-800 w-full">
          <thead>
            <tr>
              <th className="p-2 border border-gray-800">User ID</th>
              <th className="p-2 border border-gray-800">Full Name</th>
              <th className="p-2 border border-gray-800">Mobile</th>
              <th className="p-2 border border-gray-800">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant, index) => (
              <tr key={applicant.organizationUserId}>
                <td className="p-2 border border-gray-800">{index + 1}</td>
                <td className="p-2 border border-gray-800">{applicant.fullName}</td>
                <td className="p-2 border border-gray-800">{applicant.mobileNumber}</td>
                <td className="p-2 border border-gray-800">
                  {applicant.admin ? (
                    <button className="bg-green-500 text-white" onClick={() => handleApproval(applicant.organizationUserId, false)}>
                      Approved
                    </button>
                  ) : (
                    <>
                      <button className="bg-green-500 text-white" onClick={() => handleApproval(applicant.organizationUserId, true)}>
                        Approve
                      </button>
                      <button className="bg-red-500 text-white" onClick={() => handleApproval(applicant.organizationUserId, false)}>
                        Decline
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewUsers;
