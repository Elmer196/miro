import React from "react";
import { Container, Row, Col } from "react-grid-system";
// Components
import ProgressBar from "../../components/common/ProgressBar";

const skills = [
    {
        title: "Web Design",
        percent: 100,
    },
    {
        title: "Mobile Apps",
        percent: 50,
    },
    {
        title: "Graphic Design",
        percent: 75,
    },
    {
        title: "Creativity",
        percent: 90,
    },
    {
        title: "Design Creation",
        percent: 75,
    },
    {
        title: "Marketing Online",
        percent: 60,
    },
];
const education = [
    {
        title: "Texas State University",
        subtitle: "Two Years Computer Science | Texas",
        description: "My journey at Texas State was a short but fun one! Two years of computer science and I was hooked.",
        date: "(2016-2018)",
        icon: "ti-crown",
    },
    {
        title: "University of Texas at Austin",
        subtitle: "Certified Full Stack Web Developer | Texas",
        description: "Unfortunately never got to attend the University in person (Covid-19 🙄), but I am so grateful for the school teaching me everything I know about web development.",
        date: "(2020-2021)",
        icon: "ti-cup",
    },
    
];
const experience = [
    {
        title: "Head Front and Back-end Developer",
        subtitle: "Hernan Web Solutions | Houston",
        description: "Currently going all in as the owner and main developer at Hernan Web Solutions. I'm hoping to bring as much value to as many businesses possible.",
        date: "(2021-Beyond)",
        icon: "ti-pencil-alt",
    },
    {
        title: "Bartender/Server",
        subtitle: "Dish Society | Katy",
        description: "The restaurant industry can be so draining and tough but wow has it changed my life. My ability to talk to people and make friends and connections has brought me a long way. I owe this to the restauarant business.",
        date: "(2019-Currently)",
        icon: "ti-heart",
    }
];

function Resume() {
    return (
        <section className="section section-resume section-resume-1">
            <div className="display-spacing">
                <header className="el-heading el-heading-center">
                    <div className="el-icon">
                        <h2 className="el-icon-title">
                            <span>RESUME</span>
                        </h2>
                    </div>
                    <h3>Education & Experience</h3>
                    <div className="divider divider-1-reverse divider-1-1"></div>
                    <div className="divider divider-1-reverse divider-1-2"></div>
                </header>
                <Container className="mb-spacing">
                    <Row>
                        <Col md={6}>
                            <div className="resume-row">
                                <h4 className="resume-title">Education</h4>
                                <ul>
                                    {education.map((item, index) => (
                                        <li key={index}>
                                            <div className="resume-item">
                                                <div className="resume-head">
                                                    <div className="el-icon">
                                                        <span className={`el-icon-icon ${item.icon}`}></span>
                                                    </div>
                                                    <h5>{item.title}</h5>
                                                    <h6>{item.subtitle}</h6>
                                                </div>
                                                <div className="resume-body">
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="resume-row">
                                <h4 className="resume-title">Experience</h4>
                                <ul>
                                    {experience.map((item, index) => (
                                        <li key={index}>
                                            <div className="resume-item">
                                                <div className="resume-head">
                                                    <div className="el-icon">
                                                        <span className={`el-icon-icon ${item.icon}`}></span>
                                                    </div>
                                                    <h5>{item.title}</h5>
                                                    <h6>
                                                        {item.subtitle} <small>{item.date}</small>
                                                    </h6>
                                                </div>
                                                <div className="resume-body">
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        {skills.map((item, index) => (
                            <Col key={index} sm={6} xl={4}>
                                <div className="skills-item">
                                    <ProgressBar label={item.title} percent={item.percent} />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Resume;
