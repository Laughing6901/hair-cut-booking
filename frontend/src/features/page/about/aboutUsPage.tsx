import React from "react";
import { Header } from "../header/header";
import { BreadCrumb } from "../breadCrumb/breadCrumb";
import { AboutUsBody } from "./aboutUsBody";
import { BarberBody } from "../barber/barberBody";

export const AboutUs:React.FC = () => {
    return(
        <>
            <BreadCrumb tab = "About"/>
            <AboutUsBody/>
            <BarberBody />
        </>
    )
}   