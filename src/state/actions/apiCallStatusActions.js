import * as types from "./actionTypes";

export function beginApiCall() {
    return {
        type: types.API_CALLS_IN_PROGRESS.BEGIN_CALL
    };
}

export function apiCallError() {
    return {
        type: types.API_CALLS_IN_PROGRESS.CALL_ERROR
    };
}