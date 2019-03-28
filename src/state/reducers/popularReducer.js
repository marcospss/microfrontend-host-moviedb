import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function popularReducer(state = initialState.popular, action) {
  switch (action.type) {
    case types.POPULAR_MEDIAS.LOAD_SUCCESS:
      return action;
    default:
      return state;
  }
}
