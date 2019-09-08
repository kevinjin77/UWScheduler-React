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
    this.handleQuest = this.handleQuest.bind(this);
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

  handleQuest = event => {
    this.props.onHandleQuest(event.target.value)
  }

  render() {
    const mode = this.props.mode;
    const term = this.props.term;
    const quest = this.props.quest;
    return (
      <div>
        <RadioGroup aria-label="position" name="position" value={mode} onChange={this.handleMode} row>
          <FormControlLabel
            style={styles.leftRadio}
            checked={mode === 'manual'}
            value="manual"
            control={<Radio />}
            label="Manual Entry"
            labelPlacement="end"
          />
          <FormControlLabel
            checked={mode === 'quest'}
            value="quest"
            control={<Radio />}
            label="Import From Quest"
            labelPlacement="end"
          />
        </RadioGroup>
        {mode === 'manual' ? 
          <div>
            <FormControl style={{width: '150px'}}>
              <InputLabel htmlFor="term-helper">Term</InputLabel>
              <Select value={term} onChange={this.handleTerm}>
                {termMap.map(termEntry => {
                  return (<MenuItem key={termEntry[0]} value={termEntry[1]}>{termEntry[0]}</MenuItem>)
                })}
              </Select>
            </FormControl>
            <br/><br/>
            <Demo />
          </div> :
          <div>
            <p style={styles.instructions}>
              1. <a 
              href="https://quest.pecs.uwaterloo.ca/psp/SS/?cmd=login&languageCd=ENG"
              target="_blank" 
              rel="noopener noreferrer">Sign in to Quest</a> and click <b>My Class Schedule</b>. <br/><br/>
              2. Select all and copy. (List View) <br/><br/>
              3. Paste into the box below! <br/><br/>
              4. Click the "Generate Schedules" button below. <br/>
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
              value={quest}
              onChange={this.handleQuest}
            />
          </div>
        }
      </div>
    );
  }
}

export default CourseInfo;