import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

class ScheduleList extends Component {
  constructor(props) {
      super(props);
      this.state = {
          open: false
      };
  }

  componentDidMount() {
    console.log('mounted')
  }

  render() {
      return (
        <div></div>
        // <Grid style={{margin: 0}} container justify="center" spacing={2}>
        //   <Grid item>
        //     <ScheduleCard chartData={chartData} />
        //   </Grid>
        //   <Grid item>
        //     <ScheduleCard chartData={chartData} />
        //   </Grid>
        //   <Grid item>
        //     <ScheduleCard chartData={chartData} />
        //   </Grid>
        //   <Grid item>
        //     <ScheduleCard chartData={chartData} />
        //   </Grid>
        //   <Grid item>
        //     <ScheduleCard chartData={chartData} />
        //   </Grid>
        // </Grid>
      );
  }
}

export default ScheduleList;