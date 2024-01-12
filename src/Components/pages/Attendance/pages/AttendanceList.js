import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const AttendanceList = () => {
  const [learnerData, setLearnerData] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages , setTotalPages]= Math.ceil(learnerData.length / pageSize);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const learnerResponse = await fetch('/AttendanceApi/api/v1/Learner/getAll');
        const attendanceResponse = await fetch(`/AttendanceApi/api/v1/Attendance/getAll?date=${selectedDate.toISOString()}`);

        const learnerData = await learnerResponse.json();
        const attendanceData = await attendanceResponse.json();

        setLearnerData(learnerData);
        setAttendanceData(attendanceData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedDate]);

  const getDaysOfMonth = () => {
    const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
    const daysOfMonth = Array.from({ length: daysInMonth }, (_, index) => index + 1);

    return daysOfMonth;
  };

  const daysOfMonth = getDaysOfMonth();

  useEffect(() => {
    // Fetch data from the backend API
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/learners?page=${currentPage}&pageSize=${pageSize}`);
        setLearnerData(response.data.data);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error('Error fetching data from the backend', error);
      }
    };

    fetchData();
  }, [currentPage]); // Trigger the effect when currentPage changes
  const currentData = learnerData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const getStatusForDay = (learnerUPI) => {
    const targetDate = new Date(selectedDate);
    const attendanceEntry = attendanceData.find(entry => {
      const entryDate = new Date(entry.date);
      return entry.upi === learnerUPI &&
        entryDate.toDateString() === targetDate.toDateString();
    });

    return attendanceEntry ? (attendanceEntry.status === '1' ? 'P' : 'A') : '';
  };
  const CustomDateHeader = ({ date, decreaseMonth, increaseMonth }) => (
    <div className="flex justify-between items-center mb-4">
      <div>{date.toLocaleString('en-US', { month: 'long', year: 'numeric' })}</div>
      <div className="flex">
        <button
          onClick={decreaseMonth}
          className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
        >
          {'<'}
        </button>
        <button
          onClick={increaseMonth}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          {'>'}
        </button>
      </div>
    </div>
  );


  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Attendance List</h2>
      <div className="max-w-md mx-auto">
        <div className="bg-white shadow-md rounded px-8 py-6">
          <h2 className="text-lg font-semibold mb-4">Select Date:</h2>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy-MM-dd"
            className="p-2 border rounded w-full"
            showMonthYearDropdown
            customInput={<input className="p-2 border rounded w-full" />}
            dropdownMode="select"
            popperModifiers={{
              offset: {
                enabled: true,
                offset: '5px, 10px',
              },
            }}
            calendarContainer={({ children }) => (
              <div className="relative">
                {children}
              </div>
            )}
            renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
              <CustomDateHeader
                date={date}
                decreaseMonth={decreaseMonth}
                increaseMonth={increaseMonth}
              />
            )}
          />
        </div>
      </div>
      {/* Attendance Table */}
      <table className="table-auto border-collapse border border-gray-800 mt-4 w-screen">
        <thead>
          <tr>
            <th className="p-2 border border-gray-800">UPI</th>
            <th className="p-2 border border-gray-800">Name</th>
            {daysOfMonth.map((day, index) => (
              <th key={index} className="p-2 border border-gray-800">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((learner) => (
            <tr key={learner.learner_upi}>
              <td className="p-2 border border-gray-800">{learner.learner_upi}</td>
              <td className="p-2 border border-gray-800">{`${learner.learner_fname} ${learner.learner_mname} ${learner.learner_lname}`}</td>
              {daysOfMonth.map((day) => (
                <td
                  key={day}
                  className={`p-2 border border-gray-800 ${getStatusForDay(learner.learner_upi) === 'A' ? 'bg-green-500' : 'bg-red-500'
                    }`}
                >
                  {getStatusForDay(learner.learner_upi)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>


      {/* Pagination */}
      <div className="mt-4">
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
          Previous
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {currentPage} of {totalPages}
          </strong>{' '}
        </span>
        <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default AttendanceList;

