import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/pages/Login";
import AdminDashboard from "./components/pages/AdminDashboard";
import OrderMenu from "./components/pages/OrderMenu";
import ErrorPage from "./components/pages/ErrorPage";

function App() {
  const [user, setUser] = useState({ name: "leon", role: "staff" });
  return (
    <Router>
      <Switch>
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
            return <AdminDashboard user={user} />;
          }}
        />
        <Route
          path="/order-menu"
          render={() => {
            return <OrderMenu user={user} />;
          }}
        />

        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
