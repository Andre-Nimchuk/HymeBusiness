import Amplify from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';
import {setContext} from '@apollo/client/link/context';
import {onError} from '@apollo/client/link/error';
import {RetryLink} from '@apollo/client/link/retry';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloLink,
} from '@apollo/client';

import config from '../config';

Amplify.configure({
  Auth: {
    // storage: HymeStorage,
    mandatorySignIn: false,
    region: config.cognito.region,
    userPoolId: config.cognito.userPoolId,
    identityPoolId: config.cognito.identityPoolId,
    userPoolWebClientId: config.cognito.webClientId,
    authenticationFlowType: config.cognito.authenticationFlowType,
  },
  AWSS3: {
    bucket: 'hyme-photos-dev',
    region: 'eu-west-1',
    identityPoolId: config.cognito.identityPoolId,
  },
});

const httpLink = createHttpLink({
  uri: config.appsync.graphqlEndpoint,
});

const authLink = setContext(async () => {
  const token = (await Auth.currentSession()).getIdToken().getJwtToken();
  console.log(token, 'tokentokentokentoken');
  return {
    headers: {Authorization: token},
  };
});

const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: Infinity,
    jitter: true,
  },
  attempts: {
    max: 5,
    retryIf: (error, _operation) => !!error,
  },
});

const onErrorLink = onError(
  ({graphQLErrors, networkError, operation, forward}) => {
    if (graphQLErrors)
      graphQLErrors.map(({message, locations, path}) => {
        console.error({message, locations, path});
        return forward(operation);
      });

    if (networkError) {
      console.error(networkError);
    }
  },
);

const client = new ApolloClient({
  link: ApolloLink.from([authLink.concat(httpLink), retryLink, onErrorLink]),
  cache: new InMemoryCache(),
});

export default client;
