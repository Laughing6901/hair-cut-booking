import React from "react";
import { PageHeaders } from "../pageHeader/pageHeader";
import { AboutUsBody } from "./aboutUsBody";

export const AboutUs = () => {
    return(
        <>
            <PageHeaders tab = "About Us"/>
            <AboutUsBody/>
        </>
    )
}