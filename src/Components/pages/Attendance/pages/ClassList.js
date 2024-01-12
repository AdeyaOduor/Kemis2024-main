// import React, { useState } from 'react';

// const ClassManagement = () => {
//   const [className, setClassName] = useState('');
//   const [selectedStream, setSelectedStream] = useState('');
//   const [classData, setClassData] = useState([]);

//   const handleAddClass = () => {
//     if (className && selectedStream) {
//       // Check if the class already exists
//       const existingClass = classData.find((cls) => cls.name === className && cls.stream === selectedStream);
//       if (existingClass) {
//         alert('Class already exists!');
//         return;
//       }

//       // Add the new class to the list
//       setClassData((prevData) => [...prevData, { name: className, stream: selectedStream }]);
//       // Clear the form fields
//       setClassName('');
//       setSelectedStream('');
//     } else {
//       alert('Please enter class name and select a stream.');
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Class Management</h2>

//       {/* Add Class Form */}
//       <div className="mb-4">
//         <h3 className="text-xl font-bold mb-2">Add Class</h3>
//         <div className="flex items-center mb-4">
//           <label htmlFor="className" className="mr-2">Class Name:</label>
//           <input
//             type="text"
//             id="className"
//             value={className}
//             onChange={(e) => setClassName(e.target.value)}
//             className="border border-gray-400 px-2 py-1 rounded"
//           />
//         </div>
//         <div className="flex items-center mb-4">
//           <label htmlFor="stream" className="mr-2">Select Stream:</label>
//           <select
//             id="stream"
//             value={selectedStream}
//             onChange={(e) => setSelectedStream(e.target.value)}
//             className="border border-gray-400 px-2 py-1 rounded"
//           >
//             <option value="">Select Stream</option>
//             <option value="A">Stream A</option>
//             <option value="B">Stream B</option>
//             {/* Add more stream options as needed */}
//           </select>
//         </div>
//         <button
//           onClick={handleAddClass}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Add Class
//         </button>
//       </div>

//       {/* Class List Table */}
//       <h3 className="text-xl font-bold mb-2">Class List</h3>
//       <table className="w-full border-collapse border border-gray-800">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="p-2 border border-gray-800">Class Name</th>
//             <th className="p-2 border border-gray-800">Stream</th>
//           </tr>
//         </thead>
//         <tbody>
//           {classData.map((cls, index) => (
//             <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
//               <td className="p-2 border border-gray-800">{cls.name}</td>
//               <td className="p-2 border border-gray-800">{cls.stream}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ClassManagement;
import React, { useState } from 'react';

const ClassManagement = () => {
  const [streamName, setStreamName] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedStream, setSelectedStream] = useState('');
  const [classData, setClassData] = useState([]);

  const handleAddClass = () => {
    if (streamName && selectedGrade && selectedStream) {
      // Check if the class already exists
      const existingClass = classData.find((cls) => cls.name === streamName && cls.grade === selectedGrade && cls.stream === selectedStream);
      if (existingClass) {
        alert('Class already exists!');
        return;
      }

      // Add the new class to the list
      setClassData((prevData) => [...prevData, { name: streamName, grade: selectedGrade, stream: selectedStream }]);
      // Clear the form fields
      setStreamName('');
      setSelectedGrade('');
      setSelectedStream('');
    } else {
      alert('Please  select grade, select a stream and enter stream name,.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-4 mb-4 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Class Management</h2>

        {/* Add Class Form */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Add Class</h3>
          
          <div className="flex items-center mb-4">
            <label htmlFor="grade" className="mr-2">Select Grade:</label>
            <select
              id="grade"
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="border border-gray-400 px-6 py-1 w-full rounded"
            >
              <option value="">Select Grade</option>
              {Array.from({ length: 9 }, (_, index) => (
                <option key={index} value={index + 1}>{`Grade ${index + 1}`}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="stream" className="mr-2">Select Stream:</label>
            <select
              id="stream"
              value={selectedStream}
              onChange={(e) => setSelectedStream(e.target.value)}
              className="border border-gray-400 px-6 py-1 w-full rounded"
            >
              <option value="">Select Stream</option>
              <option value="A">Stream A</option>
              <option value="B">Stream B</option>
              <option value="B">Stream C</option>
              <option value="B">Stream D</option>
              <option value="B">Stream E</option>
            </select>
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="className" className="mr-2">Stream Name:</label>
            <input
              type="text"
              id="className"
              value={streamName}
              onChange={(e) => setStreamName(e.target.value)}
              className="border border-gray-400 px-6 py-1 rounded w-full"
            />
          </div>
          <button
            onClick={handleAddClass}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Class
          </button>
        </div>

        {/* Class List Table */}
        <h3 className="text-xl font-bold mb-2">Class List</h3>
        <table className="w-full border-collapse border border-gray-800">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border border-gray-800">Grade</th>
              <th className="p-2 border border-gray-800">Stream</th>
              <th className="p-2 border border-gray-800">Stream Name</th>

            </tr>
          </thead>
          <tbody>
            {classData.map((cls, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="p-6 border border-gray-800">{cls.grade}</td>
                <td className="p-6 border border-gray-800">{cls.stream}</td>
                <td className="p-6 border border-gray-800">{cls.name}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassManagement;
