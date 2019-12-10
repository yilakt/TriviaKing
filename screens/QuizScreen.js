import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import StatusBar from '../components/StatusBar'
import Header from '../components/Header'
import QuizBody from '../components/QuizBody'
import QuizAction from '../components/QuizAction'

export default class QuizScreen extends Component {
    // gets questions from nav
    componentDidMount() {
        let { navigation } = this.props;
        let questions = navigation.getParam('questions');
        this.setQuestions(questions);
    }

    // saves questions 
    setQuestions(questions) {
        this.setState({questions})
    }

    //constructor
    constructor(props) {
        super(props)
        this.state = {
            response: true,
            index: 0,
            questions:[],
            score: 0,
            totalQuestions: 10,
        }
    }
    
    //checks true responses
    checkResponseTrue = () => {
        let response = true
        let currentIndex = this.state.index
        let nextIndex = currentIndex + 1
        let correctResponse = this.state.questions[currentIndex].correct_answer    
        let score = this.state.score
        correctResponse = correctResponse.toLowerCase()
        correctResponse = (correctResponse === "true")

        if (response === correctResponse) {
            score = score + 1
            this.setState({score, index:nextIndex})
        }
        else {
          this.setState({
            index:nextIndex 
        })
        }
    }

    //checks false responses
    checkResponseFalse = () => {
        let response = false
        let currentIndex = this.state.index
        let nextIndex = currentIndex + 1
        let correctResponse = this.state.questions[currentIndex].correct_answer    
        let score = this.state.score
        correctResponse = correctResponse.toLowerCase()
        correctResponse = (correctResponse === "true")

        if (response === correctResponse) {
            score = score + 1
            this.setState({score, index:nextIndex})
        }
        else {
          this.setState({
            index:nextIndex 
        })
        }
    }

    render() {
        console.log(this.state.index)
        if(this.state.index > 2){ this.props.navigation.navigate('ResultScreen',{score:this.state.score})}

        let questions = this.state.questions
        return (
          <View style={styles.container}>
                <StatusBar/>
                <Header 
                  title="TRIVIA KING"
                />
                <QuizBody
                    question= {questions[this.state.index]}
                />
                <QuizAction
                    response = {response => this.setState({response:true})}
                    checkResponseTrue= {() => this.checkResponseTrue()}
                    checkResponseFalse= {() => this.checkResponseFalse()}
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
