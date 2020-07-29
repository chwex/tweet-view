import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TweetView from "./TweetView";
import LaunchesPage from "./launches/LaunchesPage";
import LaunchDetail from "./launches/LaunchDetail";
import RocketDetail from "./launches/RocketDetail";

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/tweet-view" component={TweetView} />
        <Route path="/launches" component={LaunchesPage} />
        <Route path="/launch/:slug" component={LaunchDetail} /> 
        <Route path="/rocket/:slug" component={RocketDetail} /> 
        <Redirect from="/about-page" to="about" />
      </Switch>
    </div>
  );
}

export default App;
