import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class HomeAction extends React.Component {
    //
    render(){
        return (
            <View style ={styles.body}> 
                <TouchableOpacity 
                    style={styles.textContainer}
                    onPress = {this.props.startTrivia}>
                    <Text tyle={styles.titleText}> Get Started </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '20%',
        flexDirection: 'column',
        backgroundColor: 'white',
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

