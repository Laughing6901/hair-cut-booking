import { UserInfo } from "os";
import React, {useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { selectUserInfo, userInfo } from "../../../user/userInfo";
import { blogInfoRequest } from "../blog-dto";
import { getBlog, selectBlogState, setBlogState } from "../blogSlice";

export interface post {
    blog: blogInfoRequest
}

export const CommentInfo: React.FC<post> = ({blog}) => {
    const listUser: userInfo[] = useAppSelector(selectUserInfo).listUser;
    const dispatch = useAppDispatch();

    const setListBlog = (params: string) => {
        dispatch(setBlogState(params));
    }

    const getAvatar = (userOfCommentId: number) => {
        let userOfComment:any =  listUser.filter(user => {
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
    )
}