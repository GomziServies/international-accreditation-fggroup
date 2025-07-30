import React, { useEffect, useState } from 'react';
import { Toaster, toast } from 'sonner';
import { useLocation } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const { pathname } = useLocation();


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });



  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const { name, email, subject, message } = formData;

    if (!name && !email && !subject && !message) {
      toast.error("All fields are required. Please complete the form.", {
        style: {
          background: '#ffe6e6',
          color: '#ff4d4f',
        }
      });
      return;
    }

    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
      toast.error('Please enter a valid email.', {
        icon: <FaCheckCircle color="red" size={20} />,
        style: {
          background: '#ffe6e6',
          color: '#ff4d4f',
        }
      })
      return;
    }

    toast.success('Form submitted successfully !', {
      icon: <FaCheckCircle color="#2ecc71" size={20} />,
      style: {
        background: '#f2fcf4ff',
        color: '#2ecc71',
      }
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };



  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section id="contact" className="contact section">
      <div className="container section-title " data-aos="fade-up">
        <h2>Contact</h2>
        <p>Have any questions or inquiries? Contact us today and our team will be happy to assist you with any information you need.</p>
      </div>

      <div className="container " data-aos="fade-up" data-aos-delay="100">


        <div className="row gy-4">
          <div className="col-lg-8 mt-0">
            {/* <form className="php-email-form" data-aos="fade-up" data-aos-delay="200" onSubmit={handleSubmit}>
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    name="message"
                    rows="6"
                    className="form-control"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="col-md-12 mb-2 text-center">
                  {status === "loading" && <div className="loading">Loading</div>}
                  {status === "error" && <div className="error-message">Something went wrong.</div>}
                  {status === "sent" && <div className="sent-message">Your message has been sent. Thank you!</div>}

                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form> */}
            <div className="mb-4" data-aos="fade-up" data-aos-delay="300">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.2981665519155!2d72.83843767600206!3d21.220021881180585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f565df09f5f%3A0xd41ca6ab8359da00!2sGomzi%20Consulting%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1752658271828!5m2!1sen!2sin"
                className='w-100 map-height'
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
          <div className="col-lg-4 mt-3">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>2, Gomzi, Abhushan Bungalows, Near Sumul dairy road, Katargam, Surat-395004</p>
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
      <Toaster position="top-right" />
    </section>
  );
};

export default Contact;
