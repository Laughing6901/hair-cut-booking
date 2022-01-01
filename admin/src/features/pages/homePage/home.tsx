import React, {useEffect, useState} from "react";
import { Header } from "../header/header";
import { BookingWeek } from "./bookingView/bookingWeek";
import { BookingAtTime } from "./bookingView/bookingAtTime";
import { RatingList } from "./chart/rating";
import { SocialLike } from "./chart/totalLike";
import { YearChart } from "./chart/yearChart";
import { DailySale } from "./sale/dailySale";
import { MonthlySale } from "./sale/monthlySale";
import { YearlySale } from "./sale/yearlySale";
import { AdminLogin } from "../../auth/login/login";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectLoginState, setToken } from '../../auth/login/loginSlice';

export const Home:React.FC = () => {
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
                                    <DailySale />
                                    <MonthlySale />
                                    <YearlySale />
                                    <BookingAtTime />
                                    <YearChart />
                                    <SocialLike />
                                    <RatingList />
                                    <BookingWeek />
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

type state = {
    token: string,
}

export const SetLayout:React.FC<state> = ({token}) => {
    console.log(token);
    if(sessionStorage.getItem("token") !== null) {
        return (
            <Home />
        )
    } else {
        return <AdminLogin />
    }
}

export const Layout: React.FC = () => {
    let loginState = useAppSelector(selectLoginState);
    let token = JSON.stringify(sessionStorage.getItem('token'));
    
    return(
        <SetLayout token={token} />
    )
    
}