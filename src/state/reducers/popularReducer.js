import * as types from "./../actions/actionTypes";
import initialState from "./initialState";

export default function popularReducer(state = initialState.popular, action) {
  const { type, payload } = action;
  switch (type) {
    case types.POPULAR_MEDIAS.LOAD_SUCCESS:
      return Object.assign({}, state, payload);
    default:
      return state;
  }
}
