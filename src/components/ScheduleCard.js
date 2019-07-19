import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import CallMadeIcon from '@material-ui/icons/CallMade';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import CourseTable from './CourseTable'
import '../main.scss'


var RadarChart = require("react-chartjs").Radar;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const styles = {
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
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
  cardHeaderDialog: {
    background: '#24292e',
    color: 'white',
    padding: '16px 16px'
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
    background: '#fdd835'
  },
  paper: {
    padding: '16px'
  }
};

// const chartData = {
//   labels: ['Gap', 'Lunch', 'Professor'],
//   datasets: [{
//     label: 'Rating',
//     fillColor: "rgba(0,220,220,0.2)",
//     strokeColor: "rgba(0,220,220,1)",
//     pointColor: "rgba(0,220,220,1)",
//     pointStrokeColor: "#fff",
//     pointHighlightFill: "#fff",
//     pointHighlightStroke: "rgba(220,220,220,1)",
//     data: [20, 10, 4]
//   }]
// }

function processDate(weekdays) {
  var index = 0;
  var dayList = [];
  if (weekdays === null) {
    return dayList;
  }
  if (index < weekdays.length && weekdays[index] === 'M') {
    dayList.push("M")
    index++
  }
  if (index < weekdays.length && weekdays[index] === 'T' && (index + 1 === weekdays.length ? true : weekdays[index + 1] !== 'h')) {
    dayList.push("T")
    index++;
  }
  if (index < weekdays.length && weekdays[index] === 'W') {
    dayList.push("W")
    index++;
  }
  if ((index + 1) < weekdays.length && weekdays[index] === 'T' && (index + 1 === weekdays.length ? true : weekdays[index + 1] === 'h')) {
    dayList.push("Th")
    index += 2;
  }
  if (index < weekdays.length && weekdays[index] === 'F') {
    dayList.push("F")
    index++;
  }
  return dayList;
}

function getRows(schedule) {
  let lecs = schedule.filter(course => course.section.includes('LEC'))
  return lecs.map(course => {
    return {
      'course': `${course.subject}${course.catalog_number}`,
      'time': `${course.classes[0].date.start_time} - ${course.classes[0].date.end_time} ${course.classes[0].date.weekdays}`,
      'instructor': `${course.classes[0].instructors[0].replace(/,/g, ', ')}`,
      'section': `${course.section}`,
      'enrolled': `${course.enrollment_total}/${course.enrollment_capacity}`,
      'location': `${course.classes[0].location.building} ${course.classes[0].location.room}`,
      'rating': 0,
    }
  })
}

function getEvents(schedule) {
  let events = []
  schedule.forEach(course => {
    let weekdays = processDate(course.classes[0].date.weekdays);
    weekdays.forEach(day => {
      let date
      if (day === 'M') {
        date = 2
      } else if (day == 'T') {
        date = 3
      } else if (day == 'W') {
        date = 4
      } else if (day == 'Th') {
        date = 5
      } else if (day == 'F') {
        date = 6
      }
      events.push(
        {
          'title': `${course.subject}${course.catalog_number} - ${course.section}`,
          'start': `2018-02-1${date}T${course.classes[0].date.start_time}`,
          'end': `2018-02-1${date}T${course.classes[0].date.end_time}`,
          'color': `${course.section.includes('LEC') ? '#2196f3' : '#4caf50'}`
        }
      )
    })
  })

  return events
}

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
          <CourseTable data={this.props.schedule && getRows(this.props.schedule)} dense />
        </CardContent>
        <CardActions disableSpacing style={styles.cardActions}>
          <Button variant="contained" color="primary" size="small" onClick={this.handleOpen}>
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
              <Grid style={{margin: 0}} container justify="center" spacing={2}>
                <Grid item xs={12}>
                  <Card elevation={3}>
                    <CardHeader
                      style={styles.cardHeaderDialog}
                      title={<Typography variant="h6">Time Table</Typography>}
                    />
                    <CardContent>
                      <CourseTable data={this.props.schedule && getRows(this.props.schedule)} />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={9}>
                  <Card elevation={3}>
                    <CardHeader
                      style={styles.cardHeaderDialog}
                      title={<Typography variant="h6">Calendar</Typography>}
                    />
                    <CardContent>
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
                        events={this.props.schedule && getEvents(this.props.schedule)}
                        />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Card elevation={3}>
                    <CardHeader
                      style={styles.cardHeaderDialog}
                      title={<Typography variant="h6">Overall Rating: 67</Typography>}
                    />
                    <CardContent>
                      <div style={styles.chart}>
                        <RadarChart data={this.props.chartData} options={{legend: {display: false}}} redraw />
                      </div>
                    </CardContent>
                  </Card>
                  <br />
                  <Card elevation={3}>
                    <CardHeader
                      style={styles.cardHeaderDialog}
                      title={<Typography variant="h6">Actions</Typography>}
                    />
                    <CardContent style={{paddingTop: 0}}>
                      <p style={{fontSize: '14px'}}>Export Schedule to:</p>
                      <div style={{...styles.center, flexDirection: 'column'}}>
                        <Button variant="contained" color="primary">
                        UWFlow
                        </Button>
                        <br/>
                        <Button variant="contained" color="primary">
                          Google Calendar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
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