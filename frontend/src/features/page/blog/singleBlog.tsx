import React, {useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectUserInfo, userInfo } from "../../user/userInfo";
import { blogInfoRequest } from "./blog-dto";
import { getBlog, selectBlogState, setBlogState } from "./blogSlice";
import { CommentPage } from "./comment/comment";

export const SingleBlog: React.FC = () => {
    const blog: blogInfoRequest = useAppSelector(selectBlogState).listBlog[0];
    const listUser: userInfo[] = useAppSelector(selectUserInfo).listUser;
    const dispatch = useAppDispatch();

    const setListBlog = () => {
        dispatch(setBlogState())
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
                        onClick={() => setListBlog()}
                    >
                        <i style={{fontSize: 30}} className="fas fa-times"></i>
                    </button>
                </div>
                <div className="section-header mt-3 text-center">
                    <h2>{blog.name}</h2>
                </div>
                <div className="row card-body">
                    <div className="col-12">
                        <img src={`${process.env.REACT_APP_SERVER_URL}${blog.image_blogs}`} alt="Blog" />
                        <div>
                            {blog.content.split("\r").map((item,index) => {
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
                <div className="mt-3 mb-3 mx-4">
                    <div className="mx-4">
                        {
                            blog.comments.map(item => {
                                return (
                                    <div key={item.comment_id} className="row">
                                        <div className="col-sm-3 p-0">
                                            <img className="rounded-circle mr-3 mt-3" style={{width: 35}} src={`${process.env.REACT_APP_SERVER_URL}/${getAvatar(item.user_id)}`} alt="Blog" />
                                            <span className="pb-4 text-dark">{getUsername(item.user_id)}</span>
                                        </div>
                                        <div className="col-sm-12">
                                            <p>
                                                {item.content}
                                            </p>
                                            <hr></hr>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}