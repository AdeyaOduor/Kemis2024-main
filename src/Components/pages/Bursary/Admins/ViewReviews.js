import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewReviews = () => {
  const [reviewsData, setReviewsData] = useState([]);

  const fetchReviews = async () => {
    try {
      let urlhom = window.location.origin;
      let url = "/scholarshipapi/api/v1/Organization/applicationReview";
      const response = await axios.get(urlhom + url);
      setReviewsData(response.data);
    } catch (error) {
      console.error("Error fetching reviews data:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleFileDownload = (base64Content, fileName) => {
    if (base64Content) {
      const blob = atob(base64Content);

      // Convert the blob to a Uint8Array
      const uint8Array = new Uint8Array(blob.length);
      for (let i = 0; i < blob.length; i++) {
        uint8Array[i] = blob.charCodeAt(i);
      }

      // Create a Blob object
      const fileBlob = new Blob([uint8Array], {
        type: "application/octet-stream",
      });

      // Create a download link
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(fileBlob);
      downloadLink.download = fileName || "downloaded_file";

      downloadLink.click();
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-8 overflow-x-auto">
      <h1 className="text-3xl font-bold mb-4">Application Reviews</h1>

      {/* Reviews List */}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left border border-gray-800">#</th>
            <th className="px-6 py-3 text-left border border-gray-800">UPI</th>
            <th className="px-6 py-3 text-left border border-gray-800">
              Applicant Name
            </th>
            <th className="px-6 py-3 text-left border border-gray-800">
              County
            </th>
            <th className="px-6 py-3 text-left border border-gray-800">
              Subcounty
            </th>
            <th className="px-6 py-3 text-left border border-gray-800">
              Members Present
            </th>
            <th className="px-6 py-3 text-left border border-gray-800">
              Vetting Remarks
            </th>
            <th className="px-6 py-3 text-left border border-gray-800">
              Score
            </th>
            <th className="px-6 py-3 text-left border border-gray-800">
              Level of Need
            </th>
            <th className="px-6 py-3 text-left border border-gray-800">
              Date of Vetting
            </th>
            <th className="px-6 py-3 text-left border border-gray-800">
              File Attachment
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {reviewsData.map((review, index) => (
            <tr
              key={review.reviewId}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="px-6 py-4 border border-gray-800 whitespace-nowrap">
                {index + 1}
              </td>
              <td className="px-6 py-4 border border-gray-800 whitespace-nowrap">
                {review.upi}
              </td>
              <td className="px-6 py-4 border border-gray-800 whitespace-nowrap">
                {review.fullName}
              </td>
              <td className="px-6 py-4 border border-gray-800 whitespace-nowrap">
                {review.county}
              </td>
              <td className="px-6 py-4 border border-gray-800 whitespace-nowrap">
                {review.subCounty}
              </td>
              <td className="px-6 py-4 border border-gray-800 whitespace-nowrap">
                {review.membersPresent}
              </td>
              <td className="px-6 py-4 border border-gray-800 whitespace-nowrap">
                {review.vettingRemarks}
              </td>
              <td className="px-6 py-4 border border-gray-800 whitespace-nowrap">
                {review.score}
              </td>
              <td className="px-6 py-4 border border-gray-800 whitespace-nowrap">
                {review.levelOfNeed}
              </td>
              <td className="px-6 py-4 border border-gray-800 whitespace-nowrap">
                {new Date(review.dateOfVetting).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 border border-gray-800 whitespace-nowrap">
                <button
                  className="text-blue-500 underline cursor-pointer"
                  onClick={() =>
                    handleFileDownload(
                      review.fileAttachment,
                      `downloaded_file_${index}`
                    )
                  }
                >
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewReviews;
