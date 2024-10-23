/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Home from './component/Home'; // Your existing Home component
// import Registration from './component/Registration'; // Your Registration component
// import Data from './component/Data'; // Your Data component
// import Login from './component/Login'; // The new Login component
// import React from 'react';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Registration" component={Registration} />
//         <Stack.Screen name="Data" component={Data} />
//         <Stack.Screen name="Home" component={Home} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MainNavigator from './component/MainNavigator';


const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MainNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
