import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectUserInfo } from "./userInfo";

export const UserTitle:React.FC = () => {
    const userInfo = useAppSelector(selectUserInfo).userInfo;
    const listname: any =  localStorage.getItem("Username")?.split(" ");
    const name: string = listname[listname.length -1];
    return (
        <div className="nav-item dropdown">
            <button className="user-dropdown login-btn dropdown-toggle" data-toggle="dropdown">{name}</button>
                <div className="dropdown-menu dropdown-menu-dark">
                    <Link to="/blog" className="dropdown-item">Blog Page</Link>
                    <Link to="/history" className="dropdown-item">History</Link>
                    <button className=" dropdown-item" onClick={() => {
                        window.location.reload();
                        localStorage.removeItem("Username");
                        }}>Log out</button>
                </div>
        </div>
    )
}