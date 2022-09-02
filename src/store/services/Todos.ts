import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    getAllTodos: builder.query<string[], null>({
      query: () => `todos`,
      providesTags: () => ['Todo'],
    }),
    removeTodo: builder.mutation<void, number>({
      query: (index) => `removetodo/${index}`,
      invalidatesTags: ['Todo'],
    }),
  }),
})

export const { useGetAllTodosQuery, useRemoveTodoMutation } = todosApi;