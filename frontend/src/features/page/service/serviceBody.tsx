import React from "react";

export const ServiceBody: React.FC = () => {
    return (
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
    )
}