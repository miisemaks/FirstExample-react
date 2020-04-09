import * as React from 'react';
import {View, 
        StyleSheet, 
        TextInput,
        Button} from 'react-native';

export const Login = () => {
    return(
        <View style={styles.main}>
            <TextInput placeholder="Логин"/>
            <Button title="Войти"/>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center'
    }
})