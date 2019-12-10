import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import StatusBar from '../components/StatusBar'
import Header from '../components/Header'
import QuizBody from '../components/QuizBody'
import QuizAction from '../components/QuizAction'

export default class QuizScreen extends Component {
    render() {

    return (
      <View style={styles.container}>
            <StatusBar/>
            <Header 
                  title="TRIVIA KING"
            />
            <QuizBody

            />
      </View>
    );
  }
}
//
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
});
