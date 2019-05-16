import * as types from "./../actions/actionTypes";
import initialState from "./initialState";

export default function creditsReducer(state = initialState.credits, action) {
  const { type, payload } = action;
  switch (type) {
    case types.CREDITS_MEDIA.LOAD_SUCCESS:
      return Object.assign({}, state, payload);
    default:
      return state;
  }
}
