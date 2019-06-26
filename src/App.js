import React from "react";
import { HashRouter } from "react-router-dom";
import router from "./router";
import Nav from "./Components/Nav";
import styled from "styled-components";

function App() {
  return (
    <HashRouter>
      <Nav />
      <RouteContainer>{router}</RouteContainer>
    </HashRouter>
  );
}

const RouteContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
`;

export default App;
