import React from "react"
import * as ReactDOMClient from "react-dom/client"
import App from "./App"
import "./css/main.css"


const app = ReactDOMClient.createRoot(document.getElementById("app"));

function info_time() {
    app.render(<App />);
}
setInterval(info_time, 1000);

