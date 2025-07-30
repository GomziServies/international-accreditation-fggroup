import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const accreditationItems = [
        {
            image: '/assets/img/about-section-img/adajan.jpeg',
            title: "Fitness With Gomzi Adajan",
            description:
                "Fitness With Gomzi Adajan, surat introduces this new concept which is eat healthy and live a healthy lifestyle. We have different plans for the different goal, just check it out & we will help you achieve your goal.",
            location: '228-TIME SQUARE, GauravPath Road, TP 10 Main Rd, opp. Shree Bharti Residency, Surat - 394510',
            delay: '100',
        },
        {
            image: '/assets/img/about-section-img/vesu.jpeg',
            title: "Fitness With Gomzi Vesu",
            description:
                "Fitness With Gomzi Vesu, surat introduces this new concept which is eat healthy and live a healthy lifestyle. We have different plans for the different goal, just check it out & we will help you achieve your goal.",
            location: 'A- 301, Ambrosia Business Hub, VIP Road, beside SMC Garden, Vesu, , Surat, Gujrat - 395007',
            delay: '200'
        },
        {
            image: '/assets/img/about-section-img/katargam.jpeg',
            title: "Fitness With Gomzi Katargam",
            description:
                "Fitness With Gomzi Katargam, surat introduces this new concept which is eat healthy and live a healthy lifestyle. We have different plans for the different goal, just check it out & we will help you achieve your goal.",
            location: '328, laxmi enclave-1, gajera, Surat, gujrat - 395004',
            delay: '300'
        },]

    return (
        <section id="about" className="about section">
            <div className="container  section-title" data-aos="fade-up">
                <h2>ABOUT INTERNATIONAL PERSONAL TRAINER AND NUTRITIONIST ASSOCIATION</h2>
                <p>
                    IPTNA is World's government-approved accreditation body transforming the fitness industry. We empower gyms with new revenue streams through professional trainer certifications and structured education programs. Our offerings include</p>
            </div>

            <div className="container " data-aos="fade-up">
                <div className="row justify-content-center gy-4">
                    <div className="row ">
                        { accreditationItems.map((item, index) => (
                            <div className="col-md-4 p-2" key={ index } data-aos="fade-up" data-aos-delay={ item.delay }>
                                <div className="card h-100 border-0 shadow-sm">
                                    <div className="position-relative">
                                        <img
                                            src={ item.image }
                                            alt={ item.title }
                                            className="card-img-top img-fluid w-100 object-cover"
                                        />
                                        {/* Optional: Overlay icon goes here */ }
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title mb-3">
                                            <strong>{ item.title }</strong>
                                        </h5>
                                        <p className="mb-2 text-black small">
                                            <i className="bi bi-geo-alt-fill me-1 text-primary"></i> { item.location }
                                        </p>
                                        <p className="card-text text-muted">{ item.description }</p>
                                    </div>
                                </div>
                            </div>
                        )) }
                    </div>
                </div>

            </div>

        </section>
    );
};

export default About;
