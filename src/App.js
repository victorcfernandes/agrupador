import React from "react";

import Header from "./components/header/Header";

import HomePage from "./pages/HomePage";
import "./styles/styles.scss";

const App = () => (
  <div className="App">
    <Header />
    <HomePage />
  </div>
);
export default App;
