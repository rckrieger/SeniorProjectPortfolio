import React, { Component } from 'react';
import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline'
import { FaBug, FaRegCalendarCheck, FaRegFileAlt } from 'react-icons/fa'
import Project from "./Project";

class ConferenceTimeline extends Component {
  constructor(props) {
    super(props);
    this.props = {
      events: props.events,
    };
  }

  render() {
    let MaySubtitle = "Created budget \n Applied for Ignite CS grant\n" +
      "wrote + publicized volunteer applications: https://forms.gle/L8gXqRp5sEW53LR16\n" +
      "evaluated nearly 90 responses: https://docs.google.com/spreadsheets/d/1sKEh3ZjUEZmID2Vxp3DQEOOXyf8ld6fBMBCLWGtjty4/edit?usp=sharing";
    return (
      <Timeline minEvents={4} placeholder>
        <TimelineEvent
          color='#87a2c7'
          title='May'
          subtitle= 'Started Planning'
          action={{
            label: 'View Details', onClick: () => window.alert("Created budget \n Applied for Ignite CS grant\n" +
              "wrote + publicized volunteer applications: https://forms.gle/L8gXqRp5sEW53LR16\n" +
              "evaluated nearly 90 responses: https://docs.google.com/spreadsheets/d/1sKEh3ZjUEZmID2Vxp3DQEOOXyf8ld6fBMBCLWGtjty4/edit?usp=sharing\n" +
            "researched low income neighborhoods to pick the most beneficial location")
          }}
        />
        <TimelineEvent
          color='#87a2c7'
          title='June'
          subtitle='More Planning'
          action={{
            label: 'View Details', onClick: () => window.alert('Organized team meetings \nSolicited funding\nConvinced Microsoft to Loan us 80 laptops')
          }}
        />
        <TimelineEvent
          color='#9c2919'
          title='July'
          subtitle='Started teaching'
          action={{
            label: 'View Details', onClick: () => window.alert('Started running camp')
          }}
        />
        <TimelineEvent
          color='#9c2919'
          title='August'
          subtitle='More Teaching'
          action={{
            label: 'View Details', onClick: () => window.alert('continued running camp')
          }}
        />
      </Timeline>
    );
  }
}

  export default ConferenceTimeline;
