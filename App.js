
import React, {Component} from 'react';
import { StyleSheet, Text, View,StatusBar} from 'react-native';
import LoginScreen from './src/component/LoginScreen'

StatusBar.setHidden(true)
export default class App extends Component{
  render() {
    return (
     <LoginScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  
});
