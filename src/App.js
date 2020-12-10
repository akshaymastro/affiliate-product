import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.css";

import Shop from "./components/Shop";
import Work from "./components/Work";
import Home from "./components/Home";

import "./statics/scss/index.sass";

import Footer from "./components/Footer";
import Sidenav from "./components/Sidenav";
import Advertisement from "./components/Advertisement";
import AdminSetting from "./components/AdminSetting";
import Subscription from "./components/Subscription";
import Network from "./components/Network";
import User from "./components/User";
import Search from "./components/Search";
import Linktool from "./components/Linktool";
import Widget from "./components/Widget";
import Message from "./components/Message";
import Mailsetting from "./components/Mailsetting";
import Order from "./components/Order";
import Opportunity from "./components/Opportunity";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/subscription" component={Subscription} />

        <Route exact path="/setting" component={AdminSetting} />
        <Route exact path="/network" component={Network} />
        <Route exact path="/user" component={User} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/mailsetting" component={Mailsetting} />
        <Route exact path="/linktool" component={Linktool} />
        <Route exact path="/widget" component={Widget} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/opportunity" component={Opportunity} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/message" component={Message} />
        <Route exact path="/sidenav" component={Sidenav} />
        <Route exact path="/advertise" component={Advertisement} />
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/work" component={Work} />

      </Switch>
    </Router>
  );
}

export default App;
