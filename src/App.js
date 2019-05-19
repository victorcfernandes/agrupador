import React from "react";

import "./styles/styles.scss";

import Header from "./components/header/Header";
import WelcomeGateway from "./components/WelcomeGateway/WelcomeGateway";

import { StateProvider } from "./service";

const initialState = {
  location: null,
  results: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_LOCATION":
      return {
        ...state,
        location: action.location
      };

    case "UPDATE_RESULTS":
      return {
        ...state,
        results: action.data
      };

    default:
      return state;
  }
};

const App = () => (
  <div className="App">
    <Header />
    <StateProvider initialState={initialState} reducer={reducer}>
      <WelcomeGateway />
    </StateProvider>
  </div>
);

export default App;
