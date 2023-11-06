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
    filterBySearch: build.query({
      query: ({ search, userEmail }) => `/task/${userEmail}?search=${search}`,
      providesTags: ["Task"],
    }),
    filterByStatus: build.query({
      query: ({ status, userEmail }) => `/task/${userEmail}?status=${status}`,
      providesTags: ["Task"],
    }),
    sortingTask: build.query({
      query: ({ sortOrder, userEmail }) =>
        `/task/${userEmail}?sortBy=createdAt&sortOrder=${sortOrder}`,
      providesTags: ["Task"],
    }),
    filterByStatusSort: build.query({
      query: ({ sortOrder, status, userEmail }) =>
        `/task/${userEmail}?sortBy=createdAt&sortOrder=${sortOrder}&status=${status}`,
      providesTags: ["Task"],
    }),
  }),
});

export const {
  useCreateTaskMutation,
  useGetAllTaskQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
  useFilterBySearchQuery,
  useFilterByStatusQuery,
  useSortingTaskQuery,
  useFilterByStatusSortQuery,
} = taskApi;
