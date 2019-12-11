import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class ResultBody extends React.Component {
    
    render(){
        let result = this.props.result
        return (
            <View style ={styles.body}> 
                {result.answer === 'right' ? 
                    <Image source={require('../assets/yesmark.jpg')} style={{height: 30, width:30}}/>
                    :
                    <Image source={require('../assets/xmark.png')} style={{height: 30, width:30}}/>
                }
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>{result.questionSet.question}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        width: '95%',
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor:'white'
    },//
     textContainer: {
        padding: 10,
        paddingLeft: 10,
        paddingRight: 15
    },
     titleText:{
         flex:1,
        color: 'black',
        fontSize: 15,
        fontWeight: '500',
        textTransform: 'uppercase', 
        flexWrap:'wrap'
    },
});

