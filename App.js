import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import * as firebase from 'firebase';
import {firebaseConfig} from './config'
import HomeScreen from './screens/HomeScreen.js';
import QuizScreen from './screens/QuizScreen.js';
import ResultScreen from './screens/ResultScreen.js';

firebase.initializeApp(firebaseConfig); 

const AppSwitchNavigator = createSwitchNavigator({
    HomeScreen:HomeScreen,
    QuizScreen:QuizScreen,
    ResultScreen:ResultScreen
  })

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default class App extends React.Component {
    render() {
        const statusBar = <View style={styles.statusBar}></View>

    return (
      <AppNavigator />
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
