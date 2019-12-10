import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = (props) => {
 //
    return (
        <View style ={styles.header}>

                <Image source={require('../assets/logo_triviaKing.png')} style={{height: 40, width:40}}>
                </Image>
                <Text style={styles.titleText}> {props.title} </Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        height: 55,
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
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: '900',
        textTransform: 'uppercase',     
    }
});

export default Header ;