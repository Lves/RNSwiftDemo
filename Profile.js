
import React, { Component } from 'react';
import {
  Platform,
  Text,
  Image,
  View,
  TextInput,
  ScrollView,
  FlatList,
  Button,
  NativeModules,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';
import CodePush from "react-native-code-push";


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
        <UpdateButton />
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
          title="退出RN"
          onPress={ () => 
            NativeModules.RNBridge.routeBackToNative()
          }
        />
      </View>
    );
  }
}


class UpdateButton extends Component{
 codePushStatusDidChange(syncStatus) {
    switch(syncStatus) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
        alert('检查更新');
        break;
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        alert('下载资源包中...');
        break;
      case CodePush.SyncStatus.AWAITING_USER_ACTION:
        alert('等待用户点击');
        break;
      case CodePush.SyncStatus.INSTALLING_UPDATE:
        alert('安装更新');
        break;
      case CodePush.SyncStatus.UP_TO_DATE:
        alert('已经是最新版本');
        break;
      case CodePush.SyncStatus.UPDATE_IGNORED:
        alert('用户已取消');
        break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        alert('已安装，等待重启');
        break;
      case CodePush.SyncStatus.UNKNOWN_ERROR:
        alert('An unknown error occurred.');
        break;
    }
  }

  render(){
    return (
        <Button title="更新" color="#f0f" onPress={ () => 
          CodePush.sync(
            { installMode: CodePush.InstallMode.IMMEDIATE, updateDialog: true },
            this.codePushStatusDidChange.bind(this),
          )
         } />
    )
  }
}


