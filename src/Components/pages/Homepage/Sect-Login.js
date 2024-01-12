import { CheckIcon } from "@heroicons/react/20/solid";
import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useFetchers, useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../../../REST-API/auth/AuthProvider';
import axios from "axios";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { Doughnut, Tooltip as DoughnutTooltip } from 'recharts';
import image1 from "../../Assets/teachersmiling.png"
import "../../pages/Charts.css"
import { Grid } from '@mui/material';
import HomepageInforgraphics from "./HomepageInforgraphics";


const features = [
  { name: '2023 KCPE Results&Placement', description: 'Check Here', link: '/searchresult' },
  { name: '2023 KCSE Results', description: 'Check Here', link: '/kcseresult' },
  { name: 'Report Grievances', description: 'Report Here', link: '#' },
  { name: 'Elimu Trees Monitoring', description: 'Tree Planting/Monitoring Here', link: 'http://elimutrees.education.go.ke/home' },
];
//line graph
//KCPE
const overallKcpeGenderPerformance = [
  { marks: '0-99', gender: 'girls', value: 900 },
  { marks: '0-99', gender: 'boys', value: 1200 },
  { marks: '100-199', gender: 'girls', value: 1250 },
  { marks: '100-199', gender: 'boys', value: 1270 },
  { marks: '200-299', gender: 'boys', value: 4700 },
  { marks: '200-299', gender: 'girls', value: 2400 },
  { marks: '300-399', gender: 'boys', value: 38399 },
  { marks: '300-399', gender: 'girls', value: 23799 },
  { marks: '400-500', gender: 'girls', value: 1200 },
  { marks: '400-500', gender: 'boys', value: 1250 },
];

// Group data by marks
const dataKcpeByMarks = overallKcpeGenderPerformance.reduce((acc, entry) => {
  const { marks, gender, value } = entry;
  if (!acc[marks]) {
    acc[marks] = { marks };
  }
  acc[marks][gender] = value;
  return acc;
}, {});

// Convert grouped data to an array
const dataKcpe = Object.values(dataKcpeByMarks);

// Define distinct colors for each category
const colors = {
  girls: '#FF6384',
  boys: 'blue',
};

//KCSE
const overallKcseGenderPerformance = [
  { Grades: 'E', gender: 'total', value: 2100 },
  { Grades: 'E', gender: 'girls', value: 900 },
  { Grades: 'E', gender: 'boys', value: 1200 },
  { Grades: 'D-', gender: 'total', value: 2520 },
  { Grades: 'D-', gender: 'girls', value: 1250 },
  { Grades: 'D-', gender: 'boys', value: 1270 },
  { Grades: 'D', gender: 'total', value: 2954 },
  { Grades: 'D', gender: 'girls', value: 654 },
  { Grades: 'D', gender: 'boys', value: 2300 },
  { Grades: 'D+', gender: 'total', value: 4550 },
  { Grades: 'D+', gender: 'girls', value: 2100 },
  { Grades: 'D+', gender: 'boys', value: 2450 },
  { Grades: 'C-', gender: 'total', value: 3779 },
  { Grades: 'C-', gender: 'girls', value: 2379 },
  { Grades: 'C-', gender: 'boys', value: 1460 },
  { Grades: 'C', gender: 'total', value: 20065 },
  { Grades: 'C', gender: 'girls', value: 9865 },
  { Grades: 'C', gender: 'boys', value: 10200 },
  { Grades: 'C+', gender: 'total', value: 15345 },
  { Grades: 'C+', gender: 'girls', value: 7656 },
  { Grades: 'C+', gender: 'boys', value: 7689 },
  { Grades: 'B-', gender: 'total', value: 15251 },
  { Grades: 'B-', gender: 'girls', value: 8799 },
  { Grades: 'B-', gender: 'boys', value: 6652 },
  { Grades: 'B', gender: 'total', value: 18875 },
  { Grades: 'B', gender: 'girls', value: 9000 },
  { Grades: 'B', gender: 'boys', value: 9875 },
  { Grades: 'B+', gender: 'total', value: 8776 },
  { Grades: 'B+', gender: 'girls', value: 4300 },
  { Grades: 'B+', gender: 'boys', value: 4476 },
  { Grades: 'A-', gender: 'total', value: 6217 },
  { Grades: 'A-', gender: 'girls', value: 3097 },
  { Grades: 'A-', gender: 'boys', value: 3120 },
  { Grades: 'A', gender: 'total', value: 4998 },
  { Grades: 'A', gender: 'girls', value: 2588 },
  { Grades: 'A', gender: 'boys', value: 2410 },
];

// Group data by gender
const dataKcseByGender = overallKcseGenderPerformance.reduce((acc, entry) => {
  const { Grades, gender, value } = entry;
  if (!acc[Grades]) {
    acc[Grades] = { Grades };
  }
  acc[Grades][gender] = value;
  return acc;
}, {});

// Convert grouped data to an array
const dataKcse = Object.values(dataKcseByGender);

// Define distinct colors for each gender
const overallKcseGenderColors = {
  total: 'red',
  girls: '#00FF00',
  boys: 'blue',
};

// end of line graph

//start pie chart
const studentsEnrollment = [
  { ecd: 99, primary: 35674, prevocation: 86, jss: 2141, secondary: 9865, TTC: 40 },
];

const studentsEnrollmentData = [
  { name: 'Primary', value: studentsEnrollment[0].primary },
  { name: 'ECD', value: studentsEnrollment[0].ecd },
  { name: 'JSS', value: studentsEnrollment[0].jss },
  //{ name: 'Prevocation', value: studentsEnrollment[0].prevocation },
  { name: 'Secondary', value: studentsEnrollment[0].secondary },
  //{ name: 'TTC', value: studentsEnrollment[0].prevocation },
];

const studentsEnrollmentCOLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#f49ac2', '#00C49F'];

const formTwoEnrollment = [
  { male: 3000, female: 5459 },
];

const formTwoEnrollmentData = [
  { name: 'Male', value: formTwoEnrollment[0].male },
  { name: 'Female', value: formTwoEnrollment[0].female },
];

const formTwoEnrollmentCOLORS = ['#681da8', 'green'];
//end pie charts

//area chart

const cbcEnrollment = [
  { grade: 'Grade 1', gender: 'girls', value: 900 },
  { grade: 'Grade 1', gender: 'boys', value: 1200 },
  { grade: 'Grade 2', gender: 'girls', value: 1250 },
  { grade: 'Grade 2', gender: 'boys', value: 1270 },
  { grade: 'Grade 3', gender: 'girls', value: 2400 },
  { grade: 'Grade 3', gender: 'boys', value: 2300 },
  { grade: 'Grade 4', gender: 'girls', value: 21000 },
  { grade: 'Grade 4', gender: 'boys', value: 19050 },
  { grade: 'Grade 5', gender: 'girls', value: 23799 },
  { grade: 'Grade 5', gender: 'boys', value: 14600 },
  { grade: 'Grade 6', gender: 'girls', value: 13000 },
  { grade: 'Grade 6', gender: 'boys', value: 13100 },
  { grade: 'Grade 7', gender: 'girls', value: 1200 },
  { grade: 'Grade 7', gender: 'boys', value: 1250 },
];
// Group data by gender
const datacbcEnrollmentByGender = cbcEnrollment.reduce((acc, entry) => {
  const { marks, gender, value } = entry;
  if (!acc[marks]) {
    acc[marks] = { marks };
  }
  acc[marks][gender] = value;
  return acc;
}, {});
const SectForm = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setmessage] = useState('');
  const [successful, setsuccessful] = useState(false);

  const crdpassword = "9876$Teta";
  const crdusername = "nemisadmin";
  const credentials = `${crdusername}:${crdpassword}`;
  const base64Credentials = btoa(credentials);
  const headers = {
    'Authorization': `Basic ${base64Credentials}`,
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Methods': 'GET, POST',
    'Access-Control-Allow-Headers': 'X-Token',
    'Access-Control-Allow-Credentials': 'true'
  };

  const headers2 = {
    "Access-Control-Allow-Origin": "*",
    'Access-Control-Allow-Credentials': true
  };


  const handleSuccessAlertOpen = () => {
    setsuccessful(true);
  };
  const handleSuccessAlertClose = async () => {
    setsuccessful(true);
    const user = getCurrentUser();
    const username = user.username;
    const userCategory = user.category;
    console.log("username set on localstorage is" + username + userCategory)


    if (parseInt(userCategory, 10) === 1) {
      console.log("BeforeFtech", username);
      console.log('this is user category' + user.category);
      fetchSchoolLocation(username);
      navigate('/app/school');
      return;
    }

    try {
      // Make a GET request to fetch the user's role
      // const baseurl = `http://localhost/generic2/api/Users/MyRoles/${username}`;
      const baseurl = `http://nemis.education.go.ke/generic2/api/Users/MyRoles/${username}`;
      //const baseurl = `http://10.104.100.83/generic2/api/Users/MyRoles/${username}`;
      const myroleresponse = await axios.get(`${baseurl}`, {
        headers,
      });

      const roleDescription = myroleresponse.data.roleDescription;
      const responseData = myroleresponse.data;
      console.log(responseData)

      //findUserRegions(username, responseData);
      // handleSaveUserRole(username, responseData);

      if (roleDescription === 'NEMIS_Admins') {
        navigate('/admin');
      } else if (roleDescription === 'Sub-County Directors of Education') {
        navigate('/SCDE');
      } else if (roleDescription === 'County Directors of Education') {
        navigate('/CDE');
      } else if (roleDescription === 'Region Directors of Education') {
        navigate('/RDE');
      } else {
        navigate('/Generic');
      }
    } catch (error) {
      console.error('Error while checking user data:', error);
    }
  };



  const fetchSchoolLocation = async (uic) => {


    console.log(uic);
    try {
      const baseurl = `http://nemis.education.go.ke/generic2/api/institution/Admin/${uic}`;
      // const baseurl = `http://localhost/generic2/api/institution/Admin/${uic}`;
      //const baseurl = `http://10.104.100.83/generic2/api/institution/Admin/${uic}`;
      const schoolResponse = await axios.get(`${baseurl}`, {
        headers,
      });
      console.log(schoolResponse);
      const schoolData = schoolResponse.data[0];

      console.log(schoolData);
      //Save in a Stored Procedure School Location Detail
      const data = {
        uic: schoolData.institution_Code,
        institution_name: schoolData.institution_Name,
        region_code: schoolData.region_Code,
        region_name: schoolData.region_Name,
        county_code: schoolData.county_Code,
        county_name: schoolData.county_Name,
        sub_county_code: schoolData.sub_County_Code,
        sub_county_name: schoolData.sub_County_Name,
        constituency_code: schoolData.constituency_Code,
        constituency_name: schoolData.constituency_Name,
        ward_code: schoolData.ward_Code,
        ward_name: schoolData.ward_Name,
        level_code: schoolData.institution_Level_Code,
        level_name: schoolData.level_Name,
        type: schoolData.institution_Type
      };

      // handleSaveSchoolLocation(data);

    } catch (error) {
      console.error('Error while fetching school location:', error);
    }
  };


  const handleErrorAlertOpen = () => {
    setOpen(true);
  };

  // Handles Closing of Error Alert Message.
  const handleErrorAlertClose = () => {
    setOpen(false);
    window.location.reload();
  };
  const dataKcpeResults = [
    { year: 2019, boys: 450, girls: 470 },
    { year: 2020, boys: 460, girls: 480 },
    { year: 2021, boys: 470, girls: 490 },
    // Add more data as needed
  ];

  const dataOverallPerformance = [
    { range: '0-100', count: 30 },
    { range: '101-200', count: 50 },
    { range: '201-300', count: 80 },
    { range: '301-400', count: 120 },
    { range: '401-500', count: 90 },
  ];
  const dataEnrollment = [
    { level: 'ECDE ', enrolment: 103455, type: 'Public' },
    { level: 'Primary ', enrolment: 5837252, type: 'Public' },
    { level: 'Secondary ', enrolment: 3970063, type: 'Public' },
    { level: 'TTC ', enrolment: 78832, type: 'Public' },
    { level: 'JSS ', enrolment: 987979, type: 'Public' },
    { level: 'Pre-vocational ', enrolment: 151412, type: 'Public' },
  ];

  //const pieChartColors = ['#0088FE', '#00C49F'];

  // Sum the total enrollment for public and private within each level
  const processedData = dataEnrollment.reduce((acc, entry) => {
    const existingEntry = acc.find((item) => item.level === entry.level);
    if (existingEntry) {
      existingEntry.enrolment += entry.enrolment;
    } else {
      acc.push({ level: entry.level, enrolment: entry.enrolment, type: entry.type });
    }
    return acc;
  }, []);

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = 25 + innerRadius + (outerRadius - innerRadius);
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#8884d8"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize={12}
      >
        {processedData[index].level}
      </text>
    );
  };


  const barChartColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const pieChartColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  // const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];



  return (

    <div className="lg:h-screen lg:w-screen mx-3 justify-center">
      <div className="flex flex-col lg:flex-row mt-0 lg:w-screen sm:w-screen ">
        <div className="lg:w-full relative lg:px-3 lg:pb-4"
        >
          <h2 className="text-2xl w-full font-bold tracking-tight text-white sm:text- xl gradient-text mt-3">Kenya Education Management Information System (KEMIS)</h2>
          <p className="mt-1 text-gray-500 text-sm">
            <strong>KEMIS</strong> , .......the <strong><i>Single Source of Truth & One Stop Shop for Education Data </i></strong> ! <br></br>
          </p>
          <p className="mt-1 text-gray-500 text-sm">

            The revolutionary Web Application - tracks performance mobility of learners and
            teaching staff from Early Childhood Development Education (ECDE) to Institutions
            of Higher Learning to ensure maximum efficiency
            and effective utilization of education resources.          </p>
        </div>


      </div>
      <div className=' items-start flex flex-col lg:flex-row  lg:w-screen sm:w-screen'>
        <Grid container spacing={1} >

          <Grid item xs={12} sm={6} md={4}>
            <h3 className="text-center" style={{ color: '#9d1c1c', fontSize: 'larger', textDecoration: 'Underline', fontWeight: 600 }}>KCPE 2023 Scorelines</h3>
            <div className="w-1/4" style={{ display: 'flex', justifyContent: "flex-start" }}>
              <div style={{ maxWidth: '100%' }}>
                <BarChart width={400} height={260} data={dataKcpe} >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="marks" label={{ value: 'marks', padding: '0', angle: 0, position: "bottom", offset: "-5", fontSize: "14px" }} />
                  <YAxis label={{ value: 'Students', angle: -90, position: 'insideLeft', offset: "0", fontSize: "14px" }} />
                  <Tooltip />
                  <Legend />
                  <Bar className="my-4" dataKey="boys" fill={colors.boys} />
                  <Bar className="my-4" dataKey="girls" fill={colors.girls} />
                </BarChart>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <h3 className="text-center " style={{ color: '#9d1c1c', fontSize: 'semibold', textDecoration: 'Underline', fontWeight: 600 }}>KCSE 2023 Overall Performance</h3>
            <div className="w-1/4 mx-4" style={{ display: 'flex', justifyContent: 'inherit' }}>
              <div style={{ maxWidth: '100%' }}>
                <LineChart width={380} height={260} data={dataKcse}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="Grades" label={{ value: 'Grades', padding: '0', angle: 0, position: "bottom", offset: "-5", fontSize: "14px" }} />
                  <YAxis label={{ value: 'Students', angle: -90, position: 'insideLeft', offset: "0", fontSize: "14px" }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="total" stroke={overallKcseGenderColors.total} />
                  <Line type="monotone" dataKey="boys" stroke={overallKcseGenderColors.boys} />
                  <Line type="monotone" dataKey="girls" stroke={overallKcseGenderColors.girls} />
                </LineChart>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <h3 className="text-center" style={{ color: '#9d1c1c', fontSize: 'semibold', textDecoration: 'underline', fontWeight: 600, }}>Institutions Summary</h3>
            <div className="w-1/4 mx-10" style={{ display: 'flex', justifyContent: 'inherit' }}>
              <div style={{ maxWidth: '100%', }}>
                <PieChart width={300} height={250}>
                  <Pie
                    data={studentsEnrollmentData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    innerRadius={40}
                    fill="#8884d8"
                    fontSize="4px"
                    labelLine={false}
                    label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index  }) => {
                      const radius = outerRadius + 10; // Set the radius for placing labels outside the pie

                      // Calculate label position
                      const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                      const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

                      // Calculate line start and end points
                      const lineStartX = cx + (innerRadius + 5) * Math.cos(-midAngle * (Math.PI / 180));
                      const lineStartY = cy + (innerRadius + 5) * Math.sin(-midAngle * (Math.PI / 180));
                      const lineEndX = cx + (outerRadius + 10) * Math.cos(-midAngle * (Math.PI / 180));
                      const lineEndY = cy + (outerRadius + 10) * Math.sin(-midAngle * (Math.PI / 180));

                      return (
                        <g>
                          {/* Draw line connecting label to segment */}
                          <line x1={lineStartX} y1={lineStartY} x2={lineEndX} y2={lineEndY} stroke="#000" />

                          {/*label text */}
                          <text x={x} y={y} fill="#000" fontSize="6px" textAnchor="left">
                            {studentsEnrollmentData[index].name}
                          </text>
                        </g>
                      );
                    }}


                  >
                    {studentsEnrollmentData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={studentsEnrollmentCOLORS[index % studentsEnrollmentCOLORS.length]}
                        style={{position:"bottom" , offset:"10"}}
                      />
                    ))}

                  </Pie>
                  <Tooltip formatter={(value) => `${value} students`} />
                  <Legend
          layout="horizontal"
          align="center"
          verticalAlign="bottom"
          wrapperStyle={{ marginTop: '10px', fontSize:"8px" }}
        />     
        </PieChart>
              </div>
            </div>
          </Grid>

        </Grid>
      </div>
      <HomepageInforgraphics />

    </div>


  );
};

export default SectForm;

