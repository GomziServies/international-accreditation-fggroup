import React, { useEffect, useRef, useState } from 'react';
import Hero from '../components/hero';
import About from './about';
import ServiceDetails from './services';
import Contact from './contact';
import Select from 'react-select';
import { toast } from 'sonner';

const Home = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        institute: '',
        country: null,
    });
    const getStartRef = useRef(null);

    const scrollToGetStart = () => {
        const offset = 100; // Adjust this offset as per your header height
        const top = getStartRef.current.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({ top, behavior: 'smooth' });
    };

    const countries = [
        { value: "AF", label: "Afghanistan" },
        { value: "AL", label: "Albania" },
        { value: "DZ", label: "Algeria" },
        { value: "AS", label: "American Samoa" },
        { value: "AD", label: "Andorra" },
        { value: "AO", label: "Angola" },
        { value: "AI", label: "Anguilla" },
        { value: "AQ", label: "Antarctica" },
        { value: "AG", label: "Antigua and Barbuda" },
        { value: "AR", label: "Argentina" },
        { value: "AM", label: "Armenia" },
        { value: "AW", label: "Aruba" },
        { value: "AU", label: "Australia" },
        { value: "AT", label: "Austria" },
        { value: "AZ", label: "Azerbaijan" },
        { value: "BS", label: "Bahamas" },
        { value: "BH", label: "Bahrain" },
        { value: "BD", label: "Bangladesh" },
        { value: "BB", label: "Barbados" },
        { value: "BY", label: "Belarus" },
        { value: "BE", label: "Belgium" },
        { value: "BZ", label: "Belize" },
        { value: "BJ", label: "Benin" },
        { value: "BM", label: "Bermuda" },
        { value: "BT", label: "Bhutan" },
        { value: "BO", label: "Bolivia" },
        { value: "BQ", label: "Bonaire, Sint Eustatius and Saba" },
        { value: "BA", label: "Bosnia and Herzegovina" },
        { value: "BW", label: "Botswana" },
        { value: "BV", label: "Bouvet Island" },
        { value: "BR", label: "Brazil" },
        { value: "IO", label: "British Indian Ocean Territory" },
        { value: "BN", label: "Brunei Darussalam" },
        { value: "BG", label: "Bulgaria" },
        { value: "BF", label: "Burkina Faso" },
        { value: "BI", label: "Burundi" },
        { value: "CV", label: "Cabo Verde" },
        { value: "KH", label: "Cambodia" },
        { value: "CM", label: "Cameroon" },
        { value: "CA", label: "Canada" },
        { value: "KY", label: "Cayman Islands" },
        { value: "CF", label: "Central African Republic" },
        { value: "TD", label: "Chad" },
        { value: "CL", label: "Chile" },
        { value: "CN", label: "China" },
        { value: "CX", label: "Christmas Island" },
        { value: "CC", label: "Cocos (Keeling) Islands" },
        { value: "CO", label: "Colombia" },
        { value: "KM", label: "Comoros" },
        { value: "CG", label: "Congo" },
        { value: "CD", label: "Congo (DRC)" },
        { value: "CK", label: "Cook Islands" },
        { value: "CR", label: "Costa Rica" },
        { value: "CI", label: "Côte d'Ivoire" },
        { value: "HR", label: "Croatia" },
        { value: "CU", label: "Cuba" },
        { value: "CW", label: "Curaçao" },
        { value: "CY", label: "Cyprus" },
        { value: "CZ", label: "Czechia" },
        { value: "DK", label: "Denmark" },
        { value: "DJ", label: "Djibouti" },
        { value: "DM", label: "Dominica" },
        { value: "DO", label: "Dominican Republic" },
        { value: "EC", label: "Ecuador" },
        { value: "EG", label: "Egypt" },
        { value: "SV", label: "El Salvador" },
        { value: "GQ", label: "Equatorial Guinea" },
        { value: "ER", label: "Eritrea" },
        { value: "EE", label: "Estonia" },
        { value: "SZ", label: "Eswatini" },
        { value: "ET", label: "Ethiopia" },
        { value: "FK", label: "Falkland Islands" },
        { value: "FO", label: "Faroe Islands" },
        { value: "FJ", label: "Fiji" },
        { value: "FI", label: "Finland" },
        { value: "FR", label: "France" },
        { value: "GF", label: "French Guiana" },
        { value: "PF", label: "French Polynesia" },
        { value: "TF", label: "French Southern Territories" },
        { value: "GA", label: "Gabon" },
        { value: "GM", label: "Gambia" },
        { value: "GE", label: "Georgia" },
        { value: "DE", label: "Germany" },
        { value: "GH", label: "Ghana" },
        { value: "GI", label: "Gibraltar" },
        { value: "GR", label: "Greece" },
        { value: "GL", label: "Greenland" },
        { value: "GD", label: "Grenada" },
        { value: "GP", label: "Guadeloupe" },
        { value: "GU", label: "Guam" },
        { value: "GT", label: "Guatemala" },
        { value: "GG", label: "Guernsey" },
        { value: "GN", label: "Guinea" },
        { value: "GW", label: "Guinea-Bissau" },
        { value: "GY", label: "Guyana" },
        { value: "HT", label: "Haiti" },
        { value: "HN", label: "Honduras" },
        { value: "HK", label: "Hong Kong" },
        { value: "HU", label: "Hungary" },
        { value: "IS", label: "Iceland" },
        { value: "IN", label: "India" },
        { value: "ID", label: "Indonesia" },
        { value: "IR", label: "Iran" },
        { value: "IQ", label: "Iraq" },
        { value: "IE", label: "Ireland" },
        { value: "IM", label: "Isle of Man" },
        { value: "IL", label: "Israel" },
        { value: "IT", label: "Italy" },
        { value: "JM", label: "Jamaica" },
        { value: "JP", label: "Japan" },
        { value: "JE", label: "Jersey" },
        { value: "JO", label: "Jordan" },
        { value: "KZ", label: "Kazakhstan" },
        { value: "KE", label: "Kenya" },
        { value: "KI", label: "Kiribati" },
        { value: "KP", label: "North Korea" },
        { value: "KR", label: "South Korea" },
        { value: "KW", label: "Kuwait" },
        { value: "KG", label: "Kyrgyzstan" },
        { value: "LA", label: "Laos" },
        { value: "LV", label: "Latvia" },
        { value: "LB", label: "Lebanon" },
        { value: "LS", label: "Lesotho" },
        { value: "LR", label: "Liberia" },
        { value: "LY", label: "Libya" },
        { value: "LI", label: "Liechtenstein" },
        { value: "LT", label: "Lithuania" },
        { value: "LU", label: "Luxembourg" },
        { value: "US", label: "United States" },
        { value: "UY", label: "Uruguay" },
        { value: "UZ", label: "Uzbekistan" },

    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, phone, institute, country } = formData;

        if (!name && !email && !phone && !institute && !country) {
            toast.error('Please fill in all fields.', {
                style: {
                    background: '#ffe6e6',
                    color: '#ff4d4f',
                }
            });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error('Invalid email format.', {
                style: {
                    background: '#ffe6e6',
                    color: '#ff4d4f',
                }
            });
            return;
        }

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            toast.error('Phone number must be exactly 10 digits.', {
                style: {
                    background: '#ffe6e6',
                    color: '#ff4d4f',
                }
            });
            return;
        }

        if (!institute) {
            toast.error('Please enter institute name .', {
                style: {
                    background: '#ffe6e6',
                    color: '#ff4d4f',
                }
            });
            return;
        }

        if (!country || !country.value) {
            toast.error('Please select a country.', {
                style: {
                    background: '#ffe6e6',
                    color: '#ff4d4f',
                }
            });
            return;
        }

        toast.success('Form submitted successfully !', {
            style: {
                background: '#f2fcf4ff',
                color: '#2ecc71',
            }
        });

        setFormData({
            name: '',
            email: '',
            phone: '',
            institute: '',
            country: null,
        });
    };


    return (
        <main>
            <Hero />

            <div id="getstart"
                ref={getStartRef} className="signup-section bg-dotted" data-aos="fade-up" data-aos-delay="200" >
                <div className="signup-card shadow p-2 p-md-5">
                    <div className="text-center">
                        <h4 className="fw-semibold mb-4 text-white text-center">
                            Sign up now to avail <span className="highlight">90% Accreditation Grants</span> for Educational Institutions, Businesses & Professionals
                        </h4>
                    </div>

                    <form className="row g-3 align-items-center justify-content-center" >
                        <div className="col-12 col-md-2">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="form-control form-control-lg"
                                placeholder="Full Name"
                            />
                        </div>

                        <div className="col-12 col-md-2">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-control form-control-lg"
                                placeholder="Email"
                            />
                        </div>

                        <div className="col-12 col-md-2">
                            <input
                                type='number'
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="form-control form-control-lg"
                                placeholder="Phone Number"
                            />
                        </div>

                        <div className="col-12 col-md-2">
                            <input
                                type="text"
                                name="institute"
                                value={formData.institute}
                                onChange={handleChange}
                                className="form-control form-control-lg"
                                placeholder="Institute Name"
                            />
                        </div>

                        <div className="col-12 col-md-2 position-relative z-3 ">
                            <Select
                                options={countries}
                                value={formData.country}
                                onChange={(option) => setFormData({ ...formData, country: option })}
                                placeholder="Select Country"
                                classNamePrefix="react-select"
                                className="custom-select"
                                menuPortalTarget={document.body}
                                formatOptionLabel={({ value, label }) => (
                                    <div className="d-flex align-items-center gap-3">
                                        <img src={`https://flagcdn.com/w40/${value.toLowerCase()}.png`} alt={label} />
                                        <h6 className="m-0">{label}</h6>
                                    </div>
                                )}
                            />
                        </div>

                        <div className="col-12 col-md-1 d-flex justify-content-center" >
                            <button type="submit" className="btn btn-warning btn-lg" onClick={handleSubmit}>Submit</button>
                        </div>
                    </form>
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
