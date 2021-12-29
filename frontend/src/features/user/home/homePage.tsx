import React from "react";
import { AboutUsBody } from "../about/aboutUsBody";
import { BarberBody } from "../barber/barberBody";
import { BlogBody } from "../blog/blog";
import { ContactBody } from "../contact/contactBody";
import { PriceBody } from "../price/priceBody";
import { ServiceBody } from "../service/serviceBody";
import { HomePageBody } from "./homeBody";

export const HomePage: React.FC = () => {
    return(
        <>
        <HomePageBody />
        <AboutUsBody />
        <ServiceBody/>
        <PriceBody />
        <BarberBody />
        <ContactBody />
        <BlogBody />
        <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
    </>
    )
}