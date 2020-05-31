import React from "react";
import ReactDom from "react-dom";
import Router from "./router";
import "./default.scss";

import { StateProvider } from "./components/stateManagemnt/store";

ReactDom.render(
  <StateProvider>
    <Router />
  </StateProvider>,
  document.getElementById("root")
);
