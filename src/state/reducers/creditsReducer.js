import * as types from "./../actions/actionTypes";
import initialState from "./initialState";

export default function creditsReducer(state = initialState.credits, action) {
  switch (action.type) {
    case types.CREDITS_MEDIA.LOAD_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
