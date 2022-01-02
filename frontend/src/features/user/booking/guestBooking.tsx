import React from "react";
import { Field, Form, Formik } from 'formik';
import { Popup } from 'reactjs-popup';

export const GuestBookingForm:React.FC = () => {
    return (
        <Formik
            initialValues={{
                contact: '',
                phone: '',
                stylelist: '',
                service: [],
                description: '',
            }}
            // validationSchema={loginValidate}
            onSubmit={values => {
                console.log(values);
            }}
            >
            {({ errors, touched }) => (
                <Form className="row justify-content-center">
                    <div className="col-sm-10 text-left px-0">
                        <h5 className="font-weight-bold">Salon Address</h5>
                    </div>
                    <div className="col-sm-10 login-input booking-input text-left bg-white p-2">
                        <p className="m-0"><i className="fas fa-home"></i> 22 Tran Hung Dao</p>
                    </div>
                    <div className = "col-sm-10 text-white" >
                        {errors.contact && touched.contact ? (
                            <div>{errors.contact}</div>
                        ) : null}
                    </div>
                    <Field name="username" className = "col-sm-10 mt-2 mb-4 booking-input login-input"  placeholder = "username"/>

                    <div className = "col-sm-10 text-white" >
                        {errors.phone && touched.phone ? (
                            <div>{errors.phone}</div>
                        ) : null}
                    </div>
                    <Field name="password" type= "password"className="col-sm-10 mb-4 booking-input login-input" placeholder = "password"/>

                    <div className="col-sm-10 text-left px-0">
                        <h5 className="font-weight-bold">Choose Service</h5>
                    </div>
                    <Popup trigger={<button className="col-sm-10 login-input booking-input text-left bg-white p-2"> <i className="fas fa-cut"></i> service </button>}  modal>
                    </Popup>
                        <button className="col-sm-10 mb-3 mt-2 btn btn-submit font-weight-bold" type="submit">
                            <span>{"pending" === 'pending' ? 
                            <i className="fas fa-spinner fa-spin"></i> : <></>}</span>
                            SUBMIT
                        </button>
                </Form>
            )}
        </Formik>
    )
}