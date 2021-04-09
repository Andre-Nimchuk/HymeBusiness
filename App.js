import React, {useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import SplashScreen from 'react-native-splash-screen';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {ApolloProvider} from '@apollo/client';
import * as eva from '@eva-design/eva';

import './src/i18n';

import AppSyncClient from './src/services/appsync';
import AppNavigator from './src/navigation/AppNavigator';
import AuthProvider from './src/providers/AuthProvider';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <ApolloProvider client={AppSyncClient}>
      <AuthProvider>
        {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <AppNavigator />
        </ApplicationProvider>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
