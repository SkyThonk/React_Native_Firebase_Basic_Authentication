import React, { Component } from 'react';
import { View } from 'react-native';
import Routes from './Routes';
import firebase from 'firebase';
import Button from './components/Button';
import Spinner from './components/Spinner';

class App extends Component {
    
    state = { loggeedIn:null }

    componentWillMount() {
        firebase.initializeApp({
          apiKey: '.....................',
          authDomain: '.....................',
          databaseURL: '.....................',
          projectId: '.....................',
          storageBucket: '.....................',
          messagingSenderId: '.....................'
            });

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({ loggeedIn: true});
            } else {
                this.setState({ loggeedIn: false});
            }
        })
        
      };


    renderContents() {
        switch(this.state.loggeedIn){
            case true:
               return (
                   <Button onPress={() => firebase.auth().signOut()}>
                   Log Out
                   </Button>
                );
            case false:
               return <Routes />
            default:
               return <Spinner />
        } 
    }

    render() {
        return(
            <View style={{flex:1}}>
              {this.renderContents()}
            </View>
        );
    };
};

export default App;