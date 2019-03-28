import * as types from "./actionTypes";
import {
    DiscoverProvider
} from '../../services';

export function loadPopular(filters) {
    return function (dispatch) {
        return DiscoverProvider
            .getDiscover(filters)
            .then(response => {
                dispatch({
                    type: types.POPULAR_MEDIAS.LOAD_SUCCESS,
                    payload: response.data
                });
            })
            .catch(response => {
                dispatch({
                    type: types.POPULAR_MEDIAS.LOAD_FAILURE,
                    payload: response.error
                });
            });
    };
}