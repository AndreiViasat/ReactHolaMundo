import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import PrimerComponente from "./PrimerComponente";
import CounterApp from "./CounterApp";

//const saludo = <h1> Hola Soy Andres</h1>
const divApp = document.querySelector('#app')

ReactDOM.render(<CounterApp value={123} />, divApp)

//ReactDOM.render(<GifExpertApp />, document.getElementById("app"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
