import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
    return(
        <View style={styles.spinnerStyle}>
          <ActivityIndicator size={size || 'large'} color="#1b3039" />
        </View>
    );
};

const styles = {
    spinnerStyle:{
        marginTop: 22,
        justifyContent: 'center',
        alignItems: 'center',
    }
};


export default Spinner;