import axios from "axios";
import React, { useState, useEffect, useRef } from "react";

const ScholarshipsPage = () => {
  const [expandedScholarship, setExpandedScholarship] = useState(null);
  const [scholarships, setScholarships] = useState([]);
  const [applicationMessage, setApplicationMessage] = useState(null);
  const [appliedScholarships, setAppliedScholarships] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const fetchScholarshipsAndApplications = async () => {
      try {
        let urlhom = window.location.origin;

        // Fetch scholarships
        let urlScholarships = "/scholarshipapi/api/v1/Organization/scholarship";
        const responseScholarships = await axios.get(urlhom + urlScholarships);
        setScholarships(responseScholarships.data);
        localStorage.setItem(
          "scholarships",
          JSON.stringify(responseScholarships.data)
        );

        // Fetch applications
        const user = JSON.parse(localStorage.getItem("user"));
        const UserId = user.userId;
        let url =
          "/scholarshipapi/api/v1/Applications/getUserApplications/" + UserId;
        const getResponse = await axios.get(urlhom + url);
        console.log("my data", getResponse);

        const userApplied = getResponse.data;
        console.log("my data to be used" + userApplied);
        localStorage.setItem(
          "appliedScholarships",
          JSON.stringify(userApplied)
        );

        // Retrieve applied scholarships from local storage
        const appliedScholarshipsFromStorage =
          JSON.parse(localStorage.getItem("appliedScholarships")) || [];
        setAppliedScholarships(appliedScholarshipsFromStorage);
      } catch (error) {
        console.error("Error fetching scholarships or applications:", error);
      }
    };

    const storedScholarships = localStorage.getItem("scholarships");
    if (storedScholarships) {
      setScholarships(JSON.parse(storedScholarships));
    } else {
      fetchScholarshipsAndApplications();
    }
  }, []);

  useEffect(() => {
    cardRefs.current.forEach((ref, index) => {
      const card = ref.current;
      if (card) {
        const shouldShowButton = card.scrollHeight > card.clientHeight;
        card.querySelector(".read-more-button").style.display = shouldShowButton
          ? "block"
          : "none";
      }
    });
  }, [expandedScholarship, scholarships]);

  const handleReadMore = (id) => {
    setExpandedScholarship((prevExpanded) => (prevExpanded === id ? null : id));
  };

  const handleApply = async (organizationId) => {
    try {
      const userData = JSON.parse(localStorage.getItem("user"));
      const userId = userData.userId;

      const applicationData = JSON.parse(localStorage.getItem("application"));
      const applicationId = applicationData.applicationId;

      const scholarshipsJSON = localStorage.getItem("scholarships");
      const scholarships = JSON.parse(scholarshipsJSON);

      if (!scholarships || scholarships.length === 0) {
        console.error("Scholarships data not found or empty in local storage");
        setApplicationMessage("Error submitting application");
        return;
      }

      const scholarshipId = scholarships[0].scholarshipId;

      const requestData = {
        UserId: userId,
        ApplicationId: applicationId,
        ScholarshipId: scholarshipId,
        OrganizationId: organizationId,
      };

      const response = await axios.post(
        "/scholarshipapi/api/v1/Applications/addUserApplicationScholarship/",
        requestData
      );

      console.log("Application submitted successfully:", response.data);

      // Update appliedScholarships state and local storage
      setAppliedScholarships((prevApplied) => [...prevApplied, organizationId]);
      localStorage.setItem(
        "appliedScholarships",
        JSON.stringify([...appliedScholarships, organizationId])
      );

      setApplicationMessage("Application submitted successfully");
    } catch (error) {
      console.error("Error submitting application:", error);

      setApplicationMessage("Error submitting application");
    }
  };

  const ScholarshipCard = ({
    scholarship,
    isExpanded,
    onApply,
    onReadMore,
  }) => {
    const cardRef = useRef();

    useEffect(() => {
      if (cardRef.current) {
        const card = cardRef.current;
        card.style.height = isExpanded ? "auto" : "50vh";
      }
    }, [isExpanded]);

    return (
      <div
        ref={cardRef}
        key={scholarship.organizationId}
        className={`bg-white p-6 rounded-lg shadow-md dark:bg-gray-800`}
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
          {scholarship.name}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          Organization: {scholarship.organizationName}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          Descriptions:{" "}
          {isExpanded
            ? scholarship.descriptions
            : truncateText(scholarship.descriptions)}
        </p>
        {isExpanded && (
          <>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              Deadline Date:{" "}
              {new Date(scholarship.deadlineDate).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </p>
            {/* <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              Active: {scholarship.isActive}
            </p> */}
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              Type: {scholarship.type}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              Location: {scholarship.location}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              Amount: {scholarship.amount}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              Number of Chances: {scholarship.numberOfScholarships}
            </p>
          </>
        )}

        {/* {isExpanded && (
          <button
            onClick={() => onApply(scholarship.organizationId)}
            disabled={appliedScholarships.some(appliedScholarship => appliedScholarship.organizationId === scholarship.organizationId)}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
          >
            {appliedScholarships.some(appliedScholarship => appliedScholarship.organizationId === scholarship.organizationId) ? 'Applied' : 'Apply'}
          </button>

        )} */}

        <button
          onClick={() => onReadMore(scholarship.organizationId)}
          className="read-more-button text-blue-500 hover:underline focus:outline-none"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
    );
  };

  const truncateText = (text, maxLength = 1000) => {
    if (text.length <= maxLength) {
      return text;
    }
    return `${text.substring(0, maxLength)}...`;
  };

  return (
    <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
      {scholarships.map((scholarship) => (
        <ScholarshipCard
          key={scholarship.organizationId}
          scholarship={scholarship}
          isExpanded={expandedScholarship === scholarship.organizationId}
          onApply={handleApply}
          onReadMore={handleReadMore}
        />
      ))}

      {applicationMessage && (
        <div
          className={`mt-4 p-4 ${
            applicationMessage.includes("Error")
              ? "bg-red-200 text-red-800"
              : "bg-green-200 text-green-800"
          } rounded-md`}
        >
          {applicationMessage}
        </div>
      )}
    </div>
  );
};

export default ScholarshipsPage;
