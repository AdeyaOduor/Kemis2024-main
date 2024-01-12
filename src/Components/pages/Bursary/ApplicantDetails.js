import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ApplicantDetails = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userData = JSON.parse(localStorage.getItem('user'));
  const UserId = userData.userId;
  useEffect(() => {
    const fetchData = async () => {
      try {
        let urlhom = window.location.origin;
        let url = "/scholarshipapi/api/v1/Applications/getEntireUserDetails/" + UserId;
        console.log(urlhom + url);
        const response = await axios.get(urlhom + url);
        setData(response.data[0]);
        console.log(response.data[0]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <p className="font-bold text-lg">Error:</p>
        <p>Please fill out the forms and come back to view your details.</p>
      </div>
    );
  }


  return (
    <>
      {/* userDetails Table */}
      <h2 className="text-lg font-semibold mb-2">User Details</h2>
      <table className="table-auto border-collapse border border-gray-800">
        <tbody>
          <tr>
            <td className="p-2 border border-gray-800">First Name</td>
            <td className="p-2 border border-gray-800">{data.firstName}</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-800">Middle Name</td>
            <td className="p-2 border border-gray-800">{data.middleName}</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-800">Last Name</td>
            <td className="p-2 border border-gray-800">{data.lastName}</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-800">Gender</td>
            <td className="p-2 border border-gray-800">{data.gender}</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-800">Date of Birth</td>
            <td className="p-2 border border-gray-800">{data.dateOfBirth}</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-800">Mobile Number</td>
            <td className="p-2 border border-gray-800">{data.mobileNo}</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-800">Alternative Mobile Number</td>
            <td className="p-2 border border-gray-800">{data.alternativeMobileNo}</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-800">Physical Address</td>
            <td className="p-2 border border-gray-800">{data.physicalAddress}</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-800">County</td>
            <td className="p-2 border border-gray-800">{data.county}</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-800">Sub County</td>
            <td className="p-2 border border-gray-800">{data.subCounty}</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-800">Ward</td>
            <td className="p-2 border border-gray-800">{data.ward}</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-800">Location</td>
            <td className="p-2 border border-gray-800">{data.location}</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-800">Sub Location</td>
            <td className="p-2 border border-gray-800">{data.subLocation}</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-800">Primary School</td>
            <td className="p-2 border border-gray-800">{data.primarySchool}</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-800">Primary School Postal Address</td>
            <td className="p-2 border border-gray-800">{data.primarySchoolPostalAddress}</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-800">Primary School Telephone No</td>
            <td className="p-2 border border-gray-800">{data.primarySchoolTelephoneNo}</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-800">KCPE Index No</td>
            <td className="p-2 border border-gray-800">{data.kcpeIndexNo}</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-800">KCPE Marks</td>
            <td className="p-2 border border-gray-800">{data.kcpeMarks}</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-800">KCPE Year</td>
            <td className="p-2 border border-gray-800">{data.kcpeYear}</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-800">KCPE Attempts</td>
            <td className="p-2 border border-gray-800">{data.kcpeAttempts}</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-800">Repeated Classes</td>
            <td className="p-2 border border-gray-800">{data.repeatedClasses}</td>
          </tr>
        </tbody>
      </table>



      {/* ParentGuardian Table */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Parent/Guardian Details</h2>
        <table className="table-auto border-collapse border border-gray-800">
          <tbody>
            <tr>
              <td className="p-2 border border-gray-800">Father's Name</td>
              <td className="p-2 border border-gray-800">{`${data.fatherFirstName} ${data.fatherMiddleName} ${data.fatherSurName}`}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Father's ID Number</td>
              <td className="p-2 border border-gray-800">{data.fathersIdNumber}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Father's Mobile Number</td>
              <td className="p-2 border border-gray-800">{data.fathersMobilNumber}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Father's County</td>
              <td className="p-2 border border-gray-800">{data.fatherCounty}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Father's Sub County</td>
              <td className="p-2 border border-gray-800">{data.fatherSubCounty}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Father's Ward</td>
              <td className="p-2 border border-gray-800">{data.fatherWard}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Father's Location</td>
              <td className="p-2 border border-gray-800">{data.fatherLocation}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Father's Sub Location</td>
              <td className="p-2 border border-gray-800">{data.fatherSubLocation}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Is Father Deceased</td>
              <td className="p-2 border border-gray-800">{data.isFatherDeceased}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Father Deceased File Attachment</td>
              <td className="p-2 border border-gray-800">{data.fatherDeceasedFileAttachment}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Father's Source of Income</td>
              <td className="p-2 border border-gray-800">{data.fatherSourceOfIncome}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Mother's Name</td>
              <td className="p-2 border border-gray-800">{`${data.motherFirstName} ${data.motherMiddleName} ${data.motherSurName}`}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Mother's ID Number</td>
              <td className="p-2 border border-gray-800">{data.mothersIdNumber}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Mother's Mobile Number</td>
              <td className="p-2 border border-gray-800">{data.mothersMobileNumber}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Mother's County</td>
              <td className="p-2 border border-gray-800">{data.motherCounty}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Mother's Sub County</td>
              <td className="p-2 border border-gray-800">{data.motherSubCounty}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Mother's Ward</td>
              <td className="p-2 border border-gray-800">{data.motherWard}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Mother's Location</td>
              <td className="p-2 border border-gray-800">{data.motherLocation}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Mother's Sub Location</td>
              <td className="p-2 border border-gray-800">{data.motherSubLocation}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Is Mother Deceased</td>
              <td className="p-2 border border-gray-800">{data.isMotherDeceased}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Mother Deceased File Attachment</td>
              <td className="p-2 border border-gray-800">{data.motherDeceasedFileAttachment}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Mother's Source of Income</td>
              <td className="p-2 border border-gray-800">{data.motherSourceOfIncome}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Guardian's Name</td>
              <td className="p-2 border border-gray-800">{`${data.guardianFirstName} ${data.guardianMiddleName} ${data.guardianSurName}`}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Guardian's ID Number</td>
              <td className="p-2 border border-gray-800">{data.guardianIdNumber}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Guardian's Mobile Number</td>
              <td className="p-2 border border-gray-800">{data.guardianMobileNumber}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Guardian's County</td>
              <td className="p-2 border border-gray-800">{data.guardianCounty}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Guardian's Sub County</td>
              <td className="p-2 border border-gray-800">{data.guardianSubCounty}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Guardian's Ward</td>
              <td className="p-2 border border-gray-800">{data.guardianWard}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Guardian's Location</td>
              <td className="p-2 border border-gray-800">{data.guardianLocation}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Guardian's Sub Location</td>
              <td className="p-2 border border-gray-800">{data.guardianSubLocation}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Guardian's Source of Income</td>
              <td className="p-2 border border-gray-800">{data.guardianSourceOfIncome}</td>
            </tr>
          </tbody>
        </table>
      </div>


      {/* Siblings Table */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Siblings Details</h2>
        <table className="table-auto border-collapse border border-gray-800">
          <tbody>
            <tr>
              <td className="p-2 border border-gray-800">Siblings Info</td>
              <td className="p-2 border border-gray-800">{data.siblingsInfo}</td>
            </tr>
          </tbody>
        </table>
      </div>


      {/* Need Table */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Need Details</h2>
        <table className="table-auto border-collapse border border-gray-800">
          <tbody>
            <tr>
              <td className="p-2 border border-gray-800">Why Applying</td>
              <td className="p-2 border border-gray-800">{data.whyApplying}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Received Financial Support</td>
              <td className="p-2 border border-gray-800">{data.receivedFinancialSupport}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Financial Support Details</td>
              <td className="p-2 border border-gray-800">{data.financialSupportDetails}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Has Disability</td>
              <td className="p-2 border border-gray-800">{data.hasDisability}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Disability Description</td>
              <td className="p-2 border border-gray-800">{data.disabilityDescription}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Inheritance Description</td>
              <td className="p-2 border border-gray-800">{data.inheritanceDescription}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Living With</td>
              <td className="p-2 border border-gray-800">{data.livingWith}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Parents Employed</td>
              <td className="p-2 border border-gray-800">{data.parentsEmployed}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Parents Job Details</td>
              <td className="p-2 border border-gray-800">{data.parentsJobDetails}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Parents Own Business</td>
              <td className="p-2 border border-gray-800">{data.parentsOwnBusiness}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Business Details</td>
              <td className="p-2 border border-gray-800">{data.businessDetails}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Parents Own Land</td>
              <td className="p-2 border border-gray-800">{data.parentsOwnLand}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Land Details</td>
              <td className="p-2 border border-gray-800">{data.landDetails}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Other Assets Income</td>
              <td className="p-2 border border-gray-800">{data.otherAssetsIncome}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Other Assets Income Details</td>
              <td className="p-2 border border-gray-800">{data.otherAssetsIncomeDetails}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Family Affected By Conflict</td>
              <td className="p-2 border border-gray-800">{data.familyAffectedByConflict}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Family Conflict Details</td>
              <td className="p-2 border border-gray-800">{data.familyConflictDetails}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Type Of House</td>
              <td className="p-2 border border-gray-800">{data.typeOfHouse}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Other Disadvantages Or Vulnerabilities</td>
              <td className="p-2 border border-gray-800">{data.otherDisadvantagesOrVulnerabilities}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Siblings In Secondary School</td>
              <td className="p-2 border border-gray-800">{data.siblingsInSecondarySchool}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Siblings In University</td>
              <td className="p-2 border border-gray-800">{data.siblingsInUniversity}</td>
            </tr>
          </tbody>
        </table>
      </div>


      {/* Declaration Table */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Declaration Details</h2>
        <table className="table-auto border-collapse border border-gray-800">
          <tbody>
            <tr>
              <td className="p-2 border border-gray-800">Applicant Declaration</td>
              <td className="p-2 border border-gray-800">{data.applicantDeclaration}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Applicant Signature</td>
              <td className="p-2 border border-gray-800">{data.applicantSignature}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-800">Declaration Date</td>
              <td className="p-2 border border-gray-800">{data.declarationDate}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </ >

  );
};

export default ApplicantDetails;
