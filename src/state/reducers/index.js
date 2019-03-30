import { combineReducers } from "redux";
import apiCallsInProgress from './apiCallStatusReducer';
import popular from "./popularReducer";
import topRated from './topRatedReducer';
import details from './detailsReducer';
import credits from './creditsReducer';
import recommendations from './recommendationsReducer';
import favorites from "./favoritesReducer";
// import search from "./searchReducer";

const rootReducer = combineReducers({
    apiCallsInProgress,
    popular,
    topRated,
    details,
    credits,
    recommendations,
    favorites
});

export default rootReducer;
