import * as types from "./actionTypes";
import {
    beginApiCall,
    apiCallError
} from "./apiCallStatusActions";
import {
    DiscoverProvider
} from '../../services';


const loadPopularSuccess = (data) => {
    return {
        type: types.POPULAR_MEDIAS.LOAD_SUCCESS,
        payload: data
    };
};

const loadPopularFailure = (data) => {
    return {
        type: types.POPULAR_MEDIAS.LOAD_FAILURE,
        payload: data
    };
};

export const loadPopular = (filters) => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return DiscoverProvider
            .getDiscover(filters)
            .then(response => {
                dispatch(loadPopularSuccess(response.data));
            })
            .catch(response => {
                dispatch(apiCallError(response.error));
                dispatch(loadPopularFailure(response.error));
            });
    };
};