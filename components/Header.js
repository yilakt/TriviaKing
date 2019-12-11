import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = (props) => {
 //
    return (
        <View style ={styles.header}>

            <Image source={require('../assets/logo_triviaKing.png')} style={{height: 28, width:28}}>
            </Image>
            <Text
                adjustsFontSizeToFit
                style={styles.titleText}> {props.title} </Text>
            
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
        fontSize: 18,
        fontStyle: 'italic',
        fontWeight: '900',
        textTransform: 'uppercase',  
        flexWrap:'wrap'
    }
});

export default Header ;