import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import RegistrationButton from './RegistrationButton';

const Home = (props: { navigation: { navigate: (screen: string) => void; }; } ) => {
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

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#063970', 
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff', 
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
    backgroundColor: 'aqua', 
  },
  navButton: {
    padding: 10,
    borderColor: '#063970',
    borderRadius: 50,
    borderWidth: 2,
  },
  navButtonText: {
    color: '#063970', 
    fontSize: 18,
  },
});

export default Home;

