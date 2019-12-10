import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = (props) => {
 //
    return (
        <View style ={styles.header}>

                <Image source={require('../assets/logo_triviaKing.png')} style={{height: 24, width:24}}>
                </Image>
                <Text style={styles.titleText}> {props.title} </Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        color:'blue',
        width: '100%',
        flexDirection: 'row',
        height: 55,
        backgroundColor: '#F63B42',
        borderBottomWidth: 1,
        borderBottomColor: '#D1D1D1',
        elevation: 3,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'flex-start'
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

export default Header ;