import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory
} from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./components/pages/Login";
import AdminDashboard from "./components/pages/AdminDashboard";
import OrderMenu from "./components/pages/OrderMenu";
import ErrorPage from "./components/pages/ErrorPage";

function App() {
  const { isAuthenticated, user } = useSelector(state => {
    return state.userState;
  });

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {!isAuthenticated ? <Redirect to="/login" /> : null}
        </Route>

        <Route
          path="/login"
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

        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
