import * as types from "./actionTypes";
import {
    DiscoverProvider
} from '../../services';

/**
 * Load Popular Medias
 * @param {*} data 
 */
function loadPopularSuccess(data) {
    return {
        type: types.POPULAR_MEDIAS.LOAD_SUCCESS,
        data
    };
}

export function loadPopular(filters) {
    return function (dispatch) {
        return DiscoverProvider
            .getDiscover(filters)
            .then(response => {
                dispatch(loadPopularSuccess(response));
            })
            .catch(error => {
                throw error;
            });
    };
}