export interface commentInfoRequest {
    content: string,
    blog_id: number,
    user_id: number,
}

export interface commentInfoResponse extends commentInfoRequest {
    comment_id: number,
}
export type listComment = commentInfoResponse[]
export interface commentState {
    state: 'idle' | 'pending' | 'failed',
    msg: '',
    listComment: listComment,
}