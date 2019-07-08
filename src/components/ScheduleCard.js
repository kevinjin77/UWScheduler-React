import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CallMadeIcon from '@material-ui/icons/CallMade';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import '../main.scss'

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

const styles = {
  card: {
    maxWidth: 445,
  },
  chart: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardContent: {
    paddingTop: 0,
    paddingBottom: '5px'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  rightIcon: {
    fontSize: '1rem',
    marginLeft: '4px'
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
          avatar={
            <Avatar aria-label="Recipe">
              #1
            </Avatar>
          }
          action={
            <IconButton aria-label="Settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Overall Rating: 67"
        />
        <div style={styles.chart}>
          <RadarChart data={this.props.chartData} options={this.props.chartOptions}/>
        </div>
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
          <Button size="small" onClick={this.handleOpen}>
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
            <DialogTitle id="max-width-dialog-title">Your Schedule</DialogTitle>
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
                events={[
                  { title: 'event 1', date: '2019-04-01' },
                  { title: 'event 2', date: '2019-04-02' }
                ]}
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