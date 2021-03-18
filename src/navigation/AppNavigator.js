import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainTabNavigator from './MainTabNavigator';
import HymeDetailsScreen from '../scenes/tabs/hyme/HymeDetailsScreen';

import {
  SignInScreen,
  PhoneVerifyCodeScreen,
  NameScreen,
} from '../scenes/onboarding';

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator initialRouteName="Main" screenOptions={{headerShown: false}}>
    <Stack.Screen name="Main" component={MainTabNavigator} />
    <Stack.Screen name="HymeDetails" component={HymeDetailsScreen} />
  </Stack.Navigator>
);

const OnboardingStack = () => (
  <Stack.Navigator
    initialRouteName="SignIn"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="PhoneVerifyCode" component={PhoneVerifyCodeScreen} />
    <Stack.Screen name="Name" component={NameScreen} />
  </Stack.Navigator>
);

export default function AppNavigator() {
  /* const {authenticateUser, state} = useAuth();
  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        await authenticateUser();
      } catch (e) {
        console.log(e);
      }
    };

    bootstrapAsync();
  }, [authenticateUser]); */
  return (
    <NavigationContainer>
      {true ? <AppStack /> : <OnboardingStack />}
    </NavigationContainer>
  );
}
