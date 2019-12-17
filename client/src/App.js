import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import { handleCurrentUser } from "./redux/actions/authActions";
import Login from "./components/pages/Login";
import AdminDashboard from "./components/pages/admin/AdminDashboard";
import OrderMenu from "./components/pages/staff/OrderMenu";

function App() {
  const { isAuthenticated, user } = useSelector(state => {
    console.log("state", state);
    return state.authState;
  });
  const dispatch = useDispatch();

  const checkAuthToken = async () => {
    // if token exists
    if (localStorage && localStorage.getItem(`leon's kitchen jwtToken`)) {
      const token = localStorage.getItem(`leon's kitchen jwtToken`);
      // decode
      const decoded = jwtDecode(token);
      // user login
      dispatch(handleCurrentUser(decoded));
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
        path="/staff"
        render={() => {
          return <OrderMenu user={user} />;
        }}
      />
    </Router>
  );
}

export default App;
