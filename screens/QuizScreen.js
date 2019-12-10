import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import StatusBar from '../components/StatusBar'
import Header from '../components/Header'
import QuizBody from '../components/QuizBody'
import QuizAction from '../components/QuizAction'

export default class QuizScreen extends Component {
    // Fetching questoins from firebase
    componentDidMount() {
        let questionsRef = firebase.database().ref('/results')
        questionsRef.on('value', this.gotData, this.errData); // get database data for products
    }

    // interprating & saving questions or logs error
    gotData = (data) => {
     let questions = data.val()
     this.setState({questions})
    }
    errData(err){
     console.log(err)
    }

    constructor(props) {
        super(props)
        this.state = {
            questions:{}
        }
    }

    render() {
        let questions = this.state.questions
        return (
          <View style={styles.container}>
                <StatusBar/>
                <Header 
                  title="TRIVIA KING"
                />
                <QuizBody
                    questionSet= {questions[0]}
                />
                <QuizAction
                
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
});
