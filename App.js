import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import SleepScreen from './screens/SleepScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'We spend 1/3 of our life sleeping' }}/>
        <Stack.Screen name="Map" component={MapScreen} options={{ title: 'Choose a location on a map!' }} />
        <Stack.Screen name="Sleep" component={SleepScreen} options={{ title: 'Have a great sleep!' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
