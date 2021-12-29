import React from "react";

export const BarberBody: React.FC= () => {
    return (
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
    )
}