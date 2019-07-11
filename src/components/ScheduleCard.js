import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import CallMadeIcon from '@material-ui/icons/CallMade';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import '../main.scss'
import { Typography } from '@material-ui/core';

var RadarChart = require("react-chartjs").Radar;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function createData(course, time, instructor, section, enrolled, location, rating) {
  return { course, time, instructor, section, enrolled, location, rating };
}

const rows = [
  createData('CS343', '14:30 - 15:50 TTh', 'Buhr, Peter A', 'LEC 001', '0/80', 'MC 1056', 4.6),
  createData('CS349', '11:30 - 12:20 MWF', 'Avery, Jeffery', 'LEC 003', '0/180', 'MC 1056', 2.6),
  createData('CS348', '11:30 - 12:20 MWF', 'Avery, Jeffery', 'LEC 004', '0/90', 'MC 1056', 3.0),
  createData('CS350', '11:30 - 12:20 MWF', 'Avery, Jeffery', 'LEC 002', '0/80', 'MC 1056', 4.3),
  createData('CS331', '11:30 - 12:20 MWF', 'Avery, Jeffery', 'LEC 002', '0/120', 'MC 1056', 4.4)
];


const events = [
  {
    "title": "CS350 - LEC 002",
    "start": "2018-02-13T13:00",
    "end": "2018-02-13T14:20",
    "color": false
  },
  {
    "title": "CS350 - LEC 002",
    "start": "2018-02-15T13:00",
    "end": "2018-02-15T14:20",
    "color": false
  },
  {
    "title": "CS343 - LEC 001",
    "start": "2018-02-13T11:30",
    "end": "2018-02-13T12:50",
    "color": false
  },
  {
    "title": "CS343 - LEC 001",
    "start": "2018-02-15T11:30",
    "end": "2018-02-15T12:50",
    "color": false
  },
  {
    "title": "STAT331 - LEC 001",
    "start": "2018-02-13T14:30",
    "end": "2018-02-13T15:50",
    "color": false
  },
  {
    "title": "STAT331 - LEC 001",
    "start": "2018-02-15T14:30",
    "end": "2018-02-15T15:50",
    "color": false
  },
  {
    "title": "STAT331 - TUT 101",
    "start": "2018-02-16T10:30",
    "end": "2018-02-16T11:20",
    "color": "green"
  },
  {
    "title": "CS348 - LEC 001",
    "start": "2018-02-13T10:00",
    "end": "2018-02-13T11:20",
    "color": false
  },
  {
    "title": "CS348 - LEC 001",
    "start": "2018-02-15T10:00",
    "end": "2018-02-15T11:20",
    "color": false
  },
  {
    "title": "CS349 - LEC 001",
    "start": "2018-02-12T11:30",
    "end": "2018-02-12T12:20",
    "color": false
  },
  {
    "title": "CS349 - LEC 001",
    "start": "2018-02-14T11:30",
    "end": "2018-02-14T12:20",
    "color": false
  },
  {
    "title": "CS349 - LEC 001",
    "start": "2018-02-16T11:30",
    "end": "2018-02-16T12:20",
    "color": false
  }
]

const styles = {
  card: {
    maxWidth: 445,
  },
  chart: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '20px'
  },
  cardHeader: {
    background: '#24292e',
    color: 'white',
    padding: '8px 16px'
  },
  cardTitle: {
    fontWeight: 500,
    fontSize: '1rem'
  },
  cardContent: {
    paddingTop: 0,
    paddingBottom: '5px'
  },
  cardActions: {
    background: '#24292e',
    color: 'white',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  rightIcon: {
    fontSize: '1rem',
    marginLeft: '4px',
    color: 'white'
  },
  dialogTitle: {
    color: 'white',
    background: '#24292e'
  }
};

class ScheduleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        open: false
    };
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render() {
    return (
      <Card style={styles.card}>
        <CardHeader
          style={styles.cardHeader}
          action={
            <IconButton color="secondary" aria-label="Settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={<Typography style={styles.cardTitle}>Overall Rating: 67</Typography>}
        />
        <div style={styles.chart}>
          <RadarChart data={this.props.chartData} options={{legend: {display: false}}} redraw />
        </div>
        <Divider variant="middle" />
        <CardContent style={styles.cardContent}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Course</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Instructor</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.course}>
                  <TableCell component="th" scope="row">
                    {row.course}
                  </TableCell>
                  <TableCell>{row.time}</TableCell>
                  <TableCell>{row.instructor}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardActions disableSpacing style={styles.cardActions}>
          <Button  variant="contained" color="primary" size="small" onClick={this.handleOpen}>
            Detailed View
            <CallMadeIcon style={styles.rightIcon} />
          </Button>
          <Dialog
            fullWidth
            maxWidth={"xl"}
            TransitionComponent={Transition}
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="max-width-dialog-title"
          >
            <DialogTitle
              id="max-width-dialog-title"
              style={styles.dialogTitle}
            >
              Your Schedule
            </DialogTitle>
            <DialogContent>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Course</TableCell>
                    <TableCell>Section</TableCell>
                    <TableCell>Enrolled</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Instructor</TableCell>
                    <TableCell>Instructor Rating</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.course}>
                      <TableCell component="th" scope="row">
                        {row.course}
                      </TableCell>
                      <TableCell>{row.section}</TableCell>
                      <TableCell>{row.enrolled}</TableCell>
                      <TableCell>{row.time}</TableCell>
                      <TableCell>{row.location}</TableCell>
                      <TableCell>{row.instructor}</TableCell>
                      <TableCell>{row.rating}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <FullCalendar
                defaultView="timeGridWeek"
                plugins={[ timeGridPlugin ]}
                weekends={false}
                allDaySlot={false}
                minTime='8:00:00'
                maxTime='18:00:00'
                contentHeight='auto'
                header={false}
                columnHeaderFormat={{ weekday: 'short' }}
                aspectRatio={1}
                defaultDate={'2018-02-12'}
                events={events}
                />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </CardActions>
      </Card>
    );
  }
}

export default ScheduleCard;