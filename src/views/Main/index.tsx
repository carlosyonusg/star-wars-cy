import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home';

const Stack = createStackNavigator();

export default () => (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
);
