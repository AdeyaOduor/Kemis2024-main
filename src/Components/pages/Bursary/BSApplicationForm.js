import React, { useState, useEffect } from "react";
import "./Form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BSApplicationForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [hasParents, setHasParents] = useState(false);
  const [countylist, setCountylist] = useState([]);
  const [scountylist, setScountylist] = useState([]);
  const [constituencylist, setConstituencylist] = useState([]);
  const [wardlist, setWardlist] = useState([]);
  const [schoolist, setSchoolist] = useState([]);
  const [uic, setSchool] = useState("0");
  const [PrimarySchool, setSchoolName] = useState("");
  const [Ward, setWard] = useState("");

  const [FirstName, setFirstName] = useState("");
  const [UPI, setUpi] = useState("");
  const [MiddleName, setMiddlename] = useState("");
  const [LastName, setLastname] = useState("");
  const [Gender, setGender] = useState("");
  const [DateOfBirth, setDateOfBirth] = useState("");
  const [MobileNo, setTelephoneNo] = useState("");
  const [AlternativeMobileNo, setAlternativeMobileNo] = useState("");
  const [PhysicalAddress, setPhysicalAddress] = useState("");
  const [County, setCountyName] = useState("");
  const [county_code, setCountyCode] = useState("");
  const [SubCounty, setSubCounty] = useState("");
  const [Constituency, setConstituency] = useState("");
  const [constituency_code, setConstituencyCode] = useState("");
  const [sub_county_code, setSubCountyCode] = useState("");
  const [ward_code, setWardCode] = useState("");
  const [levellist, setLevellist] = useState([]);
  const [level_code, setLevel] = useState("0");
  const [Level, setLevelName] = useState("");
  const [Location, setLocation] = useState("");
  const [SubLocation, setSubLocation] = useState("");
  const [PrimarySchoolPostalAddress, setPrimarySchoolAddress] = useState("");
  const [PrimarySchoolTelephoneNo, setPrimarySchoolTelephone] = useState("");
  const [KCPEIndexNo, setKCPEIndex] = useState("");
  const [KCPEMarks, setKCPEMarks] = useState("");
  const [KCPEYear, setKCPEYear] = useState("");
  const [KCPEAttempts, setKCPEAttempts] = useState("");
  const [RepeatedClasses, setRepeatedClasses] = useState("");
  const [page, setPage] = useState(1);

  const [FatherFirstName, setFatherFirstname] = useState("");
  const [FatherMiddleName, setFatherMiddleName] = useState("");
  const [FatherSurName, setFatherSurname] = useState("");
  const [FathersIdNumber, setFatherId] = useState("");
  const [FathersMobilNumber, setFatherMobileNumber] = useState("");
  const [FatherSourceOfIncome, setFatherSourceOfIncome] = useState("");
  const [FatherDeceasedFileAttachment, setFileUploaded] = useState(null);
  const [IsFatherDeceased, setFatherDeceased] = useState(false);

  const [MotherFirstName, setMotherFirstName] = useState("");
  const [MotherMiddleName, setMotherMiddleName] = useState("");
  const [MotherSurname, setMotherSurname] = useState("");
  const [MothersIdNumber, setMothersIdNumber] = useState("");
  const [MothersMobileNumber, setMothersMobileNumber] = useState("");
  const [IsMotherDeceased, setIsMotherDeceased] = useState(false);
  const [MotherSourceOfIncome, setMotherSourceOfIncome] = useState("");
  const [MotherDeceasedFileAttachment, setFileUploaded2] = useState(null);

  const [GuardianFirstName, setGuardianFirstName] = useState("");
  const [GuardianMiddleName, setGuardianMiddleName] = useState("");
  const [GuardianSurname, setGuardianSurname] = useState("");
  const [GuardianIdNumber, setGuardianIdNumber] = useState("");
  const [GuardianMobileNumber, setGuardianMobileNumber] = useState("");
  const [GuardianSourceOfIncome, setGuardianSourceOfIncome] = useState("");

  // Sibling Information
  const [Name, setSiblingName] = useState("");
  const [Age, setSiblingAge] = useState("");
  const [SchoolOrEmployer, setSiblingSchoolOrEmployer] = useState("");
  const [ClassOrPosition, setSiblingClassOrPosition] = useState("");

  // Applicant Need Information
  const [WhyApplying, setWhyApplying] = useState("");
  const [ReceivedFinancialSupport, setReceivedFinancialSupport] =
    useState(false);
  const [FinancialSupportDetails, setFinancialSupportDetails] = useState("");
  const [HasDisability, setHasDisability] = useState(false);
  const [DisabilityDescription, setDisabilityDescription] = useState("");
  const [InheritanceDescription, setInheritanceDescription] = useState("");
  const [LivingWith, setLivingWith] = useState("");
  const [ParentsEmployed, setParentsEmployed] = useState(false);
  const [ParentsJobDetails, setParentsJobDetails] = useState("");
  const [ParentsOwnBusiness, setParentsOwnBusiness] = useState(false);
  const [BusinessDetails, setBusinessDetails] = useState("");
  const [ParentsOwnLand, setParentsOwnLand] = useState(false);
  const [LandDetails, setLandDetails] = useState("");
  const [OtherAssetsIncome, setOtherAssetsIncome] = useState(false);
  const [OtherAssetsIncomeDetails, setOtherAssetsIncomeDetails] = useState("");
  const [FamilyAffectedByConflict, setFamilyAffectedByConflict] =
    useState(false);
  const [FamilyConflictDetails, setFamilyConflictDetails] = useState("");
  const [TypeOfHouse, setTypeOfHouse] = useState("");
  const [
    OtherDisadvantagesOrVulnerabilities,
    setOtherDisadvantagesOrVulnerabilities,
  ] = useState("");
  const [SiblingsInSecondarySchool, setSiblingsInSecondarySchool] =
    useState("");
  const [SiblingsInUniversity, setSiblingsInUniversity] = useState("");

  // Declarations Information
  const [ApplicantDeclaration, setApplicantDeclaration] = useState("");
  const [ApplicantSignature, setApplicantSignature] = useState("");
  const [DeclarationDate, setDeclarationDate] = useState("");
  const [confirmCheckbox, setConfirmCheckbox] = useState(false);

  // NEMIS
  const Homebaseurl = `http://nemis.education.go.ke`;
  const crdpassword = "9876$Teta";
  const crdusername = "nemisadmin";
  const credentials = `${crdusername}:${crdpassword}`;
  const base64Credentials = btoa(credentials);
  const headers = {
    Authorization: `Basic ${base64Credentials}`,
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Methods": "GET, POST",
    "Access-Control-Allow-Headers": "X-Token",
    "Access-Control-Allow-Credentials": "true",
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setFileUploaded(base64Image);
        setFileUploaded2(base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const getCounties = () => {
    const url = "/generic2/api/Cascade/Counties";
    const baseurl = Homebaseurl + url;
    axios
      .get(baseurl, { headers })
      .then((response) => {
        setCountylist(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const getSubCounties = (countycode) => {
    const url = "/generic2/api/Cascade/SubCounties/" + countycode;
    const baseurl = Homebaseurl + url;
    axios
      .get(baseurl, { headers })
      .then((response) => {
        setScountylist(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const getConstituencies = () => {
    const url = "/generic2/api/Cascade/constituencies";
    const baseurl = Homebaseurl + url;
    axios
      .get(baseurl, { headers })
      .then((response) => {
        setConstituencylist(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const getWards = (constituency_code) => {
    const url = "/generic2/api/Cascade/Wards/" + constituency_code;
    const baseurl = Homebaseurl + url;
    axios
      .get(baseurl, { headers })
      .then((response) => {
        setWardlist(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const getLevels = () => {
    const url = "/generic2/api/Cascade/Levels";
    const baseurl = Homebaseurl + url;
    axios
      .get(baseurl, { headers })
      .then((response) => {
        setLevellist(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const getSchools = (subcountycode, levelcode) => {
    const url =
      "/generic2/api/Institution/InstitutionsListPerSubCountyLevel/" +
      subcountycode +
      "/" +
      levelcode;
    const baseurl = Homebaseurl + url;
    axios
      .get(baseurl, { headers })
      .then((response) => {
        setSchoolist(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const handleCountyChange = (e) => {
    setCountyCode(e.target.value);
    var mcounty = e.target.value;
    const option = countylist.find((option) => option.county_Code === mcounty);
    var text = option.county_Name;
    setCountyName(text);
    console.log(text, mcounty);
    getSubCounties(mcounty);
  };
  const handleSubCountyChange = (e) => {
    setSubCountyCode(e.target.value);
    var mscounty = e.target.value;
    const option = scountylist.find(
      (option) => option.sub_County_Code === mscounty
    );
    var text = option.sub_County_Name;
    setSubCounty(text);
    console.log(text, mscounty);
    getLevels();
    getSchools(mscounty, level_code);
  };

  const handleConstituencyChange = (e) => {
    const msconstituency = e.target.value;
    const option = constituencylist.find(
      (option) => option.constituency_Code === msconstituency
    );
    const text = option.constituency_Name;
    setConstituency(text);
    setConstituencyCode(msconstituency);
    console.log(text, msconstituency);
    getWards(msconstituency);
  };

  const handleWardChange = (e) => {
    setWardCode(e.target.value);
    var mward = e.target.value;
    const option = wardlist.find((option) => option.ward_Code === mward);
    var text = option.ward_Name;
    setWard(text);
  };

  const handleLevelChange = (e) => {
    setLevel(e.target.value);
    var mlevel = e.target.value;
    const option = levellist.find((option) => option.level_Code === mlevel);
    var text = option.level_Name;
    setLevelName(text);
    console.log(text, mlevel);
    getSchools(sub_county_code, mlevel);
  };
  const handleSchoolChange = (e) => {
    var mskul = e.target.value;
    const option = schoolist.find(
      (option) => option.institution_Code === mskul
    );
    var text = option.institution_Name;
    setSchoolName(text);
    console.log(text, mskul);
    setSchool(mskul);
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  useEffect(() => {
    getCounties();
    getSubCounties();
    getConstituencies();
    getWards();
    getLevels();
    getSchools();
  }, []);

  // APPLICATION SUBMIT
  const handleApplicationSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = JSON.parse(localStorage.getItem("user"));
      const UserId = userData.userId;
      const formData = {
        UserId,
        UPI,
        FirstName,
        MiddleName,
        LastName,
        Gender,
        DateOfBirth,
        MobileNo,
        AlternativeMobileNo,
        PhysicalAddress,
        SubCounty,
        County,
        Constituency,
        Ward,
        Location,
        SubLocation,
        Level,
        PrimarySchool,
        PrimarySchoolPostalAddress,
        PrimarySchoolTelephoneNo,
        KCPEIndexNo,
        KCPEMarks,
        KCPEYear,
        KCPEAttempts,
      };

      let urlhom = window.location.origin;
      let url = "/scholarshipapi/api/v1/Applications/addApplication";
      const response = await axios.post(urlhom + url, formData);

      if (response.status === 200) {
        const applicationsUrl =
          "/scholarshipapi/api/v1/Applications/getApplicationsByUserId/" +
          UserId;
        const applicationsResponse = await axios.get(urlhom + applicationsUrl);
        const updatedApplications = applicationsResponse.data;

        // Sort applications by createdAt in descending order
        updatedApplications.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        // Get the latest application
        const latestApplication = updatedApplications[0];

        localStorage.setItem(
          "applications",
          JSON.stringify(updatedApplications)
        );

        // Set the latest applicationId in local storage
        localStorage.setItem(
          "currentApplicationId",
          latestApplication.applicationId
        );
        toast.success(
          "Congratulations! You have successfully completed this step. Moving to Step 2.",
          { autoClose: 2000 }
        );
        setCurrentStep(2);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // PARENT/GUARDIAN POSTING
  const handleParentSubmit = async (e) => {
    e.preventDefault();

    try {
      const applicationId = localStorage.getItem("currentApplicationId");
      console.log(applicationId);
      const formData = {
        ApplicationId: applicationId,
        FatherFirstName,
        FatherMiddleName,
        FatherSurName,
        FathersIdNumber,
        FathersMobilNumber,
        IsFatherDeceased,
        FatherDeceasedFileAttachment,
        FatherSourceOfIncome,
        MotherFirstName,
        MotherMiddleName,
        MotherSurname,
        MothersIdNumber,
        MothersMobileNumber,
        IsMotherDeceased,
        MotherDeceasedFileAttachment,
        MotherSourceOfIncome,
        GuardianFirstName,
        GuardianMiddleName,
        GuardianSurname,
        GuardianIdNumber,
        GuardianMobileNumber,
        GuardianSourceOfIncome,
      };

      let urlhom = window.location.origin;
      let url = "/scholarshipapi/api/v1/Applications/addParentsGuardian";
      const response = await axios.post(urlhom + url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        toast.success(
          "Congratulations! You have successfully completed this step. Moving to Step 3.",
          { autoClose: 2000 }
        );
        setCurrentStep(3);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // SIBLING POSTING
  const handleSiblingsSubmit = async (e) => {
    e.preventDefault();
    try {
      const applicationId = localStorage.getItem("currentApplicationId");
      console.log(applicationId);
      const siblingsFormData = [
        {
          ApplicationId: applicationId,
          Name,
          Age,
          SchoolOrEmployer,
          ClassOrPosition,
        },
      ];

      let urlhom = window.location.origin;
      let url = "/scholarshipapi/api/v1/Applications/addSiblings";
      const response = await axios.post(urlhom + url, siblingsFormData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        toast.success(
          "Congratulations! You have successfully completed this step. Moving to Step 4.",
          { autoClose: 2000 }
        );
        setCurrentStep(4);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  // APPLICATION NEED POSTING
  const handleNeedSubmit = async (e) => {
    e.preventDefault();

    try {
      const applicationId = localStorage.getItem("currentApplicationId");
      console.log(applicationId);
      const formData = {
        ApplicationId: applicationId,
        WhyApplying,
        ReceivedFinancialSupport,
        FinancialSupportDetails,
        HasDisability,
        DisabilityDescription,
        InheritanceDescription,
        LivingWith,
        ParentsEmployed,
        ParentsJobDetails,
        ParentsOwnBusiness,
        BusinessDetails,
        ParentsOwnLand,
        LandDetails,
        OtherAssetsIncome,
        OtherAssetsIncomeDetails,
        FamilyAffectedByConflict,
        FamilyConflictDetails,
        TypeOfHouse,
        OtherDisadvantagesOrVulnerabilities,
        SiblingsInSecondarySchool,
        SiblingsInUniversity,
      };

      let urlhom = window.location.origin;
      let url = "/scholarshipapi/api/v1/Applications/addApplicantNeed";
      const response = await axios.post(urlhom + url, formData);
      if (response.status === 200) {
        toast.success(
          "Congratulations! You have successfully completed this step.Moving to Step 5.",
          { autoClose: 2000 }
        );
        setCurrentStep(5);
        console.log(response);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // DECLARATIONS POSTING
  const handleDeclarationSubmit = async (e) => {
    e.preventDefault();

    try {
      const applicationId = localStorage.getItem("currentApplicationId");
      console.log(applicationId);
      const formData = {
        ApplicationId: applicationId,
        ApplicantDeclaration,
        ApplicantSignature,
        DeclarationDate,
      };

      let urlhom = window.location.origin;
      let url = "/scholarshipapi/api/v1/Applications/addDeclarations";
      const response = await axios.post(urlhom + url, formData);

      if (response.status === 200) {
        toast.success(
          "Congratulations! You have successfully completed the form. You can now apply for a scholarship.",
          { autoClose: 2000 }
        );
        navigate("/bursaries/bdasboard");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(2);
  };
  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  return (
    <>
      <div className="flex m-2">
        <div className="w-full p-4 formBground">
          {currentStep === 1 && (
            <div>
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Applicant's Section *
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="bg-opacity-50 p-8 rounded-md"
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="mb-2">
                      <label
                        htmlFor="UPI"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Student UPI
                      </label>
                      <input
                        type="text"
                        id="UPI"
                        value={UPI}
                        onChange={(e) => setUpi(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="FirstName"
                        className="block text-sm font-medium text-gray-600"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="FirstName"
                        value={FirstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="middlename"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Middle Name
                      </label>
                      <input
                        type="text"
                        id="MiddleName"
                        value={MiddleName}
                        onChange={(e) => setMiddlename(e.target.value)}
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="lastname"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastname"
                        value={LastName}
                        onChange={(e) => setLastname(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="gender"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Gender
                      </label>
                      <select
                        id="gender"
                        value={Gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="prefernotsay">Prefer not say</option>
                      </select>
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="dateOfBirth"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        id="dateOfBirth"
                        value={DateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="telephoneNo"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Telephone No
                      </label>
                      <input
                        type="tel"
                        id="telephoneNo"
                        value={MobileNo}
                        onChange={(e) => setTelephoneNo(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="alternativeMobileNo"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Alternative Mobile No
                      </label>
                      <input
                        type="tel"
                        id="alternativeMobileNo"
                        value={AlternativeMobileNo}
                        onChange={(e) => setAlternativeMobileNo(e.target.value)}
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="physicalAddress"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Physical Address
                      </label>
                      <input
                        type="text"
                        id="physicalAddress"
                        value={PhysicalAddress}
                        onChange={(e) => setPhysicalAddress(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="county"
                        className="block text-sm font-medium text-gray-600"
                      >
                        County
                      </label>
                      <select
                        labelId="type-label"
                        id="County"
                        value={county_code}
                        onChange={handleCountyChange}
                        required
                        style={{
                          marginTop: "0.5rem",
                          padding: "0.5rem",
                          width: "100%",
                          border: "1px solid #ccc",
                          borderRadius: "0.25rem",
                        }}
                      >
                        <option value="" disabled>
                          Select County
                        </option>
                        {countylist?.map((option) => (
                          <option
                            key={option.county_Name}
                            value={option.county_Code}
                          >
                            {option.county_Name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="subCounty"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Sub County
                      </label>
                      <select
                        labelId="subcounty-label"
                        id="SubCounty"
                        value={sub_county_code}
                        onChange={handleSubCountyChange}
                        required
                        style={{
                          marginTop: "0.5rem",
                          padding: "0.5rem",
                          width: "100%",
                          border: "1px solid #ccc",
                          borderRadius: "0.25rem",
                        }}
                      >
                        <option value="" disabled>
                          Sub-County
                        </option>
                        {scountylist?.map((option) => (
                          <option
                            key={option.sub_County_Name}
                            value={option.sub_County_Code}
                          >
                            {option.sub_County_Name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="constituency"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Constituency
                      </label>
                      <select
                        labelId="constituency-label"
                        id="constituency_code"
                        value={constituency_code}
                        onChange={handleConstituencyChange}
                        required
                        style={{
                          marginTop: "0.5rem",
                          padding: "0.5rem",
                          width: "100%",
                          border: "1px solid #ccc",
                          borderRadius: "0.25rem",
                        }}
                      >
                        <option value="" enabled>
                          Select Constituency
                        </option>
                        {constituencylist?.map((option) => (
                          <option
                            key={option.constituency_Name}
                            value={option.constituency_Code}
                          >
                            {option.constituency_Name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="ward"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Ward
                      </label>
                      <select
                        labelId="ward-label"
                        id="ward_Code"
                        value={ward_code}
                        onChange={handleWardChange}
                        required
                        style={{
                          marginTop: "0.5rem",
                          padding: "0.5rem",
                          width: "100%",
                          border: "1px solid #ccc",
                          borderRadius: "0.25rem",
                        }}
                      >
                        <option value="" enabled>
                          Select Ward
                        </option>
                        {wardlist?.map((option) => (
                          <option
                            key={option.ward_Name}
                            value={option.ward_Code}
                          >
                            {option.ward_Name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="location"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        value={Location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="subLocation"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Sub Location
                      </label>
                      <input
                        type="text"
                        id="subLocation"
                        value={SubLocation}
                        onChange={(e) => setSubLocation(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <label id="Level-label">Level</label>
                      <select
                        labelId="Level-label"
                        id="level_code"
                        value={level_code}
                        onChange={handleLevelChange}
                        required
                        style={{
                          marginTop: "0.5rem",
                          padding: "0.5rem",
                          width: "100%",
                          border: "1px solid #ccc",
                          borderRadius: "0.25rem",
                        }}
                      >
                        <option value="" disabled>
                          Select School Level
                        </option>
                        {levellist?.map((option) => (
                          <option
                            key={option.level_Name}
                            value={option.level_Code}
                          >
                            {option.level_Name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="primarySchool"
                        className="block text-sm font-medium text-gray-600"
                      >
                        School
                      </label>
                      <select
                        labelId="subcounty-label"
                        id="uic"
                        value={uic}
                        onChange={handleSchoolChange}
                        required
                        style={{
                          marginTop: "0.5rem",
                          padding: "0.5rem",
                          width: "100%",
                          border: "1px solid #ccc",
                          borderRadius: "0.25rem",
                        }}
                      >
                        <option value="" disabled>
                          Select School
                        </option>
                        {schoolist?.map((option) => (
                          <option
                            key={option.institution_Name}
                            value={option.institution_Code}
                          >
                            {option.institution_Name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="primarySchoolAddress"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Primary School Address
                      </label>
                      <input
                        type="text"
                        id="primarySchoolAddress"
                        value={PrimarySchoolPostalAddress}
                        onChange={(e) =>
                          setPrimarySchoolAddress(e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="PrimarySchoolTelephoneNo"
                        className="block text-sm font-medium text-gray-600"
                      >
                        {" "}
                        School Telephone
                      </label>
                      <input
                        type="number"
                        id="PrimarySchoolTelephoneNo"
                        value={PrimarySchoolTelephoneNo}
                        onChange={(e) =>
                          setPrimarySchoolTelephone(e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="KCPEIndexNo"
                        className="block text-sm font-medium text-gray-600"
                      >
                        KCPE Index No
                      </label>
                      <input
                        type="number"
                        id="KCPEIndexNo"
                        value={KCPEIndexNo}
                        onChange={(e) => setKCPEIndex(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="KCPEMarks"
                        className="block text-sm font-medium text-gray-600"
                      >
                        KCPE Marks
                      </label>
                      <input
                        type="number"
                        id="KCPEMarks"
                        value={KCPEMarks}
                        onChange={(e) => setKCPEMarks(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="KCPEYear"
                        className="block text-sm font-medium text-gray-600"
                      >
                        KCPE Year
                      </label>
                      <input
                        type="number"
                        id="KCPEYear"
                        value={KCPEYear}
                        onChange={(e) => setKCPEYear(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-0">
                      <label
                        htmlFor="KCPEAttempts"
                        className="block text-sm font-medium text-gray-600"
                      >
                        KCPE Attempts
                      </label>
                      <input
                        type="number"
                        id="KCPEAttempts"
                        value={KCPEAttempts}
                        onChange={(e) => setKCPEAttempts(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="repeatedClasses"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Repeated Classes
                      </label>
                      <input
                        type="number"
                        id="repeatedClasses"
                        value={RepeatedClasses}
                        onChange={(e) => setRepeatedClasses(e.target.value)}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      onClick={handleApplicationSubmit}
                    >
                      Next Page
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Section 2 */}
          {currentStep === 2 && (
            <div className="mx-auto max-w-7xl py-12 sm:px-6 sm:py-16 lg:px-8">
              <h2 className="text-xl font-semibold mb-4">
                Parents/ Guardian Details *
              </h2>
              <div className="my-2">
                <h2 className="text-xl font-semibold mb-4">
                  Parent's Information
                </h2>
                <div>
                  <label
                    htmlFor="hasParents"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Fill in Parent's Details?
                  </label>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="hasParents"
                      checked={hasParents}
                      onChange={() => setHasParents(!hasParents)}
                      className="mt-0.5 p-0.5"
                    />{" "}
                    Yes
                    <input
                      type="checkbox"
                      id="hasParentsNo"
                      checked={!hasParents}
                      onChange={() => setHasParents(false)}
                      className="mt-0.5 ml-4 p-0.5"
                    />{" "}
                    No
                  </div>
                </div>

                {/* Conditionally render the form based on the checkbox */}
                {hasParents && (
                  <form className=" bg-opacity-50 p-6 rounded-md h-auto">
                    <h2>
                      <strong></strong>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1">
                      <div className="mb-2">
                        <label
                          htmlFor="firstname"
                          className="block text-sm font-medium text-gray-600"
                        >
                          Father's First Name
                        </label>
                        <input
                          type="text"
                          id="FatherFirstname"
                          value={FatherFirstName}
                          onChange={(e) => setFatherFirstname(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="FatherMiddleName"
                          className="block text-sm font-medium text-gray-600"
                        >
                          Father's Middle Name
                        </label>
                        <input
                          type="text"
                          id="FatherMiddleName"
                          value={FatherMiddleName}
                          onChange={(e) => setFatherMiddleName(e.target.value)}
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="surname"
                          className="block text-sm font-medium text-gray-600"
                        >
                          Father's Surname
                        </label>
                        <input
                          type="text"
                          id="FatherSurName"
                          value={FatherSurName}
                          onChange={(e) => setFatherSurname(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="fatherid"
                          className="block text-sm font-medium text-gray-600"
                        >
                          Father's ID Number
                        </label>
                        <input
                          type="number"
                          id="fatherid"
                          value={FathersIdNumber}
                          onChange={(e) => setFatherId(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="fathermobilenumber "
                          className="block text-sm font-medium text-gray-600"
                        >
                          Father's Mobile Number
                        </label>
                        <input
                          type="tel"
                          id="fathermobilenumber"
                          value={FathersMobilNumber}
                          onChange={(e) =>
                            setFatherMobileNumber(e.target.value)
                          }
                          required
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="isFatherDeceased"
                          className="block text-sm font-medium text-gray-600"
                        >
                          Is Father Deceased?
                        </label>
                        <select
                          type="text"
                          id="isFatherDeceased"
                          value={IsFatherDeceased}
                          onChange={(e) => setFatherDeceased(e.target.value)}
                          required
                          className="w-full"
                        >
                          <option>Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>

                      {IsFatherDeceased === "Yes" && (
                        <div className="mb-2">
                          <label
                            htmlFor="fatherDeceasedFileAttachment"
                            className="block text-sm font-medium text-gray-600"
                          >
                            Father's Deceased File Attachment
                          </label>
                          <input
                            type="file"
                            id="fatherDeceasedFileAttachment"
                            onChange={handleFileChange}
                          />
                        </div>
                      )}
                    </div>

                    <div className="mb-2">
                      <label
                        htmlFor="GuardianSourceOfIncome"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Father's Source of Income
                      </label>
                      <input
                        type="text"
                        id="Fathersourceofincome"
                        value={FatherSourceOfIncome}
                        onChange={(e) =>
                          setFatherSourceOfIncome(e.target.value)
                        }
                        require
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="mb-2">
                        <label
                          htmlFor="MotherFirstName"
                          className="block text-sm font-medium text-gray-600"
                        >
                          Mother's First Name
                        </label>
                        <input
                          type="text"
                          id="MotherFirstName"
                          value={MotherFirstName}
                          onChange={(e) => setMotherFirstName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="MotherMiddleName"
                          className="block text-sm font-medium text-gray-600"
                        >
                          Mother's Middle Name
                        </label>
                        <input
                          type="text"
                          id="MotherMiddleName"
                          value={MotherMiddleName}
                          onChange={(e) => setMotherMiddleName(e.target.value)}
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="MotherSurname"
                          className="block text-sm font-medium text-gray-600"
                        >
                          Mother's Surname
                        </label>
                        <input
                          type="text"
                          id="MotherSurname"
                          value={MotherSurname}
                          onChange={(e) => setMotherSurname(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="MothersIdNumber"
                          className="block text-sm font-medium text-gray-600"
                        >
                          Mother's ID Number
                        </label>
                        <input
                          type="number"
                          id="MothersIdNumber"
                          value={MothersIdNumber}
                          onChange={(e) => setMothersIdNumber(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="MothersMobileNumber"
                          className="block text-sm font-medium text-gray-600"
                        >
                          Mother's Mobile Number
                        </label>
                        <input
                          type="tel"
                          id="MothersMobileNumber"
                          value={MothersMobileNumber}
                          onChange={(e) =>
                            setMothersMobileNumber(e.target.value)
                          }
                          required
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="IsMotherDeceased"
                          className="block text-sm font-medium text-gray-600"
                        >
                          Is Mother Deceased?
                        </label>
                        <select
                          type="text"
                          id="IsMotherDeceased"
                          value={IsMotherDeceased}
                          onChange={(e) => setIsMotherDeceased(e.target.value)}
                          required
                          className="w-full"
                        >
                          <option>Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>

                      {IsMotherDeceased === "Yes" && (
                        <div className="mb-2">
                          <label
                            htmlFor="fatherDeceasedFileAttachment"
                            className="block text-sm font-medium text-gray-600"
                          >
                            Mother's Deceased File Attachment
                          </label>
                          <input
                            type="file"
                            id="motherDeceasedFileAttachment"
                            onChange={handleFileChange}
                          />
                        </div>
                      )}
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="GuardianSourceOfIncome"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Mother's Source of Income
                      </label>
                      <input
                        type="text"
                        id="Mothersourceofincome"
                        value={MotherSourceOfIncome}
                        onChange={(e) =>
                          setMotherSourceOfIncome(e.target.value)
                        }
                        require
                      />
                    </div>
                  </form>
                )}
              </div>

              <div>
                {!hasParents && (
                  <form className="bg-opacity-50 p-6 rounded-md">
                    <h2>
                      <strong>Guardian's Information</strong>
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="mb-2">
                        <label
                          htmlFor="GuardianFirstName"
                          className="block text-sm font-medium text-gray-600"
                        >
                          Guardian's First Name
                        </label>
                        <input
                          type="text"
                          id="GuardianFirstName"
                          value={GuardianFirstName}
                          onChange={(e) => setGuardianFirstName(e.target.value)}
                          require
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="GuardianMiddleName"
                          className="block text-sm font-medium text-gray-600"
                        >
                          Guardian's Middle Name
                        </label>
                        <input
                          type="text"
                          id="GuardianMiddleName"
                          value={GuardianMiddleName}
                          onChange={(e) =>
                            setGuardianMiddleName(e.target.value)
                          }
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="GuardianSurname"
                          className="block text-sm font-medium text-gray-600"
                        >
                          Guardian's Surname
                        </label>
                        <input
                          type="text"
                          id="GuardianSurname"
                          value={GuardianSurname}
                          onChange={(e) => setGuardianSurname(e.target.value)}
                          require
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="GuardianIdNumber"
                          className="block text-sm font-medium text-gray-600"
                        >
                          Guardian's ID Number
                        </label>
                        <input
                          type="number"
                          id="GuardianIdNumber"
                          value={GuardianIdNumber}
                          onChange={(e) => setGuardianIdNumber(e.target.value)}
                          require
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="GuardianMobileNumber"
                          className="block text-sm font-medium text-gray-600"
                        >
                          Guardian's Mobile Number
                        </label>
                        <input
                          type="tel"
                          id="GuardianMobileNumber"
                          value={GuardianMobileNumber}
                          onChange={(e) =>
                            setGuardianMobileNumber(e.target.value)
                          }
                          require
                        />
                      </div>
                      {/* Guardian's Source of Income */}
                      <div className="mb-2">
                        <label
                          htmlFor="GuardianSourceOfIncome"
                          className="block text-sm font-medium text-gray-600"
                        >
                          Guardian's Source of Income
                        </label>
                        <input
                          type="text"
                          id="GuardianSourceOfIncome"
                          value={GuardianSourceOfIncome}
                          onChange={(e) =>
                            setGuardianSourceOfIncome(e.target.value)
                          }
                          require
                        />
                      </div>
                    </div>
                  </form>
                )}
              </div>
              <button
                type="submit"
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleParentSubmit}
              >
                Save
              </button>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Sibling's Information *
              </h2>
              <form
                onSubmit={handleNext}
                className="bg-opacity-50 p-6 rounded-md"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-2">
                    <label
                      htmlFor="siblingName"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Sibling's Full Name
                    </label>
                    <input
                      type="text"
                      id="siblingName"
                      value={Name}
                      onChange={(e) => setSiblingName(e.target.value)}
                      require
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="siblingAge"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Sibling's Age
                    </label>
                    <input
                      type="number"
                      id="siblingAge"
                      value={Age}
                      onChange={(e) => setSiblingAge(e.target.value)}
                      require
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="siblingSchoolOrEmployer"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Sibling's School or Employer
                    </label>
                    <input
                      type="text"
                      id="siblingSchoolOrEmployer"
                      value={SchoolOrEmployer}
                      onChange={(e) =>
                        setSiblingSchoolOrEmployer(e.target.value)
                      }
                      require
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="siblingClassOrPosition"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Sibling's Class or Position
                    </label>
                    <input
                      type="text"
                      id="siblingClassOrPosition"
                      value={ClassOrPosition}
                      onChange={(e) =>
                        setSiblingClassOrPosition(e.target.value)
                      }
                      require
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleSiblingsSubmit}
                  className="mt-4 mr-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Save
                </button>
              </form>
            </div>
          )}
          {currentStep === 4 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Applicant's Needs Details *
              </h2>
              <form
                onSubmit={handleNext}
                className=" bg-opacity-50 p-6 rounded-md h-auto"
              >
                <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1">
                  <div className="mb-2">
                    <label
                      htmlFor="whyApplying"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Why are you applying for support?
                    </label>
                    <textarea
                      id="whyApplying"
                      value={WhyApplying}
                      onChange={(e) => setWhyApplying(e.target.value)}
                      required
                      className="w-full"
                    ></textarea>
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="livingWith"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Who Do you Live With?
                    </label>
                    <input
                      type="text"
                      id="livingWith"
                      value={LivingWith}
                      onChange={(e) => setLivingWith(e.target.value)}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="receivedFinancialSupportYes"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Have you received financial support before?
                    </label>
                    <label>
                      <select
                        id="receivedFinancialSupport"
                        value={ReceivedFinancialSupport}
                        onChange={(e) =>
                          setReceivedFinancialSupport(e.target.value)
                        }
                        className="w-full"
                      >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </label>
                  </div>

                  {ReceivedFinancialSupport === "Yes" && (
                    <div className="mb-2">
                      <label
                        htmlFor="financialSupportDetails"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Financial Support Details
                      </label>
                      <textarea
                        id="financialSupportDetails"
                        value={FinancialSupportDetails}
                        onChange={(e) =>
                          setFinancialSupportDetails(e.target.value)
                        }
                        className="w-full"
                      ></textarea>
                    </div>
                  )}
                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-600">
                      Do you have a disability?
                    </label>
                    <label>
                      <select
                        id="hasDisability"
                        value={HasDisability}
                        onChange={(e) => setHasDisability(e.target.value)}
                        className="w-full"
                      >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </label>
                  </div>
                  {/*if "Yes" is selected */}
                  {HasDisability === "Yes" && (
                    <div className="mb-2">
                      <label
                        htmlFor="disabilityDescription"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Disability Description
                      </label>
                      <textarea
                        id="disabilityDescription"
                        value={DisabilityDescription}
                        onChange={(e) =>
                          setDisabilityDescription(e.target.value)
                        }
                        className="w-full"
                      ></textarea>
                    </div>
                  )}

                  <div className="mb-2">
                    <label
                      htmlFor="parentsOwnBusiness"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Do your parents / guardian own a business?
                    </label>
                    <label>
                      <select
                        id="parentsOwnBusiness"
                        value={ParentsOwnBusiness}
                        onChange={(e) => setParentsOwnBusiness(e.target.value)}
                        className="w-full"
                      >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </label>
                  </div>

                  {ParentsOwnBusiness === "Yes" && (
                    <div className="mb-2">
                      <label
                        htmlFor="financialSupportDetails"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Business Details
                      </label>
                      <textarea
                        id="businessDetails"
                        value={BusinessDetails}
                        onChange={(e) => setBusinessDetails(e.target.value)}
                        className="w-full"
                      ></textarea>
                    </div>
                  )}

                  <div className="mb-2">
                    <label
                      htmlFor="parentsJobDetails"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Are your Parents / Guardian Employed?
                    </label>
                    <label>
                      <select
                        id="parentsEmployed"
                        value={ParentsEmployed}
                        onChange={(e) => setParentsEmployed(e.target.value)}
                        className="w-full"
                      >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </label>
                  </div>

                  {ParentsJobDetails === "Yes" && (
                    <div className="mb-2">
                      <label
                        htmlFor="parentsJobDetails"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Parents / Guardian Job Details
                      </label>
                      <textarea
                        id="parentsJobDetails"
                        value={ParentsJobDetails}
                        onChange={(e) => setParentsJobDetails(e.target.value)}
                        className="w-full"
                      ></textarea>
                    </div>
                  )}
                  <div className="mb-2">
                    <label
                      htmlFor="parentsOwnLand"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Do your Parent's / Guardian Own Land
                    </label>
                    <label>
                      <select
                        id="parentsOwnLand"
                        value={ParentsOwnLand}
                        onChange={(e) => setParentsOwnLand(e.target.value)}
                        className="w-full"
                      >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </label>
                  </div>

                  {ParentsOwnLand === "Yes" && (
                    <div className="mb-2">
                      <label
                        htmlFor="parentsOwnLand"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Parents / Guardian Land Details
                      </label>
                      <textarea
                        id="parentsOwnLand"
                        value={LandDetails}
                        onChange={(e) => setLandDetails(e.target.value)}
                        className="w-full"
                      ></textarea>
                    </div>
                  )}
                  <div className="mb-2">
                    <label
                      htmlFor="otherAssetsIncome"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Do Parents / Guardian Own Other Assets or Source of
                      Income?
                    </label>
                    <label>
                      <select
                        id="otherAssetsIncome"
                        value={OtherAssetsIncome}
                        onChange={(e) => setOtherAssetsIncome(e.target.value)}
                        className="w-full"
                      >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </label>
                  </div>

                  {OtherAssetsIncome === "Yes" && (
                    <div className="mb-2">
                      <label
                        htmlFor="otherAssetsIncome"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Parents Other Assets/ Sources of Income
                      </label>
                      <textarea
                        id="otherAssetsIncome"
                        value={OtherAssetsIncomeDetails}
                        onChange={(e) =>
                          setOtherAssetsIncomeDetails(e.target.value)
                        }
                        className="w-full"
                      ></textarea>
                    </div>
                  )}

                  <div className="mb-2">
                    <label
                      htmlFor="familyAffectedByConflict"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Is your family affected by conflict?
                    </label>
                    <label>
                      <select
                        id="familyAffectedByConflict"
                        value={FamilyAffectedByConflict}
                        onChange={(e) =>
                          setFamilyAffectedByConflict(e.target.value)
                        }
                        className="w-full"
                      >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </label>
                  </div>

                  {FamilyAffectedByConflict === "Yes" && (
                    <div className="mb-2">
                      <label
                        htmlFor="FamilyConflictDetails"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Family Conflict Details
                      </label>
                      <textarea
                        id="familyConflictDetails"
                        value={FamilyConflictDetails}
                        onChange={(e) =>
                          setFamilyConflictDetails(e.target.value)
                        }
                        className="w-full"
                      ></textarea>
                    </div>
                  )}

                  <div className="mb-2">
                    <label
                      htmlFor="typeOfHouse"
                      className="block text-sm font-medium text-gray-600"
                    >
                      What Type of House Do you live in?
                    </label>
                    <input
                      type="text"
                      id="typeOfHouse"
                      value={TypeOfHouse}
                      onChange={(e) => setTypeOfHouse(e.target.value)}
                    />
                  </div>

                  <div className="mb-2">
                    <label
                      htmlFor="inheritanceDescription"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Inheritance Description
                    </label>
                    <textarea
                      id="inheritanceDescription"
                      value={InheritanceDescription}
                      onChange={(e) =>
                        setInheritanceDescription(e.target.value)
                      }
                      className="w-full"
                    ></textarea>
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="otherDisadvantagesOrVulnerabilities"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Other Disadvantages or Vulnerabilities
                    </label>
                    <textarea
                      id="otherDisadvantagesOrVulnerabilities"
                      value={OtherDisadvantagesOrVulnerabilities}
                      onChange={(e) =>
                        setOtherDisadvantagesOrVulnerabilities(e.target.value)
                      }
                      className="w-full"
                    ></textarea>
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="siblingsInSecondarySchool"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Number of Siblings in Secondary School
                    </label>
                    <input
                      type="number"
                      id="siblingsInSecondarySchool"
                      value={SiblingsInSecondarySchool}
                      onChange={(e) =>
                        setSiblingsInSecondarySchool(e.target.value)
                      }
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="siblingsInUniversity"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Number of Siblings in University
                    </label>
                    <input
                      type="number"
                      id="siblingsInUniversity"
                      value={SiblingsInUniversity}
                      onChange={(e) => setSiblingsInUniversity(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    onClick={handleNeedSubmit}
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          )}
          {currentStep === 5 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Declarations</h2>
              <form
                onSubmit={handleNext}
                className="bg-opacity-50 p-6 rounded-md h-auto"
              >
                <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1">
                  <div className="mb-2">
                    <label
                      htmlFor="applicantDeclaration"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Applicant's Declaration - (FullNames)
                    </label>
                    <textarea
                      id="applicantDeclaration"
                      value={ApplicantDeclaration}
                      onChange={(e) => setApplicantDeclaration(e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="applicantSignature"
                      className="block text-sm font-medium text-gray-600"
                    >
                      PARENT ID NUMBER *
                    </label>
                    <input
                      type="text"
                      id="applicantSignature"
                      value={ApplicantSignature}
                      onChange={(e) => setApplicantSignature(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="declarationDate"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Declaration Date
                    </label>
                    <input
                      type="date"
                      id="declarationDate"
                      value={DeclarationDate}
                      onChange={(e) => setDeclarationDate(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="confirmCheckbox"
                      className="flex items-center"
                    >
                      <input
                        type="checkbox"
                        id="confirmCheckbox"
                        onChange={(e) => setConfirmCheckbox(e.target.checked)}
                        required
                        className="mr-2"
                      />
                      <span className="text-sm font-medium text-gray-600">
                        I confirm that the information provided is correct and
                        is subject to vetting.
                      </span>
                    </label>
                  </div>
                </div>
                {confirmCheckbox && (
                  <button
                    type="submit"
                    onClick={handleDeclarationSubmit}
                    className="mt-4 mr-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                )}
              </form>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            <button
              onClick={handlePrev}
              className={`px-4 py-2 ${currentStep === 1 && "hidden"}`}
            >
              Previous
            </button>
            <button onClick={handleNext} className="px-4 py-2">
              {currentStep === 3 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BSApplicationForm;
