import React, { useEffect } from 'react';
import { FaCommentDots, FaPhone, FaIdCard } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

// const services = [
//     {
//         title: 'Nesciunt Mete',
//         description: 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.',
//         icon: 'bi bi-activity',
//         delay: '100',
//         colorClass: 'item-cyan',
//     },
//     {
//         title: 'Eosle Commodi',
//         description: 'Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.',
//         icon: 'bi bi-broadcast',
//         delay: '200',
//         colorClass: 'item-orange',
//     },
//     {
//         title: 'Ledo Markt',
//         description: 'Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.',
//         icon: 'bi bi-easel',
//         delay: '300',
//         colorClass: 'item-teal',
//     },
//     {
//         title: 'Asperiores Commodit',
//         description: 'Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.',
//         icon: 'bi bi-bounding-box-circles',
//         delay: '400',
//         colorClass: 'item-red',
//     },
//     {
//         title: 'Velit Doloremque',
//         description: 'Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.',
//         icon: 'bi bi-calendar4-week icon',
//         delay: '500',
//         colorClass: 'item-indigo',
//     },
//     {
//         title: 'Dolori Architecto',
//         description: 'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.',
//         icon: 'bi bi-chat-square-text',
//         delay: '600',
//         colorClass: 'item-pink',
//     },
// ];

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
            img: "/assets/img/chat_img.jpg",
            buttons: [],
            delay: '100',
        },
        {
            id: 2,
            title: "CALL US",
            description: "Call",
            highlight: "+91 63540 51487",
            icon: <FaPhone size={32} color="#246696ff" />,
            img: "/assets/img/call_img1.jpg",
            buttons: ["CALL NOW", "EMAIL"],
            delay: '200',
        },
        {
            id: 3,
            title: "OUR MEMBERSHIP",
            description: "",
            highlight: "",
            icon: <FaIdCard size={32} color="#246696ff" />,
            img: "/assets/img/membership_img1.jpg",
            logos: [
                "/assets/img/member1.jpg",
                "/assets/img/member2.jpg",
                "/assets/img/member3.jpg",
                "/assets/img/member4.jpg",
            ],
            buttons: [],
            delay: '300',
        },
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

                                    {card.id !== 3 ? (
                                        <p className="card-text">
                                            {card.description}{" "}
                                            {card.highlight && (
                                                <span className="text-highlight  fw-bold">{card.highlight}</span>
                                            )}
                                        </p>
                                    ) : (
                                        <div className="d-flex justify-content-center flex-wrap gap-3 mt-3">
                                            {card.logos.map((logo, i) => (
                                                <img key={i} src={logo} alt={`Logo ${i}`} height="43" />
                                            ))}
                                        </div>
                                    )}

                                    {card.buttons.length > 0 && (
                                        <div className="d-flex justify-content-center gap-2 mt-3">
                                            {card.buttons.map((btn, i) => (
                                                <button
                                                    key={i}
                                                    className={`btn ${btn === "CALL NOW" ? "btn-highlight" : "btn-outline-dark "
                                                        } btn-sm`}
                                                >
                                                    {btn}
                                                </button>
                                            ))}
                                        </div>
                                    )}
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
