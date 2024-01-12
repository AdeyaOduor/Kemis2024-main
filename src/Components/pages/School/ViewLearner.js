import React, { useEffect, useState } from "react";
import "./Form.css";
import { Alert, AlertTitle, Button, Grid, MenuItem } from "@mui/material";
import { Input, InputLabel, Select } from "@material-ui/core";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { CountryDropdown } from "react-country-region-selector";
import { getCurrentUser } from "../../../REST-API/auth/AuthProvider";

const ViewLearner = () => {

  const location = useLocation();
  const { learnerData } = location.state;

  const [learnerState, setLearnerState] = useState(learnerData)
  const [updatedrecord, setUpdatedRecord] = useState("");
  const [upi, setUpi] = useState(learnerState.upi);
  const [studentType, setStudentType] = useState(learnerState.student_type);
  const [assesmentNo, setAssesmentNo] = useState(learnerState.assesment_no);
  const [status, setStatus] = useState(false);
  const [birthCertificateNumber, setBirthCertificateNumber] = useState(learnerState.student_identification);
  const [unhcrNumber, setUnhcrNumber] = useState(learnerState.student_identification);
  const [unhcrRegDate, setUnhcrRegDate] = useState(learnerState.unhcr_reg_date);
  const [immigrationStatus, setImmigrationStatus] = useState(learnerState.immigration_status);
  const [studentPassNumber, setStudentPassNumber] = useState(learnerState.student_identification);
  const [nationality, setNationality] = useState(learnerState.nationality);
  const [firstName, setFirstName] = useState(learnerState.first_name);
  const [surName, setSurName] = useState(learnerState.sur_name);
  const [otherName, setOtherName] = useState(learnerState.other_name);
  const [dob, setDob] = useState(learnerState.dob);
  const [sex, setSex] = useState(learnerState.sex);
  const [fileuploaded, setFileUploaded] = useState(learnerState.image);
  const [previewImage, setPreviewImage] = useState(learnerState.image);
  const [medicalCondition, setMedicalCondition] = useState(learnerState.medical_condition);
  const [specialNeed, setSpecialNeed] = useState(learnerState.special_need);
  const [postalAddress, setPostalAddress] = useState(learnerState.postal_address);
  const [learnerEmail, setLearnerEmail] = useState(learnerState.learner_email);
  const [learnerMobile, setLearnerMobile] = useState(learnerState.learner_mobile);
  const [motherIdentification, setMotherIdentification] = useState(learnerState.mother_identification);
  const [motherName, setMotherName] = useState(learnerState.mother_name);
  const [motherEmail, setMotherEmail] = useState(learnerState.mother_email);
  const [motherPhone, setMotherPhone] = useState(learnerState.mother_phone);
  const [fatherIdentification, setFatherIdentification] = useState(learnerState.father_identification);
  const [fatherName, setFatherName] = useState(learnerState.father_name);
  const [fatherEmail, setFatherEmail] = useState(learnerState.father_email);
  const [fatherMobile, setFatherMobile] = useState(learnerState.father_mobile);
  const [gurdianIdentification, setGurdianIdentification] = useState(learnerState.gurdian_identification);
  const [gurdianName, setGurdianName] = useState(learnerState.gurdian_name);
  const [gurdianEmail, setGurdianEmail] = useState(learnerState.gurdian_email);
  const [gurdianMobile, setGurdianMobile] = useState(learnerState.gurdian_mobile);
  const [special_condition_code, setSpecialCondition] = useState(learnerState.special_condition);
  const [special_condition_name, setSpecialConditionName] = useState("");
  const [conditionList, setConditionList] = useState([]);
  const [level_code, setLevelCode] = useState("");

  const [school_uic, setSchool_uic] = useState(learnerState.school_uic);
  const [classList, setClassList] = useState([]);
  const [class_code, setClass] = useState("0");
  const [class_Name, setClass_Name] = useState("");

  // const [scopeid, setScope] = useState('0');
  const [county_code, setCounty] = useState(learnerState.county);
  const [county_name, setCountyName] = useState('');
  const [sub_county_code, setSubCounty] = useState(learnerState.sub_county);
  const [sub_county_Name, setSubCountyName] = useState('');
  const [countylist, setCountylist] = useState([]);
  const [scountylist, setScountylist] = useState([]);
  const [inputClass_Name, setInputClass_Name] = useState('');


  useEffect(() => {
    retrieveClass();
    if (class_Name) {
      setInputClass_Name(class_Name);
    }
    console.log('inputClass_Name' + inputClass_Name);
    getSpecialNeeds();
    getCounties();
    getSubCounties();
    getLearnerLevel();

    const user = getCurrentUser();
    const uic = user.username;
    setSchool_uic(uic);
    const levelCode = user.levelCode;
    setLevelCode(levelCode);
    console.log("this is the passed learner details." + learnerState.dob + learnerState.upi + learnerState.first_name);

    // Update the status whenever the dependent fields change
    updateStatus();
  }, [birthCertificateNumber, unhcrNumber, studentPassNumber, class_Name]);


  useEffect(() => {
    if (class_Name) {
      setInputClass_Name(class_Name);
    }
  }, [class_Name]);


const homeurl = window.location.origin;

  const updateStatus = () => {
    // Check the conditions and update the status accordingly
    if (birthCertificateNumber) {
      setStatus(true);
    } else if (unhcrNumber) {
      setStatus(true);
    } else if (studentPassNumber) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };


  const retrieveClass = () => {
    const queryParams = new URLSearchParams(location.search);
    const classCode = queryParams.get('classCode');
    setClass(classCode);
    console.log('classCode is' + class_code);
    const className = queryParams.get('className');
    setClass_Name(className);
    console.log('classCode is' + class_Name);

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();


    formData.append('studentType', studentType);
    formData.append('assesmentNo', assesmentNo);
    formData.append('birthCertificateNumber', birthCertificateNumber);
    formData.append('unhcrNumber', unhcrNumber);
    formData.append('unhcrRegDate', unhcrRegDate);
    formData.append('immigrationStatus', immigrationStatus);
    formData.append('studentPassNumber', studentPassNumber);
    formData.append('nationality', nationality);
    formData.append('firstName', firstName);
    formData.append('surName', surName);
    formData.append('otherName', otherName);
    formData.append('sex', sex);
    formData.append('status', status);
    formData.append('dob', dob);
    formData.append('fileuploaded', fileuploaded);
    formData.append('specialNeed', specialNeed);
    formData.append('medicalCondition', medicalCondition);
    formData.append('postalAddress', postalAddress);
    formData.append('learnerEmail', learnerEmail);
    formData.append('learnerMobile', learnerMobile);
    formData.append('motherIdentification', motherIdentification);
    formData.append('motherName', motherName);
    formData.append('motherEmail', motherEmail);
    formData.append('motherPhone', motherPhone);
    formData.append('fatherIdentification', fatherIdentification);
    formData.append('fatherName', fatherName);
    formData.append('fatherEmail', fatherEmail);
    formData.append('fatherMobile', fatherMobile);
    formData.append('gurdianIdentification', gurdianIdentification);
    formData.append('gurdianName', gurdianName);
    formData.append('gurdianEmail', gurdianEmail);
    formData.append('gurdianMobile', gurdianMobile);
    formData.append('special_condition_code', special_condition_code);
    formData.append('special_condition_name', special_condition_name);
    formData.append('school_uic', school_uic);
    formData.append('class_Name', class_Name);

    // formData.append('scopeid', scopeid);
    formData.append('county_code', county_code);
    formData.append('county_name', county_name);
    formData.append('sub_county_code', sub_county_code);
    formData.append('sub_county_name', sub_county_Name);
    formData.append('countylist', countylist);
    formData.append('scountylist', scountylist);

    let urlhom = window.location.origin;
    let updateLearnerurl = homeurl+ `/student/api/v1/learners/updateLearner/${upi}`
    //  urlhom + `/student/api/v1/learners/updateLearner/${upi}`;


    const mydata = {

      upi: upi,
      assesment_no: assesmentNo,
      first_name: firstName,
      sur_name: surName,
      other_name: otherName,
      dob: dob,
      sex: sex,
      status: status,                     //define on availability of identification document
      nationality: nationality,
      learner_level: class_code,          //from nemis after identifying the school level
      medical_condition: medicalCondition,
      special_need: specialNeed,
      postal_address: postalAddress,
      learner_email: learnerEmail,
      learner_mobile: learnerMobile,
      mother_identification: motherIdentification,
      mother_name: motherName,

      mother_email: motherEmail,
      mother_phone: motherPhone,
      father_identification: fatherIdentification,
      father_name: fatherName,
      father_email: fatherEmail,
      father_mobile: fatherMobile,
      gurdian_identification: gurdianIdentification,
      gurdian_name: gurdianName,
      gurdian_email: gurdianEmail,
      gurdian_mobile: gurdianMobile,
      image: fileuploaded,
      student_type: studentType,
      school_uic: school_uic,            //login payload

      special_conditions: special_condition_code,       //nemis db
      birthcertificate_number: birthCertificateNumber,
      home_county: county_code,
      home_subcounty: sub_county_code,
      student_pass_number: studentPassNumber,
      immigration_status: immigrationStatus,
      residence_county: county_code,
      residence_subcounty: sub_county_code,
      unhcr_number: unhcrNumber,
      unhcr_reg_date: unhcrRegDate,

    };

    localStorage.setItem('mydata', JSON.stringify(mydata));
    console.log("Our TransformData", mydata);
    JSON.stringify()

    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Methods": "GET, POST",
      "Access-Control-Allow-Headers": "X-Token",
      "Access-Control-Allow-Credentials": "true",
    };
    axios
      .post(updateLearnerurl, mydata, {
        headers: headers,
      })
      .then((response) => {
        // Clear the form and show successful submittion of grievance
        setUpdatedRecord(true);
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };


  const getSpecialNeeds = () => {
    // let urlhom = window.location.origin;
    let specialC = "/student/api/v1/learners/getSpecialConditions";
    let url = homeurl + specialC;
    const headers = {
      'Authorization': `Basic ${base64Credentials}`,
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Methods': 'GET, POST',
      'Access-Control-Allow-Headers': 'X-Token',
      'Access-Control-Allow-Credentials': "true",
    }
    axios
      .get(url, { headers })
      .then((response) => {
        setConditionList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })

  }









  const Homebaseurl = `http://nemis.education.go.ke`;
  //const Homebaseurl = http://localhost;
  const crdpassword = "9876$Teta";
  const crdusername = "nemisadmin";
  const credentials = `${crdusername}:${crdpassword}`;
  const base64Credentials = btoa(credentials);
  const headers = {
    'Authorization': `Basic ${base64Credentials}`,
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Methods': 'GET, POST',
    'Access-Control-Allow-Headers': 'X-Token',
    "Access-Control-Allow-Origin": "*",
    'Access-Control-Allow-Credentials': true
  };




  const handleSubCountyChange = (e) => {
    setSubCounty(e.target.value);
    var msSubcounty = e.target.value;
    const option = scountylist
      .find(option => option.sub_County_Code === msSubcounty);
    var text = option.sub_County_Name;
    setSubCountyName(text);
    console.log(text, msSubcounty);
    // if (scopeid == "5") {
    // getLevels();
    //getSchools(mscounty, level_code);}
  };

  const handleCountyChange = (e) => {
    setCounty(e.target.value);
    var mcounty = e.target.value;
    const option = countylist
      .find(option => option.county_Code === mcounty);
    var text = option.county_Name;
    setCountyName(text);
    console.log(text, mcounty);
    getSubCounties(mcounty);

  };

  const getCounties = () => {
    const url = '/generic2/api/Cascade/Counties';
    const baseurl = Homebaseurl + url;
    axios
      .get(baseurl, { headers })
      .then((response) => {
        setCountylist(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

  }

  const getSubCounties = (county_code) => {
    const url = `/generic2/api/Cascade/SubCounties/${county_code}`;
    const baseurl = Homebaseurl + url;
    axios
      .get(baseurl, { headers })
      .then((response) => {
        setScountylist(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  const getLearnerLevel = () => {
    const user = getCurrentUser();
    const levelCode = user.levelCode;
    const url = `/generic2/api/Cascade/LevelGrades/` + levelCode;
    const baseurl = Homebaseurl + url;
    axios
      .get(baseurl, { headers })
      .then((response) => {
        setClassList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }


  const handleLearnerLevelChange = (e) => {

    setClass(e.target.value);
    var mclass = e.target.value;
    const option = classList
      .find(option => option.class_Code === mclass);
    var text = option.class_Name;
    setClass_Name(text);
    console.log(text, mclass);

  };



  const handleNationalityChange = (value) => {
    setNationality(value);
  }

  const handleSexChange = (event) => {
    setSex(event.target.value);
  };
  const handleDobChange = (event) => {
    setDob(event.target.value);
  };

  const handleSpecialNeedChange = (e) => {
    setSpecialCondition(e.target.value);
    var mcondition = e.target.value;
    const option = conditionList
      .find(option => option.condition_id === mcondition);
    var text = option.condition_type;
    setSpecialConditionName(text);
    console.log(text, mcondition);
    // getSubCounties(mcounty);
  };


  const [formData, setFormData] = useState({
    upi: "KEM0000001",
    assessmentNo: "KEM0000001",
    firstName: "",
    surName: "",
    otherName: "",
    dob: "",
    sex: "",
    nationality: "",
    learnerLevel: "",
    medicalCondition: "",
    specialNeed: "",
    postalAddress: "",
    learnerEmail: "",
    learnerMobile: "",
    motherIdentification: "",
    motherName: "",
    motherEmail: "",
    motherPhone: "",
    fatherIdentification: "",
    fatherName: "",
    fatherEmail: "",
    fatherMobile: "",
    gurdianIdentification: "",
    gurdianName: "",
    gurdianEmail: "",
    gurdianMobile: "",
    image: null,
    studentType: "",
    specialConditions: "",
  });


  const handleSelectChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  // Function to handle image changes
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setFormData({ ...formData, image: base64Image });
        setFileUploaded(base64Image);
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);

    } else {
      setPreviewImage(null);
    }
  };

  // Function to handle multi-select changes
  ;


  const handleRadioChange = (e, field) => {
    if (field === 'studentType') {
      setStudentType(e.target.value);
    }
  };

  const handleNeedChange = (event) => {
    setSpecialNeed(event.target.value);
  };




  const handleBirthcertificateNumberChange = (e, field) => {
    if (field === 'birthCertificateNumber') {
      setBirthCertificateNumber(e.target.value);
    } else if (field === 'unhcrNumber') {
      setUnhcrNumber(e.target.value);
    } else if (field === 'unhcrRegDate') {
      setUnhcrRegDate(e.target.value);
    }
  };

  return (
    <>
      <>
        <div className="bgPrimary">
          <div className="mx-auto max-w-7xl py-8 sm:px-6 lg:px-8 mt-10">
            <h2 className="mt-5"></h2>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
          {/* Main Content */}
          <div className="formBground w-full sm:w-5/6 p-4 mt-0 pt-0 mx-auto">
            {/* Section Content */}
            <>
              <div className="my-1 grid grid-cols-1 mt-0 pt-0 sm:grid-cols-3">
                <h4 className="text-3xl font-semibold mb-4 p-0 col-span-full">
                  Learners Registration Form
                  <hr />
                </h4>
              </div>




              {!updatedrecord && (
                <form onSubmit={handleSubmit}>

                  {/* UPI No */}
                  <div className="my-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="my-2 sm:col-span-1">
                      <label htmlFor="upi">UPI No.:</label>
                      <input
                        type="text"
                        id="upi"
                        value={upi}
                        onChange={(e) => setUpi(e.target.value)}
                      readOnly
                      />
                    </div>

                    <div className="my-2 sm:col-span-1">
                      <label htmlFor="assesmentNo">Assessment No.:</label>
                      <input
                        type="text"
                        id="assesmentNo"
                        onChange={(e) => setAssesmentNo(e.target.value)}
                        // value={assesmentNo}
                        value={assesmentNo}
                      readOnly
                      />
                    </div>


                    <div className="my-2 sm:col-span-1">
                      <InputLabel id="type-label">Learner Level</InputLabel>
                      {/* <InputLabel id="type-label">Learner Level</InputLabel>
                      <Select
                        labelId="type-label"
                        id=""
                        value={class_code}
                        onChange={(e) => handleLearnerLevelChange(e)}

                      >
                        <MenuItem value="" disabled style={{ color: '#000', backgroundColor: 'green' }} >
                          Select Learner Level
                        </MenuItem>
                        {classList?.map((option) => (
                          <MenuItem
                            key={option.class_Name} value={option.class_Code}>
                            {option.class_Name}
                          </MenuItem>
                        ))}
                      </Select> */}

                      <input
                        type="text"
                        value={inputClass_Name}
                        readOnly
                        style={{ backgroundColor: '#CCC' }}
                      />
                    </div>






                  </div>
                  {/* Student Type Radio Buttons */}
                  {/* Student Type Radio Buttons */}
                  <div className="my-2 sm:col-span-1 flex flex-col">
                    <label className="mb-2">Student Type:</label>
                    <div className="flex">
                      {['kenyan', 'refugee', 'foreign'].map(type => (
                        <div key={type} className="flex items-center mr-4">
                          <input
                            type="radio"
                            id={type}
                            name="studentType"
                            value={type}
                            checked={studentType === type}
                            onChange={(e) => handleRadioChange(e, 'studentType')}
                          />
                          <label htmlFor={type} className="ml-2">{type.charAt(0).toUpperCase() + type.slice(1)}</label>
                        </div>
                      ))}
                    </div>
                  </div>


                  {/* Additional Fields based on Student Type */}
                  {studentType === 'kenyan' && (
                    <>
                      {/* Fields specific to Kenyan */}
                      <div className="my-2 sm:col-span-1">
                        <label htmlFor="birthCertificateNumber">Birth Certificate Number:</label>
                        <input
                          type="text"
                          id="birthCertificateNumber"
                          value={birthCertificateNumber}
                          onChange={(e) => setBirthCertificateNumber(e.target.value)}
                        />
                      </div>



                      <div className="my-2 sm:col-span-1">
                        <InputLabel id="type-label">Home SubCounty</InputLabel>
                        {/* <label htmlFor="residenceCounty">Residence County:</label> */}
                        <Select
                          labelId="type-label"
                          id="county_code"
                          value={county_code}
                          onChange={(e) => handleCountyChange(e)}

                          style={{ marginTop: '0.5rem', padding: '0.5rem', width: '100%', border: '1px solid #ccc', borderRadius: '0.25rem' }}
                        >
                          <MenuItem value="" disabled>
                            Select County
                          </MenuItem>
                          {countylist?.map((option) => (
                            <MenuItem key={option.county_Name} value={option.county_Code}>
                              {option.county_Name}
                            </MenuItem>
                          ))}
                        </Select>
                      </div>



                      <div className="my-2 sm:col-span-1">
                        {/* <label htmlFor="residenceCounty">Residence County:</label> */}
                        <InputLabel id="type-label">Home SubCounty</InputLabel>
                        <Select
                          labelId="subcounty-label"
                          id="sub_county_code"
                          value={sub_county_code}
                          onChange={(e) => handleSubCountyChange(e)}

                          style={{ marginTop: '0.5rem', padding: '0.5rem', width: '100%', border: '1px solid #ccc', borderRadius: '0.25rem' }}
                        >
                          <MenuItem value="" disabled>
                            Select Sub-County
                          </MenuItem>
                          {scountylist?.map((option) => (
                            <MenuItem key={option.sub_County_Name} value={option.sub_County_Code}>
                              {option.sub_County_Name}
                            </MenuItem>
                          ))}
                        </Select>
                      </div>

                      {/* Add other Kenyan-specific fields here */}
                    </>
                  )}

                  {studentType === 'refugee' && (



                    <>





                      <div className="my-2 sm:col-span-1">

                        <label htmlFor="nationality">Country of Origin:</label>
                        <CountryDropdown
                          countryValueType="short"
                          value={nationality}
                          onChange={(value) => handleNationalityChange(value)}
                        />

                      </div>





                      .                  {/* Fields specific to Refugee */}
                      <div className="my-2 sm:col-span-1">
                        <label htmlFor="unhcrNumber">UNHCR Number:</label>
                        <input
                          type="text"
                          id="unhcrNumber"
                          value={unhcrNumber}
                          onChange={(e) => setUnhcrNumber(e.target.value)}
                        />
                      </div>
                      <div className="my-2 sm:col-span-1">
                        <label htmlFor="unhcrRegDate">UNHCR Registration Date:</label>
                        <input
                          type="date"
                          id="unhcrRegDate"
                          value={unhcrRegDate}
                          onChange={(e) => setUnhcrRegDate(e.target.value)}
                        />
                      </div>




                      <div className="my-2 sm:col-span-1">
                        <InputLabel id="type-label">Residence SubCounty</InputLabel>
                        {/* <label htmlFor="residenceCounty">Residence County:</label> */}
                        <Select
                          labelId="type-label"
                          id="county_code"
                          value={county_code}
                          onChange={(e) => handleCountyChange(e)}

                          style={{ marginTop: '0.5rem', padding: '0.5rem', width: '100%', border: '1px solid #ccc', borderRadius: '0.25rem' }}
                        >
                          <MenuItem value="" disabled>
                            Select County
                          </MenuItem>
                          {countylist?.map((option) => (
                            <MenuItem key={option.county_Name} value={option.county_Code}>
                              {option.county_Name}
                            </MenuItem>
                          ))}
                        </Select>
                      </div>


                      <div className="my-2 sm:col-span-1">
                        {/* <label htmlFor="residenceCounty">Residence County:</label> */}
                        <InputLabel id="type-label">Residence SubCounty</InputLabel>
                        <Select
                          labelId="subcounty-label"
                          id="sub_county_code"
                          value={sub_county_code}
                          onChange={(e) => handleSubCountyChange(e)}

                          style={{ marginTop: '0.5rem', padding: '0.5rem', width: '100%', border: '1px solid #ccc', borderRadius: '0.25rem' }}
                        >
                          <MenuItem value="" disabled>
                            Select Sub-County
                          </MenuItem>
                          {scountylist?.map((option) => (
                            <MenuItem key={option.sub_County_Name} value={option.sub_County_Code}>
                              {option.sub_County_Name}
                            </MenuItem>
                          ))}
                        </Select>
                      </div>
                      {/* Add other Refugee-specific fields here */}
                    </>
                  )}

                  {studentType === 'foreign' && (
                    <>
                      <div className="my-2 sm:col-span-1">

                        <label htmlFor="nationality">Nationality:</label>
                        <CountryDropdown
                          countryValueType="short"
                          value={nationality}
                          onChange={(value) => handleNationalityChange(value)}
                        />

                      </div>




                      {/* Fields specific to Foreign */}
                      <div className="my-2 sm:col-span-1">
                        <label htmlFor="studentPassNumber">Student Pass Number:</label>
                        <input
                          type="text"
                          id="studentPassNumber"
                          value={studentPassNumber}
                          onChange={(e) => setStudentPassNumber(e.target.value)}
                        />
                      </div>
                      <div className="my-2 sm:col-span-1">
                        <label htmlFor="immigrationStatus">Immigration Status:</label>
                        <input
                          type="text"
                          id="immigrationStatus"
                          value={immigrationStatus}
                          onChange={(e) => setImmigrationStatus(e.target.value)}
                        />
                      </div>


                      <div className="my-2 sm:col-span-1">
                        <InputLabel id="type-label">Residence County</InputLabel>
                        {/* <label htmlFor="residenceCounty">Residence County:</label> */}
                        <Select
                          labelId="type-label"
                          id="county_code"
                          value={county_code}
                          onChange={(e) => handleCountyChange(e)}

                          style={{ marginTop: '0.5rem', padding: '0.5rem', width: '100%', border: '1px solid #ccc', borderRadius: '0.25rem' }}
                        >
                          <MenuItem value="" disabled>
                            Select County
                          </MenuItem>
                          {countylist?.map((option) => (
                            <MenuItem key={option.county_Name} value={option.county_Code}>
                              {option.county_Name}
                            </MenuItem>
                          ))}
                        </Select>
                      </div>


                      <div className="my-2 sm:col-span-1">
                        {/* <label htmlFor="residenceCounty">Residence County:</label> */}
                        <InputLabel id="type-label">Residence SubCounty</InputLabel>
                        <Select
                          labelId="subcounty-label"
                          id="sub_county_code"
                          value={sub_county_code}
                          onChange={(e) => handleSubCountyChange(e)}

                          style={{ marginTop: '0.5rem', padding: '0.5rem', width: '100%', border: '1px solid #ccc', borderRadius: '0.25rem' }}
                        >
                          <MenuItem value="" disabled>
                            Select Sub-County
                          </MenuItem>
                          {scountylist?.map((option) => (
                            <MenuItem key={option.sub_County_Name} value={option.sub_County_Code}>
                              {option.sub_County_Name}
                            </MenuItem>
                          ))}
                        </Select>
                      </div>


                      {/* Add fields for foreign students */}
                    </>
                  )}


                  <hr className="my-8" />

                  {/*Learners Names */}
                  <div className="my-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="my-2 sm:col-span-1">
                      <label htmlFor="firstName">First Name:</label>
                      <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="my-2 sm:col-span-1">
                      <label htmlFor="surName">Surname:</label>
                      <input
                        type="text"
                        id="surName"
                        value={surName}
                        onChange={(e) => setSurName(e.target.value)}
                      />
                    </div>
                    <div className="my-2 sm:col-span-1">
                      <label htmlFor="otherName">Other Name:</label>
                      <input
                        type="text"
                        id="otherName"
                        value={otherName}
                        onChange={(e) => setOtherName(e.target.value)}
                      />
                    </div>
                    <div className="my-2 sm:col-span-1">
                      <label htmlFor="dob">Date of Birth:</label>
                      <input
                        type="date"
                        id="dob"
                        value={dob}
                        onChange={handleDobChange}
                      />

                    </div>

                    <div className="my-2 sm:col-span-1">


                      <label htmlFor="male">Male</label>
                      <input
                        type="radio"
                        id="male"
                        name="sex"
                        value="male"
                        checked={sex === 'male'}
                        onChange={handleSexChange}
                      />

                      <label htmlFor="female">Female</label>
                      <input
                        type="radio"
                        id="female"
                        name="sex"
                        value="female"
                        checked={sex === 'female'}
                        onChange={handleSexChange}
                      />
                    </div>




                    <div className="my-2 sm:col-span-1">
                      <label htmlFor="image">Image:</label>
                      <div className="relative w-32 h-32 bg-gray-300 overflow-hidden rounded-full mt-2">
                        {/* You can replace the src attribute with the URL or path of your placeholder image */}
                        {previewImage && (
                          <img src={previewImage} alt="Preview" className="object-cover w-full h-full" />
                        )}
                      </div>
                      <Input
                        id="fileuploaded"
                        type="file"
                        accept="image/*"
                        // value={fileuploaded}
                        onChange={handleImageChange}
                        fullWidth
                        className="mt-2"
                      />

                    </div>
                  </div><hr className="my-8" />

                  {/* Medical History */}
                  <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-3">
                    <div className="my-2 sm:col-span-1">
                      <label htmlFor="medicalCondition">Medical Condition:</label>
                      <input
                        type="text"
                        id="medicalCondition"
                        value={medicalCondition}
                        onChange={(e) => setMedicalCondition(e.target.value)}
                      />
                    </div>

                    <div className="my-2 sm:col-span-1">
                      <label className="mr-2">
                        Are you a learner with Special Needs?
                      </label>
                      <div className="flex items-center">
                        <br />
                        <input
                          type="radio"
                          id="specialNeedYes"
                          name="specialNeed"
                          value="yes"
                          checked={specialNeed === 'yes'}
                          onChange={handleNeedChange}
                        />
                        <label htmlFor="specialNeedYes" className="ml-1">
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="specialNeedNo"
                          name="specialNeed"
                          value="no"
                          checked={specialNeed === 'no'}
                          onChange={handleNeedChange}
                        />
                        <label htmlFor="specialNeedNo" className="ml-1">
                          No
                        </label>
                      </div>
                    </div>


                    <div className="my-2 sm:col-span-1">
                      {/* <label htmlFor="residenceCounty">Residence County:</label> */}
                      <InputLabel id="type-label">Special Conditions</InputLabel>
                      <Select
                        labelId="type-label"
                        id=""
                        value={special_condition_code}
                        onChange={(e) => handleSpecialNeedChange(e)}

                      >
                        <MenuItem value="" disabled style={{ color: '#000', backgroundColor: 'green' }} >
                          Select Special Condition
                        </MenuItem>
                        {conditionList?.map((option) => (
                          <MenuItem style={{ backgroundColor: '#45474B', color: '#fff' }} key={option.condition_type} value={option.condition_id}>
                            {option.condition_type}
                          </MenuItem>
                        ))}
                      </Select>
                    </div>






                  </div> <hr className="my-8" />

                  {/* Learners Contacts */}
                  <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-3">
                    <div className="my-2 sm:col-span-1">
                      <label htmlFor="postalAddress">Postal Address:</label>
                      <input
                        type="text"
                        id="postalAddress"
                        value={postalAddress}
                        onChange={(e) => setPostalAddress(e.target.value)}
                      />
                    </div>
                    <div className="my-2 sm:col-span-1">
                      <label htmlFor="learnerEmail">Learner Email:</label>
                      <input
                        type="email"
                        id="learnerEmail"
                        value={learnerEmail}
                        onChange={(e) => setLearnerEmail(e.target.value)}
                      />
                    </div>
                    <div className="my-2 sm:col-span-1">
                      <label htmlFor="learnerMobile">Learner Mobile:</label>
                      <input
                        type="tel"
                        id="learnerMobile"
                        value={learnerMobile}
                        onChange={(e) => setLearnerMobile(e.target.value)}
                      />
                    </div>
                  </div> <hr className="my-8" />

                  {/* Mothers Details */}
                  <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-3">
                    <div className="my-2 sm:col-span-1">
                      <label htmlFor="motherIdentification">
                        Mother Identification:
                      </label>
                      <input
                        type="text"
                        id="motherIdentification"
                        value={motherIdentification}
                        onChange={(e) =>
                          setMotherIdentification(e.target.value)
                        }
                      />
                    </div>
                    <div className="my-2 sm:col-span-1">
                      <label htmlFor="motherName">Mother Name:</label>
                      <input
                        type="text"
                        id="motherName"
                        value={motherName}
                        onChange={(e) => setMotherName(e.target.value)}
                      />
                    </div>
                    <div className="my-2 sm:col-span-1">
                      <label htmlFor="motherEmail">Mother Email:</label>
                      <input
                        type="email"
                        id="motherEmail"
                        value={motherEmail}
                        onChange={(e) => setMotherEmail(e.target.value)}
                      />
                    </div>
                    <div className="my-2 sm:col-span-1">
                      <label htmlFor="motherPhone">Mother Phone:</label>
                      <input
                        type="tel"
                        id="motherPhone"
                        value={motherPhone}
                        onChange={(e) => setMotherPhone(e.target.value)}
                      />
                    </div>
                  </div> <hr className="my-8" />

                  {/* Fathers Details */}
                  <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-3">
                    <div className="my-2 sm:col-span-1">
                      <label htmlFor="fatherIdentification">
                        Father Identification:
                      </label>
                      <input
                        type="text"
                        id="fatherIdentification"
                        value={fatherIdentification}
                        onChange={(e) => setFatherIdentification(e.target.value)
                        }
                      />
                    </div>
                    <div className="my-2 sm:col-span-1">
                      <label htmlFor="fatherName">Father Name:</label>
                      <input
                        type="text"
                        id="fatherName"
                        value={fatherName}
                        onChange={(e) => setFatherName(e.target.value)}
                      />
                    </div>
                    <div className="my-2 sm:col-span-1">
                      <label htmlFor="fatherEmail">Father Email:</label>
                      <input
                        type="email"
                        id="fatherEmail"
                        value={fatherEmail}
                        onChange={(e) => setFatherEmail(e.target.value)}
                      />
                    </div>
                    <div className="my-2 sm:col-span-1">
                      <label htmlFor="fatherMobile">Father Mobile:</label>
                      <input
                        type="tel"
                        id="fatherMobile"
                        value={fatherMobile}
                        onChange={(e) => setFatherMobile(e.target.value)}
                      />
                    </div>
                  </div> <hr className="my-8" />

                  {/* Guardian Details */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="my-2 sm:col-span-1">
                      <label htmlFor="gurdianIdentification">
                        Guardian Identification:
                      </label>
                      <input
                        type="text"
                        id="gurdianIdentification"
                        value={gurdianIdentification}
                        onChange={(e) => setGurdianIdentification(e.target.value)
                        }
                      />
                    </div>
                    <div className="my-2 sm:col-span-1">
                      <label htmlFor="gurdianName">Guardian Name:</label>
                      <input
                        type="text"
                        id="gurdianName"
                        value={gurdianName}
                        onChange={(e) => setGurdianName(e.target.value)}
                      />
                    </div>
                    <div className="my-2 sm:col-span-1">
                      <label htmlFor="gurdianEmail">Guardian Email:</label>
                      <input
                        type="email"
                        id="gurdianEmail"
                        value={gurdianEmail}
                        onChange={(e) => setGurdianEmail(e.target.value)}
                      />
                    </div>
                    <div className="my-2 sm:col-span-1">
                      <label htmlFor="gurdianMobile">Guardian Mobile:</label>
                      <input
                        type="tel"
                        id="gurdianMobile"
                        value={gurdianMobile}
                        onChange={(e) => setGurdianMobile(e.target.value)}
                      />
                    </div>

                    <div className="sm:col-span-12 row mx-auto">

                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          fullWidth
                          style={{ marginTop: '1rem' }}
                        >
                          Submit
                        </Button>
                      </Grid>
                    </div>
                  </div>




                </form>
              )}
              {updatedrecord && (

                <Alert severity="success">
                  <AlertTitle>Student Management Module</AlertTitle>
                  Student Details Have Been Updated Successfully — <strong>Check On The Learners List</strong>
                </Alert>

              )}







            </>
          </div>
        </div>
      </>
      ;
    </>
  );
};
export default ViewLearner;
