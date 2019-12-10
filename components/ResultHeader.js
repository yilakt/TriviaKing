import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ResultHeader = (props) => {
 //
    return (
        <View style ={styles.header}>
                <Text style={styles.titleText}> {props.score} </Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        height: 45,
        backgroundColor: '#F63B42',
        borderBottomWidth: 1,
        borderBottomColor: '#D1D1D1',
        elevation: 3,
        paddingHorizontal: 15,
        alignItems: 'center',
 //       justifyContent: 'flex-start'
    },
    titleText:{
        color: 'white',
        paddingLeft: 5,
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: '900',
        textTransform: 'uppercase',     
    }
});

export default ResultHeader ;