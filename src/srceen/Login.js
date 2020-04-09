import * as React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

export const Login = () => {
    return(
        <View style={styles.main}>
            <TextInput placeholder="Логин"/>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center'
    }
})