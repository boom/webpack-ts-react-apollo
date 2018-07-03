import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { IntrospectionFragmentMatcher, InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import { App } from './components/App';

//using webpack to require instead of ts
const introspectionQueryResultData = require('../../fragmentTypes.json');

const fragmentMatcher = new IntrospectionFragmentMatcher({ introspectionQueryResultData });

const httpLink = createHttpLink({
  uri: 'https://mpjk0plp9.lp.gql.zone/graphql',
});

const client = new ApolloClient({
  cache: new InMemoryCache({ fragmentMatcher }),
  link: httpLink,
});

const WrappedApp = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);


ReactDOM.render(WrappedApp, document.getElementById('main'));
