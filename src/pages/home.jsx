import React, { useRef, useState } from 'react';
import Hero from '../components/hero';
import About from './about';
import ServiceDetails from './services';
import Contact from './contact';
import Select from 'react-select';
import { toast } from 'react-hot-toast';
import { sendInquiry } from '../assets/js/utils/contact-us';

const Home = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        country_code: null,
        phone: '',
        institute: '',
        country: null,
    });

    const getStartRef = useRef(null);

    const scrollToGetStart = () => {
        const offset = 100;
        const top = getStartRef.current.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
    };

    const countries = [
        { value: 'IN', label: 'India', code: '+91' },
        { value: 'US', label: 'United States', code: '+1' },
        { value: 'GB', label: 'United Kingdom', code: '+44' },
        { value: 'AU', label: 'Australia', code: '+61' },
        { value: 'CA', label: 'Canada', code: '+1' },
        { value: 'AE', label: 'UAE', code: '+971' },
        { value: 'SG', label: 'Singapore', code: '+65' },
        { value: 'DE', label: 'Germany', code: '+49' },
        { value: 'FR', label: 'France', code: '+33' },
        { value: 'IT', label: 'Italy', code: '+39' },
        { value: 'NZ', label: 'New Zealand', code: '+64' },
        { value: 'ZA', label: 'South Africa', code: '+27' }
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        const { name, email, phone, institute, country, countryCode } = formData;

        if (!name || !email || !phone || !institute || !country || !countryCode) {
            toast.error('Please fill in all fields.', {
                style: { background: '#ffe6e6', color: '#ff4d4f' }
            });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error('Invalid email format.');
            return;
        }

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            toast.error('Phone number must be 10 digits.');
            return;
        }

        try {
            await sendInquiry(name, email, phone, institute, countryCode.code, country.label);

            toast.success('Form submitted successfully!');

            setFormData({
                name: '',
                email: '',
                phone: '',
                institute: '',
                country: null,
                countryCode: null
            });
        } catch (err) {
            toast.error(err.message || 'Submission failed.');
        }
    };



    return (
        <main>
            <Hero />

            <div
                id="getstart"
                ref={ getStartRef }
                className="signup-section bg-dotted"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                <div className="signup-card shadow p-2 p-md-5">
                    <div className="text-center">
                        <h4 className="fw-semibold mb-4 text-white text-center">
                            Sign up now to avail <span className="highlight">90% Accreditation Grants</span> for Educational Institutions, Businesses & Professionals
                        </h4>
                    </div>

                    <div className="row g-3 align-items-center justify-content-center">
                        <div className="col-12 col-md-2">
                            <input
                                type="text"
                                name="name"
                                value={ formData.name }
                                onChange={ handleChange }
                                className="form-control form-control-lg"
                                placeholder="Full Name"
                            />
                        </div>

                        <div className="col-12 col-md-2">
                            <input
                                type="email"
                                name="email"
                                value={ formData.email }
                                onChange={ handleChange }
                                className="form-control form-control-lg"
                                placeholder="Email"
                            />
                        </div>

                        <div className="col-12 col-md-3">
                            <div className="d-flex align-items-center">
                                <Select
                                    options={ countries }
                                    value={ formData.countryCode }
                                    onChange={ (selectedOption) =>
                                        setFormData({ ...formData, countryCode: selectedOption })
                                    }
                                    placeholder="+00"
                                    className="flex-grow-1"
                                    classNamePrefix="react-select"
                                    menuPortalTarget={ document.body }
                                    formatOptionLabel={ ({ code }) => (
                                        <div className="d-flex align-items-center gap-2">
                                            <span>{ code }</span>
                                        </div>
                                    ) }
                                    styles={ {
                                        container: (provided) => ({
                                            ...provided,
                                            minWidth: '90px',
                                        }),
                                        menuPortal: base => ({ ...base, zIndex: 9999 }),
                                    } }
                                />

                                <input
                                    type="tel"
                                    name="phone"
                                    value={ formData.phone }
                                    onChange={ handleChange }
                                    className="form-control form-control-lg phone-number-input"
                                    placeholder="Phone Number"
                                />
                            </div>
                        </div>


                        <div className="col-12 col-md-2">
                            <input
                                type="text"
                                name="institute"
                                value={ formData.institute }
                                onChange={ handleChange }
                                className="form-control form-control-lg"
                                placeholder="Institute Name"
                            />
                        </div>

                        <div className="col-12 col-md-2 position-relative z-3">
                            <Select
                                options={ countries }
                                value={ formData.country }
                                onChange={ (option) => setFormData({ ...formData, country: option }) }
                                placeholder="Select Country"
                                classNamePrefix="react-select"
                                className="custom-select"
                                menuPortalTarget={ document.body }
                                formatOptionLabel={ ({ value, label }) => (
                                    <div className="d-flex align-items-center gap-3">
                                        <img
                                            src={ `https://flagcdn.com/w40/${value.toLowerCase()}.png` }
                                            alt={ label }
                                            style={ { width: '20px' } }
                                        />
                                        <h6 className="m-0">{ label }</h6>
                                    </div>
                                ) }
                            />
                        </div>

                        <div className="col-12 col-md-1 d-flex justify-content-center">
                            <button
                                type="button"
                                className="btn btn-warning btn-lg"
                                onClick={ handleSubmit }
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <About />
            <ServiceDetails />
            <Contact />

            <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </main>
    );
};

export default Home;
