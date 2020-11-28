import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './RegisterApp/Main';
import Users from './RegisterApp/Users'
import Details from './RegisterApp/Details';
const Stack=createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={screenOptions.main}/>
        <Stack.Screen name="Users" component={Users} options={screenOptions.users} />
        <Stack.Screen name="Details" component={Details} options={screenOptions.users} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const screenOptions={
  main:{
    headerShown:false
  },
  users:{
    headerStyle:{backgroundColor:'#E91E63'},
    headerTitleStyle:{color:'white'}
  }
}