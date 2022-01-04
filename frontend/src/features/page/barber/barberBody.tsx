import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { listBarber } from "./barber-dto";
import { selectBarberState } from "./barberSlice";

export const BarberBody: React.FC= () => {
    const listBarber:listBarber = useAppSelector(selectBarberState).listBarber;
    return (
        <div className="team">
            <div className="container">
                <div className="section-header text-center">
                    <p>Our Barber Team</p>
                    <h2>Meet Our Hair Cut Expert Barber</h2>
                </div>
                <div className="row">
                    {listBarber.map((item) => {
                        return (
                            <div key={item.user_id} className="col-lg-3 col-md-6">
                                <div className="team-item">
                                    <div className="team-img">
                                        <img src={`${process.env.REACT_APP_SERVER_URL}${item.avatar}`} alt="Team Image"/>
                                    </div>
                                    <div className="team-text">
                                        <h2>{item.fullname}</h2>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}