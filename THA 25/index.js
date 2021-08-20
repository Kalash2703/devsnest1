import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Game from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Game />
  </StrictMode>,
  rootElement
);