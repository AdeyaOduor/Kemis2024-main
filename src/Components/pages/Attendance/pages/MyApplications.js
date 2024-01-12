import React from 'react';

const MyApplications = () => {
  const scholarshipApplications = [
    {
      id: 1,
      userId: 'ABC123',
      names: 'John Doe',
      advertNumber: 'ADV123',
      type: 'Merit Scholarship',
      qualifications: 'Excellent academic performance, active community involvement',
      status: 'Pending',
      remarks: 'Application under review',
    },
    {
      id: 2,
      userId: 'XYZ456',
      names: 'Jane Smith',
      advertNumber: 'ADV456',
      type: 'STEM Scholarship',
      qualifications: 'Majoring in a STEM field, high GPA',
      status: 'Approved',
      remarks: 'Congratulations! You have been awarded the scholarship.',
    },
    {
      id: 3,
      userId: 'DEF789',
      names: 'Alice Johnson',
      advertNumber: 'ADV789',
      type: 'Art and Design Grant',
      qualifications: 'Outstanding artistic portfolio, passion for creativity',
      status: 'Rejected',
      remarks: 'Unfortunately, your application did not meet the criteria.',
    },
    {
      id: 4,
      userId: 'GHI012',
      names: 'Bob Williams',
      advertNumber: 'ADV012',
      type: 'Sports Excellence Scholarship',
      qualifications: 'Exceptional sports achievements, good academic standing',
      status: 'Pending',
      remarks: 'Application under review',
    },
    {
      id: 5,
      userId: 'JKL345',
      names: 'Eva Davis',
      advertNumber: 'ADV345',
      type: 'Global Citizenship Award',
      qualifications: 'Commitment to global issues, community service',
      status: 'Approved',
      remarks: 'Congratulations! You have been awarded the scholarship.',
    },
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Scholarship Applications
      </h1>
      <table className="min-w-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-600">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-600 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-600 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              User ID
            </th>
            <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-600 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              Names
            </th>
            <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-600 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              Advert Number
            </th>
            <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-600 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              Type of Scholarship
            </th>
            <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-600 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              Qualifications
            </th>
            <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-600 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              Scholarship Status
            </th>
            <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-600 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              Remarks
            </th>
          </tr>
        </thead>
        <tbody>
          {scholarshipApplications.map((application) => (
            <tr key={application.id}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-600">
                {application.id}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-600">
                {application.userId}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-600">
                {application.names}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-600">
                {application.advertNumber}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-600">
                {application.type}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-600">
                {application.qualifications}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-600">
                {application.status}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-600">
                {application.remarks}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyApplications;