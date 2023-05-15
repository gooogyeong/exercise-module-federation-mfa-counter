import React from "react";
import ReactDOM from "react-dom";
import { Counter } from './components/Counter';
import "./index.css";

const App = () => (
  <Counter />
  // <div className="container">
  //   <div>Name: mfa-counter</div>
  //   <div>Framework: react</div>
  //   <div>Language: JavaScript</div>
  //   <div>CSS: Empty CSS</div>
  // </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
