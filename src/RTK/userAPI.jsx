import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://172.16.14.194:3000",
  }),
  tagTypes: ["User"], // any name you can assign
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/user/all-users-data",
      providesTags: ["User"],
    }),
    setUser: builder.mutation({
      query: (body) => ({
        url: "/user/sign-up",
        method: "POST",
        body: body,
      }),
    }),
    verifyUser: builder.mutation({
      query: (body) => ({
        url: "/user/log-in",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useGetUsersQuery ,useSetUserMutation , useVerifyUserMutation} = userApi;
