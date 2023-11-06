import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ITaskFilter } from "../../../types/ITask";

const initialState: ITaskFilter = {
  filters: {
    status: "",
    sort: "",
  },
  search: "",
};

export const taskFilterSlice = createSlice({
  name: "taskFilter",
  initialState,
  reducers: {
    setFilter: (state, { payload }: PayloadAction<ITaskFilter>) => {
      const { status, sort } = payload.filters;

      state.filters.status = status;
      state.filters.sort = sort;
      state.search = "";
    },
    setSearch: (state, action: PayloadAction<string>) => {
      //console.log(action.payload);

      state.search = action.payload;
      state.filters.status = "";
      state.filters.sort = "";
    },
  },
});

export const { setFilter, setSearch } = taskFilterSlice.actions;
export default taskFilterSlice.reducer;
