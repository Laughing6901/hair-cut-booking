import React, {useEffect} from "react";
import { useAppSelector } from "../../../app/hooks";
import { BreadCrumb } from "../breadCrumb/breadCrumb";
import { BlogBody } from "./blog";
import { blogState } from "./blog-dto";
import { getBlog, selectBlogState } from "./blogSlice";
import { SingleBlog } from "./singleBlog";


export const BlogPage: React.FC = () => {
    const blogState: blogState = useAppSelector(selectBlogState);
    
    return(
        <>
            <BreadCrumb tab="Blog" />
                <BlogBody blog={0}/>                
        </>
    )
}