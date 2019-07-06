import React from 'react';
import logo from './logo.svg';
import './App.css';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
        <div className='inputForm'>
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
        </div>
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
