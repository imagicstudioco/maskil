






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

                    <div className="desc">
                        <p>
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release
                        </p>
                    </div>
                </div>
               
            </div>
        </section>
        </>
    );
}

export default PortfolioPage;
