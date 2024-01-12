import React from 'react';
import { Outlet } from 'react-router';
import { styled } from '@material-ui/core';
import Footer from "../Footer";
import SchoolNavBar from './SchoolNavBar';

const SchoolLayoutRoot = styled('div')(
  ({ theme }) => ({
    // backgroundColor: theme.palette.background.paper,
    // display: 'flex',
    // height: '100%',
    // overflow: 'hidden',
    // width: '100%'
  })
);

const SchoolLayoutWrapper = styled('div')({
  display: 'flex',
  flex: 'auto',
  overflow: 'hidden',
  // paddingTop: 64
});

const SchoolLayoutContainer = styled('div')({
  display: 'flex',
  flex: 'auto',
  overflow: 'hidden'
});

const SchoolLayoutContent = styled('div')({
  flex: 'auto',
  height: '100%',
  overflow: 'auto'
});

const SchoolLayout = () => (
  <SchoolLayoutRoot>
    <SchoolNavBar />
    <SchoolLayoutWrapper >
      <SchoolLayoutContainer>     
        <SchoolLayoutContent>
       
         
          <Outlet />
         <Footer />
        </SchoolLayoutContent>
      </SchoolLayoutContainer>
    </SchoolLayoutWrapper >
    
  </SchoolLayoutRoot>
);

export default SchoolLayout;
