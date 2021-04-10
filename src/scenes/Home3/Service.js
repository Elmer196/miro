import React from "react";
import Slider from "react-slick";
import { Container } from "react-grid-system";

const service = [
    {
        title: "GRAPHIC DESIGN",
        subtitle: "If you can imagine it, we can design it. We are dedicated and proud of our graphic design team",
        link: "/service-details",
        icon: "ti-ruler-alt-2",
    },
    {
        title: "UI/UX DESIGN",
        subtitle: "Anybody who comes across your page will feel at home and comfortable on your website",
        link: "/service-details",
        icon: "ti-ruler-pencil",
    },
    {
        title: "WEB DEVELOPMENT",
        subtitle: "Our pages are always smooth and streamlined. From the front end to the back end.",
        link: "/service-details",
        icon: "ti-paint-bucket",
    },
    {
        title: "BUSINESS CONSULTING",
        subtitle: "Even if we do not offer a particular solution ourselves, we will help you find and attain it for your business.",
        link: "/service-details",
        icon: "ti-cup",
    },
    {
        title: "CREATIVITY",
        subtitle: "My team is willing and able to come up with ideas to help design and develop need be. We are here for you!",
        link: "/service-details",
        icon: "ti-image",
    }
];

function Service() {
    let sliderSettings = {
        dots: true,
        speed: 500,
        arrows: false,
        infinite: true,
        initialSlide: 0,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: true,
                    centerPadding: 50,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: 100,
                },
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="section section-service section-service-3">
            <div className="display-spacing mb-0">
                <Container>
                    <header className="el-heading el-heading-center">
                        <div className="el-icon">
                            <h2 className="el-icon-title">
                                <span>SERVICE</span>
                            </h2>
                        </div>
                        <h3>Let's See My Services</h3>
                        <div className="divider divider-1-reverse divider-1-1"></div>
                        <div className="divider divider-1-reverse divider-1-2"></div>
                    </header>
                    <Slider className="el-slider el-slider-plr--15 mb-30" {...sliderSettings}>
                        {service.map((item, index) => (
                            <div className="service-wrap" key={index}>
                                <div className="service-item">
                                    <div className="service-head">
                                        <span className={`el-icon-icon ${item.icon}`}></span>
                                    </div>
                                    <div className="service-body">
                                        <h3>{item.title}</h3>
                                        <p>{item.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </div>
        </section>
    );
}

export default Service;
