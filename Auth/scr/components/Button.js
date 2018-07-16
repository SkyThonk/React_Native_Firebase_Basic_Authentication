import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
          <Text style={styles.textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle:{
        backgroundColor: '#1b3039',
        width:320,
        borderRadius: 5,
        borderWidth: 1,
        borderRadius: 22,
        marginTop: 22,
    },
    textStyle:{
        alignSelf: 'center',
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '600',
        paddingVertical: 10,
    }
};

export default Button;