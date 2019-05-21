import React from "react";

import "./styles/styles.scss";

import Header from "./components/header/Header";
import WelcomeGateway from "./components/WelcomeGateway/WelcomeGateway";

import { StateProvider } from "./service";

const initialState = {
  location: null,
  results: { count: 0, data: [] }
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
        results: {
          count: action.results.count,
          data: [...state.results.data, ...action.results.data]
        }
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
