/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import React from 'react';
// import Home from './comp/Home';
// import Registration from './comp/Registration';
// import Data from './comp/Data';


// export default function App() {
//   const stack = createNativeStackNavigator();
//   return (
//     <NavigationContainer>
//       <stack.Navigator initialRouteName='Home'>
//         <stack.Screen name='Home' component={Home}/> 
//         <stack.Screen name='Data' component={Data}/>
//         <stack.Screen name='Registration' component={Registration} />
//       </stack.Navigator>
//     </NavigationContainer>
//   );
// }

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './component/Home'; // Your existing Home component
import Registration from './component/Registration'; // Your Registration component
import Data from './component/Data'; // Your Data component
import Login from './component/Login'; // The new Login component
import React from 'react';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Data" component={Data} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
