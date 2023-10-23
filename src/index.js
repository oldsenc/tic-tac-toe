// This file links the HTML file and the react code.

import React from "react";
import ReactDom from "react-dom";
import "./css/index.css";
import App from "./App";

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);