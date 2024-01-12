import React, { useEffect, useState } from "react";
// import "../pages/regdashboard.css";
import axios from "axios";
import { Alert, AlertTitle, MenuItem } from "@mui/material";

const SchoolRegForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // useEffect(() =>{
  //   const user =localStorage.getItem(user);
  //   console.log("this is the user onlocal storage"+ user);
  //   })

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const [savedrecord, setSavedRecord] = useState("");
  const [data, setData] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addrecord, setAddrecord] = useState("");
  const [addBom, setAddBom] = useState("");
  const [Institution_Name, setInstitution_Name] = useState("");
  const [Inst_Level, setInst_Level] = useState("");
  const [Postal_Address, setPostal_Address] = useState("");
  const [Postal_Code, setPostal_Code] = useState("");
  const [Town, setTown] = useState("");
  const [Telephone, setTelephone] = useState("");
  const [Email, setEmail] = useState("");
  const [Region, setRegion] = useState("");
  const [County, setCounty] = useState("");
  const [Sub_County, setSub_County] = useState("");
  const [Ward, setWard] = useState("");
  const [Location, setLocation] = useState("");
  const [Sub_Location, setSub_Location] = useState("");
  const [Payment_Receipt_Number, setPayment_Receipt_Number] = useState("");
  const [Application_Date, setApplication_Date] = useState("");
  const [Institution_Type, setInstitution_Type] = useState("");
  const [Learner_Enrolment, setLearner_Enrolment] = useState(0);
  const [Catered_Classes, setCatered_Classes] = useState("");
  const [Streams_Per_Class, setStreams_Per_Class] = useState(0);
  const [Institution_Gender, setInstitution_Gender] = useState("");
  const [Accommodation_Type, setAccommodation_Type] = useState("");
  const [Institution_SNE, setInstitutionSNE] = useState("");
  const [Sponsor_FName, setSponsor_FName] = useState("");
  const [Sponsor_LName, setSponsor_LName] = useState("");
  const [Sponsor_Telephone, setSponsor_Telephone] = useState("");
  const [Sponsor_Email, setSponsor_Email] = useState("");
  const [Sponsor_Postal_Address, setSponsor_Postal_Address] = useState("");
  const [Sponsor_Postal_Code, setSponsor_Postal_Code] = useState("");
  const [Proprietor_FName, setProprietor_FName] = useState("");
  const [Proprietor_LName, setProprietor_LName] = useState("");
  const [Proprietor_Telephone, setProprietor_Telephone] = useState("");
  const [Proprietor_Email, setProprietor_Email] = useState("");
  const [Proprietor_Postal_Address, setProprietor_Postal_Address] =
    useState("");
  const [Proprietor_Postal_Code, setProprietor_Postal_Code] = useState("");
  const [Land_Title_Deed, setLand_Title_Deed] = useState("");
  const [Land_Lease_Agreement, setLand_Lease_Agreement] = useState("");
  const [Land_Acreage, setLand_Acreage] = useState(0);
  const [
    Business_Registration_Certificate,
    setBusiness_Registration_Certificate,
  ] = useState("");
  const [Incorporation_Certificate, setIncorporation_Certificate] =
    useState("");
  const [Name_Change_Certificate, setName_Change_Certificate] = useState("");

  //staff values
  const [TSC_Number, setTSC_Number] = useState("");
  const [National_ID, setNational_ID] = useState("");
  const [Staff_FName, setStaff_FName] = useState("");
  const [Staff_LName, setStaff_LName] = useState("");
  const [Qualification, setQualification] = useState("");

  //bom members
  const [Member_Title, setMember_Title] = useState("");
  const [Member_FName, setMember_FName] = useState("");
  const [Member_LName, setMember_LName] = useState("");
  const [Member_National_ID, setMember_National_ID] = useState("");
  const [Member_Email, setMember_Email] = useState("");
  const [Member_Telephone, setMember_Telephone] = useState("");
  const [Appointment_Date, setAppointment_Date] = useState("");
  const [Expiration_Date, setExpiration_Date] = useState("");


  const userData = JSON.parse(localStorage.getItem('user'));
  const applicant_ID = userData.applicant_ID;


  useEffect(() => {
    const fetchData = async () => {
        try {
            let urlhom = window.location.origin;
            let url = '/schoolregapi/api/v1/Bom/appl/' + applicant_ID;
            console.log(urlhom + url);
            const response = await axios.get(urlhom + url);
            setData(response.data);
            console.log(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    fetchData();
}, [applicant_ID]);




  useEffect(() => {
    const fetchTeachers = async () => {
        try {
            let urlhom = window.location.origin;
            let tchrurl = '/schoolregapi/api/v1/TeachingStaff/getStaffs/' + applicant_ID;
            console.log(urlhom + tchrurl);
            const response = await axios.get(urlhom + tchrurl);
            setTeachers(response.data);
            console.log(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    fetchTeachers();
}, [applicant_ID]);



  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = JSON.parse(localStorage.getItem("user"));
      const Applicant_ID = userData.applicant_ID;
      const regdata = {
        Applicant_ID,
        Institution_Name,
        Inst_Level,
        Postal_Address,
        Postal_Code,
        Town,
        Telephone,
        Email,
        Region,
        County,
        Sub_County,
        Ward,
        Location,
        Sub_Location,
        Payment_Receipt_Number,
        Application_Date,
        Institution_Type,
        Learner_Enrolment,
        Catered_Classes,
        Streams_Per_Class,
        Institution_Gender,
        Accommodation_Type,
        Institution_SNE,
        Sponsor_FName,
        Sponsor_LName,
        Sponsor_Telephone,
        Sponsor_Email,
        Sponsor_Postal_Address,
        Sponsor_Postal_Code,
        Proprietor_FName,
        Proprietor_LName,
        Proprietor_Telephone,
        Proprietor_Email,
        Proprietor_Postal_Address,
        Proprietor_Postal_Code,
        Land_Title_Deed,
        Land_Lease_Agreement,
        Land_Acreage,
        Business_Registration_Certificate,
        Incorporation_Certificate,
        Name_Change_Certificate,
      };
      let urlhom = window.location.origin;
      let url = "/schoolregapi/api/v1/Registration/register";
      const response = await axios.post(urlhom + url, regdata);
      // const response = await axios.post("/http://localhost/schoolregapi/api/v1/Registration/register", regdata);
      console.log("my data", response);

      if (response.status === 200) {
        //fetch back the registration details that has the registration ID
        //console.log("our data ", response);

        //first get all thedata generated when the used submits
        const registrationurl =
          "/schoolregapi/api/v1/Registration/getinstitutionbasic/" +
          Applicant_ID;
        const registrationresponse = await axios.get(urlhom + registrationurl);

        const updatedregistration = registrationresponse.data;
        console.log(updatedregistration);
        // save to local storage
        localStorage.setItem(
          "registration",
          JSON.stringify(updatedregistration)
        );

        setSavedRecord(true);
        handleNext();
      }
    } catch (error) {
      console.error("An error occurred during the fetch process:", error);
    }
  };

  const handleTeacherDetailsSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = localStorage.getItem("user");
      console.log("this is the user on local storage: " + user);

      const userData = JSON.parse(user);
      const Applicant_ID = userData.applicant_ID;

      const registrationData = JSON.parse(localStorage.getItem("registration"));
      const Registration_ID = registrationData.registration_ID;

      const teacherData = {
        Registration_ID,
        TSC_Number,
        National_ID,
        Staff_FName,
        Staff_LName,
        Qualification,
        Applicant_ID,
      };

      let urlhom = window.location.origin;
      let url = "/schoolregapi/api/v1/TeachingStaff/staffs";
      const response = await axios.post(urlhom + url, teacherData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);

      if (response.status === 200) {
        setAddrecord(true);
        handleNext();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleBOMsSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = localStorage.getItem("user");
      console.log("this is the user on local storage: " + user);

      const userData = JSON.parse(user);
      const Applicant_ID = userData.applicant_ID;

      const registrationData = JSON.parse(localStorage.getItem("registration"));
      const Registration_ID = registrationData.registration_ID;

      // Create a data object with all the form values
      const bomdata = {
        Registration_ID,
        Applicant_ID,
        Member_Title,
        Member_FName,
        Member_LName,
        Member_National_ID,
        Member_Email,
        Member_Telephone,
        Appointment_Date,
        Expiration_Date,
      };

      let urlhom = window.location.origin;
      let url = "/schoolregapi/api/v1/Bom/addbom";
      const response = await axios.post(urlhom + url, bomdata, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      // const response = await axios.post("/http://localhost/schoolregapi/api/v1/Registration/register", regdata);
      console.log(response.regdata);
      if (response.status === 200) {
        setAddBom(true);
        handleNext();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex ">
        {/* Left Sidebar */}
        <div className="w-1/4 flex-row bg-gray-200 p-12 mb-4">
          <h2 className="text-lg font-semibold mb-4">Form Sections</h2>
          <ul>
            <li
              className={`cursor-pointer border-b border-gray-300 my-8 ${
                currentStep === 1 && "font-bold"
              }`}
              onClick={() => setCurrentStep(1)}
            >
              Basic Details
            </li>
            <li
              className={`cursor-pointer border-b border-gray-300 my-8 ${
                currentStep === 2 && "font-bold"
              }`}
              onClick={() => setCurrentStep(2)}
            >
              Staff Details
            </li>
            <li
              className={`cursor-pointer border-b border-gray-300 myb-8 ${
                currentStep === 3 && "font-bold"
              }`}
              onClick={() => setCurrentStep(3)}
            >
              BOM Details
            </li>
            <li
              className={`cursor-pointer border-b border-gray-300 mb-8 ${
                currentStep === 4 && "font-bold"
              }`}
              onClick={() => setCurrentStep(4)}
            >
              Payment Intergration with E-Citizen
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-4 formBground mb-4">
          {/* Section 1 */}
          {currentStep === 1 && (
            <div>
              {/* Applicant Information */}
              <h2 className="text-4xl font-semibold p-4">
                School Registration Form
              </h2>
              {!savedrecord && (
                <form onSubmit={handleNext} className="p-6 rounded-md">
                  {/* //<form onSubmit={handleNext} className="p-6 rounded-md"> */}
                  <h4>Basic Information</h4>
                  <hr />
                  <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1">
                    <div className="my-2">
                      <label htmlFor="Institution_Name">Institution Name</label>
                      <input
                        type="text"
                        id="Institution_Name"
                        value={Institution_Name}
                        onChange={(e) => setInstitution_Name(e.target.value)}
                        required
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Postal_Address">Postal Address</label>
                      <input
                        type="text"
                        id="Postal_Address"
                        value={Postal_Address}
                        onChange={(e) => setPostal_Address(e.target.value)}
                        required
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Postal_Code">Postal Code</label>
                      <input
                        type="text"
                        id="Postal_Code"
                        value={Postal_Code}
                        onChange={(e) => setPostal_Code(e.target.value)}
                        required
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Town">Town</label>
                      <input
                        type="text"
                        id="Town"
                        value={Town}
                        onChange={(e) => setTown(e.target.value)}
                        required
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Telephone">Telephone</label>
                      <input
                        type="tel"
                        id="Telephone"
                        value={Telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                        required
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Email">Email</label>
                      <input
                        type="email"
                        id="Email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Region">Region</label>
                      <input
                        type="text"
                        id="Region"
                        value={Region}
                        onChange={(e) => setRegion(e.target.value)}
                        required
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="County">County</label>
                      <input
                        type="text"
                        id="County"
                        value={County}
                        onChange={(e) => setCounty(e.target.value)}
                        required
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Sub_County">Sub_County</label>
                      <input
                        type="text"
                        id="Sub_County"
                        value={Sub_County}
                        onChange={(e) => setSub_County(e.target.value)}
                        required
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Ward">Ward</label>
                      <input
                        type="text"
                        id="Ward"
                        value={Ward}
                        onChange={(e) => setWard(e.target.value)}
                        required
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Location">Location</label>
                      <input
                        type="text"
                        id="Location"
                        value={Location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Sub_Location">Sub Location</label>
                      <input
                        type="text"
                        id="Sub_Location"
                        value={Sub_Location}
                        onChange={(e) => setSub_Location(e.target.value)}
                        required
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Payment_Receipt_Number">
                        Payment Receipt Number
                      </label>
                      <input
                        type="text"
                        id="Payment_Receipt_Number"
                        value={Payment_Receipt_Number}
                        onChange={(e) =>
                          setPayment_Receipt_Number(e.target.value)
                        }
                        required
                      />
                    </div>

                    <div className="my-2">
                      <label htmlFor="Application_Date">Application Date</label>
                      <input
                        type="date"
                        id="Application_Date"
                        value={Application_Date}
                        onChange={(e) => setApplication_Date(e.target.value)}
                        required
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Catered_Classes">Catered Classes</label>
                      <input
                        type="number"
                        id="Catered_Classes"
                        value={Catered_Classes}
                        onChange={(e) =>
                          setCatered_Classes(parseInt(e.target.value))
                        }
                        required
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Streams_Per_Class">
                        Streams Per Class
                      </label>
                      <input
                        type="number"
                        id="Streams_Per_Class"
                        value={Streams_Per_Class}
                        onChange={(e) =>
                          setStreams_Per_Class(parseInt(e.target.value))
                        }
                        required
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Institution_Gender">
                        Institution Gender
                      </label>
                      <select
                        id="Institution_Gender"
                        value={Institution_Gender}
                        onChange={(e) => setInstitution_Gender(e.target.value)}
                        required
                        className="w-full"
                      >
                        <option value="">Select Gender</option>
                        <option value="boys">Boys</option>
                        <option value="girls">Girls</option>
                        <option value="mixed">Mixed</option>
                      </select>
                    </div>

                    <div className="my-2">
                      <label htmlFor="Accommodation_Type">
                        Accommodation Type
                      </label>
                    <select
                     type="text"
                        id="Accommodation_Type"
                        value={Accommodation_Type}
                        onChange={(e) => setAccommodation_Type(e.target.value)}
                        required>

                        <option value="">Accommodation Type</option>
                        <option value="boys">Permanent</option>
                        <option value="girls">Temporary</option>
                    </select>
                       
                    </div>

                    <div className="my-2">
                      <label htmlFor="Institution_SNE">Institution SNE</label>
                      <select
                        id="Institution_SNE"
                        value={Institution_SNE}
                        onChange={(e) => setInstitutionSNE(e.target.value)}
                        required
                        className="w-full"
                      >
                        <option value="">Select SNE Status</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <div className="my-2 ">
                      <label htmlFor="Inst_Level">Institution Level</label>
                      <select
                        id="Inst_Level"
                        value={Inst_Level}
                        onChange={(e) => setInst_Level(e.target.value)}
                        required
                        className="w-full"
                      >
                        <option value="">Select Institution Level</option>
                        <option value="Stand-alone Pre-primary 1 and 2">
                          Stand-alone Pre-primary 1 and 2
                        </option>
                        <option value="Pre-primary 1 and 2, and Grades 1-3">
                          Pre-primary 1 and 2, and Grades 1-3
                        </option>
                        <option value="Pre-primary 1 and 2 and Grades 1-6">
                          Pre-primary 1 and 2 and Grades 1-6
                        </option>
                        <option value="Primary and Junior Sec. Schools">
                          Primary and Junior Sec. Schools
                        </option>
                        <option value="Junior Secondary School only">
                          Junior Secondary School only
                        </option>
                        <option value="Senior Secondary school only">
                          Senior Secondary school only
                        </option>
                        <option value="Whole School, Pre-primary to Sr.Sec School">
                          Whole School, Pre-primary to Sr.Sec School
                        </option>
                        <option value="Diploma in Primary Teacher Education (DPTE)">
                          Diploma in Primary Teacher Education (DPTE)
                        </option>
                        <option value="Diploma in Secondary Teacher Education (DSTE)">
                          Diploma in Secondary Teacher Education (DSTE)
                        </option>
                        <option value="Diploma in Special Needs Teacher Education (DSNETE)">
                          Diploma in Special Needs Teacher Education (DSNETE)
                        </option>
                        <option value="Alternative provision of Basic Education and Training (APBET)">
                          Alternative provision of Basic Education and Training
                          (APBET)
                        </option>
                        <option value="Adult and continuing Education Centers (DACTE)">
                          Adult and continuing Education Centers (DACTE)
                        </option>
                        <option value="SNE Institutions (including stage-based levels">
                          SNE Institutions (including stage-based levels
                        </option>
                        <option value="Institutions offering foreign/International Curriculum">
                          Institutions offering foreign/International Curriculum
                        </option>
                      </select>
                    </div>

                    <div className="my-2 ">
                      <label htmlFor="Institution_Type ">
                        Institution Type
                      </label>
                      <select
                        id="Institution_Type"
                        value={Institution_Type}
                        onChange={(e) => setInstitution_Type(e.target.value)}
                        required
                        className="w-full"
                      >
                        <option value="">Institution Type</option>
                        <option value="PUBLIC">Public</option>
                        <option value="PRIVATE">Private</option>
                      </select>
                    </div>
                    <div className="my-2">
                      <label htmlFor="Learner_Enrolment">
                        Learner Enrolment
                      </label>
                      <input
                        type="text"
                        id="Learner_Enrolment"
                        value={Learner_Enrolment}
                        onChange={(e) => setLearner_Enrolment(e.target.value)}
                        required
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Sponsor_FName">
                        Sponsor's First Name
                      </label>
                      <input
                        type="text"
                        id="Sponsor_FName"
                        value={Sponsor_FName}
                        onChange={(e) => setSponsor_FName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Sponsor_LName">Sponsor's Last Name</label>
                      <input
                        type="text"
                        id="Sponsor_LName"
                        value={Sponsor_LName}
                        onChange={(e) => setSponsor_LName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Sponsor_Telephone">
                        Sponsor's Telephone
                      </label>
                      <input
                        type="tel"
                        id="Sponsor_Telephone"
                        value={Sponsor_Telephone}
                        onChange={(e) => setSponsor_Telephone(e.target.value)}
                        required
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Sponsor_Email">Sponsor's Email</label>
                      <input
                        type="Email"
                        id="Sponsor_Email"
                        value={Sponsor_Email}
                        onChange={(e) => setSponsor_Email(e.target.value)}
                        required
                      />
                    </div>

                    <div className="my-2">
                      <label htmlFor="Sponsor_Postal_Address">
                        Sponsor's Postal Address
                      </label>
                      <input
                        type="text"
                        id="Sponsor_Postal_Address"
                        value={Sponsor_Postal_Address}
                        onChange={(e) =>
                          setSponsor_Postal_Address(e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="my-2 ">
                      <label htmlFor="Sponsor_Postal_Code">
                        Sponsor's Postal Code
                      </label>
                      <input
                        type="text"
                        id="Sponsor_Postal_Code"
                        value={Sponsor_Postal_Code}
                        onChange={(e) => setSponsor_Postal_Code(e.target.value)}
                        required
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Proprietor_FName">
                        Proprietor's First Name
                      </label>
                      <input
                        type="text"
                        id="Proprietor_FName"
                        value={Proprietor_FName}
                        onChange={(e) => setProprietor_FName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Proprietor_LName">
                        Proprietor's Last Name
                      </label>
                      <input
                        type="text"
                        id="Proprietor_LName"
                        value={Proprietor_LName}
                        onChange={(e) => setProprietor_LName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Proprietor_Telephone">
                        Proprietor's Telephone
                      </label>
                      <input
                        type="tel"
                        id="Proprietor_Telephone"
                        value={Proprietor_Telephone}
                        onChange={(e) =>
                          setProprietor_Telephone(e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Proprietor_Email">
                        Proprietor's Email
                      </label>
                      <input
                        type="email"
                        id="Proprietor_Email"
                        value={Proprietor_Email}
                        onChange={(e) => setProprietor_Email(e.target.value)}
                        required
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Proprietor_Postal_Address">
                        Proprietor's Postal Address
                      </label>
                      <input
                        type="text"
                        id="Proprietor_Postal_Address"
                        value={Proprietor_Postal_Address}
                        onChange={(e) =>
                          setProprietor_Postal_Address(e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Proprietor_Postal_Code">
                        Proprietor's Postal Code
                      </label>
                      <input
                        type="text"
                        id="Proprietor_Postal_Code"
                        value={Proprietor_Postal_Code}
                        onChange={(e) =>
                          setProprietor_Postal_Code(e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Land_Acreage">Land Acreage</label>
                      <input
                        type="number"
                        id="Land_Acreage"
                        value={Land_Acreage}
                        onChange={(e) =>
                          setLand_Acreage(parseFloat(e.target.value))
                        }
                        // required
                        className="w-full"
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Land_Title_Deed">
                        Land Title Deed (File)
                      </label>
                      <input
                        type="file"
                        id="Land_Title_Deed"
                        accept=".pdf, .doc, .docx"
                        onChange={(e) => setLand_Title_Deed(e.target.files[0])}
                        // required
                        className="w-full"
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Land_Lease_Agreement">
                        Land Lease Agreement
                      </label>
                      <input
                        type="file"
                        id="Land_Lease_Agreement"
                        accept=".pdf, .doc, .docx"
                        onChange={(e) =>
                          setLand_Lease_Agreement(e.target.files[0])
                        }
                        // required
                        className="w-full"
                      />
                    </div>

                    <div className="my-2">
                      <label htmlFor="Business_Registration_Certificate">
                        Business Registration Certificate
                      </label>
                      <input
                        type="file"
                        id="Business_Registration_Certificate"
                        accept=".pdf, .doc, .docx"
                        onChange={(e) =>
                          setBusiness_Registration_Certificate(
                            e.target.files[0]
                          )
                        }
                        //required
                        className="w-full"
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Incorporation_Certificate">
                        Incorporation Certificate
                      </label>
                      <input
                        type="file"
                        id="Incorporation_Certificate"
                        accept=".pdf, .doc, .docx"
                        onChange={(e) =>
                          setIncorporation_Certificate(e.target.files[0])
                        }
                        className="w-full"
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Name_Change_Certificate">
                        Name Change Certificate
                      </label>
                      <input
                        type="file"
                        id="Name_Change_Certificate"
                        accept=".pdf, .doc, .docx"
                        onChange={(e) =>
                          setName_Change_Certificate(e.target.files[0])
                        }
                        className="w-full"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    onClick={handleRegistrationSubmit}
                    className="mt-4 mr-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  >
                    {" "}
                    Save
                  </button>
                </form>
              )}
              {savedrecord && (
                <Alert severity="success">
                  <AlertTitle>School Registration Module</AlertTitle>
                  Congratulations School Owner Your Basic Details have been
                  Saved Successfully{" "}
                  <strong>Check On Viem My Registration</strong>
                </Alert>
              )}
            </div>
          )}

          {/* Section 2 */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Section 2</h2>
              {/* ... Your Section 2 Form Content ... */}

              <h4>Staff Details</h4>
              <hr />
              {/* <div className="grid md:grid-cols-4 gap-4 sm:grid-cols-1"> */}
              {!addrecord && (
                <form onSubmit={handleNext} className="p-6 rounded-md">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="my-2">
                      <label htmlFor="TSC_Number">TSC Number</label>
                      <input
                        type="text"
                        id="TSC_Number"
                        value={TSC_Number}
                        onChange={(e) => setTSC_Number(e.target.value)}
                        required
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="National_ID">National ID</label>
                      <input
                        type="number"
                        id="National_ID"
                        value={National_ID}
                        onChange={(e) => setNational_ID(e.target.value)}
                        required
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Staff_FName">First Name</label>
                      <input
                        type="text"
                        id="Staff_FName"
                        value={Staff_FName}
                        onChange={(e) => setStaff_FName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Staff_LName"> Last Name</label>
                      <input
                        type="text"
                        id="Staff_LName"
                        value={Staff_LName}
                        onChange={(e) => setStaff_LName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="Qualification">
                        Academic Qualification
                      </label>
                      <select
                        id="Qualification"
                        value={Qualification}
                        onChange={(e) => setQualification(e.target.value)}
                        required
                        className="w-full"
                      >
                        <option value="">Select Qualification</option>
                        <option value="PHD">PHD</option>
                        <option value="Masters">Masters</option>
                        <option value="Degree">Degree</option>
                        <option value="Higher Diploma">Higher Diploma</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Certifiicate">Certifiicate</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      onClick={handleTeacherDetailsSubmit}
                      className="mt-4 mr-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                      Add
                    </button>
                  </div>
                </form>
              )}
              {addrecord && (
                <Alert severity="success">
                  <AlertTitle>Institution Staff Members</AlertTitle>
                  Staff Details Saved Successfully{" "}
                  <strong>View table below</strong>
                </Alert>
              )}


              <div>

{/* <table className="min-w-full bg-gray border border-gray-300 mt-4"> */}
<table className="table-auto border-collapse border border-gray-800 w-full">
  <thead>
      <tr>
          <th className="p-2 border border-gray-800">SNo.</th>
          {/*<th className="p-2 border border-gray-800">Member ID</th> */}
          {/*<th className="p-2 border border-gray-800">Registration ID</th> */}
          {/*<th className="p-2 border border-gray-800">Applicant ID</th> */}
         <th className="p-2 border border-gray-800">TSC Number</th>
         <th className="p-2 border border-gray-800">National ID</th>
         <th className="p-2 border border-gray-800">First Name</th>
         <th className="p-2 border border-gray-800">Last Name</th>
         <th className="p-2 border border-gray-800">Qualification</th>
          {/*<th className="p-2 border border-gray-800">Appointment Date</th> */}
          {/*<th className="p-2 border border-gray-800">Expiration Date</th> */}
      </tr>
  </thead>
  <tbody>
      {teachers && teachers.map((user, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="p-2 border border-gray-800">{index + 1}</td>
              {/* <td className="p-2 border border-gray-800">{user.member_ID}</td> */}
              <td className="p-2 border border-gray-800">{user.tsC_Number}</td>
              <td className="p-2 border border-gray-800">{user.national_ID}</td>
              <td className="p-2 border border-gray-800">{user.staff_FName}</td>
              <td className="p-2 border border-gray-800">{user.staff_LName}</td>
              <td className="p-2 border border-gray-800">{user.qualification}</td>
              {/* <td className="p-2 border border-gray-800">{user.appointment_Date}</td> */}
              {/* <td className="p-2 border border-gray-800">{user.expiration_Date}</td> */}
             
          </tr>
      ))}
  </tbody>
</table>

</div>

            </div>
          )}

          {/* Section 3 */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Section 3</h2>
              {/* ... Your Section 3 Form Content ... */}
              <h4> BOM Members</h4>
              <hr />
              {!addBom && (
                <form onSubmit={handleNext} className="p-6 rounded-md">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="my-2">
                      <label htmlFor="Qualification">Member Title</label>
                      <select
                        id="Member_Title"
                        value={Member_Title}
                        onChange={(e) => setMember_Title(e.target.value)}
                        required
                        className="w-full"
                      >
                        <option value="">Select Member Title</option>
                        <option value="Chairperson">Chairperson</option>
                        <option value="Secretary">Secretary</option>
                        <option value="Member">Member</option>
                      </select>
                    </div>

                    <div className="my-2">
                      <label htmlFor="Member_FName">Member First Name</label>
                      <input
                        type="text"
                        id="Member_FName"
                        value={Member_FName}
                        onChange={(e) => setMember_FName(e.target.value)}
                        required
                        //className="w-full"
                      />
                    </div>

                    <div className="my-2">
                      <label htmlFor="Member_LName">Member Last Name</label>
                      <input
                        type="text"
                        id="Member_LName"
                        value={Member_LName}
                        onChange={(e) => setMember_LName(e.target.value)}
                        required
                        //className="w-full"
                      />
                    </div>

                    <div className="my-2">
                      <label htmlFor="Member_National_ID">National ID</label>
                      <input
                        type="number"
                        id="Member_National_ID"
                        value={Member_National_ID}
                        onChange={(e) => setMember_National_ID(e.target.value)}
                        required
                        //className="w-full"
                      />
                    </div>

                    <div className="my-2">
                      <label htmlFor="Member_Email">Email</label>
                      <input
                        type="email"
                        id="Member_Email"
                        value={Member_Email}
                        onChange={(e) => setMember_Email(e.target.value)}
                        required
                        //className="w-full"
                      />
                    </div>

                    <div className="my-2">
                      <label htmlFor="Member_Telephone">Telephone</label>
                      <input
                        type="tel"
                        id="Member_Telephone"
                        value={Member_Telephone}
                        onChange={(e) => setMember_Telephone(e.target.value)}
                        required
                        //className="w-full"
                      />
                    </div>

                    <div className="my-2">
                      <label htmlFor="Appointment_Date">Appointment Date</label>
                      <input
                        type="date"
                        id="Appointment_Date"
                        value={Appointment_Date}
                        onChange={(e) => setAppointment_Date(e.target.value)}
                        required
                        //className="w-full"
                      />
                    </div>

                    <div className="my-2">
                      <label htmlFor="Expiration_Date">Expiration Date</label>
                      <input
                        type="date"
                        id="Expiration_Date"
                        value={Expiration_Date}
                        onChange={(e) => setExpiration_Date(e.target.value)}
                        required
                        //className="w-full"
                      />
                      <button
                        type="submit"
                        onClick={handleBOMsSubmit}
                        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      >
                        {" "}
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              )}
              {addBom && (
                <Alert severity="success">
                  <AlertTitle>Institution Bom Members</AlertTitle>
                  Bom Member Details Saved Successfully{" "}
                  <strong>View table below</strong>
                </Alert>
              )}

              <div>

              {/* <table className="min-w-full bg-gray border border-gray-300 mt-4"> */}
              <table className="table-auto border-collapse border border-gray-800 w-full">
                <thead>
                    <tr>
                        {/*<th className="p-2 border border-gray-800">SNo</th> */}
                        {/*<th className="p-2 border border-gray-800">Member ID</th> */}
                        {/*<th className="p-2 border border-gray-800">Registration ID</th> */}
                        {/*<th className="p-2 border border-gray-800">Applicant ID</th> */}
                       <th className="p-2 border border-gray-800">Member Title</th>
                       <th className="p-2 border border-gray-800">First Name</th>
                       <th className="p-2 border border-gray-800">Last Name</th>
                       <th className="p-2 border border-gray-800">National ID</th>
                       <th className="p-2 border border-gray-800">Email</th>
                       <th className="p-2 border border-gray-800">Telephone</th>
                        {/*<th className="p-2 border border-gray-800">Appointment Date</th> */}
                        {/*<th className="p-2 border border-gray-800">Expiration Date</th> */}
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((user, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                            {/* <td className="p-2 border border-gray-800">{index + 1}</td> */}
                            {/* <td className="p-2 border border-gray-800">{user.member_ID}</td> */}
                            <td className="p-2 border border-gray-800">{user.member_Title}</td>
                            <td className="p-2 border border-gray-800">{user.member_FName}</td>
                            <td className="p-2 border border-gray-800">{user.member_LName}</td>
                            <td className="p-2 border border-gray-800">{user.member_National_ID}</td>
                            <td className="p-2 border border-gray-800">{user.member_Email}</td>
                            <td className="p-2 border border-gray-800">{user.member_Telephone}</td>
                            {/* <td className="p-2 border border-gray-800">{user.appointment_Date}</td> */}
                            {/* <td className="p-2 border border-gray-800">{user.expiration_Date}</td> */}
                           
                        </tr>
                    ))}
                </tbody>
            </table>

              </div>
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

export default SchoolRegForm;
