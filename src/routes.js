import { Navbar } from '@material-tailwind/react';
import { Home } from 'heroicons-react';
import React from 'react';
import { Navigate } from 'react-router';
import Homepage from './Components/pages/Home';
import LearnersRegForm from './Components/pages/School/LearnersRegForm';
import MainLayout from './Components/MainLayout';
import About from './Components/pages/About';
import NoPage from './Components/pages/NoPage';
import ECDE from "./Components/pages/Institutions/ecde";
import PrimarySchool from './Components/pages/Institutions/PrimarySchool';
import JuniourSchool from './Components/pages/Institutions/JuniourSchool';
import SecondarySchool from './Components/pages/Institutions/SecondarySchool';
import Universities from './Components/pages/Institutions/Universities';
import TVET from './Components/pages/Institutions/tvet';
import TeachersTrainingColleges from './Components/pages/Institutions/ttc';
import ResultsSearchPage from './Components/pages/ResultsSearchPage';
import LearnersDashboard from './Components/pages/School/LearnersDashboard';
import KCSEResults from './Components/pages/KCSEResults'

//BURSARY IMPORTS
import ScholarshipsPage from "./Components/pages/Bursary/ScholarshipsPage";
import MyApplications from "./Components/pages/Bursary/MyApplications";
import Dashboard from "./Components/pages/Bursary/Dashboard";
import BAMainlayout from "./Components/pages/Bursary/BAMainlayout";
import BSApplicationForm from "./Components/pages/Bursary/BSApplicationForm";
import BursariesAndSchorlaships from "../src/Components/pages/Bursary/BursariesAndSchorlaships";
import ApplicantDetails from "./Components/pages/Bursary/ApplicantDetails";
import LogoutPage from "./Components/pages/Bursary/LogoutPage";
import OrganizationLayout from "./Components/pages/Bursary/BOrganization/OrganizationLayout";
import ViewUsers from "./Components/pages/Bursary/BOrganization/ViewUsers";
import ScholarshipTable from "./Components/pages/Bursary/BOrganization/ScholarshipTable";
import ScholarshipForm from "./Components/pages/Bursary/BOrganization/ScholarshipForm";
import AdminLayout from "./Components/pages/Bursary/Admins/AdminLayout";
import AddMember from "./Components/pages/Bursary/Admins/AddMembers";
import ViewApplicants from "./Components/pages/Bursary/Admins/ViewApplicants";
import AdminDashboard from "./Components/pages/Bursary/Admins/AdminDashboard";
import ViewReviews from "./Components/pages/Bursary/Admins/ViewReviews";
// BURSARY END

/*#############################==========SCHOOL REGISTRATION ROUTES STARTS============###################### */
                          /***********INSTITUTION OWNER**************/
import SchoolRegistration from './Components/pages/SchoolRegistration/SchoolRegistration';
import SchoolRegForm from './Components/pages/SchoolRegistration/pages/SchoolRegForm';
import SchoolRegLayout from './Components/pages/SchoolRegistration/components/SchooRegLayout';
import InstructionsOnRegistrations from './Components/pages/SchoolRegistration/pages/InstructionsOnRegistrations';
import RegDashboard from './Components/pages/SchoolRegistration/pages/RegDashboard';
import RegistrationDetails from './Components/pages/SchoolRegistration/pages/RegistrationDetails';
import Certificate from './Components/pages/SchoolRegistration/pages/Certificate';
// import Logout from './Components/pages/SchoolRegistration/pages/logout';

                          /***********DQASO/CQASOS/SQASOS**************/

import RegistrationRequests from './Components/pages/SchoolRegistration/components/QASO/RegistrationRequests';
import RecommendedRegistrations from './Components/pages/SchoolRegistration/components/QASO/RecommendedRegistrations';
import RejectedReg from './Components/pages/SchoolRegistration/components/QASO/RejectedReg';
import Dqasolayout from './Components/pages/SchoolRegistration/components/QASO/Dqasolayout';
import Dqasodashboard from './Components/pages/SchoolRegistration/components/QASO/Dqasodashboard';

                           /****************CEB************************/
import Ceblayout from './Components/pages/SchoolRegistration/components/CEB/Ceblayout';
import AwaitingApproval from './Components/pages/SchoolRegistration/components/CEB/AwaitingApproval';
import ApprovedRegs from './Components/pages/SchoolRegistration/components/CEB/ApprovedRegs';
import Cebdashboard from './Components/pages/SchoolRegistration/components/CEB/Cebdashboard';
                          /****************ADMINS*********************/


/*#############################==========SCHOOL REGISTRATION ROUTES ENDS============###################### */


// import Layout from './Components/pages/SchoolRegistration/components/Layout';
// import OrganizationLayout from './Components/pages/Bursary/BOrganization/OrganizationLayout';
// import ViewUsers from './Components/pages/Bursary/BOrganization/ViewUsers';
// import ScholarshipTable from './Components/pages/Bursary/BOrganization/ScholarshipTable';
// import ScholarshipForm from './Components/pages/Bursary/BOrganization/ScholarshipForm';
// import OrganizationDashboard from './Components/pages/Bursary/BOrganization/OrganizationDashboard';

import SchoolLayout from './Components/pages/School/SchoolLayout';

import ViewLearners from './Components/pages/School/ViewLearners';
import ReceiveLearner from './Components/pages/School/ReceiveLearner';
import ReleaseLearner from './Components/pages/School/ReleaseLearner';
import SearchLearner from './Components/pages/School/SearchLearner';

import AddLearner from './Components/pages/Attendance/pages/AddLearner';
import AddTeacher from './Components/pages/Attendance/pages/AddTeacher';
import Attendance from './Components/pages/Attendance/pages/LearnersTable';
import Login from './Components/pages/Login';
import ClassList from './Components/pages/Attendance/pages/ClassList';

import AttenanceMainlayout from './Components/pages/Attendance/components/AttenanceMainlayout';
import AttDashboard from './Components/pages/Attendance/pages/AttDashboard';
import AttendanceList from './Components/pages/Attendance/pages/AttendanceList';
import AttendanceLogin from './Components/pages/Attendance/pages/AttendanceLogin';
import ViewLearner from './Components/pages/School/ViewLearner';
import LearnerTransfer from './Components/pages/School/LearnerTransfer';
import NewLogin from './Components/pages/Homepage/NewLogin';

import Ghomepage from './Components/pages/Grievance/Ghomepage';
import GrievanceMainlayout from './Components/pages/Grievance/GrievanceMainlayout';
import GrievanceForm from './Components/pages/Grievance/GrievanceForm';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: <Homepage /> },
      { path: 'about', element: <About /> },
      { path: 'schoolregist', element: <SchoolRegistration /> },
      { path: 'bursariesandschorlaships', element: <BursariesAndSchorlaships /> },
      { path: 'qdaso', element: <Dqasodashboard /> },
      { path: 'ceb', element: <Cebdashboard /> },
      { path: 'BSApplicationForm', element: <BSApplicationForm /> },
      { path: 'attendancelogin', element: <AttendanceLogin/> },
      { path: 'searchresult', element: <ResultsSearchPage /> },
      { path: 'kcseresult', element: <KCSEResults/> },
      { path: 'NewLogin', element: <NewLogin/> },
      { path: '404', element: <NoPage /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
  {
    path: 'institutions',
    element: <MainLayout />,
    children: [
      { path: 'ecde', element: <ECDE /> },
      { path: 'primaryschool', element: <PrimarySchool /> },
      { path: 'juniourschool', element: <JuniourSchool /> },
      { path: 'secondaryschool', element: <SecondarySchool /> },
      { path: 'ttc', element: <TeachersTrainingColleges /> },
      { path: 'tvet', element: <TVET /> },
      { path: 'universities', element: <Universities /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
  {
    path: 'app',
    element: (<SchoolLayout />),
    children: [
      { path: 'school', element: <LearnersDashboard /> },
      { path:'insertLearner', element: <LearnersRegForm /> },
      {path: 'viewLearner', element: <ViewLearner/>},
      {path:'viewLearners', element:<ViewLearners/>},
      { path: 'receivelearner', element: <ReceiveLearner /> },
      { path: 'releaselearner', element: <ReleaseLearner /> },
      { path: 'searchlearner', element: <SearchLearner/> },
      { path: 'learnertransfer', element: <LearnerTransfer/> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
  


   // BURSARY START
   {
    path: "bursaries",
    element: <BAMainlayout />,
    children: [
      { path: "bdasboard", element: <Dashboard /> },
      { path: "myapplications", element: <MyApplications /> },
      { path: "applicationform", element: <BSApplicationForm /> },
      { path: "mydetails", element: <ApplicantDetails /> },
      { path: "availablescholarships", element: <ScholarshipsPage /> },
      { path: "logout", element: <LogoutPage /> },
    ],
  },
  {
    path: "borganization",
    element: <OrganizationLayout />,
    children: [
      { path: "", element: <ViewUsers /> },
      { path: "ViewUsers", element: <ViewUsers /> },
      { path: "awardscholarships", element: <ScholarshipTable /> },
      { path: "addscholarship", element: <ScholarshipForm /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      { path: "", element: <AdminDashboard /> },
      { path: "manageusers", element: <AddMember /> },
      { path: "viewreviewed", element: <ViewReviews /> },
      { path: "viewapplicants", element: <ViewApplicants /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  // BURSARY END

  {
    path: 'attendance',
    element: (<AttenanceMainlayout/>),
    children: [
      { path: '', element: <AttDashboard/>},
      { path: 'addlearner', element: <AddLearner/> },
      { path: 'classlist', element: <ClassList/> },
      { path: 'addteacher', element: <AddTeacher /> },
      { path: 'markattendance', element: <Attendance/> },
      { path: 'attendancelist', element: <AttendanceList/>},
      // { path: "logout", element: <LogoutPage /> },
      { path: 'login', element: <Login /> },
      
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
  {
    path: 'schoolregistration',
    element: <SchoolRegLayout />,
    children: [
        {path:'dashboard', element:<RegDashboard/>},
        {path:'instructions', element:<InstructionsOnRegistrations/>},
        {path:'schoolregform', element:<SchoolRegForm/>},
        {path:'regdetails', element:<RegistrationDetails/>},
        {path:'certificate', element:<Certificate/>},
        { path: '*', element: <Navigate to="/404" /> },
        { path: "logout", element: <LogoutPage/> },
    ],

},


  {
    path: 'dqaso',
    element: <Dqasolayout />,
    children: [
        {path:'regrequests', element:<RegistrationRequests/>},
        {path:'recommendedreg', element:<RecommendedRegistrations/>},
        {path:'revertedreg', element:<RejectedReg/>},
        { path: '*', element: <Navigate to="/404" /> },
    ],
},
  {
    path: 'ceb',
    element: <Ceblayout />,
    children: [
        {path:'awaitingapproval', element:<AwaitingApproval/>},
        {path:'approvedregs', element:<ApprovedRegs/>},
        // {path:'revertedreg', element:<RejectedReg/>},
        { path: '*', element: <Navigate to="/404" /> },
    ],
},

// Grievance
{
  path: "grievance",
  element: <GrievanceMainlayout/>,
  children: [
    { path: "", element: <Ghomepage/> },
    { path: "grievanceform", element: <GrievanceForm/> },
   
  ],
},

  ];
  

export default routes;