import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import {Login} from '../src/components/Login';
import {Home} from '../src/components/Home';
import {Signup} from '../src/components/Signup';
import { Navbar } from "../src/components/Navbar";
import {AddResource} from '../src/components/Addresource';
import {Footer} from '../src/components/Footer';

export default function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/signup" component={Signup}></Route>
      <Route exact path="/addresource" component={AddResource}></Route>
      <Footer/>
    </Router>
    </div>
  );
}
