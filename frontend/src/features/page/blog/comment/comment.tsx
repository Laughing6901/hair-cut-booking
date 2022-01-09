import React, { useEffect } from "react";
import { Field, Form, Formik } from 'formik';
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { getBlog, selectBlogState, setBlogState, setSingleBlog } from "../blogSlice";
import { commentInfoRequest, commentState } from "./comment-dto";
import { selectAccountState } from '../../../../../../admin/src/features/pages/user/accountSlice';
import { selectUserInfo } from "../../../user/userInfo";
import { selectCommentState, sendComment } from "./commentSlice";
import { useNavigate } from 'react-router-dom';

export const CommentPage: React.FC = () => {
    const blog = useAppSelector(selectBlogState);
    const blogId = blog.blog.blog_id;
    const userId: number = useAppSelector(selectUserInfo).userInfo.user_id;
    const commentState: commentState = useAppSelector(selectCommentState);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const initialValues: commentInfoRequest = {
        blog_id: blog.blog.blog_id,
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
                    navigate('/blog', {replace:true});
                    // dispatch(getBlog());
                    // let blogTemp = blog.listBlog.filter((item) => {if(item.blog_id === blogId) return item});
                    // dispatch(setSingleBlog(blogTemp));
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