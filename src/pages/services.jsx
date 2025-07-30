import React, { useEffect } from 'react';
import { FaCommentDots, FaPhone, FaIdCard } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

const ServiceDetails = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const cardData = [
        {
            id: 1,
            title: "CHAT WITH US",
            description:
                "For any queries you can live chat with us. Our representative will be available",
            highlight: "24/7",
            icon: <FaCommentDots size={32} color="#246696ff" />,
            img: "/assets/img/service-img/chat_img.jpg",
            delay: '100',
        },
        {
            id: 2,
            title: "CALL US",
            description: "Call",
            highlight: "+91 63540 51487",
            icon: <FaPhone size={32} color="#246696ff" />,
            img: "/assets/img/service-img/call_img.jpg",
            delay: '200',
        },
        {
            id: 3,
            title: "OUR MEMBERSHIP",
            description: "Unlock exclusive benefits and premium access with our membership plans.",
            highlight: "",
            icon: <FaIdCard size={32} color="#246696ff" />,
            img: "/assets/img/service-img/membership_img.jpg",
            delay: '300',
        }

    ];
    return (
        <section id="services" className="services section">
            <div className="container section-title" data-aos="fade-up">
                <h2>How Can We Help You?</h2>
                <p>We're here to assist you with any questions, concerns, or support you may need.</p>
            </div>

            <div className="container" data-aos="fade-up">
                <div className="row g-4">
                    {cardData.map((card) => (
                        <div className="col-md-4" key={card.id} data-aos="fade-up" data-aos-delay={card.delay}>
                            <div className="card border-0 shadow-sm text-center h-100">
                                {/* Image with overlapping icon */}
                                <div className="position-relative">
                                    <img
                                        src={card.img}
                                        className="img-fluid w-100 h-100"
                                        alt={card.title}
                                    />
                                    <div
                                        className="position-absolute top-100 start-50 translate-middle icon"
                                    >
                                        {card.icon}
                                    </div>
                                </div>

                                <div className="card-body mt-5 pt-3">
                                    <h5 className="card-title fw-bold">{card.title}</h5>


                                    <p className="card-text">
                                        {card.description}{" "}
                                        {card.highlight && (
                                            <span className="text-highlight  fw-bold">{card.highlight}</span>
                                        )}
                                    </p>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
};

export default ServiceDetails;
