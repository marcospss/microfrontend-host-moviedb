import * as types from "./../actions/actionTypes";
import initialState from "./initialState";

export default function favoritesReducer(state = initialState.favorites, action) {
    switch (action.type) {
        case types.FAVORITES_MEDIAS.LOAD_SUCCESS:
            return action.payload;

        case types.FAVORITES_MEDIAS.CREATE:
            return [...state, { ...action.payload }];

        case types.FAVORITES_MEDIAS.REMOVE:
            return state.filter(favorites => favorites.id !== action.payload.id);
        
        default:
            return state;
    }
}