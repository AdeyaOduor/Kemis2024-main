import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

const ScholarshipTable = () => {
  const [filterCounty, setFilterCounty] = useState("all");
  const [filterSubCounty, setFilterSubCounty] = useState("all");
  const [applicants, setApplicants] = useState([]);
  const [countylist, setCountylist] = useState([]);
  const [scountylist, setScountylist] = useState([]);
  const [countyFilter, setCountyFilter] = useState("all");
  const [subcountyFilter, setSubcountyFilter] = useState("all");

  const Homebaseurl = `http://nemis.education.go.ke`;
  const crdpassword = "9876$Teta";
  const crdusername = "nemisadmin";
  const credentials = `${crdusername}:${crdpassword}`;
  const base64Credentials = btoa(credentials);
  const headers = {
    Authorization: `Basic ${base64Credentials}`,
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Methods": "GET, POST",
    "Access-Control-Allow-Headers": "X-Token",
    "Access-Control-Allow-Credentials": "true",
  };

  const getCounties = async () => {
    const url = "/generic2/api/Cascade/Counties";
    const baseurl = Homebaseurl + url;
    try {
      const response = await axios.get(baseurl, { headers });
      setCountylist(response.data);
    } catch (error) {
      console.error("Error fetching counties data:", error);
    }
  };

  const getSubCounties = async (countycode) => {
    const url = `/generic2/api/Cascade/SubCounties/${countycode}`;
    const baseurl = Homebaseurl + url;
    try {
      const response = await axios.get(baseurl, { headers });
      setScountylist(response.data);
    } catch (error) {
      console.error("Error fetching subcounties data:", error);
    }
  };

  const handleCountyChange = (e) => {
    const selectedCountyCode = e.target.value;
    setCountyFilter(selectedCountyCode);
    setSubcountyFilter("all");
    getSubCounties(selectedCountyCode);
  };

  const handleSubCountyChange = (e) => {
    setSubcountyFilter(e.target.value);
  };

  const fetchApplicants = async () => {
    let urlhom = window.location.origin;
    let url = "/scholarshipapi/api/v1/Applications/getAllUserApplications";
    try {
      const response = await axios.get(urlhom + url);
      setApplicants(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAction = (applicantId, award) => {
    console.log(
      `Applicant ${applicantId} ${award ? "awarded" : "denied"} scholarship`
    );
    // Implement logic for awarding or denying scholarship
  };

  const [selectedApplicantId, setSelectedApplicantId] = useState(null);
  const [selectedReviewData, setSelectedReviewData] = useState(null);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const handleViewReview = async (applicant) => {
    const { applicationId } = applicant;
    try {
      const urlhom = window.location.origin;
      const url =
        "/scholarshipapi/api/v1/Organization/applicationReview/" +
        applicationId;
      const response = await axios.get(urlhom + url);
      setSelectedReviewData(response.data);
      setShowReviewModal(true);
    } catch (error) {
      console.error("Error fetching review data:", error);
    }
  };

  const handleDownloadReviewFile = () => {
    // Implement logic to download the file
  };

  useEffect(() => {
    getCounties();
    getSubCounties("all");
    fetchApplicants();
  }, []);

  useEffect(() => {
    // Filter applicants when county or subcounty changes
    const filteredApplicants = applicants.filter((applicant) => {
      const matchesCounty =
        countyFilter === "all" || applicant.county === countyFilter;
      const matchesSubcounty =
        subcountyFilter === "all" || applicant.subcounty === subcountyFilter;
      return matchesCounty && matchesSubcounty;
    });

    // Update the state with the filtered applicants
    setApplicants(filteredApplicants);
  }, [countyFilter, subcountyFilter]);

  if (applicants.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <p>No applicants data available</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {/* Filter Section */}
      <div className="flex justify-end space-x-4">
        <div className="mb-2">
          <label
            htmlFor="county"
            className="block text-sm font-medium text-gray-600"
          >
            County
          </label>
          <select
            labelId="type-label"
            id="County"
            value={countyFilter}
            onChange={handleCountyChange}
            required
            className="mt-1 p-2 w-full border rounded"
          >
            <option value="all">All Counties</option>
            {countylist?.map((option) => (
              <option key={option.county_Name} value={option.county_Code}>
                {option.county_Name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-2">
          <label
            htmlFor="subCounty"
            className="block text-sm font-medium text-gray-600"
          >
            Sub County
          </label>
          <select
            labelId="subcounty-label"
            id="SubCounty"
            value={subcountyFilter}
            onChange={handleSubCountyChange}
            required
            className="mt-1 p-2 w-full border rounded"
          >
            <option value="all">All Subcounties</option>
            {scountylist?.map((option) => (
              <option
                key={option.sub_County_Name}
                value={option.sub_County_Code}
              >
                {option.sub_County_Name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table Header */}
      <table className="table-auto border-collapse border border-gray-800 w-full">
        <thead>
          <tr>
            <th className="p-2 border border-gray-800">SNo</th>
            <th className="p-2 border border-gray-800">County</th>
            <th className="p-2 border border-gray-800">SubCounty</th>
            <th className="p-2 border border-gray-800">Name</th>
            <th className="p-2 border border-gray-800">Applicant</th>
            <th className="p-2 border border-gray-800">Organization Name</th>
            <th className="p-2 border border-gray-800">UPI</th>
            <th className="p-2 border border-gray-800">Awarded Scholarship</th>
            <th className="p-2 border border-gray-800">View Review</th>
            <th className="p-2 border border-gray-800">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(applicants) ? (
            applicants.map((applicant, index) => (
              <tr key={applicant.id}>
                <td className="p-2 border border-gray-800">{index + 1}</td>
                <td className="p-2 border border-gray-800">
                  {applicant.county}
                </td>
                <td className="p-2 border border-gray-800">
                  {applicant.subCounty}
                </td>
                <td className="p-2 border border-gray-800">{applicant.name}</td>
                <td className="p-2 border border-gray-800">
                  {applicant.userName}
                </td>
                <td className="p-2 border border-gray-800">
                  {applicant.organizationName}
                </td>
                <td className="p-2 border border-gray-800">{applicant.upi}</td>
                <td className="p-2 border border-gray-800">
                  {applicant.awardedScholarship}
                </td>
                <td className="p-2 border border-gray-800">
                  <button
                    className="bg-blue-500 text-white p-2 rounded"
                    onClick={() => handleViewReview(applicant)}
                  >
                    View Review
                  </button>
                </td>
                <td className="p-2 border border-gray-800">
                  <button
                    className="bg-green-500 text-white p-2 rounded mr-2"
                    onClick={() => handleAction(applicant.id, true)}
                  >
                    Award Scholarship
                  </button>
                  <button
                    className="bg-red-500 text-white p-2 rounded"
                    onClick={() => handleAction(applicant.id, false)}
                  >
                    Deny Scholarship
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10">No applicants data available</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Review Details Modal */}
      <div
        className={`${
          showReviewModal ? "block" : "hidden"
        } fixed inset-0 overflow-y-auto`}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div
            className={`${
              showReviewModal
                ? "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:max-w-md"
                : "hidden"
            }`}
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    Review Details
                  </h3>
                  {selectedReviewData && (
                    <div className="mt-2">
                      <p>
                        Members Present: {selectedReviewData[0].membersPresent}
                      </p>
                      <p>
                        Vetting Remarks: {selectedReviewData[0].vettingRemarks}
                      </p>
                      <p>Score: {selectedReviewData[0].score}</p>
                      <p>Level of Need: {selectedReviewData[0].levelOfNeed}</p>
                      <p>
                        Date of Vetting: {selectedReviewData[0].dateOfVetting}
                      </p>
                      <p>
                        File Attachment:{" "}
                        <button
                          className="text-blue-500 underline cursor-pointer"
                          onClick={handleDownloadReviewFile}
                        >
                          Download
                        </button>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                onClick={() => setShowReviewModal(false)}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipTable;
