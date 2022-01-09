import React, {useEffect} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectUserInfo, userInfo } from "../../user/userInfo";
import { blogInfoRequest, blogState } from "./blog-dto";
import { getBlog, selectBlogState, setBlogState } from "./blogSlice";
import { CommentPage } from "./comment/comment";
import { CommentInfo } from "./comment/commentInf";

export const SingleBlog: React.FC = () => {
    const blog: blogState = useAppSelector(selectBlogState);
    const listUser: userInfo[] = useAppSelector(selectUserInfo).listUser;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const setListBlog = (params: string) => {
        dispatch(setBlogState(params));
    }

    const getAvatar = (userOfCommentId: number) => {
        let userOfComment:userInfo[] =  listUser.filter(user => {
            if(user.user_id === userOfCommentId) 
                return user;
            });
        return userOfComment[0].avatar;
    }

    const getUsername = (userOfCommentId: number) => {
        let userOfComment:userInfo[] =  listUser.filter(user => {
            if(user.user_id === userOfCommentId) 
                return user;
            });
        return userOfComment[0].fullname;
    }

    return (
        <div className="single">
            <div className="container card">
                <div className="text-right ">
                    <button className="btn"
                        onClick={() => 
                        navigate('/blog', {replace:true})}
                    >
                        <i style={{fontSize: 30}} className="fas fa-times"></i>
                    </button>
                </div>
                <div className="section-header mt-3 text-center">
                    <h2>{blog.blog.name}</h2>
                </div>
                <div className="row card-body">
                    <div className="col-12">
                        <img src={`${process.env.REACT_APP_SERVER_URL}${blog.blog.image_blogs}`} alt="Blog" />
                        <div>
                            {blog.blog.content.split("\r").map((item,index) => {
                                return (
                                    <p key={index}>{item}</p>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pb-4 pt-4">
                
            </div>
            <div className="container mt-4 card">
                <h3 className="mt-3 mb-3 mx-4 font-weight-light">Comments</h3>
                <hr></hr>
                <CommentPage />
                {
                    blog.blog.blog_id !== 0 ? <CommentInfo blog = {blog.blog} /> : <></>
                }
                </div>
            </div>
    )
}