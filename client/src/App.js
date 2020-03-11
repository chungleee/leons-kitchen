import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import {
  handleCurrentUser,
  handleUserLogout
} from "./redux/actions/authActions";
import Login from "./components/pages/Login";
import AdminDashboard from "./components/pages/admin";
import POS from "./components/pages/pos/";
import Kitchen from "./components/pages/kitchen";

function App() {
  const { isAuthenticated, user } = useSelector(state => {
    return state.authState;
  });
  const dispatch = useDispatch();

  const checkAuthToken = async () => {
    // if token exists
    if (localStorage && localStorage.getItem(`leon's kitchen jwtToken`)) {
      const token = localStorage.getItem(`leon's kitchen jwtToken`);
      // decode
      const decoded = jwtDecode(token);

      // check if token expired
      if (Date.now() >= decoded.exp * 1000) {
        dispatch(handleUserLogout());
      } else {
        // user login
        dispatch(handleCurrentUser(decoded));
      }
    }
  };

  useEffect(() => {
    checkAuthToken();
  }, []);

  return (
    <Router>
      <Route path="/">
        {isAuthenticated ? (
          <Redirect to={`/${user.role}`} />
        ) : (
          <Redirect to="/login" />
        )}
      </Route>

      <Route
        path="/login"
        render={props => {
          return <Login {...props} />;
        }}
      />

      <Route
        path="/admin"
        render={props => {
          return <AdminDashboard {...props} user={user} />;
        }}
      />

      <Route
        path="/staff"
        render={props => {
          return <POS user={user} {...props} />;
        }}
      />

      <Route
        path="/kitchen"
        render={props => {
          return <Kitchen user={user} {...props} />;
        }}
      />
    </Router>
  );
}

export default App;
