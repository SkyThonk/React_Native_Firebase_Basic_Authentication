import React from 'react';
import { Image, View, Text } from 'react-native';

const Logo = () => {
    return(
        <View style={styles.container}>
           <Image style={styles.logoStyle} source={require('../images/loogoo.jpg')}/>
           <Text style={styles.logoText}>Welcome to my App</Text>
        </View>
    );
};

styles={
    logoStyle:{
        width:350,
        height:350,
    },
    logoText:{
        marginTop: -50,
        fontSize: 24,
        color:'rgba(255, 255, 255,0.7)',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -70,
    },
};


export default Logo;