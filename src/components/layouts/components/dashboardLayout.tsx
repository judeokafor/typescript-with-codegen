import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import { withRouter, useHistory } from 'react-router';

import SideBar from './sidebar';
import AppHeader from './header';
import AppFooter from './footer';

import logo from '../../../static/logo.png';
import { PATHS } from '../constants';

import Overview from '../../overview';

const { overview } = Overview.components;

const { OVERVIEW } = PATHS;

const { Content, Sider } = Layout;

const DashboardLayout: React.FC = (): JSX.Element => {
	const history = useHistory();
	return (
		<Layout className="app-container">
			<Sider collapsible className="app-sider">
				<div className="logo-container" onClick={() => history.push(OVERVIEW)}>
					<img alt="company-logo" className="logo" src={logo} />
				</div>
				<SideBar />
			</Sider>
			<Layout>
				<AppHeader />
				<Content className="app-content">
					<Switch>
						<Route path={OVERVIEW} component={overview} />
					</Switch>
				</Content>
				<AppFooter />
			</Layout>
		</Layout>
	);
};

export default withRouter(DashboardLayout);
