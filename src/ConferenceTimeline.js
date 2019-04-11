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
          title='Fall 2017'
          subtitle='Spoke at GHC on disabilities in tech'
          action={{
            label: 'View Details', onClick: () => window.alert('Spoke at GHC')
          }}
        />
        <TimelineEvent
          color='#9c2919'
          title='Spring 2018'
          subtitle='Spoke at SoCal CWIC on speaking at conferences'
          action={{
            label: 'View Details', onClick: () => window.alert('Spoke at SoCal CWIC')
          }}
        />
        <TimelineEvent
          color='#87a2c7'
          title='Fall 2018'
          subtitle='Spoke at Tapia on ethics in cyberdating'
          action={{
            label: 'View Details', onClick: () => window.alert('Spoke at Tapia on ethics in cyberdating')
          }}
        />
        <TimelineEvent
          color='#9c2919'
          title='Winter 2019'
          subtitle='Wrote 4 GHC Proposals'
          action={{
            label: 'View Details', onClick: () => window.alert('Wrote 4 GHC Proposals')
          }}
        />
        <TimelineEvent
          color='#87a2c7'
          title='Spring 2019'
          subtitle='Started Youtube series on conference speaking'
          action={{
            label: 'View Details', onClick: () => window.alert('Started Youtube series on conference speaking')
          }}
        />
      </Timeline>
    );
  }
}

  export default ConferenceTimeline;
