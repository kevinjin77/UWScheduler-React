import React from 'react';
import './App.css';

import CourseInfo from './components/CourseInfo'
import ScheduleCard from './components/ScheduleCard'

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
}

var chartData = {
  labels: ['Gap', 'Lunch', 'Professor'],
  datasets: [{
    label: 'Rating',
    fillColor: "rgba(0,220,220,0.2)",
    strokeColor: "rgba(0,220,220,1)",
    pointColor: "rgba(0,220,220,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(220,220,220,1)",
    data: [20, 10, 4]
  }]
}

var chartOptions = {
  legend: {
    display: false
  }
}

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
        <div className='submitSection'>
          <Button variant="contained" color="primary">
            Generate Schedules
          </Button>
        </div>
      </div>
      <div className='schedules'>
        <Grid container justify="center" spacing={2}>
          <Grid item>
            <ScheduleCard chartData={chartData} chartOptions={chartOptions} />
          </Grid>
          <Grid item>
            <ScheduleCard chartData={chartData} chartOptions={chartOptions} />
          </Grid>
          <Grid item>
            <ScheduleCard chartData={chartData} chartOptions={chartOptions} />
          </Grid>
          <Grid item>
            <ScheduleCard chartData={chartData} chartOptions={chartOptions} />
          </Grid>
          <Grid item>
            <ScheduleCard chartData={chartData} chartOptions={chartOptions} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
