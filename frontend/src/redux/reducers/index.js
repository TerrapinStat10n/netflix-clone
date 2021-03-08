import { FIRST_EMAIL, LOGIN, GET_MOVIES, LOGOUT } from "../actionTypes";

const initialState = 
  {
    email: "",
    movies: [],
    token: "",
  };

export default function index (state = initialState, action) {
  switch (action.type) {
    case FIRST_EMAIL: {
      const { email } = action.payload;

      return { email };
    }
    case LOGIN: {
      const { token } = action.payload;
      return { token };
    }
    case GET_MOVIES: {
      const { movies } = action.payload;
      return {
        ...state,
        movies
      };
    }
    case LOGOUT: {
      return {};
    }
    default:
      return state;
  }
}
