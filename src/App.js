import React from "react";
import "./default.scss";
import { Route, Switch } from "react-router-dom";
import { Router } from "react-router-dom";
//layouts
import MainLayout from "./layouts/MainLayout";
import HomepageLayout from "./layouts/HomepageLayout";
 

//pages:
import Registration from "./pages/Registration";
import HomePage from "./pages/homePage";
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayout>
              <HomePage />
            </HomepageLayout>
          )}
        />
        <Route
          exact
          path="/registration"
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
