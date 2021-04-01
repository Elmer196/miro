import React from "react";
import TextLoop from "react-text-loop";
import { Container } from "react-grid-system";
import { useHistory } from "react-router-dom";


function Intro() {

    const history = useHistory();

    const routeChange = () => {
        let path = `portfolio`;
        history.push(path);
    }

    const routeChange2 = () => {
        let path = `about`;
        history.push(path);
    }

    return (
        <section className="section section-hero section-hero-3 overlay-image" style={{ backgroundImage: `url(/assets/images/hero/6-2.jpg)` }}>
            <div className="display-center">
                <Container>
                    <div className="el-heading">
                        <p className="el-icon">
                            <span className="el-icon-title">Hello.</span>
                        </p>
                        <h1>
                            Hernan Web Solutions is here for you{" "}
                            <TextLoop>
                                <span>Web Development</span>
                                <span>Business Consulting</span>
                                <span>New Heights</span>
                            </TextLoop>
                        </h1>
                        <button className="button button-lg button-primary" onClick={routeChange}>
                            <span className="wave"></span>
                            <span className="text">My Portfolio</span>
                        </button>
                        <button className="button button-lg button-light" onClick={routeChange2}>
                            <span className="text text-primary">Read More</span>
                        </button>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Intro;
