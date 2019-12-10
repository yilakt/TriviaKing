import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header'

export default class HomeScreen extends Component {
    render() {
        const statusBar = <View style={styles.statusBar}></View>

    return (
      <View style={styles.container}>
            {statusBar}
            <Header 
                  title="TriviaKing"
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
 statusBar: {
    backgroundColor: '#F63B42', //#7fffd4
    height: 30
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
