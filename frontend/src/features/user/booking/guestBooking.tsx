import React from "react";
import { Field, Form, Formik } from 'formik';
import { Popup } from 'reactjs-popup';
import { bookingValidate } from "../../auth/validation/bookingValidate";

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
            validationSchema={bookingValidate}
            onSubmit={values => {
                console.log(values);
            }}
            >
            {({ errors, touched }) => (
                <Form className="row justify-content-center">
                    <div className="col-sm-10 text-left px-0">
                        <h5 className="font-weight-bold">Salon Address</h5>
                    </div>
                    <div className="col-sm-10 mb-4 login-input booking-input text-left bg-white p-2">
                        <p className="m-0"><i className="fas fa-home"></i> 22 Tran Hung Dao</p>
                    </div>
                    <div className="col-sm-10 text-left px-0">
                        <h5 className="font-weight-bold">Infomation</h5>
                    </div>
                    <div className = "col-sm-10 text-danger text-left" >
                        {errors.contact && touched.contact ? (
                            <div>{errors.contact}</div>
                        ) : null}
                    </div>
                    <Field name="contact" className = "col-sm-10 mb-2 booking-input login-input"  placeholder = "your full name"/>

                    <div className = "col-sm-10 text-danger text-left" >
                        {errors.phone && touched.phone ? (
                            <div>{errors.phone}</div>
                        ) : null}
                    </div>
                    <Field name="phone" className="col-sm-10 mb-4 booking-input login-input" placeholder = "your phone number"/>

                    <div className="col-sm-10 text-left px-0">
                        <h5 className="font-weight-bold">Choose Service</h5>
                    </div>
                    <Popup trigger={<button className="col-sm-10 mb-4 login-input booking-input text-left bg-white p-2"> <i className="fas fa-cut"></i> {`Service >`} </button>}  modal>

                        {/* edit service here */}

                    </Popup>
                    <div className="col-sm-10 text-left px-0">
                        <h5 className="font-weight-bold">Choose Stylist</h5>
                    </div>
                    <Popup trigger={<button className="col-sm-10 mb-2 login-input booking-input text-left bg-white p-2"> <i className="fas fa-user-tie"></i> {`Stylist >`} </button>}  modal>

                        {/* edit stylist here */}

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