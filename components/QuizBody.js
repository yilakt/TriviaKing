import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class QuizBody extends React.Component {
    //
    render(){
        let question = this.props.question

        return (
            <View style ={styles.body}> 
                <View style ={styles.textContainer}> 
                    <Text style={styles.categoryText}>{question != undefined && question.category}</Text>
                    <Text style={styles.titleText}>{question != undefined && question.question}</Text>
                </View>
            </View>
        )
    }
}//

const styles = StyleSheet.create({
    body: {
        width: '93%',
        flexDirection: 'column',
        height: '70%',
        margin: 10,
        backgroundColor: '#DDD',
        borderWidth: 1,
        borderColor: '#F63B42',
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },//
     textContainer: {
        padding: 10,
        paddingLeft: 40,
        paddingRight: 40
    },
    titleText:{
        paddingLeft: 10,
        color: '#F63B42',
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: '600',
        textTransform: 'uppercase',     
    },
    categoryText:{
        paddingLeft: 10,
        color: 'black',
        fontSize: 18,
        fontStyle: 'italic',
        fontWeight: '500',
        textTransform: 'uppercase', 
        marginBottom: 10
    }
});

