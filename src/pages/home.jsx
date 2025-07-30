import React, { useEffect } from 'react';
import Hero from '../components/hero';
import About from './about';
// import Stats from '../components/status';
import ServiceDetails from './services';
import Contact from './contact';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <main>

            <Hero />

            <div className="signup-section bg-dotted" data-aos="fade-up" data-aos-delay="200">
                <div className="signup-card  shadow p-2 p-md-5">
                    <div className="text-center">
                        <h4 className="fw-semibold mb-4 text-white text-center">
                            Sign up now to avail <span className="highlight">90% Accreditation Grants</span> for Educational Institutions, Businesses & Professionals
                        </h4>
                    </div>

                    <form className="row g-3 align-items-center justify-content-center">
                        <div className="col-12 col-md-2">
                            <select className="form-select form-control-lg" required>
                                <option>Select Category</option>
                                <option>Education</option>
                                <option>Business</option>
                                <option>Professional</option>
                            </select>
                        </div>

                        <div className="col-12 col-md-2">
                            <input type="text" className="form-control form-control-lg" placeholder="Full Name" required />
                        </div>

                        <div className="col-12 col-md-2">
                            <input type="email" className="form-control form-control-lg" placeholder="Email" required />
                        </div>

                        <div className="col-12 col-md-2">
                            <input type="tel" className="form-control form-control-lg" placeholder="Phone Number" maxLength={10} required />
                        </div>

                        <div className="col-12 col-md-2">
                            <input type="tel" className="form-control form-control-lg" placeholder="Institute Name" maxLength={10} required />
                        </div>

                        <div className="col-12 col-md-1 d-flex justify-content-center">
                            <button type="submit" className="btn btn-warning btn-lg">Submit</button>
                        </div>
                    </form>

                    <div className="text-center mt-4">
                        <small className="text-white fs-5">
                            Returning user?{" "}
                            <a href="#" className="text-warning fw-semibold">
                                Click here
                            </a>
                        </small>
                    </div>
                </div>
            </div>

            <About />

            <div
                className="text-white p-5 bg-img"
            >
                <h2 className="mb-2 text-white text-center">
                    International Accreditation Organization is offering up to{" "}
                    <span className="text-warning fw-bold">90% Accreditation Grants</span>
                </h2>
                <h2 className="mb-4 text-white text-center">
                    to Universities, Colleges, Schools, Institutes, Businesses and Professionals.{" "}
                    <strong>Register Now to Lock Your Grant.</strong>
                </h2>

                <form className="row g-2 align-items-center justify-content-center p-3 px-0">
                    <div className="col-md-2">
                        <select className="form-select">
                            <option>Select Category</option>
                            <option>University</option>
                            <option>College</option>
                            <option>School</option>
                            <option>Institute</option>
                            <option>Business</option>
                            <option>Professional</option>
                        </select>
                    </div>

                    <div className="col-md-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Full Name"
                        />
                    </div>

                    <div className="col-md-2">
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Email"
                        />
                    </div>

                    <div className="col-md-2 d-flex align-items-center">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Institute Name"
                        />
                    </div>

                    <div className="col-12 col-md-2">
                        <input type="tel" className="form-control form-control-lg" placeholder="Institute Name" maxLength={10} required />
                    </div>

                    <div className="col-md-1">
                        <button className="btn btn-warning btn-lg w-100">Submit</button>
                    </div>
                </form>

                <div className="text-center mt-4">
                    <small className="text-white fs-5">
                        Returning user?{" "}
                        <a href="#" className="text-warning fw-semibold">
                            Click here
                        </a>
                    </small>
                </div>
            </div>

            <ServiceDetails />
            <Contact />

            <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </main>
    )
};

export default Home;