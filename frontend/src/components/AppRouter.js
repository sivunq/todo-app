import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import MainView from './view/mainView';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter basename="/todo">
        <Switch>
          <Route component={MainView} />
        </Switch>
      </BrowserRouter>
    );
  }
}