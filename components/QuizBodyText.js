import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class QuizBodyText extends React.Component {
    //
    render(){
        return (
            <View style ={styles.textContainer}> 
                <Text style={styles.titleText}>{this.props.questionSet.question}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textContainer: {
        padding: 10,
        paddingLeft: 40,
        paddingRight: 40
    },
    titleText:{
        paddingLeft: 10,
        color: '#F63B42',
        fontSize: 25,
        fontStyle: 'italic',
        fontWeight: '900',
        textTransform: 'uppercase',     
    }
});

