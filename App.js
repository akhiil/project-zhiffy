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


// const switchNavigator = createSwitchNavigator({
//   loginFlow: createStackNavigator({
//     main: mainScreen,
//     Signin: SigninScreen,
//     Signup: SignupScreen

//   }),
//   mainFlow: createBottomTabNavigator({
//     Home: {
//       screen: HomeScreen,
//       navigationOptions: {
//         tabBarIcon: () => {
//           return <AntDesign name="home" size={35} color="#4d2800"></AntDesign>;
//         }
//       }
//     },
//     Mess: {
//       screen: MessScreen,
//       navigationOptions: {
//         tabBarIcon: () => {
//           return <MaterialCommunityIcons name="food-fork-drink" size={35} color="#4d2800" />;
//         }
//       }
//     },
//     Tiffin: {
//       screen: TiffinScreen,
//       navigationOptions: {
//         tabBarIcon: () => {
//           return <MaterialCommunityIcons name="food" size={35} color="#4d2800" />;
//         }
//       }
//     },
//     Account: {
//       screen: AccountScreen,
//       navigationOptions: {
//         tabBarIcon: () => {
//           return <MaterialCommunityIcons name="account" size={35} color="#4d2800" />;
//         }
//       }
//     }
//   },
//     {


//       tabBarOptions: { showLabel: false, activeintColor: 'blue', inactiveintColor: 'red' }
//     })
// });

// // way to remove top header
// HomeScreen.navigationOptions = () => {
//   return {
//     headerShown: false
//   };
// };
// mainScreen.navigationOptions = () => {
//   return {
//     headerShown: false
//   };
// };


// export default createAppContainer(switchNavigator);

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    main: mainScreen,
    Signin: SigninScreen,
    Signup: SignupScreen
  }),
  payment: PaymentScreen,
  mainFlow: createBottomTabNavigator({
    Home: HomeScreen,
    mess: MessScreen,
    tiffin: TiffinScreen,
    account: AccountScreen
  },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          //  console.log(focused, horizontal, tintColor);
          const iconColour = focused ? '#ffffe6' : 'green';
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
          style: { backgroundColor: '#4d2800', paddingTop: 5 }
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