import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.types";

const initialState = {
  token: { token: localStorage.getItem("token") },
  isAuth: !!localStorage.getItem("token"),
  loading: false,
  error: false,
  AdminIsAuth: localStorage.getItem("token") === "admin@gmail.com#admin",
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case LOGIN_SUCCESS: {
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        isAuth: true,
        token: payload,
        loading: false,
        error: false,
        AdminIsAuth: payload.token === "admin@gmail.com#admin",
      };
    }

    case LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: payload,
      };
    }

    case LOGOUT: {
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
        token: "",
        AdminIsAuth: false,
      };
    }
    default: {
      return state;
    }
  }
};
