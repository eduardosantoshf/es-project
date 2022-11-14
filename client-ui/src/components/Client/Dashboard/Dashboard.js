import React, { Component } from 'react';
import './Dashboard.css';
import Sidebar from './nestedComponents/Sidebar';
import Topbar from './nestedComponents/Topbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Cameras from './pages/UsersManagement/Cameras/Cameras';
import Alarms from './pages/UsersManagement/Alarms/Alarms';
import InitialDashboard from './pages/UsersManagement/InitialDashboard/InitialDashboard';
import ExtensionInstall from './pages/UsersManagement/ExtensionInstall/ExtensionInstall';
import Intrusions from './pages/UsersManagement/Intrusions/Intrusions';

function Dashboard() {
  return (
    <Router>
      <div className="interface">
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <div className="middle">
                <InitialDashboard />
              </div>
            </Route>
            <Route path="/cameras">
              <div className="middle">
                <Cameras />
              </div>
            </Route>
            <Route path="/alarms">
              <div className="middle">
                <Alarms />
              </div>
            </Route>
            <Route path="/intrusions">
              <div className="middle">
                <Intrusions />
              </div>
            </Route>
            <Route path="/extInstallation">
              <div className="middle">
                <ExtensionInstall />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Dashboard;
