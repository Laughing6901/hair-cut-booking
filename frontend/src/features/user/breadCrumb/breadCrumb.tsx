import React from "react";
import { Link } from "react-router-dom";

interface breadCrumb {
    tab: string
}

export const BreadCrumb: React.FC<breadCrumb> =({tab}) => {
    return(
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>{tab}</h2>
                    </div>
                    <div className="col-12">
                        <Link to ="/">Home</Link>
                        <Link to ="">{tab}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}