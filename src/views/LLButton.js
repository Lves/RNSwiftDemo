import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from 'react-native';


export default class LLButton extends Component{
	render(){
		const {
			TouchableComponent,
			title,
			titleStyle,
			buttonStyle,
			containerStyle,
		} = this.props;
		return(
			<TouchableComponent style={[containerStyle]}>
	      		<View style={[buttonStyle]}>
	        		<Text style={[titleStyle]}>{title}</Text>
	      		</View>
			</TouchableComponent>
		);	
	}
}

LLButton.defaultProps = {
	TouchableComponent: Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback,
	title:'title',
}