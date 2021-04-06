import React from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
/* import SplashScreen from 'react-native-splash-screen'; */
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

import './src/i18n';

import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  /* useEffect(() => {
    SplashScreen.hide();
  }, []); */
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <AppNavigator />
      </ApplicationProvider>
    </>
  );
};

export default App;
