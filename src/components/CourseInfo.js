import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Demo from './Autocomplete'

const styles = {
  leftRadio: {
    paddingRight: '5vw'
  },
  instructions: {
    fontSize: '14px'
  }
};

const mockQuest =
`
GO!
Kevin Jin
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
Show Waitlisted Classes
CS 343 - Concurrent and Parallel Prog
Status	Units	Grading	Deadlines
Enrolled
0.50
Numeric Grading Basis
Academic Calendar Deadlines
Class Nbr	Section	Component	Days & Times	Room	Instructor	Start/End Date
6317
101
TST
W 7:00PM - 8:50PM
TBA
Staff
10/30/2019 - 10/30/2019
6169
002
LEC
TTh 2:30PM - 3:50PM
MC 4020
Peter Buhr
09/04/2019 - 12/03/2019
CS 348 - Intro to Database Management
Status	Units	Grading	Deadlines
Enrolled
0.50
Numeric Grading Basis
Academic Calendar Deadlines
Class Nbr	Section	Component	Days & Times	Room	Instructor	Start/End Date
6395
101
TST
F 4:30PM - 6:00PM
TBA
Staff
11/01/2019 - 11/01/2019
6041
002
LEC
TTh 4:00PM - 5:20PM
E2 1732
David Toman
09/04/2019 - 12/03/2019
CS 349 - User Interfaces
Status	Units	Grading	Deadlines
Enrolled
0.50
Numeric Grading Basis
Academic Calendar Deadlines
Class Nbr	Section	Component	Days & Times	Room	Instructor	Start/End Date
6318
001
LEC
MWF 11:30AM - 12:20PM
MC 1056
Jeffery Avery
09/04/2019 - 12/03/2019
MUSIC 246 - Soundtracks: Music in Film
Status	Units	Grading	Deadlines
Enrolled
0.50
Numeric Grading Basis
Academic Calendar Deadlines
Class Nbr	Section	Component	Days & Times	Room	Instructor	Start/End Date
4406
001
LEC
T 7:00PM - 9:50PM
AL 113
Simon Wood
09/04/2019 - 12/03/2019
STAT 331 - Applied Linear Models
Status	Units	Grading	Deadlines
Enrolled
0.50
Numeric Grading Basis
Academic Calendar Deadlines
Class Nbr	Section	Component	Days & Times	Room	Instructor	Start/End Date
6569
101
TUT
F 10:30AM - 11:20AM
AHS 1689
Leilei Zeng
09/06/2019 - 09/06/2019
 
 	
 
F 10:30AM - 11:20AM
AHS 1689
Leilei Zeng
09/20/2019 - 09/20/2019
 
 	
 
F 10:30AM - 11:20AM
AHS 1689
Leilei Zeng
10/04/2019 - 10/04/2019
 
 	
 
F 10:30AM - 11:20AM
AHS 1689
Leilei Zeng
11/01/2019 - 11/01/2019
 
 	
 
F 10:30AM - 11:20AM
AHS 1689
Leilei Zeng
11/15/2019 - 11/15/2019
 
 	
 
F 10:30AM - 11:20AM
AHS 1689
Leilei Zeng
11/29/2019 - 11/29/2019
6306
002
LEC
TTh 11:30AM - 12:50PM
STC 0010
Leilei Zeng
09/04/2019 - 12/03/2019
Printer Friendly Page
Go to top iconGo to top
`

let termMap = [];

function getTermMap() {
  let terms = [];
  let termNums = []
  const today = new Date();
  const currMonth = today.getMonth() + 1;
  const currYear = today.getFullYear();
  const initTerm = 1100 + ((currYear - 2010) * 10 + 1 + 4 * Math.floor((currMonth - 1)/4))
  if (currMonth >= 1 && currMonth <= 4) {
    terms = ['Fall ' + (currYear-1), 'Winter ' + currYear, 'Spring ' + currYear]
    termNums = [initTerm - 2, initTerm, initTerm + 4]
  } else if (currMonth >= 5 && currMonth <= 8) {
    terms = ['Winter ' + currYear, 'Spring ' + currYear, 'Fall ' + currYear]
    termNums = [initTerm - 4, initTerm, initTerm + 4]
  } else if (currMonth >= 9 && currMonth <= 12) {
    terms = ['Spring ' + currYear, 'Fall ' + currYear, 'Winter ' + (currYear+1)]
    termNums = [initTerm - 4, initTerm, initTerm + 2]
  }

  for (let i = 0; i < terms.length; ++i) {
    termMap.push([terms[i], termNums[i]]);
  }
}

class CourseInfo extends Component {
  constructor(props) {
    super(props);
    this.handleMode = this.handleMode.bind(this);
    this.handleTerm = this.handleTerm.bind(this);
  }

  componentWillMount = () => {
    getTermMap();
  }

  handleTerm = event => {
    this.props.onHandleTerm(event.target.value)
  }

  handleMode = event => {
    this.props.onHandleMode(event.target.value)
  }

  render() {
    const mode = this.props.mode;
    const term = this.props.term;
    const courses = this.props.courses;
    return (
      <div>
        <RadioGroup aria-label="position" name="position" value={mode} onChange={this.handleMode} row>
          <FormControlLabel
            style={styles.leftRadio}
            checked={mode === 'quest'}
            value="quest"
            control={<Radio />}
            label="Import From Quest"
            labelPlacement="end"
          />
          <FormControlLabel
            checked={mode === 'manual'}
            value="manual"
            control={<Radio />}
            label="Manual Entry"
            labelPlacement="end"
          />
        </RadioGroup>
        {mode === 'manual' ? 
          <form noValidate autoComplete="off">
            <FormControl style={{width: '150px'}}>
              <InputLabel htmlFor="term-helper">Term</InputLabel>
              <Select value={term} onChange={this.handleTerm}>
                {termMap.map(termEntry => {
                  return (<MenuItem value={termEntry[1]}>{termEntry[0]}</MenuItem>)
                })}
              </Select>
            </FormControl>
            <br/><br/>
            <Demo />
          </form> :
          <div>
            <p style={styles.instructions}>
              1. <a 
              href="https://quest.pecs.uwaterloo.ca/psp/SS/?cmd=login&languageCd=ENG"
              target="_blank" 
              rel="noopener noreferrer">Sign in to Quest</a> and click <b>Enroll</b>. <br/><br/>
              2. Click the <b>My Class Schedule</b> tab. <br/><br/>
              3. Select all and copy. (List View) <br/><br/>
              4. Paste into the box below! <br/><br/>
              5. Click the "Generate Schedules" button below. <br/>
            </p>
            <TextField
              ref="questInput"
              id="quest-input"
              label="Paste Here!"
              margin="normal"
              fullWidth
              variant="outlined"
              multiline
              rows="12"
              rowsMax="12"
              value={mockQuest}
            />
          </div>
        }
      </div>
    );
  }
}

export default CourseInfo;