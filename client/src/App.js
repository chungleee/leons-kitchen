import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import {
  handleCurrentUser,
  handleUserLogout
} from "./redux/actions/authActions";
import Login from "./components/pages/Login";
import AdminDashboard from "./components/pages/admin/AdminDashboard";
import OrderMenu from "./components/pages/staff/OrderMenu";
import Staff from "./components/pages/staff/Staff";

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
      console.log("decoded", decoded);
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
          return <Staff user={user} {...props} />;
        }}
      />
    </Router>
  );
}

export default App;
