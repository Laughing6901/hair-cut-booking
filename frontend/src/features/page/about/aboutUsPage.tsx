import React from "react";
import { Header } from "../header/header";
import { BreadCrumb } from "../breadCrumb/breadCrumb";
import { AboutUsBody } from "./aboutUsBody";

export const AboutUs:React.FC = () => {
    return(
        <>
            <BreadCrumb tab = "About"/>
            <AboutUsBody/>
        </>
    )
}