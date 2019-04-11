import React, { Component } from 'react';
import './App.css';
import Project from './Project';

import { Navbar, NavItem, Nav, Container, Row, Col } from "react-bootstrap";
import khoa from './khoa.jpg';



var summercamp = {
    name: "C# Coding Camp",
    photos: [khoa],
    projectSummary: "When I was researching Seattle to prepare for my Microsoft internship I noticed the area had many free high school camps but very few middle school ones, and being a tech hub the city had an abundance of interns who could code. So I thought why not give the interns the opportunity to teach and the girls the opportunity to learn to code this summer? I teamed up with interns from Microsoft, Amazon, and Google interns to teach 40 girls and allies C# (http://codecadets.wixsite.com/ home). What made the camp unique was besides being the only free coding camp for middle schoolers in the area, we introduced the students to full time engineers and PMs who are thriving in tech via the Q&As so they can see that they could grow up to succeed too. ",
    problemSpace: "Computer Science in Low Income Communities",
    criteriaForSuccess:["a","b"],
    impact: "Taught 30 middle schoolers",
    lessonsLearned: ["Plan guest speakers ahead of time", "delegate", "seperated internal and extrernal communication"],
    doDifferently: ["Plan less  currculum", "Being right"],
    goals: ["Get where I am going fast", "Experience the most I can on fieldtrips"],
    budget: 4000,
    timeline: 1,
    feedback:[],
    psychReq: [["Service Project consisting of such activities as creating a manual for a community organization, creating/organizing an event or workshop for a community organization, or making an educational product",
    "created a summer camp with 7 sessions"]],
    csReq: [["Technical accomplishment: The technical results presented in the senior\n" +
    "project should reflect the maturity of a senior level student in both the\n" +
    "depth to which the subject is developed and in the degree to which a\n" +
    "variety of information or viewpoints is brought to bear on the problem.", "This website?"],
    ["Diligent execution: The senior project will be independent work by the\n" +
    "student, developed under his or her own initiative and on a timetable\n" +
    "under the student's control. The instructor who supervises the senior\n" +
    "project is expected to supply only general advice and guidance and to help\n" +
    "the student avoid pitfalls and blunders; the day-to-day activities which\n" +
    "affect the execution of the project are up to the student.", "See Timetable Above"],
    ["Effective communication: The senior project should represent a well\n" +
    "polished piece of writing, with careful consideration given to presenting\n" +
    "the results of the investigation in such a way as to provide a maximum of\n" +
    "information with a minimum of effort required of the reader. Standard\n" +
    "procedures of footnoting, referencing, and symbol usage as used in the\n" +
    "technical literature should be employed. The final project document\n" +
    "should give evidence that the student has acquired the ability to skillfully\n" +
    "communicate on a technical subject to an audience less knowledgeable\n" +
    "than the author. All computer programs are to be completely and fully\n" +
    "documented.","see emails bellow and this github"]],
    myResponsibilities:[],
    remainingPhotos: []
};
var industryImpact = {
    name: "Creating Industry Change Bottom-up",
    photos: ["khoa.JPG"],
    projectSummary: "",
    problemSpace: "When my dad tried signing my sisters up for coding summercamp, he only found offerings",
    impact: "Taught 30 middle schoolers",
    criteriaForSuccess:["a","b"],
    lessonsLearned: ["Plan guest speakers ahead of time", "delegate", "seperated internal and extrernal communication"],
    doDifferently: ["Plan less  currculum", "Being right"],
    goals: ["Get where I am going fast", "Experience the most I can on fieldtrips"],
    budget: 0,
    timeline: 2,
    feedback: [],
    psychReq: [["Service Project consisting of such activities as creating a manual for a community organization, creating/organizing an event or workshop for a community organization, or making an educational product",
        "created a summer camp with 7 sessions"]],
    csReq: [["Technical accomplishment: The technical results presented in the senior\n" +
    "project should reflect the maturity of a senior level student in both the\n" +
    "depth to which the subject is developed and in the degree to which a\n" +
    "variety of information or viewpoints is brought to bear on the problem.", "This website?"],
        ["Diligent execution: The senior project will be independent work by the\n" +
        "student, developed under his or her own initiative and on a timetable\n" +
        "under the student's control. The instructor who supervises the senior\n" +
        "project is expected to supply only general advice and guidance and to help\n" +
        "the student avoid pitfalls and blunders; the day-to-day activities which\n" +
        "affect the execution of the project are up to the student.", "See Timetable Above"],
        ["Effective communication: The senior project should represent a well\n" +
        "polished piece of writing, with careful consideration given to presenting\n" +
        "the results of the investigation in such a way as to provide a maximum of\n" +
        "information with a minimum of effort required of the reader. Standard\n" +
        "procedures of footnoting, referencing, and symbol usage as used in the\n" +
        "technical literature should be employed. The final project document\n" +
        "should give evidence that the student has acquired the ability to skillfully\n" +
        "communicate on a technical subject to an audience less knowledgeable\n" +
        "than the author. All computer programs are to be completely and fully\n" +
        "documented.","see emails bellow and this github"]],
    myResponsibilities:[],
    remainingPhotos: []


};

var conferences = {
    name: "Conference Bootcamp",
    photos: ["khoa.JPG"],
    projectSummary: "",
    problemSpace: "When my dad tried signing my sisters up for coding summercamp, he only found offerings",
    impact: "Taught 30 middle schoolers",
    criteriaForSuccess:["a","b"],
    lessonsLearned: ["Plan guest speakers ahead of time", "delegate", "seperated internal and extrernal communication"],
    doDifferently: ["Plan less  currculum", "Being right"],
    goals: ["Get where I am going fast", "Experience the most I can on fieldtrips"],
    budget: 0,
    timeline: 3,
    feedback: [],
    psychReq: [["Service Project consisting of such activities as creating a manual for a community organization, creating/organizing an event or workshop for a community organization, or making an educational product",
        "created a summer camp with 7 sessions"]],
    csReq: [["Technical accomplishment: The technical results presented in the senior\n" +
    "project should reflect the maturity of a senior level student in both the\n" +
    "depth to which the subject is developed and in the degree to which a\n" +
    "variety of information or viewpoints is brought to bear on the problem.", "This website?"],
        ["Diligent execution: The senior project will be independent work by the\n" +
        "student, developed under his or her own initiative and on a timetable\n" +
        "under the student's control. The instructor who supervises the senior\n" +
        "project is expected to supply only general advice and guidance and to help\n" +
        "the student avoid pitfalls and blunders; the day-to-day activities which\n" +
        "affect the execution of the project are up to the student.", "See Timetable Above"],
        ["Effective communication: The senior project should represent a well\n" +
        "polished piece of writing, with careful consideration given to presenting\n" +
        "the results of the investigation in such a way as to provide a maximum of\n" +
        "information with a minimum of effort required of the reader. Standard\n" +
        "procedures of footnoting, referencing, and symbol usage as used in the\n" +
        "technical literature should be employed. The final project document\n" +
        "should give evidence that the student has acquired the ability to skillfully\n" +
        "communicate on a technical subject to an audience less knowledgeable\n" +
        "than the author. All computer programs are to be completely and fully\n" +
        "documented.","see emails bellow and this github"]],
    myResponsibilities:[],
    remainingPhotos: []

};


const PROJECTS = [summercamp,industryImpact, conferences];
class App extends Component {
  constructor()
  {
    super();
    this.state = {
      activePlace: 0,
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        <Nav
          variant="tabs"
          defaultActiveKey={activePlace}
          onSelect={index => {
            this.setState({ activePlace: index });
          }}
        >
          {PROJECTS.map((proj, index) => (
              <Nav.Item>
                <Nav.Link key={index} eventKey={index}>{proj.name}</Nav.Link>
              </Nav.Item>
          ))}
      </Nav>
      <Project proj={PROJECTS[activePlace]}/>
      </div>
    );
  }
}


export default App;
