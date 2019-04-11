import React, { Component } from 'react';
import CodingCampTimeline from './CodingCampTimeline';
import Radar from 'react-d3-radar';
import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/spacelab/bootstrap.css";
import { Navbar, NavItem, Nav, Container, Row, Col } from "react-bootstrap";
import khoa from './khoa.jpg'

class Project extends Component {
  constructor(props) {
    super(props);
    this.props = {
      proj: props.proj,
    };
  }

  render() {
    const timelinetype = this.props.proj.timeline;
    let timeline;
    if (timelinetype == 1) {
      timeline = <CodingCampTimeline/>;
    } else if (timelinetype == 2){
      timeline = <CodingCampTimeline/>;
    } else {
      timeline = <CodingCampTimeline/>;
  }
    return (
      <div className="ProjectBox">
        <Container>
          <Row>
            <div className="Name">
              <h1>{this.props.proj.name}</h1>
            </div>
          </Row>
          <Row>
            <Col md={4} sm={4}>
              <div className = "Photos">
                {this.props.proj.photos.map((photo, index) => (
                  <img src= {photo} alt= "picture"/>
                ))}
              </div>
            </Col>
            <Col md={8} sm={8}>
              <div className = "projectSummary" align="left">
                <h3>Project Summary</h3>
                  <p>{this.props.proj.projectSummary}</p>
              </div>
              <div className= "ProblemSpace" align="left">
                <h3>Problem Space</h3>
                <p>{this.props.proj.problemSpace}</p>
              </div>
            </Col>
          </Row>
          <Row>
            <div className= "KeyPerformaceIndicators" align="left">
              <h3>Criteria For Success</h3>
              <ul>
              {this.props.proj.criteriaForSuccess
                .map((slot, index) =>
                  (<li><p>{slot}</p></li>)
              )
              }
              </ul>
            </div>
          </Row>
          <Row>
            <div className="Timeline" align="left">
              <h3>Timeline</h3>
              <p>{timeline}</p>
            </div>
          </Row>
          <Row>
            <div className= "Impact" align="left">
              <h3>Impact</h3>
              <p>{this.props.proj.impact}</p>
            </div>
            <div className= "LessonsLearned" align="left">
              <h3>Lessons Learned</h3>
              {this.props.proj.lessonsLearned.map((lessons, index) => (
              <p>"{lessons}"</p>
            ))}
            </div>
            <div className="DoDifferently" align="left">
              <h3>What I Would Do Differently</h3>
              {this.props.proj.doDifferently.map((different, index) => (
              <p>"{different}"</p>
            ))}

            </div>
            <div className="Feedback" align="left">
              <h3>Feedback</h3>
              {this.props.proj.feedback.map((review, index) =>
                (
                  <img src= {review} alt= "id pic"/>
                ))
              }
            </div>
          </Row>
          <Row>
            <div lassName="Requirements" align="left">
              <Col md={6} sm={6}>
                <h3>Psych Requirements</h3>
                {this.props.proj.psychReq.map((slot, index) =>
                    (<p>{slot[0]} : {slot[1]}</p>)
                )
                }
              </Col>
              <Col md={6} sm={6}>
                <h3>Computer Science Requirements</h3>
                {this.props.proj.csReq.map((slot, index) =>
                    (<p>{slot[0]} : {slot[1]}</p>)
                )
                }
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Project;
