import React from 'react';
import html2pdf from 'html2pdf.js';

const Certificate = () => {
  const downloadCertificate = () => {
    const element = document.getElementById('certificate');
    html2pdf(element);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-end mb-4">
        <button
          onClick={downloadCertificate}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download PDF
        </button>
      </div>

      <div id="certificate" className="bg-white p-8 shadow-md">
        <h1 className="text-3xl font-bold mb-4">Republic of Kenya</h1>
        <h2 className="text-xl font-bold mb-4">Ministry of Education</h2>

        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th colSpan="2" className="bg-gray-200 border p-2 font-bold">
                Certificate of Registration of Schools
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 font-bold">Name of School</td>
              <td className="border p-2">Your School Name</td>
            </tr>
            <tr>
              <td className="border p-2 font-bold">Classification</td>
              <td className="border p-2">Public or Private</td>
            </tr>
            <tr>
              <td className="border p-2 font-bold">Name of Manager</td>
              <td className="border p-2">Fridah Mbithe</td>
            </tr>
            <tr>
              <td className="border p-2 font-bold">Town or Location</td>
              <td className="border p-2">Kathiani</td>
            </tr>
            <tr>
              <td className="border p-2 font-bold">District</td>
              <td className="border p-2">Mutito</td>
            </tr>
            <tr>
              <td className="border p-2 font-bold">Province</td>
              <td className="border p-2">Kitui</td>
            </tr>
            <tr>
              <td className="border p-2 font-bold">Maximum number of pupils per stream</td>
              <td className="border p-2">Your Max Pupils</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Certificate;
