export type loginInfo = {
    username: string,
    password: string,
}
export type loginState = {
    state: 'idle' | 'pending' | 'failed',
    errMsg: string,
}