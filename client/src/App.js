import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/pages/Login";

function App() {
  return (
    <Router>
      <Route
        exact
        path="/"
        render={() => {
          return <Login />;
        }}
      />
    </Router>
  );
}

export default App;
