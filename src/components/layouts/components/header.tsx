import React from 'react';
import { Layout, PageHeader, Button, Typography } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

import { LOG_OUT, ADMIN_NAME } from '../constants';

const { Header } = Layout;

/**
 * The header for the application.
 *
 * @function
 * @return {Object} the app level header
 */
const AppHeader: React.FC = (): JSX.Element => (
	<Header className="app-header">
		<PageHeader
			title="Dashboard"
			className="w-100"
			extra={
				<>
					<Typography.Text>{ADMIN_NAME}</Typography.Text>
					<Button type="link" ghost danger icon={<LogoutOutlined />} className="ml-4">
						{LOG_OUT}
					</Button>
				</>
			}
		/>
	</Header>
);
export default AppHeader;
