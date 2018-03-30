import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';
import PropTypes from 'prop-types';

var LoanBanner = requireNativeComponent('LoanBanner', null);

export default class MapView extends Component {
   render() {
  		return <LoanBanner interitemSpacing={10} {...this.props} style={{marginTop:100, width:500, height:200}} />;
	}
}

MapView.propTypes = {
  interitemSpacing: PropTypes.number,
};