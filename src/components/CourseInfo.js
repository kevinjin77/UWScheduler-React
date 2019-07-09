import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Demo from './Autocomplete'

const styles = {
};

class CourseInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        form: {
          term: '',
          numCourses: 2
        }
    };
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
    const { form: {term, numCourses} } = this.state;
    return (
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
        <FormControl>
          <InputLabel htmlFor="age-simple">Age</InputLabel>
          <Select
            value={numCourses}
            onChange={this.handleChange('numCourses')}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

export default CourseInfo;