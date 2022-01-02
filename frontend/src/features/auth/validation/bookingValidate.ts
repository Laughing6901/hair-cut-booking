import * as Yup from 'yup';
export const bookingValidate = Yup.object().shape({
    contact: Yup.string()
    .min(6, 'Edit your full name')
    .max(50, 'Too Long!')
    .required('Required'),
    phone: Yup.string()
    .min(10, 'wrong phone number')
    .max(10, 'wrong phone number')
    .required('Required'),
    service: Yup.array()
    .min(1, 'choose service'),
    // .required('Required'),
});