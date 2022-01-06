import React from "react";
import { useAppSelector } from "../../../../app/hooks";
import { bookingInfo, listBookingDetails, listBookingInfo, timeForBooking } from "./booking-dto";
import { selectBookingState } from "./bookingSlice";



export const BookingAtTime:React.FC = () => {
    const bookingDetails:listBookingInfo = useAppSelector(selectBookingState).listBookingInfo;
    const timeBooking = timeForBooking;
    const date = new Date(Date.now());


    return (
        <div className="col-xl-8 col-md-12 m-b-30 Recent-Users">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                {
                    timeBooking.map((item, index) => {
                        let time = JSON.stringify(item).split("");
                        let now = new Date(Date.now()).getHours();
                        time.splice(-2,0, ":");
                        return (
                            <li key={item} className="nav-item">
                                <a className="nav-link" id="home-tab" data-toggle="tab" href={`#${item}`} role="tab" aria-controls= {`${item}`} 
                                aria-selected= "false">
                                    {time.join("")}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="tab-content" id="myTabContent" style={{overflowY: "auto", height: 450}}>
            {
                timeBooking.map((item,index) => {
                    return (
                        <div key={index} className="tab-pane fade" id={`${item}`} role="tabpanel" aria-labelledby="home-tab">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Customer</th>
                                        <th>Description</th>
                                        <th>Phone Number</th>
                                        <th>Service</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th className="text-right"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        bookingDetails.map((booking) => {

                                            let time = new Date(booking.start_time);
                                            // set current time to compare with time in array to render 
                                            let currTime = time.getHours()*100 + time.getMinutes();
                                            if((date.getDate() === time.getDate()) && (item === currTime)) {
                                            return (
                                                <tr key={booking.booking_id}>
                                                    <td>
                                                        <h6 className="m-0"><img className="rounded-circle m-r-10" style={{width:40}} src={`assets/images/user/avatar-${Math.floor(Math.random()*5)+1}.jpg`} alt="activity-user" />{booking.contact}</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">
                                                            {booking.description === ""? "nothing" : booking.description}
                                                        </h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">{booking.phone}</h6>
                                                    </td>
                                                    <td>
                                                        {booking.bookingdetails.map(serviceName => {
                                                            return (
                                                                <h6 className="m-0">
                                                                    {serviceName.description}
                                                                </h6>
                                                            )
                                                        })}
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">
                                                            {booking.bookingdetails.map(servicePrice => { 
                                                                return (
                                                                    <h6 className="m-0">
                                                                        {Number(servicePrice.price)/1000}K
                                                                    </h6>
                                                                )
                                                            })}
                                                        </h6>
                                                    </td>
                                                    
                                                    <td><a href="#!" className="label theme-bg2 text-white f-12">Reject</a><a href="#!" className="label theme-bg text-white f-12">Approve</a></td>
                                                    <td className="text-right"></td>
                                                </tr>
                                            )}
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
