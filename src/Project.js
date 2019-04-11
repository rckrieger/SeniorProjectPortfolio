import React, { Component } from 'react';
import CodingCampTimeline from './CodingCampTimeline';
import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/spacelab/bootstrap.css";
import { Navbar, NavItem, Nav, Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import YouTube from 'react-youtube';
import CultureTimeline from './CultureTimeline';
import InterviewTimeline from './InterviewTimeline';
import ConferenceTimeline from './ConferenceTimeline';
import { Document, Page } from 'react-pdf';

class Project extends Component {
  constructor(props) {
    super(props);
    this.props = {
      proj: props.proj,
    };
    this.state = {
      numPages: null,
      pageNumber: 1,
    };
  }


  render() {
    const { pageNumber, numPages } = this.state;
    const timelinetype = this.props.proj.timeline;
    let timeline;
    let Budget;
    let vidId;
    let docShown;
    let youtube;
    const opts = {
      height: '315',
      width: '560',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    if (timelinetype == 1) {
      timeline = <CodingCampTimeline/>;
      vidId="pBIhRuaD6Qw";
      docShown = <Slider {...documentationSliderSettings}>{this.props.proj.emails
        .map((doc, index) =>
          (<img src={doc}/>)
        )
      }
      </Slider>;
      youtube = <YouTube
        videoId= 'pBIhRuaD6Qw'
        opts={opts}
        onReady={this._onReady}
      />;
    } else if (timelinetype == 2){
      timeline = <CultureTimeline/>;
      docShown = <div>
        <Document
          file="somefile.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>;
    }
    else if (timelinetype == 3){
      timeline = <InterviewTimeline/>;
      docShown = <Slider {...documentationSliderSettings}>{this.props.proj.emails
        .map((doc, index) =>
          (<img src={doc}/>)
        )
      }
      </Slider>;
      vidId = "md9AbdXstLY";
      youtube = <YouTube
        videoId= 'md9AbdXstLY'
        opts={opts}
        onReady={this._onReady}
      />;
    }else {
      timeline = <ConferenceTimeline/>;
      vidId = "VlaglRIahnc";
      youtube = <YouTube
        videoId= 'VlaglRIahnc'
        opts={opts}
        onReady={this._onReady}
      />;
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
    let documentationSliderSettings = {
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
              <a href src = "https://docs.google.com/presentation/d/1s4SX7xMf1_8M_7S6y7CSdjJpNBH05fpBfTeeKW3u-n8/edit?usp=sharing">
              slides</a>
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
            <div className= "Video" align="center">
              {youtube}
            </div>
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
          </Row>
          <Row>
            <Col md={7} sm={7}>
            <div className="Documents" align="left">
              <h3>Documentation</h3>
              {docShown}
            </div>
            </Col>
            <Col md={5} sm={5}>
            <div className="Ways to Further the Project" align="left">
              <h3>Ways to Further the Project</h3>

              <ul>
            {this.props.proj.moreStepsToTake.map((direction, index) =>
              (
                <li> <p>{direction}</p> </li>
              ))
            }
            </ul>
            </div>
            </Col>
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
          <Row>
            <div>
              <a href = "https://github.com/rckrieger/SeniorProjectPortfolio/"> Github source code</a>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Project;
