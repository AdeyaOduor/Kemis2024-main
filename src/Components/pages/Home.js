import React from 'react';
import Home from './Homepage/Feat-Header';
import About from './Homepage/Sect-About';
import FeatStats from './Homepage/Feat-Stat';
import SectPartners from './Homepage/Sect-Partners';
import SectFeature from './Homepage/Sect-Feature';
import Newsletter from './Homepage/Sect-Newsletter';
import SectLogin from './Homepage/Sect-Login';
import Flag from "../pages/Homepage/Flag"
// import charts from './Homepage/charts'
// import { Box } from '@material-ui/core';
// import BarChart from './Graphs/React-Chart';


const Homepage = () => {
  return (
    // <Box
    
      <div style={{marginTop: "90px"}}>
      <Flag/>
      
      <SectLogin />
      <FeatStats />
      {/* <charts/> */}
      {/* <About /> */}
      {/* <SectFeature /> */}
      <SectPartners />
      {/* <Newsletter /> */}
    </div>
    // </Box>
  );
}

export default Homepage;
