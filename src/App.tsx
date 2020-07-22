import React from 'react';

import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import router from './router';

const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: process.env.REACT_APP_SCHEMA_LINK,
});

const { Router } = router.components;
function App(): JSX.Element {
	return (
		<ApolloProvider client={client}>
			<Router />
		</ApolloProvider>
	);
}

export default App;
