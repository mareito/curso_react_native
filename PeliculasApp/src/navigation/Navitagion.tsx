import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';

export type RootStackParams = {
  HomeScreem : undefined;
  DetailScreen : Movie;
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      cardStyle : {
        //backgroundColor: 'white'
      }
    }}>
      <Stack.Screen name="HomeScreem" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />     
    </Stack.Navigator>
  );
}