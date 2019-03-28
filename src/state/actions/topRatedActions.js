import * as types from "./actionTypes";
import {
    CommonProvider
} from '../../services';

/**
 * Load Top Rated Medias
 * @param {*} data 
 */
function loadTopRatedSuccess(data) {
    return {
        type: types.TOP_RATED_MEDIAS.LOAD_SUCCESS,
        data
    };
}

export function topRated(filters) {
    return function (dispatch) {
        return CommonProvider
            .getTopRated(filters)
            .then(data => {
                dispatch(loadTopRatedSuccess(data));
            })
            .catch(error => {
                throw error;
            });
    };
}