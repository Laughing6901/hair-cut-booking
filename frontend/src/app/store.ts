import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import pageReducer from '../features/page/pageSlice';
import loginReducer from '../features/auth/login/loginSlice';
import userReducer from '../features/user/userInfo';
import categoryReducer from '../features/page/service/category';
import serviceReducer from '../features/page/price/serviceOnlySlice';
import bookingReducer from '../features/user/booking/ bookingSlice';

export const store = configureStore({
  reducer: {
    pageState: pageReducer,
    loginState: loginReducer,
    userInfo: userReducer,
    categoryState: categoryReducer,
    serviceState: serviceReducer,
    bookingState: bookingReducer,
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
