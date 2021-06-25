import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "../pages/Home";
import CreateEvent from "../pages/CreateEvent";
import PreviewEvent from "../pages/PreviewEvent";
import PublishedEvent from "../pages/PublishedEvent";
import ViewEvent from "../pages/ViewEvent";
import EventPassword from "../pages/EventPassword";

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/CreateEvent' component={CreateEvent} />
            <Route path='/PreviewEvent' component={PreviewEvent} />
            <Route path='/PublishedEvent' component={PublishedEvent} />
            <Route path='/ViewEvent' component={ViewEvent} />
            <Route path='/EventPassword' component={EventPassword} />

            <Route component={Home} />
        </ Switch>
    );
}