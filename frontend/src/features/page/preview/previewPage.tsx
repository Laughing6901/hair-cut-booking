import React from "react";
import { BreadCrumb } from "../breadCrumb/breadCrumb";
import { PreviewBody } from "./previewBody";

export const PreviewPage: React.FC = () => {
    return (
        <>
            <BreadCrumb tab="History" />
            <PreviewBody />
        </>
    )
}