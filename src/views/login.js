import React, { Component } from 'react';
import  LLButton from './LLButton';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ScrollView,
  FlatList,
  Button,
  ReactNative
} from 'react-native';

export default class LoginScreen extends Component {
  constructor(props){
  	super(props);
  	this.state = {text:''};
  }
 render() {
    return (
    	<View style={{backgroundColor:'white',paddingTop:35}}>
          <TextInput style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          clearButtonMode='while-editing'
          placeholderTextColor='#C4CCDA'
          placeholder='请输入姓名'/>

          <TextInput style={styles.textInput}
          clearButtonMode='while-editing'
          placeholderTextColor='#C4CCDA'
          placeholder='请输入身份号'/>
          <TextInput style={styles.textInput}
          clearButtonMode='while-editing'
          placeholderTextColor='#C4CCDA'
          placeholder='请输入身份号'/>

          <LLButton style={styles.llButtonStyle} 
                    containerStyle={styles.llButtonStyle} 
                    title='提交' 
                    titleStyle={styles.titleStyle} 
                    buttonStyle={styles.buttonStyle}>
          </LLButton>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
  textInput:{
    height: 60,
    borderBottomColor:'#C4CCDA', 
    borderBottomWidth: 0.5,
    fontSize:16,
    marginLeft:20,
    marginRight:20,
    color:'#4A6DAC',
    fontWeight:'600',
  },
  llButtonStyle:{
    marginLeft:20,
    marginRight:20,
    marginTop:20,
  },
  titleStyle:{
    color:'#FFFFFF',
    fontSize:20,
    textAlign:'center',
    textAlignVertical:'center',
  },
  buttonStyle:{
    backgroundColor:'#4A6DAC',
    borderRadius: 5,
    height:55,
    justifyContent: 'center', 
  }
  
});







