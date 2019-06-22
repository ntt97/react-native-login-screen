import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import Input from "./Input";
import usernameImg from "../images/username.png";
import passwordImg from "../images/password.png";
import eye from "../images/eye_black.png";
export default class From extends Component {
  constructor(props){
    super(props)
    this.state ={
      isShowPassword:true
    }
  }
  _showPass = () =>{
    this.setState({
      isShowPassword : !this.state.isShowPassword
    })
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="position" style={styles.container}>
        <Input
          source={usernameImg}
          placeholder="Username"
          autoCapitalize={"none"}
          returnKeyType={"done"}
          autoCorrect={false}
        />
        <Input
          source={passwordImg}
          secureTextEntry={this.state.isShowPassword}
          placeholder="Password"
          returnKeyType={"done"}
          autoCapitalize={"none"}
          autoCorrect={false}
        />
        <TouchableOpacity onPress={this._showPass} style={styles.btnEye} activeOpacity={0.7}>
          <Image source={eye} style={styles.iconEye} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  btnEye: {
    position: "absolute",
    top: 60,
    right: 28
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: "rgba(0,0,0,0.2)"
  }
});
