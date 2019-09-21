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
import Avatar from '@material-ui/core/Avatar';
import Snackbar from '@material-ui/core/Snackbar';

import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import CourseTable from './CourseTable'
import '../main.scss'


import { Radar } from 'react-chartjs-2';

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
    width: 400,
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
  avatar: {
    backgroundColor: 'green'
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

function convertProf(prof) {
  if (!prof) return [false, false];
  let commaIndex = prof.indexOf(',')
  let spaceIndex = prof.indexOf(' ')
  let lName = prof.substring(0, commaIndex)
  let fName = spaceIndex === -1 ? prof.substring(commaIndex + 1) : prof.substring(commaIndex + 1, spaceIndex)
  return [fName, lName]
}

function getRows(schedule, instructors) {
  let lecs = schedule.filter(course => course.section.includes('LEC'))
  return lecs.map(course => {
    let prof = course.classes[0].instructors[0]
    let [fName, lName] = convertProf(prof)
    return {
      'course': `${course.subject}${course.catalog_number}`,
      'time': `${course.classes[0].date.start_time} - ${course.classes[0].date.end_time} ${course.classes[0].date.weekdays}`,
      'instructor': `${course.classes[0].instructors[0] && course.classes[0].instructors[0].replace(/,/g, ', ')}`,
      'section': `${course.section}`,
      'enrolled': `${course.enrollment_total}/${course.enrollment_capacity}`,
      'location': `${course.classes[0].location.building} ${course.classes[0].location.room}`,
      'rating': `${instructors[`${fName} ${lName}`] ? instructors[`${fName} ${lName}`] : -1}`,
      'link': `http://www.ratemyprofessors.com/search.jsp?query=${fName}+${lName}`
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
      } else if (day === 'T') {
        date = 3
      } else if (day === 'W') {
        date = 4
      } else if (day === 'Th') {
        date = 5
      } else if (day === 'F') {
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

const options = {
  responsive: false,
  maintainAspectRatio: true,
  legend: {
    display: false
  },
  scale: {
    ticks: {
      display: false,
      min: 0,
      max: 100,
      stepSize: 20,
    }
  },
  tooltips: {
    enabled: true,
    callbacks: {
        label: function(tooltipItem, data) {
            return data.datasets[tooltipItem.datasetIndex].label + ' : ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
        }
    }
  }
}

function getChartData(schedule) {
  return {
    labels: ['Gap', 'Lunch', 'Professor'],
    datasets: [{
      label: 'Rating',
      backgroundColor: "rgba(0,220,220,0.2)",
      pointBackgroundColor: "rgba(0,220,220,0.2)",
      hoverPointBackgroundColor: "#fff",
      pointHighlightStroke: "rgba(0,220,220,0.2)",
      borderColor: "rgba(0,220,220,0.2)",
      data: [schedule.gapRating, schedule.lunchRating, schedule.professorRating]
    }]
  }
}

function getMaxTime(schedule) {
  let maxTime = schedule.map(course => new Date(`1/1/2016 ${course.classes[0].date.end_time}`))
    .sort(function(a,b){return b.getTime() - a.getTime()})[0];
  return `${maxTime.getHours() + 1}:00:00`
}

function convertDate(date) {
  let year = date.substr(0, date.indexOf('-'))
  let minusYear = date.substr(date.indexOf('-') + 1);
  let month = minusYear.substr(0, minusYear.indexOf('-'));
  let day = minusYear.substr(minusYear.indexOf('-') + 1);
  return `${month}/${day}/${year}`;
}

function convertTime(time) {
  let hour = parseInt(time.substr(0, time.indexOf(':')));
  let minute = time.substr(time.indexOf(':') + 1);
  if (hour >= 12) {
    return `${(hour === 12) ? 12 : hour - 12}:${minute}PM`
  } else {
    return `${hour}:${minute}AM`
  }
}

function flowConvertCourse (course) {
  let courseProfessor = course.classes[0].instructors[0];
  let fName;
  let lName;
  if (courseProfessor) {
    let commaIndex = courseProfessor.indexOf(',');
    let spaceIndex = courseProfessor.indexOf(' ');
    lName = courseProfessor.substring(0, commaIndex);
    fName = spaceIndex === -1 ? courseProfessor.substring(commaIndex + 1) :
    courseProfessor.substring(commaIndex + 1, spaceIndex);
  } else {
    lName = '';
    fName = '';
  }
  return `
${course.subject} ${course.catalog_number} - ${course.title}
Status	Units	Grading	Deadlines
Enrolled
0.50
Numeric Grading Basis
Academic Calendar Deadlines
Class Nbr	Section	Component	Days & Times	Room	Instructor	Start/End Date
${course.class_number}
${course.section.substr(course.section.indexOf(' ') + 1)}
${course.section.substr(0, course.section.indexOf(' '))}
${course.classes[0].date.weekdays} ${convertTime(course.classes[0].date.start_time)} - ${convertTime(course.classes[0].date.end_time)}
${course.classes[0].location.building} ${course.classes[0].location.room}
${fName} ${lName}
09/04/2019 - 12/03/2019`;
}

function flowConvert(schedule) {
  let header =
    `
GO!
John Smith
My Academics
Course Selection (Undergrad only)
Search for Classes
Enroll
 	My Class Schedule	 	 	|	 	 	Shopping Cart	 	 	|	 	 	Add	 	 	|	 	 	Drop	 	 	|	 	 	Swap	 	 	|	 	 	Edit	 	 	|	 	 	Term Information	 	 	|	 	 	Exam Information	 
My Class Schedule
List View
Weekly Calendar View
Select Display Option
L
Fall 2019 | Undergraduate | University of Waterloo
Group Box
Collapse section Class Schedule Filter Options Class Schedule Filter Options 
Show Enrolled Classes
Show Dropped Classes
Show Waitlisted Classes`;

  let footer =
    `
Printer Friendly Page
Go to top iconGo to top
    `
  schedule.forEach(course => {

  })

  let courses = '';
  schedule.forEach(course => {
    courses += flowConvertCourse(course);
  })
  return header + courses + footer;
}

class ScheduleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        open: false,
        snackbar: false
    };
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false, snackbar: false})
  }

  handleSnackbarClose = () => {
    this.setState({snackbar: false})
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
          title={<Typography style={styles.cardTitle}>Overall Rating: {this.props.schedule.overallRating}</Typography>}
          avatar={<Avatar style={styles.avatar}>{this.props.schedule.grade}</Avatar>}
        />
        <div style={styles.chart}>
          <Radar data={this.props.schedule && getChartData(this.props.schedule)} options={options} redraw />
        </div>
        <Divider variant="middle" />
        <CardContent style={styles.cardContent}>
          <CourseTable data={this.props.schedule && getRows(this.props.schedule, this.props.instructors)} dense />
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
                      <CourseTable data={this.props.schedule && getRows(this.props.schedule, this.props.instructors)} />
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
                        maxTime={this.props.schedule && getMaxTime(this.props.schedule)}
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
                      title={<Typography variant="h6">Overall Rating: {this.props.schedule.overallRating}</Typography>}
                    />
                    <CardContent>
                      <div style={styles.chart}>
                        <Radar data={this.props.schedule && getChartData(this.props.schedule)} options={options} redraw />
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
                        <Button variant="contained" color="primary"
                          onClick={() => {
                            this.setState({snackbar: true})
                            navigator.clipboard.writeText(flowConvert(this.props.schedule))
                          }}>
                        UWFlow
                        </Button>
                        <Snackbar
                          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                          open={this.state.snackbar}
                          onClose={this.handleClose}
                          message={<span>Copied to Clipboard!</span>}
                        />
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