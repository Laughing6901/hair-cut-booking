import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { AboutUsBody } from "../about/aboutUsBody";
import { BarberBody } from "../barber/barberBody";
import { BlogBody } from "../blog/blog";
import { setTab } from "../pageSlice";
import { PriceBody } from "../price/priceBody";
import { selectServiceState } from "../price/serviceOnlySlice";
import { ServiceBody } from "../service/serviceBody";
import { HomePageBody } from "./homeBody";

export const HomePage: React.FC = () => {
    const service = useAppSelector(selectServiceState);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setTab("Home"));
    }, [])
    return(
        <>
        <HomePageBody />
        <AboutUsBody />
        {/* <ServiceBody/> */}
        <div className="service">
            <div className="container">
                <div className="section-header text-center">
                    <p>Our Salon Services</p>
                    <h2>Best Salon and Barber Services for You</h2>
                </div>
                <div className="row justify-content-center">
                    {service.serviceOnly.map((item, index) => {
                       if(index <3) {
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
                        )}
                    })}
                    <div className="col-lg-7 col-md-6 text-center">
                        <Link className="btn btn-learnmore" to="/service" >Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
        {/* <PriceBody /> */}
        <div className="price">
            <div className="container">
                <div className="section-header text-center">
                    <p>Our Best Pricing</p>
                    <h2>We Provide Best Price in the City</h2>
                </div>
                <div className="row justify-content-center">
                    {service.serviceOnly.map((item, index) => {
                        if(index <4) {
                        return (
                            <div key={item.service_id} className="col-lg-3 col-md-4 col-sm-6">
                                <div className="price-item">
                                    <div className="price-img">
                                        <img src={`${process.env.REACT_APP_SERVER_URL}${item.image}`} alt="Image"/>
                                    </div>
                                    <div className="price-text">
                                        <h2>{item.name}</h2>
                                        <h3>{Number(item.price)/1000}K</h3>
                                    </div>
                                </div>
                            </div>
                        )}
                    })}
                    <div className="col-lg-7 col-md-6 text-center">
                        <Link className="btn btn-learnmore" to="/price" >Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
        <BarberBody />
        {/* <BlogBody blog={0} /> */}
    </>
    )
}