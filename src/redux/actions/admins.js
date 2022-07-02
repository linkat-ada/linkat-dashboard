import {
    GET_ADMINS,
    CHANGE_ROLE,
    CREATE_ADMIN,
    DELETE_ADMIN
} from "../constants";
import API_URLS from "../../api";
import { requestApi } from "../../helpers/index.js";


export const getAdminsActions = (userData) => async (dispatch) => {
    let data = {
        url: API_URLS().ADMINS.GET_ADMINS
    };
    await requestApi(data)
        .then((res) => {
            dispatch({ type: GET_ADMINS, payload: res?.data });
        })
};

export const deleteAdminAction = (userData) => async (dispatch) => {
    let data = {
        url: API_URLS(userData.id).SUPERADMINS.DELETE_ADMIN,
        method: "DELETE",
        body: {
            ...userData,
        },
    };
    await requestApi(data)
        .then((res) => {
            dispatch({ type: DELETE_ADMIN, payload: res?.data });
        })
};

export const changeRoleAction = (userData) => async (dispatch) => {
    let data = {
        url: API_URLS(userData.id).SUPERADMINS.CHANGE_ROLE,
        method: "PATCH",
        body: {
            ...userData,
        },
    };
    await requestApi(data)
        .then((res) => {
            dispatch({ type: CHANGE_ROLE, payload: res?.data });
        })
};

export const createAdminAction = (userData) => async (dispatch) => {
    let data = {
        url: API_URLS().SUPERADMINS.CREATE_ADMIN,
        method: "POST",
        body: {
            ...userData,
        },
    };
    await requestApi(data)
        .then((res) => {
            dispatch({ type: CREATE_ADMIN, payload: res?.data });
        })
};