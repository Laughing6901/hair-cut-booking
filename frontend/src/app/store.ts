import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import pageReducer from '../features/page/pageSlice';
import loginReducer from '../features/auth/login/loginSlice';

export const store = configureStore({
  reducer: {
    pageState: pageReducer,
    loginState: loginReducer,
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
