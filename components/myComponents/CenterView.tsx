import React from 'react';
import { StyleSheet } from 'react-native';
import {View} from '../Themed'

const CenterView = (props :any) => {
    return (
    <View style={styles.screen}>
        {props.children}
    </View>)
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default CenterView