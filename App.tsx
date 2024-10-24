/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './component/Home'; // Your existing Home component
import Registration from './component/Registration'; // Your Registration component
import Data from './component/Data'; // Your Data component
import Login from './component/Login'; // The new Login component
import React from 'react';
import FileUpload from './component/FileUpload';
import FileDownload from './component/FileDownload';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Data" component={Data} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Upload File" component={FileUpload} />
        <Stack.Screen name="Download File" component={FileDownload} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


