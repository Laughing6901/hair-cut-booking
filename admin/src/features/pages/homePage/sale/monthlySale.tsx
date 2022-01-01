

export const MonthlySale: React.FC = () => {
    return (
        <div className="col-md-6 col-xl-4">
            <div className="card Monthly-sales">
                <div className="card-block">
                    <h6 className="mb-4">Monthly Sales</h6>
                    <div className="row d-flex align-items-center">
                        <div className="col-9">
                            <h3 className="f-w-300 d-flex align-items-center  m-b-0"><i className="feather icon-arrow-down text-c-red f-30 m-r-10"></i>$ 2.942.32</h3>
                        </div>
                        <div className="col-3 text-right">
                            <p className="m-b-0">36%</p>
                        </div>
                    </div>
                    <div className="progress m-t-30" style={{height: 7}}>
                        <div className="progress-bar progress-c-theme2 w-25" role="progressbar"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}