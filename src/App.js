import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Components/pages/Home";
import Services from "../src/Components/pages/Services";
import About from "../src/Components/pages/About";
import Announcement from "./Components/pages/Announcement";
import Institutions from "../src/Components/pages/Institutions";
import Contacts from "../src/Components/pages/Contacts";
import Login from "../src/Components/pages/Login";
import NoPage from "../src/Components/pages/NoPage";
import FAQs from "../src/Components/pages/FAQs";
import Navbar from "../src/Navbar"
import Footer from "./Components/pages/Footer";
// Institutions
import ECDE from "./Components/pages/Institutions/ecde";
import PrimarySchool from "./Components/pages/Institutions/PrimarySchool";
import JuniourSchool from "./Components/pages/Institutions/JuniourSchool";
import SecondarySchool from "./Components/pages/Institutions/SecondarySchool";
import TeachersTrainingColleges from "./Components/pages/Institutions/ttc";
import TVET from "./Components/pages/Institutions/tvet";
import Universities from "./Components/pages/Institutions/Universities";

//Dashboards
import DashboardBS from "./Components/pages/Bursary/DashboardBS";
import BursariesAndSchorlaships from "../src/Components/pages/Bursary/BursariesAndSchorlaships";
import BSApplicationForm from "./Components/pages/Bursary/BSApplicationForm";
import BSApplicationFormtoo from "./Components/pages/Bursary/BSApplicationFormtoo";


import { useRoutes } from 'react-router';
import routes from './routes';
import GlobalStyles from "./GlobalStyles";
import config from "./REST-API/config";
import { ThemeProvider } from "@material-tailwind/react";
import {ApiProvider} from './REST-API/api';
import {AuthProvider} from './REST-API/auth';
import theme from './utils/theme/theme';
const App = () => {
  const routing = useRoutes(routes);
  return (
    <ThemeProvider theme = {theme}>
    <GlobalStyles />
    <ApiProvider config = {config.api}>
      <AuthProvider>
    {routing}
</AuthProvider>
</ApiProvider>
</ThemeProvider>


    
    // <>
    //   <Router>
    //     <Navbar />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/services" element={<Services />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/institutions" element={<Institutions />} />
    //       <Route path="/announcements" element={<Announcement />} />
    //       <Route path="/bursariesandschorlaships" element={<BursariesAndSchorlaships />} />
    //       <Route path="/BSApplicationForm" element={<BSApplicationForm />} />
    //       <Route path="/BSApplicationFormtoo" element={<BSApplicationFormtoo />} />
    //       <Route path="/DashboardBS" element={<DashboardBS />} />
    //       <Route path="/schoolregistration" element={<SchoolRegistration />} />
    //       <Route path="/schoolregform" element={<SchoolRegForm />} />
    //       <Route path="/learnersregistration" element={<LearnersRegistration />} />
    //       <Route path="/learnersregform" element={<LearnersRegForm />} />
    //       <Route path="/dashboardlearners" element={<DashboardLearners/>} />
    //       <Route path="/contacts" element={<Contacts />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/faqs" element={<FAQs />} /> 


    //       <Route path="*" element={<NoPage />} />

    //       {/* institutions Menu */}
    //       <Route path="/ecde" element={<ECDE/>} />
    //       <Route path="/primaryschool" element={<PrimarySchool/>} />
    //       <Route path="/juniourschool" element={<JuniourSchool/>} />
    //       <Route path="/secondaryschool" element={<SecondarySchool/>} />          
    //       <Route path="/ttc" element={<TeachersTrainingColleges/>} />
    //       <Route path="tvet" element={<TVET/>} />
    //       <Route path="/universities" element={<Universities/>} />
         

    //     </Routes>
    //     <Footer />
    //   </Router>
    // </>
  );
}

export default App;