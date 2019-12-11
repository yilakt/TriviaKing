import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../components/Header'
import ResultHeader from '../components/ResultHeader'
import ResultBody from '../components/ResultBody';
import ResultAction from '../components/ResultAction';

export default class ResultScreen extends Component {
   

    componentDidMount() {
        this.getScreenParams();
    }
    
    getScreenParams() {
        let { navigation } = this.props;
        let score = JSON.stringify(navigation.getParam('score'));
        let results = navigation.getParam('results');

        this.setState({score,results});
    }
    
    constructor(props) {
        super(props)
        this.state = {
            score: 0,
            results:[],
        }
    }

    restart() {
        this.props.navigation.navigate('HomeScreen')
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
            <FlatList     
                data={this.state.results}
                extraData={this.state}
                keyExtractor = {(item,index) => 
                    index.toString()
                }
                renderItem={ ({item,index}) => {
                    return(
                        <ResultBody
                            result={item}
                        />
                    )
                } }
            />
            <ResultAction
               restart = {() => this.restart()}
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
