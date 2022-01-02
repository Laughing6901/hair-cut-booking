
export interface guestBookingInfo {
    contact: string, //name
    phone: string,
    start_time: Date,
    description: string,
}

export interface bookingForm {
    contact: string,
    phone: string,
    stylist: string,
    service: string [],
    description: string,
    time:Date
}

export interface bookingState {
    state: 'idle' | 'pending' | 'failed',
    msg: string,
    bookingform: bookingForm
}

