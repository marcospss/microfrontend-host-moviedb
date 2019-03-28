import { combineReducers } from "redux";
import popular from "./popularReducer";
import topRated from './topRatedReducer';
// import search from "./searchReducer";
// import favorites from "./favoritesReducer";

const rootReducer = combineReducers({
    popular,
    topRated
});

export default rootReducer;
