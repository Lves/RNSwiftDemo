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
  SectionList,
  Button,
  NativeModules
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import RootStack from './index';




export default class Home extends Component<Props> {
  static navigationOptions = {
    title: 'Welcome',
    headerMode:'none',
    headerLeft: (
        <Button  title=" 《 " color="#fff" onPress={() => NativeModules.RNBridge.routeBackToNative()} />
      ),
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
          onPress={() => this.props.navigation.navigate('FormView')}
        />

        <Button
          title="调用原生"
          onPress={() => 
            NativeModules.RNBridge.routeBackToNative()
          }
        />
      </View>
      

    );
  }
}