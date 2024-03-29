import axios from "axios";
import {
  ADD_ITEM_TO_CART_ERROR,
  ADD_ITEM_TO_CART_LOADING,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_ITEMS_ERROR,
  GET_CART_ITEMS_LOADING,
  GET_CART_ITEMS_SUCCESS,
  REMOVE_CART_ITEMS_ERROR,
  REMOVE_CART_ITEMS_LOADING,
  REMOVE_CART_ITEMS_SUCCESS,
} from "./cart.types";

export const ACTION_GET_CART = (token) => async (dispatch) => {
  dispatch({ type: GET_CART_ITEMS_LOADING });
  try {
    let res = await axios.get(`${process.env.REACT_APP_BASE_URL}/cart`);
    const unique = res.data.find((el) => el.token === token);
    return dispatch({ type: GET_CART_ITEMS_SUCCESS, payload: unique.cartData });
  } catch (err) {
    dispatch({ type: GET_CART_ITEMS_ERROR, payload: err.message });
  }
};

export const ACTION_ADD_ITEM_TO_CART =
  (payload = {}) =>
  async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_LOADING });

    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/cart`, payload);

      return dispatch({
        type: ADD_ITEM_TO_CART_SUCCESS,
        payload: payload.data,
      });
    } catch (err) {
      dispatch({ type: ADD_ITEM_TO_CART_ERROR, payload: err.message });
    }
  };

// REMOVE_CART_ITEMS_LOADING   // REMOVE_CART_ITEMS_SUCCESS    // REMOVE_CART_ITEMS_ERROR

// export const ACTION_REMOVE_ITEM_CART =
//   (payload = {}) =>
//   async (dispatch) => {
//     dispatch({ type: REMOVE_CART_ITEMS_LOADING });

//     try {
//       await axios.post(`https://sample-backend-cvar.onrender.com/cart/${payload.id}`, payload);
//       //console.log(payload);
//       return dispatch({ type: REMOVE_CART_ITEMS_SUCCESS });
//     } catch (err) {
//       dispatch({ type: REMOVE_CART_ITEMS_ERROR, payload: err.message });
//     }
//   };
export const ACTION_REMOVE_ITEM_CART =
  (payload = 1) =>
  async (dispatch) => {
    dispatch({ type: REMOVE_CART_ITEMS_LOADING });

    try {
      await axios.delete(`${process.env.REACT_APP_BASE_URL}/cart`, {
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          id: payload.id,
          token: payload.token,
        },
      });
      dispatch({ type: REMOVE_CART_ITEMS_SUCCESS });
      return dispatch(ACTION_GET_CART(payload.token));
    } catch (err) {
      dispatch({ type: REMOVE_CART_ITEMS_ERROR, payload: err.message });
    }
  };
