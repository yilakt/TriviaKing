import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import HomeBody from '../components/HomeBody'
import StatusBar from '../components/StatusBar'
import HomeAction from '../components/HomeAction';

export default class HomeScreen extends React.Component {

    startTrivia() {
        this.props.navigation.navigate('QuizScreen')
    }

    render() {
        return (
          <View style={styles.container}>
                <StatusBar/>
                <HomeBody 
                      title="TRIVIA KING"
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
