import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class ResultAction extends React.Component {
    //
    render(){
        return (
            <View style ={styles.container}>
                <View style={styles.body}>
                    <Button
                        title='PLAY AGAIN'
                        onPress = {this.props.restart} />
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
        justifyContent:'flex-end'
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    imgContainer: {
        height: 85,
        width: 85,
        marginRight: 20,
        borderColor: '#F63B42',
        borderRadius: 85/2,//
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

