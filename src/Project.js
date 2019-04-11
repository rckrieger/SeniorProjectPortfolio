import React, { Component } from 'react';
import CodingCampTimeline from './CodingCampTimeline';
import Radar from 'react-d3-radar';
import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/spacelab/bootstrap.css";
import { Navbar, NavItem, Nav, Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import khoa from './khoa.jpg';

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
    let Budget;
    if (timelinetype == 1) {
      timeline = <CodingCampTimeline/>;
    } else if (timelinetype == 2){
      timeline = <CodingCampTimeline/>;
    } else {
      timeline = <CodingCampTimeline/>;
    }
    if (this.props.proj.budget != 0) {
      Budget =  <div align="left"><h3>Budget</h3>
        <p>{"$" + this.props.proj.budget}
      <br />$4250 from Google's Ignite CS
        <br />$1000 from Amazon we did not claim
         because we could not find a t-shirt making company in time.
        <br /> Full Budget: <a href="https://docs.google.com/spreadsheets/d/1h81xXm-m_g3S9_2wXz9vpX5F3enOQXZGYUN8KIDx910/edit?usp=sharing"> https://docs.google.com/spreadsheets/d/1h81xXm-m_g3S9_2wXz9vpX5F3enOQXZGYUN8KIDx910/edit?usp=sharing</a>
      </p>
        </div>;
    } else {
      Budget = <div></div>;
    }
    let sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      adaptiveHeight: true,
    };

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
          <Col md={8} sm={8}>
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
          </Col>
          <Col md={4} sm={4}>
            <div className= "budget" align="left">
              {Budget}
            </div>
          </Col>
          </Row>
          <Row>
            <div className="Timeline" align="left">
              <h3>Timeline</h3>
              <p>{timeline}</p>
            </div>
          </Row>
          <Row>
          <Col md={7} sm={7}>
            <div className= "Impact" align="left">
              <h3>Impact</h3>
              <p>{this.props.proj.impact}</p>
            </div>
          </Col>
          <Col md={5} sm={5}>
            <div className= "ImpactPhotos" align="left">
              <Slider {...sliderSettings}>{this.props.proj.remainingPhotos
                .map((photo, index) =>
                  (<img src={photo}/>)
                )
              }
              </Slider>
            </div>
          </Col>
          </Row>
          <Row>
          <Col md={6} sm={6}>
            <div className= "LessonsLearned" align="left">
              <h3>Lessons Learned</h3>
              <ul>
              {this.props.proj.lessonsLearned.map((lessons, index) => (
              <li><p>{lessons}</p></li>
            ))}
              </ul>
            </div>
          </Col>
          <Col md={6} sm={6}>
            <div className="DoDifferently" align="left">
              <h3>What I Would Do Differently</h3>
              {this.props.proj.doDifferently}
            </div>
          </Col>
            <div className="Documents" align="left">
              <h3>Documentation</h3>
              {this.props.proj.feedback.map((doc, index) =>
                (
                  <img src= {doc} alt= "id pic"/>
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
