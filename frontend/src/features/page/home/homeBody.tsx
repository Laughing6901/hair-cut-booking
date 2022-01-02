import React from "react";
import { GuestBookingForm } from "../../user/booking/guestBooking";

export const HomePageBody: React.FC = () => {
    return (
        <div className="hero">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="hero-text text-center">
                            <h1>Booking now!</h1>
                            <GuestBookingForm />
                            
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 d-none d-md-block">
                        <div className="hero-image">
                            <img src="img/hero.png" alt="Hero Image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}