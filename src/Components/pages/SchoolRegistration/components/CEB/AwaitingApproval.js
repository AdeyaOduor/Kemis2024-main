import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AwaitingApproval = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [expandedUserId, setExpandedUserId] = useState(null);

    const userData = JSON.parse(localStorage.getItem('user'));
    const applicant_ID = userData.applicant_ID;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // const handleFormSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('Form Data:', formData);
    // };
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            let urlhom = window.location.origin;
            let url = '/schoolregapi/api/v1/Registration/getinstitutionbasic/' + applicant_ID;
            console.log(urlhom + url);
            const response = await axios.get(urlhom + url);
            
            // Assuming response.data contains the registration_ID
            const registration_ID = response.data.registration_ID;
            console.log('Registration ID:', registration_ID);
      
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

    // const handleViewMoreClick = (registrationId) => {
    //     setExpandedUserId(registrationId === expandedUserId ? null : registrationId);
    //     console.log(registrationId)
    // };

    const handleViewMoreClick = (registrationId) => {
        // Toggle expandedUserId
        setExpandedUserId(registrationId === expandedUserId ? null : registrationId);
      
        // Store registrationId in local storage
        localStorage.setItem('selectedRegistrationId', registrationId);
        console.log(registrationId);
      };

    const closePopup = () => {
        setExpandedUserId(null);
    };
    
    // const handleFormSubmit = async (e) => {
    //     e.preventDefault();
      
    //     try {
    //     //   const userData = JSON.parse(localStorage.getItem('registration_ID'));
    //     const storedRegistrationId = localStorage.getItem('selectedRegistrationId');

    //       console.log("my regid",'registration_ID')
    //       const Registration_ID = storedRegistrationId.registration_ID;
    //       console.log("registration_ID is", Registration_ID);
    //       let urlhom = window.location.origin;
    //       let url = "/schoolregapi/api/v1/Registration/updateregscde" + Registration_ID;
    //       console.log(url);
    //       const response = await axios.post(urlhom + url, formData);
    //       console.log("my data", response);
    //     } catch (error) {
    //       console.error('Error submitting form:', error);
    //     }
    //   };
    const handleFormSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const storedRegistrationId = localStorage.getItem('selectedRegistrationId');
      
          console.log("Stored Registration ID:", storedRegistrationId);
      
          const Registration_ID = storedRegistrationId; // No need for JSON.parse
          console.log("Registration_ID is", Registration_ID);
      
          let urlhom = window.location.origin;
          let url = "/schoolregapi/api/v1/Registration/updateregscde/" + Registration_ID;
          console.log(url);
      
          const response = await axios.post(urlhom + url, formData);
          console.log("Response:", response);
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };
      
      
    

    const [formData, setFormData] = useState({
        Buildings_Nature: '',
        Recommender: '',
        Recommender_County: '',
        Recommender_Sub_County: '',
        QAS_Assessment_Report: '',
        QAS_Verdict: '',
        Public_Health_Report: '',
        Public_Health_Verdict: '',
        Public_Works_Report: '',
        Public_Works_Verdict: '',
        NEMA_Assessment_Report: '',
        NEMA_Verdict: '',
    });

    return (
        <div className="container mx-auto p-4">
            <table className=" table-auto  border border-gray-800 w-fit">
                <thead>
                    <tr>
                        <th className="p-1 border border-gray-800">Registration ID</th>
                        <th className="p-1 border border-gray-800">Institution Name</th>
                        <th className="p-1 border border-gray-800">Institution Level</th>
                        <th className="p-1 border border-gray-800">Status</th>
                        <th className="p-1 border border-gray-800">User</th>
                        <th className="p-1 border border-gray-800">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                            <td className="p-1 border border-gray-800">{user.registration_ID}</td>
                            <td className="p-1 border border-gray-800">{user.institution_Name}</td>
                            <td className="p-1 border border-gray-800">{user.inst_Level}</td>
                            <td className="p-1 border border-gray-800">{user.status}</td>
                            <td className="p-1 border border-gray-800">{user.username}</td>
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
                <div className="flex fixed top-2 left-0 w-screen h-full overflow-auto">
                    <div className="bg-gray-500 m-5 px-10 items-center h-fit w-1/2 float-right" >
                        {data.map((user) => (
                            <div key={user.registration_ID} style={{ display: expandedUserId === user.registration_ID ? 'block' : 'none' }}>
                                <form onSubmit={handleFormSubmit}>
                                    <div>
                                        <label htmlFor="institutionName">Institution Name:</label>
                                        <input
                                            type="text"
                                            id="institutionName"
                                            name="institutionName"
                                            value={user.institution_Name || ''}
                                            readOnly
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="registration_ID">Registration_ID:</label>
                                        <input
                                            type="text"
                                            id="registration_ID"
                                            name="registration_ID"
                                            value={user.registration_ID || ''}
                                            readOnly
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="institutionLevel">Institution Level:</label>
                                        <input
                                            type="text"
                                            id="institutionLevel"
                                            name="institutionLevel"
                                            value={user.inst_Level || ''}
                                            readOnly
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="institutionGender">Institution Gender:</label>
                                        <input
                                            type="text"
                                            id="institutionGender"
                                            name="institutionGender"
                                            value={user.institution_Gender || ''}
                                            readOnly
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="telephone">Telephone:</label>
                                        <input
                                            type="tel"
                                            id="telephone"
                                            name="telephone"
                                            value={user.telephone || ''}
                                            readOnly
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email">Email:</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={user.email || ''}
                                            readOnly
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="accommodationType">Accommodation Type:</label>
                                        <input
                                            type="text"
                                            id="accommodationType"
                                            name="accommodationType"
                                            value={user.accommodation_Type || ''}
                                            readOnly
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="applicationDate">Application Date:</label>
                                        <input
                                            type="text"
                                            id="applicationDate"
                                            name="applicationDate"
                                            value={user.application_Date || ''}
                                            readOnly
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="businessRegistrationCertificate">Business Registration Certificate:</label>
                                        <input
                                            type="text"
                                            id="businessRegistrationCertificate"
                                            name="businessRegistrationCertificate"
                                            value={user.business_Registration_Certificate || ''}
                                            readOnly
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="cateredClasses">Catered Classes:</label>
                                        <input
                                            type="text"
                                            id="cateredClasses"
                                            name="cateredClasses"
                                            value={user.catered_Classes || ''}
                                            readOnly
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="ward">Ward:</label>
                                        <input
                                            type="text"
                                            id="ward"
                                            name="ward"
                                            value={user.ward || ''}
                                            readOnly
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="town">Town:</label>
                                        <input
                                            type="text"
                                            id="town"
                                            name="town"
                                            value={user.town || ''}
                                            readOnly
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subCounty">Sub County:</label>
                                        <input
                                            type="text"
                                            id="subCounty"
                                            name="subCounty"
                                            value={user.sub_County || ''}
                                            readOnly
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subLocation">Sub Location:</label>
                                        <input
                                            type="text"
                                            id="subLocation"
                                            name="subLocation"
                                            value={user.sub_Location || ''}
                                            readOnly
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="learnerEnrolment">Learner Enrolment:</label>
                                        <input
                                            type="text"
                                            id="learnerEnrolment"
                                            name="learnerEnrolment"
                                            value={user.learner_Enrolment || ''}
                                            readOnly
                                        />
                                    </div>


                                    <div>
                                        <label htmlFor="region">Region:</label>
                                        <input
                                            type="text"
                                            id="region"
                                            name="region"
                                            value={user.region || ''}
                                            readOnly
                                        />
                                    </div>
                                     {/* DQASO form fields */}
                                    <div>
                                        <label htmlFor="Buildings_Nature">Buildings Nature:</label>
                                        <input
                                            type="text"
                                            id="Buildings_Nature"
                                            name="Buildings_Nature"
                                            value={user.buildings_Nature || ''}
                                            readOnly
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="Recommender">Recommender:</label>
                                        <input
                                            type="text"
                                            id="Recommender"
                                            name="Recommender"
                                            value={user.recommender || ''}
                                            readOnly
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="Recommender_County">Recommender County:</label>
                                        <input
                                            type="text"
                                            id="Recommender_County"
                                            name="Recommender_County"
                                            value={user.recommender_County || ''}
                                            readOnly
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="Recommender_Sub_County">Recommender Sub County:</label>
                                        <input
                                            type="text"
                                            id="Recommender_Sub_County"
                                            name="Recommender_Sub_County"
                                            value={user.recommender_Sub_County || ''}
                                            readOnly
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="QAS_Assessment_Report">QAS Assessment Report:</label>
                                        <input
                                            type="text"
                                            id="QAS_Assessment_Report"
                                            name="QAS_Assessment_Report"
                                            value={user.qaS_Assessment_Report || ''}
                                            readOnly
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="QAS_Verdict">QAS Verdict:</label>
                                        <input
                                            type="text"
                                            id="QAS_Verdict"
                                            name="QAS_Verdict"
                                            value={user.qaS_Verdict || ''}
                                            readOnly
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="Public_Health_Report">Public Health Report:</label>
                                        <input
                                            type="text"
                                            id="Public_Health_Report"
                                            name="Public_Health_Report"
                                            value={user.public_Health_Report || ''}
                                            readOnly
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="Public_Health_Verdict">Public Health Verdict:</label>
                                        <input
                                            type="text"
                                            id="Public_Health_Verdict"
                                            name="Public_Health_Verdict"
                                            value={user.public_Health_Verdict || ''}
                                            readOnly
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="Public_Works_Report">Public Works Report:</label>
                                        <input
                                            type="text"
                                            id="Public_Works_Report"
                                            name="Public_Works_Report"
                                            value={user.public_Works_Report || ''}
                                            readOnly
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="Public_Works_Verdict">Public Works Verdict:</label>
                                        <input
                                            type="text"
                                            id="Public_Works_Verdict"
                                            name="Public_Works_Verdict"
                                            value={user.public_Works_Verdict || ''}
                                            readOnly
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="NEMA_Assessment_Report">NEMA Assessment Report:</label>
                                        <input
                                            type="text"
                                            id="NEMA_Assessment_Report"
                                            name="NEMA_Assessment_Report"
                                            value={user.nemA_Assessment_Report || ''}
                                            readOnly
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="NEMA_Verdict">NEMA Verdict:</label>
                                        <input
                                            type="text"
                                            id="NEMA_Verdict"
                                            name="NEMA_Verdict"
                                            value={user.nemA_Verdict || ''}
                                            readOnly
                                            
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="Registration_Duration">Registration Duration:</label>
                                        <input
                                            type="text"
                                            id="Registration_Duration"
                                            name="Registration_Duration"
                                            value={formData.Registration_Duration}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="Provisional_Approval">NEMA Verdict:</label>
                                        <input
                                            type="text"
                                            id="Provisional_Approval"
                                            name="Provisional_Approval"
                                            value={formData.Provisional_Approval}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="Approver">Approver:</label>
                                        <input
                                            type="text"
                                            id="Approver"
                                            name="Approver"
                                            value={formData.Approver}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="Approved">Approved? :</label>
                                        <input
                                            type="text"
                                            id="Approved"
                                            name="Approved"
                                            value={formData.Approved}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="Approver_County">Approver_County:</label>
                                        <input
                                            type="text"
                                            id="Approver_County"
                                            name="Approver_County"
                                            value={formData.Approver_County}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="CEB_Approval_Letter">Approval Letter :</label>
                                        <input
                                            type="text"
                                            id="CEB_Approval_Letter"
                                            name="CEB_Approval_Letter"
                                            value={formData.CEB_Approval_Letter}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="CEB_Verdict">CEB Verdict:</label>
                                        <input
                                            type="text"
                                            id="CEB_Verdict"
                                            name="CEB_Verdict"
                                            value={formData.CEB_Verdict}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="UIC">UIC :</label>
                                        <input
                                            type="text"
                                            id="UIC"
                                            name="UIC"
                                            value={formData.UIC}
                                            onChange={handleChange}
                                        />
                                    </div>



                                    <div>
                                        <button type="submit">Save Changes</button>
                                    </div>
                                </form>

                                <button className="close-button" onClick={closePopup}>
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

export default AwaitingApproval;
