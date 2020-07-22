import React from 'react';
import { Layout } from 'antd';

import { FOOTER_TEXT } from '../constants';

const { Footer } = Layout;

const AppFooter: React.FC = (): JSX.Element => (
	<Footer className="app-footer">{FOOTER_TEXT}</Footer>
);

export default AppFooter;
