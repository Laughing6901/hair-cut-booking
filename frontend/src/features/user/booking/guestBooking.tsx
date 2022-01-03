import { Field, Form, Formik } from 'formik';
import React from "react";
import { Popup } from 'reactjs-popup';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { bookingValidate } from "../../auth/validation/bookingValidate";
import { selectCategoryState } from "../../page/service/category";
import { selectBookingState } from "./ bookingSlice";
import { bookingForm } from "./booking-dto";

export const GuestBookingForm:React.FC = () => {
    const bookingState = useAppSelector(selectBookingState);
    const categories = useAppSelector(selectCategoryState).categories;
    const dispatch = useAppDispatch();
    const initialValues: bookingForm = bookingState.bookingform;
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={bookingValidate}
            onSubmit={values => {
                console.log("in here");
                console.log(values);
            }}
            >
            {({ errors, touched }) => (
                <Form className="row justify-content-center">
                    <div className="col-sm-10 text-left px-0">
                        <h5 className="font-weight-bold">Salon Address</h5>
                    </div>
                    <div className="col-sm-10 mb-2 login-input booking-input text-left bg-white p-2">
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
                    <Field name="phone" className="col-sm-10 mb-2 booking-input login-input" placeholder = "your phone number"/>

                    <div className = "col-sm-10 text-danger text-left" >
                        {errors.service && touched.service  ? (
                            <div>{errors.service}</div>
                        ) : null}
                    </div>

                    <div className="col-sm-10 text-left px-0">
                        <h5 className="font-weight-bold">Choose Service</h5>
                    </div>
                    <Popup className='h-50' trigger={<button type="button" className="col-sm-10 mb-2 login-input bg-white booking-input text-left p-2"> <i className="fas fa-cut"></i> {`Service >`} </button>}  modal>

                        <div role="group" className="row portfolio-container justify-content-center " aria-labelledby="checkbox-group">
                            {categories.map((item) => {
                                return (
                                    <div className="col-lg-11 bg-white rounded-top rounded-5 p-0 col-md-11 mt-2 col-sm-12" key={item.cate_id}>
                                        <h4 className="p-2 px-4 mt-2">{item.name.toUpperCase()}</h4>
                                        {item.services.map((service) => {
                                                return (
                                                    <label key={service.service_id} className=" col-lg-6 col-md-6 text-center">
                                                        <div className="service-item border border-dark rounded mb-3">
                                                            <div className="service-img">
                                                                <img className='service-img-size' src= {`http://localhost:8000/${service.image}`} alt="Image"/>
                                                            </div>
                                                            <h5 className=" text-left m-2 pb-2 mb-3">{service.name}</h5>
                                                            <p className='text-dark font-weight-lighter text-left m-2'>
                                                                Lorem ipsum dolor sit amet elit.
                                                            </p>
                                                            <p className=' text-dark text-left mt-1 m-2'>
                                                                {Number(service.price)/1000}K
                                                            </p>
                                                            <Field type="checkbox" className = "test-check mb-3" name="service" value= {JSON.stringify(service.service_id)}/>
                                                        </div>
                                                    </label>
                                                )
                                        })}
                                    </div>
                                )
                            })}
                        </div>

                    </Popup>
                    <div className="col-sm-10 text-left px-0">
                        <h5 className="font-weight-bold">Choose Time & Stylist</h5>
                    </div>
                    <Popup trigger={<button type="button" className="col-sm-10 mb-2 login-input booking-input text-left bg-white p-2"> <i className="fas fa-user-tie"></i> {`Stylist >`} </button>}  modal>


                    </Popup>
                    <Popup trigger={<button type="button" className="col-sm-10 mb-2 login-input booking-input text-left bg-white p-2"> <i className="fas fa-calendar-alt"></i> {`Date & Time >`} </button>}  modal>


                    </Popup>
                    <div className="col-sm-10 text-left px-0">
                        <h6 className="mx-3 font-weight-bold">Description</h6>
                    </div>
                    <Field name="description" className="col-sm-10 mb-3 booking-input login-input" placeholder = "Ex: we have 2 people"/>
                    <button className="col-sm-10 mb-3 mt-2 btn btn-submit font-weight-bold" type="submit">
                        <span>{bookingState.state === 'pending' ? 
                            <i className="fas fa-spinner fa-spin"></i> : <></>}
                        </span>
                        SUBMIT
                    </button>
                </Form>
            )}
        </Formik>
    )
}