import React from 'react';
import { Image } from 'react-bootstrap';
import Slider from 'react-slick';

const Hero = () => {

    const banner = [
        {
            title: "Over 1500 Educational Consultants",
            description:
                "IPTNA Accreditation is a mark of quality and excellence in education. institutions can demonstrate their commitment to excellence through academic accreditation.",
            image: "/assets/img/banner-img/new1.jpg",
            mobile_image: "/assets/img/banner-img/banner-mobile-01.jpg"
        },
        {
            title: "Areas Covered under WAM and Youth Visions Grant Scheme",
            description:
                "The INTERNATIONAL PERSONAL TRAINER AND NUTRITIONIST ASSOCIATION (IPTNA) provides international accreditation services and accreditation grants to educational institutions that meet the highest standards of quality and excellence.",
            image: "/assets/img/banner-img/new2.jpg",
            mobile_image: "/assets/img/banner-img/banner-mobile-02.jpg"
        },
        {
            title: "IPTNA Enjoys Impressive Reviews In The Media",
            description:
                "IPTNA's accreditation services have received impressive reviews in the media, with many reputable outlets recognizing the organization for its commitment to improving education standards globally.",
            image: "/assets/img/banner-img/new3.jpg",
            mobile_image: "/assets/img/banner-img/banner-mobile-03.jpg"
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
                <Slider {...settings}>
                    {banner.map((slide, index) => (
                        <div key={index} className="position-relative w-100  hero-slide">
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                // className="w-100 h-100 hero-image"
                                className="w-100  h-100 d-none d-md-block hero-image"
                            />
                            {/* Mobile Image */}
                            <Image
                                src={slide.mobile_image}
                                alt={slide.title}
                                className="w-100 h-100 d-block d-md-none hero-image"
                                width={768}
                                height={500}
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