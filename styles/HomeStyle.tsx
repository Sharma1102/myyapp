
// import { StyleSheet } from "react-native";

// const HomeStyle = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   background: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: '#ffffff',
//     textShadowColor: '#000000',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 5,
//     position: 'absolute',
//     top: 50,
//     textAlign: 'center',
//   },
//   contentContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 100, 
//   },
//   addUserContainer: {
//     backgroundColor: '#008CBA', 
//         borderRadius: 5,
//         paddingVertical: 10,
//         alignItems: 'center',
//         marginTop: 16,
//         width: 87,
//   },
//   dataContainer: {
//     backgroundColor: '#008CBA', 
//         borderRadius: 5,
//         paddingVertical: 10,
//         alignItems: 'center',
//         marginTop: 16,
//         width: 87,
//   },
//   dataText: {
//     fontSize: 16,
//     color: '#ffffff', 
//     textAlign: 'center',
//   },
// });

// export default HomeStyle;



import { StyleSheet } from "react-native";
 
const HomeStyle = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // background: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // title: {
  //   fontSize: 30,
  //   fontWeight: 'bold',
  //   color: '#ffffff',
  //   textShadowColor: '#000000',
  //   textShadowOffset: { width: 1, height: 1 },
  //   textShadowRadius: 5,
  //   position: 'absolute',
  //   top: 50,
  //   textAlign: 'center',
  // },
  // contentContainer: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop: 100,
  // },
  // addUserContainer: {
  //   backgroundColor: '#008CBA',
  //       borderRadius: 5,
  //       paddingVertical: 10,
  //       alignItems: 'center',
  //       marginTop: 16,
  //       width: 87,
  // },
  // dataContainer: {
  //   backgroundColor: '#008CBA',
  //       borderRadius: 5,
  //       paddingVertical: 10,
  //       alignItems: 'center',
  //       marginTop: 16,
  //       width: 87,
  // },
  // dataText: {
  //   fontSize: 16,
  //   color: '#ffffff',
  //   textAlign: 'center',
  // },
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
 
export default HomeStyle;