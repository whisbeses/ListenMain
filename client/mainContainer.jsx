import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import MainPage from "./listenClient/mainPage.jsx";

import "./style.module.css";

ReactDOM.render(
  <BrowserRouter>
    <MainPage />
  </BrowserRouter>, 
  document.getElementById("hook")
);