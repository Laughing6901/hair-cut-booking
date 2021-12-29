import React from "react";
import { BreadCrumb } from "../breadCrumb/breadCrumb";
import { BlogBody } from "./blog";

export const BlogPage: React.FC = () => {
    return(
        <>
            <BreadCrumb tab="Blog" />
            <BlogBody />
        </>
    )
}