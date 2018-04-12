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
import FlatListScreen from './src/views/FlatListScreen';
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
    },
    FlatListScreen:{
      screen:FlatListScreen,
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
    },
    FlatListScreen:{
      screen:FlatListScreen,
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
        console.log("已经是最新版本");
        break;
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        this.setState({ syncMessage: "下载资源包中..." });
        console.log("下载资源包中...");
        break;
      case CodePush.SyncStatus.AWAITING_USER_ACTION:
        this.setState({ syncMessage: "等待用户点击" });
        console.log("等待用户点击");
        break;
      case CodePush.SyncStatus.INSTALLING_UPDATE:
        this.setState({ syncMessage: "安装更新" });
        console.log("安装更新");
        break;
      case CodePush.SyncStatus.UP_TO_DATE:
        
        this.setState({ syncMessage: "已经是最新版本", progress: false });
        console.log("已经是最新版本");
        break;
      case CodePush.SyncStatus.UPDATE_IGNORED:
        this.setState({ syncMessage: "用户已取消", progress: false });
        console.log("用户已取消");
        break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        this.setState({ syncMessage: "更新已安装，等待重启", progress: false });
        console.log("更新已安装，等待重启");
        // CodePush.restartApp(true)
        // console.log("重启了")
        
        break;
      case CodePush.SyncStatus.UNKNOWN_ERROR:
       console.log("An unknown error occurred.");
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
  // componentDidMount(){
  //   CodePush.sync(
  //     {},
  //     this.codePushStatusDidChange.bind(this),
  //     this.codePushDownloadDidProgress.bind(this)
  //   );
  // }
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
      //   return (
      // <View style={styles.container}>
      //   <TouchableOpacity onPress={this.sync.bind(this)}>
      //         <Text style={styles.syncButton}>点击后台更新</Text>
      //   </TouchableOpacity>
      //   <TouchableOpacity onPress={this.syncImmediate.bind(this)}>
      //         <Text style={styles.syncButton}>弹框提醒更新</Text>
      //   </TouchableOpacity>

      //   <TouchableOpacity onPress={this.toggleAllowRestart.bind(this)}>
      //         <Text style={styles.restartToggleButton}>重启 { this.state.restartAllowed ? "允许" : "禁止"}</Text>
      //   </TouchableOpacity>

      //   <TouchableOpacity onPress={this.getUpdateMetadata.bind(this)}>
      //         <Text style={styles.syncButton}>点击更新元数据</Text>
      //    </TouchableOpacity>
      //   <Text style={styles.messages}>{this.state.syncMessage || ""}</Text>

      //   <Text style={styles.messages}>D70002</Text>
      // </View>
    //  );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingTop: 50
  },
  image: {
    margin: 30,
    width: Dimensions.get("window").width - 100,
    height: 365 * (Dimensions.get("window").width - 100) / 651,
  },
  messages: {
    marginTop: 30,
    textAlign: "center",
  },
  restartToggleButton: {
    color: "blue",
    fontSize: 17
  },
  syncButton: {
    color: "green",
    fontSize: 17
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 20
  },
});

let codePushOptions = { checkFrequency: CodePush.CheckFrequency.MANUAL };
MyApp = CodePush(codePushOptions)(MyApp);
AppRegistry.registerComponent('RNSwiftDemo', () => MyApp);



