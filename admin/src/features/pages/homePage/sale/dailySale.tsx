import React from "react";
import {Progress} from 'reactstrap'

export const DailySale: React.FC = () => {
    return (
        <div className="col-md-6 col-xl-4">
            <div className="card daily-sales">
                <div className="card-block">
                    <h6 className="mb-4">Daily Sales</h6>
                    <div className="row d-flex align-items-center">
                        <div className="col-9">
                            <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-10"></i>$ 249.95</h3>
                        </div>
                        <div className="col-3 text-right">
                            <p className="m-b-0">67%</p>
                        </div>
                    </div>
                    <div className="progress m-t-30" style={{height: 7}}>
                        <div className="progress-bar progress-c-theme w-50" role="progressbar"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}