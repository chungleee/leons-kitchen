import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/pages/Login";
import AdminDashboard from "./components/pages/AdminDashboard";

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
      <Route
        path="/admin"
        render={() => {
          return <AdminDashboard user={{ name: "admin", role: "staff" }} />;
        }}
      />
    </Router>
  );
}

export default App;
