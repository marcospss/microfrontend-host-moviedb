import * as types from "./../actions/actionTypes";
import initialState from "./initialState";

export default function recommendationsReducer(state = initialState.recommendations, action) {
  switch (action.type) {
    case types.RECOMMENDATIONS_MEDIA.LOAD_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
