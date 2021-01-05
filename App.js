import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { UsersScreen, PostsScreen, DetailScreen } from './screens';

const AppNavigator = createStackNavigator(
  {
    Users: {
      screen: UsersScreen,
    },
    Posts: {
      screen: PostsScreen,
    },
    Detail: {
      screen: DetailScreen,
    },
  },
  {
    initialRouteName: 'Users',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <>
      <AppContainer />
      <StatusBar style='auto' />
    </>
  );
}
