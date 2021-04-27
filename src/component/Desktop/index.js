import "../Desktop/App.scss";
import React from "react";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  
  
} from "react-router-dom";

import Frontpage from "./Frontpage";
import Navigation from "../../component/Navigation";

import Darkblue from "./Darkblue";
import Blue from "./Blue";
import Red from "./Red";

function DesktopView() {

  return (
   
    <Router>
      
      <Navigation />
    
    <section>
      <Switch>  


        <Route exact path = "/" component = {Frontpage} />
        <Route exact path = "/back" component = {Frontpage} />
        <Route exact path = "/Darkblue" component = {Darkblue} />
        <Route exact path = "/Blue" component = {Blue} />
        <Route exact path = "/Red" component = {Red} />
        
      
      </Switch>
    </section>
      
    </Router>

  );
} // END APP

export default DesktopView;