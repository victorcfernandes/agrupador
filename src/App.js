import React from "react";

import "./styles/styles.scss";

import Header from "./components/header/Header";

import HomePage from "./pages/HomePage";

import { StateProvider } from "./service";

const initialState = {
  location: { lat: null, lng: null }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_LOCATION":
      return {
        ...state,
        location: action.location
      };

    default:
      return state;
  }
};

const App = () => (
  <div className="App">
    <Header />
    <StateProvider initialState={initialState} reducer={reducer}>
      <HomePage />
    </StateProvider>
  </div>
);

export default App;
