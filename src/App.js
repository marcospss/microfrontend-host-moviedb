import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import Header from './components/Header';
import Footer from './components/Footer';
import Toast from './components/ToastContainer';
import Routes from './routes';

// REDUX
import store from "./state/configureStore";
import history from "./routes/history";


const App = () => (
  <Provider store={store}>
  <ConnectedRouter history={history}>
    <div id="site-content">
      <Header />
      <main className="main-content">
        <div className="container">
          <Routes />
        </div>
      </main>
      <Footer />
    </div>
    </ConnectedRouter>
    <Toast />
  </Provider>
);

export default App;