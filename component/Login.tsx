// import React, {useState} from 'react';
// import {
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   ImageBackground,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {NavigationProp} from '@react-navigation/native';

// interface LoginProps {
//   navigation: NavigationProp<any>;
// }

// const Login: React.FC<LoginProps> = ({navigation}) => {
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState<{name?: string; password?: string}>({});

//   const validateLogin = async () => {
//     const newErrors: {name?: string; password?: string} = {};
//     if (!name.trim()) newErrors.name = 'Name is required.';
//     if (!password) newErrors.password = 'Password is required.';

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       try {
//         const storedDataString = await AsyncStorage.getItem('userData');
//         if (storedDataString) {
//           const storedData = JSON.parse(storedDataString);
//           const user = storedData.find(
//             (user: {name: string; password: string}) =>
//               user.name === name && user.password === password,
//           );

//           if (user) {
//             Alert.alert('Login successful!');
//             navigation.navigate('Home');
//           } else {
//             Alert.alert('Invalid credentials. Please try again.');
//           }
//         } else {
//           Alert.alert('No user data found.');
//         }
//       } catch (error) {
//         console.error('Error during login', error);
//         Alert.alert('Failed to login.');
//       }
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <ImageBackground source={require('../src/background.jpg')}>
//         <Text style={styles.title}>Welcome</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Name"
//           value={name}
//           onChangeText={setName}
//         />
//         {errors.name && <Text style={styles.error}>{errors.name}</Text>}

//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//         />
//         {errors.password && <Text style={styles.error}>{errors.password}</Text>}

//         <TouchableOpacity style={styles.button} onPress={validateLogin}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.registerButton}
//           onPress={() => navigation.navigate('Registration')}>
//           <Text style={styles.registerButtonText}>Go to Registration</Text>
//         </TouchableOpacity>
//       </ImageBackground>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 40,
//     backgroundColor: '#7d7d7d',
//   },
//   input: {
//     height: 60,
//     borderColor: '#000000',
//     borderWidth: 1,
//     marginBottom: 12,
//     paddingHorizontal: 10,
//     borderRadius: 8,
//     fontSize: 16,
//     backgroundColor: '#d9d9d9',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#ffffff',
//   },
//   button: {
//     backgroundColor: '#555555',
//     borderRadius: 5,
//     paddingVertical: 10,
//     alignItems: 'center',
//     marginTop: 16,
//   },
//   buttonText: {
//     color: '#ffffff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   error: {
//     color: 'red',
//     fontSize: 14,
//     marginBottom: 12,
//   },
//   registerButton: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   registerButtonText: {
//     color: '#ffffff',
//     fontSize: 16,
//   },
// });

// export default Login;







import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp } from '@react-navigation/native';
import Welcome from './Welcome';
import LoginStyle from '../styles/LoginStyle';

interface LoginProps {
  navigation: NavigationProp<any>;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ name?: string; password?: string }>({});

  const validateLogin = async () => {

    const newErrors: {name?: string; password?: string} = {};
    if (!name.trim()) newErrors.name = 'Name is required.'  ;


    if (!password) newErrors.password = 'Password is required.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const storedDataString = await AsyncStorage.getItem('userData');
        if (storedDataString) {
          const storedData = JSON.parse(storedDataString);
          const user = storedData.find(
            (user: { name: string; password: string }) =>
              user.name === name && user.password === password,
          );

          if (user) {
            Alert.alert('Login successful!');
            navigation.navigate('Home');
          } else {
            Alert.alert('Invalid credentials. Please try again.');
          }
        } else {
          Alert.alert('No user data found.');
        }
      } catch (error) {
        console.error('Error during login', error);
        Alert.alert('Failed to login.');
      }
    }
  };

  return (
    <View style={LoginStyle.container}>

      
      <ImageBackground
        source={require('../src/background.jpg')}
        style={LoginStyle.background}
        resizeMode="cover"
      >
        <Welcome/>
        <View style={LoginStyle.innerContainer}>
          {/* <Text style={styles.title}>Welcome</Text> */}
          

          <TextInput
            style={LoginStyle.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          {errors.name && <Text style={LoginStyle.error}>{errors.name}</Text>}

          <TextInput
            style={LoginStyle.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          {errors.password && <Text style={LoginStyle.error}>{errors.password}</Text>}

          <TouchableOpacity style={LoginStyle.button} onPress={validateLogin}>
            <Text style={LoginStyle.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={LoginStyle.registerButton}
            onPress={() => navigation.navigate('Registration')}
          >
            <Text style={LoginStyle.registerButtonText}>Go to Registration</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};


export default Login;
