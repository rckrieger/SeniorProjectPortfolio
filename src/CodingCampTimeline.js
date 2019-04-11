import React, { Component } from 'react';
import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline'
import { FaBug, FaRegCalendarCheck, FaRegFileAlt } from 'react-icons/fa'
import Project from "./Project";

class CodingCampTimeline extends Component {
  constructor(props) {
    super(props);
    this.props = {
      events: props.events,
    };
  }

  render() {
    return (
      <Timeline minEvents={5} placeholder>
        <TimelineEvent icon={FaRegFileAlt} title='April' subtitle='26/03/2019 09:51'/>
        <TimelineEvent
          color='#87a2c7'
          icon={FaRegCalendarCheck}
          title='May'
          subtitle='26/03/2019 09:51'
        />
        <TimelineEvent
          color='#9c2919'
          icon={FaBug}
          title='June'
          subtitle='26/03/2019 09:51'
          action={{
            label: 'Ver detalhes...', onClick: () => window.alert('Erro!')
          }}
        />
        <TimelineEvent
          color='#9c2919'
          icon={FaBug}
          title='July'
          subtitle='26/03/2019 09:51'
          action={{
            label: 'Ver detalhes...', onClick: () => window.alert('Erro!')
          }}
        />
        <TimelineEvent
          color='#9c2919'
          icon={FaBug}
          title='August'
          subtitle='26/03/2019 09:51'
          action={{
            label: 'Ver detalhes...', onClick: () => window.alert('Erro!')
          }}
        />
      </Timeline>
    );
  }
}

  export default CodingCampTimeline;
