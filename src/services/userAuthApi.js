import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userAuthApi = createApi({
  
  reducerPath: 'userAuthApi',
  // server ka link 
  baseQuery: fetchBaseQuery({ baseUrl: 'https://auth-3ra6.onrender.com/api/user/' }),

  endpoints: (builder) => ({
// yhi axios ka replace hai

    registerUser: builder.mutation({
      query: (user) => {
        return {
          url: 'register',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),

    loginUser: builder.mutation({
      query: (user) => {
        return {
          url: 'login',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),
    sendPasswordResetEmail: builder.mutation({
      query: (user) => {
        return {
          url: 'send-reset-password-email',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),
    resetPassword: builder.mutation({
      query: ({ actualData, id, token }) => {
        return {
          url: `/reset-password/${id}/${token}`,
          method: 'POST',
          body: actualData,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),
    getLoggedUser: builder.query({
      query: (token) => {
        return {
          url: `loggeduser`,
          method: 'GET',
          headers: {
            'authorization': `Bearer ${token}`,
          }
        }
      }
    }),
    changeUserPassword: builder.mutation({
      query: ({ actualData, token }) => {
        return {
          url: 'changepassword',
          method: 'POST',
          body: actualData,
          headers: {
            'authorization': `Bearer ${token}`,
          }
        }
      }
    }),
  }),
})

// yha automatic hook bna jisse endpoint pr call kr skte hai 
export const { useRegisterUserMutation, useLoginUserMutation, useSendPasswordResetEmailMutation, useResetPasswordMutation, useGetLoggedUserQuery, useChangeUserPasswordMutation } = userAuthApi