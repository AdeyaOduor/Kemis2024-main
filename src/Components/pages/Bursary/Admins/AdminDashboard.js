import axios from "axios";
import React, { useState, useEffect } from "react";
import html2pdf from "html2pdf.js";

const AdminDashboard = () => {
  const [applicants, setApplicants] = useState([]);
  const [vettingData, setVettingData] = useState({
    MembersPresent: "",
    VettingRemarks: "",
    Score: 0,
    LevelOfNeed: "",
    DateOfVetting: "",
    FileAttachment: "",
  });
  const [vettingSuccess, setVettingSuccess] = useState(false);
  const [counties, setCounties] = useState([]);
  const [subcounties, setSubcounties] = useState([]);
  const [countyFilter, setCountyFilter] = useState("all");
  const [subcountyFilter, setSubcountyFilter] = useState("all");
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

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
      const response = await axios.get(
        "/scholarshipapi/api/v1/Applications/getAllUserApplications"
      );
      setApplicants(response.data);
    } catch (error) {
      console.error("Error fetching applicants data:", error);
    }
  };

  useEffect(() => {
    fetchCounties();
    fetchApplicants();
  }, []);

  const handleVerification = async (applicant) => {
    try {
      const { applicationId } = applicant;
      console.log(applicationId);

      const urlhom = window.location.origin;
      const url =
        "/scholarshipapi/api/v1/Applications/getApplicantDetails/" +
        applicationId;
      const response = await axios.get(urlhom + url);

      setUserDetails(response.data[0]);

      // Generate PDF from the fetched user details
      const userDetailHTML = generateUserDetailHTML(response.data[0]);
      downloadPDF(userDetailHTML, `UserDetails_${applicationId}.pdf`);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const generateUserDetailHTML = (userDetails) => {
    return `
    <div style="text-align: center;">
      <img src="https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/271764517_248769310726051_8480873332833271950_n.png?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHCfxmOE_i7k0GQVKRRNG3OC83d3sM1SAYLzd3ewzVIBl96QJJ2D-0dcylxoJtilzo-GqhhPz4xjNb5Gt-JvHbR&_nc_ohc=i6TV7vp6hxoAX-yEa7P&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfC27Co_ECBAl1Oc4Q1mfp63NPMfZ89mmqpW4SQCBEyWmA&oe=6584E364" alt="Logo" class="w-20 h-20 mx-auto" />
    <h1 class="text-2xl font-bold">MINISTRY OF EDUCATION</h1>
    <h2 class="text-xl">Scholarship Details</h2>
    </div>
    <div class="mt-20">
    <h2 class="text-xl">User Details</h2>
      <p><strong>Name:</strong> ${userDetails.firstName} ${
      userDetails.middleName ? userDetails.middleName : ""
    } ${userDetails.lastName}</p>
      <p><strong>Gender:</strong> ${userDetails.gender}</p>
      <p><strong>Date of Birth:</strong> ${userDetails.dateOfBirth}</p>
      <p><strong>Mobile No:</strong> ${userDetails.mobileNo}</p>
      <p><strong>Alternative Mobile No:</strong> ${
        userDetails.alternativeMobileNo || "N/A"
      }</p>
      <p><strong>Physical Address:</strong> ${userDetails.physicalAddress}</p>
      <p><strong>County:</strong> ${userDetails.county}</p>
      <p><strong>Subcounty:</strong> ${userDetails.subCounty}</p>
      <p><strong>Constituency:</strong> ${userDetails.constituency}</p>
      <p><strong>Ward:</strong> ${userDetails.ward}</p>
      <p><strong>Location:</strong> ${userDetails.location}</p>
      <p><strong>Sublocation:</strong> ${userDetails.subLocation}</p>
      <p><strong>Level:</strong> ${userDetails.level}</p>
      <p><strong>Primary School:</strong> ${userDetails.primarySchool}</p>
      <p><strong>Primary School Postal Address:</strong> ${
        userDetails.primarySchoolPostalAddress
      }</p>
      <p><strong>Primary School Telephone No:</strong> ${
        userDetails.primarySchoolTelephoneNo || "N/A"
      }</p>
      <p><strong>KCPE Index No:</strong> ${userDetails.kcpeIndexNo || "N/A"}</p>
      <p><strong>KCPE Marks:</strong> ${userDetails.kcpeMarks || "N/A"}</p>
      <p><strong>KCPE Year:</strong> ${userDetails.kcpeYear || "N/A"}</p>
      <p><strong>KCPE Attempts:</strong> ${
        userDetails.kcpeAttempts || "N/A"
      }</p>
      <p><strong>Repeated Classes:</strong> ${
        userDetails.repeatedClasses || "N/A"
      }</p>
      <h2 class="text-xl">Parents/Guardian Details</h2>
      <p><strong>Father's Name:</strong> ${
        userDetails.fatherFirstName
          ? `${userDetails.fatherFirstName} ${
              userDetails.fatherMiddleName || ""
            } ${userDetails.fatherSurName || ""}`
          : "N/A"
      }</p>
      <p><strong>Father's ID Number:</strong> ${
        userDetails.fathersIdNumber || "N/A"
      }</p>
      <p><strong>Father's Mobile Number:</strong> ${
        userDetails.fathersMobilNumber || "N/A"
      }</p>
      <p><strong>Father's County:</strong> ${
        userDetails.fatherCounty || "N/A"
      }</p>
      <p><strong>Father's Subcounty:</strong> ${
        userDetails.fatherSubCounty || "N/A"
      }</p>
      <p><strong>Father's Ward:</strong> ${userDetails.fatherWard || "N/A"}</p>
      <p><strong>Father's Location:</strong> ${
        userDetails.fatherLocation || "N/A"
      }</p>
      <p><strong>Father's Sublocation:</strong> ${
        userDetails.fatherSubLocation || "N/A"
      }</p>
      <p><strong>Is Father Deceased:</strong> ${
        userDetails.isFatherDeceased === "true" ? "Yes" : "No"
      }</p>
      <p><strong>Father's Deceased File Attachment:</strong> ${
        userDetails.fatherDeceasedFileAttachment || "N/A"
      }</p>
      <p><strong>Father's Source of Income:</strong> ${
        userDetails.fatherSourceOfIncome || "N/A"
      }</p>
      <p><strong>Mother's Name:</strong> ${
        userDetails.motherFirstName
          ? `${userDetails.motherFirstName} ${
              userDetails.motherMiddleName || ""
            } ${userDetails.motherSurName || ""}`
          : "N/A"
      }</p>
      <p><strong>Mother's ID Number:</strong> ${
        userDetails.mothersIdNumber || "N/A"
      }</p>
      <p><strong>Mother's Mobile Number:</strong> ${
        userDetails.mothersMobileNumber || "N/A"
      }</p>
      <p><strong>Mother's County:</strong> ${
        userDetails.motherCounty || "N/A"
      }</p>
      <p><strong>Mother's Subcounty:</strong> ${
        userDetails.motherSubCounty || "N/A"
      }</p>
      <p><strong>Mother's Ward:</strong> ${userDetails.motherWard || "N/A"}</p>
      <p><strong>Mother's Location:</strong> ${
        userDetails.motherLocation || "N/A"
      }</p>
      <p><strong>Mother's Sublocation:</strong> ${
        userDetails.motherSubLocation || "N/A"
      }</p>
      <p><strong>Is Mother Deceased:</strong> ${
        userDetails.isMotherDeceased === "true" ? "Yes" : "No"
      }</p>
      <p><strong>Mother's Deceased File Attachment:</strong> ${
        userDetails.motherDeceasedFileAttachment || "N/A"
      }</p>
      <p><strong>Mother's Source of Income:</strong> ${
        userDetails.motherSourceOfIncome || "N/A"
      }</p>
      <p><strong>Guardian's Name:</strong> ${
        userDetails.guardianFirstName
          ? `${userDetails.guardianFirstName} ${
              userDetails.guardianMiddleName || ""
            } ${userDetails.guardianSurName || ""}`
          : "N/A"
      }</p>
      <p><strong>Guardian's ID Number:</strong> ${
        userDetails.guardianIdNumber || "N/A"
      }</p>
      <p><strong>Guardian's Mobile Number:</strong> ${
        userDetails.guardianMobileNumber || "N/A"
      }</p>
      <p><strong>Guardian's County:</strong> ${
        userDetails.guardianCounty || "N/A"
      }</p>
      <p><strong>Guardian's Subcounty:</strong> ${
        userDetails.guardianSubCounty || "N/A"
      }</p>
      <p><strong>Guardian's Ward:</strong> ${
        userDetails.guardianWard || "N/A"
      }</p>
      <p><strong>Guardian's Location:</strong> ${
        userDetails.guardianLocation || "N/A"
      }</p>
      <p><strong>Guardian's Sublocation:</strong> ${
        userDetails.guardianSubLocation || "N/A"
      }</p>
      <p><strong>Guardian's Source of Income:</strong> ${
        userDetails.guardianSourceOfIncome || "N/A"
      }</p>
      <h2 class="text-xl">Siblings Details</h2>
      <p><strong>Siblings Info:</strong> ${
        userDetails.siblingsInfo || "N/A"
      }</p>
      <h2 class="text-xl">Reasons For Applying</h2>
      <p><strong>Why Applying:</strong> ${
        userDetails.whyApplying || "Reason for applying not provided"
      }</p>
      <p><strong>Received Financial Support:</strong> ${
        userDetails.receivedFinancialSupport === "true" ? "Yes" : "No"
      }</p>
      <p><strong>Financial Support Details:</strong> ${
        userDetails.financialSupportDetails || "N/A"
      }</p>
      <p><strong>Has Disability:</strong> ${
        userDetails.hasDisability === "true" ? "Yes" : "No"
      }</p>
      <p><strong>Disability Description:</strong> ${
        userDetails.disabilityDescription || "N/A"
      }</p>
      <p><strong>Inheritance Description:</strong> ${
        userDetails.inheritanceDescription || "N/A"
      }</p>
      <p><strong>Living With:</strong> ${userDetails.livingWith || "N/A"}</p>
      <p><strong>Parents Employed:</strong> ${
        userDetails.parentsEmployed === "true" ? "Yes" : "No"
      }</p>
      <p><strong>Parents Job Details:</strong> ${
        userDetails.parentsJobDetails || "N/A"
      }</p>
      <p><strong>Parents Own Business:</strong> ${
        userDetails.parentsOwnBusiness === "true" ? "Yes" : "No"
      }</p>
      <p><strong>Business Details:</strong> ${
        userDetails.businessDetails || "N/A"
      }</p>
      <p><strong>Parents Own Land:</strong> ${
        userDetails.parentsOwnLand === "true" ? "Yes" : "No"
      }</p>
      <p><strong>Land Details:</strong> ${userDetails.landDetails || "N/A"}</p>
      <p><strong>Other Assets/Income:</strong> ${
        userDetails.otherAssetsIncome === "true" ? "Yes" : "No"
      }</p>
      <p><strong>Other Assets/Income Details:</strong> ${
        userDetails.otherAssetsIncomeDetails || "N/A"
      }</p>
      <p><strong>Family Affected by Conflict:</strong> ${
        userDetails.familyAffectedByConflict === "true" ? "Yes" : "No"
      }</p>
      <p><strong>Family Conflict Details:</strong> ${
        userDetails.familyConflictDetails || "N/A"
      }</p>
      <p><strong>Type of House:</strong> ${userDetails.typeOfHouse || "N/A"}</p>
      <p><strong>Other Disadvantages or Vulnerabilities:</strong> ${
        userDetails.otherDisadvantagesOrVulnerabilities || "N/A"
      }</p>
      <p><strong>Siblings in Secondary School:</strong> ${
        userDetails.siblingsInSecondarySchool || "N/A"
      }</p>
      <p><strong>Siblings in University:</strong> ${
        userDetails.siblingsInUniversity || "N/A"
      }</p>
      <h2 class="text-xl">User Declaration</h2>
      <p><strong>Declaration:</strong> ${
        userDetails.applicantDeclaration || "N/A"
      }</p>
      <p><strong>Applicant Signature(ID NUMBER):</strong> ${
        userDetails.applicantSignature || "N/A"
      }</p>
      <p><strong>Declaration Date :</strong> ${
        userDetails.declarationDate || "N/A"
      }</p>
    </>
      <div style="margin-top: 30px;">
        <p>
          I, the undersigned, certify that the information provided in this document is true and accurate
          to the best of my knowledge. I understand that providing false information may result in
          disqualification from the scholarship program.
        </p>
        <p style="margin-top: 20px;"><strong> Applicant's Signature: ______________________</strong></p>
        <p><strong>Date: ______________________</strong></p>
      </div>
      <div style="margin-top: 20px;">
            <h3 class="text-center">Signatories</h3>
    <table class="w-full">
        <tr>
            <th class="border px-4 py-2">Name</th>
            <th class="border px-4 py-2">MobileNo</th>
            <th class="border px-4 py-2">Designation</th>
            <th class="border px-4 py-2">Signature</th>
        </tr>
        <tr>
            <td class="border px-4 py-2"></td>
            <td class="border px-4 py-2"></td>
            <td class="border px-4 py-2"></td>
            <td class="border px-4 py-2"></td>
        </tr>
        <tr>
            <td class="border px-4 py-2"></td>
            <td class="border px-4 py-2"></td>
            <td class="border px-4 py-2"></td>
            <td class="border px-4 py-2"></td>
        </tr>
    </table>
</div>
<div class="mt-8 text-center">
    <p class="text-red-500">
        Warning: This document is an official government record. Any unauthorized use or alteration of
        the information contained herein may lead to legal consequences.
    </p>
</div>
<div class="mt-8">
    <h3 class="text-center">Stamp</h3>
    <p>Stamp goes here</p>
</div>
</div>

  `;
  };

  const downloadPDF = (html, filename) => {
    const pdfOptions = {
      margin: 10,
      filename: filename,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(html).set(pdfOptions).save();
  };

  useEffect(() => {
    let urlhom = window.location.origin;
    let url = "/scholarshipapi/api/v1/Applications/getAllUserApplications";
    const fetchData = async () => {
      try {
        const response = await axios.get(urlhom + url);
        setApplicants(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleVetting = (applicant) => {
    const { applicationId } = applicant;
    setSelectedApplicant(applicationId);
  };

  const handleVettingSubmit = async () => {
    try {
      const data = {
        applicationId: selectedApplicant,
        MembersPresent: vettingData.MembersPresent,
        VettingRemarks: vettingData.VettingRemarks,
        Score: vettingData.Score,
        LevelOfNeed: vettingData.LevelOfNeed,
        DateOfVetting: vettingData.DateOfVetting,
        FileAttachment: vettingData.FileAttachment,
      };

      let urlhom = window.location.origin;
      let url = "/scholarshipapi/api/v1/Organization/addApplicationReview";
      const response = await axios.post(urlhom + url, data);
      console.log("Vetting Data Posted:", response.data);

      setVettingData({
        MembersPresent: "",
        VettingRemarks: "",
        Score: 0,
        LevelOfNeed: "",
        DateOfVetting: "",
        FileAttachment: "",
      });
      setSelectedApplicant(null);
      setVettingSuccess(true);

      setTimeout(() => {
        setVettingSuccess(false);
      }, 2000);
    } catch (error) {
      console.error("Error posting vetting data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVettingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCloseVetting = () => {
    setSelectedApplicant(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Vetting Data:", vettingData);
  };

  useEffect(() => {
    fetchCounties();
  }, []);

  useEffect(() => {
    fetchSubcounties(countyFilter);
  }, [countyFilter]);

  const filteredApplicants = Array.isArray(applicants)
    ? applicants.filter((applicant) => {
        const matchesCounty =
          countyFilter === "all" || applicant.county === countyFilter;
        const matchesSubcounty =
          subcountyFilter === "all" || applicant.subcounty === subcountyFilter;

        return matchesCounty && matchesSubcounty;
      })
    : [];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>

      {/* Filter Section */}
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            County:
          </label>
          <select
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={countyFilter}
            onChange={handleCountyChange}
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
          <label className="block text-sm font-medium text-gray-700">
            Subcount:
          </label>
          <select
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={subcountyFilter}
            onChange={handleSubCountyChange}
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

      {/* Applicant Table */}
      <table className="table-auto border-collapse border border-gray-800 w-full">
        <thead>
          <tr>
            <th className="p-2 border border-gray-800">SNO</th>
            <th className="p-2 border border-gray-800">Name</th>
            <th className="p-2 border border-gray-800">County</th>
            <th className="p-2 border border-gray-800">Subcounty</th>
            <th className="p-2 border border-gray-800">Scholarship Name</th>
            <th className="p-2 border border-gray-800">Organization Name</th>
            <th className="p-2 border border-gray-800">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(applicants) && applicants.length > 0 ? (
            applicants.map((applicant, index) => (
              <tr key={applicant.userApplicationScholarshipId}>
                <td className="p-2 border border-gray-800">{index + 1}</td>
                <td className="p-2 border border-gray-800">
                  {applicant.userName}
                </td>
                <td className="p-2 border border-gray-800">
                  {applicant.county}
                </td>
                <td className="p-2 border border-gray-800">
                  {applicant.subCounty}
                </td>
                <td className="p-2 border border-gray-800">{applicant.name}</td>
                <td className="p-2 border border-gray-800">
                  {applicant.organizationName}
                </td>
                <td className="p-2 border border-gray-800 space-x-2">
                  <button
                    onClick={() => handleVerification(applicant)}
                    className="flex items-center text-yellow-500 bg-yellow-100 px-3 py-1 rounded-md"
                  >
                    Verify
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleVetting(applicant)}
                    className="flex items-center text-blue-500 bg-blue-100 px-3 py-1 rounded-md"
                  >
                    Vetting
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="7"
                className="p-2 border border-gray-800 text-center"
              >
                No applicants found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Vetting Form Dropdown */}
      {selectedApplicant !== null && (
        <div className="mt-4">
          {vettingSuccess && (
            <div className="bg-green-200 p-2 rounded-md mb-2">
              Vetting successful.
            </div>
          )}
          <h2 className="text-xl font-semibold mb-2">Vet Applicant</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="MembersPresent"
                className="block text-sm font-medium text-gray-700"
              >
                Members Present
              </label>
              <input
                type="text"
                id="MembersPresent"
                name="MembersPresent"
                value={vettingData.MembersPresent}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="VettingRemarks"
                className="block text-sm font-medium text-gray-700"
              >
                Vetting Remarks
              </label>
              <textarea
                id="VettingRemarks"
                name="VettingRemarks"
                value={vettingData.VettingRemarks}
                onChange={handleChange}
                rows="4"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="Score"
                className="block text-sm font-medium text-gray-700"
              >
                Score
              </label>
              <input
                type="number"
                id="Score"
                name="Score"
                value={vettingData.Score}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="LevelOfNeed"
                className="block text-sm font-medium text-gray-700"
              >
                Level of Need
              </label>
              <input
                type="text"
                id="LevelOfNeed"
                name="LevelOfNeed"
                value={vettingData.LevelOfNeed}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="DateOfVetting"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Vetting
              </label>
              <input
                type="date"
                id="DateOfVetting"
                name="DateOfVetting"
                value={vettingData.DateOfVetting}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="FileAttachment"
                className="block text-sm font-medium text-gray-700"
              >
                File Attachment
              </label>
              <input
                type="file"
                id="FileAttachment"
                name="FileAttachment"
                value={vettingData.FileAttachment}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <button
                type="button"
                onClick={handleCloseVetting}
                className="bg-gray-500 text-white p-2 rounded-md mr-2"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleVettingSubmit}
                className="bg-blue-500 text-white p-2 rounded-md"
              >
                Submit Vetting
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
