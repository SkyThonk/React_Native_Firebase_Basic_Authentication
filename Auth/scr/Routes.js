import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Login from './pages/Login';
import SingUp from './pages/SingUp';

class Routes extends Component {
    render(){
        return(
            <Router>
              <Stack key="root" hideNavBar={true}>
                 <Scene key="login" component={Login} title="Login"/>
                 <Scene key="singup" component={SingUp} title="SingUp"/>
              </Stack>
            </Router>
        );
    };
};

export default Routes;