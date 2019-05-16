import * as types from "./../actions/actionTypes";
import initialState from "./initialState";

export default function detailsReducer(state = initialState.details, action) {
  const { type, payload } = action;
  switch (type) {
    case types.DETAILS_MEDIA.LOAD_SUCCESS:
      return Object.assign({}, state, payload);
    default:
      return state;
  }
}
