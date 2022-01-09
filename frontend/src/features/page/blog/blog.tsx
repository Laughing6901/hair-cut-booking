import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { blogInfoRequest, blogState, listBlogInfoResponse } from "./blog-dto";
import { selectBlogState, setSingleBlog } from "./blogSlice";

export const BlogBody: React.FC = () => {
    const blogState: blogState = useAppSelector(selectBlogState);
    console.log(blogState.listBlog);
    const dispatch = useAppDispatch();
    const setBlog = (params: blogInfoRequest) => {
        dispatch(setSingleBlog(params));
    }

    return (
        <div className="blog">
            <div className="container">
                <div className="section-header text-center">
                    <p>Latest From Blog</p>
                    <h2>Learn More from Latest Barber Blog</h2>
                </div>
                <div className="row blog-page">
                {
                    blogState.listBlog.map((item, index) => {
                        return (
                            <div key={index} className="col-lg-4 col-md-6">
                                <div className="blog-item" >
                                    <div className="blog-img">
                                        <img src={`${process.env.REACT_APP_SERVER_URL}${item.image_blogs}`} alt="Blog" />
                                    </div>
                                    <div className="blog-meta">
                                        <i className="fa fa-list-alt"></i>
                                        <a href="">{item.description}</a>
                                        <i className="fa fa-calendar-alt"></i>
                                        <p>{new Date(item.created_date).toDateString()}</p>
                                    </div>
                                    <div className="blog-text">
                                        <h2>{item.name}</h2>
                                        <p style={{height: 70, overflow: "hidden"}}>
                                            {item.content}
                                        </p>
                                        <button 
                                            className="btn"
                                            onClick={() => setBlog(item)}
                                        >
                                            Read More 
                                            <i className="fa fa-angle-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }   
                </div>
            </div>
        </div>
    )
}