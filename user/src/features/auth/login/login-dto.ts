export type loginInfo = {
    username: string,
    password: string,
}
export type loginState = {
    state: 'idle' | 'pending' | 'failed',
    msg: string,
}

export interface RefObject {
    open: () => void,
    close: () => void,
    toggle: () => void,
}