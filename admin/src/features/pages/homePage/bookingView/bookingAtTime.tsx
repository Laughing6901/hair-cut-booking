import React from "react";

export const BookingAtTime:React.FC = () => {
    return (
        <div className="col-xl-8 col-md-12 m-b-30 Recent-Users">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link" id="home-tab" data-toggle="tab" href="#today" role="tab" aria-controls="today" aria-selected="true">07:00</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active show" id="profile-tab" data-toggle="tab" href="#week" role="tab" aria-controls="week" aria-selected="false">08:00</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="false">09:00</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent" style={{overflowY: "auto", height: 450}}>
                <div className="tab-pane fade" id="today" role="tabpanel" aria-labelledby="home-tab">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Description</th>
                                <th>Phone Number</th>
                                <th>Status</th>
                                <th className="text-right"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h6 className="m-0"><img className="rounded-circle m-r-10" style={{width:40}} src="assets/images/user/avatar-1.jpg" alt="activity-user" />Ida Jorgensen</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">The quick brown fox</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">3:28 PM</h6>
                                </td>
                                <td><a href="#!" className="label theme-bg2 text-white f-12">Reject</a><a href="#!" className="label theme-bg text-white f-12">Approve</a></td>
                                <td className="text-right"></td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width:40}} src="assets/images/user/avatar-2.jpg" alt="activity-user"/>Albert Andersen</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">Jumps over the lazy</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">2:37 PM</h6>
                                </td>
                                <td><a href="#!" className="label theme-bg2 text-white f-12">Reject</a><a href="#!" className="label theme-bg text-white f-12">Approve</a></td>
                                <td className="text-right"></td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width:40}} src="assets/images/user/avatar-3.jpg" alt="activity-user"/>Silje Larsen</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">Dog the quick brown</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">10:23 AM</h6>
                                </td>
                                <td><a href="#!" className="label theme-bg2 text-white f-12">Reject</a><a href="#!" className="label theme-bg text-white f-12">Approve</a></td>
                                <td className="text-right"></td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width:40}} src="assets/images/user/avatar-1.jpg" alt="activity-user"/>Ida Jorgensen</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">The quick brown fox</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">4:28 PM</h6>
                                </td>
                                <td><a href="#!" className="label theme-bg2 text-white f-12">Reject</a><a href="#!" className="label theme-bg text-white f-12">Approve</a></td>
                                <td className="text-right"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade active show" id="week" role="tabpanel" aria-labelledby="profile-tab">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Activity</th>
                                <th>Time</th>
                                <th>Status</th>
                                <th className="text-right"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width:40}} src="assets/images/user/avatar-2.jpg" alt="activity-user"/>Albert Andersen</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">Jumps over the lazy</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">2:37 PM</h6>
                                </td>
                                <td><a href="#!" className="label theme-bg2 text-white f-12">Reject</a><a href="#!" className="label theme-bg text-white f-12">Approve</a></td>
                                <td className="text-right"></td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className="m-0"><img className="rounded-circle m-r-10" style={{width:40}} src="assets/images/user/avatar-1.jpg" alt="activity-user"/>Ida Jorgensen</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">The quick brown fox</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">3:28 PM</h6>
                                </td>
                                <td><a href="#!" className="label theme-bg2 text-white f-12">Reject</a><a href="#!" className="label theme-bg text-white f-12">Approve</a></td>
                                <td className="text-right"></td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width:40}} src="assets/images/user/avatar-1.jpg" alt="activity-user"/>Ida Jorgensen</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">The quick brown fox</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">4:28 PM</h6>
                                </td>
                                <td><a href="#!" className="label theme-bg2 text-white f-12">Reject</a><a href="#!" className="label theme-bg text-white f-12">Approve</a></td>
                                <td className="text-right"></td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width:40}} src="assets/images/user/avatar-3.jpg" alt="activity-user"/>Silje Larsen</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">Dog the quick brown</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">10:23 AM</h6>
                                </td>
                                <td><a href="#!" className="label theme-bg2 text-white f-12">Reject</a><a href="#!" className="label theme-bg text-white f-12">Approve</a></td>
                                <td className="text-right"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="all" role="tabpanel" aria-labelledby="contact-tab">
                    <table className="table table-hover" >
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Activity</th>
                                <th>Time</th>
                                <th>Status</th>
                                <th className="text-right"></th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <td>
                                    <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width:40}} src="assets/images/user/avatar-3.jpg" alt="activity-user"/>Silje Larsen</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">Dog the quick brown</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">10:23 AM</h6>
                                </td>
                                <td><a href="#!" className="label theme-bg2 text-white f-12">Reject</a><a href="#!" className="label theme-bg text-white f-12">Approve</a></td>
                                <td className="text-right"></td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className="m-0"><img className="rounded-circle m-r-10" style={{width:40}} src="assets/images/user/avatar-1.jpg" alt="activity-user"/>Ida Jorgensen</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">The quick brown fox</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">3:28 PM</h6>
                                </td>
                                <td><a href="#!" className="label theme-bg2 text-white f-12">Reject</a><a href="#!" className="label theme-bg text-white f-12">Approve</a></td>
                                <td className="text-right"></td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className="m-0"><img className="rounded-circle m-r-10" style={{width:40}} src="assets/images/user/avatar-1.jpg" alt="activity-user"/>Ida Jorgensen</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">The quick brown fox</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">3:28 PM</h6>
                                </td>
                                <td><a href="#!" className="label theme-bg2 text-white f-12">Reject</a><a href="#!" className="label theme-bg text-white f-12">Approve</a></td>
                                <td className="text-right"></td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className="m-0"><img className="rounded-circle m-r-10" style={{width:40}} src="assets/images/user/avatar-1.jpg" alt="activity-user"/>Ida Jorgensen</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">The quick brown fox</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">3:28 PM</h6>
                                </td>
                                <td><a href="#!" className="label theme-bg2 text-white f-12">Reject</a><a href="#!" className="label theme-bg text-white f-12">Approve</a></td>
                                <td className="text-right"></td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className="m-0"><img className="rounded-circle m-r-10" style={{width:40}} src="assets/images/user/avatar-1.jpg" alt="activity-user"/>Ida Jorgensen</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">The quick brown fox</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">3:28 PM</h6>
                                </td>
                                <td><a href="#!" className="label theme-bg2 text-white f-12">Reject</a><a href="#!" className="label theme-bg text-white f-12">Approve</a></td>
                                <td className="text-right"></td>
                            </tr><tr>
                                <td>
                                    <h6 className="m-0"><img className="rounded-circle m-r-10" style={{width:40}} src="assets/images/user/avatar-1.jpg" alt="activity-user"/>Ida Jorgensen</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">The quick brown fox</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">3:28 PM</h6>
                                </td>
                                <td><a href="#!" className="label theme-bg2 text-white f-12">Reject</a><a href="#!" className="label theme-bg text-white f-12">Approve</a></td>
                                <td className="text-right"></td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width:40}} src="assets/images/user/avatar-2.jpg" alt="activity-user"/>Albert Andersen</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">Jumps over the lazy</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">2:37 PM</h6>
                                </td>
                                <td><a href="#!" className="label theme-bg2 text-white f-12">Reject</a><a href="#!" className="label theme-bg text-white f-12">Approve</a></td>
                                <td className="text-right"></td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width:40}} src="assets/images/user/avatar-1.jpg" alt="activity-user"/>Ida Jorgensen</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">The quick brown fox</h6>
                                </td>
                                <td>
                                    <h6 className="m-0">4:28 PM</h6>
                                </td>
                                <td><a href="#!" className="label theme-bg2 text-white f-12">Reject</a><a href="#!" className="label theme-bg text-white f-12">Approve</a></td>
                                <td className="text-right"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
