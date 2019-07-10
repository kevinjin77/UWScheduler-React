import React from 'react';
import './App.css';

import CourseInfo from './components/CourseInfo'
import ScheduleCard from './components/ScheduleCard'

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import EventIcon from '@material-ui/icons/Event';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
  eventIcon: {
    paddingRight: '10px'
  }
}

const chartData = {
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

function App() {
  return (
    <div>
      <div className='landingPage'>
        <AppBar position="static">
          <Toolbar>
            <EventIcon style={styles.eventIcon} />
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
        <Grid style={{margin: 0}} container justify="center" spacing={2}>
          <Grid item>
            <ScheduleCard chartData={chartData} />
          </Grid>
          <Grid item>
            <ScheduleCard chartData={chartData} />
          </Grid>
          <Grid item>
            <ScheduleCard chartData={chartData} />
          </Grid>
          <Grid item>
            <ScheduleCard chartData={chartData} />
          </Grid>
          <Grid item>
            <ScheduleCard chartData={chartData} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
