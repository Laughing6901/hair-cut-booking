import { Field, Form, Formik } from 'formik';
import React, { useRef } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setPage } from '../layoutSlice';
import { registerValidate } from '../validation/registerValidate';
import { RefObject, registerInfo, registerInit, registerState } from './register-dto';
import { registerFunction, selectRegisterState } from './registerSlice';



export const Register: React.FC = () => {
    const ref = useRef<RefObject>(null);
    const registerState: registerState = useAppSelector(selectRegisterState);
    const initialValues: registerInfo = registerInit;
    const dispatch = useAppDispatch();
    return (
        <Popup ref={ref} trigger={<button className="login-btn nav-item"> Sign in </button>}  modal>
            <h1 className="text-center mb-4 mt-2 font-weight-bold text-white">Sign in</h1>
            <Formik
            initialValues={initialValues}
            validationSchema={registerValidate}
            onSubmit={values => {
                console.log(values);
                ref.current?.close();
                dispatch(registerFunction(values));
                dispatch(setPage('login'));
            }}
            >
            {({ errors, touched, setFieldValue }) => (
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

                    <div className = "col-sm-10 text-white" >
                        {errors.fullname && touched.fullname ? (
                            <div>{errors.fullname}</div>
                        ) : null}
                    </div>
                    <Field name="fullname" className = "col-sm-10 mt-2 mb-4 login-input"  placeholder = "fullname"/>

                    <div className = "col-sm-10 text-white" >
                        {errors.phone && touched.phone ? (
                            <div>{errors.phone}</div>
                        ) : null}
                    </div>
                    <Field name="phone" className = "col-sm-10 mt-2 mb-4 login-input"  placeholder = "phone"/>

                    <div className = "col-sm-10 text-white" >
                        {errors.email && touched.email ? (
                            <div>{errors.email}</div>
                        ) : null}
                    </div>
                    <Field name="email" className = "col-sm-10 mt-2 mb-4 login-input"  placeholder = "email"/>

                    <div className = "col-sm-10 text-white" >
                        {errors.address && touched.address ? (
                            <div>{errors.address}</div>
                        ) : null}
                    </div>
                    <Field name="address" className = "col-sm-10 mt-2 mb-4 login-input"  placeholder = "address"/>

                    <input id="file" name="image" type= "file" className = "col-sm-10 mt-2 pt-1 mb-4 login-input" onChange={(event:any) => {
                                                    setFieldValue("image", event.currentTarget.files[0]);
                                                }}/>

                        <button className="col-sm-10 mb-3 mt-2 btn btn-submit font-weight-bold" type="submit">
                            <span>{registerState.state === 'pending' ? 
                            <i className="fas fa-spinner fa-spin"></i> : <></>}</span>
                            SUBMIT
                        </button>
                        <p className=''>Already have account yet? 
                        <button className='btn m-0 p-0 font-weight-bold text-white'
                         onClick={() => dispatch(setPage('login'))}>Login here</button>
                    </p>
                </Form>
            )}
            </Formik>
        </Popup>
    )
}