import React, { useState } from 'react';
import LearnerTable from './LearnersTable';

const AddLearner = () => {
  const [searchUPI, setSearchUPI] = useState('');
  const [isFormVisible, setFormVisibility] = useState(false);

  const [learnersList, setLearnersList] = useState([]);
  const [learnerData, setLearnerData] = useState({
    learner_upi: '',
    learner_fname: '',
    learner_mname: '',
    learner_lname: '',
    grade_id: '',
    birth_cert: '',
  });

  const urlhom = window.location.origin;
  const url = `/AttendanceApi/api/v1/Learner/learners/${searchUPI}`;

  const handleSearch = async () => {
    try {
      const response = await fetch(urlhom + url);
      console.log(response)
      const data = await response.json();
      console.log(data);

      setLearnerData({
        learner_upi: data.learner_upi,
        learner_fname: data.learner_fname,
        learner_mname: data.learner_mname,
        learner_lname: data.learner_lname,
        grade_id: data.grade_id,
        birth_cert: data.birth_cert,
      });
      setFormVisibility(true);
    } catch (error) {
      console.error('Error fetching learner details:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLearnerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddLearner = async () => {
    try {
      const response = await fetch('AttendanceApi/api/v1/Learner/addLearner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(learnerData),
      });

      // Handle the response as needed
      console.log('Learner added successfully:', response);
    } catch (error) {
      console.error('Error adding learner:', error);
    }
  };




  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add Learner</h2>

      {/* Search Learner Section */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search learner by UPI"
          className="p-2 border rounded mr-2"
          value={searchUPI}
          onChange={(e) => setSearchUPI(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2 rounded" onClick={handleSearch}>
          Search
        </button>
      </div>

      {isFormVisible && (
        <form>
        <div className='flex justify-between'>
          <div className="mb-4">
            <label className="block mb-2">UPI:</label>
            <input
              type="text"
              id="learner_upi"
              name="learner_upi"
              value={learnerData.learner_upi}
              readOnly
              className="p-2 bg-gray-200 border rounded"
              onChange={(e) => setLearnerData({ ...learnerData, learner_upi: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Entry No:</label>
            <input
              type="text"
              name="learner_fname"
              value={learnerData.birth_cert}
              onChange={(e) => setLearnerData({ ...learnerData, birth_cert: e.target.value })}
              className="p-2 bg-gray-200 border rounded"
            />
          </div>
        </div>

        <div className='flex justify-between'>
          <div className="mb-4">
            <label className="block mb-2">First Name:</label>
            <input
              type="text"
              name="learner_mname"
              value={learnerData.learner_fname}
              onChange={(e) => setLearnerData({ ...learnerData, learner_fname: e.target.value })}
              className="p-2 bg-gray-200 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Middle Name</label>
            <input
              type="text"
              name="learner_lname"
              value={learnerData.learner_mname}
              onChange={(e) => setLearnerData({ ...learnerData, learner_mname: e.target.value })}
              className="p-2 bg-gray-200 border rounded"
            />
          </div>
        </div>

        <div className='flex justify-between'>
          <div className="mb-4">
            <label className="block mb-2">Last Name</label>
            <input
              type="text"
              name="grade_id"
              value={learnerData.learner_lname}
              onChange={(e) => setLearnerData({ ...learnerData, learner_lname: e.target.value })}
              className="p-2 bg-gray-200 border rounded"
            />

          </div>

          <div className="mb-4">
            <label className="block mb-2">Learner Grade:</label>
            <input
              type="text"
              name="bith_cert"
              value={learnerData.grade_id}
              onChange={(e) => setLearnerData({ ...learnerData, grade_id: e.target.value })}
              className="p-2 bg-gray-200 border rounded"
            />
          </div>

        </div>

        <div className="flex justify-between">
          <div className="mb-4">
            <label className="block mb-2">Assign a Stream:</label>
            <select name="stream_name" className="p-3 bg-white-200 border rounded">
              <option value="">Select a Stream </option>
              <option value="stream1">Select a Stream </option>
              <option value="stream2">Stream 2</option>
              <option value="stream3">Stream 3</option>
            </select>

          </div>
        </div>

        <button
          type="button"
          className="bg-green-500 text-white p-2 rounded"
          onClick={handleAddLearner}
        >
          Add Learner
        </button>
      </form>
      )}
      {!isFormVisible &&(
        <div>
          <alert> This learner cannot be found!! Please check the details and try again</alert>
        </div>
      )

      }

     
     
      <table className="table-auto border-collapse border border-gray-800 mt-4 w-full">
        <thead>
          <tr>
            <th className="p-2 border border-gray-800">UPI</th>
            <th className="p-2 border border-gray-800">Entry No</th>
            <th className="p-2 border border-gray-800">First Name</th>
            <th className="p-2 border border-gray-800">Middle Name</th>
            <th className="p-2 border border-gray-800">Last Name</th>
            <th className="p-2 border border-gray-800">Learner Grade</th>
            <th className="p-2 border border-gray-800">Learner Stream</th>
          </tr>
        </thead>
        <tbody>
          {learnersList.map((learner, index) => (
            <tr key={index}>
              <td className="p-2 border border-gray-800">{learner.learner_upi}</td>
              <td className="p-2 border border-gray-800">{learner.birth_cert}</td>
              <td className="p-2 border border-gray-800">{learner.learner_fname}</td>
              <td className="p-2 border border-gray-800">{learner.learner_mname}</td>
              <td className="p-2 border border-gray-800">{learner.learner_lname}</td>
              <td className="p-2 border border-gray-800">{learner.grade_id}</td>
              <td className="p-2 border border-gray-800">{learner.learner_stream}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddLearner;
