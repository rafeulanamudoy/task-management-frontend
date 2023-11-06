import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ITask } from "../../../types/ITask";

const initialState: ITask = {
  title: "",
  description: "",
  status: "",
};

export const authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    setUpdateTask: (state, { payload }: PayloadAction<ITask>) => {
      console.log(payload, "taskSlice");
      state.title = payload.title;
      state.description = payload.description;
      state.status = payload.status;
      state._id = payload._id;
    },
  },
});

export const { setUpdateTask } = authSlice.actions;
export default authSlice.reducer;
