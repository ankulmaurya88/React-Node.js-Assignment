import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import FormEditorScreen from './screens/FormEditorScreen';
import PreviewScreen from './screens/PreviewScreen';
import ResponseScreen from './screens/ResponseScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FormEditor" component={FormEditorScreen} />
        <Stack.Screen name="Preview" component={PreviewScreen} />
        <Stack.Screen name="Responses" component={ResponseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
