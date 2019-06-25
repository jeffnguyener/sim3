import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import router from "./router";
import Nav from './Components/Nav'
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <HashRouter>
      <Nav />
      <Dashboard />
      {router}
    </HashRouter>
  );
}

export default App;
