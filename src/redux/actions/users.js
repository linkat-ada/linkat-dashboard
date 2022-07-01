import {
  GET_USERS,
  TOGGLE_ACTIVITY,
  DELETE_USER
} from "../constants";
import API_URLS from "../../api";
import { requestApi } from "../../helpers/index.js";


export const getUsersAction = () => async (dispatch) => {
  let data = {
    url: API_URLS().USERS.GET_USERS,
  };
  await requestApi(data).then((res) => {
    dispatch({ type: GET_USERS, payload: res?.data });
    return res?.data
  })
};

export const toggleActivityAction = (userData) => async (dispatch) => {
  let data = {
    url: API_URLS(userData.id).USERS.TOGGLE_ACTIVITY,
    method: "PATCH",
    body: {
      ...userData,
    },
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: TOGGLE_ACTIVITY, payload: res?.data });
    })
};

export const getUserLinksAction = (userData) => async (dispatch) => {
  // let data = {
  //   url: API_URLS().USERS.SIGNIN,
  //   method: "POST",
  //   body: {
  //     ...userData,
  //   },
  // };
  // await requestApi(data)
  //   .then((res) => {
  //     dispatch({ type: FETCH_TOKEN, payload: res?.data });
  //   })
};

export const deleteUserLinkAction = (userData) => async (dispatch) => {
  // let data = {
  //   url: API_URLS().USERS.SIGNIN,
  //   method: "POST",
  //   body: {
  //     ...userData,
  //   },
  // };
  // await requestApi(data)
  //   .then((res) => {
  //     dispatch({ type: FETCH_TOKEN, payload: res?.data });
  //   })
};

export const deleteUserAction = (userData) => async (dispatch) => {
  let data = {
    url: API_URLS(userData.id).USERS.DELETE_USER,
    method: "DELETE",
    body: {
      ...userData,
    },
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: DELETE_USER, payload: res?.data });
    })
};