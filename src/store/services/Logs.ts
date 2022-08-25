import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const logsApi = createApi({
  reducerPath: 'logsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
  endpoints: (builder) => ({
    getLogs: builder.mutation<string, string>({
      query: (value) => `logs/${value}`,
    }),
  }),
})

export const { useGetLogsMutation } = logsApi;