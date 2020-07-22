import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import layouts from '../../components/layouts';

// import { PATHS } from '../constants';

// const { SIGN_IN } = PATHS;
const { DashboardLayout } = layouts.components;

// const allowedPaths = [];

const AppRouter = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={DashboardLayout} strict />
		</Switch>
	</Router>
);
export default AppRouter;
