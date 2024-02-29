






import React from 'react';
import SVG from "../assets/images/contact-shape.svg"
import Bg from "../assets/images/contact.jpg"


function ContactSection() {
    return (
        <>
        <section id='contact' className="tj-contact-section-two" style={{ backgroundImage:  `url(${Bg})` }} >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".7s">
                        <form id="contact-form2" noValidate>
                            <div className="contact-form-box2">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-input">
                                            <input type="text" className="form__input" placeholder="Name" name="con2Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-input">
                                            <input type="email" className="form__input" placeholder="Email" name="con2Email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-input">
                                            <input type="text" className="form__input" placeholder="Business services consultation" name="con2Subject" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-textarea">
                                            <textarea id="message" name="con2Message" placeholder="Type your query"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="tj-contact-button">
                                    <button className="tj-primary-btn" type="submit" value="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-right-content">
                            <div className="tj-sec-heading">
                                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">Contact Us</span>
                                <h2 className="sec-title wow fadeInUp" data-wow-delay=".4s">Get In Touch</h2>
                                <div className="desc wow fadeInUp" data-wow-delay=".5s">
                                    <p>
                                    Feel free to get in touch with us at Maskil to discuss your project needs or inquire about our services. You can reach us via email at <a href='mailto:hello@maskil.com'>hello@maskil.com</a> . We look forward to hearing from you and helping you achieve your digital goals.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-sec-shape">
                <img src={SVG} alt="Image" />
            </div>
        </section>
        </>
    );
}

export default ContactSection;
