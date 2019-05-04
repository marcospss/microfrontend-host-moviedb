import * as types from "./../actions/actionTypes";
import initialState from "./initialState";

export default function topRatedReducer(state = initialState.topRated, action) {
  const { type, payload } = action;
  switch (type) {
    case types.TOP_RATED_MEDIAS.LOAD_SUCCESS:
      return payload;
    default:
      return state;
  }
}
