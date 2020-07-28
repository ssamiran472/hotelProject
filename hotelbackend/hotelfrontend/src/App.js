import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Link, Router } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";

// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import Home, { Navbar } from "./components/home";
import Rooms from "./components/Roomspage";
import Error from "./components/error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/rooms">
            <Rooms />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
