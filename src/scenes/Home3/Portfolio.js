import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Carousel, { Modal, ModalGateway } from "react-images";

// Components
import Headline from "../../components/common/Headline";

const portfolio = [
    {
        name: "All Work",
        items: [
            {
                id: 0,
                title: "Weather App",
                link: "https://elmer196.github.io/4elmer196.github.io/",
                subtitle: "Software Development",
                src: "/assets/images/portfolio/3-1.jpg",
                thumbnail: "/assets/images/portfolio/3-1.jpg",
            },
            {
                id: 1,
                title: "Cocktail on the Run",
                link: "https://afam-26.github.io/Cocktail-on-the-run/",
                subtitle: "Software Development",
                src: "/assets/images/portfolio/3-2.jpg",
                thumbnail: "/assets/images/portfolio/3-2.jpg",
            },
            {
                id: 2,
                title: "Work Day Scheduler",
                link: "https://elmer196.github.io/3elmer196.github.io/",
                subtitle: "Software Development",
                src: "/assets/images/portfolio/3-3.jpg",
                thumbnail: "/assets/images/portfolio/3-3.jpg",
            },
            {
                id: 3,
                title: "Barber Booker",
                subtitle: "Software Development",
                link: "https://barber-booker.herokuapp.com/",
                src: "/assets/images/portfolio/3-4.jpg",
                thumbnail: "/assets/images/portfolio/3-4.jpg",
            },
            {
                id: 4,
                title: "Notetaker",
                subtitle: "Software Development",
                link: "https://notetakerelmer.herokuapp.com/notes",
                src: "/assets/images/portfolio/3-5.jpg",
                thumbnail: "/assets/images/portfolio/3-5.jpg",
            },
            {
                id: 5,
                title: "Employee Database",
                subtitle: "Software Development",
                link: "https://github.com/Elmer196/EmployeeTracker",
                src: "/assets/images/portfolio/3-6.jpg",
                thumbnail: "/assets/images/portfolio/3-6.jpg",
            },
            {
                id: 6,
                title: "Cascabel Website",
                subtitle: "Web Design",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/3-7.jpg",
                thumbnail: "/assets/images/portfolio/3-7.jpg",
            },
        ],
    },

    {
        name: "Web Design",
        items: [
            {
                id: 6,
                title: "Cascabel Website",
                subtitle: "Web Design",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/3-7.jpg",
                thumbnail: "/assets/images/portfolio/3-7.jpg",
            },
        ],
    },

    {
        name: "Software Development",
        items: [
            {
                id: 0,
                title: "Weather App",
                link: "https://elmer196.github.io/4elmer196.github.io/",
                subtitle: "Software Development",
                src: "/assets/images/portfolio/3-1.jpg",
                thumbnail: "/assets/images/portfolio/3-1.jpg",
            },
            {
                id: 1,
                title: "Cocktail on the Run",
                link: "https://afam-26.github.io/Cocktail-on-the-run/",
                subtitle: "Software Development",
                src: "/assets/images/portfolio/3-2.jpg",
                thumbnail: "/assets/images/portfolio/3-2.jpg",
            },
            {
                id: 2,
                title: "Work Day Scheduler",
                link: "https://elmer196.github.io/3elmer196.github.io/",
                subtitle: "Software Development",
                src: "/assets/images/portfolio/3-3.jpg",
                thumbnail: "/assets/images/portfolio/3-3.jpg",
            },
            {
                id: 3,
                title: "Barber Booker",
                subtitle: "Software Development",
                link: "https://barber-booker.herokuapp.com/",
                src: "/assets/images/portfolio/3-4.jpg",
                thumbnail: "/assets/images/portfolio/3-4.jpg",
            },
            {
                id: 4,
                title: "Notetaker",
                subtitle: "Software Development",
                link: "https://notetakerelmer.herokuapp.com/notes",
                src: "/assets/images/portfolio/3-5.jpg",
                thumbnail: "/assets/images/portfolio/3-5.jpg",
            },
            {
                id: 5,
                title: "Employee Database",
                subtitle: "Software Development",
                link: "https://github.com/Elmer196/EmployeeTracker",
                src: "/assets/images/portfolio/3-6.jpg",
                thumbnail: "/assets/images/portfolio/3-6.jpg",
            },
        ],
    },


    {
        name: "Graphic Design",
        items: [
            {
                id: 7,
                title: "Creative Design",
                subtitle: "Graphic Design",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/11-2.jpg",
                thumbnail: "/assets/images/portfolio/11-2.jpg",
            },
        ],
    },
];

const images = [
    {
        src: "/assets/images/portfolio/3-1.jpg",
    },
    {
        src: "/assets/images/portfolio/3-2.jpg",
    },
    {
        src: "/assets/images/portfolio/3-3.jpg",
    },
    {
        src: "/assets/images/portfolio/3-4.jpg",
    },
    {
        src: "/assets/images/portfolio/3-5.jpg",
    },
    {
        src: "/assets/images/portfolio/3-6.jpg",
    },
    {
        src: "/assets/images/portfolio/3-7.jpg",
    },
    {
        src: "/assets/images/portfolio/11-2.jpg",
    },
    {
        src: "/assets/images/portfolio/3-9.jpg",
    },
    {
        src: "/assets/images/portfolio/3-10.jpg",
    },
];

function Portfolio() {
    const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const toggleLightbox = (index) => {
        setSelectedIndex(index);
        setLightboxIsOpen(!lightboxIsOpen);
    };

    return (
        <section className="section section-portfolio section-portfolio-1">
            <div className="display-spacing">
                <Container className="container">
                    <Headline label="Portfolio" title="Let's See My Work" divider_1={true} position="center" />
                    <Tabs className="el-tabs el-tabs-1" selectedTabClassName="active">
                        <TabList className="el-tabs-links">
                            {portfolio.map((category, categoryIndex) => (
                                <Tab key={categoryIndex}>{category.name}</Tab>
                            ))}
                        </TabList>
                        {portfolio.map((category, categoryIndex) => (
                            <TabPanel key={categoryIndex}>
                                <Row className="row-center mb--30">
                                    {category.items.map((item, index) => (
                                        <Col key={index} xs={6} sm={6} md={6} lg={3} xl={3} onClick={() => toggleLightbox(item.id)}>
                                            <div className="portfolio-item">
                                                <div className="portfolio-card">
                                                    <div className="image overlay-image" style={{ backgroundImage: `url(${item.src})` }} />
                                                    <div className="content">
                                                        <button className="button button-circle button-icon button-circle-md button-primary">
                                                            <span className="el-icon-icon ti-fullscreen"></span>
                                                        </button>
                                                        <span>{item.title}</span>
                                                        <h3>{item.subtitle}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </TabPanel>
                        ))}
                    </Tabs>
                </Container>
                <ModalGateway>
                    {lightboxIsOpen ? (
                        <Modal onClose={toggleLightbox}>
                            <Carousel currentIndex={selectedIndex} views={images} />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </section>
    );
}

export default Portfolio;
