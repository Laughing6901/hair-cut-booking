import React from "react";

interface breadCrumb {
    tab: string
}

export const PageHeaders: React.FC<breadCrumb> =({tab}) => {
    return(
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>{tab}</h2>
                    </div>
                    <div className="col-12">
                        <a href="">Home</a>
                        <a href="">{tab}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}