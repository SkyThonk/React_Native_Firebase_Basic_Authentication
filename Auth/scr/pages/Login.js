import React, { Component } from 'react';
import firebase from 'firebase'
import { View, StatusBar, TextInput, Text, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo';
import Button from '../components/Button';
import { Actions } from 'react-native-router-flux';
import Spinner from '../components/Spinner';

class Login extends Component {


    state={ email:'', password:'', error:'', loading: false };

    onButtonPress() {
        const { email, password } = this.state

        this.setState({ error:'', loading: true })

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSucess.bind(this))
        .catch(this.onLoginFail.bind(this));
    }

    onLoginFail() {
        this.setState({
            error: 'Wrong email or password',
            loading: false
        })
    }

    onLoginSucess() {
        this.setState({
            email:'',
            password:'',
            loading: false,
            error:''
        });
    }

    renderButton() {
        if(this.state.loading){
            return <Spinner />;
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
              Login
            </Button>
        );
    }

    singup() {
        Actions.singup()
    }

    render() {
        return(
            <View style={styles.container}>
              <StatusBar
                backgroundColor="#1c313a"
                barStyle="light-content"
               />
               <Logo />
               
               <TextInput
                style={styles.textInputStyles}
                underlineColorAndroid='transparent'
                placeholder="Email"
                placeholderTextColor='#ffffff'
                selectionColor='#1b3039'
                keyboardType='email-address'
                onSubmitEditing={()=> this.password.focus()}
                onChangeText={email => this.setState({ email })}
                />

                <TextInput
                style={styles.textInputStyles2}
                underlineColorAndroid='transparent'
                placeholder="Password"
                placeholderTextColor='#ffffff'
                secureTextEntry
                selectionColor='#1b3039'
                ref={(input) => this.password = input}
                onChangeText={password => this.setState({ password })}
                />

                <View>{this.renderButton()}</View>
            

                <Text style={styles.errorStyle}>
                  {this.state.error}
                </Text>

                <View style={styles.singUpViewStyle}>
                   <Text style={styles.singupText}>Don't have an account yet?  </Text>
                   <TouchableOpacity onPress={this.singup}>
                        <Text style={styles.SingUpStyle}>Singup</Text>
                   </TouchableOpacity>
                </View>
            </View>
        );
    };
};

const styles = {
    container: {
        flex: 1,
        backgroundColor:'#455a64',
        alignItems: 'center',
        justifyContent: 'center',        
    },
    textInputStyles:{
        width: 320,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginTop: 80,
        borderRadius: 22,
        paddingLeft: 23,
        paddingRight: 23,
        fontSize: 17,
        color:'#ffffff'
    },
    textInputStyles2:{
        width: 320,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 22,
        paddingLeft: 23,
        paddingRight: 23,
        fontSize: 17,
        color:'#ffffff',
        marginTop: 20,
    },
    singUpViewStyle:{
        marginTop: 35,
        flexDirection: 'row',
    },
    singupText:{
        fontSize: 18,
        color:'rgba(255, 255, 255, 0.7)'
    },
    SingUpStyle:{
        fontSize: 18,
        color:'#ffffff',
        fontWeight: '400',
    },
    errorStyle:{
        fontSize: 22,
        color: 'rgba(240, 73, 13, 0.7)',
        fontWeight: '400',
        paddingTop: 20,
    }
};

export default Login;