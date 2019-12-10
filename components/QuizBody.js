﻿import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import QuizBodyText from './QuizBodyText'

export default class QuizBody extends React.Component {
    //
    render(){
        return (
            <View style ={styles.body}> 
                <QuizBodyText
                    questionSet = {{question:'HELLO LUKE?'}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        width: '95%',
        flexDirection: 'column',
        height: '70%',
        margin: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#F63B42',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        borderColor: '#F63B42',
        borderRadius: 10,
        borderWidth: 2,
        padding: 10,
        paddingLeft: 40,
        paddingRight: 40
    },
    titleText:{
        paddingLeft: 10,
        color: 'black',
        fontSize: 40,
        fontStyle: 'italic',
        fontWeight: '900',
        textTransform: 'uppercase',     
    }
});
