import React from 'react';
import { Image } from 'react-bootstrap';
import Slider from 'react-slick';

const Hero = () => {

    const banner = [

        {
            title: "International Points Profile System Benchmarking",
            description:
                "As one of the leading international accrediting agencies, IAO's accreditation council reviews and evaluates institutions using its unique points profile system to ensure they meet established accreditation standards of academic quality and integrity.",
            image: "/assets/img/banner-img/new1.jpg"
        },
        {
            title: "Regions Eligible for 97.5% WAM & Youth Visions Grants",
            description:
                "The International Accreditation Organization (IAO) provides international accreditation services and accreditation grants to educational institutions that meet the highest standards of quality and excellence.",
            image: "/assets/img/banner-img/new4.jpg"
        },
        {
            title: "IAO's Accreditation Defines Success",
            description:
                "IAO's International Accreditation Commission reviews and evaluates institutions and rewards them with global recognition by providing IAO's certification and accreditation.",
            image: "/assets/img/banner-img/new5.jpg"
        },
        {
            title: "IAO Enjoys Impressive Reviews In The Media",
            description:
                "IAO's accreditation services have received impressive reviews in the media, with many reputable outlets recognizing the organization for its commitment to improving education standards globally.",
            image: "/assets/img/banner-img/new3.jpg"
        },
        {
            title: "Over 1500 Educational Consultants",
            description:
                "IAO Accreditation is a mark of quality and excellence in education. By obtaining IAO certification, institutions can demonstrate their commitment to excellence through academic accreditation.",
            image: "/assets/img/banner-img/new2.jpg"
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    };

    return (
        <section id="hero" className="d-flex align-items-center justify-content-center p-0" data-aos="fade-up" data-aos-delay="150">
            <div className="container-fluid p-0 m-0">
                <Slider {...settings} className=''>
                    {banner.map((slide, index) => (
                        <div key={index} className="position-relative w-100 hero-slide ">
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                className="w-100 hero-image h-100"
                            />

                            <div className="mobile-overlay d-md-none"></div>

                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
                                <div className="hero-text text-start text-white p-4 ps-md-5">
                                    <h1 className="display-5 fw-bold text-warning">{slide.title}</h1>
                                    <p className="lead">{slide.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>

    )
};

export default Hero;