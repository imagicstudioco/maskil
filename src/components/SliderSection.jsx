





import React, { useEffect } from 'react';
import Swiper from 'swiper';
import Bg from "../assets/images/header.jpg"
import {Link} from 'react-scroll';


function SliderSection() {
    useEffect(() => {
        const swiper = new Swiper('.swiper-container', {
            // Specify your swiper options here
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        return () => {
            swiper.destroy();
        };
    }, []);

    return (
        <>
          <section id='home' className="tj-slider-section" style={{ backgroundImage:  `url(${Bg})` }}>
            <div className="swiper-container tj-hero-slider swiper-fade swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress swiper-backface-hidden">
                <div className="swiper-wrapper" style={{ transitionDuration: "0ms" }}>
                <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-bg-image="assets/images/banner-bg/hero-bg1.jpg" style={{ backgroundImage: 'url("assets/images/banner-bg/hero-bg1.jpg")' }}>
                        <div className="container">
                            <div className="hero-content-area">
                                <div className="tj-sec-heading">
                                    <span className="white-sub-title">Collaboration With Chat</span>
                                    <h1 className="title">
                                        Better Design For Your Digital <span className="active-shape">Products.</span>
                                    </h1>
                                    <div className="desc">
                                        <p>
                                            It is a long established fact that a reader will be distracted by the
                                            readable content of a page when looking at its layout. The point of
                                            using Lorem Ipsum is that it has a more-or-less normal distribution of
                                        </p>
                                    </div>
                                    <div className="hero-button d-flex">
                                        <Link to="about" className="btn tj-primary-btn">Get Started </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-group-shape">
                            {/* Repeat shape elements here */}
                        </div>
                    </div>
                    {/* Repeat additional slides similarly */}
                   
                </div>
                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
            </div>
        </section>
        </>
    );
}

export default SliderSection;
