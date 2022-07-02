import {
    GET_LINKTYPES,
    ADD_LINKTYPE,
    EDIT_LINKTYPE,
    EDIT_LINKICON
} from "../constants";
import API_URLS from "../../api";
import { requestApi } from "../../helpers/index.js";


export const getLinkTypesAction = (userData) => async (dispatch) => {
    let data = {
        url: API_URLS().LINKTYPES.GET_LINKTYPES
    };
    await requestApi(data)
        .then((res) => {
            dispatch({ type: GET_LINKTYPES, payload: res?.data });
        })
};

export const addLinkTypeAction = (userData) => async (dispatch) => {
    let data = {
        url: API_URLS().LINKTYPES.ADD_LINKTYPE,
        method: "POST",
        body: {
            ...userData,
        },
    };
    await requestApi(data)
        .then((res) => {
            dispatch({ type: ADD_LINKTYPE, payload: res?.data });
        })
};

export const editLinkTypeAction = (userData) => async (dispatch) => {
    let data = {
        url: API_URLS(userData.id).LINKTYPES.EDIT_LINKTYPE,
        method: "PATCH",
        body: {
            ...userData,
        },
    };
    await requestApi(data)
        .then((res) => {
            dispatch({ type: EDIT_LINKTYPE, payload: res?.data });
        })
};

export const editLinkIconAction = (userData) => async (dispatch) => {
    let data = {
        url: API_URLS(userData.id).LINKTYPES.EDIT_LINKICON,
        method: "PATCH",
        body: {
            ...userData,
        },
    };
    await requestApi(data)
        .then((res) => {
            dispatch({ type: EDIT_LINKICON, payload: res?.data });
        })
};