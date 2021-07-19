import React from 'react';
import { StyleSheet} from 'react-native';
import {View, Text} from '../../Themed'
import CenterView from '../CenterView';

const CenterViewInfo = () => {
    return(
        <CenterView>
            <View style={styles.exampleContainer}>
            <Text style={styles.example}>{"<CenterView></CenterView>"}</Text>
            </View>
            <Text>View that centers content vertically</Text>
            <Text>And horizontally</Text>
            <Text style={{textAlign: 'center'}}>Use like you would a normal view that wraps entire component</Text>
            <Text>Optional Props:</Text>
            <Text>style: overwrites default styles</Text>
        </CenterView>
    )
}

const styles = StyleSheet.create({
    exampleContainer: {
        backgroundColor: '#222',
        paddingVertical: 10,
        borderRadius: 8,
        margin: 20
    },
    example: {
        fontSize: 15,
        paddingHorizontal: 15,
        color: 'white'
    }
})
export default CenterViewInfo