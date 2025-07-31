import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Contact = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <section id="contact" className="contact section">
      <div className="container section-title " data-aos="fade-up">
        <h2>Contact</h2>
        <p>Get in touch with us for any questions, support, or business inquiries—we're here to help you.</p>
      </div>


      <div className="container " data-aos="fade-up" data-aos-delay="100">


        <div className="row gy-4">
          <div className="col-lg-8">
            <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.2981665519155!2d72.83843767600206!3d21.220021881180585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f565df09f5f%3A0xd41ca6ab8359da00!2sGomzi%20Consulting%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1752658271828!5m2!1sen!2sin"
                style={{ border: 0, width: '100%', height: '270px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
          <div className="col-lg-4 pt-2">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>2, Gomzi,, Abhushan Bungalows, Near Sumul dairy road, Katargam, Surat-395004</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+91 63540 51487</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>fitnesswithgomzi@gmail.com</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Contact;
