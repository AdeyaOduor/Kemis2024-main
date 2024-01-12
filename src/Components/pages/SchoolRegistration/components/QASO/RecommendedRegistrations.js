import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecommendedRegistrations = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedUserId, setExpandedUserId] = useState(null);

  const userData = JSON.parse(localStorage.getItem('user'));
  const applicant_ID = userData.applicant_ID;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let urlhom = window.location.origin;
        let url = '/schoolregapi/api/v1/Registration/getinstitutionbasic/' + applicant_ID;
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

    fetchData();
  }, [applicant_ID]);

  const handleViewMoreClick = (registrationId) => {
    setExpandedUserId(registrationId === expandedUserId ? null : registrationId);
  };

  const closePopup = () => {
    setExpandedUserId(null);
  };

  return (
    <div className="container mx-auto p-4">
      <table className=" table-auto  border border-gray-800 w-auto">
        <thead>
          <tr>
            <th className="p-1 border border-gray-800">Registration ID</th>
            <th className="p-1 border border-gray-800">Institution Name</th>
            <th className="p-1 border border-gray-800">Institution Level</th>
            <th className="p-1 border border-gray-800">Institution Gender</th>
            <th className="p-1 border border-gray-800">Telephone</th>
            <th className="p-1 border border-gray-800">Email</th>
            <th className="p-1 border border-gray-800">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="p-1 border border-gray-800">{user.registration_ID}</td>
              <td className="p-1 border border-gray-800">{user.institution_Name}</td>
              <td className="p-1 border border-gray-800">{user.inst_Level}</td>
              <td className="p-1 border border-gray-800">{user.institution_Gender}</td>
              <td className="p-1 border border-gray-800">{user.telephone}</td>
              <td className="p-1 border border-gray-800">{user.email}</td>
              <td className="p-1 border border-gray-800">
                <button
                  className="bg-blue-500 text-white p-2"
                  onClick={() => handleViewMoreClick(user.registration_ID)}
                >
                  View More
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {expandedUserId && (
        <div  className="flex fixed top-2 left-0 w-screen h-full overflow-auto">
          <div className="bg-gray-500 m-auto px-2" >
            {/* Popup Content */}
            {data.map((user) => (
              <div key={user.registration_ID} style={{ display: expandedUserId === user.registration_ID ? 'block' : 'none' }}>
                <strong>Registration ID:</strong> {user.registration_ID}
                <br />
                <strong>Institution Name:</strong> {user.institution_Name}
                <br />
                <strong>Institution Level:</strong> {user.inst_Level}
                <br />
                <strong>Institution Gender:</strong> {user.institution_Gender}
                <br />
                <strong>Telephone:</strong> {user.telephone}
                <br />               
                <strong>Email:</strong> {user.email}
                <br />
                <strong> accommodation_Type:</strong> {user.accommodation_Type}
                <br />
                <strong>application_Date:</strong> {user.application_Date}
                <br />
                <strong>business_Registration_Certificate:</strong> {user.email}
                <br />
                <strong>catered_Classes:</strong> {user.catered_Classes}
                <br />
                <strong>county:</strong> {user.county}
                <br />
                <strong>incorporation_Certificate:</strong> {user.incorporation_Certificate}
                <br />
                <strong>institution_Gender:</strong> {user.institution_Gender}
                <br />
                <strong>institution_SNE:</strong> {user.institution_SNE}
                <br />
                <strong>institution_Type:</strong> {user.institution_Type}
                <br />
                <strong>land_Acreage:</strong> {user.land_Acreage}
                <br />
                <strong>land_Lease_Agreement:</strong> {user.email}
                <br />
                <strong>land_Title_Deed:</strong> {user.email}
                <br />
                <strong>learner_Enrolment:</strong> {user.learner_Enrolment}
                <br />
                <strong>location:</strong> {user.location}
                <br />
                <strong>name_Change_Certificate:</strong> {user.email}
                <br />
                <strong>payment_Receipt_Number:</strong> {user.payment_Receipt_Number}
                <br />
                <strong>postal_Address:</strong> {user.postal_Address}
                <br />
                <strong>postal_Code:</strong> {user.postal_Code}
                <br />
                <strong>proprietor_Email:</strong> {user.proprietor_Email}
                <br />
                <strong>proprietor_FName:</strong> {user.proprietor_FName}
                <br />
                <strong>proprietor_LName:</strong> {user.proprietor_LName}
                <br />
                <strong>proprietor_Postal_Address:</strong> {user.proprietor_Postal_Address}
                <br />
                <strong>proprietor_Postal_Code:</strong> {user.proprietor_Postal_Code}
                <br />
                <strong>proprietor_Telephone:</strong> {user.proprietor_Telephone}
                <br />
                <strong>region:</strong> {user.region}
                <br />
                <strong>sponsor_Email:</strong> {user.sponsor_Email}
                <br />
                <strong>sponsor_FName:</strong> {user.sponsor_FName}
                <br />
                <strong>sponsor_LName:</strong> {user.sponsor_LName}
                <br />
                <strong>sponsor_Postal_Address:</strong> {user.sponsor_Postal_Address}
                <br />
                <strong>sponsor_Postal_Code:</strong> {user.sponsor_Postal_Code}
                <br />
                <strong>sponsor_Telephone:</strong> {user.sponsor_Telephone}
                <br />
                <strong>streams_Per_Class:</strong> {user.streams_Per_Class}
                <br />
                <strong>sub_County:</strong> {user.sub_County}
                <br />
                <strong>sub_Location:</strong> {user.sub_Location}
                <br />
                
                <strong>town:</strong> {user.town}
                <br />
                
                <strong>ward:</strong> {user.ward}
                <br />
               
                <button
                  className="close-button"
                  onClick={closePopup}
                >
                  Close
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecommendedRegistrations;
