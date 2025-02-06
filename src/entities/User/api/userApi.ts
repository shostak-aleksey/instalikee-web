import { rtkApi } from '@/shared/api/rtkApi';
import { User } from '../model/types/user';

const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getUserDataById: build.query<User, string>({
      query: (userId) => ({
        url: `/user/${userId}`,
        method: 'GET',
      }),
    }),
    getUserData: build.query<User, void>({
      query: () => ({
        url: `/user`,
        method: 'GET',
      }),
    }),
    initAuthData: build.query<User, void>({
      query: () => ({
        url: `/auth/check`,
        method: 'GET',
        credentials: 'include',
      }),
      transformResponse: (response: User) => {
        return response;
      },
    }),
    logout: build.mutation<void, void>({
      query: () => ({
        url: `/auth/logout`,
        method: 'GET',
        credentials: 'include',
      }),
    }),
  }),
});

export const {
  useGetUserDataByIdQuery,
  useGetUserDataQuery,
  useInitAuthDataQuery,
  useLogoutMutation,
} = userApi;
