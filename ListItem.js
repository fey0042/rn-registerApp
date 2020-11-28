import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import MyButton from './MyButton';
import {stylesUserList} from './styles'

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.detailsPress=this.detailsPress.bind(this)
    this.deletePress=this.deletePress.bind(this)
  }
  detailsPress(){
    this.props.navigation.navigate('Details',this.props.item.item)
  }
  deletePress(){
    this.props.deleteFunc(this.props.item.item.id)
  }
  render() {
    // console.log(this.state)
    return (
      <View style={stylesUserList.listItemView}>
        <Image source={require('./Icons/profile.png')} style={stylesUserList.iconStyle}/>
        <Text style={stylesUserList.listItemText}> {this.props.item.item.id}: {this.props.item.item.username} </Text>
        <View style={{justifyContent:'center',width:70,flex:1}}>
          <MyButton title={"DETAILS"} func={this.detailsPress} style={stylesUserList.actionButtons}/>
        </View>
        <View style={{justifyContent:'center',width:70,flex:1}}>
        <MyButton title={"DELETE"} func={this.deletePress} style={stylesUserList.actionButtons}/>
        </View>
      </View>
    );
  }
}
