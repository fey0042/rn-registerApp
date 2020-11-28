import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {stylesMain} from  './styles'
import MyButton from './MyButton'
import Settings from './Settings.json'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username:'',
        password:'',
        registerDate:{
          day:'',
          month:'',
          year:'',
          hour:'',
          minutes:'',
          seconds:''
        }
    };
    this.registerFunc=this.registerFunc.bind(this)
  }
  addUser(){
    fetch(`http://${Settings.ip}/addUser`,{
        method:'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            user:{
                username:this.state.username,
                password:this.state.password,
                registerDate:this.state.registerDate
            }
        })
    })
    .then((response)=>response.json())
    .then((json)=>{
        if(json.succeeded==true){
          this.navigateToUsers()
        }
        else{
            alert('User already exists!')
        }
    })
    .catch((error)=>console.log(error))
  }
  navigateToUsers(){
      fetch(`http://${Settings.ip}/getUsersData`,{
          method:'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
      })
      .then((response)=>response.json())
      .then((json)=>{
        Keyboard.dismiss()
        this.props.navigation.navigate('Users',json)
      })
      .catch((error)=>console.log(error))
  }
  registerFunc(){
      if(this.state.username!=''&&this.state.password!=''){                                     //all fields validator 
       this.addUser()
      }
      else{
          alert('Complete all fields!')
      }
  }
  render() {
    return (
        <KeyboardAvoidingView behavior={Platform.OS == "android" ? "padding" : "height"} style={stylesMain.container}>
          <View style={stylesMain.logo}>
            <Text style={stylesMain.logoText}>Register App</Text>
          </View>
          <View style={stylesMain.spaceUnderLogo}>
            <Text style={stylesMain.spaceUnderLogoTexts}>Username:</Text>
            <TextInput style={stylesMain.spaceUnderLogoInputs} placeholder="username" onChangeText={(value)=>{
              let date=new Date()
              this.setState({username:value,registerDate:{
                day:date.getDate(),
                month:(date.getMonth()+1),
                year:date.getFullYear(),
                hour:date.getHours(),
                minutes:date.getMinutes(),
                seconds:date.getSeconds()
              }})
              }}>
              </TextInput>
            <Text style={stylesMain.spaceUnderLogoTexts}>Password:</Text>
            <TextInput style={stylesMain.spaceUnderLogoInputs} placeholder="password" secureTextEntry={false} onChangeText={(value)=>{
              let date=new Date()
              this.setState({password:value,registerDate:{
                day:date.getDate(),
                month:(date.getMonth()+1),
                year:date.getFullYear(),
                hour:date.getHours(),
                minutes:date.getMinutes(),
                seconds:date.getSeconds()
              }})
              }}></TextInput>
            <MyButton style={stylesMain.buttonRegister} title={'REGISTER'} func={this.registerFunc}/>
          </View>
        </KeyboardAvoidingView>
    );
  }
}