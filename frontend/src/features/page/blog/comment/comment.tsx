import React, { useEffect } from "react";
import { Field, Form, Formik } from 'formik';
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { getBlog, selectBlogState } from "../blogSlice";
import { commentInfoRequest, commentState } from "./comment-dto";
import { selectAccountState } from '../../../../../../admin/src/features/pages/user/accountSlice';
import { selectUserInfo } from "../../../user/userInfo";
import { selectCommentState, sendComment } from "./commentSlice";

export const CommentPage: React.FC = () => {
    const blogId: number = useAppSelector(selectBlogState).blog.blog_id;
    const userId: number = useAppSelector(selectUserInfo).userInfo.user_id;
    const commentState: commentState = useAppSelector(selectCommentState);
    const dispatch = useAppDispatch();
    const initialValues: commentInfoRequest = {
        blog_id: blogId,
        user_id: userId,
        content: ''
    }

    return(
        <div>
            {userId !== 0 ? 
                <Formik
                initialValues={initialValues}
                // validationSchema={bookingValidate}
                onSubmit={(values, {resetForm}) => {
                    console.log(values);
                    dispatch(sendComment(values));
                    resetForm();
                }}
                >
                {({ errors, touched, values }) => (
                    <Form className="row justify-content-center">
                            <Field name="content" className="col-sm-9 mt-2 booking-input login-input" placeholder="write your comment" />
                            <div className="col-sm-2 mb-3 mt-2 pt-1">
                                <button className="btn btn-submit font-weight-bold" type="submit">
                                    {commentState.state === 'pending' ? 
                                        <i className="fas fa-spinner fa-spin"></i> : <></>
                                    }
                                    SUBMIT
                                </button>
                            </div>      
                    </Form>
                )}
                </Formik>
            : <></>}
        </div>
        
    )
}