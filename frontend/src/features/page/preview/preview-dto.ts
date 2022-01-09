export interface bookingDetails {
    booking_details_id: number,
    service_id: number,
    price: string,
    description: string,
}
export type listBookingDetails = bookingDetails[]


export interface userBookingInfo {
        booking_id: number,
        start_time: string,
        contact: string,
        phone: string,
        description: string,
        preview: string,
        status: number,
        bookingdetails: listBookingDetails,
} 
export interface previewState {
    state: 'idle' | 'pending' | 'failed',
    msg: string,
    listPreview: userBookingInfo[],
}