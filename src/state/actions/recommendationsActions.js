import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiCallStatusActions";
import {
    CommonProvider
} from '../../services';


const loadRecommendationsSuccess = (data) => {
    return {
        type: types.RECOMMENDATIONS_MEDIA.LOAD_SUCCESS,
        payload: data
    };
};

const loadRecommendationsFailure = (data) => {
    return {
        type: types.RECOMMENDATIONS_MEDIA.LOAD_FAILURE,
        payload: data
    };
};

export const loadRecommendations = (filters) => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return CommonProvider
            .getRecommendations(filters)
            .then(response => {
                dispatch(loadRecommendationsSuccess(response.data));
            })
            .catch(response => {
                dispatch(apiCallError(response.error));
                dispatch(loadRecommendationsFailure(response.error));
            });
    };
};
