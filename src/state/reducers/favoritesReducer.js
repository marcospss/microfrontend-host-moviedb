import * as types from "./../actions/actionTypes";
import initialState from "./initialState";

export default function favoritesReducer(state = initialState.favorites, action) {
    const { type, payload } = action;
    switch (type) {
        case types.FAVORITES_MEDIAS.LOAD_SUCCESS:
            return payload;

        case types.FAVORITES_MEDIAS.SAVE:
            return payload;

        case types.FAVORITES_MEDIAS.REMOVE:
            return state.filter(favorites => favorites.id !== payload.id);
        
        default:
            return state;
    }
}