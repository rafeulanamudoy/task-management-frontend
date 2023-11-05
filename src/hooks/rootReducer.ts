import { combineReducers } from "@reduxjs/toolkit";

import { baseApi } from "../redux/api/baseApi";
import authSlice from "../redux/features/auth/authSlice";

// import bookSlice from "../redux/features/book/bookSlice";

export const rootReducer = combineReducers({
  auth: authSlice,
  [baseApi.reducerPath]: baseApi.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;
