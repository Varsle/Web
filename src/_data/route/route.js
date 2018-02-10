import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Police} from "../../containers/Police/Police";
import {Fire} from "../../containers/Fire/Fire";
import {Medic} from "../../containers/Medic/Medic";
import {Region} from "../../containers/Region/Region";
import {NotFound} from "../../components/NotFound/NotFound";
import {HomePage} from "../../containers/HomePage/HomePage";


const AppRoute = () =>
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/medic" component={Medic}/>
        <Route path="/police" component={Police}/>
        <Route path="/fire" component={Fire}/>
        <Route path="/region" component={Region}/>
        <Route component={NotFound}/>
    </Switch>

export {AppRoute}