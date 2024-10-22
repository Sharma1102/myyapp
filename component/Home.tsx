
import React from 'react';
import { View, Text,  ImageBackground } from 'react-native';
import Button from './Button';
import HomeStyle from '../styles/HomeStyle';

const Home = (props: { navigation: { navigate: (screen: string) => void } }) => {
  return (
    <View style={HomeStyle.container}>
      <ImageBackground
        style={HomeStyle.background}
        source={require('../src/background.jpg')}
        resizeMode="cover" // Ensure the image covers the full screen without stretching
      >
        <Text style={HomeStyle.title}>Home</Text>

        <View style={HomeStyle.contentContainer}>
          <View style={HomeStyle.addUserContainer}>
            <Button
              title="Add User"
              onPress={() => props.navigation.navigate('AddUser')}
            />
          </View>
          <View style={HomeStyle.dataContainer}>
            <Text style={HomeStyle.dataText} onPress={() => props.navigation.navigate('Data')}>Data</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};


export default Home;
