import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ResultHeader = (props) => {
 //
    return (
        <View style ={styles.header}>
            <Text> You scored </Text>
            <Text style={styles.titleText}> {props.score} / 10 </Text>        
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'column',
        height: 95,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#D1D1D1',
        elevation: 3,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText:{
        color: 'black',
        paddingLeft: 5,
        fontSize: 40,
        fontStyle: 'italic',
        fontWeight: '900',
        textTransform: 'uppercase',     
    }
});

export default ResultHeader ;