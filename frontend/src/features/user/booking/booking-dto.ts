
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

export const time =[
    ["700","730"],
    ["800","830"],
    ["900","930"],
    ["1000","1030"],
    ["1100","1130"],
    ["1300","1330"],
    ["1400","1430"],
    ["1500","1530"],
    ["1600","1630"],
    ["1700","1730"],
    ["1800","1830"],
    ["1900","1930"],
    ["2000","2030"],
]