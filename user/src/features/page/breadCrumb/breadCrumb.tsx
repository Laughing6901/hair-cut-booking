import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { breadCrumb } from "../page-dto";
import { setTab } from "../pageSlice";

export const BreadCrumb: React.FC<breadCrumb> =({tab}) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setTab(tab));
    }, [])

    return(
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>{tab}</h2>
                    </div>
                    <div className="col-12">
                        <Link to ="/">Home</Link>
                        <Link to ="">{tab === "About" ? "About Us": tab}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}