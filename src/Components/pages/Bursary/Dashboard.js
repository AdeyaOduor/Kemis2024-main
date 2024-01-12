import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [scholarshipData, setScholarshipData] = useState([]);
  const [bursaryScheme, setBursaryScheme] = useState("");
  const [scholarshipDetails, setScholarshipDetails] = useState(null);
  const [isApplying, setIsApplying] = useState(false);
  const [scholarshipType, setScholarshipType] = useState("");
  const [scholarshipAmount, setScholarshipAmount] = useState("");
  const [isSelectingScholarship, setIsSelectingScholarship] = useState(false);
  const [awardedScholarships, setAwardedScholarships] = useState([]);
  const [applicantAwards, setApplicantAwards] = useState([]);
  const [appliedBursary, setAppliedBursary] = useState(null);
  const [applicationId, setApplicationId] = useState(null);

  const userData = JSON.parse(localStorage.getItem("user"));
  const userId = userData.userId;

  const fetchData = async () => {
    try {
      let urlhom = window.location.origin;
      let url =
        "/scholarshipapi/api/v1/Applications/getEntireUserDetails/" + userId;
      console.log(urlhom + url);
      const response = await axios.get(urlhom + url);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userId]);

  const handleCloseModal = () => {
    setSelectedUser(null);
    setScholarshipData([]);
    setBursaryScheme("");
    setScholarshipDetails(null);
    setScholarshipAmount("");
    setIsApplying(false);
    setIsSelectingScholarship(false);
    setScholarshipType("");
  };

  const handleOpenScholarshipModal = async (user) => {
    setIsSelectingScholarship(true);
    setBursaryScheme("");
    setScholarshipDetails(null);
    setScholarshipAmount("");
    setScholarshipType("");

    // Use handleShowModal to set the selected user dynamically
    handleShowModal(user.applicationId);

    // Access applicationId from the selected user
    if (user && user.applicationId) {
      const applicationId = user.applicationId;
      setApplicationId(applicationId);
      console.log("Selected Application Id for Scholarship:", applicationId);
    }
  };

  const handleShowModal = async (user) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    fetchScholarshipData();
  }, []);

  // APPLYING FOR SELECTED SCHOLARSHIP
  const handleApply = async () => {
    try {
      let urlhom = window.location.origin;
      let url =
        "/scholarshipapi/api/v1/Applications/addUserApplicationScholarship";
      const response = await axios.post(urlhom + url, {
        UserId: userId,
        ApplicationId: applicationId,
        ScholarshipId: scholarshipDetails.scholarshipId,
        OrganizationId: scholarshipDetails.organizationId,
        BursaryScheme: bursaryScheme,
        ScholarshipType: scholarshipType,
        ScholarshipAmount: scholarshipAmount,
      });

      console.log("Application successful:", response.data);

      // Fetch the updated status using the endpoint
      // const urlstatus = `/scholarshipapi/api/v1/Applications/applicationStatus/${userId}/${applicationId}`;
      // const statusResponse = await axios.get(urlhom + urlstatus);
      // console.log(statusResponse);

      // setAppliedBursary(
      //   statusResponse.data[0] || { bursaryScheme: "", status: "Pending" }
      // );

      // Close the modal after successful submission
      handleCloseModal();
    } catch (error) {
      console.error("Error applying for bursary/scholarship:", error);
    } finally {
      setIsApplying(false);
    }
  };

  useEffect(() => {
    const fetchBursaryStatus = async () => {
      try {
        let urlhom = window.location.origin;
        const urlstatus = `/scholarshipapi/api/v1/Applications/applicationStatus/${userId}/${applicationId}`;
        const statusResponse = await axios.get(urlhom + urlstatus);
        console.log(statusResponse);

        setAppliedBursary(
          statusResponse.data[0] || { bursaryScheme: "", status: "Pending" }
        );
      } catch (error) {
        console.error("Error fetching bursary status:", error);
        // Set appliedBursary to blank if there is an error
        setAppliedBursary({ bursaryScheme: "", status: "" });
      }
    };

    fetchBursaryStatus();
  }, [userId, applicationId]);

  // FETCHING ALL THE POSTED SCHOLARSHIPS
  const fetchScholarshipData = async () => {
    try {
      let urlhom = window.location.origin;
      let url = "/scholarshipapi/api/v1/Organization/scholarship";
      const response = await axios.get(urlhom + url);
      console.log(response.data);

      setScholarshipData(response.data);
    } catch (error) {
      console.error("Error fetching scholarship data:", error);
      setScholarshipData([]);
    }
  };

  const findScholarshipDetails = (selectedScheme) => {
    return scholarshipData.find(
      (scholarship) => scholarship.name === selectedScheme
    );
  };

  const handleScholarshipSelect = (selectedScheme) => {
    const selectedScholarship = findScholarshipDetails(selectedScheme);
    setScholarshipDetails(selectedScholarship);
    if (selectedScholarship) {
      console.log(
        "Selected Scholarship Id:",
        selectedScholarship.scholarshipId
      );
      console.log(
        "Selected Organization Id:",
        selectedScholarship.organizationId
      );
    }
  };

  // FETCHING THE LIST OF AWARDED SCHOLARSHIP PER USER
  const fetchApplicantAwards = async (userId) => {
    try {
      let urlhom = window.location.origin;
      let url = `/scholarshipapi/api/v1/api/v1/Awarded/awardedApplicant/${userId}`;
      const response = await axios.get(urlhom + url);
      setApplicantAwards(response.data);
    } catch (error) {
      console.error("Error fetching applicant awards:", error);
      setApplicantAwards([]);
    }
  };

  const tableStyles = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "4rem",
  };

  const thStyles = {
    py: "3",
    px: "6",
    borderBottom: "1px solid #e2e8f0",
  };

  const tdStyles = {
    py: "2",
    px: "6",
    textAlign: "left",
    borderBottom: "1px solid #e2e8f0",
  };

  const buttonStyles = {
    py: "1",
    px: "2",
    rounded: "full",
  };

  return (
    <div className="container ml-2 mx-auto mt-5">
      <Link to="/bursaries/applicationform">
        <button className="bg-blue-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded mb-3">
          Add Applicant Details
        </button>
      </Link>
      <table style={tableStyles}>
        <thead>
          <tr>
            <th style={thStyles}>SNo</th>
            <th style={thStyles}>UPI</th>
            <th style={thStyles}>Fullname</th>
            <th style={thStyles}>School</th>
            <th style={thStyles}>KCPE Marks</th>
            <th style={thStyles}>Bursary Applied</th>
            <th style={thStyles}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((user, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td style={tdStyles}>{index + 1}</td>
                <td style={tdStyles}>{user.upi}</td>
                <td style={tdStyles}>{`${user.firstName} ${user.lastName}`}</td>
                <td style={tdStyles}>{user.primarySchool}</td>
                <td style={tdStyles}>{user.kcpeMarks}</td>
                <td style={tdStyles}>
                  {appliedBursary && (
                    <div>
                      {appliedBursary.bursaryScheme}{" "}
                      {appliedBursary.status && `(${appliedBursary.status})`}
                    </div>
                  )}
                </td>
                <td style={tdStyles}>
                  <button
                    style={{ ...buttonStyles, background: "#4299e1" }}
                    onClick={() => handleShowModal(user)}
                  >
                    View Details
                  </button>
                  <button
                    style={{ ...buttonStyles, background: "#48bb78" }}
                    onClick={() => handleOpenScholarshipModal(user)}
                    disabled={isApplying}
                  >
                    Check Scholarship
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <table className="min-w-full bg-white border border-gray-300 mt-8">
        <thead>
          <tr>
            <th className="py-2 text-left">Sno</th>
            <th className="py-2 text-left">Applicant</th>
            <th className="py-2 text-left">Bursary Scheme</th>
            <th className="py-2 text-left">Amount Awarded</th>
          </tr>
        </thead>
        <tbody>
          {applicantAwards.map((award, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="py-2">{award.sno}</td>
              <td className="py-2">{award.applicant}</td>
              <td className="py-2">{award.bursaryScheme}</td>
              <td className="py-2">{award.amountAwarded}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* User Details Modal */}
      {selectedUser && (
        <div
          className="bg-white p-8 rounded shadow-md overflow-y-auto"
          style={{ width: "600px", maxHeight: "80vh" }}
        >
          {Object.entries(selectedUser)
            .filter(
              ([key]) =>
                ![
                  "userId",
                  "needId",
                  "declarationId",
                  "parentsGuardiansInfoId",
                ].includes(key)
            )
            .map(([key, value]) => (
              <div key={key} className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  {key}:
                </label>
                <input
                  type="text"
                  value={Array.isArray(value) ? value.join("; ") : value}
                  className="border rounded w-full py-1 px-3"
                  readOnly
                />
              </div>
            ))}
          {/* Close Button for User Details Modal */}
          <button
            className="bg-blue-500 hover.bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleCloseModal}
          >
            Close
          </button>
        </div>
      )}

      {/* Scholarship Modal */}
      {isSelectingScholarship && (
        <div
          className="bg-white p-8 rounded shadow-md overflow-y-auto"
          style={{ width: "600px", maxHeight: "80vh" }}
        >
          <h2 className="text-2xl font-bold mb-4">Select a Scholarship</h2>

          {/* Dropdown for Bursary Scheme */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Bursary Scheme:
            </label>
            <select
              value={bursaryScheme}
              onChange={(e) => {
                setBursaryScheme(e.target.value);
                handleScholarshipSelect(e.target.value);
              }}
              className="border rounded w-full py-1 px-3"
            >
              <option value="" disabled>
                Select Bursary Scheme
              </option>
              {scholarshipData.map((scholarship) => (
                <option key={scholarship.name} value={scholarship.name}>
                  {scholarship.name}
                </option>
              ))}
            </select>
          </div>

          {/* Display Scholarship Details */}
          {scholarshipDetails && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Scholarship Details:
              </label>
              <div>{scholarshipDetails.descriptions}</div>
              <div>{scholarshipDetails.deadlineDate}</div>
              <div>{scholarshipDetails.isActive}</div>
              <div>{scholarshipDetails.location}</div>
            </div>
          )}

          {/* Input field for Partial/Full Scholarship */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Type of Scholarship:
            </label>
            <select
              value={scholarshipType}
              onChange={(e) => setScholarshipType(e.target.value)}
              className="border rounded w-full py-1 px-3"
            >
              <option value="" disabled>
                Select Type of Scholarship
              </option>
              <option value="partial">Partial Scholarship</option>
              <option value="full">Full Scholarship</option>
            </select>
          </div>

          {/* Input field for Scholarship Amount */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Amount Required:
            </label>
            <input
              type="number"
              value={scholarshipAmount}
              onChange={(e) => setScholarshipAmount(e.target.value)}
              className="border rounded w-full py-1 px-3"
              placeholder="Enter Amount"
            />
          </div>

          {/* Apply Button for Scholarship */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              handleApply();
              setIsSelectingScholarship(false);
            }}
            disabled={isApplying}
          >
            {isApplying ? "Applying..." : "Apply for Selected Scholarship"}
          </button>
          {/* Close Button for Scholarship Modal */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
            onClick={() => setIsSelectingScholarship(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
