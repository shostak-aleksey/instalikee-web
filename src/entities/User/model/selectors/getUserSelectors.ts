import { StateSchema } from '@/app/providers/StoreProvider';

export const getUserAuthData = (state: StateSchema) => state.user.user;
export const getUserRole = (state: StateSchema) => state.user.user?.role;
