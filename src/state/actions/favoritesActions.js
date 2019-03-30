import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiCallStatusActions";
import {
    LocalStorage
} from '../../services';


const loadFavoritesSuccess = (data) => {
    return {
        type: types.FAVORITES_MEDIAS.LOAD_SUCCESS,
        payload: data
    };
};

const loadFavoritesFailure = (data) => {
    return {
        type: types.FAVORITES_MEDIAS.LOAD_FAILURE,
        payload: data
    };
};

const createFavoriteSuccess = (data) => {
    return {
        type: types.FAVORITES_MEDIAS.CREATE,
        payload: data
    };
};

const removeFavoriteSuccess = (data) => {
    return {
        type: types.FAVORITES_MEDIAS.REMOVE,
        payload: data
    };
};

export const loadFavorites = () => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return LocalStorage.getAll()
            .then(response => {
                dispatch(loadFavoritesSuccess(response));
            })
            .catch(response => {
                dispatch(apiCallError(response.error));
                dispatch(loadFavoritesFailure(response.error));
            });
    };
};

export const saveFavorite = (data) => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return LocalStorage.save(data)
            .then(response => {
                dispatch(createFavoriteSuccess(response));
            })
            .catch(response => {
                dispatch(apiCallError(response.error));
            });
    };
};

export const removeFavorite = (data) => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return LocalStorage.remove(data)
            .then(response => {
                dispatch(removeFavoriteSuccess(response));
            })
            .catch(response => {
                dispatch(apiCallError(response.error));
            });
    };
};

