import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter, useLocation } from 'react-router';

import { Menu } from 'antd';

import {
	FundOutlined,
	MoneyCollectOutlined,
	UserOutlined,
	UserSwitchOutlined,
	AppstoreOutlined,
} from '@ant-design/icons';

const { Item } = Menu;

/**
 * The menu used to navigation through the application
 *
 * @function
 * @return {Object} the app level menu
 */
const AppSideBar: React.FC = (): JSX.Element => {
	const { pathname } = useLocation();
	const selectedKeys = pathname === '/' ? ['/'] : [pathname];

	const MENU_ITEMS = [
		{
			href: '/',
			icon: <AppstoreOutlined />,
			key: 'Overview',
		},
		{
			href: '/booking',
			icon: <FundOutlined />,
			key: 'Booking',
		},
		{
			href: '/payment',
			icon: <MoneyCollectOutlined />,
			key: 'Payment',
		},
		{
			href: '/tracking',
			icon: <UserSwitchOutlined />,
			key: 'Tracking',
		},
		{
			href: '/users',
			icon: <UserOutlined />,
			key: 'Users',
		},
	];

	return (
		<Menu selectedKeys={selectedKeys} mode="inline" theme="light">
			{MENU_ITEMS.map(item => {
				const { href, icon, key } = item;
				return (
					<Item key={href}>
						<NavLink to={href}>
							{icon}
							<span>{key}</span>
						</NavLink>
					</Item>
				);
			})}
		</Menu>
	);
};

export default withRouter(AppSideBar);
