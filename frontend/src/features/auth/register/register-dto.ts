export type registerInfo = {
    username: string,
    fullname: string,
    email: string,
    phone: string,
    address: string,
    avatar?: string,
    image?: any,
    role: number,
    password: string,
}
export type registerState = {
    state: 'idle' | 'pending' | 'failed',
    msg: string,
}

export const registerInit: registerInfo = {
    username: "",
    fullname: "",
    email: "",
    phone: "",
    address: "",
    avatar: "",
    role: 1,
    password: "",
}

export interface RefObject {
    open: () => void,
    close: () => void,
    toggle: () => void,
}