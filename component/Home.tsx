
// import React from 'react';
// import { View, Text,  ImageBackground } from 'react-native';
// import Button from './Button';
// import HomeStyle from '../styles/HomeStyle';

// const Home = (props: { navigation: { navigate: (screen: string) => void } }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Home Component</Text>
//       <View style={styles.navbar}>
//         {/* <TouchableOpacity style={styles.navButton} onPress={() => props.navigation.navigate('Registration')}>
//           <Text style={styles.navButtonText}>Registration</Text>
//         </TouchableOpacity> */}
//         <RegistrationButton title='Registration'  onPress={() => props.navigation.navigate('Registration')} />
//         <TouchableOpacity style={styles.navButton} onPress={() => props.navigation.navigate('Data')}>
//           <Text style={styles.navButtonText}>Data</Text>
//         </TouchableOpacity>

        
//       </View>
//     </View>
//   );
// };


// export default Home;

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import RegistrationButton from './RegistrationButton'; // Assuming this is your custom button component
import HomeStyle from '../styles/HomeStyle';
const Home = (props: { navigation: { navigate: (screen: string) => void } }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Component</Text>
      
      {/* Navigation Bar */}
      <View style={styles.navbar}>
        <RegistrationButton 
          title='Registration'  
          onPress={() => props.navigation.navigate('Registration')} 
        />
        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => props.navigation.navigate('Data')}>
          <Text style={styles.navButtonText}>Data</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => props.navigation.navigate('Profile')}>
          <Text style={styles.navButtonText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => props.navigation.navigate('Settings')}>
          <Text style={styles.navButtonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;


const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Spread buttons evenly
    width: '100%',
    padding: 10,
    backgroundColor: '#f8f8f8', // Background color for navbar
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navButton: {
    padding: 10,
    backgroundColor: '#007BFF', // Button background color
    borderRadius: 5,
  },
  navButtonText: {
    color: '#fff', // Text color for button
    fontSize: 16,
  },
});
