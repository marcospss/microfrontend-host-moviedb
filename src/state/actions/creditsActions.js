import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiCallStatusActions";
import {
    CommonProvider
} from '../../services';


const loadCreditsSuccess = (data) => {
    return {
        type: types.CREDITS_MEDIA.LOAD_SUCCESS,
        payload: data
    };
};

const loadCreditsFailure = (data) => {
    return {
        type: types.CREDITS_MEDIA.LOAD_FAILURE,
        payload: data
    };
};

export const loadCredits = (filters) => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return CommonProvider
            .getCredits(filters)
            .then(response => {
                dispatch(loadCreditsSuccess(response.data));
            })
            .catch(response => {
                dispatch(apiCallError(response.error));
                dispatch(loadCreditsFailure(response.error));
            });
    };
};
