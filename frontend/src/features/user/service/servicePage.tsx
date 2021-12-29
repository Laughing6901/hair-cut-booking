import React from "react";
import { BreadCrumb } from "../breadCrumb/breadCrumb";
import { ServiceBody } from "./serviceBody";

export const Service: React.FC = () => {
    return (
        <>
            <BreadCrumb tab = "Service"/>
            <ServiceBody/>
        </>
    )
}