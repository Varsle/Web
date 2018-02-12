import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {NotFound} from "../../components/NotFound/NotFound";
import {HomePage} from "../../containers/HomePage/HomePage";
import {Overview} from "../../containers/Overview/Overview";
import {categories} from "../constants";


const AppRoute = () =>
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/medic" component={ () =><Overview name={categories.medic}/>}/>
        <Route path="/police" component={()=><Overview name={categories.police}/>}/>
        <Route path="/fire" component={()=><Overview name={categories.fire}/>}/>
        <Route path="/region" component={()=><Overview name={categories.region}/>}/>
        <Route component={NotFound}/>
    </Switch>

export {AppRoute}