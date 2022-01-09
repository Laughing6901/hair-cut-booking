import React from "react";
import { Link } from 'react-router-dom';
import { useAppSelector } from "../../../app/hooks";
import { AuthLayout } from "../../auth/layoutAuth";
import { Login } from "../../auth/login/login";
import { selectLoginState } from "../../auth/login/loginSlice";
import { UserTitle } from "../../user/userInfoTitle";
import { headerArr } from "../page-dto";
import { selectPageState } from "../pageSlice";

export const Header:React.FC = () => {
    const HeaderTitle:string[] = headerArr;
    const tab = useAppSelector(selectPageState).tab;
    const loginState = useAppSelector(selectLoginState);
    return(
        <>
        {/* Top Bar Start */}
        <div className="top-bar d-none d-md-block">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="top-bar-left">
                            <div className="text">
                                <h2>8:00 - 9:00</h2>
                                <p>Opening Hour Mon - Fri</p>
                            </div>
                            <div className="text">
                                <h2>+123 456 7890</h2>
                                <p>Call Us For Appointment</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="top-bar-right">
                            <div className="social">
                                <a href=""><i className="fab fa-twitter"></i></a>
                                <a href=""><i className="fab fa-facebook-f"></i></a>
                                <a href=""><i className="fab fa-linkedin-in"></i></a>
                                <a href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Top Bar End */}

        {/* Nav Bar start */}
        <div className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Barber <span>X</span></Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto">
                        {HeaderTitle.map((item, index) => {
                            return(
                                <Link key={index}className= {item === tab ? "nav-item nav-link active" : "nav-item nav-link"} to = {index === 0? `/` : `/${item.split(" ")[0].toLowerCase()}`}>{item}</Link>
                            )
                        } 
                        )}
                        {localStorage.getItem("Username") !== null ? <UserTitle />:<AuthLayout /> }
                    </div>
                </div>
            </div>
        </div>
        {/* Nar bar end */}
        </>
    )
}