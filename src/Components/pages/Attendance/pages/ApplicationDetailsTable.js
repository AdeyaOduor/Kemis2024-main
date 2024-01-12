import React, { useEffect, useState } from 'react';

const ApplicationDetailsTable = () => {
    const [applicationData, setApplicationData] = useState(null);

    useEffect(() => {
        // Simulating data fetching
        const fetchData = async () => {
            // Replace 'YOUR_API_ENDPOINT' with the actual URL of your API endpoint
            try {
                const response = await fetch('YOUR_API_ENDPOINT');
                if (response.ok) {
                    const data = await response.json();
                    setApplicationData(data);
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures that the effect runs once on mount

    return (
        <div>
            {applicationData ? (
                <div>

                    {/* Applicant Information Section */}
                    <section>
                        <h3>Applicant Information</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <th>User ID</th>
                                    <td>{applicationData[0]?.userId}</td>
                                </tr>
                                <tr>
                                    <th>UPI</th>
                                    <td>{applicationData[0]?.upi}</td>
                                </tr>
                                <tr>
                                    <th>Name</th>
                                    <td>{`${applicationData[0]?.firstName} ${applicationData[0]?.middleName} ${applicationData[0]?.lastName}`}</td>
                                </tr>
                                <tr>
                                    <th>Gender</th>
                                    <td>{applicationData[0]?.gender}</td>
                                </tr>
                                <tr>
                                    <th>Date of Birth</th>
                                    <td>{applicationData[0]?.dateOfBirth}</td>
                                </tr>
                                {/* Include other details as needed */}
                            </tbody>
                        </table>
                    </section>

                    {/* Parents/Guardians Information Section */}
                    <section>
                        <h3>Parents/Guardians Information</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Father's Name</th>
                                    <td>{`${applicationData[0]?.fatherFirstName} ${applicationData[0]?.fatherMiddleName} ${applicationData[0]?.fatherSurName}`}</td>
                                </tr>
                                <tr>
                                    <th>Mother's Name</th>
                                    <td>{`${applicationData[0]?.motherFirstName} ${applicationData[0]?.motherMiddleName} ${applicationData[0]?.motherSurname}`}</td>
                                </tr>
                                <tr>
                                    <th>Guardian's Name</th>
                                    <td>{`${applicationData[0]?.guardianFirstName} ${applicationData[0]?.guardianMiddleName} ${applicationData[0]?.guardianSurname}`}</td>
                                </tr>
                                {/* Include other details as needed */}
                            </tbody>
                        </table>
                    </section>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ApplicationDetailsTable;
