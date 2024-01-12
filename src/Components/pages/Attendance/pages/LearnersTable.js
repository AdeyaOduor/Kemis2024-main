// LearnerTable.js from add learner
import React from 'react';

const LearnerTable = ({ learners }) => {
  return (
    <table className="table-auto border-collapse border border-gray-800 mt-4 w-full">
      <thead>
        <tr>
          <th className="p-2 border border-gray-800">UPI</th>
          <th className="p-2 border border-gray-800">Entry No</th>
          <th className="p-2 border border-gray-800">First Name</th>
          <th className="p-2 border border-gray-800">Middle Name</th>
          <th className="p-2 border border-gray-800">Last Name</th>
          <th className="p-2 border border-gray-800">Grade</th>
          {/* Add more columns as needed */}
        </tr>
      </thead>
      <tbody>
        {learners.map((learner) => (
          <tr key={learner.id}>
            <td className="p-2 border border-gray-800">{learner.learner_upi}</td>
            <td className="p-2 border border-gray-800">{learner.birth_cert}</td>
            <td className="p-2 border border-gray-800">{learner.learner_fname}</td>
            <td className="p-2 border border-gray-800">{learner.learner_mname}</td>
            <td className="p-2 border border-gray-800">{learner.learner_lname}</td>
            <td className="p-2 border border-gray-800">{learner.grade_id}</td>
            {/* Add more columns as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LearnerTable;
