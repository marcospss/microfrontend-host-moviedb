import React from 'react';
import ReactDOM from 'react-dom';

import "./styles.scss";
import App from './App';

window.renderThemovieDB = (containerId, history) => {
    ReactDOM.render(
        <App history={history} />,
      document.getElementById(containerId)
    );
  };
  
  window.unmountThemovieDB = (containerId) => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
  };
  
  if (!document.getElementById("ThemovieDB-container")) {
    ReactDOM.render(
        <App />,
      document.getElementById("the-movie-db-container")
    );
  }