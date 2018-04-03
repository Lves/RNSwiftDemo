import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';

var LoanBanner = requireNativeComponent('LoanBanner', null);

export default class MapView extends Component {
  static navigationOptions = () => {
    return {
      title: 'Banner',
    }
  };
   render() {
  		return <LoanBanner  itemSize={{width:Dimensions.get('window').width,height:200}} 
  		isInfinite={true} 
  		{...this.props} 
  		onClickBanner={ (e) => {
  				console.log(e.nativeEvent);
  				console.log(e.nativeEvent.index);
  				this.props.navigation.navigate('MapView')
  			}
  		}
  		style={{marginTop:100, width:Dimensions.get('window').width, height:240}} />;
	}
}

MapView.propTypes = {
  interitemSpacing: PropTypes.number,
  isInfinite:PropTypes.bool,
  itemSize:PropTypes.func,
  onClickBanner:PropTypes.func
};