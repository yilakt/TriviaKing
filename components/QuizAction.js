import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class QuizAction extends React.Component {
    //
    render(){
        return (
            <View style ={styles.container}>
                <View style={styles.body}>
                    <TouchableOpacity 
                        style={styles.imgContainerRed}
                        onPress = {this.props.setResponseFalse}>
                        <Image source={require('../assets/xmark.png')} style={{height: 30, width:30}}/>
                        <Text style={styles.titleText}> FALSE </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.imgContainerGreen}
                        onPress = {this.props.setResponseTrue}>
                        <Image source={require('../assets/yesmark.jpg')} style={{height:30, width:30}}/>
                        <Text style={styles.titleText}> TRUE </Text>
                    </TouchableOpacity>
                </View>        
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '20%',
        backgroundColor: 'white',
        alignItems: 'center',
        margin: 10,
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    imgContainerRed: {
        height: 85,
        width: 85,
        marginRight: 20,
        borderColor: '#F63B42',
        borderRadius: 85/2,//
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgContainerGreen: {
        height: 85,
        width: 85,
        marginLeft: 20,
        borderColor: 'green',
        borderRadius: 85/2,
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText:{
        color: 'black',
        paddingTop: 1,
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: '900',
        textTransform: 'uppercase',     
    }
});

