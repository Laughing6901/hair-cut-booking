import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import pageReducer from '../features/page/pageSlice';
import loginReducer from '../features/auth/login/loginSlice';
import userReducer from '../features/user/userInfo';
import categoryReducer from '../features/page/service/category';
import serviceReducer from '../features/page/price/serviceOnlySlice';
import bookingReducer from '../features/user/booking/ bookingSlice';
import barberReducer from '../features/page/barber/barberSlice';
import registerReducer from '../features/auth/register/registerSlice';
import authLayoutReducer from '../features/auth/layoutSlice';

export const store = configureStore({
  reducer: {
    pageState: pageReducer,
    loginState: loginReducer,
    userInfo: userReducer,
    categoryState: categoryReducer,
    serviceState: serviceReducer,
    bookingState: bookingReducer,
    barberState: barberReducer,
    registerState: registerReducer,
    authLayoutState: authLayoutReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
