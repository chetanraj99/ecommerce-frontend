import { api } from "../../api/auth";
import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_HISTORY_REQUEST,
  GET_ORDER_HISTORY_SUCCESS,
  GET_ORDER_HISTORY_FAILURE,
} from "./ActionType"; // Adjust the path if necessary

export const createOrder = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_ORDER_REQUEST });
  try {
    const { data } = await api.post(`/api/orders/`,reqData.address);
console.log(data);
    if (data.id) {
      reqData.navigate({ search: `step=3&order_id=${data.id}` });
    }
    console.log("created oreder - ", data);
    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_ORDER_FAILURE, payload: error.message });
  }
};

export const getOrderById = (orderId) => async (dispatch) => {
  dispatch({ type: GET_ORDER_BY_ID_REQUEST });
  try {
    const { data } = await api.get(`/api/orders/${orderId}`);
    console.log(data);
    dispatch({ type: GET_ORDER_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ORDER_BY_ID_FAILURE, payload: error.message });
  }
};

export const getOrderHistory = () => async (dispatch) => {
  dispatch({ type: GET_ORDER_HISTORY_REQUEST });
  try {
    const { data } = await api.get("/api/orders/history");
    dispatch({ type: GET_ORDER_HISTORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ORDER_HISTORY_FAILURE, payload: error.message });
  }
};
