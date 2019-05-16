import * as types from "./../actions/actionTypes";
import initialState from "./initialState";

export default function recommendationsReducer(state = initialState.recommendations, action) {
  const { type, payload } = action;
  switch (type) {
    case types.RECOMMENDATIONS_MEDIA.LOAD_SUCCESS:
      return Object.assign({}, state, payload);
    default:
      return state;
  }
}
