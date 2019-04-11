import React, { Component } from 'react';
import './App.css';
import Project from './Project';

import { Navbar, NavItem, Nav, Container, Row, Col } from "react-bootstrap";
import khoa from './khoa.jpg';
import alltheteachers from './alltheteachers.jpg';
import handraising from './Handraising.jpg';
import internrun from './internrun.jpg';
import oneclass from './oneclass.jpg';
import pointing from './pointing.jpg';
import studentartwork from './studentartwork.jpg';
import cc5 from './ccmain.png';
import cc0 from './cc0.png';
import cc1 from './cc1.png';
import cc2 from './cc2.png';
import cc3 from './cc3.png';
import cc4 from './cc4.png';
import sandwhich from './sandwitch.jpeg';


var summercamp = {
    name: "C# Coding Camp",
    photos: [khoa],
    projectSummary: "When I was researching Seattle to prepare for my Microsoft internship I noticed the area had many " +
      "free high school camps but very few middle school ones, and being a tech hub the city had an abundance of interns " +
      "who could code. So I thought why not give the interns the opportunity to teach and the girls the opportunity to " +
      "learn to code this summer? I teamed up with interns from Microsoft, Amazon, and Google interns to teach 40 girls " +
      "and allies C# over the course of 7 Saturdays(http://codecadets.wixsite.com/ home). What made the camp unique was" +
      " besides being the only free " +
      "coding camp for middle schoolers in the area, we introduced the students to full time engineers and PMs who are thriving " +
      "in tech via the Q&As so the girls could see that they could grow up to succeed too. ",
    problemSpace: "Tackling the pipeline problem early on: CS for middle school girls",
    criteriaForSuccess:["Students learn about potential career paths in CS ",
        "Students associate computer science with less stereotypically male terms",
        "Students believe anyone can do computer science",
        "Students can see themselves in the CS field when they grow up",
        "Students learn about the local computer science scene",
        "Students think of computer science positively",
        "Students meet women in tech who they can see themselves in",
        "Community responds positively to the addition of the camp",
        "Teachers get practice explaining complex concepts in simple terms",
        "Teachers feel valued"
    ],
    impact: "Before the camp started I surveyed students about their skills, experiences, and perceptions of computer science." +
    " Tellingly, when asked \"What are 3 words you think of when you think of computer science?\", answers included "+
    "\"geeks, boys, nerds\" and \"difficult strategetic sciencey\". Fortunately, when we informally surved them " +
      "at the last camp session, most said it was more fun than they expected. Students also metioned their favorite part" +
      " was meeting local women in tech they could look up to. Although some had parents in engineering, many of the girls reported" +
      " not knowing anyone who looked like them succeeding in the industry before the camp began. Pacific science center reached out " +
      "to ask if we would be interested in running the camp through them the summer after. Although flattered, we turned them down" +
      " because all of the non-graduating interns thought it would be too much work to manage.",
    lessonsLearned: ["Computer science could be taught better for kinesthetic learners/ hyperactive students - Students loved our \"Scratch Live!\" dance off (" +
    "the computers arrived late so for the first class we used giant sticky-notes as code blocks to program teachers to dance" +
    " and make sandwiches)." +
    " They also liked getting on their feet when we taught them different sort methods to sort themselves by height. After seeing how the students responded" +
    " I think it could be benificial to add more on-your-feet programming activities to classes, maybe even at a collegiate level.", "DELEGATE - when my treasurer had to back out I took on her resposiblities, and it was too much for me to handle" +
    "fortunately by July one of the other officers saw I was struggling and offered to take over internal communication with teachers (like carpools)" +
    "so I could focus on external communication with parents and partners","Plan guest speakers ahead of time - Often companies said they would sent someone to guest speak" +
    "but would give me the run-around on who until 2-3 weeks before. Also at the start of the 7 week camp we said we'd find the last 2 or 3 speakers during the camp since we had time," +
    "but by then I was too burnt out to find them and improvised by having teachers speak about their experiences", "Let the students drive the curriculum - At first we had the students devided by age, but that" +
    "failed to capture their differences in experience. We also had all 7 weeks of curriculum planned ahead of time, but by week 2 noticed that the students did better when we let them" +
    "set the pace, so we pivioted and changed the projects to teach them how to build what they wanted to learn", "In person meetings boost morale - Although it was cool having students from all over the country" +
    " work together, the sparcity of in-person meeting led to lower morale and people dropping out", "Firing people is difficult - I had 2 teachers I had to fire" +
    " because they kept missing or canceling. It was diffucult to tell them they were out, but after I did they emailed me back thanking me saying they were thinking of quitting.",
    "Its easier to plan camps for places you've lived before - planning a Seattle Camp after spending only 3 days there for an interview definitely was not the best idea"],
    doDifferently: "First off organization - although I planned roles thoroughly (see: https://docs.google.com/document/d/1XSI3DrYF4jCyt6KtiZF3ZchktJg03PWYq13qnR1kKpI/edit?usp=sharing" +
      ") officers dropping out just meant I had to take on their responsibilities. If I ran it again I would require more commitment from the get go - like make facetime meetings mandatory as opposed to recommended, and also I'd look into securing payment and travel stipends for all the teachers. " +
      "Also, despite initially wanting to have a field trip component " +
      "like Girls Who Code, Google told us it would be too much of a liability and we shouldn't. We found the guest speakers just as effective " +
      "and I'd recommend that component to other people planning summer camps." +
      "\nThe biggest ethical dilemma I ran into this summer was with IEEE. IEEE said members have been complaing for a while that" +
      "they wanted IEEE to host a summer camp for their kids, so IEEE wanted to fund us. Their stipulation was it couldn't be an all girls camp" +
      " because they were worried about Title IX funding laws. Although we eventually let in brothers of the students to make it easier on parents, we speffically wanted" +
      " to create a community where young women felt safe to try and fail, so I turned their offer down. One piece of feedback I got was the website " +
      "scared off some of the brothers who though the camp would be too \"girly\". So If I were in the same position again I'd accept the IEEE funnding but make the website " +
      "super girl-y to intimate boys from signing up." +
      " \nThe Pacific Science Center offered to host us the next year and it would have made planning much easier." +
      "The first day of the camp the school had not approved us so my Microsoft mentor convinced his skip-level manager to let us" +
      "us a conference room to hold the first camp session. " +
      "The second camp session the school district forgot to send the custodian to unlock the building, so the teachers taught the students outdoors. Having a decidiated partner to host us would have been much simpler. " +
      "Also the other teachers and I had to transport the laptops Microsoft loaned us each week, which was hassle. If I ran the camp again I'd pick a location which could safely store" +
      "several dozen laptops in a secure location." +
      "\nThe most emotionally trying part of the summer was seeing the students struggle. One student who came from an especially rough background tried running away the second to last lesson. She had missed the class the week before and was lost in the curriculum, so 2 teachers were working with her" +
      " individually. She bolted out of the classroom in frustration and the " +
      "2 teachers had to chase her down while I was tasked with keeping the rest of the students calm and non-reactive. The teachers caught up to her when she tripped and sprained her ankle. She stayed home the last lesson, and I cried because I felt like we had failed her." +
      " If I could do it over I would have emailed her mom not just that she got hurt, but also recources she could look at on her own time" +
      "to help understand the material. We also should have done more to bring her confidence back up.",
    budget: 4000,
    timeline: 1,
    moreStepsToTake:["Medium or Youtube series on how people can plan camps like this one", "Improve this website",
      "Read up on CS education studies to see what we should have done differently",
    "Strech Goal - Find an intern to restart the camp for the summer"],
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
    remainingPhotos: [pointing, oneclass, alltheteachers, handraising, internrun, sandwhich],
    emails:[cc5, cc0,cc1, cc2, cc3,cc4]
};
var industryImpact = {
    name: "Creating Industry Change Bottom-up",
    photos: ["khoa.JPG"],
    projectSummary: "Although kicking off cultural change can seem daunting, its entirely doable as an intern! " +
      "One of my 2018/2019 projects I've been working on is teaching the strategies I used during my internships to " +
      "create company-wide change at Apple, GoDaddy, and Microsoft.",
    problemSpace: "Bottom-up leadership, amplifying the voices of the underrepresented",
    impact: "This project is in its earliest stage of the 4. When ",
    criteriaForSuccess:["Create an industry environment more welcoming of different people",
        "Create policies that benfit minorities in tech", "Teach others ways they can use my strategies at their own companies"],
    lessonsLearned: [],
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
    moreStepsToTake:[],
    myResponsibilities:[],
    remainingPhotos: [],
    emails:[]
};

var interviewPrep = {
    name: "Interview Prep Series",
    photos: ["khoa.JPG"],
    projectSummary: "I often get Facebook messages asking for advice due to my involvement in Ladies Storm Hackathons, " +
      "a group of almost 15k women (according to FB's algorithims I am one of the top 6 members creating the most engaging content) " +
      "This led me to start a youtube series to help college students prepare for interviews/ industry.",
    problemSpace: "Preparing women and minorities to succeed in interviews",
    impact: "My videos have been watched hundreds of times. Further dozens of viewers have reached out to me on Linkedin." +
      "I've even been sent thank messages from people who watched my videos to prepare and then recieved offers.",
    criteriaForSuccess:["Audience Members feel more prepared for their interviews","Reduce Audeience member's perceived barriers for entry into industry",
    "Personal Goal - Figure out which experiences to highlight vs disgard", "Personal Goal - Find a way to mix my tech experience and stan-up comedy skills to create interesting content"],
    lessonsLearned: ["A 20 minute video can take 8 hours to produce", "Not all of the videos are hits - the biggest influence is if I use Microsoft or Apple in the title",
    "I need to blunt honesty with the knowledge my coworkers may be watching - The head of Microsoft University recruiting has actually reached out" +
    " to me a few times since to discuss them"],
    budget: 0,
    timeline: 3,
    feedback: [],
    psychReq: [["Service Project consisting of such activities as creating a manual for a community organization, creating/organizing an event or workshop for a community organization, or making an educational product",
        "The video series is like a more interesting"]],
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
    moreStepsToTake:["Continue the Series"],
    myResponsibilities:[],
    remainingPhotos: [],
    emails:[]
};

var conferences = {
    name: "Conference Bootcamp",
    photos: ["khoa.JPG"],
    projectSummary: "",
    problemSpace: "When my dad tried signing my sisters up for coding summercamp, he only found offerings",
    impact: "Taught 30 middle schoolers",
    criteriaForSuccess:["a","b"],
    lessonsLearned: ["Plan guest speakers ahead of time", "delegate", "seperated internal and extrernal communication"],
    doDifferently: ["Plan less  curriculum", "Being right"],
    budget: 0,
    timeline: 4,
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
    moreStepsToTake:[],
    remainingPhotos: [],
    emails:[]

};


const PROJECTS = [summercamp, industryImpact, interviewPrep, conferences];
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
