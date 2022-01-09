import React, { useEffect } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { getBlog } from "../blog/blogSlice";
import { BreadCrumb } from "../breadCrumb/breadCrumb";
import { PreviewBody } from "./previewBody";

export const PreviewPage: React.FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getBlog(0));
    })
    return (
        <>
            <BreadCrumb tab="History" />
            <PreviewBody />
        </>
    )
}