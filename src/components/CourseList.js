import React, { Component } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class CourseList extends Component {
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
        <List dense>
          {state.courses.map((course, index) => {
            return (
              <ListItem key={index}>
                <ListItemText
                  primary={course}
                  secondary={index}
                />
                <ListItemSecondaryAction>
                  <IconButton onClick={handleDelete(index)} edge="end" aria-label="Delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            )
          }
          )}
        </List>
      );
    }
  }
  
  export default CourseList;