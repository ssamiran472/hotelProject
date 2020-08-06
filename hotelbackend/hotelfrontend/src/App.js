import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import Home, { Navbar } from "./components/home";
import Rooms from "./components/Roomspage";
import Error from "./components/error";
import Description from "./components/description";

library.add(faStroopwafel);

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/rooms/:slug" component={Description} />

          <Route>
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
