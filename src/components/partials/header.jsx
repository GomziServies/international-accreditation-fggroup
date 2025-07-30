import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const navRef = useRef();

  const toggleMobileNav = () => {
    setMobileNavOpen(prev => {
      const newState = !prev;
      document.body.classList.toggle('mobile-nav-active', newState);
      return newState;
    });
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
    document.body.classList.remove('mobile-nav-active');
  };

  // Close menu if clicking outside nav
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileNavOpen && navRef.current && !navRef.current.contains(event.target)) {
        closeMobileNav();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileNavOpen]);

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">

        <Link to="/" className="logo d-flex align-items-center me-auto underline-none">
          <img src="/assets/img/iptna-logo.png" alt="Logo" className="logo-img" />
          <div className="section-title about section m-0 p-0"><h2 className='m-0 ms-2' style={{ color: '#246696ff' }}>IPTNA</h2></div>
        </Link>


        <nav
          id="navmenu"
          className={`navmenu ${mobileNavOpen ? 'mobile-nav-active' : ''}`}
          ref={navRef}
        >
          <ul className='fw-bold'>
            <li><a href="#hero" onClick={() => { closeMobileNav(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</a></li>
            <li><a href="#about" onClick={closeMobileNav}>About</a></li>
            <li><a href="#contact" onClick={closeMobileNav}>Contact us</a></li>
          </ul>

          <i
            className={`mobile-nav-toggle d-xl-none bi ${mobileNavOpen ? 'bi-x' : 'bi-list'}`}
            onClick={toggleMobileNav}
          ></i>
        </nav>

        <a href="#getstart" className="btn-getstarted underline-none" onClick={(e) => {
          e.preventDefault();
          const offset = 100; // same offset
          const element = document.getElementById("getstart");
          if (element) {
            const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: "smooth" });
          }
          closeMobileNav();
        }}>
          Get Started
        </a>

      </div>
    </header>
  );
};

export default Header;
