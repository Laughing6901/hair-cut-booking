
export interface serviceOnly {
    service_id: number,
    name: string,
    image: string,
    price: string,
    description: string,
    category: {
        cate_id: number,
        name: string
    }
}

export type listServiceOnly = serviceOnly[];

export interface serviceOnlyState {
    state: 'idle' | 'pending' | 'failed',
    msg: string,
    serviceOnly: listServiceOnly
}