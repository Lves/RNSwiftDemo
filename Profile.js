
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ScrollView,
  FlatList,
  Button
} from 'react-native';

import {
  StackNavigator,
  NativeModules,
} from 'react-navigation';


export default class ProfileScreen extends Component {
  static navigationOptions = ({ navigation ,navigationOptions}) => {
    const { params } = navigation.state;
    return {
      title: params ? params.otherParam : '叠加视图',
      //翻转父类的颜色
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
      headerRight: (
        <Button  title="+1" color="#f0f" onPress={() => alert('This is a button!')} />
      ),
    }
  };
  render(){
    return (
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="继续跳转"
          onPress={() => this.props.navigation.navigate('Profile',{otherParam : '哈哈'})}
        />
        <Button
          title="返回"
          onPress={() => NativeModules.RNBridge.routeBackToNative()}
        />
      </View>
    );
  }

}