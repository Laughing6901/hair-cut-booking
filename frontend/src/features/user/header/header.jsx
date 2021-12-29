import React from "react";

export const Header = () => {
    return(
        <>
        <div className="top-bar d-none d-md-block">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="top-bar-left">
                            <div className="text">
                                <h2>8:00 - 9:00</h2>
                                <p>Opening Hour Mon - Fri</p>
                            </div>
                            <div className="text">
                                <h2>+123 456 7890</h2>
                                <p>Call Us For Appointment</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="top-bar-right">
                            <div className="social">
                                <a href=""><i className="fab fa-twitter"></i></a>
                                <a href=""><i className="fab fa-facebook-f"></i></a>
                                <a href=""><i className="fab fa-linkedin-in"></i></a>
                                <a href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <a href="index.html" className="navbar-brand">Barber <span>X</span></a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto">
                        <a href="index.html" className="nav-item nav-link active">Home</a>
                        <a href="about.html" className="nav-item nav-link">About</a>
                        <a href="service.html" className="nav-item nav-link">Service</a>
                        <a href="price.html" className="nav-item nav-link">Price</a>
                        <a href="team.html" className="nav-item nav-link">Barber</a>
                        <a href="portfolio.html" className="nav-item nav-link">Gallery</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu">
                                <a href="blog.html" className="dropdown-item">Blog Page</a>
                                <a href="single.html" className="dropdown-item">Single Page</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}