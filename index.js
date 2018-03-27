import { AppRegistry,Button } from 'react-native';
import React, { Component } from 'react';
import Home from './home';
import ProfileScreen from './Profile';
import LoginScreen from './src/views/login';
import {
  StackNavigator,
} from 'react-navigation';
const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Profile: {
      screen: ProfileScreen,
    },
    Login:{
      screen: LoginScreen,
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);


const ListStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Profile: {
      screen: ProfileScreen,
    },
    Login:{
      screen: LoginScreen,
    }
  },
  {
    initialRouteName: 'Profile',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);



class MyApp extends Component {
  render() {
    // StackNavigator **only** accepts a screenProps prop so we're passing
    // initialProps through that.
    if (this.props.name == 'listView'){
      return <ListStack screenProps={this.props} />; 
    } else {
      return <RootStack screenProps={this.props} />; 
    }
  }
}
AppRegistry.registerComponent('RNSwiftDemo', () => MyApp);



