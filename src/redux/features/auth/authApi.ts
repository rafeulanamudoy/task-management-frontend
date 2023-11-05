import { IPostSignUpData } from "../../../types/IUser";
import { baseApi } from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation({
      query: (data: IPostSignUpData) => ({
        url: "/auth/signUp",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSignUpMutation } = authApi;
