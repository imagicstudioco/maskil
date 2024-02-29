






import React from 'react';
import {
    FaEnvelope,
    FaFacebook,
  FaInstagram,
  FaTwitter
  } from 'react-icons/fa';
import logo from "../assets/images/white-logo.png";
import {Link} from 'react-scroll';

function Header() {
    return (
        <>
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
                                    <div className="logo">
                                        <Link to="home"><img src={logo} alt="Logo" /></Link>
                                    </div>
                                </div>
                                <div className="header-button d-flex d-none d-lg-block">
                                    <Link to="home" className="btn tj-black-btn">Home</Link>
                                </div>
                                <div className="header-button d-flex d-none d-lg-block">
                                    <Link to="about" className="btn tj-black-btn">About Us</Link>
                                </div>
                                <div className="header-button d-flex d-none d-lg-block">
                                    <Link to="services" className="btn tj-black-btn">Our Services</Link>
                                </div>
                                <div className="header-button d-flex d-none d-lg-block">
                                    <Link to="portfolio" className="btn tj-black-btn">Portfolio</Link>
                                </div>
                                <div className="header-button d-flex d-none d-lg-block">
                                    <Link to="contact" className="btn tj-black-btn">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
}

export default Header;
