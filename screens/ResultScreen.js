import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header'
import ResultHeader from '../components/ResultHeader'

export default class ResultScreen extends Component {

    componentDidMount() {
        let { navigation } = this.props;
        let score = navigation.getParam('score');
        this.setState({score});
    }

    constructor(props) {
        super(props)
        this.state = {
            score: 0
        }
    }
    render() {
        const statusBar = <View style={styles.statusBar}></View>

    return (
      <View style={styles.container}>
            {statusBar}
            <Header 
              title="TRIVIA KING"
            />
            <ResultHeader
               score= {this.state.score}            
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
