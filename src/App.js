import React, { Suspense } from "react";
import { Route, Switch } from "wouter";
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./containers/Home";
import CelebrityPage from "./containers/Celebrity";

function App() {
  return (
    <div className="App">
        <Header />
        <Suspense fallback={null}>
          <Switch>
            <Route component={HomePage} path="/" />
            <Route component={CelebrityPage} path="/personajes" />
          </Switch>
        </Suspense>
        <Footer />
    </div>
  );
}

export default App;
