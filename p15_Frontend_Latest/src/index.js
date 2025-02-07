import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import Store from "../src/Components/Store";
import Store from "./Components/Redux/Store";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import "./CSS/global.css";
=======
>>>>>>> 15f1280bebeebd8753eef92c627eaee6a649f1be

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
