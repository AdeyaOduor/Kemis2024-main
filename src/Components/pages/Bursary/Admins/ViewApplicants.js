import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewApplicants = () => {
  const [counties, setCounties] = useState([]);
  const [subcounties, setSubcounties] = useState([]);
  const [applicantsData, setApplicantsData] = useState([]);
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

  const fetchCounties = async () => {
    const url = "/generic2/api/Cascade/Counties";
    const baseurl = Homebaseurl + url;

    try {
      const response = await axios.get(baseurl, { headers });
      setCounties(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching counties data:", error);
    }
  };

  const fetchSubcounties = async (countyCode) => {
    const url = `/generic2/api/Cascade/SubCounties/${countyCode}`;
    const baseurl = Homebaseurl + url;

    try {
      const response = await axios.get(baseurl, { headers });
      setSubcounties(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching subcounties data:", error);
    }
  };

  const handleCountyChange = (e) => {
    const selectedCountyCode = e.target.value;
    setCountyFilter(selectedCountyCode);
    fetchSubcounties(selectedCountyCode);
    setSubcountyFilter("all");
  };

  const handleSubCountyChange = (e) => {
    setSubcountyFilter(e.target.value);
  };

  const fetchApplicants = async () => {
    try {
      // Update the URL to the correct API endpoint
      let urlhom = window.location.origin;
      let url = "/scholarshipapi/api/v1/Applications/getAllUserApplications";
      const response = await axios.get(urlhom + url);
      setApplicantsData(response.data);
    } catch (error) {
      console.error("Error fetching applicants data:", error);
    }
  };

  useEffect(() => {
    fetchCounties();
    fetchApplicants();
  }, []);

  const filteredApplicants = Array.isArray(applicantsData)
    ? applicantsData.filter((applicant) => {
        const matchesCounty =
          countyFilter === "all" || applicant.county === countyFilter;
        const matchesSubcounty =
          subcountyFilter === "all" || applicant.subcounty === subcountyFilter;

        return matchesCounty && matchesSubcounty;
      })
    : [];

  return (
    <div className="max-w-2xl mx-2 mt-8">
      <h1 className="text-2xl font-bold mb-4">View Applicants</h1>

      {/* Filters */}
      <div className="mb-4 flex space-x-4">
        <div>
          <label
            htmlFor="county"
            className="block text-sm font-medium text-gray-700"
          >
            County:
          </label>
          <select
            id="county"
            name="county"
            value={countyFilter}
            onChange={handleCountyChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="all">All Counties</option>
            {counties.map((county) => (
              <option key={county.county_Code} value={county.county_Code}>
                {county.county_Name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="subcounty"
            className="block text-sm font-medium text-gray-700"
          >
            Subcounty:
          </label>
          <select
            id="subcounty"
            name="subcounty"
            value={subcountyFilter}
            onChange={handleSubCountyChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="all">All Subcounties</option>
            {subcounties.map((subcounty) => (
              <option
                key={subcounty.sub_County_Code}
                value={subcounty.sub_County_Code}
              >
                {subcounty.sub_County_Name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Applicant List */}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              #
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
              County
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Subcounty
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Organization Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Type
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Amount
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredApplicants.map((applicant, index) => (
            <tr key={applicant.id}>
              <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {applicant.userName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {applicant.county}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {applicant.subCounty}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {applicant.organizationName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {applicant.applicationStatus}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {applicant.scholarshipType}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {applicant.scholarshipAmount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewApplicants;
