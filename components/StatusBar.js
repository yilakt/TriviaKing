import React from 'react';
import {StyleSheet, View} from 'react-native';

const StatusBar = (props) => {
 //
    return (
        <View style ={styles.statusBar}>          
        </View>
    )
}

const styles = StyleSheet.create({
    statusBar: {
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
    statusBar: {
        backgroundColor: '#F63B42', //#7fffd4
        height: 30
    }
});

export default StatusBar ;