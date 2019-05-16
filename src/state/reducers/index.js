import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "./../../routes/history";
import apiCallsInProgress from './apiCallStatusReducer';
import popular from "./popularReducer";
import topRated from './topRatedReducer';
import details from './detailsReducer';
import credits from './creditsReducer';
import recommendations from './recommendationsReducer';
import favorites from "./favoritesReducer";
// import search from "./searchReducer";

const rootReducer = combineReducers({
    router: connectRouter(history),
    apiCallsInProgress,
    popular,
    topRated,
    details,
    credits,
    recommendations,
    favorites
});

export default rootReducer;
