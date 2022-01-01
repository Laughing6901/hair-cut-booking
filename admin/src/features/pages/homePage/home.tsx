import React from "react";
import { Header } from "../header/header";
import { BookingWeek } from "./bookingView/bookingWeek";
import { BookingAtTime } from "./bookingView/bookingAtTime";
import { RatingList } from "./chart/rating";
import { SocialLike } from "./chart/totalLike";
import { YearChart } from "./chart/yearChart";
import { DailySale } from "./sale/dailySale";
import { MonthlySale } from "./sale/monthlySale";
import { YearlySale } from "./sale/yearlySale";

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