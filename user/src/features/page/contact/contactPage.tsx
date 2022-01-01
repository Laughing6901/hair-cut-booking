import React from "react";
import { BreadCrumb } from "../breadCrumb/breadCrumb";
import { ContactBody } from "./contactBody";

export const ContactPage: React.FC = () => {
    return (
        <>
            <BreadCrumb tab="Contact" />
            <ContactBody />
        </>
    )
}