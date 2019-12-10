import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeBody = (props) => {
 //
    return (
        <View style ={styles.body}>
            <Image source={require('../assets/logo_triviaKing.png')} style={{height: 70, width:70}}/> 
            <Text style={styles.titleText}> {props.title} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        width: '100%',
        flexDirection: 'column',
        height: '75%',
        backgroundColor: '#F63B42',
        borderBottomWidth: 1,
        borderBottomColor: '#D1D1D1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText:{
        paddingLeft: 10,
        color: 'white',
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: '900',
        textTransform: 'uppercase',     
    }
});

export default HomeBody ;