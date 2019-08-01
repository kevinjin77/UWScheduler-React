import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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

class CourseInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'manual',
        form: {
          term: '',
          numCourses: 2
        }
    };
  }

  handleMode = event => {
    this.setState({
      mode: event.target.value
    })
  }

  handleChange = name => event => {
    this.setState({
      form: {
        ...this.state.form,
        [name]: event.target.value
      }
    })
  };

  render() {
    const { form: {term} } = this.state;
    return (
      <div>
        <RadioGroup aria-label="position" name="position" value={this.state.mode} onChange={this.handleMode} row>
          <FormControlLabel
            style={styles.leftRadio}
            checked={this.state.mode === 'manual'}
            value="manual"
            control={<Radio />}
            label="Manual Entry"
            labelPlacement="end"
          />
          <FormControlLabel
            checked={this.state.mode === 'quest'}
            value="quest"
            control={<Radio />}
            label="Import From Quest"
            labelPlacement="end"
          />
        </RadioGroup>
        {this.state.mode === 'manual' ? 
          <form noValidate autoComplete="off">
            <TextField
              id="term"
              label="Term"
              value={term}
              onChange={this.handleChange('term')}
              margin="normal"
            />
            <br/>
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