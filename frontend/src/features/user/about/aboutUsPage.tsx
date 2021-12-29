import React from "react";
import { Header } from "../header/header";
import { PageHeaders } from "../pageHeader/pageHeader";
import { AboutUsBody } from "./aboutUsBody";

export const AboutUs:React.FC = () => {
    return(
        <>
            <PageHeaders tab = "About Us"/>
            <AboutUsBody/>
        </>
    )
}