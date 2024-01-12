import React, { useState } from "react";

const Vetting = () => {
  const [vettingData, setVettingData] = useState({
    MembersPresent: "",
    VettingRemarks: "",
    Score: 0,
    LevelOfNeed: "",
    DateOfVetting: "",
    FileAttachment: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVettingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64Image = reader.result;
        setVettingData((prevData) => ({
          ...prevData,
          FileAttachment: base64Image,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileDownload = () => {
    const { FileAttachment } = vettingData;
    if (FileAttachment) {
      // Extract the base64 content from the data URL
      const base64Content = FileAttachment.split(",")[1];

      // Create a blob from the base64 content
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
      const fileName = "downloaded_file";
      downloadLink.href = URL.createObjectURL(fileBlob);
      downloadLink.download = fileName;

      // Trigger the download
      downloadLink.click();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Vetting Data:", vettingData);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Vetting Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="MembersPresent"
            className="block text-sm font-medium text-gray-700"
          >
            Members Present
          </label>
          <input
            type="text"
            id="MembersPresent"
            name="MembersPresent"
            value={vettingData.MembersPresent}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="VettingRemarks"
            className="block text-sm font-medium text-gray-700"
          >
            Vetting Remarks
          </label>
          <textarea
            id="VettingRemarks"
            name="VettingRemarks"
            value={vettingData.VettingRemarks}
            onChange={handleChange}
            rows="4"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="Score"
            className="block text-sm font-medium text-gray-700"
          >
            Score
          </label>
          <input
            type="number"
            id="Score"
            name="Score"
            value={vettingData.Score}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="LevelOfNeed"
            className="block text-sm font-medium text-gray-700"
          >
            Level of Need
          </label>
          <input
            type="text"
            id="LevelOfNeed"
            name="LevelOfNeed"
            value={vettingData.LevelOfNeed}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="DateOfVetting"
            className="block text-sm font-medium text-gray-700"
          >
            Date of Vetting
          </label>
          <input
            type="datetime-local"
            id="DateOfVetting"
            name="DateOfVetting"
            value={vettingData.DateOfVetting}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="FileAttachment"
            className="block text-sm font-medium text-gray-700"
          >
            File Attachment
          </label>
          <input
            type="file"
            id="FileAttachment"
            name="FileAttachment"
            onChange={handleFileChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Vetting;
