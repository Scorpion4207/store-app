import { apiSlice } from "./api.ts";

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export interface NewUser {
  username: string;
  email: string;
  password: string;
}

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<User, NewUser>({
      query: (credentials) => ({
        url: "users",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = userApi;
