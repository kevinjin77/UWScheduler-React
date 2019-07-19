import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class CourseTable extends Component {
  render() {
    return (
      <Table size={this.props.dense ? "small" : "medium"}>
        <TableHead>
        <TableRow>
            <TableCell>Course</TableCell>
            {!this.props.dense && <TableCell>Section</TableCell>}
            {!this.props.dense && <TableCell>Enrolled</TableCell>}
            <TableCell>Time</TableCell>
            {!this.props.dense && <TableCell>Location</TableCell>}
            <TableCell>Instructor</TableCell>
            {!this.props.dense && <TableCell>Instructor Rating</TableCell>}
        </TableRow>
        </TableHead>
        <TableBody>
        {this.props.data && this.props.data.map(row => (
            <TableRow key={row.course}>
            <TableCell component="th" scope="row">{row.course}</TableCell>
            {!this.props.dense && <TableCell>{row.section}</TableCell>}
            {!this.props.dense && <TableCell>{row.enrolled}</TableCell>}
            <TableCell>{row.time}</TableCell>
            {!this.props.dense && <TableCell>{row.location}</TableCell>}
            <TableCell>{row.instructor}</TableCell>
            {!this.props.dense && <TableCell>{row.rating}</TableCell>}
            </TableRow>
        ))}
        </TableBody>
    </Table>
    );
  }
}

export default CourseTable;