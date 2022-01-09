import { Field, Form, Formik } from 'formik';
import React from "react";
import { Popup } from 'reactjs-popup';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { bookingValidate } from "../../auth/validation/bookingValidate";
import { selectBarberState } from '../../page/barber/barberSlice';
import { selectServiceState } from '../../page/price/serviceOnlySlice';
import { selectCategoryState } from "../../page/service/category";
import { selectUserInfo } from '../userInfo';
import { createBooking, selectBookingState } from "./ bookingSlice";
import { bookingForm, timeForBooking, weekday } from "./booking-dto";

export const GuestBookingForm: React.FC = () => {
    const bookingState = useAppSelector(selectBookingState);
    const userInfo = useAppSelector(selectUserInfo).userInfo;
    const categories = useAppSelector(selectCategoryState).categories;
    const listBarber = useAppSelector(selectBarberState).listBarber;
    const service = useAppSelector(selectServiceState).serviceOnly;
    const timeBooking = timeForBooking;
    const weekDay = weekday;
    const today = new Date(Date.now());
    const dispatch = useAppDispatch();
    const initialValues: bookingForm = bookingState.bookingform;
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={bookingValidate}
            onSubmit={(values, {resetForm}) => {
                userInfo.user_id === 0 ? values.user_id = null : values.user_id = userInfo.user_id;
                values.start_time = new Date(today.getFullYear(), today.getMonth(), Number(values.date), Math.round(Number(values.time) / 100), Number(values.time) % 100);
                let { date, time, ...dataReq } = values;
                // console.log(values);
                // console.log(dataReq);
                dispatch(createBooking(dataReq));
                resetForm();
            }}
        >
            {({ errors, touched, values }) => (
                <Form className="row justify-content-center">
                    <div className="col-sm-10 text-left px-0">
                        <h5 className="font-weight-bold">Salon Address</h5>
                    </div>
                    <div className="col-sm-10 mb-2 login-input booking-input text-left bg-white p-2">
                        <p className="m-0"><i className="fas fa-home"></i> 31 Nguyễn Chí Thanh - Ngọc Khánh - Ba Đình - Hà Nội</p>
                    </div>
                    <div className="col-sm-10 text-left px-0">
                        <h5 className="font-weight-bold">Infomation</h5>
                    </div>
                    <div className="col-sm-10 text-danger text-left" >
                        {errors.contact && touched.contact ? (
                            <div>{errors.contact}</div>
                        ) : null}
                    </div>
                    <Field name="contact" values= {userInfo.fullname} className="col-sm-10 mb-2 booking-input login-input" placeholder="your full name" />

                    <div className="col-sm-10 text-danger text-left" >
                        {errors.phone && touched.phone ? (
                            <div>{errors.phone}</div>
                        ) : null}
                    </div>
                    <Field name="phone" value={values.phone} className="col-sm-10 mb-2 booking-input login-input" placeholder="your phone number" />

                    <div className="col-sm-10 text-left px-0">
                        <h5 className="font-weight-bold">Choose Service</h5>
                    </div>

                    <div className="col-sm-10 text-danger text-left" >
                        {errors.service && touched.service ? (
                            <div>{errors.service}</div>
                        ) : null}
                    </div>

                    <Popup className='h-50' trigger={<button type="button" className="col-sm-10 mb-2 login-input bg-white booking-input text-left p-2"> <i className="fas fa-cut"></i> {`Service > `} </button>} modal>
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
                                                            <img className='service-img-size' src={`${process.env.REACT_APP_SERVER_URL}${service.image}`} alt="Image" />
                                                        </div>
                                                        <h5 className=" text-left m-2 pb-2 mb-3">{service.name}</h5>
                                                        <p className='text-dark font-weight-lighter text-left m-2'>
                                                            Lorem ipsum dolor sit amet elit.
                                                        </p>
                                                        <p className=' text-dark text-left mt-1 m-2'>
                                                            {Number(service.price) / 1000}K
                                                        </p>
                                                        <Field type="checkbox" className="test-check mb-3" name="service" value={JSON.stringify(service.service_id)} />
                                                    </div>
                                                </label>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    </Popup>
                    {values.service.length === 0 ? <></> :
                        <ul className="col-sm-10 mb-2 login-input booking-input text-left text-dark">
                            <li>
                            {
                                values.service.map(item => {
                                    return service.map(service => {
                                        if (service.service_id === Number(item)) {
                                            return (
                                                <>
                                                    {service.name},
                                                </>
                                            )
                                        } else {
                                            return (
                                                <></>
                                            )
                                        }
                                    });
                                })
                            }
                            </li>
                        </ul>
                    }
                    <div className="col-sm-10 text-left px-0">
                        <h5 className="font-weight-bold">Choose Time & Stylist</h5>
                    </div>
                    <Popup className='stylist' trigger={<button type="button" className="col-sm-10 mb-2 login-input booking-input text-left bg-white p-2"> <i className="fas fa-user-tie"></i> {`Stylist >`} </button>} modal>
                        <div className='team d-flex pt-3 mx-3'>
                            {listBarber.map((item) => {
                                if (Number(item.status) !== 0) {
                                    return (
                                        <label key={item.user_id} className="team-item mb-0">
                                            <div className="team-img mr-4" style={{ width: 200 }}>
                                                <img className='w-100' src={`${process.env.REACT_APP_SERVER_URL}${item.avatar}`} alt="Team Image" />
                                            </div>
                                            <div className="team-text team-text-mg p-0">
                                                <p>{item.fullname}</p>
                                            </div>
                                            <div className='text-center'>
                                                <Field type="radio" className="test-check mt-3" name="stylist" value={JSON.stringify(item.user_id)} />
                                            </div>
                                        </label>
                                    )
                                }
                            })}
                        </div>
                    </Popup>

                    <div className="col-sm-10 text-danger text-left" >
                        {errors.date && touched.date ? (
                            <div>{errors.date}</div>
                        ) : null}
                    </div>

                    <Field as="select" className="col-sm-10 mb-2 login-input booking-input text-left bg-white p-2" name="date">
                        <option value="">choose date...</option>
                        {
                            weekDay.map((item, index) => {
                                return (
                                    <option key={index} value={`${today.getDate() + index}`}>
                                        {`${weekday[(today.getDay() + index) % 7]} (${today.getDate() + index}/${today.getMonth() + 1})`}
                                    </option>
                                )
                            })
                        }
                    </Field>
                    <div className="col-sm-10 text-danger text-left" >
                        {errors.time && touched.time ? (
                            <div>{errors.time}</div>
                        ) : null}
                    </div>
                    <Field as="select" className="col-sm-10 mb-2 login-input booking-input text-left bg-white p-2" name="time">
                        <option value="">choose time...</option>
                        {timeBooking.map((item, index) => {
                            if (item >= today.getHours() * 100 + today.getMinutes()) {
                                return (
                                    <option key={index} value={
                                        item
                                        // `${new Date(today.getFullYear(), today.getDate(), )}`
                                    }>
                                        {item % 100 === 0 ?
                                            `${Math.round(item / 100)}h00` :
                                            `${Math.round(item / 100)}h${item % 100}`}
                                    </option>
                                )
                            } else if (Number(values.date) > today.getDate()) {
                                return (
                                    <option key={index} value={
                                        item
                                    }>
                                        {item % 100 === 0 ?
                                            `${Math.round(item / 100)}h00` :
                                            `${Math.round(item / 100)}h${item % 100}`}
                                    </option>
                                )
                            }
                        })}
                    </Field>
                    <div className="col-sm-10 text-left px-0">
                        <h6 className="mx-3 font-weight-bold">Description</h6>
                    </div>
                    <Field name="description" className="col-sm-10 mb-3 booking-input login-input" placeholder="Ex: we have 2 people" />
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