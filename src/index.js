import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

import Navigation from "./components/navigation/navigation";
import Output from "./components/output/output";

function App() {
  return (
    <div className="App">
      <Navigation
        project="Planet Earth"
        entries={{
          area: { text: "California" },
          location: { text: "Brentwood" }
        }}
      />
      <Output />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
