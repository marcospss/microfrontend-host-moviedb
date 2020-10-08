import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import Toast from "./components/ToastContainer";
import Routes from "./routes";

// REDUX
import store from "./state/configureStore";
import history from "./routes/history";

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
    <Toast />
  </Provider>
);

export default App;
