import { FIRST_EMAIL, LOGIN, GET_MOVIES, LOGOUT } from "./actionTypes";

export let nextId = 0;

export const firstEmail = (email) => ({
  type: FIRST_EMAIL,
  payload: {
    email
  },
});

export const login = (token) => ({
  type: LOGIN,
  payload: {
    token
  },
});

export const get_movies = (content) => ({
  type: GET_MOVIES,
  payload: {
    movies: content,
  },
});

export const logout = () => ({
  type: LOGOUT
});