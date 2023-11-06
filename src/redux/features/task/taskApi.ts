import { ITask } from "../../../types/ITask";

import { baseApi } from "../../api/baseApi";

export const taskApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createTask: build.mutation({
      query: (data: ITask) => ({
        url: "/task/create-task",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Task"],
    }),
    getAllTask: build.query({
      query: (email: string) => `/task/${email}`,
      providesTags: ["Task"],
    }),
    updateTask: build.mutation({
      query: ({ taskId, updateData }) => ({
        url: `/task/${taskId}`,
        method: "PATCH",
        body: updateData,
      }),
      invalidatesTags: ["Task"],
    }),
    deleteTask: build.mutation({
      query: (taskId: string) => ({
        url: `/task/${taskId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});

export const {
  useCreateTaskMutation,
  useGetAllTaskQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = taskApi;
