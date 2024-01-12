import React from 'react';

const ScholarshipsPage = () => {
  const scholarships = [
    {
      id: 1,
      title: 'Merit Scholarship',
      organization: 'ABC Foundation',
      qualifications: 'Excellent academic performance, active community involvement',
      startDate: '2023-02-01',
      expiryDate: '2023-04-30',
    },
    {
      id: 2,
      title: 'STEM Scholarship',
      organization: 'XYZ Corporation',
      qualifications: 'Majoring in a STEM field, high GPA',
      startDate: '2023-03-15',
      expiryDate: '2023-06-30',
    },
    {
      id: 3,
      title: 'Art and Design Grant',
      organization: 'Creative Arts Institute',
      qualifications: 'Outstanding artistic portfolio, passion for creativity',
      startDate: '2023-04-10',
      expiryDate: '2023-07-31',
    },
    {
      id: 4,
      title: 'Sports Excellence Scholarship',
      organization: 'National Sports Council',
      qualifications: 'Exceptional sports achievements, good academic standing',
      startDate: '2023-05-20',
      expiryDate: '2023-09-15',
    },
    {
      id: 5,
      title: 'Global Citizenship Award',
      organization: 'International Relations Foundation',
      qualifications: 'Commitment to global issues, community service',
      startDate: '2023-06-25',
      expiryDate: '2023-11-30',
    },
  ];

  return (
    <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {scholarships.map((scholarship) => (
        <div
          key={scholarship.id}
          className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800"
        >
          <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
            {scholarship.title}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            Organization: {scholarship.organization}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            Qualifications: {scholarship.qualifications}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            Advert Date: {scholarship.startDate}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Expiry Date: {scholarship.expiryDate}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ScholarshipsPage;