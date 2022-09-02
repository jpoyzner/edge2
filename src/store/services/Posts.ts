import { useEffect } from 'react';
import { User, Post } from '../../types';
import { useAppDispatch } from '../../components/hooks';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        await delay(2000);

        const usersRes = await fetchWithBQ('users');
        const users = usersRes.data as User[];

        const postsRes = await fetchWithBQ('posts');
        const posts = postsRes.data as Post[];
        
        const usersMap: Map<number, string> = new Map();
        users.forEach((user: User) => {
          usersMap.set(user.id, user.username);
        });

        return { data: posts.map((post: Post) => ({ ...post, user: usersMap.get(post.userId) }))};
      },
    }),
  }),
})

function delay(time: number): Promise<void> {
  return new Promise((resolve) => setTimeout(() => resolve(), time));
}

type EndpointNames = keyof typeof postsApi.endpoints;

export function usePrefetchPosts(endpoint: any, arg: any, options: any) {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(postsApi.util.prefetch(endpoint, arg, options))
  }, [arg, dispatch, endpoint, options])
}

export const { useGetPostsQuery } = postsApi;