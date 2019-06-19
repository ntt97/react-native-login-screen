import React, {Component} from 'react';
import { ImageBackground} from 'react-native';
import Logo from './Logo'

import From from './Form';

export default class LoginScreen extends Component{
    render(){
        return(
            <ImageBackground  style={{flex:1}} source={require('../images/wallpaper.png')}>
                <Logo />
                <From />
                
            </ImageBackground>

        )
    }
}