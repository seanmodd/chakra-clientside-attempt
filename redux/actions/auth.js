import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API || 'http://localhost:8000/api';

export const register = async (user) =>
  await axios.post(`${BASE_URL}/register`, user);

export const login = async (user) =>
  await axios.post(`${BASE_URL}/login`, user);

// update user in local storage
export const updateUserInLocalStorage = (user, next) => {
  if (window.localStorage.getItem('auth')) {
    const auth = JSON.parse(localStorage.getItem('auth'));
    auth.user = user;
    localStorage.setItem('auth', JSON.stringify(auth));
    next();
  }
};
