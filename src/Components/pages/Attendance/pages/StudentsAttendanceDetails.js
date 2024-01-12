import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentsAttendanceDetails = ({ selectedStudent, onClose }) => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await axios.get(`/AttendanceApi/api/v1/Attendance/attendance/${selectedStudent.learner_upi}`);
        console.log('API Response:', response.data);
        setAttendanceData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching attendance data:', error.message);
      }
    };

    fetchAttendanceData();
  }, [selectedStudent]);

  const getPresentDaysByMonth = () => {
    const presentDaysByMonth = {};

    if (Array.isArray(attendanceData)) {
      attendanceData.forEach((entry) => {
        const [year, month, day] = entry.date.split('-');
        const monthKey = parseInt(month, 10);
        presentDaysByMonth[monthKey] = presentDaysByMonth[monthKey] || [];
        presentDaysByMonth[monthKey].push(parseInt(day, 10));
      });
    } else {
      console.error('attendanceData is not an array:', attendanceData);
    }

    return presentDaysByMonth;
  };

  const presentDaysByMonth = getPresentDaysByMonth();

  const renderMonthCard = (monthIndex, monthName) => {
    const presentDays = presentDaysByMonth[monthIndex + 1] || [];

    return (
      <div key={monthIndex} className="border p-4 mb-4">
        <h3 className="text-xl mb-2">{monthName}</h3>
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: new Date(2022, monthIndex + 1, 0).getDate() }, (_, i) => i + 1).map((day) => {
            const isPresent = presentDays.includes(day);

            return (
              <div
                key={day}
                className={`text-center p-2 border rounded ${isPresent ? 'bg-pink-300' : ''}`}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const getMonthName = (monthIndex) => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    return monthNames[monthIndex];
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-2">{selectedStudent.name}</h2>
      <p>UPI: {selectedStudent.learner_upi}</p>
      <p>Term Start Date: [Your term start date]</p>
      <p>Term End Date: [Your term end date]</p>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h3>Attendance Record</h3>
          <div className="flex flex-wrap">
            {Array.from({ length: 12 }, (_, i) => renderMonthCard(i, getMonthName(i)))}
          </div>
        </>
      )}

      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default StudentsAttendanceDetails;