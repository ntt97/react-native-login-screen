import React, { Component } from 'react';
import { View, Image,StyleSheet,Text } from 'react-native';

import logoImg from '../images/logo.png';
export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={logoImg} />
                 <Text style={styles.text}>react-native</Text>   

            </View>

        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:3,
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        width:80,
        height:80,
    },
    text:{
        textTransform:'uppercase',
        color:'#fff',
        marginTop:10,
    },

})