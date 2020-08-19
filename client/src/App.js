import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

import NavBar from "./components/NavBar";
import { useAuth0 } from "@auth0/auth0-react";

import { Route, Switch } from "react-router-dom";
import { Profile, Main, PrivateRoute } from './components';
import history from "./utils/history";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div className="App">
      {/* Don't forget to include the history module */}
        <header>
          <NavBar />
        </header>
        <Switch>
          <PrivateRoute path="/" component={Main} />
          <Route path="/profile" component={Profile} />
        </Switch>
    </div>
  );
}

export default App;
