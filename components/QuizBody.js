import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class QuizBody extends React.Component {
    //
    render(){
        return (
            <View style ={styles.body}> 
                <View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        width: '100%',
        flexDirection: 'column',
        height: '75%',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#D1D1D1',
        alignItems: 'center',
        justifyContent: 'center'
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

