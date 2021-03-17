import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  SignInScreen,
  PhoneVerifyCodeScreen,
  NameScreen,
} from '../scenes/onboarding';

const Stack = createStackNavigator();

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
      <OnboardingStack />
    </NavigationContainer>
  );
}
