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
import CodePush from "react-native-code-push";


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
  codePushStatusDidChange(syncStatus) {
    switch(syncStatus) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
        console.log("已经是最新版本");
        break;
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        console.log("下载资源包中...");
        break;
      case CodePush.SyncStatus.AWAITING_USER_ACTION:
        console.log("等待用户点击");
        break;
      case CodePush.SyncStatus.INSTALLING_UPDATE:
        console.log("安装更新");
        break;
      case CodePush.SyncStatus.UP_TO_DATE:
        console.log("已经是最新版本");
        break;
      case CodePush.SyncStatus.UPDATE_IGNORED:
        console.log("用户已取消");
        break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        console.log("更新已安装，等待重启");
        // CodePush.restartApp(true)
        // console.log("重启了")
        break;
      case CodePush.SyncStatus.UNKNOWN_ERROR:
       console.log("An unknown error occurred.");
        break;
    }
  }

  sync() {
    CodePush.sync(
      {},
      this.codePushStatusDidChange.bind(this)
    );
  }
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
        <Button
          title="列表"
          onPress={() => this.props.navigation.navigate('FlatListScreen')}
        />
         <Button
          title="热更新"
          onPress={this.sync.bind(this)}
        />
        <Text>90001</Text>

      </View>
      

    );
  }
}