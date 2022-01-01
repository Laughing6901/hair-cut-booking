import React from "react";
import { BreadCrumb } from "../breadCrumb/breadCrumb";
import { PortfolioBody } from "./portfolioBody";

export const PortfolioPage: React.FC = () => {
    return (
        <>
            <BreadCrumb tab="Gallery" />
            <PortfolioBody />
        </>
    )
}