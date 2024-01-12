import { Button, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../../REST-API/auth/AuthProvider";


const ViewLearners = () => {
    const navigate = useNavigate();
    const [learner_list, setLearnersList] = useState([]);
    const [selectedGrade, setSelectedGrade] = useState("");
    const [selectedBirthCertificate, setSelectedBirthCertificate] = useState("");
    const [learnerType, setLearnerType] = useState("");
    const [classList, setClassList] = useState([]);
    const [class_code, setClass] = useState("");
    const [uic, setUic] = useState("");
    const [class_Name, setClass_Name] = useState("");
    const [deleted, setDeleted] = useState("");
    const [isDataFetched, setIsDataFetched] = useState(false);
    const [viewaLearner, setViewaLearner] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                await getLearnerLevel();
                if (!isDataFetched) {
                    await fetchLearnersData();
                    setIsDataFetched(true);
                }
                await fetchLearnersTypeData();
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [class_code, learnerType]);

    const homeurl = window.location.origin;

    const fetchLearnersData = () => {
        const user = getCurrentUser();
        const uic = user.username;
        setUic(uic);
        const currentClassCode = class_code || (classList.length > 0 ? classList[0].class_Code : "");
        axios
            .get(homeurl+`/student/api/v1/learners/get/all/${uic}/${currentClassCode}`)
            .then((response) => {
                setLearnersList(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    const fetchLearnersTypeData = () => {
        let url = "";

        if (learnerType === "" || learnerType === "all") {
            url = homeurl+`/student/api/v1/learners/get/all/${uic}/${class_code}`;
        } else if (learnerType === "kenyan") {
            url = homeurl+`/student/api/v1/learners/get/kenyan/${uic}/${class_code}`;
        } else if (learnerType === "refugee") {
            url = homeurl+`/student/api/v1/learners/get/refugee/${uic}/${class_code}`;
        } else if (learnerType === "foreign") {
            url = homeurl+`/student/api/v1/learners/get/foreign/${uic}/${class_code}`;
        }

        axios
            .get(url)
            .then((response) => {
                setLearnersList(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    const Homebaseurl = `http://nemis.education.go.ke`;
    const headers = {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Methods": "GET, POST",
        "Access-Control-Allow-Headers": "X-Token",
        "Access-Control-Allow-Credentials": "true",
    };

    const filteredLearners = (learner_list || []).filter((learner) => {
        return selectedGrade === "" || learner === selectedGrade;
    });

    const handleLearnerTypeChange = (e) => {
        setLearnerType(e.target.value);
    };

    // const handleAddLearner = () => {
    //   navigate('/app/insertLearner');
    // };


    const handleAddLearner = () => {
        navigate(`/app/insertLearner?classCode=${class_code}&className=${class_Name}`);
    };

    const getLearnerLevel = () => {
        const user = getCurrentUser();
        const levelCode = user.levelCode;
        const url = `/generic2/api/Cascade/LevelGrades/${levelCode}`;
        const baseurl = `${Homebaseurl}${url}`;

        axios
            .get(baseurl, { headers })
            .then((response) => {
                setClassList(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    const handleLearnerLevelChange = (e) => {
        const mclass = e.target.value;
        const option = classList.find((option) => option.class_Code === mclass);
        const text = option ? option.class_Name : "";
        setClass(mclass);
        setClass_Name(text);
        console.log(text, mclass);
    };

    // Function to handle to view a learner


const handleViewLearner = (upi) => {
  console.log(upi);
  try {
    axios
      .get(homeurl+`/student/api/v1/learners/get/learner/${upi}`)
      .then((response) => {
        setViewaLearner(response.data);

        // Navigate to the page for viewing the learner
        
        navigate(`/app/viewLearner?classCode=${class_code}&className=${class_Name}`, { state: { learnerData: response.data } });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

    // Function to handle deleting a learner
    const handleDeleteLearner = (upi) => {
        console.log(upi);
        try {
          axios
            .post(homeurl+`/student/api/v1/learners/delete/${upi}`)
            .then((response) => {
              setDeleted(response.data);
              console.log(response.data);
              console.log(deleted);
              alert(response.data);
      
              // Update the learners array to remove the deleted learner
              setLearnersList((prevLearners) => prevLearners.filter((learner) => learner.upi !== upi));
            })
            .catch((error) => {
              console.error("Error fetching data:", error);
            });
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    // Function to handle moving a learner
    const handleMoveLearner = (upi) => {
        
        console.log(upi);
        try{
        axios
            .get(homeurl+`/student/api/v1/learners/get/all/${uic}/${upi}`)
            .then((response) => {
                setDeleted(response.data);
                console.log(response.data);
                console.log(deleted)
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
        }catch(error){
            console.error("Error fetching data:", error); 
        }
    };

    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const currentDate = new Date();
    
        const yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
    
        // Check if the current month is before the birth month
        // or if the current month is the same as the birth month
        // but the current day is before the birth day
        if (
          currentDate.getMonth() < birthDate.getMonth() ||
          (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())
        ) {
          // Subtract 1 from the calculated age if the birthdate hasn't occurred yet this year
          return yearsDiff - 1;
        }
    
        return yearsDiff;
      };



    return (
        <>
            <div className="bgPrimary">
                <div className="mx-auto max-w-7xl sm:px-6 sm:py-16 lg:px-16">
                   
                </div>
            </div>

            <div className="bg-#ff80b5">
                <div className="mx-auto max-w-7xl py-12 sm:py-12 lg:py-16">
                    <div>
                        <div className="flex flex-wrap sm:flex-row items-center sm:items-start">
                            <div>

                                <button className="bg-blue-500 text-white py-2 px-4 ml-auto rounded" onClick={handleAddLearner}>
                                    Add Learner
                                </button>

                            </div>
                            <div className="w-full flex flex-wrap justify-end gap-6">
                                <div className="mb-4 sm:mb-0 sm:mr-4">
                                    {/* Filter by grade dropdown */}
                                    <div className="p-2 border border-gray-300 rounded">



                                        <label className="mr-2">Level</label>
                                       
                                        <div className="my-2 sm:col-span-1">
                                            <InputLabel id="type-label"></InputLabel>
                                            <Select
                                                labelId="type-label"
                                                id=""
                                                value={class_code || (classList.length > 0 ? classList[0].class_Code : "")} // Set the default value to the first class code
                                                onChange={(e) => handleLearnerLevelChange(e)}
                                            >
                                                <MenuItem value="" disabled style={{ color: '#000', backgroundColor: 'green' }} >
                                                    Select Learner Level
                                                </MenuItem>
                                                {classList?.map((option) => (
                                                    <MenuItem key={option.class_Name} value={option.class_Code}>
                                                        {option.class_Name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </div>


                                    </div>
                                </div>



                                <div className="mb-4">
                                    {/* Filter by refugee type */}
                                    <div className="p-2 border border-gray-300 rounded">
                                        <label className="mr-2">Learner Type:</label>
                                        <select
                                            value={learnerType}
                                            onChange={(e) => handleLearnerTypeChange(e)}
                                        >
                                            <option value="">all</option>
                                            <option value="kenyan">kenyan</option>
                                            <option value="foreign">foreign</option>
                                            <option value="refugee">refugee</option>
                                            {/* Add more refugee type options as needed */}
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-4 sm:mb-0 sm:mr-4">
                                    {/* Filter by birth certificate */}
                                    <div className="p-2 border border-gray-300 rounded">
                                        <label className="mr-2">Learner Idendification:</label>
                                        <select
                                            value={selectedBirthCertificate}
                                            onChange={(e) =>
                                                setSelectedBirthCertificate(e.target.value)
                                            }
                                        >
                                            <option value="">All</option>
                                            <option value="WithCertificate">With Idendification</option>
                                            <option value="WithoutCertificate">
                                                Without Idendification
                                            </option>
                                        </select>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="w-full overflow-x-auto">
                            <table className="min-w-full text-xs bg-white border border-gray-300">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 border-b">No.</th>
                                        <th className="py-2 px-4 border-b">Photo</th>
                                        <th className="py-2 px-4 border-b">Learner UPI</th>
                                        <th className="py-2 px-4 border-b">Learner Name</th>
                                        <th className="py-2 px-4 border-b">Gender</th>
                                        <th className="py-2 px-4 border-b">Date of Birth</th>
                                        <th className="py-2 px-4 border-b">AGE</th>
                                        <th className="py-2 px-4 border-b">Birth Cert No</th>
                                        <th className="py-2 px-4 border-b">View</th>
                                        <th className="py-2 px-4 border-b">Delete</th>
                                        <th className="py-2 px-4 border-b">Move Learner</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {learner_list.map((learner_list, index) => (
                                        <tr key={learner_list.id}>
                                            <td className="py-2 px-4 border-b">{index + 1}</td>
                                            <td className="py-2 px-4 border-b">
                                                <img src={learner_list.image} alt="Learner" style={{ height: '60px', width: '60px' }} />
                                            </td>
                                            <td className="py-2 px-4 border-b">{learner_list.upi}</td>
                                            <td className="py-2 px-4 border-b">
                                                {` ${learner_list.sur_name} ${learner_list.first_name} ${learner_list.other_name}`}
                                            </td>
                                            <td className="py-2 px-4 border-b">{learner_list.sex}</td>
                                            <td className="py-2 px-4 border-b">{learner_list.dob}</td>
                                            <td className="py-2 px-4 border-b">{calculateAge(learner_list.dob)}</td>
                                            <td className="py-2 px-4 border-b">{learner_list.student_identification}</td>
                                            <td className="py-2 px-4 border-b">
                                                <button className="text-blue-500 underline" onClick={() => handleViewLearner(learner_list.upi)}>[View]</button>
                                            </td>
                                            <td className="py-2 px-4 border-b">
                                                <button className="text-red-500 underline" onClick={() => handleDeleteLearner(learner_list.upi)}>[Delete]</button>
                                            </td>
                                            <td className="py-2 px-4 border-b">
                                                <button className="text-green-500 underline" onClick={() => handleMoveLearner(learner_list.upi)}>[Move]</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default ViewLearners;