import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Colors from '../styles/Colors';

import {
  FeedScreen,
  HymeScreen,
  MessagesScreen,
  ToDoScreen,
  ProfileScreen,
} from '../scenes/tabs';

import ReactiveFeedIcon from '../assets/icons/svg-icons/ReactiveFeedIcon';
import ReactiveHomeIcon from '../assets/icons/svg-icons/ReactiveHomeIcon';
import ReactiveTodoIcon from '../assets/icons/svg-icons/ReactiveTodoIcon';
import ReactiveMessageIcon from '../assets/icons/svg-icons/ReactiveMessageIcon';
import ReactiveProfileIcon from '../assets/icons/svg-icons/ReactiveProfileIcon';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  icon: {
    marginBottom: -10,
  },
});

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.tabIconSelected,
        labelStyle: {
          fontSize: 10,
        },
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({focused}) => (
            <ReactiveFeedIcon
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ToDo"
        component={ToDoScreen}
        options={{
          tabBarLabel: 'To-Do',
          tabBarIcon: ({focused}) => (
            <ReactiveTodoIcon
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Hyme"
        component={HymeScreen}
        options={{
          tabBarLabel: 'Hyme',
          tabBarIcon: ({focused}) => (
            <ReactiveHomeIcon
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({focused}) => (
            <ReactiveMessageIcon
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
            <ReactiveProfileIcon
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
              style={styles.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
