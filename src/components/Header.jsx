import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo from "../assets/images/white-logo.png";

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="tj-header-area header-style-two header-sticky">
           <div className="header-topbar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="topbar-content-area">
                                <div className="topbar-left-content">
                                    <div className="topbar-contact">
                                        <ul className="dot-style">
                                          
                                            <li>
                                                <i className="flaticon-open-envelope"><FaEnvelope /></i><Link to="mailto:hello@maskil.co.uk">hello@maskil.co.uk</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="topbar-right-content">
                                    <div className="topbar-share">
                                        <ul className="dot-style">
                                            <li>
                                                <Link to="#"> <i className="fa-brands fa-instagram"><FaInstagram /></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#"> <i className="fa-brands fa-twitter"><FaTwitter /></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#"> <i className="fa-brands fa-facebook-f"><FaFacebook /></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="header-content-area">
                                <div className="logo-area">
                                    <Link to="home">
                                        <img src={logo} alt="Logo" />
                                    </Link>
                                </div>
                                <button className="mobile-menu-toggle d-lg-none" onClick={toggleMobileMenu}>
                                    <FaBars />
                                </button>
                                {isMobileMenuOpen && ( // Render mobile menu only when isMobileMenuOpen is true
                                    <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                                        {/* Mobile Menu Content */}
                                        <ul>
                                            <li><Link to="home" onClick={toggleMobileMenu}>Home</Link></li>
                                            <li><Link to="about" onClick={toggleMobileMenu}>About Us</Link></li>
                                            <li><Link to="services" onClick={toggleMobileMenu}>Our Services</Link></li>
                                            <li><Link to="portfolio" onClick={toggleMobileMenu}>Portfolio</Link></li>
                                            <li><Link to="contact" onClick={toggleMobileMenu}>Contact Us</Link></li>
                                        </ul>
                                    </div>
                                )}
                                <div className="header-button d-flex d-none d-lg-block">
                                    {/* Regular Menu Items (Hidden on Small Screens) */}
                                    <Link to="home" className="btn tj-black-btn">Home</Link>
                                    <Link to="about" className="btn tj-black-btn">About Us</Link>
                                    <Link to="services" className="btn tj-black-btn">Our Services</Link>
                                    <Link to="portfolio" className="btn tj-black-btn">Portfolio</Link>
                                    <Link to="contact" className="btn tj-black-btn">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
