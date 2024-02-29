






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
                                <p>Maskil is a dynamic creative agency based in the heart of the UK, specializing in graphics and logo design, web and mobile app development, and social media management services. With a passion for innovation and a commitment to excellence, we empower businesses to thrive in the digital landscape.</p>

<p>Our team of experienced designers and developers collaborates closely with clients to understand their unique vision and goals. Whether it's crafting a captivating logo, building a user-friendly website or mobile app, or devising a winning social media strategy, we combine creativity with technical expertise to deliver outstanding results.</p>

<p>At Maskil, we believe in the power of design and technology to transform brands and drive business growth. With a focus on quality, professionalism, and customer satisfaction, we strive to exceed expectations and make a lasting impact in every project we undertake.</p>

<p>Partner with Maskil today and let us elevate your brand to new heights in the digital world.</p>
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
