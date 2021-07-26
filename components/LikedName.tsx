import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';

const LikedName = (props :any) => {
    return (
        <View style={styles.nameRow}>
                    <Text>{props.nameData.item.name}</Text>
                    <Text>{props.nameData.item.id}</Text>
        </View>
    )
}

export default LikedName

const styles = StyleSheet.create({
    nameRow: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',

    }
})