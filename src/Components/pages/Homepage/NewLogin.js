import { CheckIcon } from "@heroicons/react/20/solid";
import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useFetchers, useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../../../REST-API/auth/AuthProvider';

import * as Yup from "yup";
import { Formik, Field, Form, useFormik } from "formik";
import axios from "axios";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { Doughnut, Tooltip as DoughnutTooltip } from 'recharts';
import { Link } from 'react-router-dom';
import image1 from "../../Assets/teachersmiling.png"

const features = [
    { name: '2023 KCPE Results&Placement', description: 'Check Here', link: '/searchresult' },
    { name: '2023 KCSE Results', description: 'Check Here', link: '/kcseresult' },
    { name: 'Report Grievances', description: 'Report Here', link: '#' },
    { name: 'Elimu Trees Monitoring', description: 'Tree Planting/Monitoring Here', link: 'http://elimutrees.education.go.ke/home' },
];

const NewLogin = () => {
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

    const signin = async (validationSchema) => {
        const username = validationSchema.username;
        const password = validationSchema.password;

        try {
            const baseurl = "http://nemis.education.go.ke/generic2/api/Users/alogin";
            //const baseurl = "http://10.104.100.83/generic2/api/Users/alogin";
            // const baseurl = "http://localhost/generic2/api/Users/alogin";
            const response = await axios.get(`${baseurl}`, {
                headers,
                params: {
                    username,
                    password,
                },
            });

            // Handle the successful response here
            if (response) {
                const userData = response.data;
                console.log(userData);
                localStorage.setItem('user', JSON.stringify(userData));
                let mydata = {
                    username: userData.username,
                    email: userData.email,
                    job_type: userData.jobTitle,
                    locked: false,
                    fullname: userData.fullNames,
                    password: userData.password,
                }
                console.log(mydata);

                // handleSaveProfile(mydata);

                setmessage('Kindly close this alert to access your dashboard.');
                console.log('Successfully logged in and user data saved to the database!');
            }
        } catch (err) {
            console.error(err.toString());
            throw err;
        }
    };

    return (
        <div 
            style={{ backgroundImage: `url(${image1})`, backgroundSize: 'cover',marginTop:'70px' }}
        >
            <div  >
                <div className="lg:w-full py-40 "
                >
                    <div className="  sm:mx-auto sm:w-full sm:max-w-sm ">
                        {/* Formik */}
                        <Formik
                            initialValues={{
                                username: "",
                                password: "",
                            }}
                            validationSchema={Yup.object().shape({
                                username: Yup.string().max(255).required("Email is required"),
                                password: Yup.string().max(255).required("Password is required"),
                            })}
                            onSubmit={(validationSchema) => {
                                signin(validationSchema)
                                    .then(() => {
                                        handleSuccessAlertOpen();
                                    })
                                    .catch((error) => {
                                        handleErrorAlertOpen();
                                        console.log(`Login Failed: ${error.toString()}`);
                                        setErrorMessage(`Please Check username/password and try again { ${error.toString()} }`);
                                    });
                            }}
                        >
                            {({
                                errors,
                                handleBlur,
                                handleChange,
                                handleSubmit,
                                isSubmitting,
                                touched,
                                values,
                            }) => (
                                <form onSubmit={handleSubmit} className="space-y-6 px-1 w-full lg:ml-20 sm:ml-0  rounded  z-10"
                                >
                                    {/* Error Alert */}
                                    {open && (
                                        <div className="absolute top-0 left-0 right-0 mt-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded z-20">
                                            <strong className="font-bold">Error:</strong> Login unsuccessful! {errorMessage}
                                            <button
                                                className="absolute top-0 right-0 px-8 py-3"
                                                onClick={handleErrorAlertClose}
                                            >
                                                <span className="text-xl">×</span>
                                            </button>
                                        </div>
                                    )}

                                    {/* Success Alert */}
                                    {successful && (
                                        <div className="absolute top-0 left-0 right-0 mt-2 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded z-20">
                                            <button
                                                className="absolute top-0 right-0 px-4 pb-6"
                                                onClick={handleSuccessAlertClose}
                                            >
                                                <span className="text-xl">×</span>
                                            </button>
                                            <strong className="font-bold pt-2">Success:</strong> Logged in successfully! {message}
                                        </div>
                                    )}

                                    <div className="mx-2">
                                        <h2 className="text-xl text-center mb-2 font-bold tracking-tight text-gray-900">
                                            Login
                                        </h2>
                                        <label
                                            htmlFor="username"
                                            className="block text-sm text-left font-small leading-4 text-gray-900"
                                        >
                                            Username
                                        </label>
                                        <div className="mt-1 ">
                                            <input
                                                id="username"
                                                name="username"
                                                type="text"
                                                placeholder="nemis username"
                                                autoComplete="username"
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                error={Boolean(touched.username && errors.username)}
                                                fullWidth
                                                helperText={touched.username && errors.username}
                                                label="Username: Nemis Username"
                                                margin="normal"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.username}
                                                variant="outlined"
                                            />
                                        </div>
                                    </div>

                                    <div className="mx-2">
                                        <div className="flex items-center justify-between w-full">
                                            <label
                                                htmlFor="password"
                                                className="block text-sm font-small leading-4 text-gray-900"
                                            >
                                                Password
                                            </label>
                                            <div className="text-sm font-small leading-4" >
                                                <Link to="http://nemis.education.go.ke/passreset.aspx" className="text-indigo-600 hover:text-indigo-500">
                                                    Forgot password?
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="mt-1">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                placeholder="nemis password"
                                                autoComplete="current-password"
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                error={Boolean(touched.password && errors.password)}
                                                fullWidth
                                                helperText={touched.password && errors.password}
                                                label="Password: NemisPassword"
                                                margin="normal"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.password}
                                                variant="outlined"
                                            />
                                        </div>
                                    </div>

                                    <div className="mx-2">
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            color="primary"
                                            disabled={isSubmitting}
                                            fullWidth
                                            size="large"
                                            variant="contained"
                                        >
                                            Sign in
                                        </button>
                                    </div>
                                    <div className="mt-1 text-center text-sm text-gray-500 w-full">
                                        {/* <hr className="mb-4"></hr> */}
                                        Don't Have an account{" "}
                                        <Link
                                            to="http://nemis.education.go.ke/userregister.aspx"
                                            variant="h6"
                                            // color="textSecondary"
                                            className="text-indigo-600 hover:text-indigo-500"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default NewLogin;

