import * as types from "./actionTypes";
import {
    beginApiCall,
    apiCallError
} from "./apiCallStatusActions";
import {
    CommonProvider
} from '../../services';


const loadDetailsSuccess = (data) => {
    return {
        type: types.DETAILS_MEDIA.LOAD_SUCCESS,
        payload: data
    };
};

const loadDetailsFailure = (data) => {
    return {
        type: types.DETAILS_MEDIA.LOAD_FAILURE,
        payload: data
    };
};

export const loadDetails = (filters) => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return CommonProvider
            .getDetails(filters)
            .then(response => {
                dispatch(loadDetailsSuccess(response.data));
            })
            .catch(response => {
                dispatch(apiCallError(response.error));
                dispatch(loadDetailsFailure(response.error));
            });
    };
};