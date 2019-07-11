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
              id="quest-input"
              label="Paste Here!"
              margin="normal"
              fullWidth
              variant="outlined"
              multiline
              rows="12"
              rowsMax="12"
            />
          </div>
        }
      </div>
    );
  }
}

export default CourseInfo;