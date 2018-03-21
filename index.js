import { AppRegistry,Button } from 'react-native';
import Home from './home';
import ProfileScreen from './Profile';
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

AppRegistry.registerComponent('RNSwiftDemo', () => RootStack);