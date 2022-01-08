
export type category = {
    cate_id: number,
    name: string
}

export interface portfolioInfo {
    gallery_id: number,
    name: string,
    image: string,
    description: string,
    category: category,
}

export type listPortfolio = portfolioInfo [];

export interface portfolioState {
    state: 'idle' | 'pending' | 'failed',
    msg: string,
    listPortfolio: listPortfolio,
}