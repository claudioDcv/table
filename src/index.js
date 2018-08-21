import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Table from "./table/Table.jsx";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <Table data={data} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
