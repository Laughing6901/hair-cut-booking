import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { selectCategoryState } from "./category";
import { listCategories } from "./service-dto";

export const ServiceBody: React.FC = () => {
    const category: listCategories = useAppSelector(selectCategoryState).categories;

    return (
        <div className="service">
            <div className="container">
                <div className="section-header text-center">
                    <p>Our Salon Services</p>
                    <h2>Best Salon and Barber Services for You</h2>
                </div>
                <div className="row">
                    {category.map((item) => {
                        return (
                            <div key={item.cate_id} className="col-lg-4 col-md-6">
                                <div className="service-item">
                                    <div className="service-img">
                                        <img src= {`http://localhost:8000/${item.image_cate}`} alt="Image"/>
                                    </div>
                                    <h3>{item.name}</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                                    </p>
                                    <Link className="btn" to="">Learn More</Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}