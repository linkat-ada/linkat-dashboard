import {
    FETCH_TOKEN,
    FETCH_TOKEN_FAILED,
    TOKEN_REMOVE,
    GET_USERS,
    TOGGLE_ACTIVITY,
    DELETE_USER
} from "../constants";
import API_URLS from "../../api";
import { requestApi } from "../../helpers/index.js";


export const getLinkTypesAction = (userData) => async (dispatch) => {
    // let data = {
    //     url: API_URLS(userData.id).AUTH.DELETE_USER,
    //     method: "DELETE",
    //     body: {
    //         ...userData,
    //     },
    // };
    // await requestApi(data)
    //     .then((res) => {
    //         dispatch({ type: DELETE_USER, payload: res?.data });
    //     })
};

export const addLinkTypeAction = (userData) => async (dispatch) => {
    // let data = {
    //     url: API_URLS(userData.id).AUTH.DELETE_USER,
    //     method: "DELETE",
    //     body: {
    //         ...userData,
    //     },
    // };
    // await requestApi(data)
    //     .then((res) => {
    //         dispatch({ type: DELETE_USER, payload: res?.data });
    //     })
};

export const editLinkTypeAction = (userData) => async (dispatch) => {
    // let data = {
    //     url: API_URLS(userData.id).AUTH.DELETE_USER,
    //     method: "DELETE",
    //     body: {
    //         ...userData,
    //     },
    // };
    // await requestApi(data)
    //     .then((res) => {
    //         dispatch({ type: DELETE_USER, payload: res?.data });
    //     })
};

export const editLinkIconAction = (userData) => async (dispatch) => {
    // let data = {
    //     url: API_URLS(userData.id).AUTH.DELETE_USER,
    //     method: "DELETE",
    //     body: {
    //         ...userData,
    //     },
    // };
    // await requestApi(data)
    //     .then((res) => {
    //         dispatch({ type: DELETE_USER, payload: res?.data });
    //     })
};