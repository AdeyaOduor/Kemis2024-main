import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyApplications = () => {
  const [scholarshipApplications, setScholarshipApplications] = useState([]);

  useEffect(() => {
    const fetchScholarshipApplications = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        const UserId = user.userId;
        let urlhom = window.location.origin;
        let url = "/scholarshipapi/api/v1/Applications/getUserApplications/" + UserId;
        const response = await axios.get(urlhom + url);
        console.log(response.data);
        setScholarshipApplications(response.data);
      } catch (error) {
        console.error('Error fetching scholarship applications:', error);
      }
    };

    fetchScholarshipApplications();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mx-2 mb-6 text-gray-800 dark:text-white">
        My Scholarship Applications
      </h1>
      {scholarshipApplications.length === 0 ? (
        <p className="text-red-600 text-xl font-semibold mb-4">
          You haven't applied for any scholarships. Check available scholarships and apply!
        </p>
      ) : (
        <table className="min-w-full bg-white border-collapse border-0 dark:bg-gray-800">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-0 border-gray-200 dark:border-gray-600 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 border-b-0 border-gray-200 dark:border-gray-600 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Names
              </th>
              <th className="px-6 py-3 border-b-0 border-gray-200 dark:border-gray-600 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Scholarship Name
              </th>
              <th className="px-6 py-3 border-b-0 border-gray-200 dark:border-gray-600 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Organization Name
              </th>
              <th className="px-6 py-3 border-b-0 border-gray-200 dark:border-gray-600 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 border-b-0 border-gray-200 dark:border-gray-600 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Remarks
              </th>
            </tr>
          </thead>
          <tbody>
            {scholarshipApplications.map((application, index) => (
              <tr key={application.id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b-0 border-gray-200 dark:border-gray-600">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b-0 border-gray-200 dark:border-gray-600">
                  {application.userName || ''}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b-0 border-gray-200 dark:border-gray-600">
                  {application.name || ''}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b-0 border-gray-200 dark:border-gray-600">
                  {application.organizationName || ''}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b-0 border-gray-200 dark:border-gray-600">
                  {application.status}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b-0 border-gray-200 dark:border-gray-600">
                  {application.remarks}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyApplications;
