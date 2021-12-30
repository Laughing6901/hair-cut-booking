import React from "react";
import Popup from 'reactjs-popup';
import { Formik, Form, Field } from 'formik';
import 'reactjs-popup/dist/index.css';
import { loginValidate } from "../validation/loginValidate";
import { loginState } from "./login-dto";
import { useAppSelector } from "../../../app/hooks";
import { selectLoginState } from "./loginSlice";
import { LoadingScreen } from "../../loadingScreen";

export const Login: React.FC = () => {
    const loginState: loginState = useAppSelector(selectLoginState);
    return (
        <Popup trigger={<button className="login-btn nav-item"> Login </button>} modal>
            <h1 className="text-center mb-4 mt-2 font-weight-bold text-white">Login</h1>
            <Formik
            initialValues={{
                username: '',
                password: '',
            }}
            validationSchema={loginValidate}
            onSubmit={values => {
                console.log(values);
            }}
            >
            {({ errors, touched }) => (
                <Form className="row justify-content-center">
                    <div className = "col-sm-10 text-white" >
                        {errors.username && touched.username ? (
                            <div>{errors.username}</div>
                        ) : null}
                    </div>
                    <Field name="username" className = "col-sm-10 mt-2 mb-4 login-input"  placeholder = "username"/>

                    <div className = "col-sm-10 text-white" >
                        {errors.password && touched.password ? (
                            <div>{errors.password}</div>
                        ) : null}
                    </div>
                    <Field name="password" type= "password"className="col-sm-10 mb-4 login-input" placeholder = "password"/>
                        <button className="col-sm-10 mb-3 mt-2 btn btn-submit font-weight-bold" type="submit">
                            <span>{loginState.state === 'pending' ? 
                            <i className="fas fa-spinner fa-spin"></i> : <></>}</span>
                            SUBMIT
                        </button>
                </Form>
            )}
            </Formik>
        </Popup>
    )
}