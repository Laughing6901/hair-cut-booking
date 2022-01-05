import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectAuthPage } from "./layoutSlice";
import { Login } from "./login/login";
import { Register } from "./register/register";

export const AuthLayout: React.FC = () => {
    const authPage = useAppSelector(selectAuthPage).page;
    if(authPage === 'login') {
        return(
            <Login />
        )
    } else {
        return (
            <Register />
        )
    }
}