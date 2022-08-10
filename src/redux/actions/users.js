import { SET_USERS_INFO } from "../types";

export function setUserInfo(payload) {
    return {
        type: SET_USERS_INFO,
        payload
    };
}