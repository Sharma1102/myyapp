import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Registration from './Registration';
import Data from './Data';
import Login from './Login';


// Define types for the stack navigator's routes
export type RootStackParamList = {
  Home: undefined;
  Registration: undefined;
  Data: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const MobileNavigator: React.FC = () => { 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName ="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Data" component={Data} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MobileNavigator;
