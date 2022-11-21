import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import tests from '../constants';

import AllTests from '../Pages/AllTests';
import References from '../Pages/References';
import Team from '../Pages/Team';

const DashboardRoutes = () =>{
    return (
        <Switch>
            <Route path="/dashboard" component={AllTests} exact/>
            <Route path="/dashboard/tests" component={AllTests}/>
            <Route path="/dashboard/team" component={Team} exact/>
            <Route path="/dashboard/references" component={References} exact/>
        </Switch>
    )
}

export default DashboardRoutes
