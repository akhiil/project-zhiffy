import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import AccountScreen from './src/screens/AccountScreen';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import TiffinScreen from './src/screens/TiffinScreen';
import HomeScreen from './src/screens/HomeScreen';
import MessScreen from './src/screens/MessScreen';
import mainScreen from './src/screens/mainScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import tiffinScreen from './src/screens/TiffinScreen';
import Zomato from './src/screens/zomato';


const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    main: mainScreen,
    Signin: SigninScreen,
    Signup: SignupScreen
  }),
  payment: PaymentScreen,
  mainFlow: createBottomTabNavigator({
    Home: Zomato,
    mess: MessScreen,
    tiffin: TiffinScreen,
    account: AccountScreen
  },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          //  console.log(focused, horizontal, tintColor);
          const iconColour = focused ? 'black' : 'gray';
          if (navigation.state.routeName === 'Home') {
            return <AntDesign name="home" size={35} color={iconColour} />
          } else if (navigation.state.routeName === 'mess') {
            return <MaterialCommunityIcons name="food-fork-drink" size={35} color={iconColour} />;
          } else if (navigation.state.routeName === 'tiffin') {
            return <MaterialCommunityIcons name="food" size={35} color={iconColour} />;
          } else if (navigation.state.routeName === 'account') {
            return <MaterialCommunityIcons name="account" size={35} color={iconColour} />;
          }
        },
        tabBarOptions: {
          activeTintColor: '#2BEDBA',
          inactiveTintColor: 'gray',
          showLabel: false,
          style: { backgroundColor: 'white', paddingTop: 5 }
        },
      })
    })
});

PaymentScreen.navigationOptions = () => {
  return {
    headerShown: true
  };
};

mainScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

export default createAppContainer(switchNavigator);

// import React, { useEffect, useState } from 'react';
// import {
//   Text, View, StyleSheet, FlatList,
//   Dimensions
// } from 'react-native';
// import axios from 'axios';

// const phw = Dimensions.get('window').width;
// const phh = Dimensions.get('window').height;

// const App = () => {
//   //const [getData,setGetData] = useState([{sno:1, name: "harry", points: 100}]);
//   const [getData, setGetData] = useState([]);

//   useEffect(() => {
//     axios.get('http://www.kamaibook.com/rest/en/internroute', {
//       headers: {
//         'Authorization': "Bearer letswork"
//       }
//     })
//       .then((res) => {
//         console.log(res.data)
//         setGetData([...res.data.data])
//       })
//       .catch((error) => {
//         console.error(error)
//         alert(error)
//       })
//   }, [])

//   return (
//     <>
//       <View style={{ backgroundColor: 'lightgray', paddingVertical: '7%' }}>
//         <View style={styles.header}>
//           <Text style={styles.headerText}>Kamai Book</Text>
//         </View>
//         <View style={{ paddingHorizontal: 10 }}>
//           <FlatList
//             data={getData}
//             keyExtractor={item => item.name}
//             renderItem={({ item }) => {
//               return (
//                 <View style={styles.items}>
//                   <View style={[styles.element, { width: '10%' }]}>
//                     <Text style={{ color: '#343a45', fontSize: 18, fontFamily: 'cursive' }}>{item.sno}</Text>
//                   </View>
//                   <View style={[styles.element, { width: '70%' }]}>
//                     <Text style={{ color: '#343a45', fontSize: 18, fontFamily: 'cursive' }}>{item.name}</Text>
//                   </View>
//                   <View style={[styles.element, { width: '20%' }]}>
//                     <Text style={{ color: '#343a45', fontSize: 18, fontFamily: 'cursive' }}>{item.points}</Text>
//                   </View>
//                 </View>
//               );
//             }}
//           />
//         </View>
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: '#343a45',
//     textAlign: 'center',
//     padding: 15
//   },
//   headerText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 20,
//     fontFamily: 'cursive'
//   },
//   items: {
//     flexDirection: 'row',
//   },
//   element: {
//     borderColor: '#343a45',
//     borderWidth: 2,
//     padding: 5,
//     borderRadius: 5,
//     backgroundColor: '#7e9190',
//     marginVertical: 3,
//     marginHorizontal: 2,
//     textAlign: 'center'
//   }
// })

// export default App;