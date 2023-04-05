import "bootstrap/dist/css/bootstrap.css";

import React from "react";
// import reactDom from "react-dom"; - для React до 18 версии
//- для React с 18 версии
import * as ReactDOMClient from "react-dom/client";
//=======================

import Counter from "./components/counter";
const App = () => {
  return <Counter />;
};

/* - для React до 18 версии
reactDom.render(<App />, container); 
========================== */

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(<App />);
//======================
