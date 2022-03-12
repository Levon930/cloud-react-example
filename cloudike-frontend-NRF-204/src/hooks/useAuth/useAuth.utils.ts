export const setToken = (accessToken: string): void => {
  localStorage.setItem('token', accessToken);
};

export const getToken = (): string | null => localStorage.getItem('token');

export const removeToken = (): void => {
  localStorage.removeItem('token');
};
