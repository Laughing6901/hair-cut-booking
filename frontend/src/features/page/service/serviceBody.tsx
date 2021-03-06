import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { serviceOnlyState } from "../price/serviceOnly-dto";
import { selectServiceState } from "../price/serviceOnlySlice";
import { selectCategoryState } from "./category";
import { listCategories, listService } from "./service-dto";

export const ServiceBody: React.FC = () => {
    const category: listCategories = useAppSelector(selectCategoryState).categories;
    const service: serviceOnlyState = useAppSelector(selectServiceState);
    return (
        <div className="service">
            <div className="container">
                <div className="section-header text-center">
                    <p>Our Salon Services</p>
                    <h2>Best Salon and Barber Services for You</h2>
                </div>
                <div className="row">
                    {service.serviceOnly.map((item) => {
                        return (
                            <div key={item.service_id} className="col-lg-4 col-md-6">
                                <div className="service-item pb-4">
                                    <div className="service-img">
                                        <img src= {`${process.env.REACT_APP_SERVER_URL}${item.image}`} alt="Image"/>
                                    </div>
                                    <h3>{item.name}</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}