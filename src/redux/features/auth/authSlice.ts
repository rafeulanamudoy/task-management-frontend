import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser, IUserResponseData } from "../../../types/IUser";

const initialState: IUser = {
  user: {
    email: "",
  },
  isLoading: false,
  isError: false,
  error: "",
};

export const authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<IUserResponseData>) => {
      console.log(payload, "i am from authSlice");
      state.user.email = payload.email ?? "";
    },
    logOut: (state) => {
      state.user.email = "";
    },
  },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
