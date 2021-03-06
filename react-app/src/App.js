import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import User from "./components/User";
import { authenticate } from "./services/auth";
import { useDispatch } from "react-redux";
import { setUser } from "./store/session";
import HomePage from "./components/HomePage";
import DashBoard from "./components/DashBoard";
import GroupBoard from "./components/GroupBoard";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
        dispatch(setUser(user))
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar setAuthenticated={setAuthenticated} />
      <Switch>
        <ProtectedRoute path="/dashboard" exact={true} authenticated={authenticated}>
          <DashBoard />
        </ProtectedRoute>
        <ProtectedRoute path="/dashboard/group/:groupId" exact={true} authenticated={authenticated}>
          <GroupBoard />
        </ProtectedRoute>
        <Route path="/" exact={true} authenticated={authenticated}>
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
