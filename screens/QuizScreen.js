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
            results:[]
        }
    }
    
    //checks true responses
    checkResponseTrue = () => {
        let response = true
        let currentIndex = this.state.index
        let nextIndex = currentIndex + 1
        let currentQuestionSet = this.state.questions[currentIndex]
        let correctResponse = this.state.questions[currentIndex].correct_answer    
        let score = this.state.score
        let results = this.state.results

        correctResponse = correctResponse.toLowerCase()
        correctResponse = (correctResponse === "true")

        if (response === correctResponse) { // right answer
            score = score + 1
            result = {answer:'right',questionSet:currentQuestionSet}
            results.push(result)
            this.setState({score, index:nextIndex, results})
        }
        else { // wrong answer
          result = {answer:'wrong',questionSet:currentQuestionSet}
          results.push(result)
          this.setState({ index:nextIndex, results })
        }
    }

    //checks false responses
    checkResponseFalse = () => {
        let response = false
        let currentIndex = this.state.index
        let nextIndex = currentIndex + 1
        let currentQuestionSet = this.state.questions[currentIndex]
        let correctResponse = this.state.questions[currentIndex].correct_answer    
        let score = this.state.score
        let result = {}
        let results = this.state.results
        correctResponse = correctResponse.toLowerCase()
        correctResponse = (correctResponse === "true")

        if (response === correctResponse) { // righ answer
            score = score + 1
            result = {answer:'right',questionSet:currentQuestionSet}
            results.push(result)
            this.setState({score, index:nextIndex, results})
        }
        else { // wrong answer
          result = {answer:'wrong',questionSet:currentQuestionSet}
          results.push(result)
          this.setState({ index:nextIndex , results })
        }
    }

    switchScreen() {
        this.props.navigation.navigate('ResultScreen',{results:this.state.results,score:this.state.score})
    }

    render() {
        if(this.state.index > 9){this.switchScreen()}

        let questions = this.state.questions
        let question= {}
        if(questions != undefined){
            question= questions[this.state.index]
        }
        return (
          <View style={styles.container}>
                <StatusBar/>
                <Header 
                  title={question != undefined && question.category}
                />
                <QuizBody
                    question= {questions[this.state.index]}
                />
                <QuizAction
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
    backgroundColor: 'white',
    },
 statusBar: {
    backgroundColor: '#F63B42', //#7fffd4
    height: 30
  },
});
