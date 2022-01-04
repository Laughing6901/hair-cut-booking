
export interface guestBookingInfo {
    contact: string, //name
    phone: string,
    start_time: Date,
    description: string,
}

export interface bookingForm extends bookingFormRequest {
    service: string [],
    date?: string,
    time?: string,
}

export interface bookingState {
    state: 'idle' | 'pending' | 'failed',
    msg: string,
    bookingform: bookingForm
}

export interface bookingFormRequest {
    contact: string,
    phone: string,
    stylist: string,
    description: string,
    start_time:Date | null,
}

//time for booking from 8h to 20h30 8h= 800 8h30 = 830
export const timeForBooking =[
    800,830,900,930,1000,1030,1100,1130,1300,1330,1400,1430,1500,1530,1600,1630,1700,1730,1800,1830,1900,1930,2000,2030,
]

export const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];