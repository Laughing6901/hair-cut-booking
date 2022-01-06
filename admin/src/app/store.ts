import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from '../features/auth/login/loginSlice';
import bookingReducer from '../features/pages/homePage/bookingView/bookingSlice';
import registerReducer from '../features/auth/signin/signinSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    booking: bookingReducer,
    signin: registerReducer,
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
