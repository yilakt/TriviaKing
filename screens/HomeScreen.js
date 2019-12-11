import React from 'react';
import { Platform, StyleSheet, Text, View, YellowBox } from 'react-native';
import HomeBody from '../components/HomeBody'
import StatusBar from '../components/StatusBar'
import HomeAction from '../components/HomeAction';
import * as firebase from 'firebase';

export default class HomeScreen extends React.Component {
    // Gets questions
    componentDidMount() {
        let questionsRef = firebase.database().ref('/results')
        questionsRef.on('value', this.gotData, this.errData); // get database data for products
    }

    // gets value of references & saves  questions or logs error
    gotData = (data) => {
     let questions = data.val()
     this.setState({questions})
    }
    errData(err){
     console.log(err)
    }

    //constructor
    constructor(props) {
        super(props)
        this.state = {
            questions:[]
        }
    }
    //
    startTrivia() {
        let questions = this.state.questions
        this.props.navigation.navigate('QuizScreen', {questions})
    }

    render() {

        return (
          <View style={styles.container}>
                <StatusBar/>
                <HomeBody 
                    title="TRIVIA KING"
                    width= {this.state.width}
                />
                <HomeAction 
                    startTrivia={ () => this.startTrivia()}
                />
          </View>
    );
  }
}
// d
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
