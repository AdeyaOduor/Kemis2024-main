import React from 'react';
import { AreaChart, Area, PieChart, Pie, Cell, BarChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, LineChart } from 'recharts';
//bar graph
const overallkcpePermance = [
    { marks: '0-100', studedents: 1200 },
    { marks: '101-200', studedents: 1250 },
    { marks: '201-249', studedents: 2400 },
    { marks: '250-299', studedents: 2300 },
    { marks: '300-349', studedents: 23799 },
    { marks: '350-399', studedents: 14600 },
    { marks: '400-500', studedents: 1200 },
];
const percentageTransition = [
    { County: 'Mombasa', transition: 27 },
    { County: 'Kwale', transition: 68 },
    { County: 'Kilifi', transition: 41 },
    { County: 'Tana River', transition: 79 },
    { County: 'Lamu', transition: 32 },
    { County: 'Taita-Taveta', transition: 58 },
    { County: 'Garissa', transition: 63 },
    { County: 'Wajir', transition: 76 },
    { County: 'Mandera', transition: 40 },
    { County: 'Marsabit', transition: 56 },
    { County: 'Isiolo', transition: 23 },
    { County: 'Meru', transition: 85 },
    { County: 'Tharaka-Nithi', transition: 37 },
    { County: 'Embu', transition: 72 },
    { County: 'Kitui', transition: 47 },
    { County: 'Machakos', transition: 61 },
    { County: 'Makueni', transition: 39 },
    { County: 'Nyandarua', transition: 82 },
    { County: 'Nyeri', transition: 53 },
    { County: 'Kirinyaga', transition: 49 },
    { County: 'Muranga', transition: 76 },
    { County: 'Kiambu', transition: 65 },
    { County: 'Turkana', transition: 24 },
    { County: 'West Pokot', transition: 59 },
    { County: 'Samburu', transition: 43 },
    { County: 'Trans-Nzoia', transition: 87 },
    { County: 'Uasin Gishu', transition: 50 },
    { County: 'Elgeyo-Marakwet', transition: 35 },
    { County: 'Nandi', transition: 69 },
    { County: 'Baringo', transition: 54 },
    { County: 'Laikipia', transition: 76 },
    { County: 'Nakuru', transition: 45 },
    { County: 'Narok', transition: 67 },
    { County: 'Kajiado', transition: 41 },
    { County: 'Kericho', transition: 79 },
    { County: 'Bomet', transition: 32 },
    { County: 'Kakamega', transition: 58 },
    { County: 'Vihiga', transition: 63 },
    { County: 'Bungoma', transition: 76 },
    { County: 'Busia', transition: 40 },
    { County: 'Siaya', transition: 56 },
    { County: 'Kisumu', transition: 23 },
    { County: 'Homa Bay', transition: 85 },
    { County: 'Migori', transition: 37 },
    { County: 'Kisii', transition: 72 },
    { County: 'Nyamira', transition: 47 },
    { County: 'Nairobi', transition: 61 },
];
const overallkcsePermance = [
    { Grades: 'E', studedents: 1200 },
    { Grades: 'D-', studedents: 1250 },
    { Grades: 'D', studedents: 2400 },
    { Grades: 'D+', studedents: 2300 },
    { Grades: 'C-', studedents: 23799 },
    { Grades: 'C', studedents: 14600 },
    { Grades: 'C+', studedents: 1200 },
    { Grades: 'B-', studedents: 23799 },
    { Grades: 'B', studedents: 14600 },
    { Grades: 'B+', studedents: 1200 },
    { Grades: 'A-', studedents: 23799 },
    { Grades: 'A', studedents: 14600 },
];
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
// Group data by gender
const dataKcpeByGender = overallKcpeGenderPerformance.reduce((acc, entry) => {
    const { marks, gender, value } = entry;
    if (!acc[marks]) {
        acc[marks] = { marks };
    }
    acc[marks][gender] = value;
    return acc;
}, {});
// Convert grouped data to an array
const dataKcpe = Object.values(dataKcpeByGender);
//KCSE
const overallKcseGenderPerformance = [
    { Grades: 'E', gender: 'girls', value: 900 },
    { Grades: 'E', gender: 'boys', value: 1200 },
    { Grades: 'D-', gender: 'girls', value: 1250 },
    { Grades: 'D-', gender: 'boys', value: 1270 },
    { Grades: 'D', gender: 'girls', value: 2400 },
    { Grades: 'D', gender: 'boys', value: 2300 },
    { Grades: 'D+', gender: 'girls', value: 21000 },
    { Grades: 'D+', gender: 'boys', value: 19050 },
    { Grades: 'C-', gender: 'girls', value: 23799 },
    { Grades: 'C-', gender: 'boys', value: 14600 },
    { Grades: 'C', gender: 'girls', value: 13000 },
    { Grades: 'C', gender: 'boys', value: 13100 },
    { Grades: 'C+', gender: 'girls', value: 1200 },
    { Grades: 'C+', gender: 'boys', value: 1250 },
    { Grades: 'B-', gender: 'girls', value: 23799 },
    { Grades: 'B-', gender: 'boys', value: 14600 },
    { Grades: 'B', gender: 'girls', value: 13000 },
    { Grades: 'B', gender: 'boys', value: 13100 },
    { Grades: 'B+', gender: 'girls', value: 1200 },
    { Grades: 'B+', gender: 'boys', value: 1250 },
    { Grades: 'A-', gender: 'girls', value: 23799 },
    { Grades: 'A-', gender: 'boys', value: 14600 },
    { Grades: 'A', gender: 'girls', value: 13000 },
    { Grades: 'A', gender: 'boys', value: 13100 },
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

// end of line graph

//start pie chart
const formOneEnrollment = [
    { male: 43000, female: 50459 },
];

const formOneEnrollmentData = [
    { name: 'Male', value: formOneEnrollment[0].male },
    { name: 'Female', value: formOneEnrollment[0].female },
];

const formOneEnrollmentCOLORS = ['#d9289b', '#0b0fb1'];

const formTwoEnrollment = [
    { male: 3000, female: 5459 },
];

const formTwoEnrollmentData = [
    { name: 'Male', value: formOneEnrollment[0].male },
    { name: 'Female', value: formOneEnrollment[0].female },
];

const formTwoEnrollmentCOLORS = ['#681da8', 'green'];
//end pie charts

//area chart

//end area chart

const SectInfographic = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-center" style={{ textDecoration: 'underline' }}>KCPE 2023 Analysis Summary</h1>
            <div className="md:flex">
                <div className="md:w-1/2 m-5">
                    <h2 className="text-center">Overall Performance</h2>
                    <div className="w-full overflow-x-auto">
                        <div style={{ width: 'fit-content' }}>
                            <BarChart width={600} height={400} data={overallkcpePermance}>
                                <CartesianGrid vertical={true} strokeDasharray="1" />
                                <XAxis dataKey="marks" label={{ value: 'Marks Range', position: 'insideBottom', offset: -5 }} style={{ marginBottom: '5px', fill: '#bb5252' }} />
                                <YAxis>
                                    <Label
                                        value="Number of Students"
                                        angle={-90}
                                        position="insideLeft"
                                        offset={5} // Adjust the offset as needed
                                        style={{ textAnchor: 'middle', fontSize: '14px' }}
                                        dy={-30} // Adjust the dy (vertical offset) as needed
                                    />
                                </YAxis>
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="studedents" fill="#1c9d1c" name="studedents" />
                            </BarChart>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 m-5">
                    <h2 className="text-center">Gender OverallPerformance</h2>
                    <div className="w-full overflow-x-auto">
                        <div style={{ width: 'fit-content' }}>
                            <LineChart width={600} height={400} data={dataKcpe}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="marks" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="girls" stroke="#2563eb" name="Girls" />
                                <Line type="monotone" dataKey="boys" stroke="#82ca9d" name="Boys" />
                            </LineChart>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="text-center" style={{ textDecoration: 'underline' }}>KCSE 2023 Analysis Summary</h1>
            <div className="md:flex">
                <div className="md:w-1/2 m-5">
                    <h2 className="text-center">Overall Performance</h2>
                    <div className="w-full overflow-x-auto">
                        <div style={{ width: 'fit-content' }}>
                            <BarChart width={600} height={400} data={overallkcsePermance}>
                                <CartesianGrid vertical={true} strokeDasharray="1" />
                                <XAxis dataKey="Grades" label={{ value: 'Grade', position: 'insideBottom', offset: -5 }} style={{ marginBottom: '5px', fill: '#bb5252' }} />
                                <YAxis>
                                    <Label
                                        value="Number of Students"
                                        angle={-90}
                                        position="insideLeft"
                                        offset={5} // Adjust the offset as needed
                                        style={{ textAnchor: 'middle', fontSize: '14px' }}
                                        dy={-30} // Adjust the dy (vertical offset) as needed
                                    />
                                </YAxis>
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="studedents" fill="#8884d8" name="studedents" />
                            </BarChart>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 m-5">
                    <h2 className="text-center">Gender OverallPerformance</h2>
                    <div className="w-full overflow-x-auto">
                        <div style={{ width: 'fit-content' }}>
                            <LineChart width={600} height={400} data={dataKcse}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="Grades" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="girls" stroke="#2563eb" name="Girls" />
                                <Line type="monotone" dataKey="boys" stroke="#82ca9d" name="Boys" />
                            </LineChart>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:flex" style={{ backgroundColor: '#fdf8fd' }}>
                <div className="md:w-1/2 m-5">
                    <div className="w-full overflow-x-auto">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl" style={{ color: '#2563eb', fontSize: '1.125rem' }}>Achieving 100% Transition</h2>
                        <h2 className="text-left mt-2 mb-1" style={{ fontWeight: 'bold' }}>Ministry of Education's Commitment to Seamless Student Progression</h2>
                        <p className="mt-6 text-md leading-8 t">
                            The Ministry of Education  has set a bold objective of achieving 100% transition from students who have completed their Kenya Certificate of Primary Education (KCPE) examinations to join Form One. This initiative aims to ensure that all learners who successfully pass the KCPE exams smoothly transition to the next level of education without any hindrances or obstacles.
                        </p>
                        <p className="mt-6 text-md leading-8 t">
                            To monitor and analyze the progress towards this goal, a graph depicting the transition percentages per county has been provided. This graph allows stakeholders, including policymakers, educators, and parents, to assess the performance of each county in terms of facilitating successful transitions. By utilizing this graph, Kenyans can gain valuable insights into the counties' efforts and identify areas that may require additional support or intervention.
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2 m-5">
                    <div className="w-full overflow-x-auto overflow-y-auto" style={{ maxHeight: '450px' }}>
                        <div style={{ width: 'fit-content' }}>
                            <BarChart width={550} height={percentageTransition.length * 50} data={percentageTransition} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" />
                                <YAxis dataKey="County" type="category" interval={0} width={180} />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="transition" fill="#8884d8" name="% Transitions" barSize={20} />
                            </BarChart>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:flex pt-5" style={{ backgroundColor: '#f8fff2' }}>

                <div className="md:w-3/5 m-5" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {window.innerWidth >= 768 ? (
                        <>
                            <div style={{ width: '100%' }}>
                                <h2 className="text-center mt-2 mb-1" style={{ fontWeight: 'bold' }}>Form 1 Enrollment</h2>
                                <div className="w-full overflow-x-auto overflow-y-auto" style={{ maxHeight: '450px' }}>
                                    <div style={{ width: 'fit-content' }}>
                                        <PieChart width={400} height={400}>
                                            <Pie
                                                data={formOneEnrollmentData}
                                                dataKey="value"
                                                nameKey="name"
                                                cx="50%"
                                                cy="50%"
                                                outerRadius={150}
                                                fill="#8884d8"
                                                label
                                            >
                                                {formOneEnrollmentData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={formOneEnrollmentCOLORS[index % formOneEnrollmentCOLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip formatter={(value) => `${value} students`} />
                                            <Legend />
                                        </PieChart>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: '100%' }}>
                                <h2 className="text-center mt-2 mb-1" style={{ fontWeight: 'bold' }}>Form 2 Enrollment</h2>
                                <div className="w-full overflow-x-auto overflow-y-auto" style={{ maxHeight: '450px' }}>
                                    <div style={{ width: 'fit-content' }}>
                                        <PieChart width={400} height={400}>
                                            <Pie
                                                data={formTwoEnrollmentData}
                                                dataKey="value"
                                                nameKey="name"
                                                cx="50%"
                                                cy="50%"
                                                outerRadius={150}
                                                fill="#8884d8"
                                                label
                                            >
                                                {formTwoEnrollmentData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={formTwoEnrollmentCOLORS[index % formTwoEnrollmentCOLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip formatter={(value) => `${value} students`} />
                                            <Legend />
                                        </PieChart>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div style={{ width: '100%' }}>
                                <h2 className="text-center mt-2 mb-1" style={{ fontWeight: 'bold' }}>Form 2 Enrollment</h2>
                                <div className="w-full overflow-x-auto overflow-y-auto" style={{ maxHeight: '450px' }}>
                                    <div style={{ width: 'fit-content' }}>
                                        <PieChart width={400} height={400}>
                                            <Pie
                                                data={formOneEnrollmentData}
                                                dataKey="value"
                                                nameKey="name"
                                                cx="50%"
                                                cy="50%"
                                                outerRadius={150}
                                                fill="#8884d8"
                                                label
                                            >
                                                {formOneEnrollmentData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={formOneEnrollmentCOLORS[index % formOneEnrollmentCOLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip formatter={(value) => `${value} students`} />
                                            <Legend />
                                        </PieChart>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: '100%' }}><h2>Form 2 Enrollment</h2>
                                <div className="w-full overflow-x-auto overflow-y-auto" style={{ maxHeight: '450px' }}>
                                    <div style={{ width: 'fit-content' }}>
                                        <PieChart width={400} height={400}>
                                            <Pie
                                                data={formTwoEnrollmentData}
                                                dataKey="value"
                                                nameKey="name"
                                                cx="50%"
                                                cy="50%"
                                                outerRadius={150}
                                                fill="#8884d8"
                                                label
                                            >
                                                {formOneEnrollmentData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={formTwoEnrollmentCOLORS[index % formTwoEnrollmentCOLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip formatter={(value) => `${value} students`} />
                                            <Legend />
                                        </PieChart>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                <div className="md:w-2/5 m-5">
                    <div className="w-full overflow-x-auto">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl" style={{ color: '#2563eb', fontSize: '1.125rem' }}>Secondary School Enrollment</h2>
                        <p className="mt-6 text-md leading-8 t">
                        The Ministry of Education analyzed secondary school enrollment, revealing improved access to education and narrowing gender disparities. Enrollment rates have increased, particularly for girls, promoting greater equality. The analysis identified areas with lower enrollment, guiding targeted interventions. These findings inform evidence-based decision-making, enabling effective policy development and resource allocation. The Ministry's commitment to inclusive education is evident in its efforts to enhance secondary school enrollment across the country.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SectInfographic;