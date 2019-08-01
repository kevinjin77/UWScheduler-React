import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

import CourseInfo from './CourseInfo'
import ScheduleCard from './ScheduleCard'

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import EventIcon from '@material-ui/icons/Event';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const percentile = require("percentile");

const uwApiKey = "a0fa5a0445627c840d18a3cf30d89995";

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
  },
  slider: {
    padding: '30px 0'
  }
}

function GithubIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z" />
    </SvgIcon>
  );
}

function termToInt(termString) {
  const [season, year] = termString.split(' ')
  const base = (year - 2000) * 10 + 1000
  if (season === 'Winter') {
    return base + 1
  } else if (season === 'Spring') {
    return base + 5
  } else if (season === 'Fall') {
    return base + 9
  }
}

function cartesianProduct(arr) {
  return arr.reduce(function(a,b){
    return a.map(function(x){
      return b.map(function(y){
        return x.concat(y);
      })
    }).reduce(function(a,b){ return a.concat(b) },[])
  }, [[]])
}

function getTermFromQuest(scheduleString) {
  var lines = scheduleString.split('\n');
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].includes('| Undergraduate | University of Waterloo')) {
      return lines[i].slice(0, lines[i].indexOf('|') - 1);
    }
  }
}

function getCoursesFromQuest(scheduleString) {
  let courseArr = []
  let start = scheduleString.indexOf('Show Waitlisted Classes') + 24;
  let end = scheduleString.indexOf('Printer Friendly Page') - 1;
  let coursesString = scheduleString.slice(start, end);
  var lines = coursesString.split('\n');
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].includes('Status')) {
      let courseString = lines[i-1].substr(0, lines[i-1].indexOf('-')-1).replace(/\s/g, '');
      courseArr.push(courseString);
    }
  }
  return courseArr;
}

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

function isTimeConflict(start1, end1, start2, end2) {
  return ((start1.getTime() <= end2.getTime()) && (end1.getTime() >= start2.getTime()))
}

function isValidSchedule(schedule) {
  let times = schedule.map(course => {
    return {
      'start_time': new Date(`1/1/2000 ${course.classes[0].date.start_time}`),
      'end_time': new Date(`1/1/2000 ${course.classes[0].date.end_time}`),
      'weekdays': processDate(course.classes[0].date.weekdays),
    }
  })

  for (let i = 0; i < times.length - 1; ++i) {
    for (let j = i+1; j < times.length; ++j) {
      let commonDays = times[i].weekdays.filter(value => times[j].weekdays.includes(value))
      if (commonDays.length === 0) continue;
      if (isTimeConflict(times[i].start_time, times[i].end_time, times[j].start_time, times[j].end_time)) return false;
    }
  }

  return true;
}

function convertProf(prof) {
  if (!prof) return [false, false];
  let commaIndex = prof.indexOf(',')
  let spaceIndex = prof.indexOf(' ')
  let lName = prof.substring(0, commaIndex)
  let fName = spaceIndex === -1 ? prof.substring(commaIndex + 1) : prof.substring(commaIndex + 1, spaceIndex)
  return [fName, lName]
}

function calculateProfessorRating(schedule, instructorMap) {
  let sum = 0
  let numLecs = schedule.filter(course => course.section.includes('LEC')).length
  schedule.forEach(course => {
    if (course.section.includes('LEC')) {
      let prof = course.classes[0].instructors[0]
      if (!prof) {
        sum += 2.5
        return;
      }
      let [fName, lName] = convertProf(prof)
      sum += instructorMap[`${fName} ${lName}`] ? instructorMap[`${fName} ${lName}`] : 2.5
    }
  })
  schedule['professorRating'] = parseFloat((sum / numLecs) * 20)
}

function getTimes(schedule) {
  let mTimes, tTimes, wTimes, thTimes, fTimes
  mTimes = []
  tTimes = []
  wTimes = []
  thTimes = []
  fTimes = []
  schedule.forEach(course => {
    let days = processDate(course.classes[0].date.weekdays)
    days.forEach(day => {
      if (day === 'M') {
        mTimes.push(new Date(`1/1/2000 ${course.classes[0].date.start_time}`))
        mTimes.push(new Date(`1/1/2000 ${course.classes[0].date.end_time}`))
      } else if (day === 'T') {
        tTimes.push(new Date(`1/1/2000 ${course.classes[0].date.start_time}`))
        tTimes.push(new Date(`1/1/2000 ${course.classes[0].date.end_time}`))
      } else if (day === 'W') {
        wTimes.push(new Date(`1/1/2000 ${course.classes[0].date.start_time}`))
        wTimes.push(new Date(`1/1/2000 ${course.classes[0].date.end_time}`))
      } else if (day === 'Th') {
        thTimes.push(new Date(`1/1/2000 ${course.classes[0].date.start_time}`))
        thTimes.push(new Date(`1/1/2000 ${course.classes[0].date.end_time}`))
      } else if (day === 'F') {
        fTimes.push(new Date(`1/1/2000 ${course.classes[0].date.start_time}`))
        fTimes.push(new Date(`1/1/2000 ${course.classes[0].date.end_time}`))
      }
    })
  })
  let times = [mTimes, tTimes, wTimes, thTimes, fTimes]
  return times.map(time => [...new Set(time)].sort())
}

function calculateGapRating(schedule) {
  let rating = 0;
  let times = getTimes(schedule)
  times.forEach(time => {
    let numTimes = time.length
    if (numTimes <= 2) {
      rating += 2;
      return;
    }
    for (let i = 1; i < numTimes - 1; i+=2) {
      let elapsed = (time[i+1] - time[i]) / 60000
      if (elapsed <= 10) {
        rating += 2;
      } else if (elapsed > 70) {
        ++rating;
      }
    }
  })
  schedule['gapRating'] = rating * 5
}

function calculateLunchRating(schedule) {
  let lunchRating = 0;
  let times = getTimes(schedule)
  times.forEach(time => {
    let numTimes = time.length
    if (numTimes === 0 || time[0] > new Date("1/1/2000 12:30") || times[numTimes-1] < new Date("1/1/2000 12:00")) {
      lunchRating += 2
      return
    }
    let rating = 0
    for (let i = 1; i < times.length - 1; i+=2) {
      if (time[i] <= new Date("1/1/2000 14:00") && time[i+1] >= new Date("1/1/2000 11:00")) {
        let elapsed = (time[i+1] - time[i]) / 60000
        if (elapsed <= 30) {
          rating = Math.max(0, rating)
        } else if (elapsed <= 60) {
          rating = Math.max(1, rating)
        } else {
          rating = Math.max(2, rating)
        }
      }
    }
    lunchRating += rating
  })
  schedule['lunchRating'] = lunchRating * 10
}

function calculateRating(schedules, instructorMap) {
  schedules.forEach(schedule => {
    calculateProfessorRating(schedule, instructorMap)
    calculateGapRating(schedule)
    calculateLunchRating(schedule)
    schedule.overallRating = parseFloat((schedule.professorRating * 0.6 + schedule.lunchRating * 0.2 + schedule.gapRating * 0.2).toFixed(2))
  })
  schedules.sort((a, b) => b.overallRating - a.overallRating)
  // A+
  const q95 = percentile(95, schedules, schedule => schedule.overallRating).overallRating
  // A
  const q90 = percentile(90, schedules, schedule => schedule.overallRating).overallRating
  // B
  const q75 = percentile(75, schedules, schedule => schedule.overallRating).overallRating
  // C
  const q50 = percentile(50, schedules, schedule => schedule.overallRating).overallRating
  // D
  const q30 = percentile(30, schedules, schedule => schedule.overallRating).overallRating
  schedules.forEach(schedule => {
    if (schedule.overallRating >= q95) {
      schedule.grade = 'A+'
    } else if (schedule.overallRating >= q90) {
      schedule.grade = 'A'
    } else if (schedule.overallRating >= q75) {
      schedule.grade = 'B'
    } else if (schedule.overallRating >= q50) {
      schedule.grade = 'C'
    } else if (schedule.overallRating >= q30) {
      schedule.grade = 'D'
    } else {
      schedule.grade = 'F'
    }
  })
  console.log(schedules)
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: false,
        schedules: [],
        showAll: false,
        instructors: {},
        tutorials: false,
        errorMsg: ''
    };
  }

  getInstructorRatings = (courseInfoArr) => {
    let profs = []
    let linksArr = []
    courseInfoArr.forEach(course => {
      course.forEach(classe => {
        if (classe.classes[0].instructors[0] && !profs.includes(classe.classes[0].instructors[0])) {
          profs.push(classe.classes[0].instructors[0])
        }
      })
    })

    profs.forEach(prof => {
      let [fName, lName] = convertProf(prof)
      let requestString = `https://cors-anywhere.herokuapp.com/https://www.ratemyprofessors.com/find/professor/?&page=1&sid=1490&queryoption=TEACHER&queryBy=teacherName&query=${fName}+${lName}`
      linksArr.push(requestString)
    })

    let instructorMap = {}

    axios.all(linksArr.map(link => axios.get(link)))
      .then(res => {
        res = res.filter(rating => rating.data.professors.length === 1)
        res.forEach(rating => {
          let professor = rating.data.professors[0]
          instructorMap[`${professor.tFname} ${professor.tLname}`] = parseFloat(professor.overall_rating)
        })
        this.setState({
          instructors: instructorMap
        })
        this.makeSchedules(courseInfoArr)
      })
  }

  makeSchedules = (courseInfoArr) => {
    let courses = []
    courseInfoArr.forEach(course => {
      courses.push(course.filter(classe => classe.section.includes('LEC')))
      if (this.state.tutorials) {
        courses.push(course.filter(classe => classe.section.includes('TUT')))
      }
    })
    courses = courses.filter(course => course.length > 0)
    let schedules = cartesianProduct(courses).filter(schedule => isValidSchedule(schedule))
    calculateRating(schedules, this.state.instructors)
    this.setState({
      schedules: schedules,
      loading: false
    })
  }

  getInfo = (courseArr, term) => {
    let self = this;
    let linksArr = [];
    courseArr.forEach(course => {
      let firstDigit = course.search(/\d/)
      let requestString = `https://api.uwaterloo.ca/v2/terms/${term}/${course.slice(0, firstDigit)}/${course.slice(firstDigit)}/schedule.json?key=${uwApiKey}`
      linksArr.push(requestString)
    })
    
    let courseInfoArr = []
    axios.all(linksArr.map(link => axios.get(link)))
      .then(axios.spread(function (...res) {
        courseInfoArr = res.map(r => r.data);
        courseInfoArr.forEach((courseInfo, idx) => {
          if (courseInfo.meta.status !== 200 || courseInfo.data.length === 0) {
            self.setState({
              errorMsg: `${courseArr[idx]} is not being offered this term!`,
              loading: false
            })
          }
        })
        self.getInstructorRatings(courseInfoArr.map(course => course.data));
      }))
      .catch(err => {
        console.log(err)
      })
  }

  generateSchedules = (scheduleString) => {
    const term = termToInt(getTermFromQuest(scheduleString));
    const courseArr = getCoursesFromQuest(scheduleString);
    this.getInfo(courseArr, term);
  }

  handleSubmit = () => {
    this.setState({loading: true})
    let scheduleString = document.getElementById('quest-input').value;
    try {
      this.generateSchedules(scheduleString)
    }
    catch(error) {
      this.setState({loading: false, errorMsg: error})
    }
  }

  handleShowAll = () => {
    this.setState({showAll: true})
  }

  handleClose = () => {
    this.setState({errorMsg: ''})
  }

  handleTutorials = () => {
    this.setState({tutorials: !this.state.tutorials})
  }

  render() {
    return (
      <div>
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
            <Grid item xs={12} sm={6}>
              <Paper square className='courses'>
                <h2>Course Information</h2>
                <CourseInfo />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper square className='preferences'>
              <h2>Preferences</h2>
              <Typography gutterBottom>
                Rate each of the following factors from 0 (not important) to 10 (very important).
              </Typography>
              <br />
              <Typography variant="h6" component="h2">
                Professor
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                I want the best professors.
              </Typography>
              <Slider
                style={styles.slider}
                defaultValue={5}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={10}
              />
              <Typography variant="h6" component="h2">
                Gap
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                I want as few 70 minute gaps between classes as possible.
              </Typography>
              <Slider
                style={styles.slider}
                defaultValue={5}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={10}
              />
              <Typography variant="h6" component="h2">
                Lunch
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                I want to have as much time as possible for lunch.
              </Typography>
              <Slider
                style={styles.slider}
                defaultValue={5}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={10}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.tutorials}
                    onChange={this.handleTutorials}
                    color="primary"
                  />
                }
                label="Include Tutorials? (This may lead to a lot more results.)"
              />
              </Paper>
            </Grid>
          </Grid>
          <div className='submitSection'>
            {
              this.state.loading ? <CircularProgress />
              : <Button onClick={this.handleSubmit} variant="contained" color="primary">
                Generate Schedules
              </Button>
            }
          </div>
        </div>
        {this.state.schedules.length > 0 && 
          <div className='schedules'>
            <Grid style={{margin: 0}} container justify="center" spacing={2}>
              {(this.state.showAll ? this.state.schedules : this.state.schedules.slice(0, 20)).map(schedule => {
                return (
                  <Grid item>
                    <ScheduleCard instructors={this.state.instructors} schedule={schedule} />
                  </Grid>
                )
              })}
              {!this.state.showAll && this.state.schedules.length > 20 &&
                <Grid style={{display: 'flex'}} item xs={12} justify="center">
                  <Button onClick={this.handleShowAll} variant="contained" color="primary">
                    Show All ({this.state.schedules.length - 20} More)
                  </Button>
                </Grid>
              }
            </Grid>
          </div>
        }
        <Snackbar
          variant="error"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={this.state.errorMsg !== ''}
          onClose={this.handleClose}
          message={<span>{this.state.errorMsg}</span>}
        />
      </div>
    );
  }
}

export default Main;