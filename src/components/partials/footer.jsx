import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer id="footer" className="footer light-background">

        <div className="container footer-top">
            <div className="row gy-4">

                <div className="col-lg-5 col-md-12 col-sm-12 footer-about">
                    <Link to="/" className="logo d-flex align-items-center underline-none">
                        {/* <span className="sitename ">OnePage</span> */}
                        <img src="/assets/img/iptna-logo.png" alt="Logo" className="logo-img" />
                    </Link>
                    <p>
                        We are dedicated to empowering professionals through resources, support, and community engagement. Join us in fostering growth, learning, and excellence in every step of your journey.
                    </p>
                    <div className="social-links d-flex mt-4">
                        <Link to="" className='underline-none'><i className="bi bi-twitter-x"></i></Link>
                        <Link to="" className='underline-none'><i className="bi bi-facebook"></i></Link>
                        <Link to="" className='underline-none'><i className="bi bi-instagram"></i></Link>
                        <Link to="" className='underline-none'><i className="bi bi-linkedin"></i></Link>
                        <Link to="" className='underline-none'><i className="bi bi-whatsapp"></i></Link>
                        <Link to="" className='underline-none'><i className="bi bi-facebook"></i></Link>
                    </div>
                </div>

                <div className="col-12 col-lg-2 col-6 col-sm-12 footer-links">
                    <h4>Quick Link</h4>
                    <ul>
                        <li><a href="#home" className='underline-none'>Home</a></li>
                        <li><a href="#about" className='underline-none'>About us</a></li>
                        <li><a href="#contact" className='underline-none'>Contact us</a></li>
                    </ul>
                </div>

                <div className="col-12 col-lg-3 col-md-12 col-sm-12 footer-contact text-md-start">
                    <h4>Contact Us</h4>
                    <p>2, Gomzi, Abhushan Bungalows, Near Sumul dairy road, Katargam, Surat-395004</p>
                    <p className="mt-4"><strong>Phone:</strong> <span>+91 63540 51487</span></p>
                    <p><strong>Email:</strong> <span>fitnesswithgomzi@gmail.com</span></p>
                </div>

            </div>
        </div>
    </footer>
);

export default Footer;
