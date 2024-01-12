import React from 'react';
import { Grid } from '@mui/material';
const flag = () => {
    return (
        <Grid container style={{ marginTop: "-10", position: 'fixed', zIndex: 1909 }}>
            <Grid item xs={12} sm={12} md={12} style={{ margin: '0', backgroundColor: 'black', height:'2px' }}>
            </Grid>
            <Grid item xs={12} sm={12} md={12} style={{ margin: '0', backgroundColor: 'white', height:'2px' }}>
            </Grid>
            <Grid item xs={12} sm={12} md={12} style={{ margin: '0', backgroundColor: 'red', height:'2px' }}>
            </Grid>
            <Grid item xs={12} sm={12} md={12} style={{ margin: '0', backgroundColor: 'white', height:'2px' }}>
            </Grid>
            <Grid item xs={12} sm={12} md={12} style={{ margin: '0', backgroundColor: 'green', height:'2px' }}>
            </Grid>
            <Grid item xs={12} sm={12} md={12} style={{ margin: '0', backgroundColor: 'white', height:'2px' }}>
            </Grid>
        </Grid>
    );
};

export default flag;