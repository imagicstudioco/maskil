






import React, { useState, useEffect } from 'react';
import SVG1 from "../assets/images/footer-shape.svg"
import SVG2 from "../assets/images/footer-shape1.svg"

function Footer() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the current year when the component mounts
    setCurrentYear(new Date().getFullYear());
  }, []); // Empty dependency array ensures the effect runs only once

    return (
       <>
        <footer className="tj-footer-two">
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright-content-area">
                                <div className="copyright-left-content">
                                    <p>
                                        Copyright © {currentYear} Maskil All Rights
                                        Reserved.
                                    </p>
                                </div>
                                <div className="copyright-menu">
                                    <ul>
                                        <li><a href="#">Setting &amp; Privacy</a></li>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Support</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-section-shape1">
                <div className="footer-group-shape">
                    <img src={SVG1} alt="Shape" />
                </div>
                <div className="footer-group-shape1">
                    <img src={SVG2} alt="Shape" />
                </div>
            </div>
        </footer>
       </>
    );
}

export default Footer;
