import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const accreditationItems = [
        {
            image: '/assets/img/about-section-img/universties.jpg',
            title: "Accreditation for Universities",
            description:
                "Assisting traditional, distance learning and online universities get recognition & increase their student retention ratio through IAO's international accreditation for universities.",
            delay: '100',
        },
        {
            image: '/assets/img/about-section-img/institute.jpg',
            title: "Accreditation for Institutes",
            description:
                "Globally recognized accreditation services for vocational, traditional, professional, online and distance learning institutes to help enhance recognition & education standards.",
            delay: '200'
        },
        {
            image: '/assets/img/about-section-img/school.jpg',
            title: "Accreditation for Schools",
            description:
                "Boost your school's recognition globally by becoming an IAO accredited or certified school. Accreditation available for kindergarten, nursery, pre-school, primary school, secondary, and higher education schools worldwide.",
            delay: '300'
        },
        {
            image: '/assets/img/about-section-img/collage.jpg',
            title: "Accreditation for Colleges",
            description:
                "Establishing your presence as an internationally accredited and recognized college through IAO's global college accreditation and affiliation available for all types of colleges.",
            delay: '400'
        },
        {
            image: '/assets/img/about-section-img/business.jpg',
            title: "Accreditation for Business",
            description:
                "Our accreditation services provide assurance to stakeholders, demonstrating a commitment to excellence, integrity, and continuous improvement in operations and services.",
            delay: '500'
        },
        {
            image: '/assets/img/about-section-img/professionals.jpg',
            title: "Accreditation for Professionals",
            description:
                "Comprehensive accreditation services designed to validate the competence of professionals across various industries. Our globally recognized accreditation ensures that professionals meet rigorous standards.",
            delay: '600'
        }
    ];

    return (
        <section id="about" className="about section">
            <div className="container  section-title" data-aos="fade-up">
                <h2>ABOUT INTERNATIONAL ACCREDITATION ORGANIZATION</h2>
                <p>
                    IAO is an international quality assurance agency, working to improve & establish education standards of institutes all over the world. With its global network of experts, IAO grants accreditation to educational institutions, corporations, professionals and qualified individuals.</p>
            </div>

            <div className="container " data-aos="fade-up">
                <div className="row justify-content-center gy-4">
                    <div className="row ">
                        {accreditationItems.map((item, index) => (
                            <div className="col-md-4 mb-4" key={index} data-aos="fade-up" data-aos-delay={item.delay}>
                                <div className="card h-100 border-0 shadow-sm">
                                    <div className="position-relative">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="card-img-top img-fluid w-100 object-cover"
                                        />
                                        {/* Optional: Overlay icon goes here */}
                                    </div>
                                    <div className="card-body">
                                        <h6 className="card-title mb-2">
                                            {item.title.split("for ")[0]}for{" "}
                                            <strong>{item.title.split("for ")[1]}</strong>
                                        </h6>
                                        <p className="card-text text-muted">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </section>
    );
};

export default About;
