import React from "react";
import { Router } from "@reach/router";

import "./styles/styles.scss";

import Header from "./components/header/Header";

import HomePage from "./pages/HomePage";
import AddGroupPage from "./pages/AddGroupPage";

import { StateProvider } from "./service";

const initialState = {
  location: null
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
      <Router>
        <HomePage path="/" />
        <AddGroupPage path="/adicionar" />
      </Router>
    </StateProvider>
  </div>
);

export default App;
