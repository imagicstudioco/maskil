






import React from 'react';
import img1 from "../assets/images/about-1.png";
import img2 from "../assets/images/about-2.png";
import img3 from "../assets/images/about-3.png";
import img4 from "../assets/images/about-4.png";
import SVG1 from "../assets/images/shape-37.svg";
import SVG2 from "../assets/images/ab-shape.svg"
import SVG3 from "../assets/images/shape-9.svg"
import SVG4 from "../assets/images/shape-10.svg"
import SVG5 from "../assets/images/shape-13.svg"

function AboutSection() {
    return (
       <>
        <section id='about' className="tj-about-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-12">
                        <div className="about-image-group">
                            <div className="about-circle-box">
                                <img className="circle-one" src={SVG2} alt="Shape" />
                                <div className="ab-circle">
                                    <svg className="shape-1" viewBox="0 0 100 100" width="100" height="100">
                                        <defs>
                                            <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"></path>
                                        </defs>
                                        <text fontSize="15">
                                            <textPath xlinkHref="#circle" className="shape-1">
                                                _MASKIL_,    _MASKIL_,    _MASKIL_, 
                                            </textPath>
                                        </text>
                                    </svg>
                                </div>
                            </div>
                            <div className="about-image1 pulse">
                                <img src={img1} alt="Image" />
                            </div>
                            <div className="about-image2 pulse">
                                <img src={img2} alt="Image" />
                            </div>
                            <div className="about-image3 pulse">
                                <img src={img3} alt="Image" />
                            </div>
                            <div className="about-image4 pulse">
                                <img src={img4} alt="Image" />
                            </div>
                            <div className="about-shape1 shake-y">
                                <img src={SVG3} alt="Shape" />
                            </div>
                            <div className="about-shape2 pulse">
                                <img src={SVG4} alt="Shape" />
                            </div>
                            <div className="about-shape3 pulse">
                                <img src={SVG5} alt="Shape" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12">
                        <div className="about-content-one" data-sal="slide-left" data-sal-duration="1000" data-sal-delay="600">
                            <div className="tj-sec-heading">
                                <span className="sub-title">About Us</span>
                                <h2 className="sec-title">Making Your Business More Unique</h2>
                                <div className="desc">
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the
                                        majority have suffered alteration in some form, by injected humour, or
                                        randomised words which don't look even slightly believable.
                                    </p>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the
                                        majority have suffered alteration in some form,
                                    </p>
                                    <p>
                                        by injected humour, or randomised words which don't look even slightly
                                        believable.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-section-shape pulse">
                <img src={SVG1} alt="Shape" />
            </div>
        </section>
       </>
    );
}

export default AboutSection;
