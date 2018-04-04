import { 
  AppRegistry,
  Button ,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { Component } from 'react';
import Home from './home';
import ProfileScreen from './Profile';
import LoginScreen from './src/views/login';
import MapView from './src/views/MapView';
import CodePush from "react-native-code-push";

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
    },
    MapView:{
      screen:MapView
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
    },
    MapView:{
      screen:MapView
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
  constructor() {
    super();
    this.state = { restartAllowed: true };
  }

codePushStatusDidChange(syncStatus) {
    switch(syncStatus) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
        this.setState({ syncMessage: "检查更新" });
        break;
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        this.setState({ syncMessage: "下载资源包中..." });
        break;
      case CodePush.SyncStatus.AWAITING_USER_ACTION:
        this.setState({ syncMessage: "等待用户点击" });
        break;
      case CodePush.SyncStatus.INSTALLING_UPDATE:
        this.setState({ syncMessage: "安装更新" });
        break;
      case CodePush.SyncStatus.UP_TO_DATE:
        this.setState({ syncMessage: "已经是最新版本", progress: false });
        break;
      case CodePush.SyncStatus.UPDATE_IGNORED:
        this.setState({ syncMessage: "用户已取消", progress: false });
        break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        this.setState({ syncMessage: "更新已安装，等待重启", progress: false });
        break;
      case CodePush.SyncStatus.UNKNOWN_ERROR:
        this.setState({ syncMessage: "An unknown error occurred.", progress: false });
        break;
    }
  }
  toggleAllowRestart() {
    this.state.restartAllowed
      ? CodePush.disallowRestart()
      : CodePush.allowRestart();

    this.setState({ restartAllowed: !this.state.restartAllowed });
  }
  getUpdateMetadata() {
    CodePush.getUpdateMetadata(CodePush.UpdateState.RUNNING)
      .then((metadata: LocalPackage) => {
        this.setState({ syncMessage: metadata ? JSON.stringify(metadata) : "Running binary version", progress: false });
      }, (error: any) => {
        this.setState({ syncMessage: "Error: " + error, progress: false });
      });
  }
  codePushDownloadDidProgress(progress) {
    this.setState({ progress });
  }
    /** Update is downloaded silently, and applied on restart (recommended) */
  sync() {
    CodePush.sync(
      {},
      this.codePushStatusDidChange.bind(this),
      this.codePushDownloadDidProgress.bind(this)
    );
  }

  /** Update pops a confirmation dialog, and then immediately reboots the app */
  syncImmediate() {
    CodePush.sync(
      { installMode: CodePush.InstallMode.IMMEDIATE, updateDialog: true },
      this.codePushStatusDidChange.bind(this),
      this.codePushDownloadDidProgress.bind(this)
    );
  }
  //应用启动时检查更新
  componentDidMount(){
    CodePush.sync(
      {},
      this.codePushStatusDidChange.bind(this),
      this.codePushDownloadDidProgress.bind(this)
    );
  }
  render() {
    let progressView;

    if (this.state.progress) {
      progressView = (
        <Text style={styles.messages}>{this.state.progress.receivedBytes} of {this.state.progress.totalBytes} bytes received</Text>
      );
    }
    if (this.props.name == 'listView'){
      return <ListStack screenProps={this.props} />; 
    } else {
      return <RootStack screenProps={this.props} />; 
    }
     //    return (
     //  <View style={styles.container}>
     //    <TouchableOpacity onPress={this.sync.bind(this)}>
     //          <Text style={styles.syncButton}>点击后天更新</Text>
     //    </TouchableOpacity>
     //    <TouchableOpacity onPress={this.syncImmediate.bind(this)}>
     //          <Text style={styles.syncButton}>弹框提醒更新</Text>
     //    </TouchableOpacity>

     //    <TouchableOpacity onPress={this.toggleAllowRestart.bind(this)}>
     //          <Text style={styles.restartToggleButton}>重启 { this.state.restartAllowed ? "允许" : "禁止"}</Text>
     //    </TouchableOpacity>

     //    <TouchableOpacity onPress={this.getUpdateMetadata.bind(this)}>
     //          <Text style={styles.syncButton}>点击更新元数据</Text>
     //     </TouchableOpacity>
     //    <Text style={styles.messages}>{this.state.syncMessage || ""}</Text>

     //    <Text style={styles.messages}>sdfg是地方官史蒂夫dffdd</Text>
     //  </View>
     // );
  }
}

let codePushOptions = { checkFrequency: CodePush.CheckFrequency.MANUAL };
MyApp = CodePush(codePushOptions)(MyApp);
AppRegistry.registerComponent('RNSwiftDemo', () => MyApp);



