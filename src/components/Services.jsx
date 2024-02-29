






import React from 'react';
import SVG1 from "../assets/images/shape-42.svg"

function ServiceSection() {
    return (
        <>
        <section id='services' className="tj-service-section-two">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tj-sec-heading">
                            <span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>Our Services</span>
                            <h2 className="sec-title wow fadeInUp" data-wow-delay=".4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                                We Empower Clients To <span className="active-color">Be Loved</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        
                        {/* Repeat other service items similarly */}
                        <div className="tj-service-item-two wow fadeInUp" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
                            <div className="service-content-info">
                                <div className="service-left-content">
                                    <div className="service-icon">
                                        <i className="flaticon-digital-marketing"></i>
                                    </div>
                                    <div className="service-text">
                                        <h3 className="title-link">
                                            Logo Creation & Graphic Design
                                        </h3>
                                        <span className="number">01</span>
                                    </div>
                                </div>
                            </div>
                            <div className="service-middle-content">
                                <div className="service-text">
                                    <div className="desc">
                                        <p>
                                            It is a long established fact that a the readable content of a page when
                                            looking at its layout. The point of using Lorem Ipsum is that it has a
                                            more.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Repeat other service items similarly */}
                        <div className="tj-service-item-two wow fadeInUp" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
                            <div className="service-content-info">
                                <div className="service-left-content">
                                    <div className="service-icon">
                                        <i className="flaticon-digital-marketing"></i>
                                    </div>
                                    <div className="service-text">
                                        <h3 className="title-link">
                                            Web & Mobile Application Development
                                        </h3>
                                        <span className="number">02</span>
                                    </div>
                                </div>
                            </div>
                            <div className="service-middle-content">
                                <div className="service-text">
                                    <div className="desc">
                                        <p>
                                            It is a long established fact that a the readable content of a page when
                                            looking at its layout. The point of using Lorem Ipsum is that it has a
                                            more.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Repeat other service items similarly */}
                        <div className="tj-service-item-two wow fadeInUp" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
                            <div className="service-content-info">
                                <div className="service-left-content">
                                    <div className="service-icon">
                                        <i className="flaticon-digital-marketing"></i>
                                    </div>
                                    <div className="service-text">
                                        <h3 className="title-link">
                                            Digital Marketing & Social Media Management
                                        </h3>
                                        <span className="number">03</span>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="service-middle-content">
                                <div className="service-text">
                                    <div className="desc">
                                        <p>
                                            It is a long established fact that a the readable content of a page when
                                            looking at its layout. The point of using Lorem Ipsum is that it has a
                                            more.
                                        </p>
                                    </div>
                                    
                                </div>

                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className="service-group-shape">
                <div className="service-shape pulse">
                    <img src={SVG1} alt="Shape" />
                </div>
                <div className="service-shape1 pulse">
                    <img src={SVG1} alt="Shape" />
                </div>
            </div>
        </section>
        </>
    );
}

export default ServiceSection;
