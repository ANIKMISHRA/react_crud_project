// npm packages
import React from "react";
import { HashRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";

// component
import App from "./App";
import reducers from "./Redux/reducers";

const store = legacy_createStore(reducers);

ReactDOM.render(
  <Provider store={store} >
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
