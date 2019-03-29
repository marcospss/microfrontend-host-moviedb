import * as types from "./../actions/actionTypes";
import initialState from "./initialState";

export default function detailsReducer(state = initialState.details, action) {
  switch (action.type) {
    case types.DETAILS_MEDIA.LOAD_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
