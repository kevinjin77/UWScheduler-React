import React from 'react';
import './App.css';

import CourseInfo from './components/CourseInfo'

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div>
      <div className='landingPage'>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              UWScheduler
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container spacing={0} className='inputForm'>
          <Grid item xs={6}>
            <Paper className='courses'>
              <h2>Course Information</h2>
              <CourseInfo />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className='preferences'>
            <h2>Preferences</h2>
            </Paper>
          </Grid>
        </Grid>
        {/* <div className='inputForm'>
          <div className='courses'>
            <Paper className='paper'>
              Test
            </Paper>
          </div>
          <div className='preferences'>
            <Paper className='paper'>
              Test 2
            </Paper>
          </div>
        </div> */}
        <div className='submitSection'>
          <Button variant="contained" color="primary">
            Generate Schedules
          </Button>
        </div>
      </div>
      <div className='schedules'></div>
    </div>
  );
}

export default App;
