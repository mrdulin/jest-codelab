import decode from 'jwt-decode';

export const checkAuth = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return false;
  }

  try {
    const { exp } = decode(token);
    if (exp < new Date().getTime() / 1000) {
      console.log(123);
      return false;
    }
  } catch (e) {
    console.log(e);
    return false;
  }

  return true;
};
