import {
  TOGGLE_ACTIVITY,
  GET_USERS,
  GET_USERLINKS,
  DELETE_USER,
  DELETE_LINK
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
  let data = {
    url: API_URLS().USERS.GET_USERLINKS
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: GET_USERLINKS, payload: res?.data });
    })
};

export const deleteUserLinkAction = (userData) => async (dispatch) => {
  let data = {
    url: API_URLS(userData.id).USERS.DELETE_LINK,
    method: "DELETE",
    body: {
      ...userData,
    },
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: DELETE_LINK, payload: res?.data });
    })
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
