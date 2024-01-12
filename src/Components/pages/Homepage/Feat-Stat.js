import { Grid } from '@mui/material';
import React, { useState } from "react";
import { ComposedChart,  PieChart, Pie, Cell, BarChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, LineChart, Area } from 'recharts';

//percentage transition
const percentageTransition = [
    { County: 'Mombasa', gender: 'girls', value: 27 },
    { County: 'Mombasa', gender: 'boys', value: 37 },
    { County: 'Kwale', gender: 'girls', value: 45 },
    { County: 'Kwale', gender: 'boys', value: 55 },
    { County: 'Kilifi', gender: 'girls', value: 42 },
    { County: 'Kilifi', gender: 'boys', value: 58 },
    { County: 'Tana River', gender: 'girls', value: 39 },
    { County: 'Tana River', gender: 'boys', value: 61 },
    { County: 'Lamu', gender: 'girls', value: 36 },
    { County: 'Lamu', gender: 'boys', value: 64 },
    { County: 'Taita-Taveta', gender: 'girls', value: 50 },
    { County: 'Taita-Taveta', gender: 'boys', value: 50 },
    { County: 'Garissa', gender: 'girls', value: 47 },
    { County: 'Garissa', gender: 'boys', value: 53 },
    { County: 'Wajir', gender: 'girls', value: 43 },
    { County: 'Wajir', gender: 'boys', value: 57 },
    { County: 'Mandera', gender: 'girls', value: 40 },
    { County: 'Mandera', gender: 'boys', value: 60 },
    { County: 'Marsabit', gender: 'girls', value: 35 },
    { County: 'Marsabit', gender: 'boys', value: 65 },
    { County: 'Isiolo', gender: 'girls', value: 30 },
    { County: 'Isiolo', gender: 'boys', value: 70 },
    { County: 'Meru', gender: 'girls', value: 52 },
    { County: 'Meru', gender: 'boys', value: 48 },
    { County: 'Tharaka-Nithi', gender: 'girls', value: 38 },
    { County: 'Tharaka-Nithi', gender: 'boys', value: 62 },
    { County: 'Embu', gender: 'girls', value: 46 },
    { County: 'Embu', gender: 'boys', value: 54 },
    { County: 'Kitui', gender: 'girls', value: 41 },
    { County: 'Kitui', gender: 'boys', value: 59 },
    { County: 'Machakos', gender: 'girls', value: 48 },
    { County: 'Machakos', gender: 'boys', value: 52 },
    { County: 'Makueni', gender: 'girls', value: 40 },
    { County: 'Makueni', gender: 'boys', value: 60 },
    { County: 'Nyandarua', gender: 'girls', value: 55 },
    { County: 'Nyandarua', gender: 'boys', value: 45 },
    { County: 'Nyeri', gender: 'girls', value: 47 },
    { County: 'Nyeri', gender: 'boys', value: 53 },
    { County: 'Kirinyaga', gender: 'girls', value: 45 },
    { County: 'Kirinyaga', gender: 'boys', value: 55 },
    { County: 'Murang\'a', gender: 'girls', value: 51 },
    { County: 'Murang\'a', gender: 'boys', value: 49 },
    { County: 'Kiambu', gender: 'girls', value: 52 },
    { County: 'Kiambu', gender: 'boys', value: 48 },
    { County: 'Turkana', gender: 'girls', value: 33 },
    { County: 'Turkana', gender: 'boys', value: 67 },
    { County: 'West Pokot', gender: 'girls', value: 45 },
    { County: 'West Pokot', gender: 'boys', value: 55 },
    { County: 'Samburu', gender: 'girls', value: 38 },
    { County: 'Samburu', gender: 'boys', value: 62 },
    { County: 'Trans-Nzoia', gender: 'girls', value: 87 },
    { County: 'Trans-Nzoia', gender: 'boys', value: 13 },
    { County: 'Uasin Gishu', gender: 'girls', value: 50 },
    { County: 'Uasin Gishu', gender: 'boys', value: 50 },
    { County: 'Elgeyo-Marakwet', gender: 'girls', value: 35 },
    { County: 'Elgeyo-Marakwet', gender: 'boys', value: 65 },
    { County: 'Nandi', gender: 'girls', value: 69 },
    { County: 'Nandi', gender: 'boys', value: 31 },
    { County: 'Baringo', gender: 'girls', value: 54 },
    { County: 'Baringo', gender: 'boys', value: 46 },
    { County: 'Laikipia', gender: 'girls', value: 76 },
    { County: 'Laikipia', gender: 'boys', value: 24 },
    { County: 'Nakuru', gender: 'girls', value: 45 },
    { County: 'Nakuru', gender: 'boys', value: 55 },
    { County: 'Narok', gender: 'girls', value: 67 },
    { County: 'Narok', gender: 'boys', value: 33 },
    { County: 'Kajiado', gender: 'girls', value: 41 },
    { County: 'Kajiado', gender: 'boys', value: 59 },
    { County: 'Kericho', gender: 'girls', value: 79 },
    { County: 'Kericho', gender: 'boys', value: 21 },
    { County: 'Bomet', gender: 'girls', value: 32 },
    { County: 'Bomet', gender: 'boys', value: 68 },
    { County: 'Kakamega', gender: 'girls', value: 58 },
    { County: 'Kakamega', gender: 'boys', value: 42 },
    { County: 'Vihiga', gender: 'girls', value: 63 },
    { County: 'Vihiga', gender: 'boys', value: 37 },
    { County: 'Bungoma', gender: 'girls', value: 76 },
    { County: 'Bungoma', gender: 'boys', value: 24 },
    { County: 'Busia', gender: 'girls', value: 40 },
    { County: 'Busia', gender: 'boys', value: 60 },
    { County: 'Siaya', gender: 'girls', value: 56 },
    { County: 'Siaya', gender: 'boys', value: 44 },
    { County: 'Kisumu', gender: 'girls', value: 23 },
    { County: 'Kisumu', gender: 'boys', value: 77 },
    { County: 'Homa Bay', gender: 'girls', value: 85 },
    { County: 'Homa Bay', gender: 'boys', value: 15 },
    { County: 'Migori', gender: 'girls', value: 37 },
    { County: 'Migori', gender: 'boys', value: 63 },
    { County: 'Kisii', gender: 'girls', value: 72 },
    { County: 'Kisii', gender: 'boys', value: 28 },
    { County: 'Nyamira', gender: 'girls', value: 47 },
    { County: 'Nyamira', gender: 'boys', value: 53 },
    { County: 'Nairobi', gender: 'girls', value: 61 },
    { County: 'Nairobi', gender: 'boys', value: 39 }
];

const percntageTransitionColor = ['#CCF381', '#8884d8'];
// Group the data by county
const percntageTransitiongroupedData = Object.values(
    percentageTransition.reduce((acc, { County, gender, value }) => {
        if (!acc[County]) {
            acc[County] = { County, girls: 0, boys: 0 };
        }
        acc[County][gender] += value;
        return acc;
    }, {})
);
//end

//line graph
//KCPE
const overallKcpeGenderPerformance = [
    { marks: '0-100', gender: 'girls', value: 900 },
    { marks: '0-100', gender: 'boys', value: 1200 },
    { marks: '101-200', gender: 'girls', value: 1250 },
    { marks: '101-200', gender: 'boys', value: 1270 },
    { marks: '201-249', gender: 'girls', value: 2400 },
    { marks: '201-249', gender: 'boys', value: 2300 },
    { marks: '250-299', gender: 'girls', value: 21000 },
    { marks: '250-299', gender: 'boys', value: 19050 },
    { marks: '300-349', gender: 'girls', value: 23799 },
    { marks: '300-349', gender: 'boys', value: 14600 },
    { marks: '350-399', gender: 'girls', value: 13000 },
    { marks: '350-399', gender: 'boys', value: 13100 },
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
    boys: '#36A2EB',
};

//KCSE
const overallKcseGenderPerformance = [
    { Grades: 'E', gender: 'total', value: 2100 },
    { Grades: 'E', gender: 'girls', value: 900 },
    { Grades: 'E', gender: 'boys', value: 1200 },
    { Grades: 'D-', gender: 'total', value: 2520 },
    { Grades: 'D-', gender: 'girls', value: 1250 },
    { Grades: 'D-', gender: 'boys', value: 1270 },
    { Grades: 'D', gender: 'total', value: 2945 },
    { Grades: 'D', gender: 'girls', value: 654 },
    { Grades: 'D', gender: 'boys', value: 2300 },
    { Grades: 'D+', gender: 'total', value: 4550 },
    { Grades: 'D+', gender: 'girls', value: 2100 },
    { Grades: 'D+', gender: 'boys', value: 2450 },
    { Grades: 'C-', gender: 'total', value: 3839 },
    { Grades: 'C-', gender: 'girls', value: 2379 },
    { Grades: 'C-', gender: 'boys', value: 1460 },
    { Grades: 'C', gender: 'total', value: 20065 },
    { Grades: 'C', gender: 'girls', value: 9865 },
    { Grades: 'C', gender: 'boys', value: 10200 },
    { Grades: 'C+', gender: 'total', value: 15345 },
    { Grades: 'C+', gender: 'girls', value: 7656 },
    { Grades: 'C+', gender: 'boys', value: 7689 },
    { Grades: 'B-', gender: 'total', value: 15451 },
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
    { ecd: 30000, primary: 50479, jss: 31456, secondary: 38459, prevocation: 14459 },
];

const studentsEnrollmentData = [
    { name: 'ECD', value: studentsEnrollment[0].ecd },
    { name: 'Primary', value: studentsEnrollment[0].primary },
    { name: 'JSS', value: studentsEnrollment[0].jss },
    { name: 'Secondary', value: studentsEnrollment[0].secondary },
    { name: 'Prevocation', value: studentsEnrollment[0].prevocation },
];

const studentsEnrollmentCOLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#00FF00'];

//end pie chart
//primary school general analytics


//end
//KCPE Avarage Score Trend As From 2010
const kcpeTrendByYear = [
    { year: 2018, average: 230.5, boys: 230, girls: 231 },
    { year: 2019, average: 225, boys: 221, girls: 229 },
    { year: 2020, average: 239.5, boys: 242, girls: 237 },
    { year: 2021, average: 258, boys: 259, girls: 257 },
    { year: 2022, average: 240, boys: 239, girls: 241 },
    { year: 2023, average: 258, boys: 257, girls: 259 },
];
//end
//kCPE Subject Performance Analysis
const kcpeSubjectPerformanceAnalysis = [
    { subject: 'English', boys: 45, girls: 56 },
    { subject: 'Kiswahili', boys: 56, girls: 57 },
    { subject: 'Mathematics', boys: 58, girls: 45 },
    { subject: 'Science', boys: 57, girls: 43 },
    { subject: 'SST/ReEdu', boys: 49, girls: 48.9 },
];
//end
//KCPE Examination Malpractice Cases Trend
const kcpeExaminationMalpracticeCases = [
    { year: '2011', cases: 400 },
    { year: '2012', cases: 423 },
    { year: '2013', cases: 230 },
    { year: '2014', cases: 106 },
    { year: '2015', cases: 129 },
    { year: '2016', cases: 450 },
    { year: '2017', cases: 400 },
    { year: '2018', cases: 350 },
    { year: '2019', cases: 302 },
    { year: '2020', cases: 200 },
    { year: '2021', cases: 250 },
    { year: '2022', cases: 211 },
    { year: '2023', cases: 210 },
];
//end

//Pregnancy Cases
const kcpePregnanceCases = [
    { year: '2011', cases: 12 },
    { year: '2012', cases: 12 },
    { year: '2013', cases: 15 },
    { year: '2014', cases: 22 },
    { year: '2015', cases: 5 },
    { year: '2016', cases: 14 },
    { year: '2017', cases: 9 },
    { year: '2018', cases: 3 },
    { year: '2019', cases: 1 },
    { year: '2020', cases: 4 },
    { year: '2021', cases: 3 },
    { year: '2022', cases: 2 },
    { year: '2023', cases: 1 },
];
//end

//KCSE Meangrade Trend As From 2010
const kcseTrendByYear = [
    { year: 2018, average: 5.53, boys: 5.39, girls: 5.66 },
    { year: 2019, average: 5.23, boys: 5.28, girls: 5.17 },
    { year: 2020, average: 4.73, boys: 4.67, girls: 4.78 },
    { year: 2021, average: 4.93, boys: 4.87, girls: 4.99 },
    { year: 2022, average: 5.24, boys: 5.36, girls: 5.12 },
    { year: 2023, average: 5.61, boys: 5.65, girls: 5.56 },
];
//end
//kCSE Subject Performance Analysis
const kcseSubjectPerformanceAnalysis = [
    { subject: 'English', boys: 4.54, girls: 5.5 },
    { subject: 'Kiswahili', boys: 5.59, girls: 5.77 },
    { subject: 'Mathematics', boys: 3.99, girls: 3.79 },
    { subject: 'Biology', boys: 3.87, girls: 3.87 },
    { subject: 'Chemistry', boys: 4.87, girls: 4.14 },
    { subject: 'Physics', boys: 5.12, girls: 4.12 },
    { subject: 'History', boys: 6.75, girls: 7.95 },
    { subject: 'Agriculture', boys: 7.16, girls: 6.79 },
    { subject: 'Business Std', boys: 6.78, girls: 6.94 },
    { subject: 'ReEdu', boys: 7.3, girls: 7.9 },
];
//end
//KCSE Examination Malpractice Cases Trend
const kcseExaminationMalpracticeCases = [
    { year: '2011', cases: 219 },
    { year: '2012', cases: 301 },
    { year: '2013', cases: 321 },
    { year: '2014', cases: 201 },
    { year: '2015', cases: 608 },
    { year: '2016', cases: 323 },
    { year: '2017', cases: 232 },
    { year: '2018', cases: 123 },
    { year: '2019', cases: 12 },
    { year: '2020', cases: 213 },
    { year: '2021', cases: 201 },
    { year: '2022', cases: 213 },
    { year: '2023', cases: 142 },
];
//end

const kcsePregnanceCases = [
    { year: '2011', cases: 40 },
    { year: '2012', cases: 12 },
    { year: '2013', cases: 43 },
    { year: '2014', cases: 34 },
    { year: '2015', cases: 54 },
    { year: '2016', cases: 32 },
    { year: '2017', cases: 43 },
    { year: '2018', cases: 56 },
    { year: '2019', cases: 33 },
    { year: '2020', cases: 43 },
    { year: '2021', cases: 39 },
    { year: '2022', cases: 33 },
    { year: '2023', cases: 21 },
];
//end
//Public vs Private Primary Enrollment
const publicPrivatePrimaryEnrollment = [
    { public: 16456432, private: 3456345 },
];
const publicPrivatePrimaryEnrollmentData = [
    { name: 'public', value: publicPrivatePrimaryEnrollment[0].public },
    { name: 'private', value: publicPrivatePrimaryEnrollment[0].private },
];
const publicPrivatePrimaryEnrollmentCOLORS = ['#317773', '#E2D1F9'];
//end
//Public vs Private JSS Enrollment
const publicPrivateJssEnrollment = [
    { public: 2456432, private: 456345 },
];
const publicPrivateJssEnrollmentData = [
    { name: 'public', value: publicPrivateJssEnrollment[0].public },
    { name: 'private', value: publicPrivateJssEnrollment[0].private },
];
const publicPrivateJssEnrollmentCOLORS = ['#FF69B4', '#00FFFF'];
//end

//Public vs Private Secondary Enrollment
const publicPrivateSecondaryEnrollment = [
    { public: 8456432, private: 956356 },
];
const publicPrivateSecondaryEnrollmentData = [
    { name: 'public', value: publicPrivateSecondaryEnrollment[0].public },
    { name: 'private', value: publicPrivateSecondaryEnrollment[0].private },
];
const publicPrivateSecondaryEnrollmentCOLORS = ['#89ABE3', '#EA738D'];
//end
//Enrollment Distribution Per Gender Primary
const enrollmentDistributionPerGenderPrimary = [
    { enrollment: 'Grd 1', gender: 'girls', value: 125970 },
    { enrollment: 'Grd 1', gender: 'boys', value: 125660 },
    { enrollment: 'Grd 2', gender: 'girls', value: 135550 },
    { enrollment: 'Grd 2', gender: 'boys', value: 126770 },
    { enrollment: 'Grd 3', gender: 'girls', value: 137654 },
    { enrollment: 'Grd 3', gender: 'boys', value: 136300 },
    { enrollment: 'Grd 4', gender: 'girls', value: 126300 },
    { enrollment: 'Grd 4', gender: 'boys', value: 124550 },
    { enrollment: 'Grd 5', gender: 'girls', value: 109679 },
    { enrollment: 'Grd 5', gender: 'boys', value: 103679 },
    { enrollment: 'Grd 6', gender: 'girls', value: 139665 },
    { enrollment: 'Grd 6', gender: 'boys', value: 137665 },
];

// Group data by gender
const dataEnrollmentDistributionPerGenderPrimary = enrollmentDistributionPerGenderPrimary.reduce((acc, entry) => {
    const { enrollment, gender, value } = entry;
    if (!acc[enrollment]) {
        acc[enrollment] = { enrollment };
    }
    acc[enrollment][gender] = value;
    return acc;
}, {});

// Convert grouped data to an array
const dataEnrollmentDistributionPrimary = Object.values(dataEnrollmentDistributionPerGenderPrimary);

// Define distinct colors for each gender
const dataEnrollmentDistributionPerGenderPrimaryColors = {
    total: 'red',
    boys: 'blue',
};
//end
//Enrollment Distribution Per Gender JSS
const enrollmentDistributionPerGenderJss = [
    { enrollment: 'Grade 7', gender: 'girls', value: 135970 },
    { enrollment: 'Grade 7', gender: 'boys', value: 138660 },
    { enrollment: 'Grade 8', gender: 'girls', value: 115550 },
    { enrollment: 'Grade 8', gender: 'boys', value: 116770 },
];

// Group data by gender
const dataEnrollmentDistributionPerGenderJss = enrollmentDistributionPerGenderJss.reduce((acc, entry) => {
    const { enrollment, gender, value } = entry;
    if (!acc[enrollment]) {
        acc[enrollment] = { enrollment };
    }
    acc[enrollment][gender] = value;
    return acc;
}, {});

// Convert grouped data to an array
const dataEnrollmentDistributionJss = Object.values(dataEnrollmentDistributionPerGenderJss);

// Define distinct colors for each gender
const dataEnrollmentDistributionPerGenderJssColors = {
    total: 'red',
    boys: 'blue',
};
//end
//Enrollment Distribution Per Gender Secondary
const enrollmentDistributionPerGenderSecondary = [
    { enrollment: 'Form 1', gender: 'girls', value: 145970 },
    { enrollment: 'Form 1', gender: 'boys', value: 148660 },
    { enrollment: 'Form 2', gender: 'girls', value: 125550 },
    { enrollment: 'Form 2', gender: 'boys', value: 126770 },
    { enrollment: 'Form 3', gender: 'girls', value: 117550 },
    { enrollment: 'Form 3', gender: 'boys', value: 117770 },
    { enrollment: 'Form 4', gender: 'girls', value: 118550 },
    { enrollment: 'Form 4', gender: 'boys', value: 115770 },
];

// Group data by gender
const dataEnrollmentDistributionPerGenderSecondary = enrollmentDistributionPerGenderSecondary.reduce((acc, entry) => {
    const { enrollment, gender, value } = entry;
    if (!acc[enrollment]) {
        acc[enrollment] = { enrollment };
    }
    acc[enrollment][gender] = value;
    return acc;
}, {});

// Convert grouped data to an array
const dataEnrollmentDistributionSecondary = Object.values(dataEnrollmentDistributionPerGenderSecondary);

// Define distinct colors for each gender
const dataEnrollmentDistributionPerGenderSecondaryColors = {
    total: 'red',
    boys: 'blue',
};
//end
//Learners Who Sat For KCPE vs Joined Form 1
const countrywideTransition = [
    { kcpe: 1890487, formOne: 1761497 },
];

const countrywideTransitionData = [
    { name: 'KCPE', value: countrywideTransition[0].kcpe },
    { name: 'Form One', value: countrywideTransition[0].formOne },
];

const countrywideTransitionCOLORS = ['#FFE77A', '#2C5F2D'];
//end
const FeatStat = () => {
    const [activeButton, setActiveButton] = useState('Primary');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <Grid container spacing={2} justify="center" style={{ paddingLeft: '1.5rem', paddingRight: '0.8rem', marginTop: '0px', backgroundColor: '#f4f6f8f5', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Grid item xs={12} sm={12} md={12} justifyContent="center" alignItems="center">
                <Grid container justifyContent="center">
                    <Grid item>
                        <button
                            type="button"
                            className="bg-blue-500 text-white p-1 btn-xs btn border m-1"
                            style={{
                                borderRadius: '5px',
                                backgroundColor: activeButton === 'Primary' ? 'gray' : '#36a2eb',
                                color: activeButton === 'Primary' ? 'white' : 'black',
                            }}
                            onClick={() => handleButtonClick('Primary')}
                        >
                            Analytic Summary
                        </button>
                        <button
                            type="button"
                            className="bg-blue-500 text-white p-1 btn-xs border m-1"
                            style={{
                                borderRadius: '5px',
                                backgroundColor: activeButton === 'kcpe' ? 'gray' : '#36a2eb',
                                color: activeButton === 'kcpe' ? 'white' : 'black',
                            }}
                            onClick={() => handleButtonClick('kcpe')}
                        >
                            KCPE Exam Analysis
                        </button>
                        <button
                            type="button"
                            className="bg-blue-500 text-white p-1 btn-xs border m-1"
                            style={{
                                borderRadius: '5px',
                                backgroundColor: activeButton === 'Secondary' ? 'gray' : '#36a2eb',
                                color: activeButton === 'Secondary' ? 'white' : 'black',
                            }}
                            onClick={() => handleButtonClick('Secondary')}
                        >
                            KCSE Exam Analysis
                        </button>
                        <button
                            type="button"
                            className="bg-blue-500 text-white p-1 btn-xs border m-1"
                            style={{
                                borderRadius: '5px',
                                backgroundColor: activeButton === 'Enrollment' ? 'gray' : '#36a2eb',
                                color: activeButton === 'Enrollment' ? 'white' : 'black',
                            }}
                            onClick={() => handleButtonClick('Enrollment')}
                        >
                            Enrollment
                        </button>
                        <button
                            type="button"
                            className="bg-blue-500 text-white p-1 btn-xs border m-1"
                            style={{
                                borderRadius: '5px',
                                backgroundColor: activeButton === 'Transition' ? 'gray' : '#36a2eb',
                                color: activeButton === 'Transition' ? 'white' : 'black',
                            }}
                            onClick={() => handleButtonClick('Transition')}
                        >
                            Transition
                        </button>
                    </Grid>
                </Grid>
                <hr style={{ color: 'blue', borderStyle: 'dotted' }} />
            </Grid>
            {activeButton === 'Primary' &&
                <Grid item xs={12} sm={12} md={12} style={{ backgroundColor: '#fdf8fd' }}>
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center" style={{ color: '#2563eb', fontSize: '1.125rem' }}>Analytic Summary</h2>
                    <p className="text-md leading-8  mb-3">
                        The Ministry of Education's Analytic Summary for KCPE 2023 Scorelines, KCSE 2023 Overall Performance, and Student's Enrollment provides valuable insights. It highlights the performance trends in the national examinations, identifies areas of improvement, and informs enrollment planning. The summary serves as a comprehensive assessment tool, aiding the ministry in making informed decisions and implementing effective educational policies for the benefit of students across the country.
                    </p>
                    <Grid container >
                        <Grid item xs={12} sm={4} md={4}>
                            <h2 className="text-center" style={{ color: '#9d1c1c', fontSize: 'larger', textDecoration: 'Underline', fontWeight: 600 }}>KCPE 2023 Scorelines</h2>
                            <div className="w-full" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ maxWidth: '100%' }}>
                                    <BarChart width={360} height={250} data={dataKcpe}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="marks" />
                                        <YAxis />
                                        <YAxis label={{ value: 'Students', angle: -90, position: 'insideLeft' }} />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="boys" fill={colors.boys} />
                                        <Bar dataKey="girls" fill={colors.girls} />
                                    </BarChart>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <h2 className="text-center" style={{ color: '#9d1c1c', fontSize: 'larger', textDecoration: 'Underline', fontWeight: 600 }}>KCSE 2023 Overall Performance</h2>
                            <div className="w-full" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ maxWidth: '100%' }}>
                                    <LineChart width={360} height={250} data={dataKcse}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="Grades" />
                                        <YAxis label={{ value: 'Students', angle: -90, position: 'insideLeft' }} />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="total" stroke={overallKcseGenderColors.total} />
                                        <Line type="monotone" dataKey="boys" stroke={overallKcseGenderColors.boys} />
                                        <Line type="monotone" dataKey="girls" stroke={overallKcseGenderColors.girls} />
                                    </LineChart>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3}>
                            <h2 className="text-center" style={{ color: '#9d1c1c', fontSize: 'larger', textDecoration: 'underline', fontWeight: 600 }}>Student's Enrollment Summary</h2>
                            <div className="w-full" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ maxWidth: '100%' }}>
                                    <PieChart width={300} height={250}>
                                        <Pie
                                            data={studentsEnrollmentData}
                                            dataKey="value"
                                            nameKey="name"
                                            cx="50%"
                                            cy="50%"
                                            outerRadius={80}
                                            innerRadius={30}
                                            fill="#8884d8"
                                            label
                                            labelLine={false} // Disable the label lines
                                            labelPosition="inside" // Set the label position to inside the pie
                                        >
                                            {studentsEnrollmentData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={studentsEnrollmentCOLORS[index % studentsEnrollmentCOLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip formatter={(value) => `${value} students`} />
                                        <Legend />
                                    </PieChart>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            }
            {activeButton === 'kcpe' &&
                <Grid item xs={12} sm={12} md={12} style={{ backgroundColor: '#fdf8fd' }}>
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center" style={{ color: '#2563eb', fontSize: '1.125rem' }}>KCPE Performance Analysis</h2>
                    <p className="text-md leading-8  mb-3">
                        The Ministry of Education's KCPE Performance Analysis provides a comprehensive overview of KCPE 2023 Scorelines, kcpe Overall Performance Per Year, Subject Performance Analysis, Examination Malpractice Cases, and Pregnancy Cases. This detailed analysis enables the ministry to assess the performance trends over the years, identify subjects that need improvement, address examination malpractice cases, and develop strategies to support pregnant students. By leveraging this analysis, the ministry can make data-driven decisions to enhance the quality of education and ensure a conducive learning environment for all students.
                    </p>
                    <Grid container >
                        <Grid item xs={12} sm={4} md={4}>
                            <h2 className="text-center" style={{ color: '#9d1c1c', fontSize: 'medium', textDecoration: 'Underline', fontWeight: 600 }}>KCPE 2023 Score Distribution Per Gender</h2>
                            <div className="w-full" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ maxWidth: '100%' }}>
                                    <BarChart width={360} height={260} data={dataKcpe}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="marks" />
                                        <YAxis />
                                        <YAxis label={{ value: 'Students', angle: -90, position: 'insideLeft' }} />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="boys" fill={colors.boys} barSize={30} />
                                        <Bar dataKey="girls" fill={colors.girls} barSize={30} />
                                    </BarChart>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <h2 className="text-center" style={{ color: '#9d1c1c', fontSize: 'medium', textDecoration: 'Underline', fontWeight: 600 }}>KCPE Avarage Score Trend As From 2010</h2>
                            <div className="w-full" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ maxWidth: '100%' }}>
                                    <ComposedChart width={360} height={260} data={kcpeTrendByYear}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="year" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="boys" fill="#95a7f9" barSize={30} />
                                        <Bar dataKey="girls" fill="#e795f9" barSize={30} />
                                        <Line type="monotone" dataKey="average" stroke="#ff7300" strokeWidth={3} />
                                    </ComposedChart>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <h2 className="text-center" style={{ color: '#9d1c1c', fontSize: 'medium', textDecoration: 'Underline', fontWeight: 600 }}>KCPE Subject Performance Analysis</h2>
                            <div className="w-full overflow-x-auto overflow-y-auto" style={{ maxHeight: '260px' }}>
                                <div style={{ width: 'fit-content' }}>
                                    <BarChart width={360} height={250} data={kcpeSubjectPerformanceAnalysis} layout="vertical">
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis type="number" label={{ value: 'Average (%)', position: 'insideBottom', offset: -4 }} />
                                        <YAxis dataKey="subject" type="category" interval={0} width={100} />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="boys" fill="#CCF381" barSize={19} />
                                        <Bar dataKey="girls" fill="#8884d8" barSize={19} />
                                    </BarChart>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <h2 className="text-center" style={{ color: '#9d1c1c', fontSize: 'medium', textDecoration: 'Underline', fontWeight: 600 }}>KCPE Examination Malpractice Cases Trend</h2>
                            <div className="w-full" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ maxWidth: '100%' }}>
                                    <LineChart width={600} height={250} data={kcpeExaminationMalpracticeCases}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="year" />
                                        <YAxis label={{ value: 'Students', angle: -90, position: 'insideLeft' }} />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="cases" stroke="#8884d8" />
                                    </LineChart>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <h2 className="text-center" style={{ color: '#9d1c1c', fontSize: 'medium', textDecoration: 'Underline', fontWeight: 600 }}>KCPE Pregnancy Cases Trend</h2>
                            <div className="w-full" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ maxWidth: '100%' }}>
                                    <BarChart width={600} height={250} data={kcpePregnanceCases}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="year" />
                                        <YAxis label={{ value: 'Students', angle: -90, position: 'insideLeft' }} />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="cases" fill="#AA96DA" />
                                    </BarChart>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            }
            {activeButton === 'Secondary' &&
                <Grid item xs={12} sm={12} md={22} style={{ backgroundColor: '#fdf8fd' }}>
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center" style={{ color: '#2563eb', fontSize: '1.125rem' }}>KCSE Performance Analysis</h2>
                    <p className="text-md leading-8  mb-3">
                        The Ministry of Education's KCSE Performance Analysis provides valuable insights into Grade Distribution Per Gender, kcse Overall Performance Per Year, Subject Performance Analysis, Examination Malpractice Cases, and Pregnancy Cases. This analysis enables the ministry to evaluate the performance of students based on gender, identify subjects that require improvement, address issues related to examination malpractice, and develop strategies to support pregnant students. By utilizing this analysis, the ministry can make informed decisions to promote gender equality, enhance academic performance, and create a fair and inclusive educational environment for all students.
                    </p>
                    <Grid container >
                        <Grid item xs={12} sm={4} md={4}>
                            <h2 className="text-center" style={{ color: '#9d1c1c', fontSize: 'larger', textDecoration: 'Underline', fontWeight: 600 }}>Grade Distribution Per Gender</h2>
                            <div className="w-full" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ maxWidth: '100%' }}>
                                    <LineChart width={360} height={250} data={dataKcse}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="Grades" />
                                        <YAxis label={{ value: 'Students', angle: -90, position: 'insideLeft' }} />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="total" stroke={overallKcseGenderColors.total} />
                                        <Line type="monotone" dataKey="boys" stroke={overallKcseGenderColors.boys} />
                                        <Line type="monotone" dataKey="girls" stroke={overallKcseGenderColors.girls} />
                                    </LineChart>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <h2 className="text-center" style={{ color: '#9d1c1c', fontSize: 'larger', textDecoration: 'Underline', fontWeight: 600 }}>Overall Performance Per Year</h2>
                            <div className="w-full" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ maxWidth: '100%' }}>
                                    <ComposedChart width={360} height={260} data={kcseTrendByYear}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <YAxis label={{ value: 'Meangrade', angle: -90, position: 'insideLeft' }} />
                                        <XAxis dataKey="year" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="boys" fill="#8884d8" barSize={30} />
                                        <Bar dataKey="girls" fill="#F9E795" barSize={30} />
                                        <Line type="monotone" dataKey="average" stroke="#ff7300" strokeWidth={3} />
                                    </ComposedChart>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <h2 className="text-center" style={{ color: '#9d1c1c', fontSize: 'larger', textDecoration: 'Underline', fontWeight: 600 }}>Subject Performance Analysis</h2>
                            <div className="w-full overflow-x-auto overflow-y-auto" style={{ maxHeight: '250px' }}>
                                <div style={{ width: 'fit-content' }}>
                                    <BarChart width={360} height={kcseSubjectPerformanceAnalysis.length * 40} data={kcseSubjectPerformanceAnalysis} layout="vertical">
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis type="number" label={{ value: 'Average (%)', position: 'insideBottom', offset: -4 }} />
                                        <YAxis dataKey="subject" type="category" interval={0} width={100} />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="boys" fill="#CCF381" barSize={15} />
                                        <Bar dataKey="girls" fill="#8884d8" barSize={15} />
                                    </BarChart>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <h2 className="text-center" style={{ color: '#9d1c1c', fontSize: 'larger', textDecoration: 'Underline', fontWeight: 600 }}>Examination Malpractic Cases</h2>
                            <div className="w-full" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ maxWidth: '100%' }}>

                                    <LineChart width={600} height={250} data={kcseExaminationMalpracticeCases}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="year" />
                                        <YAxis label={{ value: 'Students', angle: -90, position: 'insideLeft' }} />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="cases" stroke="#8884d8" />
                                    </LineChart>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <h2 className="text-center" style={{ color: '#9d1c1c', fontSize: 'larger', textDecoration: 'Underline', fontWeight: 600 }}>Pregnancy Cases</h2>
                            <div className="w-full" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ maxWidth: '100%' }}>
                                    <BarChart width={600} height={250} data={kcsePregnanceCases}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="year" />
                                        <YAxis label={{ value: 'Students', angle: -90, position: 'insideLeft' }} />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="cases" fill="#AA96DA" />
                                    </BarChart>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            }
            {activeButton === 'Enrollment' &&
                <Grid item xs={12} sm={12} md={22} style={{ backgroundColor: '#fdf8fd' }}>
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center mb-5" style={{ color: '#2563eb', fontSize: '1.125rem' }}>Enrollment Statistics</h2>
                    <p className="text-md leading-8  mb-3">
                        The Enrollment Statistics report of the Ministry of Education provides insights into the Public vs Private Enrollment and Enrollment Distribution Per Gender. This data allows the ministry to assess the balance between public and private schools and understand the enrollment patterns based on gender. The report aids in planning and implementing educational policies to ensure equitable access to education for all students.
                    </p>
                    <Grid container >
                        <Grid item xs={12} sm={4} md={4}>
                            <h2 className="text-center" style={{ color: '#9d1c1c', fontSize: 'larger', textDecoration: 'underline', fontWeight: 600 }}>Public vs Private  Primary Enrollment</h2>
                            <div className="w-full" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ maxWidth: '100%' }}>
                                    <PieChart width={400} height={250}>
                                        <Pie
                                            data={publicPrivatePrimaryEnrollmentData}
                                            dataKey="value"
                                            nameKey="name"
                                            cx="50%"
                                            cy="50%"
                                            outerRadius={80}
                                            innerRadius={30}
                                            fill="#8884d8"
                                            label
                                            labelLine={false} // Disable the label lines
                                            labelPosition="inside" // Set the label position to inside the pie
                                        >
                                            {publicPrivatePrimaryEnrollmentData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={publicPrivatePrimaryEnrollmentCOLORS[index % publicPrivatePrimaryEnrollmentCOLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip formatter={(value) => `${value} students`} />
                                        <Legend />
                                    </PieChart>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <h2 className="text-center" style={{ color: '#9d1c1c', fontSize: 'larger', textDecoration: 'underline', fontWeight: 600 }}>Public vs Private JSS Enrollment</h2>
                            <div className="w-full" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ maxWidth: '100%' }}>
                                    <PieChart width={400} height={250}>
                                        <Pie
                                            data={publicPrivateJssEnrollmentData}
                                            dataKey="value"
                                            nameKey="name"
                                            cx="50%"
                                            cy="50%"
                                            outerRadius={80}
                                            innerRadius={30}
                                            fill="#8884d8"
                                            label
                                            labelLine={false} // Disable the label lines
                                            labelPosition="inside" // Set the label position to inside the pie
                                        >
                                            {publicPrivateJssEnrollmentData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={publicPrivateJssEnrollmentCOLORS[index % publicPrivateJssEnrollmentCOLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip formatter={(value) => `${value} students`} />
                                        <Legend />
                                    </PieChart>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <h2 className="text-center" style={{ color: '#9d1c1c', fontSize: 'larger', textDecoration: 'underline', fontWeight: 600 }}>Public vs Private Secondary Enrollment</h2>
                            <div className="w-full" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ maxWidth: '100%' }}>

                                    <PieChart width={400} height={250}>
                                        <Pie
                                            data={publicPrivateSecondaryEnrollmentData}
                                            dataKey="value"
                                            nameKey="name"
                                            cx="50%"
                                            cy="50%"
                                            outerRadius={80}
                                            innerRadius={30}
                                            fill="#8884d8"
                                            label
                                            labelLine={false} // Disable the label lines
                                            labelPosition="inside" // Set the label position to inside the pie
                                        >
                                            {publicPrivateSecondaryEnrollmentData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={publicPrivateSecondaryEnrollmentCOLORS[index % publicPrivateSecondaryEnrollmentCOLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip formatter={(value) => `${value} students`} />
                                        <Legend />
                                    </PieChart>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <hr style={{ color: 'blue', borderStyle: 'dotted' }} />
                            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mt-5" style={{ color: '#2563eb', fontSize: '1.125rem' }}>Enrollment Distribution Per Gender</h2>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <h2 className="text-center" style={{ color: '#9d1c1c', fontSize: 'larger', textDecoration: 'Underline', fontWeight: 600 }}>Primary</h2>
                            <div className="w-full" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ maxWidth: '100%' }}>
                                    <LineChart width={400} height={250} data={dataEnrollmentDistributionPrimary}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="enrollment" />
                                        <YAxis allowDataOverflow={true} domain={['auto', 'auto']} label={{ value: 'Students', angle: -90, position: 'insideLeft' }} />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="boys" stroke={dataEnrollmentDistributionPerGenderPrimaryColors.boys} />
                                        <Line type="monotone" dataKey="girls" stroke={dataEnrollmentDistributionPerGenderPrimaryColors.girls} />
                                    </LineChart>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <h2 className="text-center" style={{ color: '#9d1c1c', fontSize: 'larger', textDecoration: 'Underline', fontWeight: 600 }}>JSS</h2>
                            <div className="w-full" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ maxWidth: '100%' }}>
                                    <LineChart width={360} height={250} data={dataEnrollmentDistributionJss}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="enrollment" />
                                        <YAxis allowDataOverflow={true} domain={['auto', 'auto']} label={{ value: 'Students', angle: -90, position: 'insideLeft' }} />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="boys" stroke={dataEnrollmentDistributionPerGenderJssColors.boys} />
                                        <Line type="monotone" dataKey="girls" stroke={dataEnrollmentDistributionPerGenderJssColors.girls} />
                                    </LineChart>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <h2 className="text-center" style={{ color: '#9d1c1c', fontSize: 'larger', textDecoration: 'Underline', fontWeight: 600 }}>SECONDARY</h2>
                            <div className="w-full" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ maxWidth: '100%' }}>
                                    <LineChart width={360} height={250} data={dataEnrollmentDistributionSecondary}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="enrollment" />
                                        <YAxis allowDataOverflow={true} domain={['auto', 'auto']} label={{ value: 'Students', angle: -90, position: 'insideLeft' }} />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="boys" stroke={dataEnrollmentDistributionPerGenderSecondaryColors.boys} />
                                        <Line type="monotone" dataKey="girls" stroke={dataEnrollmentDistributionPerGenderSecondaryColors.girls} />
                                    </LineChart>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3}>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3}>
                            <h2 className="text-center" style={{ color: '#9d1c1c', fontSize: 'larger', textDecoration: 'Underline', fontWeight: 600 }}>Pre-Vocational</h2>
                            <div className="w-full " style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ maxWidth: '100%' }}>
                                    <PieChart width={360} height={250}>
                                        <Pie
                                            data={publicPrivateJssEnrollmentData}
                                            dataKey="value"
                                            nameKey="name"
                                            cx="50%"
                                            cy="50%"
                                            outerRadius={80}
                                            fill="#8884d8"
                                            label
                                            labelLine={false} // Disable the label lines
                                            labelPosition="inside" 
                                        >
                                            {publicPrivateJssEnrollmentData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={publicPrivateJssEnrollmentCOLORS[index % publicPrivateJssEnrollmentCOLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip formatter={(value) => `${value} students`} />
                                        <Legend />
                                    </PieChart>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3}>
                            <h2 className="text-center" style={{ color: '#9d1c1c', fontSize: 'larger', textDecoration: 'Underline', fontWeight: 600 }}>Teachers Training College</h2>
                            <div className="w-full" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ maxWidth: '100%' }}>
                                    <PieChart width={400} height={250}>
                                        <Pie
                                            data={publicPrivateSecondaryEnrollmentData}
                                            dataKey="value"
                                            nameKey="name"
                                            cx="50%"
                                            cy="50%"
                                            outerRadius={80}
                                            fill="#8884d8"
                                            label
                                            labelLine={false} // Disable the label lines
                                            labelPosition="inside" // Set the label position to inside the pie
                                        >
                                            {publicPrivateSecondaryEnrollmentData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={publicPrivateSecondaryEnrollmentCOLORS[index % publicPrivateSecondaryEnrollmentCOLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip formatter={(value) => `${value} students`} />
                                        <Legend />
                                    </PieChart>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3}>
                        </Grid>
                    </Grid>
                </Grid>
            }
            {activeButton === 'Transition' &&
                <Grid item xs={12} sm={12} md={12} style={{ backgroundColor: '#fdf8fd' }}>
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center" style={{ color: '#2563eb', fontSize: '1.125rem' }}>Achieving 100% Transition</h2>

                    <h2 className="text-left mt-2 mb-1" style={{ fontWeight: 'bold' }}>Enhancing Access to Early Childhood Education</h2>
                    <p className="mt-6 text-md leading-8 t">
                    The Ministry of Education prioritizes access to quality early childhood education, creating a solid foundation for children's learning journey. By investing in centers and promoting community engagement, they ensure equal opportunities for all children to develop vital skills and foster a love for learning from a young age.
                    </p>
                    <div className="md:flex">
                        <div className="md:w-2/5 m-5">
                            <h2 className="text-left mt-2 mb-1" style={{ fontWeight: 'bold' }}>Establishing Bridging Programs for Smooth Transitions</h2>
                            <p className="mt-6 text-md leading-8 t">
                            To ensure 100% transition from KCPE (Kenya Certificate of Primary Education) to Form 1, the Ministry of Education has implemented a comprehensive support system. This includes conducting orientation programs for students and parents, providing guidance on secondary school selection, and offering transition workshops. By equipping students and parents with the necessary information and resources, the ministry aims to facilitate a smooth transition process. They also collaborate with secondary schools to coordinate curriculum alignment and provide targeted support to students who may require additional assistance. Through these strategies, the ministry strives to ensure that every student successfully transitions from primary to secondary education.
                            </p>
                        </div>
                        <div className="md:w-1/5 m-5">

                            <Grid container >
                                <Grid item xs={12} sm={7} md={7} className="mxAuto">
                                    <div className="w-full" style={{ display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ maxWidth: '100%' }}>
                                            <PieChart width={500} height={250}>
                                                <Pie
                                                    data={countrywideTransitionData}
                                                    dataKey="value"
                                                    nameKey="name"
                                                    cx="50%"
                                                    cy="50%"
                                                    outerRadius={80}
                                                    innerRadius={10}
                                                    fill="#8884d8"
                                                    label
                                                    labelLine={false} // Disable the label lines
                                                    labelPosition="inside" // Set the label position to inside the pie
                                                >
                                                    {countrywideTransitionData.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={countrywideTransitionCOLORS[index % countrywideTransitionCOLORS.length]} />
                                                    ))}
                                                </Pie>
                                                <Tooltip formatter={(value) => `${value} students`} />
                                                <Legend />
                                            </PieChart>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                        <div className="md:w-2/5 m-5">
                            <div className="w-full overflow-x-auto overflow-y-auto" style={{ maxHeight: '320px' }}>
                                <div style={{ width: 'fit-content' }}>
                                    <BarChart width={500} height={percntageTransitiongroupedData.length * 45} data={percntageTransitiongroupedData} layout="vertical">
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis type="number" />
                                        <YAxis type="category" interval={0} width={140} dataKey="County" />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="boys" fill={percntageTransitionColor[1]} name="Boys" barSize={25} />
                                        <Bar dataKey="girls" fill={percntageTransitionColor[0]} name="Girls" barSize={25} />
                                    </BarChart>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            }
        </Grid>
    );
};

export default FeatStat;