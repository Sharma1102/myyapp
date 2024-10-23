
import React from 'react';
import { View, Text,  ImageBackground } from 'react-native';
import Button from './Button';
import HomeStyle from '../styles/HomeStyle';

const Home = (props: { navigation: { navigate: (screen: string) => void } }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Component</Text>
      <View style={styles.navbar}>
        {/* <TouchableOpacity style={styles.navButton} onPress={() => props.navigation.navigate('Registration')}>
          <Text style={styles.navButtonText}>Registration</Text>
        </TouchableOpacity> */}
        <RegistrationButton title='Registration'  onPress={() => props.navigation.navigate('Registration')} />
        <TouchableOpacity style={styles.navButton} onPress={() => props.navigation.navigate('Data')}>
          <Text style={styles.navButtonText}>Data</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};


export default Home;

