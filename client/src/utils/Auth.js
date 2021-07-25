// Verify if auth
export const isAuth = () => {
  return localStorage.getItem('token') !== null;
};

// Logout
export const logout = () => {
  localStorage.clear();
  window.location = '/connexion';
};
