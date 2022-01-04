
export interface barberInfo {
    user_id: number,
    username: string,
    fullname: string,
    password: string,
    email: string,
    phone: string,
    avatar: string,
    address: string,
    role: number,
    status: string,
    create_date: string,
    create_by: string,
    update_date: string | null, 
    update_by: string | null,
}

export type listBarber = barberInfo [];

export interface barberState {
    state: 'idle' | 'pending' | 'failed',
    msg: string,
    listBarber: listBarber,
}