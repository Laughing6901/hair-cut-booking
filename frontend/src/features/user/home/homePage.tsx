import React from "react";
import { AboutUsBody } from "../about/aboutUsBody";
import { Header } from "../header/header";
import { HomePageBody } from "./homeBody";

export const HomePage: React.FC = () => {
    return(
        <>
        <Header/>
        <HomePageBody/>
        <AboutUsBody/>


        <div className="service">
            <div className="container">
                <div className="section-header text-center">
                    <p>Our Salon Services</p>
                    <h2>Best Salon and Barber Services for You</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-img">
                                <img src="img/service-1.jpg" alt="Image"/>
                            </div>
                            <h3>Hair Cut</h3>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                            </p>
                            <a className="btn" href="">Learn More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-img">
                                <img src="img/service-2.jpg" alt="Image"/>
                            </div>
                            <h3>Beard Style</h3>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                            </p>
                            <a className="btn" href="">Learn More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-img">
                                <img src="img/service-3.jpg" alt="Image"/>
                            </div>
                            <h3>Color and Wash</h3>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                            </p>
                            <a className="btn" href="">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        <div className="price">
            <div className="container">
                <div className="section-header text-center">
                    <p>Our Best Pricing</p>
                    <h2>We Provide Best Price in the City</h2>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="price-item">
                            <div className="price-img">
                                <img src="img/price-1.jpg" alt="Image"/>
                            </div>
                            <div className="price-text">
                                <h2>Hair Cut</h2>
                                <h3>$9.99</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="price-item">
                            <div className="price-img">
                                <img src="img/price-2.jpg" alt="Image"/>
                            </div>
                            <div className="price-text">
                                <h2>Hair Wash</h2>
                                <h3>$10.99</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="price-item">
                            <div className="price-img">
                                <img src="img/price-3.jpg" alt="Image"/>
                            </div>
                            <div className="price-text">
                                <h2>Hair Color</h2>
                                <h3>$11.99</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="price-item">
                            <div className="price-img">
                                <img src="img/price-4.jpg" alt="Image"/>
                            </div>
                            <div className="price-text">
                                <h2>Hair Shave</h2>
                                <h3>$12.99</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="price-item">
                            <div className="price-img">
                                <img src="img/price-5.jpg" alt="Image"/>
                            </div>
                            <div className="price-text">
                                <h2>Hair Straight</h2>
                                <h3>$13.99</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="price-item">
                            <div className="price-img">
                                <img src="img/price-6.jpg" alt="Image"/>
                            </div>
                            <div className="price-text">
                                <h2>Facial</h2>
                                <h3>$14.99</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="price-item">
                            <div className="price-img">
                                <img src="img/price-7.jpg" alt="Image"/>
                            </div>
                            <div className="price-text">
                                <h2>Shampoo</h2>
                                <h3>$15.99</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="price-item">
                            <div className="price-img">
                                <img src="img/price-8.jpg" alt="Image"/>
                            </div>
                            <div className="price-text">
                                <h2>Beard Trim</h2>
                                <h3>$16.99</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="price-item">
                            <div className="price-img">
                                <img src="img/price-9.jpg" alt="Image"/>
                            </div>
                            <div className="price-text">
                                <h2>Beard Shave</h2>
                                <h3>$17.99</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="price-item">
                            <div className="price-img">
                                <img src="img/price-10.jpg" alt="Image"/>
                            </div>
                            <div className="price-text">
                                <h2>Wedding Cut</h2>
                                <h3>$18.99</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="price-item">
                            <div className="price-img">
                                <img src="img/price-11.jpg" alt="Image"/>
                            </div>
                            <div className="price-text">
                                <h2>Clean Up</h2>
                                <h3>$19.99</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="price-item">
                            <div className="price-img">
                                <img src="img/price-12.jpg" alt="Image"/>
                            </div>
                            <div className="price-text">
                                <h2>Massage</h2>
                                <h3>$20.99</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        

        <div className="testimonial">
            <div className="container">
                <div className="owl-carousel testimonials-carousel">
                    <div className="testimonial-item">
                        <img src="img/testimonial-1.jpg" alt="Image"/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat. Fusce venenatis at lectus in malesuada. Suspendisse sit amet dolor et odio varius mattis.
                        </p>
                        <h2>Client Name</h2>
                        <h3>Profession</h3>
                    </div>
                    <div className="testimonial-item">
                        <img src="img/testimonial-2.jpg" alt="Image"/>
                        <p>
                            Phasellus pellentesque tempus pretium. Quisque in enim sit amet purus venenatis porttitor sed non velit. Vivamus vehicula finibus tortor. Aliquam vehicula molestie pulvinar. Sed varius libero in leo finibus, ac consectetur tortor rutrum.
                        </p>
                        <h2>Client Name</h2>
                        <h3>Profession</h3>
                    </div>
                    <div className="testimonial-item">
                        <img src="img/testimonial-3.jpg" alt="Image"/>
                        <p>
                            Sed in lectus eu eros tincidunt cursus. Aliquam eleifend velit nisl. Sed et posuere urna, ut vestibulum massa. Integer quis magna non enim luctus interdum. Phasellus sed eleifend erat. Aliquam ligula ex, semper vel tempor pellentesque, pretium eu nulla.
                        </p>
                        <h2>Client Name</h2>
                        <h3>Profession</h3>
                    </div>
                </div>
            </div>
        </div>




        <div className="team">
            <div className="container">
                <div className="section-header text-center">
                    <p>Our Barber Team</p>
                    <h2>Meet Our Hair Cut Expert Barber</h2>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="img/team-1.jpg" alt="Team Image"/>
                            </div>
                            <div className="team-text">
                                <h2>Adam Phillips</h2>
                                <p>Master Barber</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="img/team-2.jpg" alt="Team Image"/>
                            </div>
                            <div className="team-text">
                                <h2>Dylan Adams</h2>
                                <p>Hair Expert</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="img/team-3.jpg" alt="Team Image"/>
                            </div>
                            <div className="team-text">
                                <h2>Gloria Edwards</h2>
                                <p>Beard Expert</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="img/team-4.jpg" alt="Team Image"/>
                            </div>
                            <div className="team-text">
                                <h2>Josh Dunn</h2>
                                <p>Color Expert</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        

        <div className="contact">
            <div className="container-fluid">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4"></div>
                        <div className="col-md-8">
                            <div className="contact-form">
                                <div id="success"></div>
                                <form name="sentMessage" id="contactForm" noValidate>
                                    <div className="control-group">
                                        <input type="text" className="form-control" id="name" placeholder="Your Name" required data-validation-required-message="Please enter your name" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <input type="email" className="form-control" id="email" placeholder="Your Email" required data-validation-required-message="Please enter your email" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <input type="text" className="form-control" id="subject" placeholder="Subject" required data-validation-required-message="Please enter a subject" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <textarea className="form-control" id="message" placeholder="Message" required data-validation-required-message="Please enter your message"></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div>
                                        <button className="btn" type="submit" id="sendMessageButton">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        <div className="blog">
            <div className="container">
                <div className="section-header text-center">
                    <p>Latest From Blog</p>
                    <h2>Learn More from Latest Barber Blog</h2>
                </div>
                <div className="owl-carousel blog-carousel">
                    <div className="blog-item">
                        <div className="blog-img">
                            <img src="img/blog-1.jpg" alt="Blog"/>
                        </div>
                        <div className="blog-meta">
                            <i className="fa fa-list-alt"></i>
                            <a href="">Hair Cut</a>
                            <i className="fa fa-calendar-alt"></i>
                            <p>01-Jan-2045</p>
                        </div>
                        <div className="blog-text">
                            <h2>Lorem ipsum dolor</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                            </p>
                            <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="blog-item">
                        <div className="blog-img">
                            <img src="img/blog-2.jpg" alt="Blog"/>
                        </div>
                        <div className="blog-meta">
                            <i className="fa fa-list-alt"></i>
                            <a href="">Beard Style</a>
                            <i className="fa fa-calendar-alt"></i>
                            <p>01-Jan-2045</p>
                        </div>
                        <div className="blog-text">
                            <h2>Lorem ipsum dolor</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                            </p>
                            <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="blog-item">
                        <div className="blog-img">
                            <img src="img/blog-3.jpg" alt="Blog"/>
                        </div>
                        <div className="blog-meta">
                            <i className="fa fa-list-alt"></i>
                            <a href="">Color and Wash</a>
                            <i className="fa fa-calendar-alt"></i>
                            <p>01-Jan-2045</p>
                        </div>
                        <div className="blog-text">
                            <h2>Lorem ipsum dolor</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                            </p>
                            <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="blog-item">
                        <div className="blog-img">
                            <img src="img/blog-4.jpg" alt="Blog"/>
                        </div>
                        <div className="blog-meta">
                            <i className="fa fa-list-alt"></i>
                            <a href="">Hair Cut</a>
                            <i className="fa fa-calendar-alt"></i>
                            <p>01-Jan-2045</p>
                        </div>
                        <div className="blog-text">
                            <h2>Lorem ipsum dolor</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                            </p>
                            <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="blog-item">
                        <div className="blog-img">
                            <img src="img/blog-5.jpg" alt="Blog"/>
                        </div>
                        <div className="blog-meta">
                            <i className="fa fa-list-alt"></i>
                            <a href="">Beard Style</a>
                            <i className="fa fa-calendar-alt"></i>
                            <p>01-Jan-2045</p>
                        </div>
                        <div className="blog-text">
                            <h2>Lorem ipsum dolor</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                            </p>
                            <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="blog-item">
                        <div className="blog-img">
                            <img src="img/blog-6.jpg" alt="Blog"/>
                        </div>
                        <div className="blog-meta">
                            <i className="fa fa-list-alt"></i>
                            <a href=""><p>Color and Wash</p></a>
                            <i className="fa fa-calendar-alt"></i>
                            <p>01-Jan-2045</p>
                        </div>
                        <div className="blog-text">
                            <h2>Lorem ipsum dolor</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                            </p>
                            <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="footer-contact">
                                    <h2>Salon Address</h2>
                                    <p><i className="fa fa-map-marker-alt"></i>123 Street, New York, USA</p>
                                    <p><i className="fa fa-phone-alt"></i>+012 345 67890</p>
                                    <p><i className="fa fa-envelope"></i>info@example.com</p>
                                    <div className="footer-social">
                                        <a href=""><i className="fab fa-twitter"></i></a>
                                        <a href=""><i className="fab fa-facebook-f"></i></a>
                                        <a href=""><i className="fab fa-youtube"></i></a>
                                        <a href=""><i className="fab fa-instagram"></i></a>
                                        <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="footer-link">
                                    <h2>Quick Links</h2>
                                    <a href="">Terms of use</a>
                                    <a href="">Privacy policy</a>
                                    <a href="">Cookies</a>
                                    <a href="">Help</a>
                                    <a href="">FQAs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="footer-newsletter">
                            <h2>Newsletter</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Quisque eu lectus a leo dictum nec non quam. Tortor eu placerat rhoncus, lorem quam iaculis felis, sed lacus neque id eros.
                            </p>
                            <div className="form">
                                <input className="form-control" placeholder="Email goes here"/>
                                <button className="btn">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container copyright">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; <a href="#">Your Site Name</a>, All Right Reserved.</p>
                    </div>
                    <div className="col-md-6">
                        <p>Designed By <a href="https://htmlcodex.com">HTML Codex</a></p>
                    </div>
                </div>
            </div>
        </div>

        <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
        </>
    )
}