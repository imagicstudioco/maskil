






import React from 'react';
import img1 from "../assets/images/portfolio-9.jpg";
import img2 from "../assets/images/portfolio-10.jpg";
import img3 from "../assets/images/portfolio-11.jpg";
import img4 from "../assets/images/portfolio-12.jpg";
import img5 from "../assets/images/portfolio-13.jpg";
import img6 from "../assets/images/portfolio-14.jpg";

function PortfolioPage() {
    return (
        <>
        <section id='portfolio' className="tj-portfolio-page">
            <div className="container">
                <div className="tj-sec-heading text-center" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="600">
                    <span className="sub-title">Portfolio</span>
                    <h2 className="sec-title">Featured Projects</h2>
                    <div className="desc">
                        <p>
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release
                        </p>
                    </div>
                </div>
                <div className="row">
                    
                    {/* Repeat other portfolio items similarly */}
                    <div className="col-lg-4 col-md-6 col-sm-6" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">
                        <div className="tj-portfolio-item-two">
                            <div className="portfolio-image">
                                <a href="portfolio-details.html"><img src={img1} alt="Image" /></a>
                            </div>
                            <div className="portfolio-content">
                                <span className="sub-title">Business Consulting</span>
                                <h4 className="title">
                                    <a href="portfolio-details.html">Digital marketing Services</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                     {/* Repeat other portfolio items similarly */}
                     <div className="col-lg-4 col-md-6 col-sm-6" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">
                        <div className="tj-portfolio-item-two">
                            <div className="portfolio-image">
                                <a href="portfolio-details.html"><img src={img2} alt="Image" /></a>
                            </div>
                            <div className="portfolio-content">
                                <span className="sub-title">Business Consulting</span>
                                <h4 className="title">
                                    <a href="portfolio-details.html">Digital marketing Services</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                     {/* Repeat other portfolio items similarly */}
                     <div className="col-lg-4 col-md-6 col-sm-6" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">
                        <div className="tj-portfolio-item-two">
                            <div className="portfolio-image">
                                <a href="portfolio-details.html"><img src={img3} alt="Image" /></a>
                            </div>
                            <div className="portfolio-content">
                                <span className="sub-title">Business Consulting</span>
                                <h4 className="title">
                                    <a href="portfolio-details.html">Digital marketing Services</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                     {/* Repeat other portfolio items similarly */}
                     <div className="col-lg-4 col-md-6 col-sm-6" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">
                        <div className="tj-portfolio-item-two">
                            <div className="portfolio-image">
                                <a href="portfolio-details.html"><img src={img4} alt="Image" /></a>
                            </div>
                            <div className="portfolio-content">
                                <span className="sub-title">Business Consulting</span>
                                <h4 className="title">
                                    <a href="portfolio-details.html">Digital marketing Services</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                     {/* Repeat other portfolio items similarly */}
                     <div className="col-lg-4 col-md-6 col-sm-6" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">
                        <div className="tj-portfolio-item-two">
                            <div className="portfolio-image">
                                <a href="portfolio-details.html"><img src={img5} alt="Image" /></a>
                            </div>
                            <div className="portfolio-content">
                                <span className="sub-title">Business Consulting</span>
                                <h4 className="title">
                                    <a href="portfolio-details.html">Digital marketing Services</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                     {/* Repeat other portfolio items similarly */}
                     <div className="col-lg-4 col-md-6 col-sm-6" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">
                        <div className="tj-portfolio-item-two">
                            <div className="portfolio-image">
                                <a href="portfolio-details.html"><img src={img6} alt="Image" /></a>
                            </div>
                            <div className="portfolio-content">
                                <span className="sub-title">Business Consulting</span>
                                <h4 className="title">
                                    <a href="portfolio-details.html">Digital marketing Services</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default PortfolioPage;
