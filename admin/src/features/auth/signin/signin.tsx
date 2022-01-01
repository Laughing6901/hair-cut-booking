import { useAppDispatch } from "../../../app/hooks"
import { Header } from "../../pages/header/header"

export const SigninUser: React.FC = () => {
    return (
        <>
        <Header />
        <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        <div className="main-body">
                            <div className="page-wrapper">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Basic Componant</h5>
                                        </div>
                                        <div className="card-body">
                                            <h5>Form controls</h5>
                                            <hr/>
                                                                {/* <div className="row">
                                                                    <div className="col-md-6">
                                                                        <form>
                                                                            <div className="form-group">
                                                                                <label for="exampleInputEmail1">Email address</label>
                                                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                                                                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <label for="exampleInputPassword1">Password</label>
                                                                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password">
                                                                            </div>
                                                                            <div className="form-group form-check">
                                                                                <input type="checkbox" className="form-check-input" id="exampleCheck1">
                                                                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                                                            </div>
                                                                            <button type="submit" className="btn btn-primary">Submit</button>
                                                                        </form>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <form>
                                                                            <div className="form-group">
                                                                                <label>Text</label>
                                                                                <input type="text" className="form-control" placeholder="Text">
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <label for="exampleFormControlSelect1">Example select</label>
                                                                                <select className="form-control" id="exampleFormControlSelect1">
                                                                                    <option>1</option>
                                                                                    <option>2</option>
                                                                                    <option>3</option>
                                                                                    <option>4</option>
                                                                                    <option>5</option>
                                                                                </select>
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <label for="exampleFormControlTextarea1">Example textarea</label>
                                                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}