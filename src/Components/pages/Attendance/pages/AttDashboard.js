import { useState, useEffect } from "react";
import React from 'react';

const AttDashboard = () => {

    const [totalStudents, setTotalStudents] = useState(0);
  const [attendancePercentage, setAttendancePercentage] = useState(0);
  const [totalStaff, setTotalStaff] = useState(0);

  // Fetch data from your database or API
  useEffect(() => {
    // Example API calls
    // const totalStudentsData = fetchTotalStudents();
    // const attendanceData = fetchAttendanceData();
    // const totalStaffData = fetchTotalStaff();

    // Update state with fetched data
    // setTotalStudents(totalStudentsData);
    // setAttendancePercentage(attendanceData);
    // setTotalStaff(totalStaffData);

    // Mock data for example
    setTotalStudents(500);
    setAttendancePercentage(75);
    setTotalStaff(50);
  }, []);
    return (
      
        <div className="container mx-auto  p-4">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
  
        {/* Cards */}
        <div className="flex justify-between mb-4">
          <div className="p-4 bg-blue-300 rounded shadow-md mr-4">
            <p className="text-xl font-bold">Total Students</p>
            <p>{totalStudents}</p>
          </div>
          <div className="p-4 bg-green-300 rounded shadow-md mr-4">
            <p className="text-xl font-bold">Attendance Percentage</p>
            <p>{attendancePercentage}%</p>
          </div>
          <div className="p-4 bg-yellow-300 rounded shadow-md">
            <p className="text-xl font-bold">Total Staff</p>
            <p>{totalStaff}</p>
          </div>
        </div>
        </div>
    );
};

export default AttDashboard;
