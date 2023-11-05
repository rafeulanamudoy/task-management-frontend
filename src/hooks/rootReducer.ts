import { combineReducers } from "@reduxjs/toolkit";

import { baseApi } from "../redux/api/baseApi";

// import bookSlice from "../redux/features/book/bookSlice";

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;
