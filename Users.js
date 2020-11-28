import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Item from './ListItem'
import MyButton from './MyButton';
import {stylesUserList} from './styles'
import Settings from './Settings.json'

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data:this.props.route.params
    };
    this.backToLoginPage=this.backToLoginPage.bind(this)
    this.deleteFunc=this.deleteFunc.bind(this)
  }
  backToLoginPage(){
    this.props.navigation.navigate('Main')
  }
  deleteFunc(userID){
    console.log('delete '+userID)
    // for(let i=0;i<this.state.data.length;i++){
    //   if(this.state.data[i].id==userID){
    //     this.state.data.splice(i,1)
    //     this.forceUpdate()
    //   }
    // }
    fetch(`http://${Settings.ip}/deleteUser`,{
        method:'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            user:{
               id:userID
            }
        })
    })
    .then((response)=>response.json())
    .then((json)=>{
      this.setState({
        data:json
      },()=>{
        // this.forceUpdate()
        // console.log(this.state.data)
      })
    })
    .catch((error)=>console.log(error))
  }
render() {
    return (
      <View style={{flex:1}}>
        <View style={stylesUserList.backToLoginView}>
          <MyButton title={"Back to login page."} func={this.backToLoginPage} style={stylesUserList.backToLoginPageButton}/>
        </View>
          <FlatList style={stylesUserList.flatList} data={this.state.data} keyExtractor={(item,index)=>index.toString()} renderItem={(item)=><Item item={item} navigation={this.props.navigation} deleteFunc={this.deleteFunc}/>}>
          </FlatList>
      </View>
    );
  }
}
