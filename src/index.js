import React from "react";
import ReactDOM from "react-dom";
import Increment from "./reducer.js"
import App from "./App";
import {createStore} from "redux";
import {Provider} from "react-redux";

let store = createStore(Increment);

ReactDOM.render(
<Provider store = {store}><App /></Provider>, document.getElementById("root"));
