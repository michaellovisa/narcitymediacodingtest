import * as React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { App } from './app';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
    	<div>
	        <Switch>
	          <Route exact path="/" component={App} />
	        </Switch>
        </div>
    </BrowserRouter>
  );
}