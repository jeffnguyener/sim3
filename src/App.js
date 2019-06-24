import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import router from "./router";
// import Nav from './Components/Nav'

function App() {
  return (
    <HashRouter>
      {/* <Nav /> */}
      {router}
    </HashRouter>
  );
}

export default App;
