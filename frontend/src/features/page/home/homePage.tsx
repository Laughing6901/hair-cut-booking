import React, { useEffect } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { AboutUsBody } from "../about/aboutUsBody";
import { BarberBody } from "../barber/barberBody";
import { BlogBody } from "../blog/blog";
import { setTab } from "../pageSlice";
import { PriceBody } from "../price/priceBody";
import { ServiceBody } from "../service/serviceBody";
import { HomePageBody } from "./homeBody";

export const HomePage: React.FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setTab("Home"));
    }, [])
    return(
        <>
        <HomePageBody />
        <AboutUsBody />
        <ServiceBody/>
        <PriceBody />
        <BarberBody />
        <BlogBody blog={0} />
    </>
    )
}