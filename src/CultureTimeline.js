import React, { Component } from 'react';
import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline'
import { FaBug, FaRegCalendarCheck, FaRegFileAlt } from 'react-icons/fa'
import Project from "./Project";

class CultureTimeline extends Component {
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
      <Timeline minEvents={5} placeholder>
        <TimelineEvent
          color='#9c2919'
          title='Spring 2017'
          subtitle= 'Campaigned unsuccessfully for Apple to offer Female cut shirts.
          Asked to advice the creation of an Employess with disabilities employee resource group.'
          action={{
            label: 'View Details', onClick: () => window.alert("Campaigned unsucessfully for Apple to offer Female cut shirts.\n" +
              "\nAsked to advice the creation of an Employess with disabilities employee resource group.")
          }}
        />
        <TimelineEvent
          color='#87a2c7'
          title='Summer 2017'
          subtitle='Met with the CEO of GoDaddy to discuss the creation of an accessibility engineering group.'
          action={{
            label: 'View Details', onClick: () => window.alert('Met with the CEO of GoDaddy to discuss the creation of an accessibility engineering group.')
          }}
        />
        <TimelineEvent
          color='#9c2919'
          title='Summer 2018'
          subtitle='Petitioned Microsoft to offer female-cut shirts as a sign of accepting women and being less male-normative.
          Worked with the Chief Diversity Officer, Chief of People Operations, and Chief Accessibility Officer on an initiative
          to encourage more applicants to feel comfortable disclosing disability to employers'
          action={{
            label: 'View Details', onClick: () => window.alert("Petitioned Microsoft to offer female-cut shirts as a sign of accepting women and being less male-normative.\n"
              + "Worked with the Chief Diversity Officer, Chief of People Operations, and Chief Accessibility Officer on an initiative "
              + " to encourage more applicants to feel comfortable disclosing disability to employers"
            )
          }}
        />
        <TimelineEvent
          color='#87a2c7'
          title='Winter 2019'
          subtitle='Wrote a proposal on it for Grace Hopper'
          action={{
            label: 'View Details', onClick: () => window.alert('Wrote a proposal on it for Grace Hopper')
          }}
        />
        <TimelineEvent
          color='#9c2919'
          title='Winter 2019'
          subtitle='Will find out if it was accepted to GHC'
          action={{
            label: 'View Details', onClick: () => window.alert('Will find out if it was accepted to GHC')
          }}
        />


      </Timeline>
    );
  }
}

  export default CultureTimeline;
