import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function topRatedReducer(state = initialState.topRated, action) {
  switch (action.type) {
    case types.TOP_RATED_MEDIAS.LOAD_SUCCESS:
      return action.topRated;
    default:
      return state;
  }
}
