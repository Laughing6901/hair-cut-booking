import React from "react";
import { BreadCrumb } from "../breadCrumb/breadCrumb";
import { PriceBody } from "./priceBody";

export const PricePage: React.FC = () => {
    return (
        <>
            <BreadCrumb tab = "About Us"/>
            <PriceBody/>
        </>
    )
}