import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { selectServiceState } from "./serviceOnlySlice";

export const PriceBody: React.FC = () => {
    const service = useAppSelector(selectServiceState).serviceOnly;
    return (
        <div className="price">
            <div className="container">
                <div className="section-header text-center">
                    <p>Our Best Pricing</p>
                    <h2>We Provide Best Price in the City</h2>
                </div>
                <div className="row">
                    {service.map((item) => {
                        return (
                            <div key={item.service_id} className="col-lg-3 col-md-4 col-sm-6">
                                <div className="price-item">
                                    <div className="price-img">
                                        <img src={`http://localhost:8000${item.image}`} alt="Image"/>
                                    </div>
                                    <div className="price-text">
                                        <h2>{item.name}</h2>
                                        <h3>{item.price} vnd</h3>
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