import React from "react";
import { BreadCrumb } from "../breadCrumb/breadCrumb";
import { BarberBody } from "./barberBody";

export const BarberPage: React.FC= () => {
    return (
        <>
            <BreadCrumb tab="Barber"/>
            <BarberBody />
        </>
    )
}