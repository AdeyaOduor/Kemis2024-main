import React, { useState } from 'react';
import axios from 'axios';
import { getCurrentUser } from '../../../../REST-API/auth/AuthProvider';
import { Link as RouterLink, useFetchers, useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { Formik, } from "formik";


const AttendanceLogin = () => {
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
            navigate('/attendance/dashboard');
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

            <div className="min-h-screen flex items-center justify-center bg-gray-100">

                <div className=" lg:mt-8 mr-4 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                        <div className="my-10 mx-8 px-4 sm:mx-auto sm:w-full sm:max-w-sm">
                            {/* Formik */}
                            <Formik

                                initialValues={{
                                    username: "",
                                    password: "",
                                }}
                                validationSchema={Yup.object().shape({
                                    username: Yup.string().max(255).required("Email is required"),
                                    password: Yup.string()
                                        .max(255)
                                        .required("Password is required"),
                                })}
                                onSubmit={(validationSchema) => {
                                    signin(validationSchema)
                                        .then(() => {
                                            handleSuccessAlertOpen();
                                        })
                                        .catch((error) => {
                                            handleErrorAlertOpen();
                                            console.log(`Login Failed: ${error.toString()}`);
                                            setErrorMessage(
                                                `Please Check username/password and try again { ${error.toString()} }`
                                            );
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
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-3">
                                            <div className="mb-3">
                                                <h2 className="text-gray-700 text-2xl font-bold">
                                                    Login
                                                </h2>
                                            </div>

                                            {/* Error Alert */}
                                            {open && (
                                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-2">
                                                    <strong className="font-bold">Error:</strong> Login
                                                    unsuccessful! {errorMessage}
                                                    <button
                                                        className="absolute top-0 right-0 px-4 py-3"
                                                        onClick={handleErrorAlertClose}
                                                    >
                                                        <span className="text-xl">×</span>
                                                    </button>
                                                </div>
                                            )}

                                            {/* Success Alert */}
                                            {successful && (
                                                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-2">
                                                    <strong className="font-bold">Success:</strong> Logged
                                                    in successfully! {message}
                                                    <button
                                                        className="absolute top-0 right-0 px-4 py-3"
                                                        onClick={handleSuccessAlertClose}
                                                    >
                                                        <span className="text-xl">×</span>
                                                    </button>
                                                </div>
                                            )}

                                            <div className="grid grid-cols-3 gap-4"></div>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                                                Username
                                            </label>
                                            <input
                                                type="text"
                                                id="username"
                                                name="username"
                                                value={values.username}
                                                onChange={handleChange}
                                                className="w-full p-2 border rounded"
                                                placeholder="Enter your username"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                value={values.password}
                                                onChange={handleChange}
                                                className="w-full p-2 border rounded"
                                                placeholder="Enter your password"
                                            />
                                        </div>

                                        <div>
                                            <button
                                                type="submit"
                                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                color="primary"
                                                disabled={isSubmitting}
                                                fullWidth
                                                size="large"
                                                variant="contained"
                                            >
                                                Sign in
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                            <p className="mt-10 text-center text-sm text-gray-500">
                                <hr className="mb-4"></hr>
                                Don't Have an account{" "}
                                <a
                                    component={RouterLink}
                                    to="http://nemis.education.go.ke/userregister.aspx"
                                    variant="h6"
                                    color="textSecondary"
                                >
                                    Use your NEMIS Credential to Login into the System.
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default AttendanceLogin;
