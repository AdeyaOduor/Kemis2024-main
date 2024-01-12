import React, { useState } from 'react';

const AddTeacher = () => {
  const [searchUPI, setSearchUPI] = useState('');
  const [teacherData, setTeacherData] = useState({
    upi: '',
    staff_fname: '',
    staff_mname: '',
    staff_lname: '',
    role: '',
    employment_startDate: '',
    stream_id:'',
    school_uic:'',

  });

  const urlhom = window.location.origin;
  const url = `/AttendanceApi/api/v1/Staff/staffs/${searchUPI}`;

  const handleSearch = async () => {
    try {
      const response = await fetch(urlhom + url);
      console.log(response)
      const data = await response.json();
      console.log(data);

      setTeacherData({
        upi: data.upi,
        staff_fname: data.staff_fname,
        staff_mname: data.staff_mname,
        staff_lname: data.staff_lname,
        role: data.role,
        employment_startDate: data.employment_startDate,
        school_uic:data.school_uic
      });
    } catch (error) {
      console.error('Error fetching Staff details:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeacherData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddTeacher = async () => {
    try {
      const response = await fetch('AttendanceApi/api/v1/Staff/addStaff', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(teacherData),
      });

      // Handle the response as needed
      console.log('Staff added successfully:', response);
    } catch (error) {
      console.error('Error adding Staff:', error);
    }
  };




  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add Staff</h2>

      {/* Search Learner Section */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search staff by UPI"
          className="p-2 border rounded mr-2"
          value={searchUPI}
          onChange={(e) => setSearchUPI(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2 rounded" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Learner Details Form */}
      <form>
  <div className='flex justify-between'>
    <div className="mb-4">
      <label className="block mb-2">UPI:</label>
      <input
        type="text"
        id="upi"
        name="upi"
        value={teacherData.upi}
        readOnly
        className="p-2 bg-gray-200 border rounded"
        onChange={(e) => setTeacherData({ ...teacherData, upi: e.target.value })}
      />
    </div>

    <div className="mb-4">
      {/* Additional Form Element 1 */}
      <label className="block mb-2">First Name:</label>
      <input
        type="text"
        name="staff_fname"
        value={teacherData.staff_fname}
        onChange={(e) => setTeacherData({ ...teacherData, staff_fname: e.target.value })}
        className="p-2 bg-gray-200 border rounded"
      />
    </div>
  </div>

  <div className='flex justify-between'>
    <div className="mb-4">
      {/* Additional Form Element 2 */}
      <label className="block mb-2">Middle Name:</label>
      <input
        type="text"
        name="staff_mname"
        value={teacherData.staff_mname}
        onChange={(e) => setTeacherData({ ...teacherData, staff_mname: e.target.value })}
        className="p-2 bg-gray-200 border rounded"
      />
    </div>

    <div className="mb-4">
      {/* Additional Form Element 3 */}
      <label className="block mb-2">Last Name</label>
      <input
        type="text"
        name="staff_lname"
        value={teacherData.staff_lname}
        onChange={(e) => setTeacherData({ ...teacherData, staff_lname: e.target.value })}
        className="p-2 bg-gray-200 border rounded"
      />
    </div>
  </div>

  <div className='flex justify-between'>
    <div className="mb-4">
      {/* Additional Form Element 4 */}
      <label className="block mb-2">TSc No:</label>
      <input
        type="text"
        name="employment_startDate"
        value={teacherData.employment_startDate}
        onChange={(e) => setTeacherData({ ...teacherData, employment_startDate: e.target.value })}
        className="p-2 bg-gray-200 border rounded"
      />

    {/* You can add more form elements as needed */}
  </div>

    <div className="mb-4">
      {/* Additional Form Element 4 */}
      <label className="block mb-2">Employment Station:</label>
      <input
        type="text"
        name="school_uic"
        value={teacherData.school_uic}
        onChange={(e) => setTeacherData({ ...teacherData, school_uic: e.target.value })}
        className="p-2 bg-gray-200 border rounded"
      />
      </div>

    {/* You can add more form elements as needed */}
  </div>


  {/* ... (Other form elements) */}
  <div className='flex justify-between'>
  <div className="mb-4">
    {/* Additional Form Element 4 */}
    <label className="block mb-2">Assign a Stream:</label>
    <select
      name="stream_id"
      className="p-2 bg-white-200 border rounded"
    >
      {/* Add options dynamically based on your data or hardcode them */}
      <option value="stream2">---Select A Stream---</option>
      <option value="stream1">Yellow</option>
      <option value="stream2">Green</option>
      <option value="stream3">Blue</option>
      {/* Add more options as needed */}
    </select>
  </div>
  <div className="mb-4">
    {/* Additional Form Element 4 */}
    <label className="block mb-2">Assign a Role</label>
    <select
      name="stream_id"
      className="p-2 bg-white-200 border rounded"
    >
      {/* Add options dynamically based on your data or hardcode them */}
      <option value="stream2">---Select A Role--- </option>
      <option value="stream2">Class Principal</option>
      <option value="stream1">Class Teacher</option>
      {/* Add more options as needed */}
    </select>
</div>
</div>
  <button
    type="button"
    className="bg-green-500 text-white p-2 rounded"
    onClick={handleAddTeacher}
  >
    Add Teacher
  </button>
</form>

    </div>
  );
};

export default AddTeacher;
