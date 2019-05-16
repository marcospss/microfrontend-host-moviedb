import * as types from "./actionTypes";
import {
    beginApiCall,
    apiCallError
} from "./apiCallStatusActions";
import {
    CommonProvider
} from '../../services';

/**
 * Load Top Rated Medias
 * @param {*} data 
 */

const loadTopRatedSuccess = (data) => {
    return {
        type: types.TOP_RATED_MEDIAS.LOAD_SUCCESS,
        payload: data
    };
};

const loadTopRatedFailure = (data) => {
    return {
        type: types.TOP_RATED_MEDIAS.LOAD_FAILURE,
        payload: data
    };
};

export const loadTopRated = (filters) => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return CommonProvider
            .getTopRated(filters)
            .then(response => {
                dispatch(loadTopRatedSuccess(response.data));
            })
            .catch(response => {
                dispatch(apiCallError(response.error));
                dispatch(loadTopRatedFailure(response.error));
            });
    };
};