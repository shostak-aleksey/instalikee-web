export const storeTokens = (accessToken: string, refreshToken: string) => {
  localStorage.setItem('refreshToken', refreshToken);
  sessionStorage.setItem('accessToken', accessToken);
};

export const getAccessToken = () => sessionStorage.getItem('accessToken');
export const getRefreshToken = () => localStorage.getItem('refreshToken');
