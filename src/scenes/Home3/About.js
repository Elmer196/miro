import React from "react";
import { Container, Hidden, Row, Col } from "react-grid-system";

function About() {
    return (
        <section className="section section-about section-about-1">
            <div className="display-spacing">
                <Container>
                    <Row>
                        <Hidden xs sm md>
                            <Col lg={5}>
                                <div className="about-image">
                                    <div className="image overlay-image" style={{ backgroundImage: `url(/assets/images/about/7-1.jpg)` }}></div>
                                </div>
                            </Col>
                        </Hidden>
                        <Col lg={7}>
                            <div className="about-content">
                                <header className="el-heading">
                                    <h2 className="el-icon">
                                        <span className="el-icon-title">Hello y'all</span>
                                    </h2>
                                    <h3>
                                        <span>I am Elmer Hernandez.</span>
                                    </h3>
                                    <div className="divider divider-1"></div>
                                    <p>I am 22 years old with about two years of computer science experience and currently working on getting certified as a full stack web developer through the University of Texas at Austin. This includes knowledge in HTML, CSS, JavaScript, C++, jQuery, BootStrap, GitHub, Node, React, MySQL and other databases. I am well versed on all four languages but JavaScript is the one I specialize and enjoy the most. Besides that, I am from Los Angeles, CA but have lived in Houston, TX for a majority of my life. I have a passion for basketball, cars, and business. Thank y'all for visitng Hernan Web Solutions, and feel free to reach out.</p>
                                </header>
                                <Row className="pt-30">
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-ruler-pencil"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Web Design</h5>
                                                <p>If a webpage has my name on it, it will be of the highest quality</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-image"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Graphic Design</h5>
                                                <p>My team will always make sure you're satisfied with our creatives and work with you until you're satisfied</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-brush-alt"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Software Development</h5>
                                                <p>Our web solutions will allow for your company to streamline your process</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-ruler-pencil"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Web Apps</h5>
                                                <p>We can turn your page into a web app accessible to any device</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-ruler-pencil"></span>
                                            </div>
                                            <div className="content">
                                                <h5>UI/UX Designer</h5>
                                                <p>The user experience on any page built by us is always sure to impress</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-mobile"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Digital Marketing</h5>
                                                <p>Whether it be SEO or PPC, we are dedicated to finding the right solutions for you and your business</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default About;
