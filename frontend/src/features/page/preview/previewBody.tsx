import { Field, Form, Formik } from "formik";
import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectUserInfo } from "../../user/userInfo";
import { listBookingDetails, previewState, userBookingInfo } from "./preview-dto";
import { getPreview, selectPreviewState, sendPreview } from "./previewSlice";

export const ExecuteTotalPrice = (details: listBookingDetails) => {
    let totalPrice = 0;
    for (let i = 0; i < details.length; i++) {
        totalPrice += Number(details[i].price);
    }
    return totalPrice;
}

export const PreviewBody: React.FC = () => {
    const dispatch = useAppDispatch();
    const userId: number = useAppSelector(selectUserInfo).userInfo.user_id;
    const navigate = useNavigate();
    const previewState: previewState = useAppSelector(selectPreviewState);
    useEffect(() => {
        dispatch(getPreview(userId));
    }, [])
    return (
        <div className="preview">
            <div className="container">
                <div className="row">
                    {
                        previewState.listPreview.map((item, index) => {
                            return (
                                <div key={index} className="card col-sm-5 mx-4 mb-3">
                                    <p>Customer name: {item.contact}</p>
                                    <p>Date: {new Date(item.start_time).toLocaleString()}</p>
                                    <p>service:</p>
                                    <ul>
                                        {item.bookingdetails.map((details, index) => {
                                            return (
                                                <p key={index}>{details.description}</p>
                                            )
                                        })}
                                    </ul>
                                    <p>Total Price: {ExecuteTotalPrice(item.bookingdetails)}</p>
                                    {item.preview !== null ? <p>Preview: {item.preview}</p> :
                                    <Formik
                                        initialValues={{
                                            booking_id: item.booking_id,
                                            preview: ''
                                        }}
                                        onSubmit={(values,{resetForm}) => {
                                            console.log(values);
                                            dispatch(sendPreview(values));
                                            navigate('/', {replace: true});
                                            resetForm()
                                        }}>
                                        {({ errors, touched }) => (
                                            <Form className="row justify-content-center">
                                                <Field name="preview" className="col-sm-10 mt-2 mb-2 login-input" placeholder="write your preview" />
                                                <button className="col-sm-10 mb-3 btn btn-submit font-weight-bold" type="submit">
                                                    {previewState.state === 'pending' ? <i className="fas fa-spinner fa-spin"></i> : <></>}
                                                    COMMENT
                                                </button>
                                            </Form>
                                        )}
                                    </Formik>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className="row preview-container">
                </div>
            </div>
        </div>
    )
}