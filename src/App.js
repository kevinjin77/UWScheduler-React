import React from 'react';
import './App.css';

import CourseInfo from './components/CourseInfo'
import ScheduleCard from './components/ScheduleCard'

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import EventIcon from '@material-ui/icons/Event';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

function GithubIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z" />
    </SvgIcon>
  );
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#24292e',
      contrastText: '#fff',
    },
    secondary: {
      main: '#fdd835',
    },
    contrastThreshold: 3,
    tonalOffset: 0.5,
  },
});

const styles = {
  root: {
    flexGrow: 1
  },
  rightIcon: {
    float: 'right'
  },
  eventIcon: {
    color: 'white',
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
    <ThemeProvider theme={theme}>
      <div style={styles.root} className='landingPage'>
        <AppBar position="static">
          <Toolbar>
            <EventIcon style={styles.eventIcon} />
            <Typography variant="h6" color="inherit" style={styles.root}>
              UWScheduler
            </Typography>
            <IconButton
              color="secondary"
              href="https://github.com/kevinjin77/UWScheduler-v2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Grid container spacing={0} className='inputForm'>
          <Grid item xs={6}>
            <Paper square className='courses'>
              <h2>Course Information</h2>
              <CourseInfo />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper square className='preferences'>
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
    </ThemeProvider>
  );
}

export default App;
