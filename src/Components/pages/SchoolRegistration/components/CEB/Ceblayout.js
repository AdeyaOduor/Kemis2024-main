import React from 'react';
import { Outlet } from 'react-router';
import { styled } from '@material-ui/core';
import SchoolRegNavbar from '../SchoolRegNavbar';
import CebSidebar from './CebSidebar';
//import QSidebar from '../QSidebar';

const MainLayoutRoot = styled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  })
);

const MainLayoutWrapper = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  // paddingTop: 64
});

const MainLayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const MainLayoutContent = styled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
});

const Ceblayout = () => (
  <MainLayoutRoot>
      <CebSidebar/>
    <MainLayoutWrapper>

      <MainLayoutContainer>

        <MainLayoutContent>
        <SchoolRegNavbar/>

        {/* <Navbar /> */}
         
          <Outlet />

        </MainLayoutContent>
      </MainLayoutContainer>
    </MainLayoutWrapper>
  </MainLayoutRoot>
);

export default Ceblayout;
