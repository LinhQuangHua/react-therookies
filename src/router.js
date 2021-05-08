import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './page/home';
import User from './page/user/user';
import Asset from './page/asset/asset';
import Assignment from './page/assignment/assignment';
import Request from './page/request/request';
import Report from './page/report/report';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/user" component={User} />
      <Route path="/asset" component={Asset} />
      <Route path="/assignment" component={Assignment} />
      <Route path="/request" component={Request} />
      <Route path="/report" component={Report} />
    </Switch>
  );
}
