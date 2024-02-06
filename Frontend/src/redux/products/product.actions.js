import axios from "axios";
import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
} from "./product.types";

export const ACTION_GET_PRODUCTS = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });

  try {
    let res1 = await axios.get(`${process.env.REACT_APP_BASE_URL}/mens`);
    let res2 = await axios.get(`${process.env.REACT_APP_BASE_URL}/womens`);
    let res3 = await axios.get(`${process.env.REACT_APP_BASE_URL}/electronics`);

    let data = { mens: res1.data, womens: res2.data, electronics: res3.data };

    return dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_PRODUCTS_ERROR, payload: err.message });
  }
};
