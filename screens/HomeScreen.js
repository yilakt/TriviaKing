import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import HomeBody from '../components/HomeBody'
import StatusBar from '../components/StatusBar'

export default class HomeScreen extends Component {
    render() {
    return (
      <View style={styles.container}>
            <StatusBar/>
            <HomeBody 
                  title="TRIVIA KING"
            />
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  justifyContent: 'center',
  //  alignItems: 'center',
    backgroundColor: 'white',
    },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
