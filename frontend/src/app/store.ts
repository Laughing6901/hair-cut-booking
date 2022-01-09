import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import pageReducer from '../features/page/pageSlice';
import loginReducer from '../features/auth/login/loginSlice';
import userReducer from '../features/user/userInfo';
import categoryReducer from '../features/page/service/category';
import serviceReducer from '../features/page/price/serviceOnlySlice';
import bookingReducer from '../features/user/booking/ bookingSlice';
import barberReducer from '../features/page/barber/barberSlice';
import portfolioReducer from '../features/page/gallery/portfolioSlice';
import registerReducer from '../features/auth/register/registerSlice';
import authLayoutReducer from '../features/auth/layoutSlice';
import blogReducer from '../features/page/blog/blogSlice';
import commentReducer from '../features/page/blog/comment/commentSlice';
import previewReducer from '../features/page/preview/previewSlice';

export const store = configureStore({
  reducer: {
    pageState: pageReducer,
    loginState: loginReducer,
    userInfo: userReducer,
    categoryState: categoryReducer,
    serviceState: serviceReducer,
    bookingState: bookingReducer,
    barberState: barberReducer,
    portfolioState: portfolioReducer,
    registerState: registerReducer,
    authLayoutState: authLayoutReducer,
    blogState: blogReducer,
    commentState: commentReducer,
    previewState: previewReducer,
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
