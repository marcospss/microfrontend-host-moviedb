import { combineReducers } from "redux";
import apiCallsInProgress from './apiCallStatusReducer';
import popular from "./popularReducer";
import topRated from './topRatedReducer';
import details from './detailsReducer';
import credits from './creditsReducer';
import recommendations from './recommendationsReducer';
// import search from "./searchReducer";
// import favorites from "./favoritesReducer";

const rootReducer = combineReducers({
    apiCallsInProgress,
    popular,
    topRated,
    details,
    credits,
    recommendations
});

export default rootReducer;
