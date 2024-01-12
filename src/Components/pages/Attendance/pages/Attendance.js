import React, { useState, useEffect } from 'react';
import './Attendance.css';
import axios from 'axios';
import StudentsAttendanceDetails from './StudentsAttendanceDetails';

const Attendance = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [absenteeismReason, setAbsenteeismReason] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "/AttendanceApi/api/v1/Learner/getAll";
        const response = await axios.get(url);
        const fetchedStudents = response.data;
        setStudents(fetchedStudents);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCheckboxChange = async (studentUpi) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.learner_upi === studentUpi
          ? { ...student, present: !student.present }
          : student
      )
    );

    const selectedStudent = students.find(
      (student) => student.learner_upi === studentUpi
    );

    try {
      // Check if attendance has already been recorded for the learner on the current day
      if (!hasAttendanceRecorded(selectedStudent.learner_upi, new Date().toLocaleDateString())) {
        const url = "/AttendanceApi/api/v1/Attendance/addAttendance";
        const response = await axios.post(url, {
          upi: selectedStudent.learner_upi,
          day: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(), // Assuming you want to record time as well
          stream_id: 1,
          grade_id: 1,
          status: selectedStudent.present ? 1 : 0,
        });

        console.log(response.data);
        // Assuming the server responds with JSON

        // Mark attendance as recorded for the learner on the current day
        markAttendanceRecorded(selectedStudent.learner_upi, new Date().toLocaleDateString());
      } else {
        console.log("Attendance already recorded for this learner today.");
      }
    } catch (error) {
      console.error("Error updating attendance:", error);
    }

    if (!selectedStudent.present) {
      // Show the popup form for the reason
      const reason = prompt('Please provide the reason for absenteeism:');
      setAbsenteeismReason(reason);
    }
  };

  const markAttendanceRecorded = (learnerUpi, currentDate) => {
    localStorage.setItem(`attendance_${learnerUpi}`, currentDate);
  };

  const hasAttendanceRecorded = (learnerUpi, currentDate) => {
    const recordedAttendance = localStorage.getItem(`attendance_${learnerUpi}`);
    return recordedAttendance === currentDate;
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleMarkAll = () => {
    setStudents((prevStudents) =>
      prevStudents.map((student) => ({ ...student, present: true }))
    );
  };

  const handleViewMore = (studentUpi) => {
    const selectedStudent = students.find((student) => student.learner_upi === studentUpi);
    setSelectedStudent(selectedStudent);
  };

  const handleCloseDetailPage = () => {
    setSelectedStudent(null);
  };

  const handleExportToCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," +
      "Serial Number,UPI,Name,Date,Attendance\n" +
      filteredStudents.map(student =>
        `${student.id},${student.learner_upi},"${student.learner_fname} ${student.learner_mname} ${student.learner_lname}",${new Date().toLocaleDateString()},${student.present ? 'Present' : 'Absent'}`
      ).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "attendance_data.csv");
    document.body.appendChild(link);
    link.click();
  };

  const filteredStudents = students.filter(
    (student) =>
      student.learner_fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.learner_upi.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!students.length) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4py-3 rounded relative" role="alert">
        <strong className="font-bold">No students found!</strong>
        <span className="block sm:inline">There are no students available.</span>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mt-4">Attendance</h1>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <label htmlFor="search" className="mr-2">
            Search:
          </label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="border border-gray-400 px-2 py-1 rounded"
          />
        </div>
        <div>
          <button
            onClick={handleMarkAll}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Mark All Present
          </button>
          <button
            onClick={handleExportToCSV}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
          >
            Export to CSV
          </button>
        </div>
      </div>
      <table className="mt-4 w-full">
        <thead>
          <tr>
            <th className="p-2 border border-gray-800">#</th>
            <th className="p-2 border border-gray-800">UPI</th>
            <th className="p-2 border border-gray-800">Full Name</th>
            <th className="p-2 border border-gray-800">Attendance</th>
            <th className="p-2 border border-gray-800">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, index) => (
            <tr key={student.learner_upi}>
              <td className="p-2 border border-gray-800">{index + 1}</td>
              <td className="p-2 border border-gray-800">{student.learner_upi}</td>
              <td className="p-2 border border-gray-800">
                {student.learner_fname} {student.learner_mname} {student.learner_lname}
              </td>
              <td className="p-2 border border-gray-800">
                <input
                  type="checkbox"
                  checked={student.present}
                  onChange={() => handleCheckboxChange(student.learner_upi)}
                />
                {student.present ? 'Present' : 'Absent'}
                {!student.present && (
                  <span className="ml-2">Reason: {absenteeismReason}</span>
                )}
              </td>
              <td className="p-2 border border-gray-800">
                <button
                  onClick={() => handleViewMore(student.learner_upi)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                >
                  View More
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedStudent && (
        <StudentsAttendanceDetails
          student={selectedStudent}
          onClose={handleCloseDetailPage}
        />
      )}
    </div>
  );
};

export default Attendance;