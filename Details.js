import React, { Component } from 'react';
import { View, Text, Image, Keyboard} from 'react-native';
import {stylesDetails} from './styles'

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={stylesDetails.container}>
            <Image source={require('./Icons/profile.png')} style={stylesDetails.icon}/>
            <Text style={stylesDetails.dataWrapper}>Username:  
                <Text style={stylesDetails.textData}> {this.props.route.params.username}</Text>
            </Text>
            <Text style={stylesDetails.dataWrapper}>Password:  
                <Text style={stylesDetails.textData}> {this.props.route.params.password}</Text>
            </Text>
            <Text adjustsFontSizeToFit minimumFontScale={.4} numberOfLines={1} style={stylesDetails.dataWrapper}>Registered:  
                <Text style={stylesDetails.textData}> {this.props.route.params.registerDate.year}/{this.props.route.params.registerDate.month}/{this.props.route.params.registerDate.day} {this.props.route.params.registerDate.hour}:{this.props.route.params.registerDate.minutes}:{this.props.route.params.registerDate.seconds}</Text>
            </Text>
      </View>
    );
  }
}
