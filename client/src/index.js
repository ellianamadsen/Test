import './index.css';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Auth0ProviderWithHistory from "./react-auth0-spa";
// import config from "./auth_config.json";
// import history from "./utils/history";

// A function that routes the user to the right place
// after login
// const onRedirectCallback = appState => {
//   history.push(
//     appState && appState.targetUrl
//       ? appState.targetUrl
//       : window.location.pathname
//   );
// };

ReactDOM.render(
  <Router>
  <Auth0ProviderWithHistory>
    <App />
  </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();