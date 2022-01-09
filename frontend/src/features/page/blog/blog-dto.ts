export interface category {
    cate_id: number,
    name: string,
}

export type comment = {
    comment_id: number,
    content: string,
    user_id: number,
}
export type listComment = comment[]

export interface blogInfoRequest {
    blog_id: number,
    name: string,
    image_blogs: any,
    description: string,
    content: string,
    comments: listComment,
    status?: string,
    deleted?: string,
    created_by?: string,
    created_date: Date | string,
    updated_by?: string,
    updated_date?: Date,
}

export type listBlogInfoResponse = blogInfoRequest[];

export interface blogState {
    state: 'idle' | 'pending' | 'failed' |"single",
    msg: string,
    listBlog: listBlogInfoResponse,
    blog: blogInfoRequest,
}