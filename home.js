import React, { Component } from 'react';
import {
  Platform,
  Text,
  Image,
  View,
  TextInput,
  ScrollView,
  FlatList,
  SectionList,
  Button,
  NativeModules
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import RootStack from './index';
import MapView from './src/views/MapView';



export default class Home extends Component<Props> {
  static navigationOptions = ({ navigation ,navigationOptions}) => {
    return {
      title: 'RN首页',
      headerMode:'none',
      headerLeft: (
        <Button  title=" << " color="#fff" onPress={() => NativeModules.RNBridge.routeBackToNative()} />
      ),
    }
    
  };
  render() {
    return (
      <View style={{backgroundColor:'white' }}>
        <Button
          title="详情"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
        <Button
          title="提交"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Button
          title="原生控件"
          onPress={() => this.props.navigation.navigate('MapView')}
        />
        <Button
          title="跳转原生VC"
          onPress={() => 
            NativeModules.RNBridge.routeToNative('DetailViewController','Main')
          }
        />
        <Text>版本100006</Text>

      </View>
      

    );
  }
}