import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
  endpoints: (builder) => ({
    getAllTodos: builder.query<string[], void>({
      query: () => `todos`,
    }),
    removeTodo: builder.mutation<string[], number>({
      query: (index) => `removetodo/${index}`,
    }),
  }),
})

export const { useGetAllTodosQuery, useRemoveTodoMutation } = todosApi;