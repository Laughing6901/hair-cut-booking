
export interface service {
    service_id: number,
    name: string,
    image: string,
    cate_id: number,
    status: number
}

export type listService = service[]

export interface gallery {
    gallery_id: number,
    name: string,
    image: string
}

export type listGallery = gallery[]

export interface voucher {
    voucher_id: number,
    voucher_code: string,
    status: number, 
    image_service: string, 
    price: number,
    description_voucher: string,
}

export type listVoucher = voucher[]

export interface categories {
    cate_id: number,
    name: string,
    image_cate: string,
    services: listService,
    gallerys: listGallery,
    vouchers: listVoucher,
}

export type listCategories = categories[]

export interface serviceState {
    state: 'idle' |'pending' | 'failed',
    categories: listCategories;
    errMsg: ''
}