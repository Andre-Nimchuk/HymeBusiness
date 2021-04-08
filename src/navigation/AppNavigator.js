import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainTabNavigator from './MainTabNavigator';
import HymeDetailsScreen from '../scenes/tabs/hyme/HymeDetailsScreen';
import DetailsAppartmentScreen from '../scenes/tabs/details/DetailsAppartmentScreen';
import AddNewHyme from '../scenes/tabs/newHyme/AddNewHyme';
import EditHymeDetails from '../scenes/tabs/newHyme/EditHymeDetails';
/* import {useAuth} from '../../providers/AuthProvider'; */

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
    <Stack.Screen
      name="DetailsAppartment"
      component={DetailsAppartmentScreen}
    />
    <Stack.Screen name="AddNewHyme" component={AddNewHyme} />
    <Stack.Screen name="EditHymeDetails" component={EditHymeDetails} />
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
      {true ? <OnboardingStack /> : <AppStack />}
    </NavigationContainer>
  );
}
