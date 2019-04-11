import React, { Component } from 'react';
import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline'
import { FaBug, FaRegCalendarCheck, FaRegFileAlt } from 'react-icons/fa'
import Project from "./Project";

class InterviewTimeline extends Component {
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
      <Timeline minEvents={3} placeholder>
        <TimelineEvent
          color='#87a2c7'
          title='Fall 2018'
          subtitle= 'Started the Youtube series'
          action={{
            label: 'View Details', onClick: () => window.alert("Started the Youtube series")
          }}
        />
        <TimelineEvent
          color='#9c2919'
          title='Continued making videos'
          subtitle='More Planning'
          action={{
            label: 'View Details', onClick: () => window.alert('Continued making videos')
          }}
        />
        <TimelineEvent
          color='#87a2c7'
          title='Spring 2019'
          subtitle='PMs at Twitch noticed my popularity in Ladies Storm Hackathons and are working with me to start a Twitch series on programming'
          action={{
            label: 'View Details', onClick: () => window.alert('PMs at Twitch noticed my popularity in Ladies Storm Hackathons and are working with me to start a Twitch series on programming')
          }}
        />

      </Timeline>
    );
  }
}

  export default InterviewTimeline;
