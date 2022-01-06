export type registerInfo = {
    username: string,
    fullname: string,
    email: string,
    phone: string,
    address: string,
    avatar: string,
    role: string,
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
    role: "",
    password: "",
}