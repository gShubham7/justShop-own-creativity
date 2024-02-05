import axios from "axios";
import { ACTION_GET_PRODUCTS } from "../products/product.actions";
import {
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_LOADING,
  DELETE_PRODUCT_SUCCESS,
  GET_ADMIN_ERROR,
  GET_ADMIN_LOADING,
  GET_ADMIN_SUCCESS,
  ADD_PRODUCT_LOADING,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
} from "./admin.types";

export const ACTION_GET_ADMIN = () => async (dispatch) => {
  dispatch({ type: GET_ADMIN_LOADING });
  try {
    let res1 = await axios.get(
      "https://sample-backend-cvar.onrender.com/carts"
    );
    let res2 = await axios.get(
      "https://sample-backend-cvar.onrender.com/users"
    );

    let data = { carts: res1.data, users: res2.data };

    return dispatch({ type: GET_ADMIN_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_ADMIN_ERROR, payload: err.message });
  }
};

export const ACTION_DELETE_PRODUCT =
  (payload = {}) =>
  async (dispatch) => {
    dispatch({ type: DELETE_PRODUCT_LOADING });
    try {
      await axios.delete(
        `https://sample-backend-cvar.onrender.com/${payload.value}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            id: payload.id,
            value: payload.value,
            name: payload.name,
          },
        }
      );
      dispatch({ type: DELETE_PRODUCT_SUCCESS });
      return dispatch(ACTION_GET_PRODUCTS());
    } catch (err) {
      dispatch({ type: DELETE_PRODUCT_ERROR, payload: err.message });
    }
  };

export const ACTION_ADD_PRODUCT =
  (payload = {}) =>
  async (dispatch) => {
    dispatch({ type: ADD_PRODUCT_LOADING });
    try {
      await axios.post(
        `https://sample-backend-cvar.onrender.com/${payload.value}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            area: payload.area,
          },
        }
      );
      return dispatch({ type: ADD_PRODUCT_SUCCESS });
    } catch (err) {
      dispatch({ type: ADD_PRODUCT_ERROR, payload: err.message });
    }
  };

//   {id: 20,name:'Sparx Womens Walking Shoes',quantity: 1,defaultImage: 'https://i.ibb.co/Qrrkx8m/81-Og-N4zwd-L-UX695.jpg',hoverImage: 'https://i.ibb.co/rG6F4S4/71s-Hcj-OLbu-L-SX695-SX-UX-SY-UY.jpg',price: 799,strikePrice: 1090,rating: 4,firstImages: [],secondImages: [],thirdImages: []}
