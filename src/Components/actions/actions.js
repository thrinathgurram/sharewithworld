import axios from 'axios';
//import jwtDecode from 'jwt-decode';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

const BASE_URL = 'https://productservices.herokuapp.com'

export function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

export function signup(userData) {
  return dispatch => {
    return axios.post(`${BASE_URL}/auth/register`, userData);
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('USER_INFO');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function login(data) {
  return dispatch => {
    return axios.post(`${BASE_URL}/auth/login`, data).then(res => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      const userInfo = {
        username:res.data.user.username,
        firstName:res.data.user.firstName,
        lastName:res.data.user.lastName,
        bio:res.data.user.bio,
        createdAt:res.data.user.createdAt,
        email:res.data.user.email,
        id:res.data.user._id
      }
      localStorage.setItem('USER_INFO',JSON.stringify(userInfo));
      setAuthorizationToken(token);
      dispatch(setCurrentUser(userInfo));
    });
  }
}

export function setCurrentUser(user) {
  //const user= user
  return {
    type: SET_CURRENT_USER,
    user
  };
}