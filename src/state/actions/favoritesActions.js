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

const saveFavoriteSuccess = (data) => {
    return {
        type: types.FAVORITES_MEDIAS.SAVE,
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
        return LocalStorage.save(data)
            .then(response => {
                console.log(response);
                dispatch(saveFavoriteSuccess(response));
            })
            .catch(response => {
                console.error(response);
                throw response;
            });
    };
};

export const removeFavorite = (data) => {
    return (dispatch) => {
        return LocalStorage.remove(data)
            .then(response => {
                console.log(response);
                dispatch(removeFavoriteSuccess(response));
            })
            .catch(response => {
                console.error(response);
                throw response;
            });
    };
};

